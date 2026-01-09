import type { Poem } from "~/features/poems/domain/poem.types";

export const arqueros: Poem = {
	id: "lorca-arqueros",
	slug: "arqueros",
	title: "Arqueros",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que describe a los arqueros oscuros (saeteros) que se acercan a Sevilla desde los remotos países de la pena, dirigiéndose a un laberinto de amor, cristal y piedra.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Gráfico de la petenera'. Los arqueros son los saeteros, cantaores que lanzan saetas (cantos religiosos) durante las procesiones de Semana Santa en Sevilla. La saeta es flechada vocal dirigida a Cristo o la Virgen. El Guadalquivir es el río que atraviesa Sevilla, símbolo de la ciudad. Los arqueros vienen de 'los remotos países de la pena' y van a un laberinto de pasión y muerte.",
		influences: [
			"Saeta flamenca",
			"Semana Santa sevillana",
			"Simbolismo del Guadalquivir",
			"Arquería mística",
			"Pasión de Cristo",
		],
	},

	analysis: {
		themes: ["religión", "dolor", "Andalucía"],
		tone: "misterioso, solemne, procesional y elegíaco",
		meter:
			"versos de arte menor con métrica irregular (pentasílabos, hexasílabos, octosílabos), ritmo de marcha lenta",
		rhymeScheme:
			"rima asonante en é-a (acercan, lentas, pena, piedra) y estribillo 'Guadalquivir' que aparece tres veces",
		generalSummary:
			"Los arqueros oscuros se acercan a Sevilla. El Guadalquivir está abierto. Llevan anchos sombreros grises y largas capas lentas. Vienen de los remotos países de la pena. Van a un laberinto de amor, cristal y piedra. El Guadalquivir aparece como estribillo-testigo ('Guadalquivir abierto', '¡Ay, Guadalquivir!').",
		interpretation:
			"Los arqueros son los saeteros, cantaores que lanzan sus saetas (flechadas vocales) durante las procesiones de Semana Santa. Son 'oscuros': vestidos de oscuro, pero también misteriosos, dolientes, portadores de oscuridad sagrada. Se 'acercan a Sevilla': la ciudad santa de la Semana Santa española. 'Guadalquivir abierto' es imagen misteriosa: el río está abierto (¿navegable?, ¿abierto como herida?, ¿abierto como camino que recibe?). El río como testigo, como eje de la ciudad, como corriente que lleva y trae. Los arqueros llevan 'anchos sombreros grises' (sombreros cordobeses o de ala ancha típicos de Andalucía) y 'largas capas lentas': la lentitud está en las capas mismas, no solo en el andar. Las capas son lentas, pesadas, procesionales. Vienen de 'los remotos países de la pena': origen mítico, no geográfico. Países lejanos donde habita la pena, el dolor ancestral. Son peregrinos del dolor. 'Y van a un laberinto': su destino no es solo Sevilla sino un laberinto (la ciudad misma, o la pasión de Cristo, o el misterio sagrado). Este laberinto es 'Amor, cristal y piedra': tres sustantivos sin artículo que definen su esencia. Amor (caridad, pasión mística), cristal (fragilidad, transparencia, belleza quebradiza) y piedra (dureza, eternidad, muerte). El estribillo '¡Ay, Guadalquivir!' es lamento que hermana el río con el dolor de la saeta. El río fluye, los arqueros avanzan, la pena se acerca a su destino. Es poema de procesión mística, de peregrinaje oscuro hacia el misterio de la Semana Santa sevillana.",
	},

	rhetoricalFigures: [
		{
			id: "metafora",
			contextualDescription:
				"Los saeteros son 'arqueros' que lanzan flechas vocales (saetas). 'Guadalquivir abierto' es río como herida o camino abierto. 'Países de la pena' es origen mítico del dolor.",
			verseIds: ["v1", "v3", "v7", "v8"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"Los arqueros simbolizan saeteros, peregrinos del dolor. El Guadalquivir simboliza a Sevilla y su fluir constante. El laberinto simboliza la complejidad del misterio sagrado. Amor, cristal y piedra simbolizan esencia de la pasión: ternura, fragilidad y dureza.",
			verseIds: ["v1", "v3", "v10", "v11"],
		},
		{
			id: "epiteto",
			contextualDescription:
				"'Arqueros oscuros', 'anchos sombreros grises', 'largas capas lentas', 'remotos países de la pena': adjetivos que caracterizan sombríamente.",
			verseIds: ["v1", "v4", "v5", "v7", "v8"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"'Largas capas lentas': la lentitud atribuida a las capas mismas, como si fueran seres que avanzan pausadamente.",
			verseIds: ["v5"],
		},
		{
			id: "anafora",
			contextualDescription:
				"'Guadalquivir' se repite tres veces como estribillo-invocación: 'Guadalquivir abierto' (dos veces) y '¡Ay, Guadalquivir!' (dos veces).",
			verseIds: ["v3", "v6", "v9", "v12"],
		},
		{
			id: "asindeton",
			contextualDescription:
				"'Amor, cristal y piedra' yuxtapone tres sustantivos sin conjunción en los dos primeros, creando efecto de acumulación esencial.",
			verseIds: ["v11"],
		},
		{
			id: "paralelismo",
			contextualDescription:
				"Estructura paralela: descripción + 'Guadalquivir' + descripción + '¡Ay, Guadalquivir!' que se repite, creando ritmo procesional.",
			verseIds: ["v1", "v2", "v3", "v7", "v8", "v9"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"'Largas capas lentas' mezcla lo visual (largas) con lo temporal (lentas), lo espacial con el ritmo del movimiento.",
			verseIds: ["v5"],
		},
	],

	estrofas: [
		{
			id: "estrofa-1",
			number: 1,
			type: "pareado",
			verses: [
				{
					id: "v1",
					number: 1,
					text: "Los arqueros oscuros",
					syllables: 7,
					annotation:
						"Metáfora: los saeteros son arqueros que lanzan flechas vocales. 'Oscuros': vestidos de oscuro, misteriosos, portadores de sombra sagrada.",
				},
				{
					id: "v2",
					number: 2,
					text: "a Sevilla se acercan.",
					syllables: 7,
					annotation:
						"Sevilla como destino sagrado, ciudad emblemática de la Semana Santa española. El acercamiento es procesional, ritual.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "verso aislado",
			verses: [
				{
					id: "v3",
					number: 3,
					text: "Guadalquivir abierto.",
					syllables: 7,
					annotation:
						"Primer estribillo: el río de Sevilla está 'abierto' (navegable, receptivo, abierto como herida o como camino que recibe).",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "pareado",
			verses: [
				{
					id: "v4",
					number: 4,
					text: "Anchos sombreros grises,",
					syllables: 7,
					annotation:
						"Sombreros de ala ancha, cordobeses, típicos de Andalucía. El gris es color de ceniza, de austeridad, de penitencia.",
				},
				{
					id: "v5",
					number: 5,
					text: "largas capas lentas.",
					syllables: 6,
					annotation:
						"Personificación: la lentitud está en las capas mismas. Capas pesadas, procesionales, que avanzan pausadamente.",
				},
			],
		},

		{
			id: "estofa-4",
			number: 4,
			type: "verso aislado",
			verses: [
				{
					id: "v6",
					number: 6,
					text: "¡Ay, Guadalquivir!",
					syllables: 6,
					annotation:
						"Lamento flamenco que invoca al río como testigo y compañero del dolor. El '¡Ay!' del cante jondo.",
				},
			],
		},

		{
			id: "estrofa-5",
			number: 5,
			type: "pareado",
			verses: [
				{
					id: "v7",
					number: 7,
					text: "Vienen de los remotos",
					syllables: 7,
					annotation:
						"Origen mítico: no vienen de un lugar geográfico sino de regiones lejanas del espíritu.",
				},
				{
					id: "v8",
					number: 8,
					text: "países de la pena.",
					syllables: 6,
					annotation:
						"Metáfora: países imaginarios donde habita la pena, el dolor ancestral. Son peregrinos del sufrimiento.",
				},
			],
		},

		{
			id: "estrofa-6",
			number: 6,
			type: "verso aislado",
			verses: [
				{
					id: "v9",
					number: 9,
					text: "Guadalquivir abierto.",
					syllables: 7,
					annotation:
						"Repetición exacta del primer estribillo, reforzando la presencia constante del río.",
				},
			],
		},

		{
			id: "estrofa-7",
			number: 7,
			type: "pareado",
			verses: [
				{
					id: "v10",
					number: 10,
					text: "Y van a un laberinto.",
					syllables: 7,
					annotation:
						"Su destino es un laberinto: la ciudad, el misterio de la pasión, la complejidad de lo sagrado.",
				},
				{
					id: "v11",
					number: 11,
					text: "Amor, cristal y piedra.",
					syllables: 6,
					annotation:
						"Tres sustantivos que definen la esencia del laberinto: amor (caridad, pasión), cristal (fragilidad, belleza) y piedra (dureza, muerte).",
				},
			],
		},

		{
			id: "estrofa-8",
			number: 8,
			type: "verso aislado",
			verses: [
				{
					id: "v12",
					number: 12,
					text: "¡Ay, Guadalquivir!",
					syllables: 6,
					annotation:
						"Repetición del lamento final, cierre que hermana río y dolor en el clamor del cante jondo.",
				},
			],
		},
	],
};
