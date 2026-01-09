import type { Poem } from "~/features/poems/domain/poem.types";

export const paso: Poem = {
	id: "lorca-paso",
	slug: "paso",
	title: "Paso",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que se dirige a la Virgen de la Soledad con miriñaque, abierta como inmenso tulipán, que va en su barco de luces por la alta marea de la ciudad hasta el mar.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Gráfico de la petenera'. El 'paso' es el conjunto escultórico que se lleva en andas durante las procesiones de Semana Santa. La Virgen de la Soledad es advocación mariana de la Semana Santa, vestida de luto. El miriñaque es armazón de aros que da volumen a las faldas, típico del siglo XIX. La Virgen con miriñaque tiene falda amplia que se abre como tulipán. El 'barco de luces' es el paso iluminado por cirios que avanza como nave por las calles (el 'río de la calle') hasta el mar (¿la eternidad?, ¿el final de la procesión?).",
		influences: [
			"Procesiones de Semana Santa",
			"Virgen de la Soledad",
			"Iconografía mariana",
			"Simbolismo naval",
			"Arquitectura efímera de los pasos",
		],
	},

	analysis: {
		themes: ["religión", "soledad"],
		tone: "reverente, tierno, navegante y místico",
		meter:
			"versos de arte menor con métrica irregular (bisílabos, pentasílabos, hexasílabos, octosílabos), ritmo oscilante como mecerse de barco",
		rhymeScheme:
			"rima asonante en á (Soledad, ciudad, cristal, mar) que crea efecto de letanía mariana",
		generalSummary:
			"Apóstrofe a la Virgen con miriñaque, Virgen de la Soledad, abierta como un inmenso tulipán. En tu barco de luces vas por la alta marea de la ciudad, entre saetas turbias y estrellas de cristal. Virgen con miriñaque, tú vas por el río de la calle, ¡hasta el mar!",
		interpretation:
			"El poema es invocación tierna a la Virgen de la Soledad durante su procesión. 'Virgen con miriñaque': el miriñaque (armazón de aros) da a la falda de la Virgen forma amplia, cónica, majestuosa. Es detalle costumbrista (las vírgenes andaluzas con faldas amplias) pero también símbolo de apertura, de receptividad. Está 'abierta como un inmenso / tulipán': símil vegetal hermoso. El tulipán es flor que se abre, cáliz que recibe, forma cóncava. La Virgen es flor abierta, receptiva al dolor del mundo. 'En tu barco de luces / vas': el paso (la plataforma que porta la imagen) es barco iluminado por cirios, candelas. La Virgen navega en este barco. 'Por la alta marea / de la ciudad': la calle llena de gente es marea alta, oleaje humano que empuja el barco-paso. La ciudad misma es mar. 'Entre saetas turbias / y estrellas de cristal': entre dos tipos de luz. Las saetas son turbias (oscuras, dolientes, espesas, como agua turbia), las estrellas son de cristal (transparentes, frágiles, bellas). Entre dolor opaco y belleza cristalina avanza la Virgen. La repetición 'Virgen con miriñaque, / tú vas' reafirma el movimiento, la navegación constante. 'Por el río de la calle': la calle es río por donde navega el barco-paso. '¡Hasta el mar!': exclamación final que indica el destino. ¿Qué mar? Quizás la eternidad, la infinitud, el misterio final. O simplemente el final de la procesión (en Sevilla algunas procesiones llegan cerca del río, del Guadalquivir). El mar como destino absoluto, como disolución en lo infinito. La Virgen de la Soledad navega sola (su nombre lo indica) por el río humano hasta el mar del misterio. Es poema de movimiento, de viaje místico, donde la procesión se transfigura en navegación sagrada.",
	},

	rhetoricalFigures: [
		{
			id: "apostrofe",
			contextualDescription:
				"Invocación directa a la Virgen: 'Virgen con miriñaque', 'tú vas'. Diálogo con la imagen sagrada.",
			verseIds: ["v1", "v2", "v5", "v11", "v12"],
		},
		{
			id: "simil",
			contextualDescription:
				"'Abierta como un inmenso / tulipán': la Virgen con su falda amplia se compara con flor que se abre, cáliz receptivo.",
			verseIds: ["v3", "v4"],
		},
		{
			id: "metafora",
			contextualDescription:
				"El paso es 'barco de luces'. La calle llena es 'alta marea de la ciudad'. La calle es 'río de la calle'. El destino es 'el mar'.",
			verseIds: ["v5", "v6", "v7", "v8", "v13", "v14"],
		},
		{
			id: "epiteto",
			contextualDescription:
				"'Inmenso tulipán', 'alta marea', 'saetas turbias', 'estrellas de cristal': adjetivos que caracterizan poéticamente.",
			verseIds: ["v4", "v7", "v9", "v10"],
		},
		{
			id: "antitesis",
			contextualDescription:
				"'Saetas turbias' versus 'estrellas de cristal': contraste entre opacidad doliente y transparencia bella, entre lo oscuro y lo luminoso.",
			verseIds: ["v9", "v10"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"El tulipán simboliza apertura y receptividad. El barco simboliza viaje. Las luces simbolizan lo sagrado. El mar simboliza infinitud o destino final. La Soledad simboliza el dolor de María tras la muerte de Cristo.",
			verseIds: ["v2", "v4", "v5", "v14"],
		},
		{
			id: "anafora",
			contextualDescription:
				"'Virgen con miriñaque' se repite dos veces, creando estructura de letanía mariana.",
			verseIds: ["v1", "v11"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"La Virgen 'va', 'navega' como ser vivo con voluntad y movimiento propio, aunque en realidad es llevada por los costaleros.",
			verseIds: ["v5", "v6", "v12"],
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
					text: "Virgen con miriñaque,",
					syllables: 7,
					annotation:
						"Apóstrofe: invocación a la Virgen. Miriñaque: armazón de aros que da volumen a las faldas, típico del XIX. Detalle costumbrista andaluz.",
				},
				{
					id: "v2",
					number: 2,
					text: "virgen de la Soledad,",
					syllables: 7,
					annotation:
						"Advocación mariana de Semana Santa. La Soledad: María sola tras la muerte de Cristo, vestida de luto, dolor absoluto.",
				},
				{
					id: "v3",
					number: 3,
					text: "abierta como un inmenso",
					syllables: 8,
					annotation:
						"Símil que compara la forma de la Virgen con una flor. 'Abierta': receptiva, cóncava, que acoge.",
				},
				{
					id: "v4",
					number: 4,
					text: "tulipán.",
					syllables: 3,
					annotation:
						"Flor que se abre en forma de cáliz. La falda amplia de la Virgen es tulipán inmenso, flor receptiva y bella.",
				},
				{
					id: "v5",
					number: 5,
					text: "En tu barco de luces",
					syllables: 6,
					annotation:
						"Metáfora: el paso (plataforma procesional) es barco iluminado por cirios, velas. La Virgen navega en este barco luminoso.",
				},
				{
					id: "v6",
					number: 6,
					text: "vas",
					syllables: 1,
					annotation:
						"Verbo de movimiento aislado, enfático. La Virgen va, navega, se desplaza en su barco procesional.",
				},
				{
					id: "v7",
					number: 7,
					text: "por la alta marea",
					syllables: 6,
					annotation:
						"Metáfora: la calle llena de gente es marea alta, oleaje humano que empuja y rodea el barco-paso.",
				},
				{
					id: "v8",
					number: 8,
					text: "de la ciudad,",
					syllables: 4,
					annotation:
						"La ciudad misma es mar, espacio líquido donde navega la Virgen. Geografía urbana transfigurada en geografía naval.",
				},
				{
					id: "v9",
					number: 9,
					text: "entre saetas turbias",
					syllables: 6,
					annotation:
						"Las saetas (cantos) son turbias: oscuras, dolientes, espesas, como agua turbia. Son cantos opacos del dolor.",
				},
				{
					id: "v10",
					number: 10,
					text: "y estrellas de cristal.",
					syllables: 6,
					annotation:
						"Las estrellas de cristal: luces frágiles, transparentes, bellas. Contraste con la turbiedad de las saetas. Belleza cristalina.",
				},
				{
					id: "v11",
					number: 11,
					text: "Virgen con miriñaque,",
					syllables: 7,
					annotation:
						"Repetición del apóstrofe inicial, creando estructura de letanía, de invocación reiterada.",
				},
				{
					id: "v12",
					number: 12,
					text: "tú vas",
					syllables: 2,
					annotation:
						"Reafirmación del movimiento: 'tú vas', énfasis en el sujeto (tú, la Virgen) y en su acción (ir, navegar).",
				},
				{
					id: "v13",
					number: 13,
					text: "por el río de la calle,",
					syllables: 7,
					annotation:
						"Metáfora: la calle es río por donde navega el barco-paso. Río urbano, corriente humana y arquitectónica.",
				},
				{
					id: "v14",
					number: 14,
					text: "¡hasta el mar!",
					syllables: 4,
					annotation:
						"Exclamación final: el destino es el mar. ¿Eternidad? ¿Infinitud? ¿Final de la procesión? Mar como misterio absoluto, disolución en lo infinito.",
				},
			],
		},
	],
};
