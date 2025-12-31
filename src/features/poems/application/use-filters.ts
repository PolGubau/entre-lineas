import { useNavigate, useSearch } from "@tanstack/react-router";
import { useCallback, useMemo } from "react";
import { useDebounce } from "~/shared/hooks/useDebounce";
import type { PoemsFilters, SortBy } from "./use-poems";

/**
 * Hook centralizado para manejar todos los filtros de poemas
 * Usa search params de TanStack Router para mantener estado en la URL
 * Maneja búsqueda, autor, movimiento, era, temáticas y ordenamiento
 */
export function useFilters(debounceMs = 200) {
	const navigate = useNavigate();
	const searchParams = useSearch({ from: "/" });

	// Leer valores desde search params
	const searchQuery = (searchParams.q as string) ?? "";
	const selectedAuthor = (searchParams.author as string) ?? null;
	const selectedMovement = (searchParams.movement as string) ?? null;
	const selectedEra = (searchParams.era as string) ?? null;
	const selectedThemes = (searchParams.themes as string[]) ?? [];
	const sortBy = ((searchParams.sort as SortBy) ?? "title") as SortBy;

	const debouncedSearch = useDebounce(searchQuery, debounceMs);

	// Helpers para actualizar search params - memoizados
	const updateSearchParams = useCallback(
		(updates: Record<string, unknown>) => {
			navigate({
				to: "/",
				search: (prev) => ({ ...prev, ...updates }),
				replace: true,
			});
		},
		[navigate],
	);

	const setSearchQuery = useCallback(
		(q: string) => {
			updateSearchParams({ q: q || undefined });
		},
		[updateSearchParams],
	);

	const setSelectedAuthor = useCallback(
		(author: string | null) => {
			updateSearchParams({ author: author || undefined });
		},
		[updateSearchParams],
	);

	const setSelectedMovement = useCallback(
		(movement: string | null) => {
			updateSearchParams({ movement: movement || undefined });
		},
		[updateSearchParams],
	);

	const setSelectedEra = useCallback(
		(era: string | null) => {
			updateSearchParams({ era: era || undefined });
		},
		[updateSearchParams],
	);
	const setSelectedThemes = useCallback(
		(themes: string[]) => {
			updateSearchParams({ themes: themes.length > 0 ? themes : undefined });
		},
		[updateSearchParams],
	);

	const setSortBy = useCallback(
		(sort: SortBy) => {
			updateSearchParams({ sort: sort === "title" ? undefined : sort });
		},
		[updateSearchParams],
	);

	const filters: PoemsFilters | undefined = useMemo(() => {
		const hasFilters =
			debouncedSearch ||
			selectedAuthor ||
			selectedMovement ||
			selectedEra ||
			selectedThemes.length > 0;

		if (!hasFilters) return undefined;

		return {
			search: debouncedSearch || undefined,
			author: selectedAuthor || undefined,
			movement: selectedMovement || undefined,
			era: selectedEra || undefined,
			themes: selectedThemes.length > 0 ? selectedThemes : undefined,
		};
	}, [
		debouncedSearch,
		selectedAuthor,
		selectedMovement,
		selectedEra,
		selectedThemes,
	]);

	const clearFilters = useCallback(() => {
		navigate({
			to: "/",
			search: {},
			replace: true,
		});
	}, [navigate]);

	const hasActiveFilters = !!(
		searchQuery ||
		selectedAuthor ||
		selectedMovement ||
		selectedEra ||
		selectedThemes.length > 0
	);

	return {
		// Estado (readonly, derivado de URL)
		searchQuery,
		selectedAuthor,
		selectedMovement,
		selectedEra,
		selectedThemes,
		sortBy,
		hasActiveFilters,

		// Setters (actualizan URL)
		setSearchQuery,
		setSelectedAuthor,
		setSelectedMovement,
		setSelectedEra,
		setSelectedThemes,
		setSortBy,

		// Utilidades
		clearFilters,
		filters,
	};
}
