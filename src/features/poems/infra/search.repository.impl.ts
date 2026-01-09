/**
 * Search Repository Implementation
 * Concrete implementation of search functionality
 */

import type { SearchRepository } from "../domain";
import type { Poem } from "../domain/poem.types";
import type { SearchQuery, SearchResult } from "../domain/search.types";

export class SearchRepositoryImpl implements SearchRepository {
	search(poems: Poem[], query: SearchQuery): SearchResult<Poem>[] {
		return poems
			.map((poem) => {
				const matches = this.findMatches(poem, query);
				const score = this.calculateScore(matches);

				return {
					item: poem,
					matches,
					score,
				};
			})
			.filter((result) => result.score > 0)
			.sort((a, b) => b.score - a.score);
	}

	highlightText(text: string, searchQuery: string): string {
		if (!searchQuery.trim()) return text;

		const regex = new RegExp(`(${this.escapeRegex(searchQuery)})`, "gi");
		return text.replace(regex, "<mark>$1</mark>");
	}

	private findMatches(poem: Poem, query: SearchQuery) {
		const matches: Array<{
			field: string;
			value: string;
			indices: [number, number][];
		}> = [];

		// Búsqueda en texto general
		if (query.text) {
			const textLower = query.text.toLowerCase();

			// Buscar en título
			if (poem.title.toLowerCase().includes(textLower)) {
				matches.push({
					field: "title",
					value: poem.title,
					indices: this.findIndices(poem.title.toLowerCase(), textLower),
				});
			}

			// Buscar en autor
			if (poem.author.toLowerCase().includes(textLower)) {
				matches.push({
					field: "author",
					value: poem.author,
					indices: this.findIndices(poem.author.toLowerCase(), textLower),
				});
			}

			// Buscar en descripción
			if (poem.shortDescription?.toLowerCase().includes(textLower)) {
				matches.push({
					field: "description",
					value: poem.shortDescription,
					indices: this.findIndices(
						poem.shortDescription.toLowerCase(),
						textLower,
					),
				});
			}

			// Buscar en versos
			poem.estrofas.forEach((estrofa, estrofaIndex) => {
				estrofa.verses.forEach((verse, verseIndex) => {
					if (verse.text.toLowerCase().includes(textLower)) {
						matches.push({
							field: `verse-${estrofaIndex}-${verseIndex}`,
							value: verse.text,
							indices: this.findIndices(verse.text.toLowerCase(), textLower),
						});
					}
				});
			});

			// Buscar en temas
			poem.analysis.themes.forEach((theme) => {
				if (theme.toLowerCase().includes(textLower)) {
					matches.push({
						field: "theme",
						value: theme,
						indices: this.findIndices(theme.toLowerCase(), textLower),
					});
				}
			});
		}

		// Filtro por autor
		if (
			query.author &&
			poem.author.toLowerCase() === query.author.toLowerCase()
		) {
			matches.push({
				field: "author",
				value: poem.author,
				indices: [[0, poem.author.length]],
			});
		}

		// Filtro por movimiento
		if (
			query.movement &&
			poem.context.movement?.toLowerCase() === query.movement.toLowerCase()
		) {
			matches.push({
				field: "movement",
				value: poem.context.movement,
				indices: [[0, poem.context.movement.length]],
			});
		}

		// Filtro por temas
		if (query.themes?.length) {
			const matchingThemes = poem.analysis.themes.filter((theme) =>
				query.themes?.some((qt) =>
					theme.toLowerCase().includes(qt.toLowerCase()),
				),
			);
			matchingThemes.forEach((theme) => {
				matches.push({
					field: "theme",
					value: theme,
					indices: [[0, theme.length]],
				});
			});
		}

		// Filtro por figuras retóricas
		if (query.rhetoricalFigures?.length) {
			const matchingFigures = poem.rhetoricalFigures.filter((fig) =>
				query.rhetoricalFigures?.some((qf) =>
					fig.id.toLowerCase().includes(qf.toLowerCase()),
				),
			);
			matchingFigures.forEach((fig) => {
				matches.push({
					field: "rhetoricalFigure",
					value: fig.id,
					indices: [[0, fig.id.length]],
				});
			});
		}

		return matches;
	}

	private findIndices(text: string, search: string): [number, number][] {
		const indices: [number, number][] = [];
		let index = text.indexOf(search);

		while (index !== -1) {
			indices.push([index, index + search.length]);
			index = text.indexOf(search, index + 1);
		}

		return indices;
	}

	private calculateScore(matches: Array<{ field: string }>): number {
		if (matches.length === 0) return 0;

		const weights: Record<string, number> = {
			title: 10,
			author: 8,
			description: 5,
			theme: 3,
			verse: 2,
			movement: 3,
			rhetoricalFigure: 2,
		};

		return matches.reduce((score, match) => {
			const baseField = match.field.split("-")[0];
			return score + (weights[baseField] || 1);
		}, 0);
	}

	private escapeRegex(str: string): string {
		return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
}
