import type { Poem } from "~/features/poems/domain/poem.types";

export const balconSaeta: Poem = {
	id: "lorca-balcon-saeta",
	slug: "balcon-saeta",
	title: "Balcón",
	author: "Federico García Lorca",
	authorSlug: "federico-garcia-lorca",
	shortDescription:
		"Poema del Poema del cante jondo sobre la Lola que canta saetas desde el balcón, rodeada por toreritos y el barberillo, entre albahaca y hierbabuena, aquella Lola que se miraba tanto en la alberca.",
	createdAt: new Date("2025-12-31"),
	updatedAt: new Date("2025-12-31"),

	context: {
		era: "Siglo XX",
		movement: "Generación del 27",
		originCountry: "España",
		publicationDate: new Date("1921-01-01"),
		socialContext:
			"Pertenece al 'Poema del cante jondo', sección 'Gráfico de la petenera'. La Lola es figura popular andaluza, mujer que canta saetas desde el balcón durante las procesiones. Los toreritos (jóvenes toreros o aficionados) la rodean admirándola. El barberillo (barbero joven) sigue el ritmo desde su puerta. La albahaca y la hierbabuena son plantas aromáticas típicas de balcones y patios andaluces. La alberca es estanque donde la Lola se miraba (vanidad, narcisismo). Es estampa costumbrista de Semana Santa andaluza.",
		influences: [
			"Cantaoras andaluzas",
			"Costumbrismo sevillano",
			"Narcisismo femenino",
			"Tradición del balcón como escenario",
			"Flora aromática andaluza",
		],
	},

	analysis: {
		themes: ["religión", "música"],
		tone: "costumbrista, admirativo, tierno y aromático",
		meter:
			"versos de arte menor muy cortos (tetrasílabos mayormente), ritmo rápido, alegre, casi de copla popular",
		rhymeScheme:
			"rima asonante en é-a (saetas, rodean, puerta, cabeza, hierbabuena, alberca) que crea musicalidad popular",
		generalSummary:
			"La Lola canta saetas. Los toreritos la rodean, y el barberillo desde su puerta sigue los ritmos con la cabeza. Entre la albahaca y la hierbabuena, la Lola canta saetas. La Lola aquella que se miraba tanto en la alberca. El poema repite 'la Lola canta / saetas' dos veces, creando estructura circular.",
		interpretation:
			"El poema es estampa de Semana Santa andaluza con protagonista femenina: la Lola. Es cantaora que desde su balcón (espacio femenino, frontera entre interior doméstico y exterior público) canta saetas durante el paso de la procesión. 'Los toreritos / la rodean': los jóvenes toreros o aficionados taurinos (los toreritos, diminutivo que indica juventud o cariño) forman corro admirativo en torno a su balcón. La Lola es objeto de deseo, de admiración masculina. 'Y el barberillo / desde su puerta': el barbero joven, desde el umbral de su barbería, también participa a distancia. 'Sigue los ritmos / con la cabeza': no se acerca al corro pero marca el compás moviendo la cabeza, participa rítmicamente aunque no corporalmente. Es forma discreta de admiración. 'Entre la albahaca / y la hierbabuena': el balcón de la Lola está decorado con estas plantas aromáticas típicas de Andalucía. La albahaca (hierba de olor dulce, asociada a lo amoroso) y la hierbabuena (menta, frescor) crean atmósfera sensorial. El cante surge entre aromas, sinestesia de oído y olfato. La repetición 'la Lola canta / saetas' es estribillo que marca el acto central: ella canta, es la creadora del sonido sagrado. 'La Lola aquella, / que se miraba / tanto en la alberca': añadido final que caracteriza a la Lola. Es aquella Lola conocida por su narcisismo, que pasaba tiempo mirándose en la alberca (estanque, espejo de agua). El detalle es tierno pero también revelador: la Lola es vanidosa, consciente de su belleza. El 'tanto' subraya la insistencia, casi la obsesión. Pero esta vanidad no es criticada sino que forma parte de su atractivo. Es Lola hermosa y consciente de serlo, que canta y es mirada, que se mira y es admirada. El poema crea escena completa: sonido (saetas), espacio (balcón, puerta), personajes (Lola, toreritos, barberillo), movimiento (rodear, seguir con cabeza), olor (albahaca, hierbabuena) y memoria (aquella que se miraba). Es miniatura perfecta del costumbrismo andaluz.",
	},

	rhetoricalFigures: [
		{
			id: "anafora",
			contextualDescription:
				"'La Lola / canta saetas' se repite dos veces, creando estribillo que centra la escena en el acto de cantar.",
			verseIds: ["v1", "v2", "v9", "v10"],
		},
		{
			id: "sinestesia",
			contextualDescription:
				"'Entre la albahaca / y la hierbabuena': el cante surge entre aromas, mezcla de sentidos (oído y olfato).",
			verseIds: ["v7", "v8"],
		},
		{
			id: "metonimia",
			contextualDescription:
				"'Sigue los ritmos / con la cabeza': la cabeza representa todo el cuerpo, el movimiento de asentir representa la participación completa.",
			verseIds: ["v5", "v6"],
		},
		{
			id: "epiteto",
			contextualDescription:
				"'La Lola aquella' usa demostrativo que evoca conocimiento compartido, familiaridad. 'Tanto' intensifica la acción de mirarse.",
			verseIds: ["v11", "v12", "v13"],
		},
		{
			id: "hiperbole",
			contextualDescription:
				"'Que se miraba / tanto en la alberca': exageración del narcisismo, insistencia en la vanidad que se hace característica definitoria.",
			verseIds: ["v12", "v13", "v14"],
		},
		{
			id: "simbolo",
			contextualDescription:
				"El balcón simboliza frontera entre lo privado y lo público, escenario femenino. La alberca simboliza narcisismo, espejo natural. La albahaca y hierbabuena simbolizan sensualidad aromática andaluza.",
			verseIds: ["v7", "v8", "v14"],
		},

		{
			id: "personificacion",
			contextualDescription:
				"La Lola es presentada como ser en acción constante: canta, se miraba. Los toreritos rodean como satélites. El barberillo participa con su cabeza animada.",
			verseIds: ["v1", "v2", "v3", "v5", "v6"],
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
					text: "La Lola",
					syllables: 3,
					annotation:
						"Presentación: la Lola, artículo + nombre propio crea familiaridad. Es la Lola conocida, la Lola emblemática.",
				},
				{
					id: "v2",
					number: 2,
					text: "canta saetas.",
					syllables: 4,
					annotation:
						"Acción central: cantar saetas, cantos religiosos de Semana Santa. La Lola es cantaora, creadora del sonido sagrado.",
				},
				{
					id: "v3",
					number: 3,
					text: "Los toreritos",
					syllables: 5,
					annotation:
						"Los admiradores: jóvenes toreros o aficionados taurinos. Diminutivo afectivo que indica juventud.",
				},
				{
					id: "v4",
					number: 4,
					text: "la rodean,",
					syllables: 4,
					annotation:
						"Acción: rodear es cercar, formar corro admirativo en torno al balcón de la Lola. Ella es centro.",
				},
				{
					id: "v5",
					number: 5,
					text: "y el barberillo",
					syllables: 5,
					annotation:
						"Otro admirador: el barbero joven. Diminutivo afectivo. Barbero es oficio popular, figura del barrio.",
				},
				{
					id: "v6",
					number: 6,
					text: "desde su puerta,",
					syllables: 5,
					annotation:
						"Desde el umbral de su barbería, a distancia. No se acerca al corro pero participa desde su espacio.",
				},
				{
					id: "v7",
					number: 7,
					text: "sigue los ritmos",
					syllables: 5,
					annotation:
						"Participación rítmica: sigue, acompaña mentalmente los ritmos de las saetas cantadas por la Lola.",
				},
				{
					id: "v8",
					number: 8,
					text: "con la cabeza.",
					syllables: 5,
					annotation:
						"Movimiento de asentir, de marcar el compás con la cabeza. Participación discreta pero evidente.",
				},
			],
		},

		{
			id: "estrofa-2",
			number: 2,
			type: "libre",
			verses: [
				{
					id: "v9",
					number: 9,
					text: "Entre la albahaca",
					syllables: 6,
					annotation:
						"Albahaca: hierba aromática de olor dulce, asociada al amor. Planta de balcón andaluz. El cante surge entre aromas.",
				},
				{
					id: "v10",
					number: 10,
					text: "y la hierbabuena,",
					syllables: 5,
					annotation:
						"Hierbabuena: menta, frescor aromático. Segunda planta del balcón. Sinestesia: oído (saeta) y olfato (hierbas).",
				},
				{
					id: "v11",
					number: 11,
					text: "la Lola canta",
					syllables: 5,
					annotation:
						"Repetición del estribillo: la Lola sigue cantando. Es acción central, constante, que enmarca todo.",
				},
				{
					id: "v12",
					number: 12,
					text: "saetas.",
					syllables: 3,
					annotation:
						"Reafirmación: canta saetas, cantos sagrados desde el balcón aromático.",
				},
			],
		},

		{
			id: "estrofa-3",
			number: 3,
			type: "libre",
			verses: [
				{
					id: "v13",
					number: 13,
					text: "La Lola aquella,",
					syllables: 5,
					annotation:
						"Demostrativo: 'aquella' señala conocimiento previo, memoria compartida. Es la Lola de la que se habla, la famosa.",
				},
				{
					id: "v14",
					number: 14,
					text: "que se miraba",
					syllables: 5,
					annotation:
						"Caracterización: era conocida por mirarse, por su narcisismo. Acción reiterada en pasado imperfecto (habitual).",
				},
				{
					id: "v15",
					number: 15,
					text: "tanto en la alberca.",
					syllables: 6,
					annotation:
						"'Tanto': adverbio que intensifica. Se miraba mucho, obsesivamente. Alberca: estanque, espejo de agua. Narcisismo de la Lola bella.",
				},
			],
		},
	],
};
