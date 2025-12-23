import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "~/features/poems/ui/pages/home-page";
import { generateHomeSEO, generateSEOTags } from "~/shared/lib/seo";

export const Route = createFileRoute("/")({
	head: () => {
		const seoConfig = generateHomeSEO();
		const { meta, links } = generateSEOTags(seoConfig);
		return { meta, links };
	},
	component: HomePage,
});
