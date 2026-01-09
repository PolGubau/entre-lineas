/**
 * Constantes del dominio de poemas
 * Valores inmutables que definen reglas de negocio
 */

export const POEMS_CONSTANTS = {
	STORAGE: {
		FAVORITES_KEY: "poem-favorites",
	},
	SEARCH: {
		DEFAULT_DEBOUNCE_MS: 300,
		MIN_SEARCH_LENGTH: 1,
	},
	CACHE: {
		STALE_TIME_STATIC: Number.POSITIVE_INFINITY,
		STALE_TIME_SEARCH: 60000, // 1 minuto
	},
} as const;
