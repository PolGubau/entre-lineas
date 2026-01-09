import type { Poem } from "~/features/poems/domain/poem.types";

export const sevillaSaeta: Poem = {
	id: "lorca-sevilla-saeta",
	slug: "sevilla-saeta",
	title: "Sevilla",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que retrata a Sevilla como torre llena de arqueros finos que disparan la saeta constante del río, ciudad para herir contrapuesta a Córdoba para morir, mezclando lo amargo de Don Juan y lo perfecto de Dionisio.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Gráfico de la petenera'. Sevilla y Córdoba son las dos ciudades emblemáticas de Andalucía, aquí contrapuestas: Sevilla es ciudad de la herida, de la pasión activa, de la saeta que hiere; Córdoba es ciudad de la muerte, del recogimiento, del morir. Don Juan Tenorio (figura sevillana mítica) representa lo amargo, la búsqueda imposible. Dionisio (dios griego del vino y el éxtasis) representa la perfección del delirio. El Guadalquivir es la 'saeta constante' del río.",
		influences: [
			"Mitología sevillana (Don Juan)",
			"Mitología griega (Dionisio)",
			"Rivalidad Sevilla-Córdoba",
			"Simbolismo del Guadalquivir",
			"Arquería flamenca",
		],
	},

	analysis: {
		themes: [
			"Sevilla como ciudad que hiere",
			"Córdoba como ciudad de la muerte",
			"arqueros y saetas",
			"ritmos y laberintos",
			"río como saeta constante",
			"mezcla de Don Juan y Dionisio",
			"horizonte y vino",
			"pasión activa versus muerte",
		],
		tone: "épico, celebratorio, contrastante y ebrio",
		meter:
			"versos de arte menor con métrica irregular (pentasílabos, hexasílabos, octosílabos, endecasílabos), ritmo ascendente y exclamativo",
		rhymeScheme:
			"rima asonante en í-o (finos, ritmos, laberintos, encendidos, limpio, río, vino, Dionisio) con estribillos 'Sevilla para herir' y 'Córdoba para morir'",
		generalSummary:
			"Sevilla es torre llena de arqueros finos. 'Sevilla para herir, / Córdoba para morir'. Es ciudad que acecha largos ritmos y los enrosca como laberintos, como tallos de parra encendidos. Bajo el arco del cielo, sobre su llano limpio, dispara la constante saeta de su río (Guadalquivir). Loca de horizonte, mezcla en su vino lo amargo de Don Juan y lo perfecto de Dionisio. Termina con doble exclamación: 'Sevilla para herir. / ¡Siempre Sevilla para herir!'",
		interpretation:
			"Sevilla es 'torre llena de arqueros finos': verticalidad (torre, como la Giralda), llena de saeteros, cantaores agudos, precisos. El estribillo 'Sevilla para herir, / Córdoba para morir' establece oposición esencial: Sevilla es ciudad activa, agresiva, de la herida y la pasión; Córdoba es ciudad pasiva, recogida, de la muerte y el recogimiento. Herir versus morir: acción versus cesación. Sevilla 'acecha / largos ritmos': como cazadora, espera los ritmos largos del cante (los melismas, las cadencias prolongadas) y los 'enrosca / como laberintos': los convierte en laberintos sonoros, estructuras complejas, enredaderas. 'Como tallos de parra / encendidos': símil doble: como tallos (vegetales, que trepan, se enroscan) de parra (vid, planta del vino) 'encendidos' (ardiendo, rojos, ebrios). Los ritmos son vegetación incendiada. 'Bajo el arco del cielo, / sobre su llano limpio': Sevilla está en planicie (llano) limpia, despejada, bajo la bóveda celeste. Desde esa posición geométrica perfecta, 'dispara la constante / saeta de su río': el Guadalquivir es saeta (flecha) constante que Sevilla dispara, río-flecha que fluye sin cesar, hiriendo la tierra. 'Y loca de horizonte': Sevilla está ebria, enloquecida por el horizonte infinito de su llano, por la amplitud. Esta locura la lleva a mezclar 'en su vino / lo amargo de Don Juan / y lo perfecto de Dionisio': en el vino sevillano (literal y metafórico: el vino de la fiesta, de la embriaguez mística) se mezclan dos esencias: Don Juan (el seductor burlador sevillano, amargo porque su búsqueda es insatisfecha, porque seduce y abandona, porque es figura trágica de la insatisfacción) y Dionisio (dios del vino y el teatro, de la perfección del éxtasis, del delirio como plenitud). Sevilla es síntesis imposible de lo amargo español y lo perfecto griego, de la tragedia juanesca y la comedia dionisíaca. El cierre 'Sevilla para herir. / ¡Siempre Sevilla para herir!' es afirmación obsesiva, definitiva: Sevilla es eternamente ciudad de la herida, de la pasión que daña, de la saeta que penetra.",
	},

	rhetoricalFigures: [
		{
			id: "metafora",
			contextualDescription:
				"Sevilla es 'torre llena de arqueros'. Los ritmos se 'enroscan como laberintos'. El río es 'saeta constante'. El vino contiene esencias de Don Juan y Dionisio.",
			verseIds: [
				"v1",
				"v2",
				"v6",
				"v7",
				"v8",
				"v14",
				"v15",
				"v18",
				"v19",
				"v20",
			],
		},
		{
			id: "antitesis",
			contextualDescription:
				"'Sevilla para herir, / Córdoba para morir': oposición entre acción (herir) y cesación (morir), entre pasión y muerte.",
			verseIds: ["v3", "v4"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"Sevilla 'acecha' (como cazadora), 'dispara' (como arquera), está 'loca de horizonte', 'mezcla en su vino' (como tabernera o alquimista).",
			verseIds: ["v5", "v14", "v18", "v19"],
		},
		{
			id: "simil",
			contextualDescription:
				"Los ritmos se enroscan 'como laberintos', 'Como tallos de parra / encendidos': doble símil que compara ritmos con estructuras complejas y vegetación ardiente.",
			verseIds: ["v8", "v9", "v10"],
		},
		{
			id: "hiperbole",
			contextualDescription:
				"'Loca de horizonte': exageración de la embriaguez por la amplitud. '¡Siempre Sevilla para herir!': eternización de la esencia hiriente.",
			verseIds: ["v18", "v22"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"La torre simboliza verticalidad, la Giralda. Los arqueros simbolizan saeteros. El laberinto simboliza complejidad del cante. Don Juan simboliza amargura española. Dionisio simboliza perfección del éxtasis griego.",
			verseIds: ["v1", "v8", "v19", "v20"],
		},
		{
			id: "anafora",
			contextualDescription:
				"'Sevilla para herir' se repite tres veces, creando estribillo obsesivo. 'Córdoba para morir' se repite dos veces como contraste.",
			verseIds: ["v3", "v11", "v21", "v22"],
		},

		{
			id: "epiteto",
			contextualDescription:
				"'Arqueros finos' (precisos, agudos), 'largos ritmos', 'constante saeta', 'llano limpio': adjetivos que caracterizan finamente.",
			verseIds: ["v2", "v6", "v14", "v15", "v13"],
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
					text: "Sevilla es una torre",
					syllables: 7,
					annotation:
						"Metáfora: Sevilla es torre (verticalidad, la Giralda como símbolo). Torre como atalaya, fortaleza, elevación.",
				},
				{
					id: "v2",
					number: 2,
					text: "llena de arqueros finos.",
					syllables: 7,
					annotation:
						"Los arqueros son saeteros, cantaores precisos, agudos. 'Finos': delicados pero certeros, de puntería exacta.",
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
					text: "Sevilla para herir,",
					syllables: 6,
					annotation:
						"Primer estribillo: Sevilla es ciudad de la herida, de la pasión activa, de la saeta que penetra y daña.",
				},
				{
					id: "v4",
					number: 4,
					text: "Córdoba para morir.",
					syllables: 6,
					annotation:
						"Contraste: Córdoba es ciudad de la muerte, del recogimiento, del morir tranquilo. Antítesis geográfica y existencial.",
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
					text: "Una ciudad que acecha",
					syllables: 7,
					annotation:
						"Personificación: Sevilla es cazadora que acecha, espera al acecho. Actitud predatoria, alerta.",
				},
				{
					id: "v6",
					number: 6,
					text: "largos ritmos,",
					syllables: 4,
					annotation:
						"Los ritmos largos del cante jondo: melismas, cadencias prolongadas, estructuras extensas y complejas.",
				},
				{
					id: "v7",
					number: 7,
					text: "y los enrosca",
					syllables: 4,
					annotation:
						"Acción: enroscar es enrollar, convertir en espiral, hacer laberinto. Sevilla enreda los ritmos.",
				},
				{
					id: "v8",
					number: 8,
					text: "como laberintos.",
					syllables: 5,
					annotation:
						"Símil: los ritmos se convierten en laberintos, estructuras complejas donde uno se pierde. El cante como laberinto sonoro.",
				},
				{
					id: "v9",
					number: 9,
					text: "Como tallos de parra",
					syllables: 6,
					annotation:
						"Segundo símil: como tallos de vid (parra, planta del vino) que trepan, se enroscan, crecen sinuosos.",
				},
				{
					id: "v10",
					number: 10,
					text: "encendidos.",
					syllables: 4,
					annotation:
						"Los tallos están encendidos: ardiendo, rojos, ebrios. Fuego vegetal, pasión que quema. Sinestesia: tallos que arden.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "verso aislado",
			verses: [
				{
					id: "v11",
					number: 11,
					text: "¡Sevilla para herir!",
					syllables: 6,
					annotation:
						"Repetición del estribillo, ahora exclamativo, elevado a grito o himno. Afirmación enfática.",
				},
			],
		},

		{
			id: "estrofa-5",
			number: 5,
			type: "libre",
			verses: [
				{
					id: "v12",
					number: 12,
					text: "Bajo el arco del cielo,",
					syllables: 7,
					annotation:
						"Imagen geométrica: el cielo es arco, bóveda celeste bajo la cual se sitúa Sevilla. Espacio sagrado, delimitado.",
				},
				{
					id: "v13",
					number: 13,
					text: "sobre su llano limpio,",
					syllables: 6,
					annotation:
						"Sevilla está en planicie limpia, despejada, sin obstáculos. El llano permite la visión infinita, el disparo certero.",
				},
				{
					id: "v14",
					number: 14,
					text: "dispara la constante",
					syllables: 6,
					annotation:
						"Personificación: Sevilla dispara como arquera. 'Constante': sin cesar, eterna, perpetua.",
				},
				{
					id: "v15",
					number: 15,
					text: "saeta de su río.",
					syllables: 6,
					annotation:
						"Metáfora magistral: el Guadalquivir es saeta (flecha) constante que Sevilla dispara, río-flecha que hiere la tierra.",
				},
			],
		},

		{
			id: "estrofa-6",
			number: 6,
			type: "verso aislado",
			verses: [
				{
					id: "v16",
					number: 16,
					text: "¡Córdoba para morir!",
					syllables: 6,
					annotation:
						"Repetición exclamativa del contraste: Córdoba es el lugar de la muerte, contrapuesto a Sevilla que es lugar de la herida.",
				},
			],
		},

		{
			id: "estrofa-7",
			number: 7,
			type: "libre",
			verses: [
				{
					id: "v17",
					number: 17,
					text: "Y loca de horizonte,",
					syllables: 6,
					annotation:
						"Personificación: Sevilla está loca, ebria, enloquecida por el horizonte infinito de su llano, por la amplitud sin límites.",
				},
				{
					id: "v18",
					number: 18,
					text: "mezcla en su vino,",
					syllables: 5,
					annotation:
						"Sevilla como tabernera o alquimista que mezcla en su vino (literal y metafórico: vino de la fiesta, del éxtasis).",
				},
				{
					id: "v19",
					number: 19,
					text: "lo amargo de Don Juan",
					syllables: 7,
					annotation:
						"Don Juan Tenorio, figura mítica sevillana. 'Lo amargo': la insatisfacción, la búsqueda imposible, la seducción que no llena.",
				},
				{
					id: "v20",
					number: 20,
					text: "y lo perfecto de Dionisio.",
					syllables: 8,
					annotation:
						"Dionisio, dios griego del vino y el teatro. 'Lo perfecto': la plenitud del éxtasis, el delirio como perfección, la embriaguez sagrada.",
				},
			],
		},

		{
			id: "estrofa-8",
			number: 8,
			type: "pareado",
			verses: [
				{
					id: "v21",
					number: 21,
					text: "Sevilla para herir.",
					syllables: 6,
					annotation:
						"Tercera repetición del estribillo, ahora sin exclamación pero con punto final que lo hace definitivo.",
				},
				{
					id: "v22",
					number: 22,
					text: "¡Siempre Sevilla para herir!",
					syllables: 8,
					annotation:
						"Cierre enfático: 'Siempre' eterniza la esencia. Sevilla es perpetuamente ciudad de la herida, de la saeta que penetra.",
				},
			],
		},
	],
};
