import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { memo, type PropsWithChildren, useMemo, useState } from "react";
import { Badge } from "~/shared/ui/badge";
import { Button } from "~/shared/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "~/shared/ui/collapsible";
import { useFilters } from "../../../../application/use-filters";

export const FiltersAccordion = memo(({ children }: PropsWithChildren) => {
	const [isOpen, setIsOpen] = useState(false);
	const { selectedAuthor, selectedMovement, selectedThemes, hasActiveFilters } =
		useFilters();

	const activeFiltersCount = useMemo(
		() =>
			[selectedAuthor, selectedMovement, ...selectedThemes].filter(Boolean)
				.length,
		[selectedAuthor, selectedMovement, selectedThemes],
	);

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen}>
			<CollapsibleTrigger asChild>
				<Button
					variant="ghost"
					className="w-full justify-between h-auto py-2 px-3 hover:bg-accent"
				>
					<span className="text-sm font-medium flex items-center gap-2">
						<SlidersHorizontal className="size-4" />
						Filtros avanzados
						{hasActiveFilters && (
							<Badge variant="default" className="h-5 px-1.5 text-xs">
								{activeFiltersCount}
							</Badge>
						)}
					</span>
					<ChevronDown
						className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
					/>
				</Button>
			</CollapsibleTrigger>
			<CollapsibleContent className="pt-3 space-y-3 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 duration-200">
				{children}
			</CollapsibleContent>
		</Collapsible>
	);
});
