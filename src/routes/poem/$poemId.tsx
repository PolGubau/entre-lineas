import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { usePoemById } from "~/features/poems/application/use-poem-by-id";
import type { FiguraRetoricaEnPoem } from "~/features/poems/domain/poem.types";
import { NavigationAside } from "~/features/poems/ui/navigation-aside";
import { PoemSection } from "~/features/poems/ui/poem/poem";
import { PoemSummaryAside } from "~/features/poems/ui/summary-aside";
import { cn } from "~/shared/lib/utils";
import { Spinner } from "~/shared/ui/spinner";

export const Route = createFileRoute("/poem/$poemId")({
	// In a loader
	loader: ({ params }) => console.log(params.poemId),
	// Or in a component
	component: PostComponent,
});

function PostComponent() {
	const [openFigure, setOpenFigure] = useState<FiguraRetoricaEnPoem | null>(
		null,
	);

	const { poemId } = Route.useParams();
	const { poem, isLoading, error } = usePoemById(poemId);
	if (isLoading)
		return (
			<section className="gap-2 grid justify-center items-center">
				<Spinner />
				Loading...
			</section>
		);
	if (error || !poem) return <div>Error loading poem.</div>;

	return (
		<main className="h-full grid md:grid-cols-3 gap-4 md:gap-20 px-4 sm:px-6 lg:px-8 pt-10 pb-16">
			<NavigationAside />

			<PoemSection poem={poem} highlightedVersesIds={openFigure?.verseIds} />
			<PoemSummaryAside
				openFigure={openFigure}
				poem={poem}
				setOpenFigure={setOpenFigure}
			/>
		</main>
	);
}
