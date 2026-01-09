import type { Poem } from "~/features/poems/domain/poem.types";

export const madrugadaSaeta: Poem = {
	id: "lorca-madrugada-saeta",
	slug: "madrugada-saeta",
	title: "Madrugada",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo sobre los saeteros que están ciegos como el amor, lanzando saetas que dejan rastros de lirio caliente sobre la noche verde, mientras la quilla de la luna rompe nubes moradas.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Gráfico de la petenera'. La madrugada es momento culminante de las procesiones de Semana Santa. Los saeteros (cantaores de saetas) están 'ciegos como el amor': cantan con los ojos cerrados, desde dentro, sin ver, por puro amor a Cristo. Las saetas dejan 'rastros de lirio caliente': huellas vocales que son flores ardientes. La luna es quilla que navega rompiendo nubes. Las aljabas (carcaj de flechas) se llenan de rocío: las saetas (flechas vocales) se humedecen, se cargan de lágrimas o de frescor del alba.",
		influences: [
			"Saeta flamenca",
			"Madrugada de Semana Santa",
			"Simbolismo lunar",
			"Amor místico",
			"Ceguera del cante",
		],
	},

	analysis: {
		themes: ["religión", "amor", "noche"],
		tone: "místico, ciego, navegante y húmedo",
		meter:
			"versos de arte menor con métrica irregular (pentasílabos, hexasílabos, heptasílabos, octosílabos), ritmo ondulante como navegación lunar",
		rhymeScheme:
			"rima asonante en é-o (saeteros, ciegos, rocío) que crea efecto de letanía amorosa",
		generalSummary:
			"Pero como el amor, los saeteros están ciegos. Sobre la noche verde, las saetas dejan rastros de lirio caliente. La quilla de la luna rompe nubes moradas y las aljabas se llenan de rocío. Estribillo final: '¡Ay, pero como el amor / los saeteros / están ciegos!'",
		interpretation:
			"El poema establece símil central: los saeteros son ciegos 'como el amor'. El amor es ciego (tópico clásico: no ve defectos, no calcula, no razona) y los saeteros cantan desde esa misma ceguera: con ojos cerrados, desde dentro, sin ver el mundo exterior, entregados completamente a su cante. Es ceguera mística, del que ama sin condiciones. 'Sobre la noche verde': la noche de madrugada es verde (color misterioso, acuático, lunar, del mundo vegetal y submarino). 'Las saetas, / dejan rastros de lirio / caliente': las saetas (cantos-flechas) dejan huellas en el aire, rastros visibles o audibles. Estos rastros son de 'lirio caliente': flores (lirios, pureza) pero calientes (ardientes, encendidas por la pasión). Paradoja: el lirio suele ser flor fría, blanca, pero aquí está caliente por el fervor del cante. Las saetas son flores ardientes que dejan estela en la noche. 'La quilla de la luna / rompe nubes moradas': imagen naval magistral. La luna es barco (su parte inferior es quilla) que navega el cielo rompiendo nubes. Las nubes son moradas (color de Semana Santa, de luto, de madrugada). La luna como nave que surca el océano celeste. 'Y las aljabas / se llenan de rocío': las aljabas (carcaj, recipiente de flechas) de los saeteros se llenan de rocío (humedad del alba, lágrimas, frescor). Las saetas (flechas vocales) se humedecen, se cargan de agua, de emoción líquida. Es imagen de renovación: las flechas agotadas se recargan con el rocío del alba. El estribillo final '¡Ay, pero como el amor / los saeteros / están ciegos!' repite y enfatiza con el '¡Ay!' del cante jondo. La ceguera es condición esencial, no defecto: cantan ciegos porque aman, y amar es no ver, es entregarse sin cálculo. Es poema sobre la entrega absoluta del cante, la ceguera mística del saetero que lanza su voz sin ver dónde cae, confiando en el amor.",
	},

	rhetoricalFigures: [
		{
			id: "simil",
			contextualDescription:
				"'Como el amor / los saeteros / están ciegos': comparación central. Los saeteros son ciegos como lo es el amor.",
			verseIds: ["v1", "v2", "v3"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'Rastros de lirio / caliente': las huellas de las saetas son flores ardientes. 'La quilla de la luna': la luna es barco. 'Las aljabas... de rocío': las saetas son flechas que se humedecen.",
			verseIds: ["v6", "v7", "v8", "v9", "v10", "v11"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"La ceguera simboliza amor absoluto, entrega mística. La noche verde simboliza madrugada misteriosa. El lirio simboliza pureza ardiente. La luna simboliza navegación celeste. Las nubes moradas simbolizan luto de Semana Santa. El rocío simboliza lágrimas, renovación, frescor del alba.",
			verseIds: ["v3", "v4", "v7", "v8", "v10", "v11"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"'Lirio caliente': mezcla de lo floral (visual, olfativo) con lo térmico. 'Noche verde': color inusual para la noche, sinestesia cromática-temporal.",
			verseIds: ["v4", "v6", "v7"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"'La quilla de la luna / rompe nubes': la luna actúa como barco con voluntad, navegando y rompiendo. 'Las aljabas / se llenan': recipientes que se llenan solos.",
			verseIds: ["v8", "v9", "v10", "v11"],
		},
		{
			id: "epiteto",
			contextualDescription:
				"'Noche verde', 'lirio caliente', 'nubes moradas': adjetivos cromáticos que crean atmósfera pictórica intensa.",
			verseIds: ["v4", "v7", "v10"],
		},
		{
			id: "anafora",
			contextualDescription:
				"'Pero como el amor / los saeteros / están ciegos' se repite al inicio y al final, creando estructura de estribillo obsesivo.",
			verseIds: ["v1", "v2", "v3", "v12", "v13", "v14"],
		},

		{
			id: "hiperbaton",
			contextualDescription:
				"'Sobre la noche verde, / las saetas, / dejan rastros': inversión del orden (las saetas dejan rastros sobre la noche verde) para enfatizar el espacio (noche verde).",
			verseIds: ["v4", "v5", "v6"],
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
					text: "Pero como el amor",
					syllables: 6,
					annotation:
						"Adversativa: 'Pero' introduce contraste. Símil central: 'como el amor'. El amor es ciego, no ve, no calcula.",
				},
				{
					id: "v2",
					number: 2,
					text: "los saeteros",
					syllables: 5,
					annotation:
						"Sujeto: los cantaores de saetas, los que lanzan flechas vocales durante las procesiones.",
				},
				{
					id: "v3",
					number: 3,
					text: "están ciegos.",
					syllables: 4,
					annotation:
						"Predicado: están ciegos, cantan con ojos cerrados, desde dentro, sin ver. Ceguera mística, del que ama sin condiciones.",
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
					text: "Sobre la noche verde,",
					syllables: 6,
					annotation:
						"La noche de madrugada es verde: color misterioso, lunar, acuático, del mundo vegetal. Noche inusual, mágica.",
				},
				{
					id: "v5",
					number: 5,
					text: "las saetas,",
					syllables: 4,
					annotation:
						"Las saetas como flechas vocales que atraviesan la noche, que dejan marca en el aire.",
				},
				{
					id: "v6",
					number: 6,
					text: "dejan rastros de lirio",
					syllables: 7,
					annotation:
						"Metáfora: las huellas de las saetas son rastros de lirio (flores, pureza). Las saetas son flores que dejan estela.",
				},
				{
					id: "v7",
					number: 7,
					text: "caliente.",
					syllables: 3,
					annotation:
						"Lirio caliente: paradoja. El lirio suele ser frío, blanco, pero aquí está caliente, ardiente por el fervor del cante.",
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
					text: "La quilla de la luna",
					syllables: 7,
					annotation:
						"Metáfora naval: la luna es barco, su parte inferior (cóncava) es quilla. La luna navega el cielo.",
				},
				{
					id: "v9",
					number: 9,
					text: "rompe nubes moradas",
					syllables: 6,
					annotation:
						"La luna-barco rompe (surca, atraviesa) las nubes. Moradas: color de Semana Santa, de luto, de madrugada.",
				},
				{
					id: "v10",
					number: 10,
					text: "y las aljabas",
					syllables: 5,
					annotation:
						"Aljabas: carcaj, recipiente para flechas. Las aljabas de los saeteros (sus bocas, sus gargantas, sus instrumentos vocales).",
				},
				{
					id: "v11",
					number: 11,
					text: "se llenan de rocío.",
					syllables: 6,
					annotation:
						"El rocío del alba llena las aljabas. Las saetas (flechas vocales) se humedecen, se cargan de lágrimas, de frescor. Renovación.",
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
					text: "¡Ay, pero como el amor",
					syllables: 7,
					annotation:
						"Repetición del estribillo inicial, ahora con '¡Ay!' del cante jondo. Lamento que enfatiza la ceguera amorosa.",
				},
				{
					id: "v13",
					number: 13,
					text: "los saeteros",
					syllables: 5,
					annotation:
						"Repetición: los saeteros, insistencia en el sujeto de esta ceguera mística.",
				},
				{
					id: "v14",
					number: 14,
					text: "están ciegos!",
					syllables: 4,
					annotation:
						"Cierre exclamativo: están ciegos, es condición esencial, definitiva. Ceguera como forma suprema del amor y el cante.",
				},
			],
		},
	],
};
