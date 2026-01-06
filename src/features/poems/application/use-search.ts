import { useMemo, useState } from "react";
import { useDebounce } from "~/shared/hooks/useDebounce";
import type { Poem } from "../domain/poem.types";
import type { SearchQuery } from "../domain/search.types";
import { SearchRepositoryImpl } from "../infra/search.repository.impl";
import { SearchPoemsUseCase } from "./use-cases/search-poems.use-case";

const searchRepository = new SearchRepositoryImpl();
const searchUseCase = new SearchPoemsUseCase(searchRepository);

export function useSearch(poems: Poem[], debounceMs = 300) {
	const [searchQuery, setSearchQuery] = useState("");
	const debouncedSearch = useDebounce(searchQuery, debounceMs);

	const searchResults = useMemo(() => {
		const query: SearchQuery = {
			text: debouncedSearch || undefined,
		};

		return searchUseCase.execute(poems, query);
	}, [poems, debouncedSearch]);

	return {
		searchQuery,
		setSearchQuery,
		searchResults,
		hasActiveSearch: !!debouncedSearch,
		highlightText: (text: string) =>
			searchRepository.highlightText(text, debouncedSearch),
	};
}
