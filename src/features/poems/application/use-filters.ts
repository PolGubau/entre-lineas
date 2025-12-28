import { useMemo, useState } from "react";
import { useDebounce } from "~/shared/hooks/useDebounce";
import type { PoemsFilters } from "./use-poems";

/**
 * Hook centralizado para manejar todos los filtros de poemas
 * Maneja búsqueda, autor, movimiento, era y temáticas
 */
export function useFilters(debounceMs = 200) {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
	const [selectedMovement, setSelectedMovement] = useState<string | null>(null);
	const [selectedEra, setSelectedEra] = useState<string | null>(null);
	const [selectedThemes, setSelectedThemes] = useState<string[]>([]);

	const debouncedSearch = useDebounce(searchQuery, debounceMs);

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
		setSearchQuery("");
		setSelectedAuthor(null);
		setSelectedMovement(null);
		setSelectedEra(null);
		setSelectedThemes([]);
	};

	const hasActiveFilters = !!(
		searchQuery ||
		selectedAuthor ||
		selectedMovement ||
		selectedEra ||
		selectedThemes.length > 0
	);

	return {
		// Estado
		searchQuery,
		selectedAuthor,
		selectedMovement,
		selectedEra,
		selectedThemes,
		hasActiveFilters,

		// Setters
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
