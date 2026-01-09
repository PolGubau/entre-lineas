import type { Poem } from "~/features/poems/domain/poem.types";

export const despuesdePasar: Poem = {
	id: "lorca-despues-de-pasar",
	slug: "despues-de-pasar",
	title: "Después de pasar",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo donde los niños y las montañas contemplan un punto lejano mientras el llanto asciende en espirales, creando una atmósfera de dolor cósmico y destino trágico.",
	createdAt: new Date("2026-01-09"),
	updatedAt: new Date("2026-01-09"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', obra que busca capturar el espíritu del flamenco y la cultura andaluza. El poema evoca la mirada perdida hacia lo inalcanzable y el llanto colectivo como expresión del destino trágico.",
		influences: [
			"Cante jondo",
			"Lírica popular andaluza",
			"Simbolismo",
			"Tradición oral flamenca",
			"Surrealismo incipiente",
		],
	},

	analysis: {
		themes: ["dolor", "tiempo", "soledad"],
		tone: "enigmático, solemne y trágico",
		meter:
			"versos de arte menor (hexasílabos y heptasílabos) con ritmo pausado que evoca contemplación",
		rhymeScheme:
			"rima asonante irregular con efecto de eco entre la primera y última estrofa",
		generalSummary:
			"Dos grupos contemplan un punto lejano: niños al inicio, montañas al final. Entre ambas miradas, los candiles se apagan, muchachas ciegas preguntan a la luna y el llanto asciende en espirales. El poema crea una atmósfera de búsqueda imposible y dolor universal.",
		interpretation:
			"El poema construye una visión simbólica del destino humano. Los niños representan la inocencia que ya percibe la imposibilidad; las muchachas ciegas son la humanidad que busca respuestas en lo inalcanzable (la luna); el llanto en espiral sugiere un dolor que se repite eternamente. La simetría entre niños y montañas sugiere que la contemplación de lo lejano es tanto personal como cósmica.",
	},

	rhetoricalFigures: [
		{
			id: "paralelismo",
			contextualDescription:
				"Estructura paralela entre la primera y última estrofa: 'Los niños miran / un punto lejano' y 'Las montañas miran / un punto lejano', creando un efecto de eco y circularidad.",
			verseIds: ["v1", "v2", "v11", "v12"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"Las montañas adquieren capacidad de mirar, elevando la contemplación del nivel humano al cósmico.",
			verseIds: ["v11"],
		},
		{
			id: "metafora",
			contextualDescription:
				"Las 'espirales de llanto' que ascienden por el aire son una imagen visual y cinética del dolor que se eleva y expande.",
			verseIds: ["v9"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"El 'punto lejano' simboliza lo inalcanzable, el destino, la muerte o el anhelo imposible. Las muchachas ciegas simbolizan la humanidad que busca sentido en la oscuridad.",
			verseIds: ["v2", "v5", "v12"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"El llanto 'asciende' visualmente en forma de espirales, combinando la percepción auditiva (llanto) con la visual (espirales ascendentes).",
			verseIds: ["v8", "v9"],
		},
		{
			id: "antitesis",
			contextualDescription:
				"Contraste entre niños (inicio de la vida) y muchachas ciegas (privación de luz/conocimiento), entre lo que mira y lo que no puede ver.",
			verseIds: ["v1", "v4"],
		},
		{
			id: "apostrofe",
			contextualDescription:
				"Las muchachas ciegas preguntan directamente a la luna, invocando al astro como si pudiera responder.",
			verseIds: ["v6"],
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
					text: "Los niños miran",
					syllables: 6,
					annotation:
						"Los niños representan la inocencia que ya intuye lo inalcanzable.",
				},
				{
					id: "v2",
					number: 2,
					text: "un punto lejano.",
					syllables: 6,
					annotation:
						"El 'punto lejano' es símbolo del destino, la muerte o el anhelo imposible.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "libre",
			verses: [
				{
					id: "v3",
					number: 3,
					text: "Los candiles se apagan.",
					syllables: 7,
					annotation:
						"La luz artificial desaparece, simbolizando el fin de la esperanza o el paso del tiempo.",
				},
				{
					id: "v4",
					number: 4,
					text: "Unas muchachas ciegas",
					syllables: 7,
					annotation:
						"La ceguera representa la condición humana: buscar sin ver, vivir sin comprender.",
				},
				{
					id: "v5",
					number: 5,
					text: "preguntan a la luna,",
					syllables: 7,
					annotation:
						"La luna, inalcanzable y silenciosa, no puede dar respuestas a las preguntas humanas.",
				},
				{
					id: "v6",
					number: 6,
					text: "y por el aire ascienden",
					syllables: 7,
				},
				{
					id: "v7",
					number: 7,
					text: "espirales de llanto.",
					syllables: 7,
					annotation:
						"Imagen visual y auditiva: el dolor se eleva en formas geométricas, perpetuo y ascendente.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "pareado",
			verses: [
				{
					id: "v8",
					number: 8,
					text: "Las montañas miran",
					syllables: 6,
					annotation:
						"Paralelismo con el primer verso. Ahora la naturaleza contempla, elevando la mirada de lo humano a lo cósmico.",
				},
				{
					id: "v9",
					number: 9,
					text: "un punto lejano.",
					syllables: 6,
					annotation:
						"La repetición cierra el ciclo: la búsqueda de lo imposible es universal, atemporal.",
				},
			],
		},
	],
};
