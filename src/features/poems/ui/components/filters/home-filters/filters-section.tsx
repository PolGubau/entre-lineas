import type { FiltersProps } from "./advanced-filters";
import { NarrowFilters } from "./narrow";
import { WideFilters } from "./wide";

interface FiltersSectionProps extends FiltersProps {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
}

export const FiltersSection = ({
	searchInputRef,
	searchQuery,
	setSearchQuery,
}: FiltersSectionProps) => {
	return (
		<>
			<div className="max-lg:hidden">
				<WideFilters
					searchInputRef={searchInputRef}
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
			</div>
			<div className="lg:hidden">
				<NarrowFilters
					searchInputRef={searchInputRef}
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
			</div>
		</>
	);
};
