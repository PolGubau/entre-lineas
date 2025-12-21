import type { FiguraRetoricaDefinicion } from "~/features/poems/domain/poem.types";

/**
 * Catálogo global de figuras retóricas
 * Cada figura tiene una definición general reutilizable
 */
export const FIGURAS_RETORICAS_CATALOGO: FiguraRetoricaDefinicion[] = [
	{
		id: "metafora",
		name: "Metáfora",
		generalDefinition:
			"Identificación de un término real con uno imaginario con el que guarda semejanza.",
		example:
			'"Sus labios son pétalos" (los labios se identifican con pétalos por su suavidad)',
	},
	{
		id: "simil",
		name: "Símil o Comparación",
		generalDefinition:
			'Comparación explícita entre dos elementos usando "como", "cual", "semejante a".',
		example: '"Tus ojos son como el mar"',
	},
	{
		id: "personificacion",
		name: "Personificación",
		generalDefinition:
			"Atribuir cualidades humanas a seres inanimados o abstractos.",
		example: '"El viento susurra secretos"',
	},
	{
		id: "hiperbole",
		name: "Hipérbole",
		generalDefinition: "Exageración desmedida de la realidad para enfatizar.",
		example: '"Érase un hombre a una nariz pegado"',
	},
	{
		id: "anafora",
		name: "Anáfora",
		generalDefinition:
			"Repetición de una o varias palabras al principio de versos o frases.",
		example: '"Verde que te quiero verde. / Verde viento. Verdes ramas"',
	},
	{
		id: "aliteracion",
		name: "Aliteración",
		generalDefinition:
			"Repetición de sonidos consonánticos para crear musicalidad.",
		example: '"El ruido con que rueda la ronca tempestad"',
	},
	{
		id: "paradoja",
		name: "Paradoja",
		generalDefinition:
			"Unión de dos ideas aparentemente contradictorias que encierran una verdad.",
		example: '"Vivo sin vivir en mí"',
	},
	{
		id: "antitesis",
		name: "Antítesis",
		generalDefinition:
			"Contraposición de dos palabras o ideas de significado opuesto.",
		example: '"Es tan corto el amor y tan largo el olvido"',
	},
	{
		id: "sinestesia",
		name: "Sinestesia",
		generalDefinition:
			"Atribuir una sensación a un sentido que no le corresponde.",
		example: '"Colores chillones", "dulce melodía"',
	},
	{
		id: "metonimia",
		name: "Metonimia",
		generalDefinition:
			"Designar algo con el nombre de otra cosa con la que tiene relación.",
		example: '"Respeto las canas" (la vejez) o "Tomé tres copas" (vino)',
	},
	{
		id: "sinecdoque",
		name: "Sinécdoque",
		generalDefinition: "Designar la parte por el todo o viceversa.",
		example:
			'"Tiene veinte primaveras" (años) - "España ganó el mundial" (la selección)',
	},
	{
		id: "epifora",
		name: "Epífora",
		generalDefinition:
			"Repetición de una o varias palabras al final de versos o frases.",
		example: '"Y que yo me muero / y que tú me quieres / y que yo te quiero"',
	},
	{
		id: "alegoria",
		name: "Alegoría",
		generalDefinition:
			"Representación de una idea abstracta mediante formas concretas y simbólicas.",
		example:
			'"La caverna de Platón representa la ignorancia humana frente al conocimiento."',
	},
	{
		id: "apostrofe",
		name: "Apóstrofe",
		generalDefinition:
			"Invocación o llamada a alguien o algo, presente o ausente, real o imaginario.",
		example: '"¡Oh luna! ¿Dónde estás que no te veo?"',
	},
	{
		id: "hiperbaton",
		name: "Hipérbaton",
		generalDefinition:
			"Alteración del orden lógico de las palabras en la oración.",
		example: '"Del salón en el ángulo oscuro" (En el ángulo oscuro del salón)',
	},
	{
		id: "elipsis",
		name: "Elipsis",
		generalDefinition:
			"Omisión de palabras que se sobreentienden en el contexto.",
		example: '"Por una mirada, un mundo; por una sonrisa, un cielo" (daría)',
	},
	{
		id: "polisindeton",
		name: "Polisíndeton",
		generalDefinition:
			"Repetición innecesaria de conjunciones para dar lentitud y solemnidad.",
		example: '"Y ríe, y llora, y canta, y grita"',
	},
	{
		id: "asindeton",
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

export function getFigueras(): FiguraRetoricaDefinicion[] {
	return FIGURAS_RETORICAS_CATALOGO;
}
