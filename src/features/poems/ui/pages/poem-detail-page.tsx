/** biome-ignore-all lint/suspicious/noArrayIndexKey: Static so ok */

import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { poemasData } from "~/data/poems.data";
import { useFavorites } from "~/features/poems/application/use-favorites";
import { usePoemById } from "~/features/poems/application/use-poem-by-id";
import { useReadingMode } from "~/features/poems/application/use-reading-mode";
import { useShare } from "~/features/poems/application/use-share";
import type { FiguraRetoricaEnPoem } from "~/features/poems/domain/poem.types";
import { NavigationAside } from "~/features/poems/ui/navigation-aside";
import { PoemSection } from "~/features/poems/ui/poem/poem";
import { PoemSummaryAside } from "~/features/poems/ui/summary-aside";
import { useKeyboardShortcuts } from "~/shared/hooks/use-keyboard-shortcuts";
import { cn } from "~/shared/lib/utils";
import { Drawer } from "~/shared/ui/drawer";
import { ErrorBoundary } from "~/shared/ui/error-boundary";
import { FloatingActionBar } from "../components/floating-action-bar";
import { KeyboardShortcutsDialog } from "../components/keyboard-shortcuts-dialog";
import { NavigationAsideSkeleton } from "../components/navigation-aside-skeleton";
import { PoemNotFound } from "../components/poem-not-found";
import { PoemSkeleton } from "../components/poem-skeleton";
import { SummaryAsideSkeleton } from "../components/summary-aside-skeleton";

interface PoemDetailPageProps {
	poemId: string;
}

export function PoemDetailPage({ poemId }: PoemDetailPageProps) {
	const [openFigure, setOpenFigure] = useState<FiguraRetoricaEnPoem | null>(
		null,
	);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [verseAnnotation, setVerseAnnotation] = useState<{
		verseNumber: number;
		text: string;
		annotation: string;
	} | null>(null);
	const [shareSuccess, setShareSuccess] = useState(false);

	function toggleInfoDrawer() {
		setIsDrawerOpen((prev) => !prev);
	}

	function openVerseAnnotation(
		verseNumber: number,
		text: string,
		annotation: string,
	) {
		setVerseAnnotation({ verseNumber, text, annotation });
	}

	function closeVerseAnnotation() {
		setVerseAnnotation(null);
	}

	const navigate = useNavigate();
	const { isReadingMode, toggleReadingMode, disableReadingMode } =
		useReadingMode();
	const { poem, isLoading, error } = usePoemById(poemId);
	const { isFavorite, toggleFavorite } = useFavorites();
	const { share } = useShare();

	const handleShare = () => {
		if (!poem) return;
		share(
			{
				title: poem.title,
				text: `${poem.title} - ${poem.author}`,
				url: window.location.href,
			},
			{
				onSuccess: () => {
					setShareSuccess(true);
					setTimeout(() => setShareSuccess(false), 2000);
				},
			},
		);
	};

	function goNext() {
		const currentIndex = poemasData.findIndex((p) => p.id === poemId);
		// Loop: si está en el último, volver al primero
		const nextIndex = (currentIndex + 1) % poemasData.length;
		navigate({
			to: "/poem/$poemId",
			params: { poemId: poemasData[nextIndex].id },
		});
	}
	function goPrevious() {
		const currentIndex = poemasData.findIndex((p) => p.id === poemId);
		// Loop: si está en el primero, ir al último
		const prevIndex =
			currentIndex === 0 ? poemasData.length - 1 : currentIndex - 1;
		navigate({
			to: "/poem/$poemId",
			params: { poemId: poemasData[prevIndex].id },
		});
	}

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
		i: {
			handler: toggleInfoDrawer,
			description: "Ver análisis",
			shortcut: { key: "i" },
		},
		s: {
			handler: handleShare,
			description: "Compartir poema",
			shortcut: { key: "s" },
		},
		r: {
			handler: toggleReadingMode,
			description: "Toggle modo lectura",
			shortcut: { key: "r" },
		},
		arrowLeft: {
			handler: goPrevious,
			description: "Poema anterior",
			shortcut: { key: "ArrowLeft" },
		},
		arrowRight: {
			handler: goNext,
			description: "Poema siguiente",
			shortcut: { key: "ArrowRight" },
		},
	});

	if (isLoading) {
		return (
			<main className="grid grid-rows-[auto_1fr] md:grid-cols-[1fr_2fr] lg:grid-cols-3 gap-4 md:gap-6 xl:gap-20 h-screen pt-10 pb-20 px-4 sm:px-6 lg:px-8">
				{/* Navigation Sidebar Skeleton */}
				<div className="hidden md:block">
					<NavigationAsideSkeleton />
				</div>

				{/* Main Content Skeleton */}
				<section
					aria-live="polite"
					aria-busy="true"
					className="h-full overflow-y-auto"
				>
					<PoemSkeleton />
					<span className="sr-only">Cargando poema...</span>
				</section>

				{/* Summary Sidebar Skeleton */}
				<SummaryAsideSkeleton />
			</main>
		);
	}

	if (error || !poem) {
		return (
			<PoemNotFound poemId={poemId} onRetry={() => window.location.reload()} />
		);
	}

	const isLiked = isFavorite(poemId);

	return (
		<ErrorBoundary>
			<main
				aria-live="polite"
				className={cn(
					"grid h-screen pt-10 pb-20 px-4 sm:px-6 lg:px-8 relative transition-all duration-300",
					{
						"place-items-center bg-linear-to-b from-background to-muted-foreground/20":
							isReadingMode,
						"grid-rows-[auto_1fr] md:grid-cols-[1fr_2fr] lg:grid-cols-3 gap-4 md:gap-6 xl:gap-20":
							!isReadingMode,
					},
				)}
			>
				{!isReadingMode && <NavigationAside />}
				<section
					aria-label="Contenido del poema"
					className={cn("h-full overflow-y-auto transition-all duration-300", {
						"max-w-3xl w-full scroll-smooth": isReadingMode,
					})}
				>
					<PoemSection
						poem={poem}
						highlightedVersesIds={openFigure?.verseIds}
						onVerseAnnotationClick={openVerseAnnotation}
						isReadingMode={isReadingMode}
					/>
				</section>
				{/* Desktop: sidebar */}
				{!isReadingMode && (
					<aside className="hidden lg:block overflow-y-auto h-full animate-in slide-in-from-right-4">
						<PoemSummaryAside
							openFigure={openFigure}
							poem={poem}
							setOpenFigure={setOpenFigure}
						/>
					</aside>
				)}
				{/* Mobile: drawer */}
				<Drawer
					open={isDrawerOpen}
					onClose={() => setIsDrawerOpen(false)}
					title="Análisis del poema"
					description={poem.title}
				>
					<PoemSummaryAside
						openFigure={openFigure}
						poem={poem}
						setOpenFigure={setOpenFigure}
					/>
				</Drawer>
				<FloatingActionBar
					goNext={goNext}
					goPrevious={goPrevious}
					isReadingMode={isReadingMode}
					onToggleReadingMode={toggleReadingMode}
					isLiked={isLiked}
					onToggleLike={() => toggleFavorite(poemId)}
					onOpenAnalysis={() => setIsDrawerOpen(true)}
					onShare={handleShare}
					shareSuccess={shareSuccess}
				/>
				{/* Drawer for verse annotations (mobile) */}
				{verseAnnotation && (
					<Drawer
						open={!!verseAnnotation}
						onClose={closeVerseAnnotation}
						title={`Verso ${verseAnnotation.verseNumber}`}
						description={verseAnnotation.text}
					>
						<p className="text-sm leading-relaxed">
							{verseAnnotation.annotation}
						</p>
					</Drawer>
				)}
				<KeyboardShortcutsDialog />
			</main>
		</ErrorBoundary>
	);
}
