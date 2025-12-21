import {
	createCollection,
	localOnlyCollectionOptions,
} from "@tanstack/react-db";
import { poemasData } from "~/data/poems.data";
import { type Poem, PoemSchema } from "../domain/poem.types";

// Colección de poemas
export const poemsCollection = createCollection(
	localOnlyCollectionOptions({
		getKey: (poem: Poem) => poem.id,
		schema: PoemSchema,
		initialData: poemasData,
	}),
);

// Queries específicas para la UI
export const poemsQueryOptions = {
	all: () => ({
		queryKey: ["poems", "all"],
		queryFn: async () => {
			const poems = poemsCollection;
			return Array.from(poems.values());
		},
	}),

	byId: (id: string) => ({
		queryKey: ["poems", "byId", id],
		queryFn: async () => {
			return poemsCollection.get(id);
		},
	}),

	bySlug: (slug: string) => ({
		queryKey: ["poems", "bySlug", slug],
		queryFn: async () => {
			const poems = poemsCollection;
			return Array.from(poems.values()).find((p) => p.slug === slug);
		},
	}),

	byAutor: (autor: string) => ({
		queryKey: ["poems", "byAutor", autor],
		queryFn: async () => {
			const poems = poemsCollection;
			return Array.from(poems.values()).filter((p) => p.author === autor);
		},
	}),

	search: (query: string) => ({
		queryKey: ["poems", "search", query],
		queryFn: async () => {
			const poems = poemsCollection;
			return Array.from(poems.values()).filter(
				(poem) =>
					poem.title.toLowerCase().includes(query.toLowerCase()) ||
					poem.author.toLowerCase().includes(query.toLowerCase()) ||
					poem.analysis.themes.some((t: string) =>
						t.toLowerCase().includes(query.toLowerCase()),
					),
			);
		},
	}),
};
