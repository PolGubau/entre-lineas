/**
 * Search repository interface (Port in Clean Architecture)
 */

import type { Poem } from "./poem.types";
import type { SearchQuery, SearchResult } from "./search.types";

export interface SearchRepository {
	search(poems: Poem[], query: SearchQuery): SearchResult<Poem>[];
	highlightText(text: string, searchQuery: string): string;
}
