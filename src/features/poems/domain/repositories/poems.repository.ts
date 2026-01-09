/**
 * Poems Repository Interface (Port)
 * Define el contrato para operaciones con poemas
 */

import type { Poem } from "../poem.types";

export interface PoemsRepository {
	/**
	 * Obtiene todos los poemas
	 */
	getAll(): Promise<Poem[]>;

	/**
	 * Busca un poema por ID
	 */
	getById(id: string): Promise<Poem | undefined>;

	/**
	 * Busca un poema por slug
	 */
	getBySlug(slug: string): Promise<Poem | undefined>;

	/**
	 * Filtra poemas por autor
	 */
	getByAuthor(author: string): Promise<Poem[]>;
}
