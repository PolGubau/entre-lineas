import { useSuspenseQuery } from "@tanstack/react-query";
import { poemsQueryOptions } from "~/features/poems/infra/api";
import type { Poem } from "../domain/poem.types";

export interface PoemsFilters {
	search?: string;
	autor?: string;
	movimiento?: string;
	epoca?: string;
	tematica?: string[];
}

/**
 * Hook para obtener todos los poemas con filtros opcionales
 * La lógica de filtrado está encapsulada aquí, no en la UI
 */
export function usePoems(filters?: PoemsFilters) {
	return useSuspenseQuery<Poem[]>({
		queryKey: ["poems", "filtered", filters],
		queryFn: async () => {
			const poems = await poemsQueryOptions.all().queryFn();

			if (!filters) return poems;

			return poems.filter((poem: Poem) => {
				// Filtro de búsqueda general
				if (filters.search) {
					const searchLower = filters.search.toLowerCase();
					const matchesTitle = poem.titulo.toLowerCase().includes(searchLower);
					const matchesAuthor = poem.autor.toLowerCase().includes(searchLower);
					const matchesTematica = poem.analisis.tematica.some((t: string) =>
						t.toLowerCase().includes(searchLower),
					);

					if (!matchesTitle && !matchesAuthor && !matchesTematica) {
						return false;
					}
				}

				// Filtro por autor
				if (filters.autor && poem.autor !== filters.autor) {
					return false;
				}

				// Filtro por movimiento literario
				if (
					filters.movimiento &&
					poem.contexto.movimiento !== filters.movimiento
				) {
					return false;
				}

				// Filtro por época
				if (filters.epoca && poem.contexto.epoca !== filters.epoca) {
					return false;
				}

				// Filtro por temáticas (al menos una debe coincidir)
				if (filters.tematica && filters.tematica.length > 0) {
					const hasMatchingTematica = filters.tematica.some((tema) =>
						poem.analisis.tematica.includes(tema),
					);
					if (!hasMatchingTematica) {
						return false;
					}
				}

				return true;
			});
		},
	});
}

/**
 * Hook para obtener un poema por su slug
 */
export function usePoemBySlug(slug: string) {
	return useSuspenseQuery<Poem | undefined>(poemsQueryOptions.bySlug(slug));
}

/**
 * Hook para obtener todos los autores únicos
 */
export function useAuthors() {
	return useSuspenseQuery<string[]>({
		queryKey: ["poems", "authors"],
		queryFn: async () => {
			const poems = await poemsQueryOptions.all().queryFn();
			const authors = new Set(poems.map((p: Poem) => p.autor));
			return Array.from(authors).sort();
		},
	});
}

/**
 * Hook para obtener todos los movimientos literarios únicos
 */
export function useMovements() {
	return useSuspenseQuery<string[]>({
		queryKey: ["poems", "movements"],
		queryFn: async () => {
			const poems = await poemsQueryOptions.all().queryFn();
			const movements = new Set(
				poems
					.map((p: Poem) => p.contexto.movimiento)
					.filter((m): m is string => m !== undefined),
			);
			return Array.from(movements).sort();
		},
	});
}

/**
 * Hook para obtener todas las temáticas únicas
 */
export function useTematicas() {
	return useSuspenseQuery<string[]>({
		queryKey: ["poems", "tematicas"],
		queryFn: async () => {
			const poems = await poemsQueryOptions.all().queryFn();
			const tematicas = new Set<string>();
			poems.forEach((p: Poem) => {
				p.analisis.tematica.forEach((t: string) => {
					tematicas.add(t);
				});
			});
			return Array.from(tematicas).sort();
		},
	});
}
