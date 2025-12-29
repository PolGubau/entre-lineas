import type { Poem } from "~/features/poems/domain/poem.types";

export const elSilencio: Poem = {
	id: "7",
	slug: "el-silencio",
	title: "El Silencio",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema meditativo del Poema del cante jondo donde el silencio se transforma en entidad física y sensorial, un paisaje ondulante que inclina las frentes hacia la tierra en reverencia primitiva.",
	createdAt: new Date("1921-01-01"),
	updatedAt: new Date("2025-01-01"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationYear: 1931,
		socialContext:
			"Parte del 'Poema del cante jondo', escrito en 1921 durante la preparación del Concurso de Cante Jondo de Granada. El silencio en el flamenco es tan expresivo como el sonido: las pausas, los silencios entre quejíos, la tensión contenida antes del grito. Lorca captura la dimensión mística y ancestral del silencio andaluz.",
		influences: [
			"Cante jondo",
			"Misticismo español",
			"Juan Ramón Jiménez",
			"Simbolismo francés",
			"Lírica tradicional andaluza",
			"Filosofía del silencio",
			"Música primitiva",
		],
	},

	analysis: {
		themes: [
			"silencio",
			"introspección",
			"contemplación",
			"paisaje interior",
			"reverencia",
			"naturaleza",
			"tiempo detenido",
			"profundidad emocional",
			"misterio",
		],
		tone: "contemplativo, místico y reverente",
		meter:
			"verso libre con predominio de heptasílabos y pentasílabos, creando un ritmo ondulante que mimetiza el silencio descrito",
		rhymeScheme:
			"sin rima regular, apoyándose en la repetición anafórica de 'silencio' y la asonancia suave en vocales abiertas",
		generalSummary:
			"El poema se dirige a un hijo (real o simbólico) para enseñarle a percibir el silencio no como ausencia, sino como presencia activa. El silencio lorquiano es ondulado, líquido, topográfico: un espacio donde resbalan valles y ecos, y que posee la gravedad suficiente para inclinar las frentes en gesto de humildad cósmica.",
		interpretation:
			"Lorca transforma el silencio en materia sensorial y geográfica. No es vacío, sino plenitud: un 'silencio ondulado' con textura de ola o montaña. Los 'valles y ecos' que resbalan dentro del silencio crean una paradoja: hay movimiento y resonancia dentro de la quietud. La inclinación de frentes hacia el suelo es gesto de reverencia primitiva, como si el silencio fuera una fuerza gravitatoria espiritual que obliga a la humildad. El poema funciona como iniciación: 'Oye, hijo mío' es un mandato pedagógico para aprender a escuchar lo inaudible, una lección de contemplación flamenca donde el silencio es tan elocuente como el cante.",
	},

	rhetoricalFigures: [
		{
			id: "apostrofe",
			contextualDescription:
				"El poema se abre con una invocación directa: 'Oye, hijo mío', creando intimidad pedagógica y tono de transmisión ancestral.",
			verseIds: ["7-v1"],
		},
		{
			id: "personificacion",
			contextualDescription:
				"El silencio adquiere cualidades físicas: es 'ondulado', tiene capacidad de contener valles y ecos, y ejerce fuerza gravitatoria sobre las frentes.",
			verseIds: ["7-v2", "7-v4", "7-v5"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'Silencio ondulado' convierte el silencio en paisaje líquido o geográfico, con ondas como las del mar o las colinas.",
			verseIds: ["7-v2"],
		},
		{
			id: "anafora",
			contextualDescription:
				"Repetición de 'un silencio' que funciona como martilleo contemplativo, insistencia para fijar la atención en el concepto.",
			verseIds: ["7-v3"],
		},
		{
			id: "paradoja",
			contextualDescription:
				"'Valles y ecos' que 'resbalan' dentro del silencio: hay sonoridad y movimiento dentro de la ausencia de sonido, contradicción que expresa la plenitud del vacío.",
			verseIds: ["7-v4"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"'Oye el silencio' mezcla lo auditivo (oír) con lo abstracto (silencio), y luego lo visual-táctil (ondulado), fusionando sentidos para crear experiencia total.",
			verseIds: ["7-v1", "7-v2"],
		},
		{
			id: "encabalgamiento",
			contextualDescription:
				"El verso fluye sin pausas bruscas, creando continuidad líquida que imita el silencio ondulante: 'un silencio, / donde resbalan...'",
			verseIds: ["7-v3", "7-v4"],
		},
		{
			id: "hiperbaton",
			contextualDescription:
				"El orden sintáctico se altera para crear ritmo contemplativo: 'y que inclina las frentes / hacia el suelo' invierte el orden lógico natural.",
			verseIds: ["7-v5", "7-v6"],
		},
		{
			id: "aliteracion",
			contextualDescription:
				"Repetición de sonidos sibilantes ('silencio', 'resbalan') que imitan el susurro, el deslizamiento suave, la cualidad acústica del silencio mismo.",
			verseIds: ["7-v1", "7-v2", "7-v3", "7-v4"],
		},
	],

	estrofas: [
		{
			id: "estrofa-1",
			number: 1,
			type: "libre",
			verses: [
				{
					id: "7-v1",
					number: 1,
					text: "Oye, hijo mío, el silencio.",
					syllables: 9,
					annotation:
						"Apertura apostrófica con tono pedagógico e íntimo. 'Oye' (imperativo) pide escuchar lo inaudible, paradoja fundacional del poema. 'Hijo mío' establece relación de transmisión generacional del conocimiento místico. El silencio se presenta como objeto de contemplación, no como ausencia.",
				},
				{
					id: "7-v2",
					number: 2,
					text: "Es un silencio ondulado,",
					syllables: 8,
					annotation:
						"Primera definición: el silencio tiene forma, textura, movimiento. 'Ondulado' evoca olas del mar, dunas del desierto, colinas andaluzas. No es plano ni vacío, sino dinámico y sensorial. La aliteración en 's' y 'l' crea susurro fónico.",
				},
				{
					id: "7-v3",
					number: 3,
					text: "un silencio,",
					syllables: 4,
					annotation:
						"Pausa enfática. Repetición anafórica que funciona como martilleo contemplativo. El verso corto aislado crea un silencio real en la lectura, mimetismo entre forma y contenido. Invita a detenerse, a meditar sobre la palabra 'silencio'.",
				},
				{
					id: "7-v4",
					number: 4,
					text: "donde resbalan valles y ecos",
					syllables: 8,
					annotation:
						"Paradoja central: dentro del silencio hay geografía ('valles') y sonoridad ('ecos'). 'Resbalan' sugiere movimiento líquido, deslizamiento suave. Los ecos son sonidos que se repiten en vacío, resonancias del pasado. El silencio contiene memoria acústica y paisaje interior.",
				},
				{
					id: "7-v5",
					number: 5,
					text: "y que inclina las frentes",
					syllables: 7,
					annotation:
						"El silencio ejerce fuerza física, gravitatoria o espiritual. 'Inclina' es verbo de reverencia: inclinarse ante lo sagrado, humillarse ante el misterio. 'Las frentes' (plural colectivo) implica efecto universal, no individual. El silencio tiene poder cósmico.",
				},
				{
					id: "7-v6",
					number: 6,
					text: "hacia el suelo.",
					syllables: 4,
					annotation:
						"Cierre descendente que completa el gesto de humildad. 'El suelo' es tierra, origen, tumba, realidad material. Las frentes se inclinan hacia abajo (no hacia el cielo), hacia lo terrenal y mortal. Gesto que recuerda oración musulmana, duelo, cansancio existencial. El punto final sella el silencio del poema.",
				},
			],
		},
	],
};
