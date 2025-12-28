import type { Poem } from "~/features/poems/domain/poem.types";

export const elGrito: Poem = {
	id: "6",
	slug: "el-grito",
	title: "El Grito",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema visual y sonoro del Poema del cante jondo donde el grito flamenco traza una trayectoria cósmica, transformándose en imagen acústica y cromática del dolor.",
	createdAt: new Date("1921-01-01"),
	updatedAt: new Date("2025-01-01"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationYear: 1931,
		socialContext:
			"Forma parte del 'Poema del cante jondo', proyecto de Lorca para dignificar y preservar el cante primitivo andaluz. El grito (ay) es el núcleo expresivo del flamenco, manifestación pura del duende.",
		influences: [
			"Cante jondo",
			"Flamenco primitivo",
			"Vanguardias europeas",
			"Sinestesia modernista",
			"Lírica popular andaluza",
			"Simbolismo cromático",
		],
	},

	analysis: {
		themes: [
			"grito",
			"dolor",
			"paisaje sonoro",
			"noche",
			"muerte",
			"Andalucía",
			"música primitiva",
			"sinestesia",
			"soledad",
		],
		tone: "místico, dramático y visual",
		meter:
			"verso libre con predominio de hexasílabos y heptasílabos, imitando la cadencia irregular del cante jondo",
		rhymeScheme:
			"sin rima regular, apoyándose en la asonancia y la repetición del estribillo '¡Ay!'",
		generalSummary:
			"El poema describe la trayectoria geométrica y cósmica de un grito flamenco que atraviesa el paisaje andaluz. El grito se transforma en arco iris negro, en vibración sonora y en llamada que despierta a los habitantes de las cuevas.",
		interpretation:
			"Lorca convierte el 'ay' del cante jondo en imagen visual y sonora. La elipse geométrica del grito representa el movimiento circular del dolor que nunca termina. El arco iris negro sobre la noche azul es oxímoron que expresa la belleza trágica del flamenco. Las cuerdas del viento y el arco de viola transforman el paisaje en instrumento musical cósmico.",
	},

	rhetoricalFigures: [
		{
			id: "metafora",
			contextualDescription:
				"El grito se convierte en elipse geométrica, forma visual que traza su recorrido espacial y emocional.",
			verseIds: ["6-v1"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"El grito adquiere movimiento propio, va 'de monte a monte' como ser vivo.",
			verseIds: ["6-v2", "6-v3"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"Fusión de sensaciones: el grito (sonido) se visualiza como arco iris negro, mezcla de imagen acústica y cromática.",
			verseIds: ["6-v5", "6-v6"],
		},
		{
			id: "oxímoron",
			contextualDescription:
				"'Arco iris negro' une dos conceptos contradictorios: el arco iris es cromático y luminoso, pero aquí es negro, símbolo de luto y tragedia.",
			verseIds: ["6-v5"],
		},
		{
			id: "simil",
			contextualDescription:
				"El grito es comparado con un arco de viola, instrumento que produce sonidos graves y vibrantes como el cante jondo.",
			verseIds: ["6-v8"],
		},
		{
			id: "metafora",
			contextualDescription:
				"Las 'cuerdas del viento' convierten el paisaje entero en un instrumento musical invisible.",
			verseIds: ["6-v10"],
		},
		{
			id: "alegoria",
			contextualDescription:
				"Los olivos simbolizan Andalucía y su paisaje mítico; la noche azul representa el misterio y la profundidad emocional.",
			verseIds: ["6-v4", "6-v6"],
		},
		{
			id: "hiperbole",
			contextualDescription:
				"El grito hace vibrar 'largas cuerdas del viento', exageración que transmite su poder cósmico.",
			verseIds: ["6-v9", "6-v10"],
		},
		{
			id: "metafora",
			contextualDescription:
				"Las gentes de las cuevas asomando sus velones crea una imagen luminosa y ancestral del pueblo gitano respondiendo al grito.",
			verseIds: ["6-v13", "6-v14"],
		},
		{
			id: "anafora",
			contextualDescription:
				"La interjección '¡Ay!' se repite tres veces como eco del grito primitivo del cante jondo, núcleo emocional del poema.",
			verseIds: ["6-v7", "6-v11", "6-v15"],
		},
		{
			id: "encabalgamiento",
			contextualDescription:
				"El verso se rompe entre 'será un arco iris negro' y 'sobre la noche azul', creando suspensión dramática.",
			verseIds: ["6-v5", "6-v6"],
		},
		{
			id: "paralelismo",
			contextualDescription:
				"Estructura simétrica entre 'va de monte / a monte' que refuerza la trayectoria del grito.",
			verseIds: ["6-v2", "6-v3"],
		},
	],

	estrofas: [
		{
			id: "estrofa-1",
			number: 1,
			type: "terceto",
			verses: [
				{
					id: "6-v1",
					number: 1,
					text: "La elipse de un grito,",
					syllables: 7,
					annotation:
						"Imagen geométrica del grito: su trayectoria es una curva cerrada que siempre regresa, como el dolor circular del flamenco.",
				},
				{
					id: "6-v2",
					number: 2,
					text: "va de monte",
					syllables: 4,
				},
				{
					id: "6-v3",
					number: 3,
					text: "a monte.",
					syllables: 3,
					annotation:
						"El grito recorre el paisaje andaluz, rebotando entre montañas como eco primordial.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "cuarteto",
			verses: [
				{
					id: "6-v4",
					number: 4,
					text: "Desde los olivos,",
					syllables: 6,
					annotation:
						"Los olivos son símbolo del paisaje andaluz y marco desde donde se proyecta el grito.",
				},
				{
					id: "6-v5",
					number: 5,
					text: "será un arco iris negro",
					syllables: 8,
					annotation:
						"Oxímoron: el grito se visualiza como arco iris, pero negro, símbolo de luto y tragedia. Belleza y muerte se funden.",
				},
				{
					id: "6-v6",
					number: 6,
					text: "sobre la noche azul.",
					syllables: 6,
					annotation:
						"La noche azul es el lienzo cósmico sobre el que se proyecta el dolor. El azul intensifica la oscuridad emocional.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "verso aislado",
			verses: [
				{
					id: "6-v7",
					number: 7,
					text: "¡Ay!",
					syllables: 1,
					annotation:
						"Primer estribillo. La interjección '¡Ay!' es el núcleo sonoro del cante jondo, expresión pura del duende y del dolor sin palabras.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "terceto",
			verses: [
				{
					id: "6-v8",
					number: 8,
					text: "Como un arco de viola,",
					syllables: 7,
					annotation:
						"Símil musical: el grito tiene la forma curva y la vibración grave de un arco de viola tocando cuerdas tensas.",
				},
				{
					id: "6-v9",
					number: 9,
					text: "el grito ha hecho vibrar",
					syllables: 7,
				},
				{
					id: "6-v10",
					number: 10,
					text: "largas cuerdas del viento.",
					syllables: 8,
					annotation:
						"Hipérbole y metáfora: el paisaje entero se convierte en instrumento musical. El viento tiene cuerdas invisibles que vibran con el grito.",
				},
			],
		},

		{
			id: "estrofa-5",
			number: 5,
			type: "verso aislado",
			verses: [
				{
					id: "6-v11",
					number: 11,
					text: "¡Ay!",
					syllables: 1,
					annotation:
						"Segundo estribillo. La repetición intensifica el eco del grito y marca el ritmo emocional del poema.",
				},
			],
		},

		{
			id: "estrofa-6",
			number: 6,
			type: "pareado",
			verses: [
				{
					id: "6-v12",
					number: 12,
					text: "(Las gentes de las cuevas",
					syllables: 8,
					annotation:
						"Paréntesis que introduce una escena visual: el pueblo gitano habitante de las cuevas de Sacromonte responde al grito.",
				},
				{
					id: "6-v13",
					number: 13,
					text: "asoman sus velones)",
					syllables: 7,
					annotation:
						"Los velones (lámparas de aceite) simbolizan la vida ancestral y la respuesta comunitaria al dolor. Imagen de luz en la oscuridad.",
				},
			],
		},

		{
			id: "estrofa-7",
			number: 7,
			type: "verso aislado",
			verses: [
				{
					id: "6-v14",
					number: 14,
					text: "¡Ay!",
					syllables: 1,
					annotation:
						"Tercer y último estribillo. El grito cierra el poema como eco que se pierde en la noche, pero nunca termina. Representa la eternidad del dolor flamenco.",
				},
			],
		},
	],
};
