import type { FiguraRetoricaDefinicion } from "~/features/poems/domain/poem.types";

/**
 * Catálogo global de figuras retóricas
 * Cada figura tiene una definición general reutilizable
 */
export const FIGURAS_RETORICAS_CATALOGO: FiguraRetoricaDefinicion[] = [
	{
		id: "metafora",
		tipo: "metafora",
		nombre: "Metáfora",
		definicionGeneral:
			"Identificación de un término real con uno imaginario con el que guarda semejanza.",
		ejemplo:
			'"Sus labios son pétalos" (los labios se identifican con pétalos por su suavidad)',
	},
	{
		id: "simil",
		tipo: "simil",
		nombre: "Símil o Comparación",
		definicionGeneral:
			'Comparación explícita entre dos elementos usando "como", "cual", "semejante a".',
		ejemplo: '"Tus ojos son como el mar"',
	},
	{
		id: "personificacion",
		tipo: "personificacion",
		nombre: "Personificación",
		definicionGeneral:
			"Atribuir cualidades humanas a seres inanimados o abstractos.",
		ejemplo: '"El viento susurra secretos"',
	},
	{
		id: "hiperbole",
		tipo: "hiperbole",
		nombre: "Hipérbole",
		definicionGeneral: "Exageración desmedida de la realidad para enfatizar.",
		ejemplo: '"Érase un hombre a una nariz pegado"',
	},
	{
		id: "anafora",
		tipo: "anafora",
		nombre: "Anáfora",
		definicionGeneral:
			"Repetición de una o varias palabras al principio de versos o frases.",
		ejemplo: '"Verde que te quiero verde. / Verde viento. Verdes ramas"',
	},
	{
		id: "aliteracion",
		tipo: "aliteracion",
		nombre: "Aliteración",
		definicionGeneral:
			"Repetición de sonidos consonánticos para crear musicalidad.",
		ejemplo: '"El ruido con que rueda la ronca tempestad"',
	},
	{
		id: "paradoja",
		tipo: "paradoja",
		nombre: "Paradoja",
		definicionGeneral:
			"Unión de dos ideas aparentemente contradictorias que encierran una verdad.",
		ejemplo: '"Vivo sin vivir en mí"',
	},
	{
		id: "antitesis",
		tipo: "antitesis",
		nombre: "Antítesis",
		definicionGeneral:
			"Contraposición de dos palabras o ideas de significado opuesto.",
		ejemplo: '"Es tan corto el amor y tan largo el olvido"',
	},
	{
		id: "sinestesia",
		tipo: "sinestesia",
		nombre: "Sinestesia",
		definicionGeneral:
			"Atribuir una sensación a un sentido que no le corresponde.",
		ejemplo: '"Colores chillones", "dulce melodía"',
	},
	{
		id: "metonimia",
		tipo: "metonimia",
		nombre: "Metonimia",
		definicionGeneral:
			"Designar algo con el nombre de otra cosa con la que tiene relación.",
		ejemplo: '"Respeto las canas" (la vejez) o "Tomé tres copas" (vino)',
	},
	{
		id: "sinecdoque",
		tipo: "sinecdoque",
		nombre: "Sinécdoque",
		definicionGeneral: "Designar la parte por el todo o viceversa.",
		ejemplo:
			'"Tiene veinte primaveras" (años) - "España ganó el mundial" (la selección)',
	},
	{
		id: "apostrofe",
		tipo: "apostrofe",
		nombre: "Apóstrofe",
		definicionGeneral:
			"Invocación o llamada a alguien o algo, presente o ausente, real o imaginario.",
		ejemplo: '"¡Oh luna! ¿Dónde estás que no te veo?"',
	},
	{
		id: "hiperbaton",
		tipo: "hiperbaton",
		nombre: "Hipérbaton",
		definicionGeneral:
			"Alteración del orden lógico de las palabras en la oración.",
		ejemplo: '"Del salón en el ángulo oscuro" (En el ángulo oscuro del salón)',
	},
	{
		id: "elipsis",
		tipo: "elipsis",
		nombre: "Elipsis",
		definicionGeneral:
			"Omisión de palabras que se sobreentienden en el contexto.",
		ejemplo: '"Por una mirada, un mundo; por una sonrisa, un cielo" (daría)',
	},
	{
		id: "polisindeton",
		tipo: "polisindeton",
		nombre: "Polisíndeton",
		definicionGeneral:
			"Repetición innecesaria de conjunciones para dar lentitud y solemnidad.",
		ejemplo: '"Y ríe, y llora, y canta, y grita"',
	},
	{
		id: "asindeton",
		tipo: "asindeton",
		nombre: "Asíndeton",
		definicionGeneral: "Omisión de conjunciones para dar rapidez y dinamismo.",
		ejemplo: '"Acude, corre, vuela"',
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
export function getFigurasByTipo(tipo: string): FiguraRetoricaDefinicion[] {
	return FIGURAS_RETORICAS_CATALOGO.filter((f) => f.tipo === tipo);
}
