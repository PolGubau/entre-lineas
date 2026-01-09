import type { Poem } from "~/features/poems/domain/poem.types";

export const pueblo: Poem = {
	id: "lorca-pueblo",
	slug: "pueblo",
	title: "Pueblo",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que retrata un pueblo andaluz atrapado entre la eternidad religiosa del calvario, el movimiento perpetuo de las veletas y la condena al llanto.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', en la sección que describe paisajes y escenas andaluzas. Refleja la visión lorquiana de los pueblos blancos andaluces: religiosos, cerrados, marcados por la tradición y el dolor colectivo. La imagen del calvario en el monte es típica de la iconografía andaluza.",
		influences: [
			"Cante jondo",
			"Lírica popular andaluza",
			"Generación del 98 (tema de España)",
			"Paisajismo castellano de Antonio Machado",
			"Iconografía religiosa andaluza",
		],
	},

	analysis: {
		themes: [
			"pueblo andaluz",
			"religiosidad popular",
			"estatismo",
			"repetición eterna",
			"llanto colectivo",
			"aislamiento",
			"tradición",
			"destino trágico",
		],
		tone: "descriptivo, melancólico y elegíaco",
		meter:
			"versos de arte menor (pentasílabos y hexasílabos) con ritmo pausado que evoca la quietud del pueblo",
		rhymeScheme:
			"rima asonante en á-o (pelado, calvario, centenarios, embozados, girando, llanto) que crea un efecto de letanía",
		generalSummary:
			"El poema describe un pueblo andaluz desde sus elementos físicos y simbólicos: el calvario en el monte pelado (religiosidad), el agua clara y los olivos (naturaleza ancestral), los hombres embozados en las callejas (misterio, ocultamiento) y las veletas girando eternamente en las torres (repetición sin fin). El poema culmina con una exclamación que define al pueblo como 'perdido' en la 'Andalucía del llanto'.",
		interpretation:
			"El poema construye una visión del pueblo andaluz como espacio atrapado en la repetición y el dolor. El calvario sobre el monte pelado simboliza el peso de la religiosidad y el sufrimiento cristiano. Los hombres embozados sugieren secreto, oscuridad, reserva. Las veletas girando 'eternamente' son la imagen central: movimiento sin avance, cambio sin transformación, tiempo cíclico que no conduce a ninguna parte. El verso final revela el destino del pueblo: estar 'perdido' (olvidado, condenado) en una geografía definida por el llanto. Es una crítica social envuelta en belleza lírica: el pueblo está atrapado en su tradición, en su dolor, en su movimiento repetitivo que no es progreso.",
	},

	rhetoricalFigures: [
		{
			id: "metafora",
			contextualDescription:
				"El 'monte pelado' es metáfora de aridez y desnudez, tanto física como espiritual. Las 'veletas girando eternamente' metaforizan el tiempo cíclico sin progreso.",
			verseIds: ["v1", "v9", "v10"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"El calvario simboliza el sufrimiento religioso y la cruz como destino; los olivos centenarios, la antigüedad y la permanencia; los hombres embozados, el secreto y el encierro; las veletas, la repetición eterna sin avance.",
			verseIds: ["v2", "v4", "v6", "v8"],
		},
		{
			id: "epifora",
			contextualDescription:
				"Repetición de 'girando' en versos consecutivos, creando énfasis en el movimiento perpetuo y monótono.",
			verseIds: ["v8", "v10"],
		},
		{
			id: "apostrofe",
			contextualDescription:
				"Invocación directa al pueblo en el verso final '¡Oh pueblo perdido...!' que expresa compasión y denuncia.",
			verseIds: ["v11"],
		},
		{
			id: "hiperbole",
			contextualDescription:
				"'Eternamente girando' exagera la duración del movimiento de las veletas para expresar la sensación de tiempo detenido en repetición infinita.",
			verseIds: ["v9", "v10"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"El pueblo es tratado como ser vivo que puede estar 'perdido', adquiriendo cualidad de sujeto consciente de su destino.",
			verseIds: ["v11"],
		},
		{
			id: "paralelismo",
			contextualDescription:
				"Estructura paralela en los versos que describen elementos del pueblo: 'Sobre el monte... / Agua clara... / Por las callejas... / y en las torres...'",
			verseIds: ["v1", "v3", "v5", "v7"],
		},
		{
			id: "antitesis",
			contextualDescription:
				"Contraste entre elementos estáticos (monte, agua, olivos) y el único elemento en movimiento (veletas), subrayando que incluso ese movimiento es repetitivo y estéril.",
			verseIds: ["v4", "v8", "v10"],
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
					text: "Sobre el monte pelado",
					syllables: 7,
					annotation:
						"El 'monte pelado' evoca aridez, desnudez, ausencia de vegetación. Símbolo de sequedad espiritual.",
				},
				{
					id: "v2",
					number: 2,
					text: "un calvario.",
					syllables: 4,
					annotation:
						"El calvario (representación de la crucifixión) es símbolo del sufrimiento religioso que domina el pueblo desde lo alto.",
				},
				{
					id: "v3",
					number: 3,
					text: "Agua clara",
					syllables: 4,
					annotation:
						"El agua clara contrasta con la sequedad. Elemento vital en el paisaje andaluz.",
				},
				{
					id: "v4",
					number: 4,
					text: "y olivos centenarios.",
					syllables: 7,
					annotation:
						"Los olivos centenarios simbolizan la antigüedad, la permanencia, el peso del tiempo.",
				},
				{
					id: "v5",
					number: 5,
					text: "Por las callejas",
					syllables: 5,
					annotation:
						"Las callejas son las calles estrechas típicas de los pueblos blancos andaluces.",
				},
				{
					id: "v6",
					number: 6,
					text: "hombres embozados,",
					syllables: 6,
					annotation:
						"'Embozados' significa cubiertos con capa que oculta parte del rostro. Sugiere misterio, ocultamiento, secreto.",
				},
				{
					id: "v7",
					number: 7,
					text: "y en las torres",
					syllables: 5,
					annotation:
						"Las torres, probablemente de iglesias, dominan la arquitectura.",
				},
				{
					id: "v8",
					number: 8,
					text: "veletas girando.",
					syllables: 6,
					annotation:
						"Las veletas que giran con el viento son imagen del movimiento que no conduce a ninguna parte.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "pareado",
			verses: [
				{
					id: "v9",
					number: 9,
					text: "Eternamente",
					syllables: 5,
					annotation:
						"Adverbio que transforma el movimiento circular en condena infinita.",
				},
				{
					id: "v10",
					number: 10,
					text: "girando.",
					syllables: 3,
					annotation:
						"Repetición del gerundio que enfatiza la duración interminable del movimiento cíclico.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "pareado",
			verses: [
				{
					id: "v11",
					number: 11,
					text: "¡Oh pueblo perdido,",
					syllables: 6,
					annotation:
						"Exclamación que expresa compasión y denuncia. 'Perdido' significa olvidado, condenado, sin salida.",
				},
				{
					id: "v12",
					number: 12,
					text: "en la Andalucía del llanto!",
					syllables: 9,
					annotation:
						"Verso final que define la geografía emocional: Andalucía como tierra del llanto, del dolor, del cante jondo.",
				},
			],
		},
	],
};
