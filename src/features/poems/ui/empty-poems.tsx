import { Home, Search, Trash } from "lucide-react";
import { Button } from "~/shared/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "~/shared/ui/empty";
import { useFilters } from "../application/use-filters";

/**
 * Estado vacío cuando no hay resultados de búsqueda
 * Incluye sugerencias y acciones para limpiar filtros
 * Lee el estado de filtros directamente desde la URL
 */
export const EmptyPoems = () => {
	const { clearFilters } = useFilters();

	return (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<Search />
				</EmptyMedia>
				<EmptyTitle>No se encontraron poemas</EmptyTitle>
				<EmptyDescription>
					No hay resultados que coincidan con tu búsqueda. Intenta con otros
					términos o explora nuestra colección completa.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<div className="flex flex-col sm:flex-row gap-3">
					<Button onClick={clearFilters}>
						<Trash />
						Limpiar filtros
					</Button>
					<Button variant="outline" asChild>
						<a href="/">
							<Home />
							Ver todos los poemas
						</a>
					</Button>
				</div>
				<div className="pt-6 border-t max-w-md w-full mt-6">
					<p className="text-sm text-muted-foreground mb-3">Sugerencias:</p>
					<ul className="text-sm text-muted-foreground space-y-1 text-left">
						<li>• Busca por autor (Lorca, Machado, Neruda...)</li>
						<li>• Busca por tema (amor, muerte, naturaleza...)</li>
						<li>• Busca por movimiento (Modernismo, Generación del 27...)</li>
					</ul>
				</div>
			</EmptyContent>
		</Empty>
	);
};
