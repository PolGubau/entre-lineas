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
	tipo: FiguraRetoricaTipoSchema,
	nombre: z.string(),
	definicionGeneral: z.string(),
	ejemplo: z.string().optional(),
});

export type FiguraRetoricaDefinicion = z.infer<
	typeof FiguraRetoricaDefinicionSchema
>;

// ============= Referencia a Figura en un Poema =============
export const FiguraRetoricaEnPoemSchema = z.object({
	id: z.string(), // Referencia al ID del catálogo global
	descripcionContextual: z.string(), // Explicación específica en este poema
	versosIds: z.array(z.string()), // IDs de versos donde aparece
});

export type FiguraRetoricaEnPoem = z.infer<typeof FiguraRetoricaEnPoemSchema>;

// ============= Verso =============
export const VersoSchema = z.object({
	id: z.string(),
	numero: z.number(),
	texto: z.string(),
	// Métricas del verso
	silabas: z.number().optional(),
	rima: z.string().optional(), // 'A', 'B', 'a', 'b', etc.
	// Anotaciones inline
	anotacion: z.string().optional(),
});

export type Verso = z.infer<typeof VersoSchema>;

// ============= Estrofa =============
export const EstrofaSchema = z.object({
	id: z.string(),
	numero: z.number(),
	tipo: z
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
	versos: z.array(VersoSchema),
	anotacion: z.string().optional(),
});

export type Estrofa = z.infer<typeof EstrofaSchema>;

// ============= Contexto Histórico =============
export const ContextoHistoricoSchema = z.object({
	epoca: z.string(), // "Siglo XX", "Renacimiento", etc.
	movimiento: z.string().optional(), // "Modernismo", "Generación del 27", etc.
	paisOrigen: z.string(),
	añoPublicacion: z.number().optional(),
	contextoSocial: z.string().optional(),
	influencias: z.array(z.string()).default([]),
});

export type ContextoHistorico = z.infer<typeof ContextoHistoricoSchema>;

// ============= Análisis =============
export const AnalisisSchema = z.object({
	tematica: z.array(z.string()), // ["amor", "muerte", "naturaleza"]
	tono: z.string().optional(), // "melancólico", "alegre", etc.
	metrica: z.string().optional(), // "endecasílabos", "alejandrinos"
	esquemaRima: z.string().optional(), // "ABBA ABBA CDC DCD"
	resumenGeneral: z.string(),
	interpretacion: z.string().optional(),
});

export type Analisis = z.infer<typeof AnalisisSchema>;

// ============= Poema Principal =============
export const PoemSchema = z.object({
	id: z.string(),
	slug: z.string(), // URL-friendly: "veinte-poemas-de-amor-1"
	titulo: z.string(),
	autor: z.string(),
	autorSlug: z.string().optional(),

	// Estructura del poema
	estrofas: z.array(EstrofaSchema),

	// Metadata
	contexto: ContextoHistoricoSchema,
	analisis: AnalisisSchema,

	// Figuras retóricas REFERENCIADAS (no definidas aquí)
	figurasRetoricas: z.array(FiguraRetoricaEnPoemSchema),

	// SEO y preview
	descripcionCorta: z.string(),
	imagenUrl: z.string().optional(),

	// Fechas
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type Poem = z.infer<typeof PoemSchema>;

// ============= Tipos para UI State =============
export interface HighlightState {
	figuraId: string | null;
	versoIds: string[];
}

export interface FilterState {
	busqueda: string;
	autor: string | null;
	movimiento: string | null;
	epoca: string | null;
	tematica: string[];
}
