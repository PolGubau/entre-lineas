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
		id: "simbolo",
		name: "Símbolo",
		generalDefinition:
			"Uso de un objeto, figura o elemento concreto para representar una idea abstracta o concepto más amplio.",
		example: '"La paloma es símbolo de la paz" - "La rosa simboliza el amor"',
	},
	{
		id: "simil",
		name: "Símil o Comparación",
		generalDefinition:
			'Comparación explícita entre dos elementos usando "como", "cual", "semejante a".',
		example:
			'"Tus ojos son como el mar" - "Cual queda el blanco lirio cuando pierde / su dulce vida"',
	},
	{
		id: "personificacion",
		name: "Personificación o Prosopopeya",
		generalDefinition:
			"Atribuir cualidades o acciones humanas a seres inanimados, animales o ideas abstractas.",
		example: '"El viento susurra secretos" - "La noche me oculta"',
	},
	{
		id: "hiperbole",
		name: "Hipérbole",
		generalDefinition:
			"Exageración desmedida de la realidad para enfatizar una idea o sentimiento.",
		example:
			'"Érase un hombre a una nariz pegado" - "Por tu amor me duele el aire, el corazón y el sombrero"',
	},
	{
		id: "anafora",
		name: "Anáfora",
		generalDefinition:
			"Repetición de una o varias palabras al principio de versos o frases sucesivas.",
		example:
			'"Verde que te quiero verde. / Verde viento. Verdes ramas." - "Aquí tengo una voz decidida, / aquí tengo una vida combatida y airada"',
	},
	{
		id: "aliteracion",
		name: "Aliteración",
		generalDefinition:
			"Repetición de sonidos consonánticos similares para crear efectos sonoros y musicalidad.",
		example:
			'"El ruido con que rueda la ronca tempestad" - "En el silencio solo se escuchaba / un susurro de abejas que sonaba"',
	},
	{
		id: "paradoja",
		name: "Paradoja",
		generalDefinition:
			"Unión de dos ideas aparentemente contradictorias que expresan una verdad profunda.",
		example:
			'"Vivo sin vivir en mí" - "Al avaro, las riquezas lo hacen más pobre"',
	},
	{
		id: "antitesis",
		name: "Antítesis o Contraste",
		generalDefinition:
			"Contraposición de dos palabras, frases o ideas de significado opuesto.",
		example:
			'"Es tan corto el amor y tan largo el olvido" - "Cuando quiero llorar no lloro, y a veces lloro sin querer"',
	},
	{
		id: "encabalgamiento",
		name: "Encabalgamiento",
		generalDefinition:
			"Desajuste entre pausa sintáctica y pausa métrica: la frase continúa en el verso siguiente.",
		example:
			'"...que a su lado / de sombra llenas" - "El campo / de olivos se abre y se cierra"',
	},
	{
		id: "oximoron",
		name: "Oxímoron",
		generalDefinition:
			"Combinación en una misma expresión de dos términos de significado opuesto que crean un nuevo sentido.",
		example:
			'"Un silencio ensordecedor" - "Música callada" - "Arco iris negro"',
	},
	{
		id: "sinestesia",
		name: "Sinestesia",
		generalDefinition:
			"Atribuir una sensación a un sentido que no le corresponde, mezclando impresiones sensoriales.",
		example: '"Colores chillones" - "Dulce melodía" - "Áspero ruido"',
	},
	{
		id: "metonimia",
		name: "Metonimia",
		generalDefinition:
			"Designar una cosa con el nombre de otra con la que tiene relación de causa-efecto, contenedor-contenido, autor-obra, etc.",
		example:
			'"Respeto las canas" (la vejez) - "Tomé tres copas" (vino) - "Leer a Cervantes" (su obra)',
	},
	{
		id: "sinecdoque",
		name: "Sinécdoque",
		generalDefinition:
			"Designar la parte por el todo, el todo por la parte, la materia por el objeto, o viceversa.",
		example:
			'"Tiene veinte primaveras" (años) - "España ganó el mundial" (la selección) - "Quedó sin techo" (sin casa)',
	},
	{
		id: "apostrofe",
		name: "Apóstrofe",
		generalDefinition:
			"Invocación, llamada o interpelación vehemente a alguien o algo, presente o ausente, real o imaginario.",
		example:
			'"¡Oh luna! ¿Dónde estás que no te veo?" - "¡Ay, muerte, que me matas!"',
	},
	{
		id: "hiperbaton",
		name: "Hipérbaton",
		generalDefinition:
			"Alteración del orden lógico o habitual de las palabras en la oración.",
		example:
			'"Del salón en el ángulo oscuro" (En el ángulo oscuro del salón) - "Volverán las oscuras golondrinas"',
	},
	{
		id: "elipsis",
		name: "Elipsis",
		generalDefinition:
			"Omisión de palabras que se sobreentienden por el contexto, sin alterar el sentido.",
		example:
			'"Por una mirada, un mundo; por una sonrisa, un cielo" (daría) - "Lo bueno, si breve, dos veces bueno" (es)',
	},
	{
		id: "polisindeton",
		name: "Polisíndeton",
		generalDefinition:
			"Uso reiterado de conjunciones innecesarias para dar ritmo lento, solemnidad o intensidad emotiva.",
		example:
			'"Y ríe, y llora, y canta, y grita" - "Oigo son de armas y de carros y de voces y de timbales"',
	},
	{
		id: "asindeton",
		name: "Asíndeton",
		generalDefinition:
			"Omisión de conjunciones para dar rapidez, dinamismo y viveza al discurso.",
		example: '"Acude, corre, vuela" - "Llegué, vi, vencí"',
	},
	{
		id: "alegoria",
		name: "Alegoría",
		generalDefinition:
			"Representación simbólica de ideas abstractas mediante imágenes, figuras o acciones concretas.",
		example:
			'"La caverna de Platón" (ignorancia vs. conocimiento) - "Nuestras vidas son los ríos que van a dar en la mar que es el morir"',
	},
	{
		id: "epifora",
		name: "Epífora o Conversión",
		generalDefinition:
			"Repetición de una o varias palabras al final de versos o frases sucesivas.",
		example:
			'"¿Y qué es lo blanco? / La paloma es lo blanco. / ¿Y qué es lo negro? / El cuervo es lo negro."',
	},
	{
		id: "paralelismo",
		name: "Paralelismo",
		generalDefinition:
			"Repetición de estructuras sintácticas similares en versos o frases para crear simetría y ritmo.",
		example:
			'"Mientras las ondas de la mar siciliana / labren las arenas" - "Tus labios, rosas; tus mejillas, lirios"',
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
