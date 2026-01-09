import type { Poem } from "~/features/poems/domain/poem.types";

export const cueva: Poem = {
	id: "lorca-cueva",
	slug: "cueva",
	title: "Cueva",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo que describe al gitano cantando en la cueva, evocando países remotos mientras largos sollozos emergen y la cueva encalada tiembla en el oro.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Poema de la soleá'. La cueva es el espacio arquetípico del cante jondo gitano en Andalucía, especialmente en el Sacromonte granadino. El poema captura el momento mágico del cante: el gitano en la cueva evocando mundos lejanos con su voz entrecortada, mientras los contrastes de colores crean una atmósfera pictórica y sinestésica.",
		influences: [
			"Cante jondo",
			"Cultura gitana andaluza",
			"Cuevas del Sacromonte",
			"Simbolismo cromático",
			"Pintura expresionista",
		],
	},

	analysis: {
		themes: [
			"cante jondo",
			"evocación de lo lejano",
			"nostalgia gitana",
			"cueva como espacio sagrado del cante",
			"sinestesia de colores y sonidos",
			"misterio",
			"vibraciones del cante",
			"contraste cromático",
		],
		tone: "evocador, misterioso, sinestésico y pictórico",
		meter:
			"versos de arte menor con métrica irregular (pentasílabos y hexasílabos mayormente), ritmo entrecortado que refleja la voz quebrada del cantaor",
		rhymeScheme:
			"rima asonante en ó-o (sollozos, rojo, remotos, misteriosos, ojos, oro) que crea musicalidad lúgubre",
		generalSummary:
			"El poema describe la escena del cante jondo en una cueva. De ella salen largos sollozos. El gitano evoca países remotos, torres altas y hombres misteriosos. En su voz entrecortada van sus ojos. La cueva encalada tiembla en el oro. Los paréntesis marcan contrastes cromáticos: lo cárdeno (púrpura) sobre lo rojo, lo negro sobre lo rojo, lo blanco sobre lo rojo. La estructura alterna versos narrativos con anotaciones de color, creando efecto pictórico y sinestésico.",
		interpretation:
			"La cueva es el espacio sagrado, originario del cante jondo gitano. No es espacio neutro sino matriz sonora que amplifica y contiene el dolor. De ella 'salen' los sollozos, como si la cueva misma cantara, como si fuera útero del cante. El gitano evoca 'países remotos': el cante es evocación, memoria de lo perdido, de la India lejana, del nomadismo ancestral. Las 'torres altas y hombres misteriosos' son imágenes de tierras remotas, quizás orientales, que el gitano lleva en su memoria genética. La voz 'entrecortada' es característica esencial del cante jondo: no es voz lírica fluida sino voz quebrada, ronca, desgarrada. Y en esa voz quebrada 'van sus ojos': metáfora sorprendente que funde voz y mirada, canto y visión interior. Los ojos viajan en la voz hacia esas tierras evocadas. La cueva 'encalada' (blanca, pintada de cal como las cuevas gitanas del Sacromonte) 'tiembla': la cueva vibra, resuena, se estremece con el cante. Y tiembla 'en el oro': el oro puede ser la luz dorada de las lámparas, o metáfora del valor del cante (oro sonoro), o la tarde dorada. Los paréntesis cromáticos crean estructura paralela, letanía de colores superpuestos sobre el rojo. Lo cárdeno es el morado oscuro, color de contusión, de dolor físico. Lo negro es el luto, la muerte, la noche. Lo blanco es la cal de la cueva, la pureza, el sudario. Y todos se superponen sobre lo rojo: la sangre, la pasión, el dolor, el fuego gitano. Esta superposición cromática es como paleta de pintor, pero también sinestesia: los colores del cante, los colores del dolor. El poema crea así atmósfera pictórica expresionista: cueva vibrante, gitano evocador, sollozos que emergen, colores que se superponen. Es una estampa completa del cante jondo como arte total: espacial (cueva), sonoro (sollozos, voz entrecortada), visual (colores), emocional (evocación, misterio) y físico (vibración, temblor).",
	},

	rhetoricalFigures: [
		{
			id: "personificacion",
			contextualDescription:
				"La cueva 'tiembla', se anima, vibra con el cante como si fuera ser vivo que responde a la voz del gitano.",
			verseIds: ["v13"],
		},
		{
			id: "metafora",
			contextualDescription:
				"'En la voz entrecortada / van sus ojos': los ojos viajan en la voz, metáfora que funde mirada y canto, visión interior y expresión sonora.",
			verseIds: ["v9", "v10"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"Los contrastes cromáticos (cárdeno, negro, blanco sobre rojo) son sinestesia visual del cante, colores que representan sonidos y emociones del cante jondo.",
			verseIds: ["v3", "v4", "v11", "v12", "v15", "v16"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"La cueva simboliza matriz del cante, espacio sagrado gitano. Los colores simbolizan: rojo (sangre, pasión), cárdeno (contusión, dolor físico), negro (luto, muerte), blanco (cal, pureza, sudario). El oro simboliza luz sagrada o valor del cante.",
			verseIds: ["v1", "v4", "v12", "v14", "v16"],
		},
		{
			id: "hiperbole",
			contextualDescription:
				"'Largos sollozos' exagera la duración y profundidad del lamento flamenco que emerge de la cueva.",
			verseIds: ["v1", "v2"],
		},
		{
			id: "paralelismo",
			contextualDescription:
				"Los tres paréntesis tienen estructura paralela: '(Lo X / sobre lo rojo)', creando letanía cromática que estructura el poema.",
			verseIds: ["v3", "v4", "v11", "v12", "v15", "v16"],
		},
		{
			id: "metonimia",
			contextualDescription:
				"'Torres altas y hombres misteriosos' representan por metonimia los países remotos evocados, partes que evocan el todo de tierras lejanas.",
			verseIds: ["v7", "v8"],
		},
		{
			id: "encabalgamiento",
			contextualDescription:
				"La sintaxis fluye entre versos sin pausa: 'De la cueva salen / largos sollozos', 'En la voz entrecortada / van sus ojos', creando efecto de continuidad entrecortada.",
			verseIds: ["v1", "v2", "v9", "v10"],
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
					text: "De la cueva salen",
					syllables: 6,
					annotation:
						"La cueva como matriz del cante, espacio que produce y contiene el lamento flamenco. Los sollozos emergen de ella.",
				},
				{
					id: "v2",
					number: 2,
					text: "largos sollozos.",
					syllables: 5,
					annotation:
						"Sollozos prolongados, profundos, característicos del cante jondo. El adjetivo 'largos' enfatiza su duración y hondura.",
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
					text: "(Lo cárdeno",
					syllables: 4,
					annotation:
						"Primer contraste cromático. Lo cárdeno es púrpura oscuro, color de contusión, hematoma, dolor físico visible.",
				},
				{
					id: "v4",
					number: 4,
					text: "sobre lo rojo.)",
					syllables: 5,
					annotation:
						"Base cromática: lo rojo (sangre, pasión, fuego gitano). Sobre él se superponen otros colores del dolor.",
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
					text: "El gitano evoca",
					syllables: 6,
					annotation:
						"El cantaor como evocador, como médium que trae mundos lejanos a través de su voz. Evocar es hacer presente lo ausente.",
				},
				{
					id: "v6",
					number: 6,
					text: "países remotos.",
					syllables: 5,
					annotation:
						"Países lejanos: la India ancestral, las tierras del nomadismo gitano. La memoria genética que viaja en el cante.",
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
					text: "(Torres altas y hombres",
					syllables: 6,
					annotation:
						"Imágenes concretas de esos países remotos: arquitectura (torres altas, quizás minaretes, almenas orientales).",
				},
				{
					id: "v8",
					number: 8,
					text: "misteriosos.)",
					syllables: 4,
					annotation:
						"Los habitantes de esas tierras lejanas son misteriosos, envueltos en la niebla del tiempo y la memoria.",
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
					text: "En la voz entrecortada",
					syllables: 7,
					annotation:
						"La voz quebrada, ronca, desgarrada del cante jondo, característica esencial que la distingue del bel canto.",
				},
				{
					id: "v10",
					number: 10,
					text: "van sus ojos.",
					syllables: 4,
					annotation:
						"Metáfora extraordinaria: los ojos viajan dentro de la voz hacia esas tierras evocadas. Fusión de canto y visión interior.",
				},
			],
		},

		{
			id: "estrofa-6",
			number: 6,
			type: "pareado",
			verses: [
				{
					id: "v11",
					number: 11,
					text: "(Lo negro",
					syllables: 3,
					annotation:
						"Segundo contraste cromático. Lo negro: luto, muerte, noche, oscuridad del dolor más profundo.",
				},
				{
					id: "v12",
					number: 12,
					text: "sobre lo rojo.)",
					syllables: 5,
					annotation:
						"Segunda superposición sobre la base roja de la pasión y la sangre gitana.",
				},
			],
		},

		{
			id: "estrofa-7",
			number: 7,
			type: "pareado",
			verses: [
				{
					id: "v13",
					number: 13,
					text: "Y la cueva encalada",
					syllables: 7,
					annotation:
						"Cueva pintada de cal blanca, como las cuevas del Sacromonte granadino. La cueva como personaje que responde al cante.",
				},
				{
					id: "v14",
					number: 14,
					text: "tiembla en el oro.",
					syllables: 5,
					annotation:
						"La cueva vibra, resuena, se estremece con el cante. 'En el oro': luz dorada o metáfora del cante como oro sonoro.",
				},
			],
		},

		{
			id: "estrofa-8",
			number: 8,
			type: "pareado",
			verses: [
				{
					id: "v15",
					number: 15,
					text: "(Lo blanco",
					syllables: 3,
					annotation:
						"Tercer y último contraste cromático. Lo blanco: cal de la cueva, pureza, sudario, luz, muerte blanqueada.",
				},
				{
					id: "v16",
					number: 16,
					text: "sobre lo rojo.)",
					syllables: 5,
					annotation:
						"Tercera y última superposición. Cierre de la letanía cromática que estructura el poema como paleta de colores del dolor.",
				},
			],
		},
	],
};
