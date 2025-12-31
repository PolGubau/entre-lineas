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
		image = "/ICO.png",
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
		{ property: "og:type", content: type },
	);

	if (canonical) {
		meta.push({ property: "og:url", content: canonical });
	}

	// Twitter Card
	meta.push(
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
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
		image: "/ICO.png",
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
		image: "/ICO.png",
	};
}
