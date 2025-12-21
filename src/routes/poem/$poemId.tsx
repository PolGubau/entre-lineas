import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/poem/$poemId")({
	// In a loader
	loader: ({ params }) => console.log(params.poemId),
	// Or in a component
	component: PostComponent,
});

function PostComponent() {
	// In a component!
	const { poemId } = Route.useParams();
	return <div>Post ID: {poemId}</div>;
}
