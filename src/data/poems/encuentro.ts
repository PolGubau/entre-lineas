import type { Poem } from "~/features/poems/domain/poem.types";

export const encuentro: Poem = {
	id: "lorca-encuentro",
	slug: "encuentro",
	title: "Encuentro",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo sobre dos personas que no pueden encontrarse: una lleva las heridas de los clavos (Cristo) y la otra debe seguir su camino sin mirar atrás.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Poema de la soleá'. El poema presenta un encuentro imposible entre dos seres marcados por el dolor: uno que lleva las heridas de Cristo (los agujeros de los clavos en las manos y se desangra), y otro que ha amado tanto que tampoco puede encontrarse. Es diálogo dramático donde el sufrimiento hace imposible la conexión humana. San Cayetano es santo de la providencia y del trabajo.",
		influences: [
			"Cante jondo",
			"Pasión de Cristo",
			"Religiosidad popular andaluza",
			"Simbolismo cristiano",
			"Teatro dramático",
		],
	},

	analysis: {
		themes: [
			"imposibilidad del encuentro",
			"dolor compartido pero incomunicable",
			"heridas de Cristo (estigmas)",
			"amor imposible",
			"separación inevitable",
			"desangrado físico y emocional",
			"resignación dolorosa",
			"destino trágico",
		],
		tone: "dramático, doloroso, resignado y compasivo",
		meter:
			"versos de arte menor con métrica irregular (pentasílabos, hexasílabos, octosílabos), ritmo entrecortado que refleja el diálogo interrumpido por el dolor",
		rhymeScheme:
			"rima asonante en á-o (estamos, sabes, tanto, manos, clavos, desangrando, atrás, despacio, Cayetano) que crea efecto de letanía dolorosa",
		generalSummary:
			"Un ser con los estigmas de Cristo (los agujeros de los clavos en las manos, desangrándose) encuentra a otro ser que tampoco puede encontrarse con él. Le dice: 'Ni tú ni yo estamos / en disposición / de encontrarnos'. Explica que el otro sabe la razón de su imposibilidad, mientras que él ha querido tanto (a alguien) que tampoco puede. Le indica que siga su camino ('esa veredita'), le muestra sus heridas sangrantes, le pide que no mire atrás, que vaya despacio y rece a San Cayetano. Termina repitiendo que ninguno de los dos está en disposición de encontrarse.",
		interpretation:
			"Este poema es encuentro dramático entre dos imposibilidades. El hablante es figura crística: tiene 'los agujeros / de los clavos' en las manos, se está 'desangrando'. Es Cristo o alguien que lleva los estigmas del dolor extremo, de la pasión. Pero este Cristo no ofrece salvación sino que reconoce su propia imposibilidad. El otro personaje también está imposibilitado 'por lo que ya sabes': algo que no se explicita pero que es conocido por ambos, una razón misteriosa pero evidente. El hablante ha 'querido tanto' que eso mismo lo imposibilita: el amor extremo como herida que impide el encuentro. Es paradoja: el que más ama, menos puede encontrarse. Las heridas de Cristo son también heridas de amor. 'Sigue esa veredita' es despedida tierna: cada uno debe seguir su camino solitario. 'No mires nunca atrás' evoca a Orfeo y Eurídice, el mito de la mirada prohibida, pero también es consejo compasivo: mirar atrás sería ver al otro desangrándose, prolongar el dolor. 'Vete despacio' es ternura: no huyas, ve con dignidad, con pausa. 'Reza como yo / a San Cayetano' hermana a ambos en la oración, en la petición al santo de la providencia, como si la única compañía posible fuera la oración paralela. El estribillo 'que ni tú ni yo estamos / en disposición / de encontrarnos' se repite al inicio y al final, creando estructura circular, definitiva, sin escapatoria. 'En disposición' es frase técnica, casi legal, que subraya la imposibilidad objetiva, no caprichosa. Es como decir: no es que no queramos, es que no podemos, no estamos en condiciones. El poema es así diálogo de dos soledades que se reconocen pero no pueden fusionarse. El dolor, el amor extremo, las heridas, los hacen incapaces del encuentro. Es uno de los poemas más dramáticos y misteriosos de Lorca, con fuerte carga religiosa y existencial. La soleá (soledad) se hace aquí diálogo de dos soledades que se encuentran solo para reconocer que no pueden encontrarse.",
	},

	rhetoricalFigures: [
		{
			id: "simbolo",
			contextualDescription:
				"Los agujeros de los clavos simbolizan los estigmas de Cristo, el dolor extremo, el sacrificio. La veredita simboliza el camino individual que cada uno debe seguir. San Cayetano simboliza la fe como único consuelo.",
			verseIds: ["v7", "v8", "v9", "v14", "v15"],
		},
		{
			id: "metafora",
			contextualDescription:
				"El desangrarse es metáfora del dolor emocional que se derrama sin remedio, del amor que se vierte sin posibilidad de retorno.",
			verseIds: ["v10", "v11"],
		},
		{
			id: "apostrofe",
			contextualDescription:
				"Diálogo directo con el tú: '¿No ves cómo me estoy desangrando?', 'No mires nunca atrás', 'vete despacio', 'reza como yo'. Interpelación constante.",
			verseIds: ["v4", "v6", "v10", "v12", "v13", "v14"],
		},
		{
			id: "anafora",
			contextualDescription:
				"'Ni tú ni yo estamos' se repite al inicio y al final del poema, creando estructura circular obsesiva.",
			verseIds: ["v1", "v16"],
		},
		{
			id: "elipsis",
			contextualDescription:
				"'Tú... por lo que ya sabes' omite la explicación, deja en suspenso la razón de la imposibilidad del otro, crea misterio.",
			verseIds: ["v4"],
		},
		{
			id: "encabalgamiento",
			contextualDescription:
				"'¿No ves cómo me estoy / desangrando?' y 'tengo los agujeros / de los clavos' rompen la sintaxis entre versos, creando efecto de voz entrecortada.",
			verseIds: ["v8", "v9", "v10", "v11"],
		},
		{
			id: "paradoja",
			contextualDescription:
				"El que más ha querido ('¡Yo la he querido tanto!') es precisamente el que no puede encontrarse: el amor extremo como impedimento.",
			verseIds: ["v5"],
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
					text: "Ni tú ni yo estamos",
					syllables: 6,
					annotation:
						"Estribillo inicial que establece la imposibilidad mutua. Negación doble que hermana a ambos en la incapacidad.",
				},
				{
					id: "v2",
					number: 2,
					text: "en disposición",
					syllables: 5,
					annotation:
						"Frase técnica, casi legal: no están 'en disposición', en condiciones objetivas de encontrarse. No es capricho sino imposibilidad.",
				},
				{
					id: "v3",
					number: 3,
					text: "de encontrarnos.",
					syllables: 5,
					annotation:
						"El encuentro como aquello imposible, el verbo pronominal 'encontrarnos' subraya la mutualidad frustrada.",
				},
				{
					id: "v4",
					number: 4,
					text: "Tú... por lo que ya sabes.",
					syllables: 7,
					annotation:
						"Elipsis misteriosa: la razón del otro no se explicita pero es conocida por ambos. Los puntos suspensivos crean pausa dramática.",
				},
				{
					id: "v5",
					number: 5,
					text: "¡Yo la he querido tanto!",
					syllables: 7,
					annotation:
						"Exclamación que revela la razón del hablante: ha amado tanto (a alguien, probablemente mujer) que eso lo imposibilita. Paradoja del amor extremo.",
				},
				{
					id: "v6",
					number: 6,
					text: "Sigue esa veredita.",
					syllables: 6,
					annotation:
						"Despedida tierna: imperativo suave que indica el camino que el otro debe seguir solo. Diminutivo 'veredita' añade ternura.",
				},
				{
					id: "v7",
					number: 7,
					text: "En las manos,",
					syllables: 4,
					annotation:
						"Introducción de la imagen crística: las manos que mostrarán las heridas de los clavos.",
				},
				{
					id: "v8",
					number: 8,
					text: "tengo los agujeros",
					syllables: 6,
					annotation:
						"Los estigmas de Cristo: los agujeros dejados por los clavos de la crucifixión. Hablante se identifica con Cristo.",
				},
				{
					id: "v9",
					number: 9,
					text: "de los clavos.",
					syllables: 4,
					annotation:
						"Los clavos de la cruz. Imagen explícita de la Pasión. Los agujeros permanecen incluso después de quitar los clavos.",
				},
				{
					id: "v10",
					number: 10,
					text: "¿No ves cómo me estoy",
					syllables: 6,
					annotation:
						"Pregunta retórica que muestra la herida. 'No ves' interpela al otro para que contemple el dolor visible.",
				},
				{
					id: "v11",
					number: 11,
					text: "desangrando?",
					syllables: 4,
					annotation:
						"Desangrarse es perder la sangre, la vida, sin remedio. Metáfora del dolor que se derrama continuamente.",
				},
				{
					id: "v12",
					number: 12,
					text: "No mires nunca atrás,",
					syllables: 6,
					annotation:
						"Imperativo negativo: prohíbe la mirada hacia atrás. Evoca mito de Orfeo. Mirar atrás sería prolongar el dolor, ver el desangrado.",
				},
				{
					id: "v13",
					number: 13,
					text: "vete despacio",
					syllables: 5,
					annotation:
						"Segundo imperativo, pero tierno: no huyas, vete con dignidad, con pausa. 'Despacio' es ternura, respeto por el dolor mutuo.",
				},
				{
					id: "v14",
					number: 14,
					text: "y reza como yo",
					syllables: 5,
					annotation:
						"Imperativo final: recomendación de la oración. 'Como yo': hermandad en la plegaria, compañía espiritual aunque no física.",
				},
				{
					id: "v15",
					number: 15,
					text: "a San Cayetano,",
					syllables: 5,
					annotation:
						"Santo de la providencia, del trabajo, muy venerado en Andalucía. La fe como único consuelo posible.",
				},
				{
					id: "v16",
					number: 16,
					text: "que ni tú ni yo estamos",
					syllables: 7,
					annotation:
						"Repetición exacta del estribillo inicial, creando estructura circular. 'Que' introduce causal: rezamos porque no podemos encontrarnos.",
				},
				{
					id: "v17",
					number: 17,
					text: "en disposición",
					syllables: 5,
					annotation:
						"Repetición de la frase técnica que establece la imposibilidad objetiva.",
				},
				{
					id: "v18",
					number: 18,
					text: "de encontrarnos.",
					syllables: 5,
					annotation:
						"Cierre definitivo: repetición del infinitivo frustrado 'encontrarnos', sin escapatoria, sin esperanza.",
				},
			],
		},
	],
};
