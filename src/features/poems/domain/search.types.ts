/**
 * Domain types for search functionality
 */

export interface SearchQuery {
	text?: string;
	author?: string;
	movement?: string;
	themes?: string[];
	rhetoricalFigures?: string[];
}

export interface SearchResult<T> {
	item: T;
	matches: SearchMatch[];
	score: number;
}

export interface SearchMatch {
	field: string;
	value: string;
	indices: [number, number][];
}

export interface HighlightedText {
	text: string;
	isHighlighted: boolean;
}
