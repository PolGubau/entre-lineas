import type { Poem } from "~/features/poems/domain/poem.types";

export const yDespues: Poem = {
	id: "lorca-y-despues",
	slug: "y-despues",
	title: "Y después",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que medita sobre la desaparición de todo lo humano: tiempo, deseo, ilusión. Solo permanece el desierto como símbolo del vacío existencial.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', colección que explora los temas profundos del flamenco: muerte, soledad, destino. El poema refleja una visión nihilista o budista de la existencia donde todo se desvanece.",
		influences: [
			"Cante jondo",
			"Filosofía budista",
			"Nihilismo",
			"Simbolismo",
			"Lírica popular andaluza",
		],
	},

	analysis: {
		themes: [
			"vacío existencial",
			"desaparición",
			"tiempo",
			"deseo",
			"ilusión",
			"muerte",
			"soledad",
			"eternidad del vacío",
		],
		tone: "meditativo, elegíaco y desolador",
		meter:
			"versos de arte menor (pentasílabos y hexasílabos) con ritmo breve que acelera la sensación de desvanecimiento",
		rhymeScheme:
			"rima asonante en é-o (tiempo, deseo, desierto) que crea un efecto hipnótico de repetición",
		generalSummary:
			"El poema describe tres desvanecimientos sucesivos: los laberintos del tiempo, el corazón como fuente del deseo, y la ilusión de la aurora y los besos. Después de cada desaparición, solo queda el desierto. La última estrofa elimina el paréntesis y afirma sin ambigüedad: solo queda un desierto ondulado.",
		interpretation:
			"El poema es una meditación sobre la impermanencia. Cada estrofa elimina una dimensión de la experiencia humana: primero la complejidad temporal, luego el impulso vital, finalmente la esperanza y el amor. El desierto no es solo ausencia sino presencia absoluta del vacío. El adjetivo 'ondulado' en el verso final sugiere que incluso el vacío tiene movimiento, una eternidad dinámica pero estéril.",
	},

	rhetoricalFigures: [
		{
			id: "anafora",
			contextualDescription:
				"Repetición insistente de 'se desvanecen' al final de las tres primeras estrofas, marcando el ritmo de la desaparición.",
			verseIds: ["v3", "v8", "v13"],
		},
		{
			id: "paralelismo",
			contextualDescription:
				"Estructura paralela en las tres primeras estrofas: sujeto + verbo desvanecerse + paréntesis con '(Sólo queda / el desierto.)'",
			verseIds: ["v1", "v6", "v11", "v4", "v5", "v9", "v10", "v14", "v15"],
		},
		{
			id: "epifora",
			contextualDescription:
				"Repetición de 'el desierto' al final de cada estrofa (en paréntesis primero, sin paréntesis al final), como estribillo obsesivo.",
			verseIds: ["v5", "v10", "v15", "v16"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'Los laberintos que crea el tiempo' metaforiza la complejidad de la experiencia temporal. 'El corazón, fuente del deseo' convierte el órgano en origen de todo impulso vital.",
			verseIds: ["v1", "v2", "v6", "v7"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"El desierto es símbolo del vacío existencial, la ausencia total, la muerte definitiva. No es un espacio físico sino un estado ontológico.",
			verseIds: ["v5", "v10", "v15", "v16", "v17"],
		},
		{
			id: "sinecdoque",
			contextualDescription:
				"'El corazón' representa la totalidad del ser emocional y vital, no solo el órgano físico.",
			verseIds: ["v6"],
		},
		{
			id: "paradoja",
			contextualDescription:
				"El desierto 'ondulado' es paradójico: sugiere movimiento en la inmovilidad, vida en la muerte, forma en el vacío.",
			verseIds: ["v17", "v18"],
		},
		{
			id: "elipsis",
			contextualDescription:
				"Los paréntesis crean elipsis visuales y rítmicas, como si el desierto fuera un susurro o una verdad que apenas se atreve a pronunciar hasta el final.",
			verseIds: ["v4", "v5", "v9", "v10", "v14", "v15"],
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
					text: "Los laberintos",
					syllables: 5,
					annotation:
						"Los laberintos simbolizan la complejidad, la confusión y los caminos enredados de la experiencia humana.",
				},
				{
					id: "v2",
					number: 2,
					text: "que crea el tiempo,",
					syllables: 6,
				},
				{
					id: "v3",
					number: 3,
					text: "se desvanecen.",
					syllables: 5,
					annotation: "Primera desaparición: la complejidad temporal se anula.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "libre",
			verses: [
				{
					id: "v4",
					number: 4,
					text: "(Sólo queda",
					syllables: 4,
					annotation:
						"Los paréntesis sugieren un susurro, una verdad dolorosa que se pronuncia en voz baja.",
				},
				{
					id: "v5",
					number: 5,
					text: "el desierto.)",
					syllables: 4,
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "libre",
			verses: [
				{
					id: "v6",
					number: 6,
					text: "El corazón,",
					syllables: 4,
					annotation:
						"El corazón como sinécdoque del ser emocional y vital completo.",
				},
				{
					id: "v7",
					number: 7,
					text: "fuente del deseo,",
					syllables: 6,
				},
				{
					id: "v8",
					number: 8,
					text: "se desvanece.",
					syllables: 5,
					annotation: "Segunda desaparición: el impulso vital se extingue.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "libre",
			verses: [
				{
					id: "v9",
					number: 9,
					text: "(Sólo queda",
					syllables: 4,
				},
				{
					id: "v10",
					number: 10,
					text: "el desierto.)",
					syllables: 4,
				},
			],
		},

		{
			id: "estrofa-5",
			number: 5,
			type: "libre",
			verses: [
				{
					id: "v11",
					number: 11,
					text: "La ilusión de la aurora",
					syllables: 8,
					annotation:
						"La aurora simboliza esperanza, renovación, nuevo comienzo.",
				},
				{
					id: "v12",
					number: 12,
					text: "y los besos,",
					syllables: 4,
					annotation: "Los besos representan el amor, la conexión humana.",
				},
				{
					id: "v13",
					number: 13,
					text: "se desvanecen.",
					syllables: 5,
					annotation:
						"Tercera y última desaparición: esperanza y amor se extinguen.",
				},
			],
		},

		{
			id: "estrofa-6",
			number: 6,
			type: "libre",
			verses: [
				{
					id: "v14",
					number: 14,
					text: "Sólo queda",
					syllables: 4,
					annotation:
						"Sin paréntesis ahora: la afirmación es definitiva, sin ambigüedad.",
				},
				{
					id: "v15",
					number: 15,
					text: "el desierto.",
					syllables: 4,
				},
				{
					id: "v16",
					number: 16,
					text: "Un ondulado",
					syllables: 5,
					annotation:
						"El adjetivo 'ondulado' añade movimiento paradójico al vacío estático.",
				},
				{
					id: "v17",
					number: 17,
					text: "desierto.",
					syllables: 3,
					annotation:
						"Repetición final que cierra el poema en el vacío absoluto.",
				},
			],
		},
	],
};
