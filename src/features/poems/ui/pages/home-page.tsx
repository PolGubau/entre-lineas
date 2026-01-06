import { useRef } from "react";
import { useFavorites } from "~/features/poems/application/use-favorites";
import { useFilters } from "~/features/poems/application/use-filters";
import { usePoems } from "~/features/poems/application/use-poems";
import { useSearch } from "~/features/poems/application/use-search";
import { EmptyPoems } from "~/features/poems/ui/empty-poems";
import { useKeyboardShortcuts } from "~/shared/hooks/use-keyboard-shortcuts";
import type { Poem } from "../../domain/poem.types";
import { PoemGrid } from "../components/grid/poem-grid";
import { PoemGridLoader } from "../components/grid/poem-grid-skeleton";
import { HomeHero } from "../components/home-hero";
import { KeyboardShortcutsDialog } from "../components/keyboard-shortcuts-dialog";

/**
 * Página principal de la aplicación
 * Muestra el grid de poemas con filtros y búsqueda
 * Los filtros se sincronizan automáticamente con la URL
 */
export function HomePage() {
	const searchInputRef = useRef<HTMLInputElement>(null);
	const { clearFilters, filters, hasActiveFilters, sortBy } = useFilters();

	const { favorites, isFavorite } = useFavorites();
	const { data: filteredPoems, isLoading } = usePoems(
		filters,
		favorites,
		sortBy,
	);

	// Search with highlighting
	const {
		searchQuery,
		setSearchQuery,
		searchResults,
		hasActiveSearch,
		highlightText,
	} = useSearch(filteredPoems || [], 300);

	// Usar resultados de búsqueda si hay búsqueda activa, sino usar poemas filtrados
	const displayPoems = hasActiveSearch
		? searchResults.map((result) => result.item)
		: filteredPoems || [];

	// Keyboard shortcuts
	useKeyboardShortcuts({
		slash: {
			handler: () => searchInputRef.current?.focus(),
			description: "Enfocar búsqueda",
			shortcut: { key: "/" },
		},
		escape: {
			handler: () => {
				if (hasActiveFilters || hasActiveSearch) {
					clearFilters();
					setSearchQuery("");
				}
				searchInputRef.current?.blur();
			},
			description: "Limpiar filtros y búsqueda",
			shortcut: { key: "Escape" },
		},
	});

	function conditionalContent(isLoading: boolean, poems: Poem[]) {
		if (isLoading) {
			return <PoemGridLoader />;
		} else if (poems.length > 0) {
			return (
				<PoemGrid
					poems={poems}
					isFavorite={isFavorite}
					searchQuery={searchQuery}
					highlightText={highlightText}
				/>
			);
		} else {
			return <EmptyPoems />;
		}
	}

	return (
		<section className="relative grid grid-rows-[auto_1fr] md:grid-cols-[2fr_3fr] xl:grid-cols-[1fr_3fr] gap-2 md:gap-6 px-3 sm:px-6 lg:px-8 pt-6 md:pt-10 h-screen">
			<HomeHero
				searchInputRef={searchInputRef}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>

			<section className="h-full pb-16 overflow-y-auto">
				{conditionalContent(isLoading, displayPoems)}
			</section>
			<KeyboardShortcutsDialog />
		</section>
	);
}
