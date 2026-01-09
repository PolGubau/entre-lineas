import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { usePoemsDependencies } from "../infra/dependencies.provider";

/**
 * Hook para manejar favoritos de poemas
 * Ahora usa Dependency Injection + TanStack Query para gestión de estado
 */
export function useFavorites() {
	// ✅ DI: Obtenemos los use cases del contexto
	const { getFavoritesUseCase, toggleFavoriteUseCase } = usePoemsDependencies();
	const queryClient = useQueryClient();

	// Query para obtener favoritos
	const {
		data: favorites = [],
		isLoading,
		error,
	} = useQuery({
		queryKey: ["favorites"],
		queryFn: () => getFavoritesUseCase.execute(),
		staleTime: Number.POSITIVE_INFINITY, // Los favoritos son locales, no expiran
	});

	// Mutation para toggle de favoritos
	const toggleMutation = useMutation({
		mutationFn: (poemId: string) => toggleFavoriteUseCase.execute(poemId),
		onSuccess: () => {
			// Invalidar query para refrescar la lista
			queryClient.invalidateQueries({ queryKey: ["favorites"] });
		},
	});

	// Helpers derivados
	const isFavorite = useCallback(
		(poemId: string) => favorites.includes(poemId),
		[favorites],
	);

	const toggleFavorite = useCallback(
		async (poemId: string) => {
			await toggleMutation.mutateAsync(poemId);
		},
		[toggleMutation],
	);

	const addFavorite = useCallback(
		async (poemId: string) => {
			if (!isFavorite(poemId)) {
				await toggleFavorite(poemId);
			}
		},
		[isFavorite, toggleFavorite],
	);

	const removeFavorite = useCallback(
		async (poemId: string) => {
			if (isFavorite(poemId)) {
				await toggleFavorite(poemId);
			}
		},
		[isFavorite, toggleFavorite],
	);

	return {
		favorites,
		isLoading,
		error,
		toggleFavorite,
		isFavorite,
		addFavorite,
		removeFavorite,
	};
}
