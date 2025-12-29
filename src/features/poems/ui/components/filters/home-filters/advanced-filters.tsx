import { BookOpen, Calendar, User, X } from "lucide-react";
import { memo, type RefObject, useCallback, useMemo } from "react";
import { Badge } from "~/shared/ui/badge";
import { Button } from "~/shared/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/shared/ui/select";
import { useFilters } from "../../../../application/use-filters";
import {
	useAuthors,
	useMovements,
	useTematicas,
} from "../../../../application/use-poems";

export interface FiltersProps {
	searchInputRef?: RefObject<HTMLInputElement | null>;
}

/**
 * Contenido de filtros avanzados (usado en drawer mobile y sidebar desktop)
 */
export const AdvancedFilters = memo(() => {
	const {
		selectedAuthor,
		setSelectedAuthor,
		selectedMovement,
		setSelectedMovement,
		selectedThemes,
		setSelectedThemes,
		hasActiveFilters,
		clearFilters,
	} = useFilters();

	const { data: authors } = useAuthors();
	const { data: movements } = useMovements();
	const { data: themes } = useTematicas();

	const toggleTheme = useCallback(
		(theme: string) => {
			if (selectedThemes.includes(theme)) {
				setSelectedThemes(selectedThemes.filter((t) => t !== theme));
			} else {
				setSelectedThemes([...selectedThemes, theme]);
			}
		},
		[selectedThemes, setSelectedThemes],
	);

	const availableThemes = useMemo(
		() => themes?.filter((theme) => !selectedThemes.includes(theme)) ?? [],
		[themes, selectedThemes],
	);

	return (
		<section className="space-y-3">
			{/* Filtros en dos columnas */}
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
				{/* Selector de autor */}
				<Select
					value={selectedAuthor ?? "all"}
					onValueChange={(value) =>
						setSelectedAuthor(value === "all" ? null : value)
					}
				>
					<SelectTrigger className="w-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
						<div className="flex items-center gap-2">
							<User className="size-4 text-muted-foreground" />
							<SelectValue placeholder="Todos los autores" />
						</div>
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">Todos los autores</SelectItem>
						{authors?.map((author) => (
							<SelectItem key={author} value={author}>
								{author}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				{/* Selector de movimiento */}
				<Select
					value={selectedMovement ?? "all"}
					onValueChange={(value) =>
						setSelectedMovement(value === "all" ? null : value)
					}
				>
					<SelectTrigger className="w-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
						<div className="flex items-center gap-2">
							<Calendar className="size-4 text-muted-foreground" />
							<SelectValue placeholder="Todos los movimientos" />
						</div>
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">Todos los movimientos</SelectItem>
						{movements?.map((movement) => (
							<SelectItem key={movement} value={movement}>
								{movement}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			{/* Selector de temáticas (multi-select con badges) */}
			<div className="space-y-2">
				<header className="flex items-center justify-between">
					<span className="text-sm font-medium flex items-center gap-2">
						<BookOpen className="size-4 text-muted-foreground" />
						Temáticas
					</span>
					{selectedThemes.length > 0 && (
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setSelectedThemes([])}
							className="h-6 px-2 text-xs"
						>
							Limpiar
						</Button>
					)}
				</header>

				{/* Temáticas seleccionadas */}
				{selectedThemes.length > 0 && (
					<div className="flex flex-wrap gap-1.5">
						{selectedThemes.map((theme, index) => (
							<Badge
								key={theme}
								variant="default"
								className="cursor-pointer hover:bg-primary/80 transition-all duration-200 hover:scale-105 animate-in fade-in zoom-in fill-mode-both"
								style={{ animationDelay: `${index * 50}ms` }}
								onClick={() => toggleTheme(theme)}
							>
								{theme}
								<X className="size-3 ml-1 transition-transform duration-200 hover:rotate-90" />
							</Badge>
						))}
					</div>
				)}

				{/* Grid de temáticas disponibles */}
				<div className="flex flex-wrap gap-1.5 overflow-y-auto p-2 bg-muted/30 rounded-lg">
					{availableThemes.map((theme, index) => (
						<Badge
							key={theme}
							variant="outline"
							className="cursor-pointer hover:bg-accent transition-all duration-200 hover:scale-105 hover:shadow-sm animate-in fade-in slide-in-from-bottom-1 fill-mode-both"
							style={{ animationDelay: `${index * 30}ms` }}
							onClick={() => toggleTheme(theme)}
						>
							{theme}
						</Badge>
					))}
				</div>
			</div>

			{/* Botón de limpiar todos los filtros */}
			{hasActiveFilters && (
				<Button
					variant="outline"
					size="sm"
					onClick={clearFilters}
					className="w-full"
				>
					<X className="size-4" />
					Limpiar todos los filtros
				</Button>
			)}
		</section>
	);
});
