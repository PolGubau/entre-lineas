import type { Poem } from "~/features/poems/domain/poem.types";

export const nocheSaeta: Poem = {
	id: "lorca-noche-saeta",
	slug: "noche-saeta",
	title: "Noche",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que describe la noche de la saeta como constelación de luces (cirio, candil, farol y luciérnaga), con ventanitas de oro que tiemblan y cruces superpuestas que se mecen en la aurora.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Gráfico de la petenera'. Describe la noche de Semana Santa, cuando las procesiones avanzan iluminadas por cirios, candiles, faroles. La 'constelación de la saeta' es imagen astronómica del cante: las saetas como estrellas vocales que brillan en la noche. Las ventanitas de oro son las ventanas iluminadas de las casas ante el paso de las procesiones. Las cruces superpuestas evocan la multiplicidad de cruces procesionales.",
		influences: [
			"Procesiones de Semana Santa",
			"Simbolismo lumínico",
			"Constelaciones místicas",
			"Arquitectura nocturna andaluza",
		],
	},

	analysis: {
		themes: ["religión", "noche"],
		tone: "luminoso, místico, delicado y etéreo",
		meter:
			"versos de arte menor con métrica muy irregular (trisílabos, pentasílabos, hexasílabos, octosílabos), ritmo oscilante como luz de velas",
		rhymeScheme:
			"rima asonante en é-a (luciérnaga, saeta, tiemblan, superpuestas) con estribillo que se repite",
		generalSummary:
			"Enumeración de luces: cirio, candil, farol y luciérnaga forman la constelación de la saeta. Ventanitas de oro tiemblan, y en la aurora se mecen cruces superpuestas. El estribillo 'Cirio, candil, / farol y luciérnaga' se repite al inicio y al final, creando estructura circular.",
		interpretation:
			"El poema es pintura lumínica de la noche de Semana Santa. La enumeración 'Cirio, candil, / farol y luciérnaga' va de lo litúrgico (cirio: vela gruesa de procesión) a lo doméstico (candil: lámpara de aceite andaluza), a lo urbano (farol: luz de calle) y a lo natural (luciérnaga: insecto luminoso). Esta gradación crea totalidad: todas las luces, sagradas y profanas, artificiales y naturales, participan de la noche sagrada. 'La constelación / de la saeta' es metáfora astronómica: las saetas forman una constelación, un conjunto de estrellas vocales que brillan en el firmamento nocturno. La saeta no es solo canto sino astro, luz que orienta. Las 'ventanitas de oro' (diminutivo tierno) son las ventanas iluminadas de las casas sevillanas ante el paso de las procesiones. 'Tiemblan': la luz de las velas o candiles hace temblar las sombras, pero también las ventanas mismas tiemblan de emoción, personificadas. 'Y en la aurora se mecen / cruces superpuestas': al llegar el alba, las cruces procesionales (llevadas en andas, mecidas por el vaivén de los costaleros) se superponen visualmente, creando imagen de multiplicidad, de bosque de cruces. El mecerse es movimiento suave, ondulante, casi hipnótico. La repetición final del estribillo cierra circularmente el poema, como si las luces siguieran ardiendo. Es poema de atmósfera, de pura visión nocturna, donde la saeta se hace visible como constelación luminosa.",
	},

	rhetoricalFigures: [
		{
			id: "metafora",
			contextualDescription:
				"'La constelación / de la saeta': las saetas forman una constelación, imagen astronómica del cante como conjunto de estrellas vocales.",
			verseIds: ["v3", "v4"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"'Ventanitas de oro / tiemblan': las ventanas tiemblan como si tuvieran emoción. 'Cruces... se mecen': las cruces tienen movimiento propio.",
			verseIds: ["v5", "v6", "v7", "v8"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"El cirio simboliza lo litúrgico, el candil lo doméstico andaluz, el farol lo urbano, la luciérnaga lo natural. Las cruces simbolizan la pasión de Cristo multiplicada. La aurora simboliza el límite entre noche sagrada y día.",
			verseIds: ["v1", "v2", "v7", "v8"],
		},
		{
			id: "epiteto",
			contextualDescription:
				"'Ventanitas de oro': el diminutivo 'ventanitas' es tierno, y 'de oro' indica la luz dorada que emana o refleja.",
			verseIds: ["v5"],
		},
		{
			id: "hiperbaton",
			contextualDescription:
				"'En la aurora se mecen / cruces superpuestas' invierte el orden natural (cruces superpuestas se mecen en la aurora) para enfatizar el momento (aurora).",
			verseIds: ["v7", "v8"],
		},
		{
			id: "anafora",
			contextualDescription:
				"El estribillo 'Cirio, candil, / farol y luciérnaga' se repite al inicio y al final, creando estructura circular.",
			verseIds: ["v1", "v2", "v9", "v10"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"'Ventanitas de oro' mezcla lo visual (oro, color) con lo arquitectónico (ventanas) con lo emocional (temblor).",
			verseIds: ["v5"],
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
					text: "Cirio, candil,",
					syllables: 5,
					annotation:
						"Cirio: vela gruesa litúrgica de las procesiones. Candil: lámpara de aceite andaluza, luz doméstica.",
				},
				{
					id: "v2",
					number: 2,
					text: "farol y luciérnaga.",
					syllables: 6,
					annotation:
						"Farol: luz urbana de calle. Luciérnaga: insecto luminoso natural. Gradación de lo sagrado a lo natural.",
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
					text: "La constelación",
					syllables: 5,
					annotation:
						"Metáfora astronómica: conjunto de estrellas. Las saetas forman una constelación vocal en el cielo nocturno.",
				},
				{
					id: "v4",
					number: 4,
					text: "de la saeta.",
					syllables: 4,
					annotation:
						"La saeta como estrella, como luz que orienta en la noche sagrada de Semana Santa.",
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
					text: "Ventanitas de oro",
					syllables: 6,
					annotation:
						"Diminutivo tierno: ventanas pequeñas, iluminadas, doradas por la luz de velas o candiles. Las ventanas de las casas ante el paso de la procesión.",
				},
				{
					id: "v6",
					number: 6,
					text: "tiemblan,",
					syllables: 2,
					annotation:
						"Personificación: las ventanas tiemblan de emoción, o sus luces tiemblan con el viento. Temblor sagrado.",
				},
				{
					id: "v7",
					number: 7,
					text: "y en la aurora se mecen",
					syllables: 7,
					annotation:
						"Aurora: límite entre noche sagrada y día. En ese momento las cruces se mecen, oscilan con el andar de los costaleros.",
				},
				{
					id: "v8",
					number: 8,
					text: "cruces superpuestas.",
					syllables: 5,
					annotation:
						"Múltiples cruces procesionales que se superponen visualmente, creando imagen de bosque de cruces, multiplicación de la pasión.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "pareado",
			verses: [
				{
					id: "v9",
					number: 9,
					text: "Cirio, candil,",
					syllables: 5,
					annotation:
						"Repetición exacta del estribillo inicial, creando estructura circular. Las luces siguen ardiendo.",
				},
				{
					id: "v10",
					number: 10,
					text: "farol y luciérnaga.",
					syllables: 6,
					annotation:
						"Cierre que repite la enumeración completa, sugiriendo que la noche de la saeta es eterna, circular.",
				},
			],
		},
	],
};
