import type { Poem } from "~/features/poems/domain/poem.types";

interface MetaTag {
	charSet?: string;
	name?: string;
	property?: string;
	content?: string;
	title?: string;
}

interface LinkTag {
	rel: string;
	href: string;
	type?: string;
	sizes?: string;
}

export interface SEOConfig {
	title: string;
	description: string;
	keywords?: string[];
	image?: string;
	type?: "website" | "article";
	author?: string;
	publishedTime?: string;
	canonical?: string;
}

export function generateSEOTags(config: SEOConfig) {
	const {
		title,
		description,
		keywords = [],
		image = "https://entrelineas.polgubau.com/ICO.png",
		type = "website",
		author,
		publishedTime,
		canonical,
	} = config;

	const meta: MetaTag[] = [
		{ charSet: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ title },
		{ name: "description", content: description },
	];

	// Keywords
	if (keywords.length > 0) {
		meta.push({ name: "keywords", content: keywords.join(", ") });
	}

	// Open Graph
	meta.push(
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:image", content: image },
		{ property: "og:image:alt", content: title },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:type", content: type },
		{
			property: "og:url",
			content: canonical || "https://entrelineas.polgubau.com",
		},
	);

	// Twitter Card
	meta.push(
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{
			name: "twitter:url",
			content: canonical || "https://entrelineas.polgubau.com",
		},
	);

	// Article metadata
	if (type === "article" && author) {
		meta.push({ name: "author", content: author });
	}

	if (publishedTime) {
		meta.push({ property: "article:published_time", content: publishedTime });
	}

	const links: LinkTag[] = [
		{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
		{ rel: "apple-touch-icon", href: "/ICO.png", sizes: "180x180" },
	];

	if (canonical) {
		links.push({ rel: "canonical", href: canonical });
	}

	return { meta, links };
}

/**
 * Genera datos estructurados JSON-LD para un poema
 * Mejora el SEO y permite rich snippets en resultados de búsqueda
 */
export function generatePoemStructuredData(poem: Poem) {
	return {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: poem.title,
		author: {
			"@type": "Person",
			name: poem.author,
		},
		datePublished: poem.context.publicationDate.toISOString(),
		description: poem.shortDescription,
		keywords: poem.analysis.themes.join(", "),
		genre: poem.context.movement || "Poesía",
		inLanguage: "es",
		copyrightYear: poem.context.publicationDate.getFullYear(),
	};
}

/**
 * Genera datos estructurados JSON-LD para el sitio web
 */
export function generateWebsiteStructuredData() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Entre Líneas",
		description: "Análisis interactivo de poesía española e hispanoamericana",
		url: "https://entrelineas.polgubau.com",
		potentialAction: {
			"@type": "SearchAction",
			target: "https://entrelineas.polgubau.com/?q={search_term_string}",
			"query-input": "required name=search_term_string",
		},
	};
}

export function generatePoemSEO(poem: Poem): SEOConfig {
	const title = `${poem.title} - ${poem.author} | Entre Líneas`;
	const description =
		poem.shortDescription ||
		`Análisis detallado de "${poem.title}" de ${poem.author}. Explora figuras retóricas, contexto histórico y significado de cada verso.`;

	const keywords = [
		poem.title,
		poem.author,
		poem.context.movement ?? "",
		...poem.analysis.themes,
		"poesía",
		"análisis literario",
		"figuras retóricas",
	];

	return {
		title,
		description,
		keywords,
		type: "article",
		author: poem.author,
		publishedTime: poem.createdAt.toISOString(),
		image: `https://entrelineas.polgubau.com/api/og/${poem.id}`,
		canonical: `https://entrelineas.polgubau.com/poem/${poem.id}`,
	};
}

export function generateHomeSEO(): SEOConfig {
	return {
		title: "Entre Líneas - Análisis Interactivo de Poesía",
		description:
			"Explora poemas en profundidad con análisis de figuras retóricas, contexto histórico y anotaciones interactivas. Descubre la belleza de la poesía española e hispanoamericana.",
		keywords: [
			"poesía",
			"análisis literario",
			"figuras retóricas",
			"literatura española",
			"García Lorca",
			"Antonio Machado",
			"Pablo Neruda",
			"poesía interactiva",
		],
		type: "website",
		image: "https://entrelineas.polgubau.com/ICO.png",
		canonical: "https://entrelineas.polgubau.com",
	};
}
