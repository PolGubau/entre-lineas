import type { Poem } from "~/features/poems/domain/poem.types";

export const laGuitarra: Poem = {
	id: "lorca-la-guitarra",
	slug: "la-guitarra",
	title: "La guitarra",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo donde la guitarra se convierte en símbolo del llanto eterno, del amor herido y del drama colectivo andaluz.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1931-01-01"),
		socialContext:
			"Escrito dentro del proyecto de recuperación del cante jondo. La guitarra aparece como instrumento fundador del lamento andaluz y vehículo del drama histórico, amoroso y trágico.",
		influences: [
			"Cante jondo",
			"Siguiriya gitana",
			"Lírica popular andaluza",
			"Tradición oral flamenca",
			"Simbolismo",
		],
	},

	analysis: {
		themes: ["dolor", "amor", "muerte", "música"],
		tone: "trágico, elegíaco y obsesivo",
		meter:
			"versos de arte menor, ritmo reiterativo y martilleante que imita el toque monótono de la guitarra",
		rhymeScheme:
			"rima asonante irregular con fuerte apoyo en la repetición sintáctica y léxica",
		generalSummary:
			"El poema presenta a la guitarra como un ser que llora sin descanso. Su sonido provoca la ruptura de la madrugada y arrastra recuerdos de amor, muerte y pérdida irreparable.",
		interpretation:
			"La guitarra es metáfora del corazón humano y del alma andaluza. Su llanto continuo expresa un dolor que no puede silenciarse porque pertenece a la memoria colectiva y al destino trágico.",
	},

	rhetoricalFigures: [
		{
			id: "anafora",
			contextualDescription:
				'Repetición insistente de "Empieza el llanto" y "Es imposible callarla" para reproducir la monotonía del toque.',
			verseIds: ["v1", "v5", "v7", "v11"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"La guitarra llora, tiene corazón y sufre heridas, adquiriendo condición humana.",
			verseIds: ["v1", "v12", "v25"],
		},
		{
			id: "simil",
			contextualDescription:
				"Comparación del llanto de la guitarra con el agua y el viento para reforzar su continuidad.",
			verseIds: ["v13", "v14"],
		},
		{
			id: "metafora",
			contextualDescription:
				"Las copas de la madrugada que se rompen y el corazón atravesado por espadas expresan el dolor emocional.",
			verseIds: ["v3", "v26"],
		},
		{
			id: "apostrofe",
			contextualDescription:
				"Invocación directa a la guitarra como entidad viva y sagrada.",
			verseIds: ["v24"],
		},
	],

	estrofas: [
		{
			id: "estrofa-1",
			number: 1,
			type: "copla",
			verses: [
				{ id: "v1", number: 1, text: "Empieza el llanto", syllables: 6 },
				{ id: "v2", number: 2, text: "de la guitarra,", syllables: 6 },
				{
					id: "v3",
					number: 3,
					text: "se rompen las copas",
					syllables: 7,
				},
				{
					id: "v4",
					number: 4,
					text: "de la madrugada.",
					syllables: 7,
					annotation:
						"La música irrumpe en el silencio nocturno como una fractura temporal.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "copla",
			verses: [
				{ id: "v5", number: 5, text: "Empieza el llanto", syllables: 6 },
				{ id: "v6", number: 6, text: "de la guitarra.", syllables: 6 },
				{ id: "v7", number: 7, text: "Es inútil", syllables: 4 },
				{ id: "v8", number: 8, text: "callarla.", syllables: 3 },
				{ id: "v9", number: 9, text: "Es imposible", syllables: 5 },
				{
					id: "v10",
					number: 10,
					text: "callarla.",
					syllables: 3,
					annotation: "Reiteración que subraya la inevitabilidad del dolor.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "copla",
			verses: [
				{
					id: "v11",
					number: 11,
					text: "Llora monótona",
					syllables: 6,
				},
				{
					id: "v12",
					number: 12,
					text: "como llora el agua,",
					syllables: 7,
				},
				{
					id: "v13",
					number: 13,
					text: "como llora el viento",
					syllables: 7,
				},
				{
					id: "v14",
					number: 14,
					text: "sobre la nevada.",
					syllables: 7,
					annotation:
						"Símiles naturales que transmiten continuidad y frialdad emocional.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "copla",
			verses: [
				{ id: "v15", number: 15, text: "Llora por cosas", syllables: 5 },
				{ id: "v16", number: 16, text: "lejanas.", syllables: 3 },
				{
					id: "v17",
					number: 17,
					text: "Arena del Sur caliente",
					syllables: 8,
				},
				{
					id: "v18",
					number: 18,
					text: "que pide camelias blancas.",
					syllables: 9,
					annotation:
						"Contraste cromático y térmico que sugiere deseo imposible.",
				},
			],
		},

		{
			id: "estrofa-5",
			number: 5,
			type: "copla",
			verses: [
				{
					id: "v19",
					number: 19,
					text: "Llora flecha sin blanco,",
					syllables: 8,
				},
				{
					id: "v20",
					number: 20,
					text: "la tarde sin mañana,",
					syllables: 7,
				},
				{
					id: "v21",
					number: 21,
					text: "y el primer pájaro muerto",
					syllables: 8,
				},
				{
					id: "v22",
					number: 22,
					text: "sobre la rama.",
					syllables: 6,
					annotation: "Imágenes de destino truncado y muerte temprana.",
				},
			],
		},

		{
			id: "estrofa-6",
			number: 6,
			type: "copla",
			verses: [
				{ id: "v23", number: 23, text: "¡Oh guitarra!", syllables: 4 },
				{
					id: "v24",
					number: 24,
					text: "Corazón malherido",
					syllables: 7,
				},
				{
					id: "v25",
					number: 25,
					text: "por cinco espadas.",
					syllables: 6,
					annotation:
						"Metáfora final: las cinco cuerdas como espadas que hieren el corazón.",
				},
			],
		},
	],
};
