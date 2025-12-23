import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { poemasData } from "~/data/poems.data";
import { useFavorites } from "~/features/poems/application/use-favorites";
import { usePoemById } from "~/features/poems/application/use-poem-by-id";
import { useReadingMode } from "~/features/poems/application/use-reading-mode";
import type { FiguraRetoricaEnPoem } from "~/features/poems/domain/poem.types";
import { NavigationAside } from "~/features/poems/ui/navigation-aside";
import { PoemSection } from "~/features/poems/ui/poem/poem";
import { PoemSummaryAside } from "~/features/poems/ui/summary-aside";
import { useKeyboardShortcuts } from "~/shared/hooks/use-keyboard-shortcuts";
import { cn } from "~/shared/lib/utils";
import { ErrorBoundary } from "~/shared/ui/error-boundary";
import { Spinner } from "~/shared/ui/spinner";
import { FloatingActionBar } from "../components/floating-action-bar";
import { KeyboardShortcutsDialog } from "../components/keyboard-shortcuts-dialog";
import { PoemNotFound } from "../components/poem-not-found";

interface PoemDetailPageProps {
	poemId: string;
}

export function PoemDetailPage({ poemId }: PoemDetailPageProps) {
	const [openFigure, setOpenFigure] = useState<FiguraRetoricaEnPoem | null>(
		null,
	);

	const navigate = useNavigate();
	const { isReadingMode, toggleReadingMode, disableReadingMode } = useReadingMode();
	const { poem, isLoading, error } = usePoemById(poemId);
	const { isFavorite, toggleFavorite } = useFavorites();

	// Keyboard shortcuts
	useKeyboardShortcuts({
		escape: {
			handler: () => {
				if (isReadingMode) {
					disableReadingMode();
				} else {
					navigate({ to: "/" });
				}
			},
			description: "Salir del modo lectura o volver al inicio",
			shortcut: { key: "Escape" },
		},
		f: {
			handler: () => toggleFavorite(poemId),
			description: "Toggle favorito",
			shortcut: { key: "f" },
		},
		r: {
			handler: toggleReadingMode,
			description: "Toggle modo lectura",
			shortcut: { key: "r" },
		},
		arrowLeft: {
			handler: () => {
				const currentIndex = poemasData.findIndex((p) => p.id === poemId);
				if (currentIndex > 0) {
					navigate({ to: "/poem/$poemId", params: { poemId: poemasData[currentIndex - 1].id } });
				}
			},
			description: "Poema anterior",
			shortcut: { key: "ArrowLeft" },
		},
		arrowRight: {
			handler: () => {
				const currentIndex = poemasData.findIndex((p) => p.id === poemId);
				if (currentIndex < poemasData.length - 1) {
					navigate({ to: "/poem/$poemId", params: { poemId: poemasData[currentIndex + 1].id } });
				}
			},
			description: "Poema siguiente",
			shortcut: { key: "ArrowRight" },
		},
	});

	if (isLoading) {
		return (
			<section className="gap-2 grid justify-center items-center h-screen">
				<Spinner />
				Cargando poema...
			</section>
		);
	}

	if (error || !poem) {
		return (
			<PoemNotFound
				poemId={poemId}
				onRetry={() => window.location.reload()}
			/>
		);
	}

	const isLiked = isFavorite(poemId);

	return (
		<ErrorBoundary>
			<main
				className={cn(
					"h-screen pt-10 pb-20 px-4 sm:px-6 lg:px-8 relative transition-all duration-500",
					isReadingMode
						? "grid place-items-center bg-linear-to-b from-background to-muted/20"
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
			<KeyboardShortcutsDialog />
			</main>
		</ErrorBoundary>
	);
}
