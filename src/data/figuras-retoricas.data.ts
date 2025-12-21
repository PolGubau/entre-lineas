import type { FiguraRetoricaDefinicion } from "~/features/poems/domain/poem.types";

/**
 * Catálogo global de figuras retóricas
 * Cada figura tiene una definición general reutilizable
 */
export const FIGURAS_RETORICAS_CATALOGO: FiguraRetoricaDefinicion[] = [
	{
		id: "metafora",
		type: "metafora",
		name: "Metáfora",
		generalDefinition:
			"Identificación de un término real con uno imaginario con el que guarda semejanza.",
		example:
			'"Sus labios son pétalos" (los labios se identifican con pétalos por su suavidad)',
	},
	{
		id: "simil",
		type: "simil",
		name: "Símil o Comparación",
		generalDefinition:
			'Comparación explícita entre dos elementos usando "como", "cual", "semejante a".',
		example: '"Tus ojos son como el mar"',
	},
	{
		id: "personificacion",
		type: "personificacion",
		name: "Personificación",
		generalDefinition:
			"Atribuir cualidades humanas a seres inanimados o abstractos.",
		example: '"El viento susurra secretos"',
	},
	{
		id: "hiperbole",
		type: "hiperbole",
		name: "Hipérbole",
		generalDefinition: "Exageración desmedida de la realidad para enfatizar.",
		example: '"Érase un hombre a una nariz pegado"',
	},
	{
		id: "anafora",
		type: "anafora",
		name: "Anáfora",
		generalDefinition:
			"Repetición de una o varias palabras al principio de versos o frases.",
		example: '"Verde que te quiero verde. / Verde viento. Verdes ramas"',
	},
	{
		id: "aliteracion",
		type: "aliteracion",
		name: "Aliteración",
		generalDefinition:
			"Repetición de sonidos consonánticos para crear musicalidad.",
		example: '"El ruido con que rueda la ronca tempestad"',
	},
	{
		id: "paradoja",
		type: "paradoja",
		name: "Paradoja",
		generalDefinition:
			"Unión de dos ideas aparentemente contradictorias que encierran una verdad.",
		example: '"Vivo sin vivir en mí"',
	},
	{
		id: "antitesis",
		type: "antitesis",
		name: "Antítesis",
		generalDefinition:
			"Contraposición de dos palabras o ideas de significado opuesto.",
		example: '"Es tan corto el amor y tan largo el olvido"',
	},
	{
		id: "sinestesia",
		type: "sinestesia",
		name: "Sinestesia",
		generalDefinition:
			"Atribuir una sensación a un sentido que no le corresponde.",
		example: '"Colores chillones", "dulce melodía"',
	},
	{
		id: "metonimia",
		type: "metonimia",
		name: "Metonimia",
		generalDefinition:
			"Designar algo con el nombre de otra cosa con la que tiene relación.",
		example: '"Respeto las canas" (la vejez) o "Tomé tres copas" (vino)',
	},
	{
		id: "sinecdoque",
		type: "sinecdoque",
		name: "Sinécdoque",
		generalDefinition: "Designar la parte por el todo o viceversa.",
		example:
			'"Tiene veinte primaveras" (años) - "España ganó el mundial" (la selección)',
	},
	{
		id: "apostrofe",
		type: "apostrofe",
		name: "Apóstrofe",
		generalDefinition:
			"Invocación o llamada a alguien o algo, presente o ausente, real o imaginario.",
		example: '"¡Oh luna! ¿Dónde estás que no te veo?"',
	},
	{
		id: "hiperbaton",
		type: "hiperbaton",
		name: "Hipérbaton",
		generalDefinition:
			"Alteración del orden lógico de las palabras en la oración.",
		example: '"Del salón en el ángulo oscuro" (En el ángulo oscuro del salón)',
	},
	{
		id: "elipsis",
		type: "elipsis",
		name: "Elipsis",
		generalDefinition:
			"Omisión de palabras que se sobreentienden en el contexto.",
		example: '"Por una mirada, un mundo; por una sonrisa, un cielo" (daría)',
	},
	{
		id: "polisindeton",
		type: "polisindeton",
		name: "Polisíndeton",
		generalDefinition:
			"Repetición innecesaria de conjunciones para dar lentitud y solemnidad.",
		example: '"Y ríe, y llora, y canta, y grita"',
	},
	{
		id: "asindeton",
		type: "asindeton",
		name: "Asíndeton",
		generalDefinition: "Omisión de conjunciones para dar rapidez y dinamismo.",
		example: '"Acude, corre, vuela"',
	},
];

/**
 * Helper para buscar una figura por ID
 */
export function getFiguraById(
	id: string,
): FiguraRetoricaDefinicion | undefined {
	return FIGURAS_RETORICAS_CATALOGO.find((f) => f.id === id);
}

/**
 * Helper para obtener todas las figuras de un tipo
 */
export function getFigurasByType(type: string): FiguraRetoricaDefinicion[] {
	return FIGURAS_RETORICAS_CATALOGO.filter((f) => f.type === type);
}
