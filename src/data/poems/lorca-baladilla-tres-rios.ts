import type { Poem } from "~/features/poems/domain/poem.types";

export const baladillaTresRios: Poem = {
	id: "lorca-baladilla-tres-rios",
	slug: "baladilla-de-los-tres-rios",
	title: "Baladilla de los tres ríos",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Baladilla del Poema del cante jondo donde la geografía andaluza se convierte en alegoría de amor, muerte y destino.",
	createdAt: new Date("1924-01-01"),
	updatedAt: new Date("2025-01-01"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationYear: 1931,
		socialContext:
			"Escrito entre 1921 y 1924 y publicado en Poema del cante jondo. Surge en paralelo a la reivindicación lorquiana del cante jondo junto a Manuel de Falla.",
		influences: [
			"Cante jondo",
			"Lírica popular andaluza",
			"Romanticismo",
			"Simbolismo",
			"Luis de Góngora",
		],
	},

	analysis: {
		themes: [
			"amor",
			"muerte",
			"destino",
			"Andalucía",
			"agua como vida",
			"oposición Sevilla–Granada",
		],
		tone: "lírico, popular y elegíaco",
		meter:
			"octosílabo predominante con heptasílabos puntuales y estribillo lírico",
		rhymeScheme: "asonante en versos pares (-ío / -ae), estructura arromanzada",
		generalSummary:
			"El poema traza un recorrido simbólico por la geografía andaluza a través de tres ríos. El Guadalquivir encarna plenitud, amplitud y proyección; los ríos de Granada, llanto, sangre y repliegue interior.",
		interpretation:
			"La topografía funciona como alegoría emocional. El agua simboliza el fluir de la vida y del amor hacia un destino inevitable, mientras el estribillo sintetiza el eje amor–muerte propio del cante jondo.",
	},

	rhetoricalFigures: [
		{
			id: "simbolismo",
			contextualDescription:
				"Los ríos simbolizan estados vitales y emocionales: plenitud frente a dolor, vida frente a herida.",
			verseIds: ["v1", "v3", "v9", "v25"],
		},
		{
			id: "alegoria",
			contextualDescription:
				"La geografía andaluza se convierte en una alegoría del destino humano y del fluir del amor.",
			verseIds: ["v1", "v14", "v25"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"El Guadalquivir posee 'barbas granates' y los ríos 'reman suspiros', dotando a la naturaleza de rasgos humanos.",
			verseIds: ["v7", "v14"],
		},
		{
			id: "asindeton",
			contextualDescription:
				"Yuxtaposición de imágenes sin nexos para reforzar el contraste simbólico.",
			verseIds: ["v1", "v2", "v3", "v4"],
		},
		{
			id: "anafora",
			contextualDescription:
				'Repetición de "El río Guadalquivir" para reforzar su primacía simbólica.',
			verseIds: ["v1", "v6"],
		},
		{
			id: "epifora",
			contextualDescription:
				"Reiteración de 'Granada' y 'Guadalquivir' como cierre simbólico de bloques descriptivos.",
			verseIds: ["v3", "v9", "v15"],
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
					text: "El río Guadalquivir",
					syllables: 7,
					annotation:
						"Apertura geográfica y simbólica. El gran río vertebra Andalucía.",
				},
				{
					id: "v2",
					number: 2,
					text: "va entre naranjos y olivos",
					syllables: 8,
				},
				{
					id: "v3",
					number: 3,
					text: "Los dos ríos de Granada",
					syllables: 8,
				},
				{
					id: "v4",
					number: 4,
					text: "bajan de la nieve al trigo.",
					syllables: 8,
				},
				{
					id: "v5",
					number: 5,
					text: "¡Ay, amor que se fue y no vino!",
					syllables: 8,
					annotation: "Estribillo lírico que introduce el eje amor–pérdida.",
				},
			],
		},
		{
			id: "estrofa-2",
			number: 2,
			type: "copla",
			verses: [
				{
					id: "v6",
					number: 6,
					text: "El río Guadalquivir",
					syllables: 7,
				},
				{
					id: "v7",
					number: 7,
					text: "tiene las barbas granates",
					syllables: 8,
					annotation:
						"Personificación del río. El color granate anticipa la asociación simbólica con la sangre y la vitalidad.",
				},
				{
					id: "v8",
					number: 8,
					text: "Los dos ríos de Granada,",
					syllables: 8,
				},
				{
					id: "v9",
					number: 9,
					text: "uno llanto y otro sangre.",
					syllables: 8,
					annotation:
						"Metáfora directa: los ríos granadinos encarnan dolor y muerte. Dualidad emocional extrema.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "estribillo",
			verses: [
				{
					id: "v10",
					number: 10,
					text: "¡Ay, amor",
					syllables: 3,
				},
				{
					id: "v11",
					number: 11,
					text: "que se fue por el aire!",
					syllables: 8,
					annotation:
						"El amor se asocia a lo inasible y efímero. Variación del estribillo que introduce la idea de volatilidad.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "copla",
			verses: [
				{
					id: "v12",
					number: 12,
					text: "Para los barcos de vela",
					syllables: 8,
				},
				{
					id: "v13",
					number: 13,
					text: "Sevilla tiene un camino;",
					syllables: 8,
					annotation:
						"El Guadalquivir como vía de apertura, comercio y comunicación con el mundo.",
				},
				{
					id: "v14",
					number: 14,
					text: "por el agua de Granada",
					syllables: 8,
				},
				{
					id: "v15",
					number: 15,
					text: "sólo reman los suspiros.",
					syllables: 8,
					annotation:
						"Imagen lírica que contrapone progreso exterior frente a repliegue emocional e interior.",
				},
			],
		},

		{
			id: "estrofa-5",
			number: 5,
			type: "estribillo",
			verses: [
				{
					id: "v16",
					number: 16,
					text: "¡Ay, amor!",
					syllables: 3,
				},
				{
					id: "v17",
					number: 17,
					text: "que se fue y no vino!",
					syllables: 7,
					annotation:
						"Reaparición del lamento amoroso como eje estructural y emocional del poema.",
				},
			],
		},

		{
			id: "estrofa-6",
			number: 6,
			type: "copla",
			verses: [
				{
					id: "v18",
					number: 18,
					text: "Guadalquivir, alta torre",
					syllables: 8,
					annotation:
						"La torre alude a Sevilla: verticalidad, poder, estabilidad.",
				},
				{
					id: "v19",
					number: 19,
					text: "y viento en los naranjales;",
					syllables: 8,
				},
				{
					id: "v20",
					number: 20,
					text: "Darro y Genil, torrecillas",
					syllables: 8,
				},
				{
					id: "v21",
					number: 21,
					text: "muertas sobre los estanques.",
					syllables: 8,
					annotation:
						"Disminutivo y adjetivo refuerzan la idea de decadencia y estancamiento vital.",
				},
			],
		},

		{
			id: "estrofa-7",
			number: 7,
			type: "estribillo",
			verses: [
				{
					id: "v22",
					number: 22,
					text: "¡Ay, amor",
					syllables: 3,
				},
				{
					id: "v23",
					number: 23,
					text: "que se fue por el aire!",
					syllables: 8,
				},
			],
		},

		{
			id: "estrofa-8",
			number: 8,
			type: "copla",
			verses: [
				{
					id: "v24",
					number: 24,
					text: "¿Quién dirá que el agua lleva",
					syllables: 8,
					annotation:
						"Interrogación retórica que introduce una reflexión simbólica.",
				},
				{
					id: "v25",
					number: 25,
					text: "un fuego fatuo de gritos?",
					syllables: 8,
					annotation:
						"Oxímoron implícito: agua y fuego conviven como metáfora del dolor latente.",
				},
			],
		},

		{
			id: "estrofa-9",
			number: 9,
			type: "estribillo",
			verses: [
				{
					id: "v26",
					number: 26,
					text: "¡Ay, amor",
					syllables: 3,
				},
				{
					id: "v27",
					number: 27,
					text: "que se fue y no vino!",
					syllables: 7,
				},
			],
		},

		{
			id: "estrofa-10",
			number: 10,
			type: "copla",
			verses: [
				{
					id: "v28",
					number: 28,
					text: "Lleva azahar, lleva olivas,",
					syllables: 8,
					annotation:
						"Enumeración simbólica de identidad andaluza: fertilidad, tradición, origen.",
				},
				{
					id: "v29",
					number: 29,
					text: "Andalucía a tus mares.",
					syllables: 8,
					annotation:
						"Cierre circular: el agua como destino último, apertura hacia lo universal.",
				},
			],
		},
	],
};
