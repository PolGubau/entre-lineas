import { createFileRoute } from "@tanstack/react-router";
import { PoemDetailPage } from "~/features/poems/ui/pages/poem-detail-page";

export const Route = createFileRoute("/poem/$poemId")({
	loader: ({ params }) => console.log(params.poemId),
	component: PostComponent,
});

function PostComponent() {
	const { poemId } = Route.useParams();
	return <PoemDetailPage poemId={poemId} />;
}
