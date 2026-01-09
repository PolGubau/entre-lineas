/**
 * Poems Dependencies Provider
 * Sistema de Dependency Injection usando React Context
 * Este provider centraliza la creación e inyección de todas las dependencias
 */

import {
	createContext,
	type PropsWithChildren,
	useContext,
	useMemo,
} from "react";
import { GetFavoritesUseCase } from "../application/use-cases/get-favorites.use-case";
import { GetPoemByIdUseCase } from "../application/use-cases/get-poem-by-id.use-case";
import { GetPoemsUseCase } from "../application/use-cases/get-poems.use-case";
import { SearchPoemsUseCase } from "../application/use-cases/search-poems.use-case";
import { ToggleFavoriteUseCase } from "../application/use-cases/toggle-favorite.use-case";
import type { FavoritesRepository } from "../domain/repositories/favorites.repository";
import type { PoemsRepository } from "../domain/repositories/poems.repository";
import type { SearchRepository } from "../domain/repositories/search.repository";
import { FavoritesLocalStorageRepository } from "./repositories/favorites-localstorage.repository";
import { PoemsInMemoryRepository } from "./repositories/poems-inmemory.repository";
import { SearchRepositoryImpl } from "./search.repository.impl";

/**
 * Interfaz que define todas las dependencias disponibles
 * Siguiendo el patrón Service Locator + DI
 */
export interface PoemsDependencies {
	// Repositories
	readonly poemsRepository: PoemsRepository;
	readonly favoritesRepository: FavoritesRepository;
	readonly searchRepository: SearchRepository;

	// Use Cases
	readonly getPoemsUseCase: GetPoemsUseCase;
	readonly getPoemByIdUseCase: GetPoemByIdUseCase;
	readonly searchPoemsUseCase: SearchPoemsUseCase;
	readonly getFavoritesUseCase: GetFavoritesUseCase;
	readonly toggleFavoriteUseCase: ToggleFavoriteUseCase;
}

const PoemsDependenciesContext = createContext<PoemsDependencies | null>(null);

/**
 * Provider que instancia y proporciona todas las dependencias
 * Las dependencias se crean una sola vez (singleton por sesión de app)
 */
export function PoemsDependenciesProvider({ children }: PropsWithChildren) {
	const dependencies = useMemo<PoemsDependencies>(() => {
		// 1. Instanciar Repositories (capa de infraestructura)
		const poemsRepository = new PoemsInMemoryRepository();
		const favoritesRepository = new FavoritesLocalStorageRepository();
		const searchRepository = new SearchRepositoryImpl();

		// 2. Instanciar Use Cases inyectando sus dependencias
		const getPoemsUseCase = new GetPoemsUseCase(poemsRepository);
		const getPoemByIdUseCase = new GetPoemByIdUseCase(poemsRepository);
		const searchPoemsUseCase = new SearchPoemsUseCase(searchRepository);
		const getFavoritesUseCase = new GetFavoritesUseCase(favoritesRepository);
		const toggleFavoriteUseCase = new ToggleFavoriteUseCase(
			favoritesRepository,
		);

		// 3. Retornar el container de dependencias
		return {
			// Repositories
			poemsRepository,
			favoritesRepository,
			searchRepository,

			// Use Cases
			getPoemsUseCase,
			getPoemByIdUseCase,
			searchPoemsUseCase,
			getFavoritesUseCase,
			toggleFavoriteUseCase,
		};
	}, []); // Array vacío = se crea una sola vez

	return (
		<PoemsDependenciesContext.Provider value={dependencies}>
			{children}
		</PoemsDependenciesContext.Provider>
	);
}

/**
 * Hook para acceder a las dependencias inyectadas
 * @throws Error si se usa fuera del Provider
 */
export function usePoemsDependencies(): PoemsDependencies {
	const context = useContext(PoemsDependenciesContext);

	if (!context) {
		throw new Error(
			"usePoemsDependencies must be used within PoemsDependenciesProvider",
		);
	}

	return context;
}

/**
 * HOC para componentes que necesitan dependencias
 * Alternativa al hook para class components (legacy)
 */
export function withPoemsDependencies<P extends object>(
	Component: React.ComponentType<P & { dependencies: PoemsDependencies }>,
) {
	return function WithDependencies(props: P) {
		const dependencies = usePoemsDependencies();
		return <Component {...props} dependencies={dependencies} />;
	};
}
