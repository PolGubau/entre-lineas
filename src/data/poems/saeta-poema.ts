import type { Poem } from "~/features/poems/domain/poem.types";

export const saetaPoema: Poem = {
	id: "lorca-saeta-poema",
	slug: "saeta-poema",
	title: "Saeta",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo sobre Cristo moreno que pasa de lirio de Judea a clavel de España, con guedejas quemadas, pómulos salientes y pupilas blancas.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Gráfico de la petenera'. El poema describe la transformación de Cristo: de lirio (flor blanca, pura, oriental, judía) a clavel (flor roja, pasional, española, flamenca). Es Cristo andaluzado, moreno, quemado por el sol español, con rasgos gitanos: guedejas (cabellos) quemadas, pómulos salientes, pupilas blancas. Es Cristo del pueblo, Cristo español que pasa de Judea (Oriente, origen) a España (destino, encarnación andaluza).",
		influences: [
			"Cristología popular andaluza",
			"Imaginería de Semana Santa",
			"Cristo gitano",
			"Simbolismo floral",
			"Pasión de Cristo",
		],
	},

	analysis: {
		themes: [
			"Cristo moreno, andaluzado",
			"transformación de lirio a clavel",
			"de Judea a España",
			"rasgos gitanos de Cristo",
			"tierra tostada, cielo oscuro",
			"agua lenta",
			"guedejas quemadas",
			"pupilas blancas",
			"Cristo del pueblo",
		],
		tone: "reverente, descriptivo, admirado y procesional",
		meter:
			"versos de arte menor con métrica irregular (pentasílabos, hexasílabos, octosílabos), ritmo pausado de contemplación",
		rhymeScheme:
			"rima asonante en á-a (pasa, España, oscuro vs oscura, tostada, agua, quemadas, blancas)",
		generalSummary:
			"Cristo moreno pasa de lirio de Judea a clavel de España. Estribillo: '¡Miradlo por dónde viene!' De España: cielo limpio y oscuro, tierra tostada, y cauces donde corre muy lenta el agua. Cristo moreno con las guedejas quemadas, los pómulos salientes y las pupilas blancas. Estribillo final: '¡Miradlo por dónde va!'",
		interpretation:
			"El poema canta la transformación de Cristo: de flor oriental (lirio de Judea, blanco, puro) a flor española (clavel de España, rojo, pasional). Es proceso de andaluzación, de encarnación en el pueblo español. Cristo se hace moreno, se quema bajo el sol andaluz, adquiere rasgos gitanos. El estribillo '¡Miradlo por dónde viene!' es llamada de atención procesional: mirad, atended, ved a Cristo que llega. 'De España' introduce descripción del paisaje español: 'Cielo limpio y oscuro' (paradoja: cielo despejado pero oscuro, quizás por la intensidad del azul profundo), 'tierra tostada' (quemada por el sol, seca, color de pan tostado, de piel morena), 'y cauces donde corre / muy lenta el agua' (ríos casi secos, agua perezosa, lentitud del sur). Este es el paisaje que Cristo habita ahora. 'Cristo moreno, / con las guedejas quemadas': el cabello (guedejas) está quemado por el sol, oscurecido, chamuscado. 'Los pómulos salientes': rasgos gitanos, estructura ósea marcada, rostro anguloso del Cristo español. 'Y las pupilas blancas': imagen sorprendente. Pupilas blancas pueden indicar ceguera, ojos en blanco (de éxtasis o muerte), o contraste extremo entre pupila clara y piel morena. Es Cristo que mira hacia dentro, o Cristo ciego del dolor, o Cristo transfigurado. El estribillo final '¡Miradlo por dónde va!' cierra el recorrido: Cristo ha pasado, ha transitado de Judea a España, de lirio a clavel, y ahora se va, sigue su camino procesional. Es poema que celebra la encarnación popular de Cristo, su asimilación al pueblo andaluz, su transformación en Cristo gitano, moreno, quemado, de rasgos marcados. No es Cristo rubio nórdico sino Cristo andaluz, hermano del pueblo.",
	},

	rhetoricalFigures: [
		{
			id: "metafora",
			contextualDescription:
				"Cristo 'pasa / de lirio de Judea / a clavel de España': transformación floral que representa cambio de identidad cultural, de pureza oriental a pasión española.",
			verseIds: ["v1", "v2", "v3", "v4"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"El lirio simboliza pureza, blancura, Oriente. El clavel simboliza pasión, sangre, España. Las guedejas quemadas simbolizan sol andaluz. Los pómulos salientes simbolizan raza gitana. Las pupilas blancas simbolizan éxtasis, ceguera interior o transfiguración.",
			verseIds: ["v3", "v4", "v11", "v12", "v13", "v14"],
		},

		{
			id: "epiteto",
			contextualDescription:
				"'Cristo moreno', 'cielo limpio y oscuro', 'tierra tostada', 'guedejas quemadas', 'pómulos salientes', 'pupilas blancas': adjetivos que caracterizan visual y racialmente.",
			verseIds: ["v1", "v7", "v8", "v11", "v12", "v13", "v14"],
		},
		{
			id: "paradoja",
			contextualDescription:
				"'Cielo limpio y oscuro': contradicción aparente. Limpio (despejado, sin nubes) y oscuro (profundo, intenso). Paradoja del azul profundo.",
			verseIds: ["v7"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"Cristo 'pasa', 'viene', 'va': verbos de movimiento que le dan vida, que lo hacen peregrino activo.",
			verseIds: ["v2", "v5", "v15"],
		},

		{
			id: "hiperbaton",
			contextualDescription:
				"'Cauces donde corre / muy lenta el agua' invierte el orden (el agua corre muy lenta en cauces) para enfatizar la lentitud.",
			verseIds: ["v9", "v10"],
		},
		{
			id: "antitesis",
			contextualDescription:
				"'Lirio de Judea' (blanco, oriental) versus 'clavel de España' (rojo, occidental). Contraste geográfico y cromático.",
			verseIds: ["v3", "v4"],
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
					text: "Cristo moreno",
					syllables: 5,
					annotation:
						"Cristo de piel morena, oscurecida, andaluzado. No es Cristo rubio nórdico sino Cristo gitano, español.",
				},
				{
					id: "v2",
					number: 2,
					text: "pasa",
					syllables: 2,
					annotation:
						"Verbo de movimiento: Cristo transita, camina, pasa de un lugar a otro, de una identidad a otra.",
				},
				{
					id: "v3",
					number: 3,
					text: "de lirio de Judea",
					syllables: 6,
					annotation:
						"Origen: lirio (flor blanca, pura) de Judea (tierra de origen, Oriente). Cristo judío, oriental, originario.",
				},
				{
					id: "v4",
					number: 4,
					text: "a clavel de España.",
					syllables: 6,
					annotation:
						"Destino: clavel (flor roja, pasional) de España. Cristo español, andaluz, encarnado en el pueblo. Transformación floral y cultural.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "verso aislado",
			verses: [
				{
					id: "v5",
					number: 5,
					text: "¡Miradlo por dónde viene!",
					syllables: 8,
					annotation:
						"Estribillo procesional: llamada de atención. Mirad (imperativo plural), ved a Cristo que llega. Exclamación de admiración.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "libre",
			verses: [
				{
					id: "v6",
					number: 6,
					text: "De España.",
					syllables: 3,
					annotation:
						"Énfasis: viene de España, es español ahora. Ha completado la transformación de Judea a España.",
				},
				{
					id: "v7",
					number: 7,
					text: "Cielo limpio y oscuro,",
					syllables: 6,
					annotation:
						"Descripción del cielo español: limpio (despejado, sin nubes) y oscuro (profundo, azul intenso). Paradoja del cielo andaluz.",
				},
				{
					id: "v8",
					number: 8,
					text: "tierra tostada,",
					syllables: 5,
					annotation:
						"Tierra quemada por el sol, seca, color de pan tostado, de piel morena. Paisaje andaluz árido.",
				},
				{
					id: "v9",
					number: 9,
					text: "y cauces donde corre",
					syllables: 6,
					annotation:
						"Cauces: lechos de río. Donde corre (o apenas corre) el agua. Ríos andaluces casi secos.",
				},
				{
					id: "v10",
					number: 10,
					text: "muy lenta el agua.",
					syllables: 5,
					annotation:
						"Agua perezosa, lenta, casi estancada. Lentitud del sur, ríos de verano reducidos a hilos. Agua que arrastra, pausa.",
				},
				{
					id: "v11",
					number: 11,
					text: "Cristo moreno,",
					syllables: 5,
					annotation:
						"Repetición que refuerza: Cristo es moreno, ha adquirido el color de la tierra y el sol español.",
				},
				{
					id: "v12",
					number: 12,
					text: "con las guedejas quemadas,",
					syllables: 8,
					annotation:
						"Guedejas: cabellos largos. Quemadas: chamuscadas por el sol, oscurecidas. Cabello moreno, casi negro, abrasado.",
				},
				{
					id: "v13",
					number: 13,
					text: "los pómulos salientes",
					syllables: 6,
					annotation:
						"Rasgos gitanos: pómulos marcados, estructura ósea pronunciada. Rostro anguloso, duro, del pueblo andaluz.",
				},
				{
					id: "v14",
					number: 14,
					text: "y las pupilas blancas.",
					syllables: 7,
					annotation:
						"Imagen sorprendente: pupilas blancas (ceguera, ojos en blanco de éxtasis o muerte, o contraste extremo con piel morena). Cristo que mira hacia dentro.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "verso aislado",
			verses: [
				{
					id: "v15",
					number: 15,
					text: "¡Miradlo por dónde va!",
					syllables: 8,
					annotation:
						"Estribillo final: Cristo se va, sigue su camino procesional. Ha pasado de venir (llegar) a ir (partir). Cierre del tránsito.",
				},
			],
		},
	],
};
