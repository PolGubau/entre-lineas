import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, BookOpenCheck } from "lucide-react";
import { useState } from "react";
import { useFavorites } from "~/features/poems/application/use-favorites";
import { usePoemById } from "~/features/poems/application/use-poem-by-id";
import type { FiguraRetoricaEnPoem } from "~/features/poems/domain/poem.types";
import { NavigationAside } from "~/features/poems/ui/navigation-aside";
import { PoemSection } from "~/features/poems/ui/poem/poem";
import { PoemSummaryAside } from "~/features/poems/ui/summary-aside";
import { cn } from "~/shared/lib/utils";
import { Button } from "~/shared/ui/button";
import { LikeButton } from "~/shared/ui/like-button";
import { Spinner } from "~/shared/ui/spinner";
import { Tooltip } from "~/shared/ui/tooltip";

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
	const [isReadingMode, setIsReadingMode] = useState(false);

	const { poemId } = Route.useParams();
	const { poem, isLoading, error } = usePoemById(poemId);
	const { isFavorite, toggleFavorite } = useFavorites();

	if (isLoading)
		return (
			<section className="gap-2 grid justify-center items-center">
				<Spinner />
				Loading...
			</section>
		);
	if (error || !poem) return <div>Error loading poem.</div>;

	const isLiked = isFavorite(poemId);

	return (
		<main className={cn(
			"h-screen pt-10 pb-20 px-4 sm:px-6 lg:px-8 relative transition-all duration-500",
			isReadingMode 
				? "grid place-items-center bg-gradient-to-b from-background to-muted/20" 
				: "grid md:grid-cols-3 gap-4 md:gap-20"
		)}>
			{!isReadingMode && <NavigationAside />}

			<div className={cn(
				"h-full overflow-y-auto",
				isReadingMode && "max-w-3xl w-full scroll-smooth"
			)}>
				<PoemSection poem={poem} highlightedVersesIds={openFigure?.verseIds} />
			</div>

			{!isReadingMode && (
				<PoemSummaryAside
					openFigure={openFigure}
					poem={poem}
					setOpenFigure={setOpenFigure}
				/>
			)}

			<div className="fixed bottom-4 right-1/2 translate-x-1/2 flex gap-2 backdrop-blur-sm bg-background/80 border border-border rounded-xl p-1 shadow-lg">
				<Tooltip label={isReadingMode ? "Salir del modo lectura" : "Activar modo lectura"}>
				<Button 
					size={"icon"} 
					variant={"ghost"}
					onClick={() => setIsReadingMode(!isReadingMode)}
 					aria-label={isReadingMode ? "Salir del modo lectura" : "Activar modo lectura"}
				>
					{isReadingMode ? (
						<BookOpenCheck className="size-4" />
					) : (
						<BookOpen className="size-4" />
					)}
					</Button>
				</Tooltip>

				
					<LikeButton
						isLiked={isLiked}
						onToggle={() => toggleFavorite(poemId)}
					/>
			</div>
		</main>
	);
}
