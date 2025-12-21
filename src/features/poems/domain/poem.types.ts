import { z } from "zod";

// ============= Catálogo Global de Figuras Retóricas =============
export const FiguraRetoricaTipoSchema = z.enum([
	"metafora",
	"simil",
	"personificacion",
	"hiperbole",
	"anafora",
	"aliteracion",
	"paradoja",
	"antitesis",
	"sinestesia",
	"metonimia",
	"sinecdoque",
	"apostrofe",
	"hiperbaton",
	"elipsis",
	"polisindeton",
	"asindeton",
]);

export type FiguraRetoricaTipo = z.infer<typeof FiguraRetoricaTipoSchema>;

export const FiguraRetoricaDefinicionSchema = z.object({
	id: z.string(),
	type: FiguraRetoricaTipoSchema,
	name: z.string(),
	generalDefinition: z.string(),
	example: z.string().optional(),
});

export type FiguraRetoricaDefinicion = z.infer<
	typeof FiguraRetoricaDefinicionSchema
>;

// ============= Referencia a Figura en un Poema =============
export const FiguraRetoricaEnPoemSchema = z.object({
	id: z.string(), // Referencia al ID del catálogo global
	contextualDescription: z.string(), // Explicación específica en este poema
	verseIds: z.array(z.string()), // IDs de versos donde aparece
});

export type FiguraRetoricaEnPoem = z.infer<typeof FiguraRetoricaEnPoemSchema>;

// ============= Verso =============
export const VersoSchema = z.object({
	id: z.string(),
	number: z.number(),
	text: z.string(),
	// Métricas del verso
	syllables: z.number().optional(),
	rhyme: z.string().optional(), // 'A', 'B', 'a', 'b', etc.
	// Anotaciones inline
	annotation: z.string().optional(),
});

export type Verso = z.infer<typeof VersoSchema>;

// ============= Estrofa =============
export const EstrofaSchema = z.object({
	id: z.string(),
	number: z.number(),
	type: z
		.enum([
			"pareado",
			"terceto",
			"cuarteto",
			"cuarteta",
			"quinteto",
			"sexteto",
			"septeto",
			"octava",
			"decima",
			"soneto",
			"libre",
		])
		.optional(),
	verses: z.array(VersoSchema),
	annotation: z.string().optional(),
});

export type Estrofa = z.infer<typeof EstrofaSchema>;

// ============= Contexto Histórico =============
export const ContextoHistoricoSchema = z.object({
	era: z.string(), // "Siglo XX", "Renacimiento", etc.
	movement: z.string().optional(), // "Modernismo", "Generación del 27", etc.
	originCountry: z.string(),
	publicationYear: z.number().optional(),
	socialContext: z.string().optional(),
	influences: z.array(z.string()).default([]),
});

export type ContextoHistorico = z.infer<typeof ContextoHistoricoSchema>;

// ============= Análisis =============
export const AnalisisSchema = z.object({
	themes: z.array(z.string()), // ["amor", "muerte", "naturaleza"]
	tone: z.string().optional(), // "melancólico", "alegre", etc.
	meter: z.string().optional(), // "endecasílabos", "alejandrinos"
	rhymeScheme: z.string().optional(), // "ABBA ABBA CDC DCD"
	generalSummary: z.string(),
	interpretation: z.string().optional(),
});

export type Analisis = z.infer<typeof AnalisisSchema>;

// ============= Poema Principal =============
export const PoemSchema = z.object({
	id: z.string(),
	slug: z.string(), // URL-friendly: "veinte-poemas-de-amor-1"
	title: z.string(),
	author: z.string(),
	authorSlug: z.string().optional(),

	// Estructura del poema
	stanzas: z.array(EstrofaSchema),

	// Metadata
	context: ContextoHistoricoSchema,
	analysis: AnalisisSchema,

	// Figuras retóricas REFERENCIADAS (no definidas aquí)
	rhetoricalFigures: z.array(FiguraRetoricaEnPoemSchema),

	// SEO y preview
	shortDescription: z.string(),
	imageUrl: z.string().optional(),

	// Fechas
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type Poem = z.infer<typeof PoemSchema>;

// ============= Tipos para UI State =============
export interface HighlightState {
	figureId: string | null;
	verseIds: string[];
}

export interface FilterState {
	search: string;
	author: string | null;
	movement: string | null;
	era: string | null;
	themes: string[];
}
