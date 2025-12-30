import { poemasData } from "~/data/poems.data";
import type { Poem } from "../domain/poem.types";

// Datos estáticos de poemas
const poems: Poem[] = poemasData;

// Índices para lookups O(1)
const poemsById = new Map(poems.map((p) => [p.id, p]));
const poemsBySlug = new Map(poems.map((p) => [p.slug, p]));

// Queries específicas para la UI
export const poemsQueryOptions = {
	all: () => ({
		queryKey: ["poems", "all"],
		queryFn: async () => poems,
		staleTime: Number.POSITIVE_INFINITY, // Los datos son estáticos, nunca expiran
	}),

	byId: (id: string) => ({
		queryKey: ["poems", "byId", id],
		queryFn: async () => poemsById.get(id) ?? null,
		staleTime: Number.POSITIVE_INFINITY,
	}),

	bySlug: (slug: string) => ({
		queryKey: ["poems", "bySlug", slug],
		queryFn: async () => poemsBySlug.get(slug) ?? null,
		staleTime: Number.POSITIVE_INFINITY,
	}),

	byAutor: (autor: string) => ({
		queryKey: ["poems", "byAutor", autor],
		queryFn: async () => poems.filter((p) => p.author === autor),
		staleTime: Number.POSITIVE_INFINITY,
	}),

	search: (query: string) => ({
		queryKey: ["poems", "search", query],
		queryFn: async () => {
			const lowerQuery = query.toLowerCase();
			return poems.filter(
				(poem) =>
					poem.title.toLowerCase().includes(lowerQuery) ||
					poem.author.toLowerCase().includes(lowerQuery) ||
					poem.analysis.themes.some((t: string) =>
						t.toLowerCase().includes(lowerQuery),
					),
			);
		},
		staleTime: 60000, // 1 minuto para búsquedas
	}),
};
