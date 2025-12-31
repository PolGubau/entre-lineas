import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { poemsQueryOptions } from "~/features/poems/infra/api";
import type { Poem } from "../domain/poem.types";

export interface PoemsFilters {
	search?: string;
	author?: string;
	movement?: string;
	era?: string;
	themes?: string[];
}

export type SortBy = "title" | "author" | "date" | "favorites";

/**
 * Ordena los poemas según el criterio especificado
 * Los favoritos siempre tienen prioridad si se proporciona la lista
 */
function sortPoems(
	poems: Poem[],
	sortBy: SortBy = "title",
	favoriteIds?: string[],
): Poem[] {
	const sorted = [...poems].sort((a, b) => {
		// Primero: favoritos siempre arriba
		if (favoriteIds && favoriteIds.length > 0) {
			const aIsFavorite = favoriteIds.includes(a.id);
			const bIsFavorite = favoriteIds.includes(b.id);
			if (aIsFavorite && !bIsFavorite) return -1;
			if (!aIsFavorite && bIsFavorite) return 1;
		}

		// Segundo: ordenación secundaria por el criterio seleccionado
		switch (sortBy) {
			case "title":
				return a.title.localeCompare(b.title, "es");
			case "author":
				return a.author.localeCompare(b.author, "es");
			case "date": {
				const dateA = a.context.publicationDate;
				const dateB = b.context.publicationDate;
				return dateB.getTime() - dateA.getTime();
			}
			case "favorites":
				return 0; // Ya ordenado por favoritos arriba
			default:
				return 0;
		}
	});

	return sorted;
}

/**
 * Hook para obtener todos los poemas con filtros opcionales
 * La lógica de filtrado está encapsulada aquí, no en la UI
 * Usa useQuery para evitar suspensión en cada cambio de filtro
 */
export function usePoems(
	filters?: PoemsFilters,
	favoriteIds?: string[],
	sortBy: SortBy = "title",
) {
	return useQuery<Poem[]>({
		queryKey: ["poems", "filtered", filters, favoriteIds, sortBy],
		queryFn: () => {
			const poems = poemsQueryOptions.all().queryFn();

			if (!filters) return sortPoems(poems, sortBy, favoriteIds);

			const searchLower = filters.search?.toLowerCase();

			const filteredPoems = poems.filter((poem: Poem) => {
				// Filtro de búsqueda general
				if (searchLower) {
					const matchesTitle = poem.title.toLowerCase().includes(searchLower);
					const matchesAuthor = poem.author.toLowerCase().includes(searchLower);
					const matchesTematica = poem.analysis.themes.some((t: string) =>
						t.toLowerCase().includes(searchLower),
					);

					if (!matchesTitle && !matchesAuthor && !matchesTematica) {
						return false;
					}
				}

				// Filtro por autor
				if (filters.author && poem.author !== filters.author) {
					return false;
				}

				// Filtro por movimiento literario
				if (filters.movement && poem.context.movement !== filters.movement) {
					return false;
				}

				// Filtro por época
				if (filters.era && poem.context.era !== filters.era) {
					return false;
				}

				// Filtro por temáticas (al menos una debe coincidir)
				if (filters.themes && filters.themes.length > 0) {
					const hasMatchingTematica = filters.themes.some((tema) =>
						poem.analysis.themes.includes(tema),
					);
					if (!hasMatchingTematica) {
						return false;
					}
				}

				return true;
			});

			return sortPoems(filteredPoems, sortBy, favoriteIds);
		},
		staleTime: Number.POSITIVE_INFINITY, // Datos estáticos
		gcTime: Number.POSITIVE_INFINITY, // No borrar nunca del cache
	});
} /**
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
		queryFn: () => {
			const poems = poemsQueryOptions.all().queryFn();
			const authors = new Set(poems.map((p: Poem) => p.author));
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
		queryFn: () => {
			const poems = poemsQueryOptions.all().queryFn();
			const movements = new Set(
				poems
					.map((p: Poem) => p.context.movement)
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
		queryFn: () => {
			const poems = poemsQueryOptions.all().queryFn();
			const tematicas = new Set<string>();
			poems.forEach((p: Poem) => {
				p.analysis.themes.forEach((t: string) => {
					tematicas.add(t);
				});
			});
			return Array.from(tematicas).sort();
		},
	});
}
