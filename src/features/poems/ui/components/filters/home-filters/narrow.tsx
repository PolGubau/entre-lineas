import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useFilters } from "~/features/poems/application/use-filters";
import { Badge } from "~/shared/ui/badge";
import { Button } from "~/shared/ui/button";
import { Drawer } from "~/shared/ui/drawer";
import { SortSelector } from "../sort-selector";
import { AdvancedFilters, type FiltersProps } from "./advanced-filters";
import { SearchInput } from "./search-input";

interface NarrowFiltersProps extends FiltersProps {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
}

export const NarrowFilters = ({
	searchInputRef,
	searchQuery,
	setSearchQuery,
}: NarrowFiltersProps) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { hasActiveFilters, selectedAuthor, selectedMovement, selectedThemes } =
		useFilters();

	const activeFiltersCount = [
		selectedAuthor,
		selectedMovement,
		...selectedThemes,
	].filter(Boolean).length;

	return (
		<section className="space-y-3">
			<SearchInput
				searchInputRef={searchInputRef}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>

			{/* Fila con ordenamiento y filtros */}
			<div className="flex gap-2">
				<SortSelector showLabel={false} variant="outline" size="default" />
				<Button
					variant="outline"
					onClick={() => setIsDrawerOpen(true)}
					className="flex-1 justify-between"
				>
					<span className="flex items-center gap-2">
						<SlidersHorizontal className="size-4" />
						Filtros avanzados
					</span>

					{hasActiveFilters && (
						<Badge variant="default" className="h-5 px-1.5 text-xs">
							{activeFiltersCount}
						</Badge>
					)}
				</Button>
			</div>

			<Drawer
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
				title="Filtros"
			>
				<AdvancedFilters />
			</Drawer>
		</section>
	);
};
