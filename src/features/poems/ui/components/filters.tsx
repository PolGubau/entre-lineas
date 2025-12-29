import { BookOpen, Calendar, Search, User, X } from "lucide-react";
import type { RefObject } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/shared/ui/accordion";
import { Badge } from "~/shared/ui/badge";
import { Button } from "~/shared/ui/button";
import { Input } from "~/shared/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/shared/ui/select";
import { useFilters } from "../../application/use-filters";
import {
	useAuthors,
	useMovements,
	useTematicas,
} from "../../application/use-poems";

interface FiltersProps {
	searchInputRef?: RefObject<HTMLInputElement | null>;
}

/**
 * Componente de filtros avanzados para poemas
 * Incluye búsqueda, autor, movimiento literario y temáticas
 * Lee y actualiza el estado directamente desde la URL
 */
export function Filters({ searchInputRef }: FiltersProps) {
	const {
		searchQuery,
		setSearchQuery,
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

	const toggleTheme = (theme: string) => {
		if (selectedThemes.includes(theme)) {
			setSelectedThemes(selectedThemes.filter((t) => t !== theme));
		} else {
			setSelectedThemes([...selectedThemes, theme]);
		}
	};

	const activeFiltersCount = [
		selectedAuthor,
		selectedMovement,
		...selectedThemes,
	].filter(Boolean).length;

	return (
		<section className="space-y-3">
			<Input
				type="search"
				ref={searchInputRef}
				icon={<Search className="size-5 text-muted-foreground" />}
				placeholder="Buscar por título, autor o tema..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<Accordion type="single" collapsible>
				<AccordionItem value="filters" className="border-none">
					<AccordionTrigger className="py-2 px-3 hover:bg-accent rounded-md">
						<span className="text-sm font-medium flex items-center gap-2">
							<Search className="size-4" />
							Filtros
							{hasActiveFilters && (
								<Badge variant="default" className="h-5 px-1.5 text-xs">
									{activeFiltersCount}
								</Badge>
							)}
						</span>
					</AccordionTrigger>
					<AccordionContent className="pt-3 pb-0 space-y-3">
						{/* Búsqueda general */}

						{/* Filtros en dos columnas */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
							{/* Selector de autor */}
							<Select
								value={selectedAuthor ?? "all"}
								onValueChange={(value) =>
									setSelectedAuthor(value === "all" ? null : value)
								}
							>
								<SelectTrigger className="w-full">
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
								<SelectTrigger className="w-full">
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
						<div className="space-y-2 max-md:hidden">
							<div className="flex items-center justify-between">
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
							</div>

							{/* Temáticas seleccionadas */}
							{selectedThemes.length > 0 && (
								<div className="flex flex-wrap gap-1.5">
									{selectedThemes.map((theme) => (
										<Badge
											key={theme}
											variant="default"
											className="cursor-pointer hover:bg-primary/80"
											onClick={() => toggleTheme(theme)}
										>
											{theme}
											<X className="size-3 ml-1" />
										</Badge>
									))}
								</div>
							)}

							{/* Grid de temáticas disponibles */}
							<div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-2 bg-muted/30 rounded-lg ">
								{themes
									?.filter((theme) => !selectedThemes.includes(theme))
									.map((theme) => (
										<Badge
											key={theme}
											variant="outline"
											className="cursor-pointer hover:bg-accent"
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
					</AccordionContent>
				</AccordionItem>
			</Accordion>{" "}
		</section>
	);
}
