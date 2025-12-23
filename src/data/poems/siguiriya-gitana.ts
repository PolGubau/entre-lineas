import type { Poem } from "~/features/poems/domain/poem.types";

export const siguiriyaGitana: Poem = {
	id: "lorca-siguiriya-gitana",
	slug: "siguiriya-gitana",
	title: "Siguiriya gitana",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo donde el paisaje andaluz nocturno e invernal se convierte en expresión sonora del dolor, el encierro y la queja colectiva.",
	createdAt: new Date("1921-01-01"),
	updatedAt: new Date("2025-01-01"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationYear: 1931,
		socialContext:
			"Escrito en el marco del proyecto lorquiano de dignificación del cante jondo. La siguiriya, uno de los palos más trágicos del flamenco, sirve como matriz rítmica y simbólica del poema.",
		influences: [
			"Cante jondo",
			"Lírica popular andaluza",
			"Simbolismo",
			"Tradición oral gitana",
			"Romancero tradicional",
		],
	},

	analysis: {
		themes: [
			"dolor",
			"naturaleza hostil",
			"noche",
			"invierno",
			"opresión",
			"queja colectiva",
			"paisaje sonoro",
		],
		tone: "oscuro, trágico y elegíaco",
		meter:
			"versos de arte menor, ritmo libre con fuerte cadencia musical inspirada en la siguiriya",
		rhymeScheme:
			"rima asonante irregular en versos pares, con predominio de finales en vocal cerrada",
		generalSummary:
			"El poema describe un paisaje de olivos, río y cielo nocturno que se agita y se contrae como si estuviera vivo. La naturaleza se transforma en un espacio de lamento donde el viento, los pájaros y los árboles expresan un dolor colectivo.",
		interpretation:
			"El paisaje no es descriptivo sino emocional. La noche y el invierno refuerzan la idea de encierro y sufrimiento, mientras que los sonidos —gritos, temblores, rumores— convierten la naturaleza en una prolongación del cante jondo.",
	},

	rhetoricalFigures: [
		{
			id: "metafora",
			contextualDescription:
				"El campo de olivos que se abre y se cierra como un abanico transforma el paisaje en un objeto animado y rítmico.",
			verseIds: ["v1", "v3"],
		},
		{
			id: "simil",
			contextualDescription:
				"Comparación explícita entre el movimiento del olivar y el gesto mecánico de un abanico.",
			verseIds: ["v3"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"El aire se riza, los olivos gritan y el paisaje reacciona como un ser vivo que sufre.",
			verseIds: ["v9", "v13"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"Imágenes visuales y sonoras se mezclan: lluvia oscura de luceros, gritos cargando los olivos.",
			verseIds: ["v6", "v13"],
		},
		{
			id: "encabalgamiento",
			contextualDescription:
				"Ruptura sintáctica entre versos para generar tensión rítmica y sensación de inestabilidad.",
			verseIds: ["v1", "v2", "v8", "v9"],
		},
	],

	estrofas: [
		{
			id: "estrofa-1",
			number: 1,
			type: "copla",
			verses: [
				{
					id: "v1",
					number: 1,
					text: "El campo",
					syllables: 3,
				},
				{
					id: "v2",
					number: 2,
					text: "de olivos",
					syllables: 3,
				},
				{
					id: "v3",
					number: 3,
					text: "se abre y se cierra",
					syllables: 7,
				},
				{
					id: "v4",
					number: 4,
					text: "como un abanico.",
					syllables: 7,
					annotation:
						"Metáfora y símil que introducen el movimiento rítmico del paisaje.",
				},
				{
					id: "v5",
					number: 5,
					text: "Sobre el olivar",
					syllables: 6,
				},
				{
					id: "v6",
					number: 6,
					text: "hay un cielo hundido",
					syllables: 7,
					annotation:
						"Imagen opresiva que sugiere peso, noche cerrada y falta de horizonte.",
				},
				{
					id: "v7",
					number: 7,
					text: "y una lluvia oscura",
					syllables: 7,
				},
				{
					id: "v8",
					number: 8,
					text: "de luceros fríos.",
					syllables: 7,
					annotation:
						"Paradoja visual: estrellas como lluvia, asociadas al frío y no a la luz.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "copla",
			verses: [
				{
					id: "v9",
					number: 9,
					text: "Tiembla junco y penumbra",
					syllables: 8,
					annotation:
						"Personificación del paisaje fluvial, que participa del temblor emocional.",
				},
				{
					id: "v10",
					number: 10,
					text: "a la orilla del río.",
					syllables: 7,
				},
				{
					id: "v11",
					number: 11,
					text: "Se riza el aire gris.",
					syllables: 7,
					annotation:
						"El viento adquiere corporeidad, reforzando la atmósfera invernal.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "copla",
			verses: [
				{
					id: "v12",
					number: 12,
					text: "Los olivos",
					syllables: 4,
				},
				{
					id: "v13",
					number: 13,
					text: "están cargados",
					syllables: 5,
				},
				{
					id: "v14",
					number: 14,
					text: "de gritos.",
					syllables: 3,
					annotation:
						"Metáfora sonora: el viento y las aves convierten el olivar en un espacio de lamento.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "copla",
			verses: [
				{
					id: "v15",
					number: 15,
					text: "Una bandada",
					syllables: 5,
				},
				{
					id: "v16",
					number: 16,
					text: "de pájaros cautivos,",
					syllables: 7,
					annotation:
						"Imagen de encierro que refuerza la sensación de opresión colectiva.",
				},
				{
					id: "v17",
					number: 17,
					text: "que mueven sus larguísimas",
					syllables: 9,
				},
				{
					id: "v18",
					number: 18,
					text: "colas en lo sombrío.",
					syllables: 7,
					annotation:
						"Cierre visual y simbólico: movimiento inútil en la oscuridad, eco del quejío de la siguiriya.",
				},
			],
		},
	],
};
