import type { Poem } from "~/features/poems/domain/poem.types";

export const elPasoDeLaSiguiriya: Poem = {
	id: "8",
	slug: "el-paso-de-la-siguiriya",
	title: "El Paso de la Siguiriya",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema interrogativo del Poema del cante jondo donde la siguiriya, personificada como muchacha morena encadenada a un ritmo imposible, camina hacia un destino trágico entre mariposas negras y serpientes de niebla.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1931-01-01"),
		socialContext:
			"Forma parte del 'Poema de la siguiriya gitana', primera sección del 'Poema del cante jondo'. La siguiriya es el palo flamenco más antiguo y trágico, de compás irregular y sincopado, considerado el cante matriz del flamenco. Su ritmo es 'sin cabeza', asimétrico, con acentos impredecibles que expresan el desgarramiento del duende. Lorca escribe este poema tras escuchar siguiriyas primitivas que Manuel de Falla le mostró, quedando impactado por su carácter arrítmico y desesperado.",
		influences: [
			"Cante jondo primitivo",
			"Siguiriya gitana",
			"Compás irregular flamenco",
			"Simbolismo cromático",
			"Lírica popular andaluza",
			"Poesía interrogativa",
			"Duende y tragedia gitana",
		],
	},

	analysis: {
		themes: [
			"siguiriya",
			"ritmo imposible",
			"destino trágico",
			"búsqueda sin respuesta",
			"dolor andaluz",
			"mujer gitana",
			"muerte anunciada",
			"compás flamenco",
			"paradoja existencial",
		],
		tone: "interrogativo, angustioso y misterioso",
		meter:
			"predominio de octosílabos con versos breves intercalados (pentasílabos), imitando el compás sincopado e irregular de la siguiriya flamenca",
		rhymeScheme:
			"asonancia en é-a en versos pares (morena, serpiente, llega, diestra, cabeza, adelfa), creando musicalidad obsesiva. El estribillo 'Tierra de luz, / cielo de tierra' rompe la asonancia con rima interna",
		generalSummary:
			"El poema describe el paso de una muchacha morena (la siguiriya personificada) que camina entre mariposas negras y una serpiente de niebla, encadenada a un ritmo que nunca llega. Porta un corazón de plata y un puñal. El poeta pregunta dos veces sin respuesta: ¿adónde va con ese ritmo sin cabeza? ¿Qué luna recogerá su dolor de cal y adelfa? El estribillo 'Tierra de luz, cielo de tierra' invierte el orden cósmico natural.",
		interpretation:
			"Lorca captura la esencia de la siguiriya flamenca: un cante con compás irregular, 'sin cabeza', arrítmico, que nunca encuentra su cierre. La muchacha 'encadenada al temblor / de un ritmo que nunca llega' es metáfora perfecta del cantaor de siguiriya, prisionero de un compás imposible que eternamente se le escapa. Las 'mariposas negras' son presagios de muerte; la 'serpiente de niebla' es amenaza invisible, traición que no se ve. El 'corazón de plata' (metal precioso pero frío) y el 'puñal en la diestra' configuran a la siguiriya como virgen dolorosa armada, lista para la tragedia. Las preguntas retóricas sin respuesta expresan la imposibilidad de salida: no hay destino, no hay luna que recoja el dolor. 'Cal y adelfa' son símbolos funerarios andaluces: cal de las tumbas encaladas, adelfa como planta venenosa de los cementerios. El estribillo 'Tierra de luz, cielo de tierra' invierte el orden natural (cielo luminoso, tierra oscura), expresando el mundo al revés del duende flamenco, donde lo de arriba está abajo y viceversa.",
	},

	rhetoricalFigures: [
		{
			id: "personificacion",
			contextualDescription:
				"La siguiriya es una 'muchacha morena', personificación que la convierte en mujer gitana que camina hacia su destino trágico.",
			verseIds: ["8-v2"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"'Mariposas negras' simbolizan presagios de muerte, almas en pena. En la tradición popular, las mariposas nocturnas anuncian fallecimientos inminentes.",
			verseIds: ["8-v1"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'Blanca serpiente de niebla' es amenaza invisible, traición que no se ve, peligro que se desliza junto a la muchacha. Serpiente = traición; niebla = indefinición.",
			verseIds: ["8-v3", "8-v4"],
		},
		{
			id: "paradoja",
			contextualDescription:
				"'Tierra de luz, cielo de tierra' invierte el orden natural (cielo arriba = luz; tierra abajo = oscuridad), expresando el mundo al revés del duende flamenco.",
			verseIds: ["8-v5", "8-v6"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'Encadenada al temblor de un ritmo' convierte el compás flamenco en cadena que aprisiona, esclavitud del compás sincopado e irregular de la siguiriya.",
			verseIds: ["8-v7", "8-v8"],
		},
		{
			id: "paradoja",
			contextualDescription:
				"'Ritmo que nunca llega' es oxímoron: el ritmo existe pero no llega a resolverse, compás sin cierre, búsqueda eterna sin satisfacción. Expresa el compás irregular de la siguiriya.",
			verseIds: ["8-v8"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'Corazón de plata' fusiona emoción (corazón) con frialdad (plata, metal precioso pero frío), expresando dolor congelado, sentimiento petrificado.",
			verseIds: ["8-v9"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"El 'puñal en la diestra' simboliza violencia latente, muerte anunciada, la siguiriya como cante que porta su propia destrucción.",
			verseIds: ["8-v10"],
		},
		{
			id: "apostrofe",
			contextualDescription:
				"'¿Adónde vas, siguiriya?' es pregunta directa a la siguiriya personificada, interpelación dramática sin respuesta posible.",
			verseIds: ["8-v11"],
		},

		{
			id: "metafora",
			contextualDescription:
				"'Ritmo sin cabeza' es el compás irregular de la siguiriya, arrítmico, sincopado, que no tiene inicio claro (sin cabeza = sin principio definido).",
			verseIds: ["8-v12"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"La luna personificada puede 'recoger' el dolor como quien recoge lágrimas o cosecha, pero la pregunta sin respuesta niega esa posibilidad.",
			verseIds: ["8-v13", "8-v14"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'Dolor de cal y adelfa' fusiona dos elementos funerarios andaluces: cal blanca de tumbas encaladas y adelfa (planta venenosa de cementerios). Dolor = muerte.",
			verseIds: ["8-v14"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"'Dolor de cal y adelfa' mezcla lo emocional (dolor) con lo visual (blancura de la cal), lo olfativo (olor de adelfa) y lo táctil (textura de cal), creando imagen multisensorial del sufrimiento.",
			verseIds: ["8-v14"],
		},
		{
			id: "anafora",
			contextualDescription:
				"Repetición de '¿Adónde vas' y '¿Qué luna' al inicio de versos consecutivos, martilleo interrogativo que subraya la angustia sin respuesta.",
			verseIds: ["8-v11", "8-v13"],
		},

		{
			id: "encabalgamiento",
			contextualDescription:
				"El verso 'de un ritmo que nunca llega' cae desde 'encadenada al temblor', suspensión sintáctica que imita el ritmo que nunca se resuelve.",
			verseIds: ["8-v7", "8-v8"],
		},
	],

	estrofas: [
		{
			id: "estrofa-1",
			number: 1,
			type: "cuarteto",
			verses: [
				{
					id: "8-v1",
					number: 1,
					text: "Entre mariposas negras",
					syllables: 8,
					annotation:
						"Apertura ominosa. Las mariposas negras (probablemente polillas nocturnas) son presagio de muerte en la cultura popular española. 'Entre' ubica a la siguiriya rodeada de símbolos funerarios desde el inicio. El color negro anticipa tragedia, luto, duende oscuro. La preposición 'entre' (que se repetirá) crea sensación de cerco, de estar atrapada.",
				},
				{
					id: "8-v2",
					number: 2,
					text: "va una muchacha morena",
					syllables: 8,
					annotation:
						"Primera personificación: la siguiriya es 'una muchacha morena', mujer gitana en movimiento. 'Morena' connota raza gitana, belleza andaluza, piel oscura como la noche del cante. El verbo 'ir' marca destino inexorable, camino sin retorno. Es procesión, no paseo.",
				},
				{
					id: "8-v3",
					number: 3,
					text: "junto a una blanca serpiente",
					syllables: 8,
					annotation:
						"La serpiente es símbolo de traición, peligro, mal que se arrastra. 'Blanca' contrasta con lo negro (mariposas) y moreno (muchacha): es la traición que no se ve, la amenaza camuflada. 'Junto a' indica proximidad peligrosa, acompañamiento mortal.",
				},
				{
					id: "8-v4",
					number: 4,
					text: "de niebla.",
					syllables: 3,
					annotation:
						"La serpiente es 'de niebla': inmaterial, invisible, imposible de atrapar. La niebla es indefinición, misterio, incertidumbre. El verso corto crea suspensión dramática. La amenaza no es sólida, es atmosférica, omnipresente. Asonancia en é-a cierra la cuarteta.",
				},
			],
		},
		{
			id: "estrofa-2",
			number: 2,
			type: "estribillo",
			verses: [
				{
					id: "8-v5",
					number: 5,
					text: "Tierra de luz,",
					syllables: 5,
					annotation:
						"Primer verso del estribillo paradójico. La tierra (abajo, oscura por naturaleza) es 'de luz', inversión del orden natural. Expresa el mundo al revés del duende flamenco, donde lo telúrico brilla y lo celeste se oscurece. Verso breve que funciona como grito.",
				},
				{
					id: "8-v6",
					number: 6,
					text: "cielo de tierra.",
					syllables: 5,
					annotation:
						"Complemento del quiasmo: el cielo (arriba, luminoso por naturaleza) es 'de tierra', opaco, pesado, caído. Estructura AB-BA (tierra/luz - cielo/tierra) crea simetría especular. El cosmos está invertido en el universo del cante jondo. La asonancia en é-a unifica el estribillo.",
				},
			],
		},
		{
			id: "estrofa-3",
			number: 3,
			type: "cuarteto",
			verses: [
				{
					id: "8-v7",
					number: 7,
					text: "Va encadenada al temblor",
					syllables: 8,
					annotation:
						"'Encadenada' es palabra clave: la muchacha (siguiriya) es prisionera, esclava del compás flamenco. No elige ir, es arrastrada. 'Temblor' es la vibración emocional del cante, el quejío que hace temblar la voz y el cuerpo, posesión del duende.",
				},
				{
					id: "8-v8",
					number: 8,
					text: "de un ritmo que nunca llega;",
					syllables: 8,
					annotation:
						"Paradoja central: el ritmo existe pero 'nunca llega', no se resuelve, es compás sin cierre. Es el compás irregular y sincopado de la siguiriya flamenca, arrítmico, con acentos impredecibles. El punto y coma marca pausa reflexiva, suspensión de la búsqueda eterna.",
				},
				{
					id: "8-v9",
					number: 9,
					text: "tiene el corazón de plata",
					syllables: 8,
					annotation:
						"'Corazón de plata' fusiona emoción (corazón) con frialdad (plata, metal noble pero frío). Es dolor petrificado, sentimiento congelado en metal precioso. La plata es también lunar, femenina, vinculada a la muerte. Corazón valioso pero muerto.",
				},
				{
					id: "8-v10",
					number: 10,
					text: "y un puñal en la diestra.",
					syllables: 8,
					annotation:
						"El puñal es arma flamenca por excelencia, símbolo de violencia gitana, honor y venganza. 'En la diestra' (mano derecha) indica que está lista para usarlo. La siguiriya porta su propia destrucción, es víctima y verdugo simultáneamente. Asonancia en é-a cierra la cuarteta.",
				},
			],
		},
		{
			id: "estrofa-4",
			number: 4,
			type: "cuarteto",
			verses: [
				{
					id: "8-v11",
					number: 11,
					text: "¿Adónde vas, siguiriya,",
					syllables: 8,
					annotation:
						"Primera pregunta retórica sin respuesta. Apóstrofe directo: el poeta interpela a la siguiriya por su nombre. '¿Adónde vas?' pregunta por el destino, pero no hay destino para el dolor flamenco, solo errancia eterna. Es pregunta metafísica sobre el sentido del sufrimiento.",
				},
				{
					id: "8-v12",
					number: 12,
					text: "con un ritmo sin cabeza?",
					syllables: 8,
					annotation:
						"'Ritmo sin cabeza' es metáfora del compás irregular de la siguiriya: sin inicio claro, sin estructura previsible, decapitado. 'Sin cabeza' implica irracionalidad, locura, pérdida de control. Es también cuerpo sin mente, movimiento sin dirección. La pregunta sin respuesta enfatiza la imposibilidad.",
				},
				{
					id: "8-v13",
					number: 13,
					text: "¿Qué luna recogerá",
					syllables: 7,
					annotation:
						"Segunda pregunta retórica. La luna personificada podría 'recoger' el dolor como quien recoge lágrimas o cosecha frutos. La luna es símbolo femenino, maternal, de consuelo nocturno. Pero la pregunta sin respuesta niega esa posibilidad: ninguna luna puede consolar este dolor.",
				},
				{
					id: "8-v14",
					number: 14,
					text: "tu dolor de cal y adelfa?",
					syllables: 8,
					annotation:
						"'Dolor de cal y adelfa' es metáfora funeraria perfecta. Cal: blancura de las tumbas encaladas andaluzas, cal viva que quema. Adelfa: planta venenosa que crece en los cementerios, hermosa pero letal. Es dolor que huele a muerte, dolor cementerial. Asonancia en é-a cierra la cuarteta interrogativa.",
				},
			],
		},
		{
			id: "estrofa-5",
			number: 5,
			type: "estribillo",
			verses: [
				{
					id: "8-v15",
					number: 15,
					text: "Tierra de luz,",
					syllables: 5,
					annotation:
						"Repetición exacta del estribillo. Tras las preguntas sin respuesta, el mundo invertido persiste: la tierra sigue siendo luz, el cielo sigue siendo tierra. El estribillo funciona como reafirmación de la imposibilidad, del cosmos desquiciado por el duende.",
				},
				{
					id: "8-v16",
					number: 16,
					text: "cielo de tierra.",
					syllables: 5,
					annotation:
						"Cierre circular del poema con la misma paradoja del inicio. El punto final no resuelve nada: las preguntas quedan sin respuesta, la muchacha sigue encadenada, el ritmo nunca llega, el dolor de cal y adelfa permanece sin luna que lo recoja. Es final abierto que expresa la eternidad del sufrimiento flamenco.",
				},
			],
		},
	],
};
