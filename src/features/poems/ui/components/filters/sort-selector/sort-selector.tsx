import { ArrowUpDown, Check } from "lucide-react";
import { memo, useCallback, useMemo } from "react";
import { useFilters } from "~/features/poems/application/use-filters";
import type { SortBy } from "~/features/poems/application/use-poems";
import { Button } from "~/shared/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "~/shared/ui/dropdown-menu";
import { Tooltip } from "~/shared/ui/tooltip";
import { getSortOption, SORT_OPTIONS } from "./sort-config";

interface SortSelectorProps {
	/** Mostrar etiqueta junto al botón (desktop) */
	showLabel?: boolean;
	/** Variante del botón */
	variant?: "default" | "outline" | "ghost";
	/** Tamaño del botón */
	size?: "default" | "sm" | "lg" | "icon";
}

/**
 * Selector de ordenamiento con dropdown elegante
 * - Sincroniza con URL automáticamente vía useFilters
 * - Iconos descriptivos para cada opción
 * - Tooltips informativos
 * - Animaciones suaves
 * - Marca visual de la opción activa
 * - Responsive (con/sin label)
 */
export const SortSelector = memo(
	({
		showLabel = true,
		variant = "outline",
		size = "default",
	}: SortSelectorProps) => {
		const { sortBy, setSortBy } = useFilters();
		const currentOption = useMemo(() => getSortOption(sortBy), [sortBy]);

		const handleSortChange = useCallback(
			(value: SortBy) => {
				setSortBy(value);
			},
			[setSortBy],
		);

		const CurrentIcon = currentOption.icon;

		return (
			<DropdownMenu>
				<Tooltip label={currentOption.description}>
					<DropdownMenuTrigger asChild>
						<Button
							variant={variant}
							size={size}
							className="gap-2 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 animate-in fade-in slide-in-from-top-2"
						>
							<ArrowUpDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
							{showLabel && (
								<>
									<span className="font-medium">{currentOption.label}</span>
									<CurrentIcon className="size-4 text-muted-foreground" />
								</>
							)}
						</Button>
					</DropdownMenuTrigger>
				</Tooltip>

				<DropdownMenuContent
					align="end"
					className="w-64 mx-4 animate-in fade-in slide-in-from-top-2 duration-200"
				>
					<DropdownMenuLabel className="flex items-center gap-2 text-xs font-normal text-muted-foreground">
						<ArrowUpDown className="size-3.5" />
						Ordenar poemas por
					</DropdownMenuLabel>
					<DropdownMenuSeparator />

					{SORT_OPTIONS.map((option, index) => {
						const Icon = option.icon;
						const isActive = option.value === sortBy;

						return (
							<DropdownMenuItem
								key={option.value}
								onClick={() => handleSortChange(option.value)}
								className="gap-3 cursor-pointer transition-all duration-200 hover:scale-[0.98] animate-in fade-in slide-in-from-left-1 fill-mode-both"
								style={{ animationDelay: `${index * 30}ms` }}
							>
								<div
									className={`flex size-8 items-center justify-center rounded-md transition-colors duration-200 ${
										isActive
											? "bg-primary text-primary-foreground"
											: "bg-muted text-muted-foreground"
									}`}
								>
									<Icon className="size-4" />
								</div>

								<div className="flex-1">
									<p
										className={`transition-colors duration-200 ${
											isActive ? "text-primary" : ""
										}`}
									>
										{option.label}
									</p>
									<p className="text-xs text-muted-foreground">
										{option.description}
									</p>
								</div>

								{isActive && (
									<Check className="size-4 text-primary animate-in zoom-in duration-200" />
								)}
							</DropdownMenuItem>
						);
					})}
				</DropdownMenuContent>
			</DropdownMenu>
		);
	},
);

SortSelector.displayName = "SortSelector";
