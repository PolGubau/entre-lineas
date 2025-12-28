import {
	createCollection,
	localOnlyCollectionOptions,
} from "@tanstack/react-db";
import { poemasData } from "~/data/poems.data";
import type { Poem } from "../domain/poem.types";

// Cache de poemas en memoria para evitar conversiones repetidas
let poemsCache: Poem[] | null = null;

const getPoemsArray = (): Poem[] => {
	if (!poemsCache) {
		poemsCache = Array.from(poemsCollection.values());
	}
	return poemsCache;
};

// Colección de poemas
export const poemsCollection = createCollection(
	localOnlyCollectionOptions({
		getKey: (poem: Poem) => poem.id,
		// Eliminar validación de schema en runtime para mejor performance
		// schema: PoemSchema,
		initialData: poemasData,
	}),
);

// Queries específicas para la UI
export const poemsQueryOptions = {
	all: () => ({
		queryKey: ["poems", "all"],
		queryFn: async () => getPoemsArray(),
		staleTime: Number.POSITIVE_INFINITY, // Los datos son estáticos, nunca expiran
	}),

	byId: (id: string) => ({
		queryKey: ["poems", "byId", id],
		queryFn: async () => poemsCollection.get(id),
		staleTime: Number.POSITIVE_INFINITY,
	}),

	bySlug: (slug: string) => ({
		queryKey: ["poems", "bySlug", slug],
		queryFn: async () => getPoemsArray().find((p) => p.slug === slug),
		staleTime: Number.POSITIVE_INFINITY,
	}),

	byAutor: (autor: string) => ({
		queryKey: ["poems", "byAutor", autor],
		queryFn: async () => getPoemsArray().filter((p) => p.author === autor),
		staleTime: Number.POSITIVE_INFINITY,
	}),

	search: (query: string) => ({
		queryKey: ["poems", "search", query],
		queryFn: async () => {
			const lowerQuery = query.toLowerCase();
			return getPoemsArray().filter(
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
