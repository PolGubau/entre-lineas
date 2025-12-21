import type { Poem } from "~/features/poems/domain/poem.types";

export const poemasData: Poem[] = [
	{
		id: "1",
		slug: "puedo-escribir-los-versos-mas-tristes",
		titulo: "Puedo escribir los versos más tristes esta noche",
		autor: "Pablo Neruda",
		autorSlug: "pablo-neruda",
		descripcionCorta:
			'Poema XX de "Veinte poemas de amor y una canción desesperada". Una elegía sobre el amor perdido y la melancolía.',
		createdAt: new Date("2025-01-01"),
		updatedAt: new Date("2025-01-01"),

		contexto: {
			epoca: "Siglo XX",
			movimiento: "Modernismo / Vanguardismo",
			paisOrigen: "Chile",
			añoPublicacion: 1924,
			contextoSocial:
				"Publicado cuando Neruda tenía 19 años, este libro consolidó su fama internacional.",
			influencias: ["Rubén Darío", "Walt Whitman", "Romanticismo"],
		},

		analisis: {
			tematica: ["amor perdido", "melancolía", "nostalgia", "soledad"],
			tono: "melancólico y reflexivo",
			metrica: "verso libre",
			esquemaRima: "libre",
			resumenGeneral:
				"El poema explora el dolor de un amor que ya no existe. El poeta reflexiona sobre la pérdida y la distancia emocional, utilizando la noche como metáfora del vacío interior.",
			interpretacion:
				'La repetición del verso "Puedo escribir los versos más tristes esta noche" funciona como un estribillo que intensifica la emoción. La tensión entre "la quise" y "ya no la quiero" revela la complejidad del desamor.',
		},

		figurasRetoricas: [
			{
				id: "anafora",
				descripcionContextual:
					'Repetición de "Puedo escribir los versos más tristes esta noche" para enfatizar la capacidad dolorosa del poeta de expresar su tristeza.',
				versosIds: ["v1", "v14"],
			},
			{
				id: "personificacion",
				descripcionContextual:
					'La noche es presentada como un ser vivo que "estrellada" y "tirita" en la inmensidad, reflejando el estado emocional del poeta.',
				versosIds: ["v2", "v3", "v4"],
			},
			{
				id: "metafora",
				descripcionContextual:
					'"Escribir" se convierte en metáfora del proceso de recordar y elaborar el duelo amoroso.',
				versosIds: ["v1", "v5", "v11"],
			},
			{
				id: "paradoja",
				descripcionContextual:
					'"La quise, y a veces ella también me quiso" seguido de "Ya no la quiero, es cierto, pero cuánto la quise" muestra la contradicción entre el presente y el pasado.',
				versosIds: ["v6", "v9"],
			},
			{
				id: "simil",
				descripcionContextual:
					'El viento que "gime" en la noche se compara con el lamento interior del poeta.',
				versosIds: ["v4"],
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
					},
					{
						id: "v3",
						numero: 3,
						texto: 'y tiritan, azules, los astros, a lo lejos".',
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
						anotacion: "Repetición del estribillo que intensifica la emoción.",
					},
					{
						id: "v6",
						numero: 6,
						texto: "Yo la quise, y a veces ella también me quiso.",
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
						anotacion:
							"Contraste entre el recuerdo físico del amor y la ausencia presente.",
					},
					{
						id: "v8",
						numero: 8,
						texto: "La besé tantas veces bajo el cielo infinito.",
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
					},
					{
						id: "v10",
						numero: 10,
						texto: "Cómo no haber amado sus grandes ojos fijos.",
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
					},
					{
						id: "v12",
						numero: 12,
						texto: "Pensar que no la tengo. Sentir que la he perdido.",
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
		titulo: "Caminante, no hay camino",
		autor: "Antonio Machado",
		autorSlug: "antonio-machado",
		descripcionCorta:
			'Poema filosófico sobre la construcción del propio destino. Parte de "Proverbios y cantares".',
		createdAt: new Date("2025-01-01"),
		updatedAt: new Date("2025-01-01"),

		contexto: {
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

		analisis: {
			tematica: ["existencialismo", "libre albedrío", "filosofía", "tiempo"],
			tono: "reflexivo y filosófico",
			metrica: "octosílabos",
			esquemaRima: "asonante",
			resumenGeneral:
				"El poema utiliza la metáfora del camino y el caminante para reflexionar sobre cómo construimos nuestra vida con cada decisión. No existe un destino prefijado, sino que se va creando al andar.",
			interpretacion:
				'La triple negación ("no hay camino", "no hay camino", "caminos de la mar") enfatiza la inexistencia de un destino predeterminado. El poema es una defensa del libre albedrío y la responsabilidad personal.',
		},

		figurasRetoricas: [
			{
				id: "metafora",
				descripcionContextual:
					'El "camino" representa la vida, las decisiones y el destino personal que cada uno construye.',
				versosIds: ["vm1", "vm2", "vm3", "vm4", "vm5", "vm7", "vm9", "vm10"],
			},
			{
				id: "paradoja",
				descripcionContextual:
					'"Se hace camino al andar" es una paradoja: el camino se crea caminando, no existe antes.',
				versosIds: ["vm3", "vm4", "vm5"],
			},
			{
				id: "apostrofe",
				descripcionContextual:
					'El poeta se dirige directamente al "caminante" (lector/ser humano universal).',
				versosIds: ["vm1", "vm3", "vm9"],
			},
			{
				id: "anafora",
				descripcionContextual:
					'Repetición de "no hay camino" que enfatiza la inexistencia del destino prefijado.',
				versosIds: ["vm3", "vm9"],
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
						silabas: 8,
						anotacion:
							'Apóstrofe directo al lector. Las "huellas" representan las acciones pasadas.',
					},
					{
						id: "vm2",
						numero: 2,
						texto: "el camino y nada más;",
						silabas: 8,
					},
					{
						id: "vm3",
						numero: 3,
						texto: "caminante, no hay camino,",
						silabas: 8,
						anotacion: "Primera negación del destino predeterminado.",
					},
					{
						id: "vm4",
						numero: 4,
						texto: "se hace camino al andar.",
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
						silabas: 8,
					},
					{
						id: "vm6",
						numero: 6,
						texto: "y al volver la vista atrás",
						silabas: 8,
						anotacion: "Mirada retrospectiva hacia el pasado.",
					},
					{
						id: "vm7",
						numero: 7,
						texto: "se ve la senda que nunca",
						silabas: 8,
					},
					{
						id: "vm8",
						numero: 8,
						texto: "se ha de volver a pisar.",
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
						silabas: 8,
					},
					{
						id: "vm10",
						numero: 10,
						texto: "sino estelas en la mar.",
						silabas: 8,
						anotacion:
							"Metáfora final: las estelas en el mar desaparecen, como las huellas de nuestras vidas.",
					},
				],
			},
		],
	},
];
