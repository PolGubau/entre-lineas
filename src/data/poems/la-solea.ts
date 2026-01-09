import type { Poem } from "~/features/poems/domain/poem.types";

export const laSolea: Poem = {
	id: "lorca-la-solea",
	slug: "la-solea",
	title: "La soleá",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que personifica la soleá como mujer enlutada que medita sobre la inmensidad del corazón, la fugacidad del dolor y la invasión del cielo por el balcón abierto.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Poema de la soleá'. La soleá es uno de los palos fundamentales del flamenco, considerado junto con la siguiriya el más profundo y trágico. Su nombre viene de 'soledad'. Lorca la personifica como mujer vestida de luto que encarna el dolor, la soledad, la pena andaluza.",
		influences: [
			"Cante jondo (soleá)",
			"Manuel de Falla",
			"Lírica popular andaluza",
			"Siguiriya gitana",
			"Simbolismo",
		],
	},

	analysis: {
		themes: [
			"soledad",
			"luto",
			"dolor",
			"inmensidad interior",
			"fugacidad del dolor expresado",
			"invasión de lo trascendente",
			"contraste micro-macro",
			"apertura al infinito",
		],
		tone: "solemne, meditativo, elegíaco y trascendente",
		meter:
			"versos de arte menor (octosílabos) típicos de la copla flamenca, con ritmo pausado y solemne",
		rhymeScheme:
			"rima asonante en é-o (negros, chiquito, inmenso, tierno, viento, abierto, cielo) que crea efecto de letanía",
		generalSummary:
			"El poema personifica la soleá como mujer vestida de mantos negros (luto). Ella piensa dos pensamientos filosóficos: que el mundo es chiquito pero el corazón es inmenso (paradoja del dolor que es más grande que el universo), y que el suspiro y el grito desaparecen en el viento (fugacidad de la expresión del dolor). Luego se narra una acción: dejó el balcón abierto y al alba todo el cielo desembocó por él (invasión de lo trascendente). El poema termina con el '¡Ay yayayayay!' típico del flamenco y repite el estribillo.",
		interpretation:
			"La soleá personificada es mujer de luto (los mantos negros simbolizan dolor, muerte, soledad). Su pensamiento revela la paradoja existencial del dolor: el mundo exterior es pequeño, insignificante, pero el corazón doliente es inmenso, contiene un universo de sufrimiento. Este es el sentimiento central del cante jondo: la desproporción entre lo que se ve y lo que se siente. Su segundo pensamiento es sobre la fugacidad de la expresión: el suspiro (dolor suave) y el grito (dolor extremo) se pierden en el viento, no dejan huella, no permanecen. Esta es la tragedia de la soleá: el dolor es inmenso pero incomunicable. El tercer momento es simbólico: dejó el balcón abierto (se abrió a lo exterior, a lo trascendente) y al alba (momento de renovación, frontera entre noche y día) el cielo entero desembocó por ese balcón. Esta imagen espectacular sugiere invasión de lo infinito, de lo cósmico, de lo divino. El balcón es frontera entre interior doméstico y exterior cósmico; al dejarlo abierto, la soleá permite que lo trascendente entre. Es imagen de apertura espiritual, de comunión con el universo. El 'Ay yayayayay' final es el quejío flamenco, la expresión primordial del dolor que atraviesa la soleá. El estribillo 'Vestida con mantos negros' se repite cuatro veces, creando estructura ritual, obsesiva, que subraya que la soleá es esencialmente dolor vestido de luto.",
	},

	rhetoricalFigures: [
		{
			id: "personificacion",
			contextualDescription:
				"La soleá (palo flamenco) se personifica como mujer vestida de luto que piensa, siente y actúa. Se convierte en sujeto consciente del dolor.",
			verseIds: ["v1", "v2", "v3"],
		},
		{
			id: "antitesis",
			contextualDescription:
				"Contraste entre 'el mundo es chiquito' y 'el corazón es inmenso': paradoja del dolor interior que supera al universo exterior.",
			verseIds: ["v2", "v3"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'Desembocó todo el cielo' por el balcón: el cielo se convierte en río que desemboca, imagen de invasión de lo infinito en lo finito.",
			verseIds: ["v11"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"Los mantos negros simbolizan luto, dolor, soledad, muerte. El balcón simboliza frontera entre interior y exterior, entre lo doméstico y lo cósmico. El alba simboliza renovación, transición. El cielo simboliza lo trascendente, lo infinito.",
			verseIds: ["v1", "v9", "v10", "v11"],
		},
		{
			id: "hiperbole",
			contextualDescription:
				"'El corazón es inmenso' y 'todo el cielo desembocó' exageran para expresar la magnitud del dolor y de la experiencia trascendente.",
			verseIds: ["v3", "v11"],
		},
		{
			id: "epifora",
			contextualDescription:
				"Repetición del verso 'Vestida con mantos negros' como estribillo que aparece cuatro veces, creando estructura ritual y obsesiva.",
			verseIds: ["v1", "v4", "v8", "v13"],
		},
		{
			id: "paralelismo",
			contextualDescription:
				"Las dos primeras estrofas tienen estructura paralela: descripción física + pensamiento filosófico + estribillo.",
			verseIds: ["v1", "v2", "v3", "v5", "v6", "v7"],
		},
		{
			id: "metonimia",
			contextualDescription:
				"'El suspiro tierno y el grito' representan el dolor suave y el dolor extremo, toda la gama de expresiones del sufrimiento.",
			verseIds: ["v5", "v6"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"El cielo que 'desemboca' mezcla lo visual (cielo) con lo fluido (desembocar, verbo de líquidos), creando imagen sensorial compleja.",
			verseIds: ["v11"],
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
					text: "Vestida con mantos negros",
					syllables: 8,
					annotation:
						"Personificación de la soleá como mujer de luto. Los mantos negros simbolizan dolor, muerte, soledad.",
				},
				{
					id: "v2",
					number: 2,
					text: "piensa que el mundo es chiquito",
					syllables: 8,
					annotation:
						"Primer pensamiento filosófico: el mundo exterior es pequeño, insignificante ante el dolor.",
				},
				{
					id: "v3",
					number: 3,
					text: "y el corazón es inmenso.",
					syllables: 8,
					annotation:
						"Antítesis: el corazón doliente contiene un universo de sufrimiento, más grande que el mundo visible.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "verso aislado",
			verses: [
				{
					id: "v4",
					number: 4,
					text: "Vestida con mantos negros.",
					syllables: 8,
					annotation:
						"Primera repetición del estribillo, marcando estructura ritual.",
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
					text: "Piensa que el suspiro tierno",
					syllables: 8,
					annotation:
						"Segundo pensamiento: sobre la fugacidad de la expresión del dolor. El suspiro representa dolor suave.",
				},
				{
					id: "v6",
					number: 6,
					text: "y el grito, desaparecen",
					syllables: 8,
					annotation:
						"El grito representa dolor extremo. Ambos (suspiro y grito) se pierden.",
				},
				{
					id: "v7",
					number: 7,
					text: "en la corriente del viento.",
					syllables: 8,
					annotation:
						"Metáfora: el viento es corriente que arrastra y borra la expresión del dolor. Nada permanece.",
				},
			],
		},

		{
			id: "estrofa-4",
			number: 4,
			type: "verso aislado",
			verses: [
				{
					id: "v8",
					number: 8,
					text: "Vestida con mantos negros.",
					syllables: 8,
					annotation: "Segunda repetición del estribillo.",
				},
			],
		},

		{
			id: "estrofa-5",
			number: 5,
			type: "libre",
			verses: [
				{
					id: "v9",
					number: 9,
					text: "Se dejó el balcón abierto",
					syllables: 8,
					annotation:
						"Acción simbólica: abrir el balcón es abrirse a lo exterior, a lo trascendente, a lo infinito.",
				},
				{
					id: "v10",
					number: 10,
					text: "y al alba por el balcón",
					syllables: 8,
					annotation:
						"Al alba: momento liminal entre noche y día, momento de renovación, transición mágica.",
				},
				{
					id: "v11",
					number: 11,
					text: "desembocó todo el cielo.",
					syllables: 8,
					annotation:
						"Metáfora espectacular: el cielo como río que desemboca por el balcón. Invasión de lo infinito en lo finito.",
				},
			],
		},

		{
			id: "estrofa-6",
			number: 6,
			type: "pareado",
			verses: [
				{
					id: "v12",
					number: 12,
					text: "¡Ay yayayayay,",
					syllables: 5,
					annotation:
						"Quejío flamenco, expresión primordial del dolor, el '¡Ay!' del cante jondo que atraviesa la soleá.",
				},
				{
					id: "v13",
					number: 13,
					text: "que vestida con mantos negros!",
					syllables: 9,
					annotation:
						"Tercera y última repetición del estribillo, precedida por el quejío. Cierre enfático con exclamación.",
				},
			],
		},
	],
};
