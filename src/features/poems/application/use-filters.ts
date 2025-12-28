import { useNavigate, useSearch } from "@tanstack/react-router";
import { useMemo } from "react";
import { useDebounce } from "~/shared/hooks/useDebounce";
import type { PoemsFilters } from "./use-poems";

/**
 * Hook centralizado para manejar todos los filtros de poemas
 * Usa search params de TanStack Router para mantener estado en la URL
 * Maneja búsqueda, autor, movimiento, era y temáticas
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

	const debouncedSearch = useDebounce(searchQuery, debounceMs);

	// Helpers para actualizar search params
	const updateSearchParams = (updates: Record<string, unknown>) => {
		navigate({
			to: "/",
			search: (prev) => ({ ...prev, ...updates }),
			replace: true,
		});
	};

	const setSearchQuery = (q: string) => {
		updateSearchParams({ q: q || undefined });
	};

	const setSelectedAuthor = (author: string | null) => {
		updateSearchParams({ author: author || undefined });
	};

	const setSelectedMovement = (movement: string | null) => {
		updateSearchParams({ movement: movement || undefined });
	};

	const setSelectedEra = (era: string | null) => {
		updateSearchParams({ era: era || undefined });
	};

	const setSelectedThemes = (themes: string[]) => {
		updateSearchParams({ themes: themes.length > 0 ? themes : undefined });
	};

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

	const clearFilters = () => {
		navigate({
			to: "/",
			search: {},
			replace: true,
		});
	};

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
		hasActiveFilters,

		// Setters (actualizan URL)
		setSearchQuery,
		setSelectedAuthor,
		setSelectedMovement,
		setSelectedEra,
		setSelectedThemes,

		// Utilidades
		clearFilters,
		filters,
	};
}
