import type { Poem } from "~/features/poems/domain/poem.types";

export const ay: Poem = {
	id: "lorca-ay",
	slug: "ay",
	title: "¡Ay!",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que explora el grito como expresión del dolor absoluto, dejando una sombra de ciprés mientras el mundo se rompe y el sujeto suplica que lo dejen llorar.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo'. El '¡Ay!' es la expresión fundamental del cante jondo, el quejío que atraviesa siguiriyas, soleares y saetas. Es grito primordial de dolor que no necesita palabras. Lorca lo convierte en poema autónomo, explorando su esencia: dolor puro, desgarrado, que deja huella en el aire.",
		influences: [
			"Cante jondo (el quejío)",
			"Lírica popular andaluza",
			"Siguiriya gitana",
			"Manuel de Falla (teoría del cante jondo)",
			"Expresionismo",
		],
	},

	analysis: {
		themes: [
			"dolor absoluto",
			"grito primordial",
			"ruptura del mundo",
			"silencio después del grito",
			"soledad",
			"súplica de aislamiento",
			"llanto",
			"muerte (ciprés)",
		],
		tone: "desgarrado, elegíaco, suplicante y desesperado",
		meter:
			"versos de arte mayor y menor mezclados (endecasílabos, octosílabos, tetrasílabos) con ritmo que alterna entre la descripción y la súplica",
		rhymeScheme:
			"rima asonante irregular en é (ciprés, silencio, hogueras) con el estribillo que rompe el esquema",
		generalSummary:
			"El poema describe las consecuencias del grito (¡Ay!): deja una sombra de ciprés en el viento (imagen de muerte). Entre las tres estrofas descriptivas se intercala un estribillo suplicante que se repite tres veces: 'Dejadme en este campo / llorando', con una variación final más insistente. El mundo se ha roto, solo queda silencio. El horizonte sin luz está mordido de hogueras (destrucción, violencia).",
		interpretation:
			"El poema explora el '¡Ay!' del cante jondo como grito que trasciende lo humano. El grito no es sonido que desaparece sino que 'deja una sombra de ciprés' (árbol de cementerio, muerte) en el viento: el dolor permanece, contamina el aire, se hace visible como ausencia. 'Todo se ha roto en el mundo': el grito ha fracturado la realidad, después de él solo existe el silencio (silencio mortal, no paz). El estribillo 'Dejadme en este campo / llorando' expresa el deseo de aislamiento del doliente: quiere quedarse solo con su llanto, rechaza el consuelo. La tercera repetición añade 'Ya os he dicho' (impaciencia, insistencia desesperada). El 'horizonte sin luz' mordido de hogueras sugiere un paisaje apocalíptico: no hay esperanza (luz) sino destrucción (fuego). El poema captura el momento después del grito, cuando el mundo queda devastado y el sujeto solo quiere la soledad de su dolor. Es una meditación sobre el cante jondo como experiencia de ruptura total.",
	},

	rhetoricalFigures: [
		{
			id: "metafora",
			contextualDescription:
				"'El grito deja en el viento / una sombra de ciprés': el grito se materializa como sombra (ausencia visible) del ciprés (árbol de muerte). El dolor se hace tangible.",
			verseIds: ["v1", "v2"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"El ciprés simboliza muerte, cementerio, luto. El 'campo' puede ser tanto campo abierto como camposanto. Las hogueras simbolizan destrucción, violencia, infierno.",
			verseIds: ["v2", "v3", "v11"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"El horizonte está 'mordido' de hogueras, como si fuera cuerpo que puede ser herido, devorado por el fuego.",
			verseIds: ["v11"],
		},
		{
			id: "hiperbole",
			contextualDescription:
				"'Todo se ha roto en el mundo': exageración que expresa la magnitud del dolor. El grito ha fracturado toda la realidad.",
			verseIds: ["v5"],
		},
		{
			id: "paradoja",
			contextualDescription:
				"Después del grito (sonido extremo) solo queda 'el silencio'. El ruido máximo conduce al silencio absoluto.",
			verseIds: ["v6"],
		},
		{
			id: "anafora",
			contextualDescription:
				"Repetición del estribillo '(Dejadme en este campo / llorando)' tres veces, con variación en la tercera, creando estructura ritual, obsesiva.",
			verseIds: ["v3", "v4", "v7", "v8", "v12", "v13", "v14"],
		},
		{
			id: "apostrofe",
			contextualDescription:
				"'Dejadme' y 'Ya os he dicho' son invocaciones directas a un 'vosotros' que intenta consolar o acompañar, pero cuya presencia el doliente rechaza.",
			verseIds: ["v3", "v12"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"El grito (auditivo) deja una 'sombra' (visual) de ciprés. Lo sonoro se hace visible, lo temporal (grito) se vuelve espacial (sombra).",
			verseIds: ["v1", "v2"],
		},
		{
			id: "elipsis",
			contextualDescription:
				"Los paréntesis del estribillo crean elipsis visuales y rítmicas, como si la súplica fuera un aparte, un susurro dentro del grito mayor del poema.",
			verseIds: ["v3", "v4", "v7", "v8", "v12", "v13", "v14"],
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
					text: "El grito deja en el viento",
					syllables: 9,
					annotation:
						"El grito no desaparece sino que 'deja' huella. Es presencia permanente, trauma que contamina el aire.",
				},
				{
					id: "v2",
					number: 2,
					text: "una sombra de ciprés.",
					syllables: 8,
					annotation:
						"Metáfora compleja: la sombra (ausencia que se ve) del ciprés (árbol de muerte). El grito es sombra mortuoria.",
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
					text: "(Dejadme en este campo",
					syllables: 8,
					annotation:
						"Primera aparición del estribillo. 'Campo' puede ser campo abierto o camposanto (cementerio). Ambigüedad intencional.",
				},
				{
					id: "v4",
					number: 4,
					text: "llorando.)",
					syllables: 3,
					annotation:
						"El gerundio expresa duración: quiere permanecer en el llanto, no ser consolado.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "pareado",
			verses: [
				{
					id: "v5",
					number: 5,
					text: "Todo se ha roto en el mundo.",
					syllables: 9,
					annotation:
						"Hipérbole: el dolor ha fracturado toda la realidad. Después del grito, el mundo es ruina.",
				},
				{
					id: "v6",
					number: 6,
					text: "No queda más que el silencio.",
					syllables: 9,
					annotation:
						"Paradoja: tras el grito máximo, silencio absoluto. Es silencio de muerte, no de paz.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "pareado",
			verses: [
				{
					id: "v7",
					number: 7,
					text: "(Dejadme en este campo",
					syllables: 8,
					annotation:
						"Segunda repetición del estribillo, idéntica a la primera.",
				},
				{
					id: "v8",
					number: 8,
					text: "llorando.)",
					syllables: 3,
				},
			],
		},

		{
			id: "estrofa-5",
			number: 5,
			type: "pareado",
			verses: [
				{
					id: "v9",
					number: 9,
					text: "El horizonte sin luz",
					syllables: 7,
					annotation:
						"Horizonte sin luz: no hay esperanza, no hay futuro, solo oscuridad.",
				},
				{
					id: "v10",
					number: 10,
					text: "está mordido de hogueras.",
					syllables: 9,
					annotation:
						"Personificación: el horizonte es cuerpo mordido (herido, devorado) por hogueras. Paisaje apocalíptico.",
				},
			],
		},

		{
			id: "estrofa-6",
			number: 6,
			type: "libre",
			verses: [
				{
					id: "v11",
					number: 11,
					text: "(Ya os he dicho que me dejéis",
					syllables: 9,
					annotation:
						"Tercera variación: añade 'Ya os he dicho', expresando impaciencia, desesperación, insistencia ante quienes no entienden.",
				},
				{
					id: "v12",
					number: 12,
					text: "en este campo",
					syllables: 5,
				},
				{
					id: "v13",
					number: 13,
					text: "llorando.)",
					syllables: 3,
					annotation:
						"Cierre definitivo: el doliente exige la soledad de su llanto. No hay consuelo posible.",
				},
			],
		},
	],
};
