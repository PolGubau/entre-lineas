/**
 * Tests para FavoritesLocalStorageRepository
 * Ejemplo de test de integración con localStorage
 */

import { beforeEach, describe, expect, it } from "vitest";
import { FavoritesLocalStorageRepository } from "../infra/repositories/favorites-localstorage.repository";

describe("FavoritesLocalStorageRepository", () => {
	let repository: FavoritesLocalStorageRepository;

	beforeEach(() => {
		// Limpiar localStorage antes de cada test
		localStorage.clear();
		repository = new FavoritesLocalStorageRepository();
	});

	describe("getFavorites", () => {
		it("should return empty array when no favorites exist", async () => {
			const favorites = await repository.getFavorites();
			expect(favorites).toEqual([]);
		});

		it("should return stored favorites", async () => {
			// Arrange - Simular datos en localStorage
			localStorage.setItem(
				"poem-favorites",
				JSON.stringify(["poem-1", "poem-2"]),
			);

			// Act
			const favorites = await repository.getFavorites();

			// Assert
			expect(favorites).toEqual(["poem-1", "poem-2"]);
		});
	});

	describe("addFavorite", () => {
		it("should add new favorite", async () => {
			// Act
			await repository.addFavorite("caminante");

			// Assert
			const favorites = await repository.getFavorites();
			expect(favorites).toContain("caminante");
		});

		it("should not duplicate favorites", async () => {
			// Act
			await repository.addFavorite("caminante");
			await repository.addFavorite("caminante");

			// Assert
			const favorites = await repository.getFavorites();
			expect(favorites).toEqual(["caminante"]);
		});
	});

	describe("removeFavorite", () => {
		it("should remove existing favorite", async () => {
			// Arrange
			await repository.addFavorite("poem-1");
			await repository.addFavorite("poem-2");

			// Act
			await repository.removeFavorite("poem-1");

			// Assert
			const favorites = await repository.getFavorites();
			expect(favorites).toEqual(["poem-2"]);
		});

		it("should handle removing non-existent favorite", async () => {
			// Arrange
			await repository.addFavorite("poem-1");

			// Act
			await repository.removeFavorite("non-existent");

			// Assert
			const favorites = await repository.getFavorites();
			expect(favorites).toEqual(["poem-1"]);
		});
	});

	describe("isFavorite", () => {
		it("should return true for existing favorite", async () => {
			// Arrange
			await repository.addFavorite("caminante");

			// Act
			const result = await repository.isFavorite("caminante");

			// Assert
			expect(result).toBe(true);
		});

		it("should return false for non-existing favorite", async () => {
			// Act
			const result = await repository.isFavorite("non-existent");

			// Assert
			expect(result).toBe(false);
		});
	});

	describe("toggleFavorite", () => {
		it("should add favorite when not present", async () => {
			// Act
			const result = await repository.toggleFavorite("caminante");

			// Assert
			expect(result).toBe(true);
			const favorites = await repository.getFavorites();
			expect(favorites).toContain("caminante");
		});

		it("should remove favorite when present", async () => {
			// Arrange
			await repository.addFavorite("caminante");

			// Act
			const result = await repository.toggleFavorite("caminante");

			// Assert
			expect(result).toBe(false);
			const favorites = await repository.getFavorites();
			expect(favorites).not.toContain("caminante");
		});
	});
});
