import type { Poem } from "~/features/poems/domain/poem.types";

export const versosMasTristes: Poem = {
	id: "1",
	slug: "puedo-escribir-los-versos-mas-tristes",
	title: "Puedo escribir los versos más tristes esta noche",
	author: "Pablo Neruda",
	authorSlug: "pablo-neruda",
	shortDescription:
		'Poema XX de "Veinte poemas de amor y una canción desesperada". Una elegía sobre el amor perdido y la melancolía.',
	createdAt: new Date("2025-01-01"),
	updatedAt: new Date("2025-01-01"),

	context: {
		era: "Siglo XX",
		movement: "Modernismo / Vanguardismo",
		originCountry: "Chile",
		publicationYear: 1924,
		socialContext:
			"Publicado cuando Neruda tenía 19 años, este libro consolidó su fama internacional.",
		influences: ["Rubén Darío", "Walt Whitman", "Romanticismo"],
	},

	analysis: {
		themes: ["amor perdido", "melancolía", "nostalgia", "soledad"],
		tone: "melancólico y reflexivo",
		meter: "verso libre",
		rhymeScheme: "libre",
		generalSummary:
			"El poema explora el dolor de un amor que ya no existe. El poeta reflexiona sobre la pérdida y la distancia emocional, utilizando la noche como metáfora del vacío interior.",
		interpretation:
			'La repetición del verso "Puedo escribir los versos más tristes esta noche" funciona como un estribillo que intensifica la emoción. La tensión entre "la quise" y "ya no la quiero" revela la complejidad del desamor.',
	},

	rhetoricalFigures: [
		{
			id: "anafora",
			contextualDescription:
				'Repetición de "Puedo escribir los versos más tristes esta noche" para enfatizar la capacidad dolorosa del poeta de expresar su tristeza.',
			verseIds: ["1-v1", "1-v14"],
		},
		{
			id: "personificacion",
			contextualDescription:
				'La noche es presentada como un ser vivo que "estrellada" y "tirita" en la inmensidad, reflejando el estado emocional del poeta.',
			verseIds: ["1-v2", "1-v3", "1-v4"],
		},
		{
			id: "metafora",
			contextualDescription:
				'"Escribir" se convierte en metáfora del proceso de recordar y elaborar el duelo amoroso.',
			verseIds: ["1-v1", "1-v5", "1-v11"],
		},
		{
			id: "paradoja",
			contextualDescription:
				'"La quise, y a veces ella también me quiso" seguido de "Ya no la quiero, es cierto, pero cuánto la quise" muestra la contradicción entre el presente y el pasado.',
			verseIds: ["1-v6", "1-v9"],
		},
		{
			id: "simil",
			contextualDescription:
				'El viento que "gime" en la noche se compara con el lamento interior del poeta.',
			verseIds: ["1-v4"],
		},
	],

	estrofas: [
		{
			id: "estrofa-1",
			number: 1,
			type: "libre",
			verses: [
				{
					id: "1-v1",
					number: 1,
					text: "Puedo escribir los versos más tristes esta noche.",
					annotation:
						"Verso inicial que funciona como leitmotiv. Establece el tono melancólico de todo el poema.",
				},
			],
		},
		{
			id: "estrofa-2",
			number: 2,
			type: "libre",
			verses: [
				{
					id: "1-v2",
					number: 2,
					text: 'Escribir, por ejemplo: "La noche está estrellada,',
				},
				{
					id: "1-v3",
					number: 3,
					text: 'y tiritan, azules, los astros, a lo lejos".',
					annotation:
						'Personificación de los astros que "tiritan", proyectando la vulnerabilidad emocional en el cosmos.',
				},
			],
		},
		{
			id: "estrofa-3",
			number: 3,
			type: "libre",
			verses: [
				{
					id: "1-v4",
					number: 4,
					text: "El viento de la noche gira en el cielo y canta.",
				},
			],
		},
		{
			id: "estrofa-4",
			number: 4,
			type: "libre",
			verses: [
				{
					id: "1-v5",
					number: 5,
					text: "Puedo escribir los versos más tristes esta noche.",
					annotation: "Repetición del estribillo que intensifica la emoción.",
				},
				{
					id: "1-v6",
					number: 6,
					text: "Yo la quise, y a veces ella también me quiso.",
				},
			],
		},
		{
			id: "estrofa-5",
			number: 5,
			type: "libre",
			verses: [
				{
					id: "1-v7",
					number: 7,
					text: "En las noches como ésta la tuve entre mis brazos.",
					annotation:
						"Contraste entre el recuerdo físico del amor y la ausencia presente.",
				},
				{
					id: "1-v8",
					number: 8,
					text: "La besé tantas veces bajo el cielo infinito.",
				},
			],
		},
		{
			id: "estrofa-6",
			number: 6,
			type: "libre",
			verses: [
				{
					id: "1-v9",
					number: 9,
					text: "Ella me quiso, a veces yo también la quería.",
				},
				{
					id: "1-v10",
					number: 10,
					text: "Cómo no haber amado sus grandes ojos fijos.",
				},
			],
		},
		{
			id: "estrofa-7",
			number: 7,
			type: "libre",
			verses: [
				{
					id: "1-v11",
					number: 11,
					text: "Puedo escribir los versos más tristes esta noche.",
				},
				{
					id: "1-v12",
					number: 12,
					text: "Pensar que no la tengo. Sentir que la he perdido.",
					annotation:
						'Paralelismo sintáctico entre "pensar" y "sentir" que muestra la doble dimensión racional y emocional de la pérdida.',
				},
			],
		},
	],
};
