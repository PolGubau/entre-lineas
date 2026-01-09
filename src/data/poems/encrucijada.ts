import type { Poem } from "~/features/poems/domain/poem.types";

export const encrucijada: Poem = {
	id: "lorca-encrucijada",
	slug: "encrucijada",
	title: "Encrucijada",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que evoca una encrucijada nocturna cargada de amenaza, donde el viento del Este, un farol solitario y el puñal omnipresente crean una atmósfera de violencia inminente.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Seis caprichos'. La encrucijada es lugar simbólico en la cultura popular: sitio de decisiones, encuentros fatales, pactos diabólicos, duelos. En el mundo gitano y flamenco, la encrucijada nocturna está asociada al peligro, la navaja, el ajuste de cuentas.",
		influences: [
			"Cante jondo",
			"Romancero gitano (en gestación)",
			"Folclore andaluz",
			"Simbolismo de la encrucijada",
			"Cultura del honor y la venganza",
		],
	},

	analysis: {
		themes: ["violencia", "muerte", "noche"],
		tone: "angustioso, paranoico, tenso y premonitor",
		meter:
			"versos de arte menor (bisílabos, tetrasílabos y pentasílabos) con ritmo entrecortado que imita la respiración agitada del miedo",
		rhymeScheme:
			"rima asonante en ó (farol, corazón, tensión, moscardón, yo) que crea efecto obsesivo y circular",
		generalSummary:
			"El poema describe una encrucijada nocturna marcada por tres elementos: el viento del Este, un farol y el puñal en el corazón. La calle tiembla como una cuerda tensa, como un moscardón enorme. El yo poético declara al final que 'por todas partes' ve 'el puñal / en el corazón', expresando una visión paranoica donde la amenaza es omnipresente.",
		interpretation:
			"La encrucijada es el lugar del peligro y la decisión fatal. El 'viento del Este' en la tradición andaluza es viento cálido, seco, inquietante. El farol único sugiere soledad, desamparo, luz precaria en la oscuridad. El puñal 'en el corazón' no está en la mano sino ya clavado, como destino cumplido. La calle 'tiembla' con dos comparaciones: como 'cuerda en tensión' (a punto de romperse o de ser tocada violentamente) y como 'enorme moscardón' (zumbido amenazante, presencia molesta e inquietante). La repetición final 'Por todas partes / yo / veo el puñal / en el corazón' expresa una visión paranoica: el puñal se ha multiplicado, está en todas partes, la amenaza es total. El 'yo' aislado en un verso de una sola palabra subraya la soledad del sujeto ante el peligro. Es un poema sobre el miedo, la premonición de muerte, la atmósfera amenazante de la noche andaluza donde el honor y la venganza pueden cobrar vida en cualquier esquina.",
	},

	rhetoricalFigures: [
		{
			id: "simil",
			contextualDescription:
				"Dos comparaciones explícitas: la calle tiembla 'como cuerda en tensión' y 'como enorme moscardón', creando sensación auditiva y visual de peligro.",
			verseIds: ["v7", "v8", "v10"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'El puñal en el corazón' funciona como metáfora del destino fatal, la muerte asegurada, el dolor que ya ha penetrado.",
			verseIds: ["v3", "v4", "v13", "v14"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"La encrucijada simboliza el lugar de decisión fatal y encuentro peligroso. El viento del Este, el desasosiego. El farol, la luz precaria ante la oscuridad amenazante. El puñal, el destino mortal.",
			verseIds: ["v1", "v2", "v3"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"La calle tiene 'temblor', adquiere cualidad humana de miedo, nerviosismo, anticipación de violencia.",
			verseIds: ["v5", "v6"],
		},
		{
			id: "anafora",
			contextualDescription:
				"Repetición de 'un temblor' en versos consecutivos, enfatizando la vibración amenazante del espacio.",
			verseIds: ["v7", "v9"],
		},
		{
			id: "epifora",
			contextualDescription:
				"Repetición del verso 'en el corazón' al principio y al final del poema, creando estructura circular y obsesiva.",
			verseIds: ["v4", "v14"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"El 'temblor de enorme moscardón' mezcla lo táctil (vibración) con lo auditivo (zumbido) y lo visual (insecto amenazante).",
			verseIds: ["v9", "v10"],
		},
		{
			id: "hiperbole",
			contextualDescription:
				"'Por todas partes yo veo el puñal' exagera la omnipresencia de la amenaza, creando atmósfera paranoica donde el peligro se ha multiplicado infinitamente.",
			verseIds: ["v11", "v12", "v13", "v14"],
		},
		{
			id: "encabalgamiento",
			contextualDescription:
				"El sentido se fragmenta entre versos muy breves, creando efecto de respiración entrecortada, ansiedad, tensión.",
			verseIds: ["v3", "v4", "v7", "v8", "v13", "v14"],
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
					text: "Viento del Este;",
					syllables: 5,
					annotation:
						"El viento del Este es viento cálido, seco, inquietante en la tradición andaluza. Presagio de tormenta o desasosiego.",
				},
				{
					id: "v2",
					number: 2,
					text: "un farol",
					syllables: 3,
					annotation:
						"El farol solitario sugiere luz precaria en la oscuridad, soledad, desamparo nocturno.",
				},
				{
					id: "v3",
					number: 3,
					text: "y el puñal",
					syllables: 4,
					annotation:
						"El puñal aparece como tercer elemento, completando la trinidad amenazante: viento, luz precaria, arma mortal.",
				},
				{
					id: "v4",
					number: 4,
					text: "en el corazón.",
					syllables: 5,
					annotation:
						"El puñal no está en la mano (amenaza futura) sino 'en el corazón' (herida ya hecha, destino cumplido).",
				},
				{
					id: "v5",
					number: 5,
					text: "La calle",
					syllables: 3,
					annotation:
						"La calle de la encrucijada, espacio del encuentro fatal, cobra vida propia.",
				},
				{
					id: "v6",
					number: 6,
					text: "tiene un temblor",
					syllables: 5,
					annotation:
						"Personificación: la calle tiembla como si tuviera miedo o anticipara la violencia.",
				},
				{
					id: "v7",
					number: 7,
					text: "de cuerda",
					syllables: 3,
					annotation:
						"Primera comparación: la calle tiembla como una cuerda de guitarra tensa.",
				},
				{
					id: "v8",
					number: 8,
					text: "en tensión,",
					syllables: 3,
					annotation:
						"La tensión puede romperse en cualquier momento o ser tocada produciendo sonido violento.",
				},
				{
					id: "v9",
					number: 9,
					text: "un temblor",
					syllables: 3,
					annotation:
						"Anáfora: repetición que intensifica la vibración amenazante.",
				},
				{
					id: "v10",
					number: 10,
					text: "de enorme moscardón.",
					syllables: 6,
					annotation:
						"Segunda comparación: el temblor es como el zumbido molesto y amenazante de un moscardón gigante.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "libre",
			verses: [
				{
					id: "v11",
					number: 11,
					text: "Por todas partes",
					syllables: 5,
					annotation:
						"La amenaza se ha universalizado: ya no está en un solo lugar sino omnipresente.",
				},
				{
					id: "v12",
					number: 12,
					text: "yo",
					syllables: 1,
					annotation:
						"El 'yo' aislado en un verso monosilábico subraya la soledad absoluta del sujeto ante el peligro.",
				},
				{
					id: "v13",
					number: 13,
					text: "veo el puñal",
					syllables: 4,
					annotation:
						"Visión paranoica: el puñal se ha multiplicado, la mirada lo encuentra en todas partes.",
				},
				{
					id: "v14",
					number: 14,
					text: "en el corazón.",
					syllables: 5,
					annotation:
						"Repetición exacta del verso 4, cerrando el poema con la imagen del puñal clavado. La amenaza es circular, eterna, inevitable.",
				},
			],
		},
	],
};
