/**
 * Get Favorites Use Case
 * Obtiene todos los IDs de poemas favoritos
 */

import type { FavoritesRepository } from "../../domain/repositories/favorites.repository";

export class GetFavoritesUseCase {
	constructor(private readonly favoritesRepository: FavoritesRepository) {}

	async execute(): Promise<string[]> {
		return await this.favoritesRepository.getFavorites();
	}
}
