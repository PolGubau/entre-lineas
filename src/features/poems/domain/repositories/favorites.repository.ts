/**
 * Favorites Repository Interface (Port)
 * Define el contrato para operaciones con favoritos
 */

export interface FavoritesRepository {
	/**
	 * Obtiene todos los IDs de poemas favoritos
	 */
	getFavorites(): Promise<string[]>;

	/**
	 * Añade un poema a favoritos
	 */
	addFavorite(poemId: string): Promise<void>;

	/**
	 * Elimina un poema de favoritos
	 */
	removeFavorite(poemId: string): Promise<void>;

	/**
	 * Verifica si un poema está en favoritos
	 */
	isFavorite(poemId: string): Promise<boolean>;

	/**
	 * Toggle del estado de favorito
	 */
	toggleFavorite(poemId: string): Promise<boolean>;
}
