import { createFileRoute } from "@tanstack/react-router";
import { PoemDetailPage } from "~/features/poems/ui/pages/poem-detail-page";
import { poemasData } from "~/data/poems.data";
import { generatePoemSEO, generateSEOTags } from "~/shared/lib/seo";

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
		return { meta, links };
	},
	component: PostComponent,
});

function PostComponent() {
	const { poemId } = Route.useParams();
	return <PoemDetailPage poemId={poemId} />;
}
