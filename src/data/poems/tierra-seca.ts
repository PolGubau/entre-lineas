import type { Poem } from "~/features/poems/domain/poem.types";

export const tierraSeca: Poem = {
	id: "lorca-tierra-seca",
	slug: "tierra-seca",
	title: "Tierra seca",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que retrata la Andalucía árida y antigua, marcada por la pena y la muerte, con el viento como único elemento de movimiento en un paisaje inmóvil.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Forma parte del 'Poema del cante jondo', dentro de la sección que evoca el paisaje andaluz. Refleja la visión lorquiana de una Andalucía ancestral, marcada por la sequedad de la tierra y el peso de la tradición, donde la pobreza y el dolor son elementos constitutivos del paisaje.",
		influences: [
			"Cante jondo",
			"Lírica popular andaluza",
			"Paisajismo simbolista",
			"Generación del 98 (visión de España)",
			"Tradición rural andaluza",
		],
	},

	analysis: {
		themes: [
			"Andalucía",
			"sequedad",
			"antigüedad",
			"pena",
			"muerte",
			"pobreza rural",
			"contraste quietud-movimiento",
			"destino trágico",
		],
		tone: "sobrio, elegíaco, descriptivo y simbólico",
		meter:
			"versos de arte menor (bisílabos, trisílabos, tetrasílabos y hexasílabos) con ritmo entrecortado que imita la aridez del paisaje",
		rhymeScheme:
			"rima asonante irregular en é-a (seca, quieta, inmensas, vieja, pena, cisternas, flechas, alamedas) que crea un efecto de letanía",
		generalSummary:
			"El poema describe la tierra andaluza con adjetivos que subrayan su aridez y antigüedad: seca, quieta, vieja. La tierra está asociada al candil (luz precaria), la pena (dolor), las cisternas hondas (profundidad temporal) y la muerte ciega. Entre estos versos estáticos, aparecen dos estribillos entre paréntesis que introducen el único movimiento: el viento en olivares y sierras, en caminos y alamedas.",
		interpretation:
			"El poema construye un retrato de Andalucía como espacio ancestral marcado por la sequedad física y espiritual. La tierra es 'vieja', cargada de historia y sufrimiento ('pena', 'muerte sin ojos'). El candil representa la luz tenue de la vida rural; las cisternas, la profundidad del tiempo y la memoria colectiva; las flechas y la muerte sin ojos, el destino inevitable. Los versos entre paréntesis, con el viento y la brisa, funcionan como contrapunto lírico: son el único elemento dinámico en un paisaje fundamentalmente inmóvil. Esta tensión entre estatismo y movimiento refleja la contradicción andaluza entre tradición inamovible y anhelo de cambio.",
	},

	rhetoricalFigures: [
		{
			id: "anafora",
			contextualDescription:
				"Repetición insistente de 'Tierra' al inicio de múltiples versos (v1, v2, v7, v11, v13), creando efecto de letanía y obsesión.",
			verseIds: ["v1", "v2", "v7", "v11", "v13"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'La muerte sin ojos' es metáfora de una muerte ciega, inevitable, que no mira a quién toma. 'Las flechas' pueden simbolizar el destino que hiere.",
			verseIds: ["v14", "v15"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"El candil simboliza la luz precaria de la vida rural; la pena, el dolor andaluz; las cisternas hondas, la profundidad temporal y la memoria ancestral; las flechas, el destino mortal.",
			verseIds: ["v9", "v10", "v12", "v15"],
		},
		{
			id: "paralelismo",
			contextualDescription:
				"Los dos estribillos entre paréntesis tienen estructura paralela: elemento natural (viento/brisa) + preposición + lugar. Ambos introducen movimiento en contraste con la quietud.",
			verseIds: ["v5", "v6", "v16", "v17"],
		},
		{
			id: "antitesis",
			contextualDescription:
				"Contraste entre la tierra quieta, seca, inmóvil de los versos principales y el viento/brisa en movimiento de los estribillos parentéticos.",
			verseIds: ["v2", "v5", "v6", "v16", "v17"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"La tierra adquiere atributos humanos: es 'vieja', tiene 'pena', características que la convierten en sujeto sufriente.",
			verseIds: ["v8", "v10"],
		},
		{
			id: "asindeton",
			contextualDescription:
				"Ausencia casi total de conectores entre versos y estrofas, creando efecto de acumulación, fragmentación y sequedad expresiva que refleja la aridez del contenido.",
			verseIds: ["v1", "v2", "v3", "v7", "v8", "v9", "v11", "v13"],
		},
		{
			id: "hiperbaton",
			contextualDescription:
				"Alteración del orden sintáctico normal ('Tierra / vieja / del candil / y la pena') que fragmenta la expresión y le da carácter lírico.",
			verseIds: ["v7", "v8", "v9", "v10"],
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
					text: "Tierra seca,",
					syllables: 4,
					annotation:
						"'Seca' no es solo ausencia de agua sino símbolo de esterilidad, pobreza, dureza vital.",
				},
				{
					id: "v2",
					number: 2,
					text: "tierra quieta",
					syllables: 4,
					annotation:
						"'Quieta' sugiere inmovilidad, estatismo, ausencia de cambio o progreso.",
				},
				{
					id: "v3",
					number: 3,
					text: "de noches",
					syllables: 3,
				},
				{
					id: "v4",
					number: 4,
					text: "inmensas.",
					syllables: 3,
					annotation:
						"Las noches inmensas evocan la soledad, el silencio y la eternidad del paisaje rural.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "pareado",
			verses: [
				{
					id: "v5",
					number: 5,
					text: "(Viento en el olivar,",
					syllables: 7,
					annotation:
						"Primer estribillo entre paréntesis. El viento introduce movimiento, vida, contraste con la quietud de la tierra.",
				},
				{
					id: "v6",
					number: 6,
					text: "viento en la sierra.)",
					syllables: 6,
					annotation:
						"El viento atraviesa los espacios emblemáticos andaluces: olivar y sierra.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "libre",
			verses: [
				{
					id: "v7",
					number: 7,
					text: "Tierra",
					syllables: 2,
					annotation: "Anáfora: repetición obsesiva que martillea el concepto.",
				},
				{
					id: "v8",
					number: 8,
					text: "vieja",
					syllables: 2,
					annotation:
						"'Vieja' evoca antigüedad, tradición ancestral, peso del tiempo.",
				},
				{
					id: "v9",
					number: 9,
					text: "del candil",
					syllables: 3,
					annotation:
						"El candil es símbolo de la luz precaria, la pobreza, la España profunda y rural.",
				},
				{
					id: "v10",
					number: 10,
					text: "y la pena.",
					syllables: 4,
					annotation:
						"'La pena' es el dolor existencial andaluz, tema central del cante jondo.",
				},
				{
					id: "v11",
					number: 11,
					text: "Tierra",
					syllables: 2,
				},
				{
					id: "v12",
					number: 12,
					text: "de las hondas cisternas.",
					syllables: 7,
					annotation:
						"Las cisternas hondas simbolizan la profundidad temporal, la memoria enterrada, el pasado acumulado.",
				},
				{
					id: "v13",
					number: 13,
					text: "Tierra",
					syllables: 2,
				},
				{
					id: "v14",
					number: 14,
					text: "de la muerte sin ojos",
					syllables: 7,
					annotation:
						"Metáfora de una muerte ciega, arbitraria, que no discrimina. La muerte como presencia constante.",
				},
				{
					id: "v15",
					number: 15,
					text: "y las flechas.",
					syllables: 4,
					annotation:
						"Las flechas pueden simbolizar el destino que hiere, la muerte rápida, el dolor que atraviesa.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "pareado",
			verses: [
				{
					id: "v16",
					number: 16,
					text: "(Viento por los caminos.",
					syllables: 8,
					annotation:
						"Segundo estribillo. El viento como elemento itinerante, libre, que contrasta con la tierra fija.",
				},
				{
					id: "v17",
					number: 17,
					text: "Brisa en las alamedas.)",
					syllables: 7,
					annotation:
						"La brisa (viento suave) en las alamedas (árboles del camino) cierra el poema con una nota de delicadeza dentro de la dureza.",
				},
			],
		},
	],
};
