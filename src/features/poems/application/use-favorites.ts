import { useCallback, useEffect, useState } from "react";

const FAVORITES_KEY = "poem-favorites";

/**
 * Hook para manejar favoritos de poemas
 * Los favoritos se guardan en localStorage
 */
export function useFavorites() {
	const [favorites, setFavorites] = useState<string[]>(() => {
		if (typeof window === "undefined") return [];
		try {
			const stored = localStorage.getItem(FAVORITES_KEY);
			return stored ? JSON.parse(stored) : [];
		} catch {
			return [];
		}
	});

	// Sincronizar con localStorage cuando cambian los favoritos
	useEffect(() => {
		if (typeof window === "undefined") return;
		try {
			localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
		} catch (error) {
			console.error("Error saving favorites:", error);
		}
	}, [favorites]);

	const toggleFavorite = useCallback((poemId: string) => {
		setFavorites((prev) =>
			prev.includes(poemId)
				? prev.filter((id) => id !== poemId)
				: [...prev, poemId],
		);
	}, []);

	const isFavorite = useCallback(
		(poemId: string) => favorites.includes(poemId),
		[favorites],
	);

	const addFavorite = useCallback((poemId: string) => {
		setFavorites((prev) =>
			prev.includes(poemId) ? prev : [...prev, poemId],
		);
	}, []);

	const removeFavorite = useCallback((poemId: string) => {
		setFavorites((prev) => prev.filter((id) => id !== poemId));
	}, []);

	return {
		favorites,
		toggleFavorite,
		isFavorite,
		addFavorite,
		removeFavorite,
	};
}
