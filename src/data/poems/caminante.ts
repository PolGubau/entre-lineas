import type { Poem } from "~/features/poems/domain/poem.types";

export const caminante: Poem = {
	id: "2",
	slug: "caminante-no-hay-camino",
	title: "Caminante, no hay camino",
	author: "Antonio Machado",
	authorSlug: "antonio-machado",
	shortDescription:
		'Poema filosófico sobre la construcción del propio destino. Parte de "Proverbios y cantares".',
	createdAt: new Date("2025-01-01"),
	updatedAt: new Date("2025-01-01"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 98",
		originCountry: "España",
		publicationYear: 1912,
		socialContext:
			"Escrito en un período de crisis existencial en España tras la pérdida de las últimas colonias.",
		influences: [
			"Krausismo",
			"Simbolismo francés",
			"Filosofía existencialista",
		],
	},

	analysis: {
		themes: ["existencialismo", "libre albedrío", "filosofía", "tiempo"],
		tone: "reflexivo y filosófico",
		meter: "octosílabos",
		rhymeScheme: "asonante",
		generalSummary:
			"El poema utiliza la metáfora del camino y el caminante para reflexionar sobre cómo construimos nuestra vida con cada decisión. No existe un destino prefijado, sino que se va creando al andar.",
		interpretation:
			'La triple negación ("no hay camino", "no hay camino", "caminos de la mar") enfatiza la inexistencia de un destino predeterminado. El poema es una defensa del libre albedrío y la responsabilidad personal.',
	},

	rhetoricalFigures: [
		{
			id: "metafora",
			contextualDescription:
				'El "camino" representa la vida, las decisiones y el destino personal que cada uno construye.',
			verseIds: [
				"2-v1",
				"2-v2",
				"2-v3",
				"2-v4",
				"2-v5",
				"2-v7",
				"2-v9",
				"2-v10",
			],
		},
		{
			id: "paradoja",
			contextualDescription:
				'"Se hace camino al andar" es una paradoja: el camino se crea caminando, no existe antes.',
			verseIds: ["2-v3", "2-v4", "2-v5"],
		},
		{
			id: "apostrofe",
			contextualDescription:
				'El poeta se dirige directamente al "caminante" (lector/ser humano universal).',
			verseIds: ["2-v1", "2-v3", "2-v9"],
		},
		{
			id: "anafora",
			contextualDescription:
				'Repetición de "no hay camino" que enfatiza la inexistencia del destino prefijado.',
			verseIds: ["2-v3", "2-v9"],
		},
	],

	estrofas: [
		{
			id: "estrofa-m1",
			number: 1,
			type: "libre",
			verses: [
				{
					id: "2-v1",
					number: 1,
					text: "Caminante, son tus huellas",
					syllables: 8,
					annotation:
						'Apóstrofe directo al lector. Las "huellas" representan las acciones pasadas.',
				},
				{
					id: "2-v2",
					number: 2,
					text: "el camino y nada más;",
					syllables: 8,
				},
				{
					id: "2-v3",
					number: 3,
					text: "caminante, no hay camino,",
					syllables: 8,
					annotation: "Primera negación del destino predeterminado.",
				},
				{
					id: "2-v4",
					number: 4,
					text: "se hace camino al andar.",
					syllables: 8,
					annotation:
						"Verso central y más célebre del poema. Sintetiza la filosofía existencialista.",
				},
			],
		},
		{
			id: "estrofa-m2",
			number: 2,
			type: "libre",
			verses: [
				{
					id: "2-v5",
					number: 5,
					text: "Al andar se hace el camino,",
					syllables: 8,
				},
				{
					id: "2-v6",
					number: 6,
					text: "y al volver la vista atrás",
					syllables: 8,
					annotation: "Mirada retrospectiva hacia el pasado.",
				},
				{
					id: "2-v7",
					number: 7,
					text: "se ve la senda que nunca",
					syllables: 8,
				},
				{
					id: "2-v8",
					number: 8,
					text: "se ha de volver a pisar.",
					syllables: 8,
					annotation: "La irreversibilidad del tiempo y las decisiones.",
				},
			],
		},
		{
			id: "estrofa-m3",
			number: 3,
			type: "libre",
			verses: [
				{
					id: "2-v9",
					number: 9,
					text: "Caminante no hay camino",
					syllables: 8,
				},
				{
					id: "2-v10",
					number: 10,
					text: "sino estelas en la mar.",
					syllables: 8,
					annotation:
						"Metáfora final: las estelas en el mar desaparecen, como las huellas de nuestras vidas.",
				},
			],
		},
	],
};
