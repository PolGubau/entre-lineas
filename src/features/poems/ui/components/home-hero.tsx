import type { RefObject } from "react";
import { Filters } from "./filters";

interface HomeHeroProps {
	searchQuery: string;
	onSearchChange: (value: string) => void;
	selectedAuthor: string | null;
	onAuthorChange: (value: string | null) => void;
	searchInputRef?: RefObject<HTMLInputElement | null>;
}

/**
 * Hero section de la página principal
 * Contiene título, descripción y filtros
 */
export function HomeHero({
	searchQuery,
	onSearchChange,
	selectedAuthor,
	onAuthorChange,
	searchInputRef,
}: HomeHeroProps) {
	return (
		<aside className="space-y-4 md:space-y-8 overflow-y-auto">
			<header className="space-y-2 md:space-y-6">
				<h1 className="text-2xl poem md:text-5xl font-bold tracking-tight">
					Entre líneas
				</h1>
				<p className="text-muted-foreground max-w-lg text-balance text-sm md:text-md">
					Descubre figuras retóricas, contexto histórico y análisis detallado de
					cada verso
				</p>
			</header>
			<Filters
				searchQuery={searchQuery}
				onSearchChange={onSearchChange}
				selectedAuthor={selectedAuthor}
				onAuthorChange={onAuthorChange}
				searchInputRef={searchInputRef}
			/>
		</aside>
	);
}
