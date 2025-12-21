import { z } from "zod";

// ============= Figuras Retóricas =============
export const FiguraRetoricaSchema = z.object({
	id: z.string(),
	tipo: z.enum([
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
	]),
	nombre: z.string(),
	descripcion: z.string(),
	ejemploGenerico: z.string().optional(),
});

export type FiguraRetorica = z.infer<typeof FiguraRetoricaSchema>;

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
	// Referencias a figuras retóricas presentes en este verso
	figuras: z.array(z.string()).default([]), // IDs de figuras retóricas
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
	title: z.string(),
	author: z.string(),
	authorSlug: z.string().optional(),

	// Estructura del poema
	estrofas: z.array(EstrofaSchema),

	// Metadata
	context: ContextoHistoricoSchema,
	analysis: AnalisisSchema,

	// Figuras retóricas del poema completo
	rhetoricalFigures: z.array(FiguraRetoricaSchema),

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
