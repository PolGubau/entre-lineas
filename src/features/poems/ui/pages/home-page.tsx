import { useRef } from "react";
import { useFavorites } from "~/features/poems/application/use-favorites";
import { useFilters } from "~/features/poems/application/use-filters";
import { usePoems } from "~/features/poems/application/use-poems";
import { EmptyPoems } from "~/features/poems/ui/empty-poems";
import { useKeyboardShortcuts } from "~/shared/hooks/use-keyboard-shortcuts";
import { HomeHero } from "../components/home-hero";
import { KeyboardShortcutsDialog } from "../components/keyboard-shortcuts-dialog";
import { LoadingState } from "../components/loading-state";
import { PoemGrid } from "../components/poem-grid";

/**
 * Página principal de la aplicación
 * Muestra el grid de poemas con filtros y búsqueda
 * Los filtros se sincronizan automáticamente con la URL
 */
export function HomePage() {
	const searchInputRef = useRef<HTMLInputElement>(null);
	const { clearFilters, filters, hasActiveFilters } = useFilters();

	const { favorites, isFavorite } = useFavorites();
	const { data: filteredPoems, isLoading } = usePoems(filters, favorites);

	// Keyboard shortcuts
	useKeyboardShortcuts({
		slash: {
			handler: () => searchInputRef.current?.focus(),
			description: "Enfocar búsqueda",
			shortcut: { key: "/" },
		},
		escape: {
			handler: () => {
				if (hasActiveFilters) {
					clearFilters();
				}
				searchInputRef.current?.blur();
			},
			description: "Limpiar filtros",
			shortcut: { key: "Escape" },
		},
	});

	return (
		<section className="relative grid md:grid-cols-[1fr_3fr] gap-2 md:gap-6 px-3 sm:px-6 lg:px-8 pt-6 md:pt-10 h-screen">
			<HomeHero searchInputRef={searchInputRef} />

			<section className="h-full pb-16 overflow-y-auto">
				{isLoading ? (
					<LoadingState />
				) : filteredPoems && filteredPoems.length > 0 ? (
					<PoemGrid poems={filteredPoems} isFavorite={isFavorite} />
				) : (
					<div className="grid items-center justify-center h-full">
						<EmptyPoems />
					</div>
				)}
			</section>
			<KeyboardShortcutsDialog />
		</section>
	);
}
