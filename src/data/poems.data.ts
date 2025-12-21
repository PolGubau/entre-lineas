import type { Poem } from "~/features/poems/domain/poem.types";

// Datos de ejemplo: "Veinte poemas de amor y una canción desesperada" - Poema 20
export const poemasData: Poem[] = [
	{
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
			epoca: "Siglo XX",
			movimiento: "Modernismo / Vanguardismo",
			paisOrigen: "Chile",
			añoPublicacion: 1924,
			contextoSocial:
				"Publicado cuando Neruda tenía 19 años, este libro consolidó su fama internacional.",
			influencias: ["Rubén Darío", "Walt Whitman", "Romanticismo"],
		},

		analysis: {
			tematica: ["amor perdido", "melancolía", "nostalgia", "soledad"],
			tono: "melancólico y reflexivo",
			metrica: "verso libre",
			esquemaRima: "libre",
			resumenGeneral:
				"El poema explora el dolor de un amor que ya no existe. El poeta reflexiona sobre la pérdida y la distancia emocional, utilizando la noche como metáfora del vacío interior.",
			interpretacion:
				'La repetición del verso "Puedo escribir los versos más tristes esta noche" funciona como un estribillo que intensifica la emoción. La tensión entre "la quise" y "ya no la quiero" revela la complejidad del desamor.',
		},

		rhetoricalFigures: [
			{
				id: "fig-1",
				tipo: "anafora",
				nombre: "Anáfora del verso inicial",
				descripcion:
					'Repetición de "Puedo escribir los versos más tristes esta noche" para enfatizar la capacidad dolorosa del poeta de expresar su tristeza.',
				ejemploGenerico:
					"Repetición de palabras al inicio de versos consecutivos",
			},
			{
				id: "fig-2",
				tipo: "personificacion",
				nombre: "Personificación de la noche",
				descripcion:
					'La noche es presentada como un ser vivo que "estrellada" y "tirita" en la inmensidad, reflejando el estado emocional del poeta.',
			},
			{
				id: "fig-3",
				tipo: "metafora",
				nombre: "Metáfora de la escritura",
				descripcion:
					'"Escribir" se convierte en metáfora del proceso de recordar y elaborar el duelo amoroso.',
			},
			{
				id: "fig-4",
				tipo: "paradoja",
				nombre: "Paradoja del amor",
				descripcion:
					'"La quise, y a veces ella también me quiso" seguido de "Ya no la quiero, es cierto, pero cuánto la quise" muestra la contradicción entre el presente y el pasado.',
			},
			{
				id: "fig-5",
				tipo: "simil",
				nombre: "Símil del viento",
				descripcion:
					'El viento que "gime" en la noche se compara con el lamento interior del poeta.',
			},
		],

		estrofas: [
			{
				id: "estrofa-1",
				numero: 1,
				tipo: "libre",
				versos: [
					{
						id: "v1",
						numero: 1,
						texto: "Puedo escribir los versos más tristes esta noche.",
						figuras: ["fig-1", "fig-3"],
						anotacion:
							"Verso inicial que funciona como leitmotiv. Establece el tono melancólico de todo el poema.",
					},
				],
			},
			{
				id: "estrofa-2",
				numero: 2,
				tipo: "libre",
				versos: [
					{
						id: "v2",
						numero: 2,
						texto: 'Escribir, por ejemplo: "La noche está estrellada,',
						figuras: ["fig-2"],
					},
					{
						id: "v3",
						numero: 3,
						texto: 'y tiritan, azules, los astros, a lo lejos".',
						figuras: ["fig-2"],
						anotacion:
							'Personificación de los astros que "tiritan", proyectando la vulnerabilidad emocional en el cosmos.',
					},
				],
			},
			{
				id: "estrofa-3",
				numero: 3,
				tipo: "libre",
				versos: [
					{
						id: "v4",
						numero: 4,
						texto: "El viento de la noche gira en el cielo y canta.",
						figuras: ["fig-2", "fig-5"],
					},
				],
			},
			{
				id: "estrofa-4",
				numero: 4,
				tipo: "libre",
				versos: [
					{
						id: "v5",
						numero: 5,
						texto: "Puedo escribir los versos más tristes esta noche.",
						figuras: ["fig-1", "fig-3"],
						anotacion: "Repetición del estribillo que intensifica la emoción.",
					},
					{
						id: "v6",
						numero: 6,
						texto: "Yo la quise, y a veces ella también me quiso.",
						figuras: ["fig-4"],
					},
				],
			},
			{
				id: "estrofa-5",
				numero: 5,
				tipo: "libre",
				versos: [
					{
						id: "v7",
						numero: 7,
						texto: "En las noches como ésta la tuve entre mis brazos.",
						figuras: [],
						anotacion:
							"Contraste entre el recuerdo físico del amor y la ausencia presente.",
					},
					{
						id: "v8",
						numero: 8,
						texto: "La besé tantas veces bajo el cielo infinito.",
						figuras: [],
					},
				],
			},
			{
				id: "estrofa-6",
				numero: 6,
				tipo: "libre",
				versos: [
					{
						id: "v9",
						numero: 9,
						texto: "Ella me quiso, a veces yo también la quería.",
						figuras: ["fig-4"],
					},
					{
						id: "v10",
						numero: 10,
						texto: "Cómo no haber amado sus grandes ojos fijos.",
						figuras: [],
					},
				],
			},
			{
				id: "estrofa-7",
				numero: 7,
				tipo: "libre",
				versos: [
					{
						id: "v11",
						numero: 11,
						texto: "Puedo escribir los versos más tristes esta noche.",
						figuras: ["fig-1", "fig-3"],
					},
					{
						id: "v12",
						numero: 12,
						texto: "Pensar que no la tengo. Sentir que la he perdido.",
						figuras: [],
						anotacion:
							'Paralelismo sintáctico entre "pensar" y "sentir" que muestra la doble dimensión racional y emocional de la pérdida.',
					},
				],
			},
		],
	},
	{
		id: "2",
		slug: "caminante-no-hay-camino",
		title: "Caminante, no hay camino",
		author: "Antonio Machado",
		authorSlug: "antonio-machado",
		shortDescription:
			'Poema filosófico sobre la construcción del propio destino. Parte de "Proverbios y cantares".',
		createdAt: new Date("2025-01-01"),
		updatedAt: new Date("2025-01-01"),

		context: {
			epoca: "Siglo XX",
			movimiento: "Generación del 98",
			paisOrigen: "España",
			añoPublicacion: 1912,
			contextoSocial:
				"Escrito en un período de crisis existencial en España tras la pérdida de las últimas colonias.",
			influencias: [
				"Krausismo",
				"Simbolismo francés",
				"Filosofía existencialista",
			],
		},

		analysis: {
			tematica: ["existencialismo", "libre albedrío", "filosofía", "tiempo"],
			tono: "reflexivo y filosófico",
			metrica: "octosílabos",
			esquemaRima: "asonante",
			resumenGeneral:
				"El poema utiliza la metáfora del camino y el caminante para reflexionar sobre cómo construimos nuestra vida con cada decisión. No existe un destino prefijado, sino que se va creando al andar.",
			interpretacion:
				'La triple negación ("no hay camino", "no hay camino", "caminos de la mar") enfatiza la inexistencia de un destino predeterminado. El poema es una defensa del libre albedrío y la responsabilidad personal.',
		},

		rhetoricalFigures: [
			{
				id: "fig-m1",
				tipo: "metafora",
				nombre: "Metáfora del camino",
				descripcion:
					'El "camino" representa la vida, las decisiones y el destino personal que cada uno construye.',
			},
			{
				id: "fig-m2",
				tipo: "paradoja",
				nombre: "Paradoja del camino",
				descripcion:
					'"Se hace camino al andar" es una paradoja: el camino se crea caminando, no existe antes.',
			},
			{
				id: "fig-m3",
				tipo: "apostrofe",
				nombre: "Apóstrofe al caminante",
				descripcion:
					'El poeta se dirige directamente al "caminante" (lector/ser humano universal).',
			},
			{
				id: "fig-m4",
				tipo: "anafora",
				nombre: 'Repetición de "no hay camino"',
				descripcion:
					"La repetición enfatiza la inexistencia del destino prefijado.",
			},
		],

		estrofas: [
			{
				id: "estrofa-m1",
				numero: 1,
				tipo: "libre",
				versos: [
					{
						id: "vm1",
						numero: 1,
						texto: "Caminante, son tus huellas",
						figuras: ["fig-m1", "fig-m3"],
						silabas: 8,
						anotacion:
							'Apóstrofe directo al lector. Las "huellas" representan las acciones pasadas.',
					},
					{
						id: "vm2",
						numero: 2,
						texto: "el camino y nada más;",
						figuras: ["fig-m1"],
						silabas: 8,
					},
					{
						id: "vm3",
						numero: 3,
						texto: "caminante, no hay camino,",
						figuras: ["fig-m1", "fig-m2", "fig-m4"],
						silabas: 8,
						anotacion: "Primera negación del destino predeterminado.",
					},
					{
						id: "vm4",
						numero: 4,
						texto: "se hace camino al andar.",
						figuras: ["fig-m1", "fig-m2"],
						silabas: 8,
						anotacion:
							"Verso central y más célebre del poema. Sintetiza la filosofía existencialista.",
					},
				],
			},
			{
				id: "estrofa-m2",
				numero: 2,
				tipo: "libre",
				versos: [
					{
						id: "vm5",
						numero: 5,
						texto: "Al andar se hace el camino,",
						figuras: ["fig-m1", "fig-m2"],
						silabas: 8,
					},
					{
						id: "vm6",
						numero: 6,
						texto: "y al volver la vista atrás",
						figuras: [],
						silabas: 8,
						anotacion: "Mirada retrospectiva hacia el pasado.",
					},
					{
						id: "vm7",
						numero: 7,
						texto: "se ve la senda que nunca",
						figuras: ["fig-m1"],
						silabas: 8,
					},
					{
						id: "vm8",
						numero: 8,
						texto: "se ha de volver a pisar.",
						figuras: [],
						silabas: 8,
						anotacion: "La irreversibilidad del tiempo y las decisiones.",
					},
				],
			},
			{
				id: "estrofa-m3",
				numero: 3,
				tipo: "libre",
				versos: [
					{
						id: "vm9",
						numero: 9,
						texto: "Caminante no hay camino",
						figuras: ["fig-m1", "fig-m3", "fig-m4"],
						silabas: 8,
					},
					{
						id: "vm10",
						numero: 10,
						texto: "sino estelas en la mar.",
						figuras: ["fig-m1"],
						silabas: 8,
						anotacion:
							"Metáfora final: las estelas en el mar desaparecen, como las huellas de nuestras vidas.",
					},
				],
			},
		],
	},
];
