import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { HomePage } from "~/features/poems/ui/pages/home-page";
import { generateHomeSEO, generateSEOTags } from "~/shared/lib/seo";

// Schema de validación para search params
const homeSearchSchema = z.object({
	q: z.string().optional(),
	author: z.string().optional(),
	movement: z.string().optional(),
	era: z.string().optional(),
	themes: z.array(z.string()).optional(),
});

export const Route = createFileRoute("/")({
	validateSearch: homeSearchSchema,
	head: () => {
		const seoConfig = generateHomeSEO();
		const { meta, links } = generateSEOTags(seoConfig);
		return { meta, links };
	},
	component: HomePage,
});
