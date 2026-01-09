/**
 * Get Poems Use Case
 * Obtiene todos los poemas del sistema
 */

import type { Poem } from "../../domain/poem.types";
import type { PoemsRepository } from "../../domain/repositories/poems.repository";

export class GetPoemsUseCase {
	constructor(private readonly poemsRepository: PoemsRepository) {}

	async execute(): Promise<Poem[]> {
		return await this.poemsRepository.getAll();
	}
}
