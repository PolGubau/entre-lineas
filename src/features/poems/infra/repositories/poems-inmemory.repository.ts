/**
 * Poems Repository - In-Memory Implementation
 * Implementación con datos estáticos en memoria
 */

import { poemasData } from "~/data/poems.data";
import type { Poem } from "../../domain/poem.types";
import type { PoemsRepository } from "../../domain/repositories/poems.repository";

export class PoemsInMemoryRepository implements PoemsRepository {
	private readonly poems: Poem[];
	private readonly poemsById: Map<string, Poem>;
	private readonly poemsBySlug: Map<string, Poem>;

	constructor() {
		this.poems = poemasData;
		this.poemsById = new Map(this.poems.map((p) => [p.id, p]));
		this.poemsBySlug = new Map(this.poems.map((p) => [p.slug, p]));
	}

	async getAll(): Promise<Poem[]> {
		return this.poems;
	}

	async getById(id: string): Promise<Poem | undefined> {
		return this.poemsById.get(id);
	}

	async getBySlug(slug: string): Promise<Poem | undefined> {
		return this.poemsBySlug.get(slug);
	}

	async getByAuthor(author: string): Promise<Poem[]> {
		return this.poems.filter((p) => p.author === author);
	}
}
