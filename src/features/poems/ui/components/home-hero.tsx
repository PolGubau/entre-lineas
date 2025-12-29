import type { RefObject } from "react";
import { FiltersSection } from "./filters/home-filters/filters-section";
import { HeroTitle } from "./hero-title";

interface HomeHeroProps {
	searchInputRef?: RefObject<HTMLInputElement | null>;
}

export function HomeHero({ searchInputRef }: HomeHeroProps) {
	return (
		<header className=" space-y-4 md:space-y-6 overflow-y-auto">
			<HeroTitle />
			<FiltersSection searchInputRef={searchInputRef} />
		</header>
	);
}
