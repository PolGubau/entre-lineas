/**
 * Tests para ToggleFavoriteUseCase
 * Ejemplo de tests unitarios sin React
 */

import { beforeEach, describe, expect, it, vi } from "vitest";
import { ToggleFavoriteUseCase } from "../application/use-cases/toggle-favorite.use-case";
import type { FavoritesRepository } from "../domain/repositories/favorites.repository";

describe("ToggleFavoriteUseCase", () => {
	let mockRepository: FavoritesRepository;
	let useCase: ToggleFavoriteUseCase;

	beforeEach(() => {
		// ✅ Mock simple del repository
		mockRepository = {
			getFavorites: vi.fn(),
			addFavorite: vi.fn(),
			removeFavorite: vi.fn(),
			isFavorite: vi.fn(),
			toggleFavorite: vi.fn(),
		};

		// Instanciar el use case con el mock
		useCase = new ToggleFavoriteUseCase(mockRepository);
	});

	it("should toggle favorite successfully", async () => {
		// Arrange
		const poemId = "caminante";
		vi.mocked(mockRepository.toggleFavorite).mockResolvedValue(true);

		// Act
		const result = await useCase.execute(poemId);

		// Assert
		expect(result).toBe(true);
		expect(mockRepository.toggleFavorite).toHaveBeenCalledWith(poemId);
		expect(mockRepository.toggleFavorite).toHaveBeenCalledTimes(1);
	});

	it("should throw error when poemId is empty", async () => {
		// Arrange
		const poemId = "";

		// Act & Assert
		await expect(useCase.execute(poemId)).rejects.toThrow(
			"Poem ID is required",
		);
		expect(mockRepository.toggleFavorite).not.toHaveBeenCalled();
	});

	it("should return false when removing from favorites", async () => {
		// Arrange
		const poemId = "siguiriya-gitana";
		vi.mocked(mockRepository.toggleFavorite).mockResolvedValue(false);

		// Act
		const result = await useCase.execute(poemId);

		// Assert
		expect(result).toBe(false);
		expect(mockRepository.toggleFavorite).toHaveBeenCalledWith(poemId);
	});
});
