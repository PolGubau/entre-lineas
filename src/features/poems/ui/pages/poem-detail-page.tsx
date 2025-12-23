import { useState } from "react";
import { useFavorites } from "~/features/poems/application/use-favorites";
import { usePoemById } from "~/features/poems/application/use-poem-by-id";
import { useReadingMode } from "~/features/poems/application/use-reading-mode";
import type { FiguraRetoricaEnPoem } from "~/features/poems/domain/poem.types";
import { NavigationAside } from "~/features/poems/ui/navigation-aside";
import { PoemSection } from "~/features/poems/ui/poem/poem";
import { PoemSummaryAside } from "~/features/poems/ui/summary-aside";
import { cn } from "~/shared/lib/utils";
import { Spinner } from "~/shared/ui/spinner";
import { FloatingActionBar } from "../components/floating-action-bar";

interface PoemDetailPageProps {
	poemId: string;
}

export function PoemDetailPage({ poemId }: PoemDetailPageProps) {
	const [openFigure, setOpenFigure] = useState<FiguraRetoricaEnPoem | null>(
		null,
	);

	const { isReadingMode, toggleReadingMode } = useReadingMode();
	const { poem, isLoading, error } = usePoemById(poemId);
	const { isFavorite, toggleFavorite } = useFavorites();

	if (isLoading) {
		return (
			<section className="gap-2 grid justify-center items-center h-screen">
				<Spinner />
				Loading...
			</section>
		);
	}

	if (error || !poem) {
		return <div>Error loading poem.</div>;
	}

	const isLiked = isFavorite(poemId);

	return (
		<main
			className={cn(
				"h-screen pt-10 pb-20 px-4 sm:px-6 lg:px-8 relative transition-all duration-500",
				isReadingMode
					? "grid place-items-center bg-gradient-to-b from-background to-muted/20"
					: "grid md:grid-cols-3 gap-4 md:gap-20",
			)}
		>
			{!isReadingMode && <NavigationAside />}

			<div
				className={cn(
					"h-full overflow-y-auto",
					isReadingMode && "max-w-3xl w-full scroll-smooth",
				)}
			>
				<PoemSection poem={poem} highlightedVersesIds={openFigure?.verseIds} />
			</div>

			{!isReadingMode && (
				<PoemSummaryAside
					openFigure={openFigure}
					poem={poem}
					setOpenFigure={setOpenFigure}
				/>
			)}

			<FloatingActionBar
				isReadingMode={isReadingMode}
				onToggleReadingMode={toggleReadingMode}
				isLiked={isLiked}
				onToggleLike={() => toggleFavorite(poemId)}
			/>
		</main>
	);
}
