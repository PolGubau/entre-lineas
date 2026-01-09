/**
 * Toggle Favorite Use Case
 * Alterna el estado de favorito de un poema
 */

import type { FavoritesRepository } from "../../domain/repositories/favorites.repository";

export class ToggleFavoriteUseCase {
	constructor(private readonly favoritesRepository: FavoritesRepository) {}

	/**
	 * Alterna el estado de favorito
	 * @returns true si ahora es favorito, false si se eliminó
	 */
	async execute(poemId: string): Promise<boolean> {
		if (!poemId) {
			throw new Error("Poem ID is required");
		}

		return await this.favoritesRepository.toggleFavorite(poemId);
	}
}
