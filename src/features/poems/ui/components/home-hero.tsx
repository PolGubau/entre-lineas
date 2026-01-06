import type { RefObject } from "react";
import { FiltersSection } from "./filters/home-filters/filters-section";
import { HeroTitle } from "./hero-title";

interface HomeHeroProps {
	searchInputRef?: RefObject<HTMLInputElement | null>;
	searchQuery: string;
	setSearchQuery: (query: string) => void;
}

export function HomeHero({
	searchInputRef,
	searchQuery,
	setSearchQuery,
}: HomeHeroProps) {
	return (
		<header className=" space-y-4 md:space-y-6 overflow-y-auto p-1">
			<HeroTitle />
			<FiltersSection
				searchInputRef={searchInputRef}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
		</header>
	);
}
