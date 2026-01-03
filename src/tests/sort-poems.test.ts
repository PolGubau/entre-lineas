import { describe, expect, it } from "vitest";
import type { Poem } from "~/features/poems/domain/poem.types";

// Mock data for testing
const createMockPoem = (
	id: string,
	title: string,
	author: string,
	date: Date,
): Poem => ({
	id,
	slug: id,
	title,
	author,
	authorSlug: author.toLowerCase().replace(" ", "-"),
	estrofas: [],
	analysis: {
		themes: [],
		generalSummary: "test",
	},
	context: {
		era: "test",
		originCountry: "test",
		publicationDate: date,
		influences: [],
	},
	rhetoricalFigures: [],
	shortDescription: "test",
	createdAt: new Date(),
	updatedAt: new Date(),
});

const mockPoems: Poem[] = [
	createMockPoem("1", "Zeta", "Autor C", new Date("1925-01-01")),
	createMockPoem("2", "Alpha", "Autor A", new Date("1920-01-01")),
	createMockPoem("3", "Beta", "Autor B", new Date("1930-01-01")),
];

// Extract sortPoems logic for testing
function sortPoems(
	poems: Poem[],
	sortBy: "title" | "author" | "date" | "favorites" = "title",
	favoriteIds?: string[],
): Poem[] {
	const sorted = [...poems].sort((a, b) => {
		// Primero: favoritos siempre arriba
		if (favoriteIds && favoriteIds.length > 0) {
			const aIsFavorite = favoriteIds.includes(a.id);
			const bIsFavorite = favoriteIds.includes(b.id);
			if (aIsFavorite && !bIsFavorite) return -1;
			if (!aIsFavorite && bIsFavorite) return 1;
		}

		// Segundo: ordenación secundaria por el criterio seleccionado
		switch (sortBy) {
			case "title":
				return a.title.localeCompare(b.title, "es");
			case "author":
				return a.author.localeCompare(b.author, "es");
			case "date": {
				const dateA = a.context.publicationDate;
				const dateB = b.context.publicationDate;
				return dateB.getTime() - dateA.getTime();
			}
			case "favorites":
				return 0; // Ya ordenado por favoritos arriba
			default:
				return 0;
		}
	});

	return sorted;
}

describe("sortPoems", () => {
	it("should sort by title alphabetically", () => {
		const result = sortPoems(mockPoems, "title");
		expect(result[0].title).toBe("Alpha");
		expect(result[1].title).toBe("Beta");
		expect(result[2].title).toBe("Zeta");
	});

	it("should sort by author alphabetically", () => {
		const result = sortPoems(mockPoems, "author");
		expect(result[0].author).toBe("Autor A");
		expect(result[1].author).toBe("Autor B");
		expect(result[2].author).toBe("Autor C");
	});

	it("should sort by date (newest first)", () => {
		const result = sortPoems(mockPoems, "date");
		expect(result[0].context.publicationDate.getFullYear()).toBe(1930);
		expect(result[1].context.publicationDate.getFullYear()).toBe(1925);
		expect(result[2].context.publicationDate.getFullYear()).toBe(1920);
	});

	it("should prioritize favorites when sorting by title", () => {
		const result = sortPoems(mockPoems, "title", ["3"]); // Beta is favorite
		expect(result[0].id).toBe("3"); // Beta (favorite) comes first
		expect(result[1].title).toBe("Alpha"); // Then alphabetical
		expect(result[2].title).toBe("Zeta");
	});

	it("should prioritize multiple favorites and maintain secondary sort", () => {
		const result = sortPoems(mockPoems, "title", ["1", "3"]); // Zeta and Beta are favorites
		expect(result[0].title).toBe("Beta"); // Favorites sorted alphabetically
		expect(result[1].title).toBe("Zeta");
		expect(result[2].title).toBe("Alpha"); // Non-favorite last
	});

	it("should handle empty favoriteIds array", () => {
		const result = sortPoems(mockPoems, "title", []);
		expect(result[0].title).toBe("Alpha");
		expect(result[1].title).toBe("Beta");
		expect(result[2].title).toBe("Zeta");
	});

	it("should not mutate original array", () => {
		const original = [...mockPoems];
		sortPoems(mockPoems, "title");
		expect(mockPoems).toEqual(original);
	});
});
