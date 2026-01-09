import { useMemo, useState } from "react";
import { useDebounce } from "~/shared/hooks/useDebounce";
import type { Poem } from "../domain/poem.types";
import type { SearchQuery } from "../domain/search.types";
import { usePoemsDependencies } from "../infra/dependencies.provider";

/**
 * Hook para búsqueda de poemas
 * Ahora usa Dependency Injection para obtener el use case
 */
export function useSearch(poems: Poem[], debounceMs = 300) {
	// ✅ DI: Obtenemos las dependencias del contexto
	const { searchPoemsUseCase, searchRepository } = usePoemsDependencies();

	const [searchQuery, setSearchQuery] = useState("");
	const debouncedSearch = useDebounce(searchQuery, debounceMs);

	const searchResults = useMemo(() => {
		const query: SearchQuery = {
			text: debouncedSearch || undefined,
		};

		// ✅ Uso del use case inyectado
		return searchPoemsUseCase.execute(poems, query);
	}, [poems, debouncedSearch, searchPoemsUseCase]);

	return {
		searchQuery,
		setSearchQuery,
		searchResults,
		hasActiveSearch: !!debouncedSearch,
		highlightText: (text: string) =>
			searchRepository.highlightText(text, debouncedSearch),
	};
}
