import type { Poem } from "~/features/poems/domain/poem.types";

export const alba: Poem = {
	id: "lorca-alba",
	slug: "alba",
	title: "Alba",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que celebra las campanas de Córdoba y Granada al amanecer, sentidas por todas las muchachas andaluzas que lloran a la soleá enlutada.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Poema de la soleá'. El poema es celebración de Andalucía al amanecer: las campanas de Córdoba y Granada (las dos ciudades emblemáticas de Andalucía) suenan mientras las muchachas andaluzas lloran a la 'tierna soleá enlutada'. Es himno a la feminidad andaluza, a las niñas de España que han llenado de luces las encrucijadas. El alba es momento de renovación pero también de melancolía.",
		influences: [
			"Cante jondo (soleá)",
			"Lírica popular andaluza",
			"Simbolismo de las campanas",
			"Córdoba y Granada como ciudades míticas",
			"Cultura de la madrugada flamenca",
		],
	},

	analysis: {
		themes: ["dolor", "muerte", "Andalucía"],
		tone: "celebratorio, elegíaco, coral y luminoso-melancólico",
		meter:
			"versos de arte menor con métrica irregular (heptasílabos y octosílabos mayormente), ritmo de toque de campanas",
		rhymeScheme:
			"rima asonante en á-a (madrugada, Granada, enlutada, muchachas, alta, baja, España, faldas, encrucijadas) que crea efecto de letanía coral",
		generalSummary:
			"Las campanas de Córdoba en la madrugada y las campanas de amanecer en Granada. Las sienten todas las muchachas que lloran a la tierna soleá enlutada. Las muchachas de Andalucía la alta y la baja. Las niñas de España, de pie menudo y temblorosas faldas, que han llenado de luces las encrucijadas. Termina con exclamación celebratoria: '¡Oh, campanas de Córdoba / en la madrugada, / y oh, campanas de amanecer / en Granada!'",
		interpretation:
			"El poema es himno coral a Andalucía al alba. Las campanas de Córdoba (ciudad califal, de la mezquita) y Granada (ciudad nazarí, de la Alhambra) son las dos voces emblemáticas de Andalucía. Suenan en la madrugada, en el amanecer: momento liminal entre noche y día, momento sagrado. 'Os sienten todas las muchachas': las campanas no se oyen sino que se sienten, se viven corporalmente. Y quienes las sienten son las muchachas, las mujeres jóvenes que 'lloran a la tierna / soleá enlutada'. La soleá personificada es 'tierna' (suave, delicada a pesar de su dolor) y 'enlutada' (vestida de negro, de luto). Las muchachas lloran a la soleá como se llora a una persona amada, como se llora a una diosa del dolor. Son muchachas 'de Andalucía la alta / y la baja': toda Andalucía, desde la sierra (alta) hasta el valle y la costa (baja), unida en el dolor y el cante. Luego se amplía: 'Las niñas de España', no solo Andalucía sino toda España representada por sus niñas (muchachas jóvenes, vírgenes). Son de 'pie menudo' (pies pequeños, delicados, imagen de gracia y fragilidad) y 'temblorosas faldas' (faldas que tiemblan por el temblor del cuerpo, por el baile, por el llanto, por el frío del alba). Y estas niñas 'han llenado de luces / las encrucijadas': imagen misteriosa y hermosa. Las encrucijadas (lugares donde se cruzan caminos, lugares simbólicamente peligrosos, liminales) han sido llenadas de luces por estas niñas. ¿Son luces reales (velas, candiles)? ¿O son metáfora: las niñas mismas son luces, luminarias, en la oscuridad? Probablemente ambas: las niñas que velan, que lloran, que bailan, que cantan, iluminan los lugares oscuros y peligrosos. El poema termina con doble exclamación, repetición celebratoria de las campanas de Córdoba y Granada, las dos ciudades que enmarcan el alba andaluza. Es poema de comunidad femenina: todas las muchachas unidas en el sentimiento de la soleá, en el llanto ritual, en la iluminación de las encrucijadas. El alba es renovación pero también persistencia del dolor: las campanas suenan, las muchachas lloran, la soleá permanece enlutada pero tierna.",
	},

	rhetoricalFigures: [
		{
			id: "personificacion",
			contextualDescription:
				"La soleá es 'tierna' y 'enlutada', se personifica como mujer joven de luto a quien se llora.",
			verseIds: ["v6", "v7"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'Han llenado de luces / las encrucijadas': las niñas iluminan los lugares oscuros y peligrosos, metáfora de esperanza y presencia femenina.",
			verseIds: ["v14", "v15"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"Las campanas simbolizan lo sagrado, la comunidad, el tiempo ritual. Las encrucijadas simbolizan lugares liminales, peligrosos. Las luces simbolizan esperanza, presencia, vida. La soleá enlutada simboliza el dolor andaluz.",
			verseIds: ["v1", "v3", "v7", "v15"],
		},
		{
			id: "epiteto",
			contextualDescription:
				"'Tierna soleá enlutada', 'pie menudo', 'temblorosas faldas': adjetivos que caracterizan delicadamente a soleá y muchachas.",
			verseIds: ["v6", "v7", "v12", "v13"],
		},
		{
			id: "hiperbole",
			contextualDescription:
				"'Todas las muchachas' y 'Las niñas de España' exageran la universalidad del sentimiento, toda la feminidad andaluza y española.",
			verseIds: ["v5", "v11"],
		},
		{
			id: "anafora",
			contextualDescription:
				"'Campanas de...' se repite, y 'Las muchachas' y 'Las niñas' se repiten, creando estructura paralela y coral.",
			verseIds: ["v1", "v3", "v8", "v11", "v16", "v18"],
		},
		{
			id: "paralelismo",
			contextualDescription:
				"Estructura paralela: 'Campanas de Córdoba / en la madrugada' // 'Campanas de amanecer / en Granada'. Equilibrio entre las dos ciudades.",
			verseIds: ["v1", "v2", "v3", "v4"],
		},
		{
			id: "metonimia",
			contextualDescription:
				"'Andalucía la alta / y la baja' representa toda Andalucía por sus regiones geográficas. 'Las niñas de España' representa toda España por sus muchachas.",
			verseIds: ["v9", "v10", "v11"],
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
					text: "Campanas de Córdoba",
					syllables: 7,
					annotation:
						"Córdoba, ciudad califal de la mezquita-catedral. Sus campanas representan la historia mora y cristiana, el sincretismo andaluz.",
				},
				{
					id: "v2",
					number: 2,
					text: "en la madrugada.",
					syllables: 6,
					annotation:
						"La madrugada: momento liminal, sagrado, entre noche y día. Momento de los duendes y del cante jondo.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "pareado",
			verses: [
				{
					id: "v3",
					number: 3,
					text: "Campanas de amanecer",
					syllables: 7,
					annotation:
						"'Campanas de amanecer': las que suenan al alba, anunciando el día. Variación de 'campanas en la madrugada'.",
				},
				{
					id: "v4",
					number: 4,
					text: "en Granada.",
					syllables: 4,
					annotation:
						"Granada, ciudad nazarí de la Alhambra. Junto con Córdoba, las dos capitales míticas de Andalucía musulmana y cristiana.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "libre",
			verses: [
				{
					id: "v5",
					number: 5,
					text: "Os sienten todas las muchachas",
					syllables: 9,
					annotation:
						"'Os sienten': las campanas no se oyen sino que se sienten, experiencia corporal. 'Todas las muchachas': comunidad femenina universal.",
				},
				{
					id: "v6",
					number: 6,
					text: "que lloran a la tierna",
					syllables: 7,
					annotation:
						"Lloran a la soleá como se llora a una persona amada, llanto ritual. 'Tierna': la soleá es suave, delicada, a pesar de su dolor.",
				},
				{
					id: "v7",
					number: 7,
					text: "soleá enlutada.",
					syllables: 5,
					annotation:
						"Personificación: la soleá vestida de luto negro, como mujer de luto. 'Enlutada' refuerza el carácter doloroso y mortuorio.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "libre",
			verses: [
				{
					id: "v8",
					number: 8,
					text: "Las muchachas,",
					syllables: 4,
					annotation:
						"Repetición anafórica que especifica quiénes son esas muchachas.",
				},
				{
					id: "v9",
					number: 9,
					text: "de Andalucía la alta",
					syllables: 7,
					annotation:
						"Andalucía la alta: sierra, montañas, Andalucía interior y septentrional (Granada, Jaén, sierra de Cádiz).",
				},
				{
					id: "v10",
					number: 10,
					text: "y la baja.",
					syllables: 3,
					annotation:
						"Andalucía la baja: valle, costa, Andalucía litoral (Cádiz, Huelva, Almería, Málaga costeras). Toda Andalucía unida.",
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
					text: "Las niñas de España,",
					syllables: 6,
					annotation:
						"Ampliación: de las muchachas andaluzas a las niñas de toda España. 'Niñas': muchachas jóvenes, vírgenes, representantes de la inocencia.",
				},
				{
					id: "v12",
					number: 12,
					text: "de pie menudo",
					syllables: 5,
					annotation:
						"Pie menudo: pie pequeño, delicado, imagen de gracia y fragilidad femenina. También evoca el baile (pies que bailan).",
				},
				{
					id: "v13",
					number: 13,
					text: "y temblorosas faldas,",
					syllables: 6,
					annotation:
						"Faldas que tiemblan: por el llanto, por el baile, por el frío del alba, por la emoción. Imagen de vulnerabilidad y movimiento.",
				},
				{
					id: "v14",
					number: 14,
					text: "que han llenado de luces",
					syllables: 7,
					annotation:
						"Acción misteriosa: las niñas han llenado de luces (velas, candiles, o ellas mismas como luces) los lugares oscuros.",
				},
				{
					id: "v15",
					number: 15,
					text: "las encrucijadas.",
					syllables: 5,
					annotation:
						"Encrucijadas: lugares donde se cruzan caminos, simbólicamente peligrosos, liminales. Las niñas los iluminan, los santifican.",
				},
			],
		},

		{
			id: "estrofa-6",
			number: 6,
			type: "libre",
			verses: [
				{
					id: "v16",
					number: 16,
					text: "¡Oh, campanas de Córdoba",
					syllables: 8,
					annotation:
						"Exclamación celebratoria que repite el inicio, pero elevado a himno. 'Oh' es interjección lírica, casi religiosa.",
				},
				{
					id: "v17",
					number: 17,
					text: "en la madrugada,",
					syllables: 6,
					annotation:
						"Repetición exacta del verso 2, creando estructura circular.",
				},
				{
					id: "v18",
					number: 18,
					text: "y oh, campanas de amanecer",
					syllables: 9,
					annotation:
						"Segunda exclamación, equilibrio simétrico entre Córdoba y Granada, entre madrugada y amanecer.",
				},
				{
					id: "v19",
					number: 19,
					text: "en Granada!",
					syllables: 4,
					annotation:
						"Cierre definitivo: Granada como última palabra, ciudad final del alba andaluza. Exclamación que cierra el himno.",
				},
			],
		},
	],
};
