import type { FiltersProps } from "./advanced-filters";
import { NarrowFilters } from "./narrow";
import { WideFilters } from "./wide";

export const FiltersSection = ({ searchInputRef }: FiltersProps) => {
	return (
		<>
			<div className="max-lg:hidden">
				<WideFilters searchInputRef={searchInputRef} />
			</div>
			<div className="lg:hidden">
				<NarrowFilters searchInputRef={searchInputRef} />
			</div>
		</>
	);
};
