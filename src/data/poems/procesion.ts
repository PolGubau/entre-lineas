import type { Poem } from "~/features/poems/domain/poem.types";

export const procesion: Poem = {
	id: "lorca-procesion",
	slug: "procesion",
	title: "Procesión",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que describe una procesión de Semana Santa como desfile de figuras míticas: unicornios que se convierten en astrónomos, Merlines, Ecce Homo, Durandarte y Orlando furioso.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Gráfico de la petenera'. La procesión de Semana Santa se transfigura en desfile de seres míticos. Los nazarenos con sus capirotes cónicos parecen unicornios desde lejos, luego astrónomos (por los sombreros puntiagudos). Merlín es mago artúrico. Ecce Homo ('He aquí el hombre') es Cristo presentado por Pilatos. Durandarte es héroe del romancero español encantado. Orlando furioso es héroe de Ariosto enloquecido por amor.",
		influences: [
			"Procesiones de Semana Santa",
			"Romancero español (Durandarte)",
			"Literatura caballeresca (Orlando)",
			"Leyendas artúricas (Merlín)",
			"Iconografía cristiana (Ecce Homo)",
		],
	},

	analysis: {
		themes: ["religión"],
		tone: "fantástico, interrogativo, maravillado y onírico",
		meter:
			"versos de arte menor con métrica irregular (pentasílabos, octosílabos, endecasílabos), ritmo procesional",
		rhymeScheme:
			"rima asonante en ó-o (unicornios, mitológico, astrónomos, Homo, furioso)",
		generalSummary:
			"Por la calleja vienen extraños unicornios. Pregunta: ¿de qué campo, de qué bosque mitológico? Más cerca, ya parecen astrónomos. Son fantásticos Merlines y el Ecce Homo, Durandarte encantado, Orlando furioso. La procesión se transfigura en desfile de seres legendarios.",
		interpretation:
			"El poema captura la metamorfosis de la percepción durante una procesión de Semana Santa. Desde lejos, por la calleja (calle estrecha), vienen figuras que parecen 'extraños unicornios': los nazarenos con sus capirotes cónicos (puntiagudos) se asemejan a estos seres míticos de un solo cuerno. La pregunta retórica '¿De qué campo, / de qué bosque mitológico?' subraya el carácter fantástico: estos seres no vienen de un lugar real sino de un bosque mitológico, de un reino de leyenda. 'Más cerca, / ya parecen astrónomos': al acercarse, los capirotes puntiagudos recuerdan sombreros de magos o astrónomos medievales. La procesión se puebla entonces de figuras legendarias: 'Fantásticos Merlines' (el mago de las leyendas artúricas, múltiple, plural), 'el Ecce Homo' (Cristo presentado por Pilatos: 'He aquí el hombre', imagen del dolor sagrado), 'Durandarte encantado' (héroe del romancero español que fue encantado, dormido en cueva, figura de la suspensión trágica), y 'Orlando furioso' (caballero italiano de Ariosto que enloqueció de amor, figura del delirio). La procesión es así síntesis de mitologías: cristiana (Ecce Homo), artúrica (Merlín), española (Durandarte) e italiana (Orlando). Todos son figuras del dolor, el encantamiento, la locura, la sabiduría mágica. Lorca convierte la procesión religiosa en desfile mítico donde lo sagrado cristiano se funde con lo legendario pagano. Es visión infantil o visionaria que ve más allá de lo literal, que transfigura lo cotidiano en maravilla.",
	},

	rhetoricalFigures: [
		{
			id: "metafora",
			contextualDescription:
				"Los nazarenos son 'extraños unicornios', luego 'astrónomos', luego 'Merlines': metamorfosis sucesivas de la percepción.",
			verseIds: ["v1", "v2", "v5", "v6", "v7"],
		},

		{
			id: "epiteto",
			contextualDescription:
				"'Extraños unicornios', 'bosque mitológico', 'Fantásticos Merlines', 'Durandarte encantado', 'Orlando furioso': adjetivos que subrayan lo extraordinario.",
			verseIds: ["v2", "v4", "v7", "v9", "v10"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"Los unicornios simbolizan pureza y misterio. Los astrónomos simbolizan sabiduría y búsqueda. Merlín simboliza magia. Ecce Homo simboliza dolor sagrado. Durandarte simboliza encantamiento trágico. Orlando simboliza locura de amor.",
			verseIds: ["v2", "v6", "v7", "v8", "v9", "v10"],
		},
		{
			id: "hiperbaton",
			contextualDescription:
				"'Por la calleja vienen / extraños unicornios' invierte el orden (unicornios vienen por la calleja) para enfatizar el lugar de aparición.",
			verseIds: ["v1", "v2"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"Las figuras de la procesión se animan, se convierten en seres vivos con voluntad: unicornios que vienen, Merlines y héroes que caminan.",
			verseIds: ["v1", "v2", "v7", "v8", "v9", "v10"],
		},

		{
			id: "sinestesia",
			contextualDescription:
				"La visión se transforma según la distancia: de unicornios a astrónomos a figuras específicas. Sinestesia espacial-imaginativa.",
			verseIds: ["v2", "v6", "v7"],
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
					text: "Por la calleja vienen",
					syllables: 7,
					annotation:
						"Calleja: calle estrecha, típica de ciudades andaluzas. Por ella aparece la procesión, como aparición en espacio reducido.",
				},
				{
					id: "v2",
					number: 2,
					text: "extraños unicornios.",
					syllables: 6,
					annotation:
						"Primera metamorfosis: los nazarenos con capirotes cónicos parecen unicornios, seres míticos de un cuerno. 'Extraños': insólitos, asombrosos.",
				},
				{
					id: "v3",
					number: 3,
					text: "¿De qué campo,",
					syllables: 4,
					annotation:
						"Pregunta retórica que indaga el origen mítico de estas apariciones. ¿De qué lugar legendario vienen?",
				},
				{
					id: "v4",
					number: 4,
					text: "de qué bosque mitológico?",
					syllables: 8,
					annotation:
						"No vienen de lugar real sino de bosque mitológico: reino de leyendas, espacio del mito y la fábula.",
				},
				{
					id: "v5",
					number: 5,
					text: "Más cerca,",
					syllables: 3,
					annotation:
						"Cambio de distancia: al acercarse la procesión, la percepción se transforma. Segunda metamorfosis.",
				},
				{
					id: "v6",
					number: 6,
					text: "ya parecen astrónomos.",
					syllables: 7,
					annotation:
						"Los capirotes puntiagudos ahora recuerdan sombreros de astrónomos o magos medievales. Sabiduría, búsqueda de estrellas.",
				},
				{
					id: "v7",
					number: 7,
					text: "Fantásticos Merlines",
					syllables: 7,
					annotation:
						"Merlín, mago de las leyendas artúricas. 'Fantásticos': extraordinarios, asombrosos. Plural: múltiples magos en la procesión.",
				},
				{
					id: "v8",
					number: 8,
					text: "y el Ecce Homo,",
					syllables: 5,
					annotation:
						"'Ecce Homo': 'He aquí el hombre', palabras de Pilatos presentando a Cristo flagelado. Imagen icónica del dolor sagrado.",
				},
				{
					id: "v9",
					number: 9,
					text: "Durandarte encantado,",
					syllables: 7,
					annotation:
						"Héroe del romancero español que fue encantado, dormido en cueva. Figura de la suspensión trágica, del sueño sin fin.",
				},
				{
					id: "v10",
					number: 10,
					text: "Orlando furioso.",
					syllables: 6,
					annotation:
						"Caballero italiano del poema de Ariosto que enloqueció de amor. 'Furioso': loco, frenético, delirio amoroso como demencia.",
				},
			],
		},
	],
};
