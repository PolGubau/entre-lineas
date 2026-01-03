import { createFileRoute } from "@tanstack/react-router";
import { poemasData } from "~/data/poems.data";
import { PoemDetailPage } from "~/features/poems/ui/pages/poem-detail-page";
import {
	generatePoemSEO,
	generatePoemStructuredData,
	generateSEOTags,
} from "~/shared/lib/seo";

export const Route = createFileRoute("/poem/$poemId")({
	loader: ({ params }) => {
		const poem = poemasData.find((p) => p.id === params.poemId);
		return { poem };
	},
	head: ({ loaderData }) => {
		if (!loaderData?.poem) {
			return {
				meta: [{ title: "Poema no encontrado | Entre Líneas" }],
			};
		}
		const seoConfig = generatePoemSEO(loaderData.poem);
		const { meta, links } = generateSEOTags(seoConfig);

		// Add structured data (JSON-LD) for better SEO
		const structuredData = generatePoemStructuredData(loaderData.poem);

		return {
			meta,
			links,
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify(structuredData),
				},
			],
		};
	},
	component: PostComponent,
});

function PostComponent() {
	const { poemId } = Route.useParams();
	return <PoemDetailPage poemId={poemId} />;
}
