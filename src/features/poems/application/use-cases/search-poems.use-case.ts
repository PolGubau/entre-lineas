/**
 * Search Poems Use Case
 * Business logic for searching and filtering poems
 */

import type { Poem } from "../../domain/poem.types";
import type { SearchRepository } from "../../domain/repositories/search.repository";
import type { SearchQuery, SearchResult } from "../../domain/search.types";

export class SearchPoemsUseCase {
	constructor(private readonly searchRepository: SearchRepository) {}

	execute(poems: Poem[], query: SearchQuery): SearchResult<Poem>[] {
		// Si no hay query, retornar todos los poemas sin highlighting
		if (!this.hasActiveQuery(query)) {
			return poems.map((poem) => ({
				item: poem,
				matches: [],
				score: 0,
			}));
		}

		return this.searchRepository.search(poems, query);
	}

	private hasActiveQuery(query: SearchQuery): boolean {
		return !!(
			query.text ||
			query.author ||
			query.movement ||
			query.themes?.length ||
			query.rhetoricalFigures?.length
		);
	}
}
