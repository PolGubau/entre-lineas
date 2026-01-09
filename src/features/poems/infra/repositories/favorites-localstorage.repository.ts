/**
 * Favorites Repository - LocalStorage Implementation
 * Implementación concreta usando localStorage del navegador
 */

import { POEMS_CONSTANTS } from "../../domain/constants";
import type { FavoritesRepository } from "../../domain/repositories/favorites.repository";

export class FavoritesLocalStorageRepository implements FavoritesRepository {
	private readonly storageKey = POEMS_CONSTANTS.STORAGE.FAVORITES_KEY;

	async getFavorites(): Promise<string[]> {
		if (typeof window === "undefined") return [];

		try {
			const stored = localStorage.getItem(this.storageKey);
			return stored ? JSON.parse(stored) : [];
		} catch (error) {
			console.error("Error reading favorites:", error);
			return [];
		}
	}

	async addFavorite(poemId: string): Promise<void> {
		const favorites = await this.getFavorites();
		if (!favorites.includes(poemId)) {
			await this.saveFavorites([...favorites, poemId]);
		}
	}

	async removeFavorite(poemId: string): Promise<void> {
		const favorites = await this.getFavorites();
		await this.saveFavorites(favorites.filter((id) => id !== poemId));
	}

	async isFavorite(poemId: string): Promise<boolean> {
		const favorites = await this.getFavorites();
		return favorites.includes(poemId);
	}

	async toggleFavorite(poemId: string): Promise<boolean> {
		const isCurrentlyFavorite = await this.isFavorite(poemId);

		if (isCurrentlyFavorite) {
			await this.removeFavorite(poemId);
			return false;
		}

		await this.addFavorite(poemId);
		return true;
	}

	private async saveFavorites(favorites: string[]): Promise<void> {
		if (typeof window === "undefined") return;

		try {
			localStorage.setItem(this.storageKey, JSON.stringify(favorites));
		} catch (error) {
			console.error("Error saving favorites:", error);
			throw new Error("Failed to save favorites");
		}
	}
}
