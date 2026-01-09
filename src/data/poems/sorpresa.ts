import type { Poem } from "~/features/poems/domain/poem.types";

export const sorpresa: Poem = {
	id: "lorca-sorpresa",
	slug: "sorpresa",
	title: "Sorpresa",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que narra el hallazgo de un muerto anónimo en la calle con un puñal en el pecho, mientras el farol tiembla como único testigo del crimen.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Seis caprichos'. Anticipa los temas del Romancero gitano: muerte violenta, puñaladas nocturnas, víctimas anónimas. En el mundo del cante jondo y la cultura andaluza, la muerte por navaja es recurrente: ajustes de cuentas, venganzas de honor, violencia súbita. La 'sorpresa' del título es doble: la del descubrimiento del cadáver y la del lector ante la brevedad y contundencia del relato.",
		influences: [
			"Cante jondo",
			"Romance tradicional español",
			"Lírica popular andaluza",
			"Cultura del honor y la venganza",
			"Romancero gitano (en gestación)",
		],
	},

	analysis: {
		themes: [
			"muerte anónima",
			"violencia urbana",
			"soledad",
			"indiferencia social",
			"puñal",
			"madrugada",
			"anonimato",
			"testigo mudo (farol)",
		],
		tone: "narrativo, sobrio, dramático y patético",
		meter:
			"versos de arte menor (hexasílabos y octosílabos) con ritmo de romance, tradicional en la poesía narrativa española",
		rhymeScheme:
			"rima asonante en á-e (calle, nadie, farol, aire, calle, nadie) típica del romance",
		generalSummary:
			"El poema narra el descubrimiento de un muerto en la calle con un puñal en el pecho. Tres veces se repite que 'no lo conocía nadie', subrayando el anonimato absoluto. El único testigo parece ser el farol, que tiembla (¿de horror? ¿de miedo?). Era madrugada. Nadie pudo asomarse a sus ojos abiertos al duro aire. El poema termina con una repetición enfática usando 'que' al inicio de tres versos, como si fuera un testimonio o relato oral.",
		interpretation:
			"El poema captura la muerte violenta y anónima en la ciudad. El muerto 'se quedó' (eufemismo que suaviza la brutalidad) en la calle, espacio público donde paradójicamente nadie lo conoce. El puñal en el pecho señala crimen pasional o venganza, pero la víctima es anónima: no tiene nombre, no tiene historia, no tiene dolientes. El farol que tiembla es el único elemento que parece reaccionar emocionalmente: personificación que convierte el objeto en testigo mudo del horror. La repetición de '¡Cómo temblaba el farol!' y '¡Cómo temblaba el farolito / de la calle!' enfatiza este temblor como respuesta emotiva. 'Era madrugada': hora liminal entre noche y día, momento de los crímenes, de la soledad absoluta. 'Nadie pudo asomarse a sus ojos / abiertos al duro aire': los ojos abiertos del muerto miran hacia arriba, pero nadie se asoma a ellos para reconocerlo, para cerrarlos, para llorar. El 'duro aire' es el aire de la indiferencia, de la ciudad hostil. Los últimos tres versos con 'que' repetido imitan el habla popular, como si fuera un testimonio: 'Que muerto se quedó... que con un puñal... y que no lo conocía nadie'. Es un poema sobre la soledad absoluta de la muerte urbana, la violencia cotidiana que no conmueve a nadie excepto al farol que tiembla.",
	},

	rhetoricalFigures: [
		{
			id: "personificacion",
			contextualDescription:
				"El farol tiembla, adquiriendo cualidad humana de miedo, horror o conmoción. Es el único testigo que parece reaccionar emocionalmente.",
			verseIds: ["v4", "v6"],
		},
		{
			id: "anafora",
			contextualDescription:
				"Repetición de 'No lo conocía nadie' al principio y 'y que no lo conocía nadie' al final, enfatizando el anonimato absoluto del muerto.",
			verseIds: ["v3", "v13"],
		},
		{
			id: "epifora",
			contextualDescription:
				"Repetición de 'en la calle' y 'de la calle' al final de varios versos, marcando el espacio público del abandono.",
			verseIds: ["v1", "v7", "v11"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'Ojos abiertos al duro aire': los ojos del muerto miran sin ver, expuestos a la intemperie física y moral de la indiferencia.",
			verseIds: ["v9", "v10"],
		},
		{
			id: "paralelismo",
			contextualDescription:
				"Los tres últimos versos con 'que' inicial crean estructura paralela que imita el testimonio oral, el relato popular del crimen.",
			verseIds: ["v11", "v12", "v13"],
		},
		{
			id: "hiperbaton",
			contextualDescription:
				"'Que muerto se quedó en la calle / que con un puñal en el pecho' altera el orden sintáctico normal para crear efecto de oralidad.",
			verseIds: ["v11", "v12"],
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
					text: "Muerto se quedó en la calle",
					syllables: 9,
					annotation:
						"'Se quedó' es eufemismo que suaviza la brutalidad. El muerto permanece, no se va, ocupa la calle.",
				},
				{
					id: "v2",
					number: 2,
					text: "con un puñal en el pecho.",
					syllables: 8,
					annotation:
						"El puñal señala crimen pasional, venganza, muerte violenta típica del mundo andaluz.",
				},
				{
					id: "v3",
					number: 3,
					text: "No lo conocía nadie.",
					syllables: 8,
					annotation:
						"Primera afirmación del anonimato absoluto. El muerto es nadie, no tiene identidad social.",
				},
				{
					id: "v4",
					number: 4,
					text: "¡Cómo temblaba el farol!",
					syllables: 8,
					annotation:
						"Exclamación que personifica al farol. Su temblor es reacción emocional, horror, miedo o compasión.",
				},
				{
					id: "v5",
					number: 5,
					text: "Madre.",
					syllables: 2,
					annotation:
						"Invocación breve, interjección que expresa horror, súplica. Puede ser voz del narrador o eco popular.",
				},
				{
					id: "v6",
					number: 6,
					text: "¡Cómo temblaba el farolito",
					syllables: 9,
					annotation:
						"Repetición con diminutivo afectivo. El 'farolito' se humaniza, se acerca, se vuelve testigo cercano.",
				},
				{
					id: "v7",
					number: 7,
					text: "de la calle!",
					syllables: 4,
					annotation:
						"El farol pertenece a la calle, es su único habitante fiel, testigo de lo que ocurre en la noche.",
				},
				{
					id: "v8",
					number: 8,
					text: "Era madrugada. Nadie",
					syllables: 8,
					annotation:
						"Madrugada: hora liminal, de los crímenes, de la soledad absoluta. 'Nadie' enfatiza el abandono.",
				},
				{
					id: "v9",
					number: 9,
					text: "pudo asomarse a sus ojos",
					syllables: 8,
					annotation:
						"Asomarse a los ojos: mirar, reconocer, identificar, llorar. Nadie cumplió estos gestos humanos.",
				},
				{
					id: "v10",
					number: 10,
					text: "abiertos al duro aire.",
					syllables: 8,
					annotation:
						"Los ojos abiertos miran sin ver. El 'duro aire' es el aire hostil, indiferente, de la ciudad sin compasión.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "libre",
			verses: [
				{
					id: "v11",
					number: 11,
					text: "Que muerto se quedó en la calle",
					syllables: 9,
					annotation:
						"Repetición enfática con 'que' inicial, imitando testimonio oral, habla popular que cuenta el crimen.",
				},
				{
					id: "v12",
					number: 12,
					text: "que con un puñal en el pecho",
					syllables: 8,
					annotation:
						"Segunda repetición con 'que', continuando el relato en estilo de testimonio.",
				},
				{
					id: "v13",
					number: 13,
					text: "y que no lo conocía nadie.",
					syllables: 9,
					annotation:
						"Tercera y última afirmación del anonimato. El 'y que' final cierra el testimonio con la certeza del abandono absoluto.",
				},
			],
		},
	],
};
