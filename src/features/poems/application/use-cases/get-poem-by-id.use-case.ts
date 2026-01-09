/**
 * Get Poem By ID Use Case
 * Obtiene un poema específico por su ID
 */

import type { Poem } from "../../domain/poem.types";
import type { PoemsRepository } from "../../domain/repositories/poems.repository";

export class GetPoemByIdUseCase {
	constructor(private readonly poemsRepository: PoemsRepository) {}

	async execute(poemId: string): Promise<Poem | undefined> {
		if (!poemId) {
			throw new Error("Poem ID is required");
		}

		return await this.poemsRepository.getById(poemId);
	}
}
