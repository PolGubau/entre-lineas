import type { Poem } from "~/features/poems/domain/poem.types";

export const punal: Poem = {
	id: "lorca-punal",
	slug: "punal",
	title: "Puñal",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que convierte el puñal en símbolo de dolor punzante, comparándolo con la reja del arado y el rayo de sol que hieren e incendian.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', en la sección 'Seis caprichos' donde se poetizan objetos emblemáticos del mundo andaluz y flamenco. El puñal es símbolo recurrente en Lorca: representa la muerte violenta, la traición, el honor manchado, la pasión destructiva. En el mundo del cante jondo y la cultura gitana, el puñal está asociado a la venganza y el destino trágico.",
		influences: [
			"Cante jondo",
			"Lírica popular andaluza",
			"Romancero tradicional",
			"Cultura gitana andaluza",
			"Simbolismo del honor y la venganza",
		],
	},

	analysis: {
		themes: [
			"violencia",
			"dolor",
			"penetración",
			"súplica",
			"muerte",
			"traición",
			"fuego interior",
			"destino trágico",
		],
		tone: "dramático, suplicante y angustioso",
		meter:
			"versos de arte menor (bisílabos, tetrasílabos, hexasílabos y octosílabos) con ritmo entrecortado que imita la ansiedad y el dolor",
		rhymeScheme:
			"rima asonante irregular en ó (corazón, sol) con énfasis en el estribillo monosilábico 'No'",
		generalSummary:
			"El poema presenta dos imágenes violentas del puñal: primero como reja de arado que penetra el yermo (tierra sin cultivar, corazón sin amor), segundo como rayo de sol que incendia hondonadas (profundidades del alma). Entre ambas imágenes se intercala un estribillo desesperado: 'No. / No me lo claves. / No.' que expresa súplica, rechazo, resistencia ante el dolor inevitable.",
		interpretation:
			"El poema funciona en dos niveles: literal (la amenaza del puñal físico) y metafórico (el dolor emocional que atraviesa como un puñal). Las dos comparaciones son paradójicas: la reja del arado es instrumento de cultivo, de vida, pero aquí penetra un 'yermo' (tierra estéril, incapaz de dar fruto); el rayo de sol es fuente de luz y vida, pero aquí 'incendia' las 'terribles hondonadas' (las profundidades oscuras del ser). Ambas imágenes transforman elementos positivos en destructivos, sugiriendo que el amor o la pasión pueden ser instrumentos de dolor. El estribillo repetido ('No. / No me lo claves. / No.') es una súplica desesperada pero probablemente inútil: en el mundo lorquiano, el puñal siempre termina clavándose. El poema captura el momento previo a la tragedia, cuando la víctima suplica pero ya conoce su destino.",
	},

	rhetoricalFigures: [
		{
			id: "simil",
			contextualDescription:
				"Dos comparaciones explícitas: 'como la reja del arado / en el yermo' y 'como un rayo de sol'. Ambas transforman lo positivo (cultivo, luz) en destructivo.",
			verseIds: ["v3", "v4", "v9"],
		},
		{
			id: "metafora",
			contextualDescription:
				"El puñal en el corazón es metáfora del dolor emocional, la traición, el amor destructivo. El 'yermo' simboliza el corazón estéril, incapaz de dar amor.",
			verseIds: ["v1", "v2", "v4"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"El puñal simboliza el dolor, la muerte violenta, la traición, el destino trágico. Es objeto recurrente en la poética lorquiana como instrumento del fatum.",
			verseIds: ["v1", "v8"],
		},
		{
			id: "paradoja",
			contextualDescription:
				"La reja del arado (instrumento de vida/cultivo) y el rayo de sol (fuente de luz/vida) se convierten en instrumentos destructivos. Lo que debería dar vida, mata.",
			verseIds: ["v3", "v4", "v9"],
		},
		{
			id: "hiperbole",
			contextualDescription:
				"'Incendia las terribles hondonadas' exagera el efecto del puñal para expresar el dolor que abrasa desde dentro.",
			verseIds: ["v10", "v11"],
		},
		{
			id: "anafora",
			contextualDescription:
				"Repetición de 'El puñal' al inicio de las dos estrofas principales, creando estructura paralela y énfasis obsesivo.",
			verseIds: ["v1", "v8"],
		},
		{
			id: "epifora",
			contextualDescription:
				"Repetición de 'No.' al final del estribillo (dos veces), reforzando la negación desesperada.",
			verseIds: ["v5", "v7", "v12", "v14"],
		},
		{
			id: "apostrofe",
			contextualDescription:
				"'No me lo claves' es una súplica directa a un tú implícito (el que empuña el puñal), creando dramatismo dialógico.",
			verseIds: ["v6", "v13"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"El puñal 'como un rayo de sol' mezcla lo táctil-doloroso con lo visual-luminoso, creando una imagen sensorial compleja.",
			verseIds: ["v9"],
		},
	],

	estrofas: [
		{
			id: "estrofa-1",
			number: 1,
			type: "libre",
			verses: [
				{
					id: "v1",
					number: 1,
					text: "El puñal,",
					syllables: 3,
					annotation:
						"El puñal es símbolo central del poema: instrumento de muerte, traición, honor, pasión destructiva.",
				},
				{
					id: "v2",
					number: 2,
					text: "entra en el corazón,",
					syllables: 7,
					annotation:
						"Imagen física y metafórica: el puñal atraviesa el corazón (órgano físico y emocional).",
				},
				{
					id: "v3",
					number: 3,
					text: "como la reja del arado",
					syllables: 8,
					annotation:
						"Primera comparación paradójica: la reja del arado (instrumento de cultivo, vida) se convierte en instrumento de dolor.",
				},
				{
					id: "v4",
					number: 4,
					text: "en el yermo.",
					syllables: 4,
					annotation:
						"El 'yermo' es la tierra sin cultivar, estéril. Metáfora del corazón incapaz de amar o dar fruto.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "libre",
			verses: [
				{
					id: "v5",
					number: 5,
					text: "No.",
					syllables: 1,
					annotation:
						"Primera negación monosilábica. Contundente, desesperada, categórica.",
				},
				{
					id: "v6",
					number: 6,
					text: "No me lo claves.",
					syllables: 6,
					annotation:
						"Súplica directa. 'Clavar' es el verbo preciso para la acción del puñal.",
				},
				{
					id: "v7",
					number: 7,
					text: "No.",
					syllables: 1,
					annotation:
						"Repetición de la negación, enfatizando el rechazo inútil.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "libre",
			verses: [
				{
					id: "v8",
					number: 8,
					text: "El puñal,",
					syllables: 3,
					annotation:
						"Anáfora: repetición del inicio de la primera estrofa, estructura paralela.",
				},
				{
					id: "v9",
					number: 9,
					text: "como un rayo de sol,",
					syllables: 7,
					annotation:
						"Segunda comparación paradójica: el rayo de sol (luz, vida, calor) se vuelve destructivo.",
				},
				{
					id: "v10",
					number: 10,
					text: "incendia las terribles",
					syllables: 7,
					annotation:
						"El puñal no solo atraviesa sino que 'incendia': el dolor es fuego interior.",
				},
				{
					id: "v11",
					number: 11,
					text: "hondonadas.",
					syllables: 4,
					annotation:
						"'Hondonadas' son las profundidades, los valles hondos. Metáfora de las profundidades del alma, del ser interior.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "libre",
			verses: [
				{
					id: "v12",
					number: 12,
					text: "No.",
					syllables: 1,
					annotation:
						"Tercera negación. La repetición aumenta la desesperación.",
				},
				{
					id: "v13",
					number: 13,
					text: "No me lo claves.",
					syllables: 6,
					annotation:
						"Repetición exacta de la súplica anterior. El estribillo marca la inevitabilidad.",
				},
				{
					id: "v14",
					number: 14,
					text: "No.",
					syllables: 1,
					annotation:
						"Negación final. A pesar de la súplica, en el universo lorquiano el puñal siempre termina clavándose.",
				},
			],
		},
	],
};
