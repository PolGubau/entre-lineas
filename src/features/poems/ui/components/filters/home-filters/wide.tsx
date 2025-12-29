import {
	useAuthors,
	useMovements,
	useTematicas,
} from "../../../../application/use-poems";
import { AdvancedFilters, type FiltersProps } from "./advanced-filters";
import { FiltersAccordion } from "./filters-accordion";
import { SearchInput } from "./search-input";

/**
 * Componente de filtros completo para desktop
 * Incluye búsqueda y filtros avanzados
 * Pre-carga los datos para evitar suspense cuando se abre el collapsible
 */
export function WideFilters({ searchInputRef }: FiltersProps) {
	// Pre-cargar datos para evitar suspense al abrir el collapsible
	useAuthors();
	useMovements();
	useTematicas();

	return (
		<section className="space-y-3">
			<SearchInput searchInputRef={searchInputRef} />
			<FiltersAccordion>
				<AdvancedFilters />
			</FiltersAccordion>
		</section>
	);
}
