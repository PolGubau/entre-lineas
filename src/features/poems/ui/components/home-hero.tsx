import type { RefObject } from "react";
import { Filters } from "./filters";

interface HomeHeroProps {
	searchInputRef?: RefObject<HTMLInputElement | null>;
}

/**
 * Hero section de la página principal
 * Contiene título, descripción y filtros
 * Los filtros leen su estado directamente de la URL
 */
export function HomeHero({ searchInputRef }: HomeHeroProps) {
	return (
		<aside className="space-y-4 md:space-y-6 overflow-y-auto">
			<header className="space-y-2 md:space-y-6">
				<h1 className="text-2xl poem md:text-5xl font-bold tracking-tight">
					Entre líneas
				</h1>
				<p className="text-muted-foreground max-w-lg text-balance text-sm md:text-md">
					Descubre figuras retóricas, contexto histórico y análisis detallado de
					cada verso
				</p>
			</header>
			<Filters searchInputRef={searchInputRef} />
		</aside>
	);
}
