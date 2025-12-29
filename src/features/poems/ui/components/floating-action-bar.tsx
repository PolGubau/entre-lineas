import { ArrowLeft, ArrowRight, Info, Share2 } from "lucide-react";
import { Button } from "~/shared/ui/button";
import { Kbd } from "~/shared/ui/kbd";
import { LikeButton } from "~/shared/ui/like-button";
import { Tooltip } from "~/shared/ui/tooltip";
import { ReadingModeToggle } from "./reading-mode-toggle";

interface FloatingActionBarProps {
	isReadingMode: boolean;
	onToggleReadingMode: () => void;
	isLiked: boolean;
	onToggleLike: () => void;
	onOpenAnalysis: () => void;
	onShare: () => void;
	goNext: () => void;
	goPrevious: () => void;
	shareSuccess?: boolean;
}

export function FloatingActionBar({
	isReadingMode,
	onToggleReadingMode,
	isLiked,
	onToggleLike,
	onOpenAnalysis,
	onShare,
	goNext,
	goPrevious,
	shareSuccess = false,
}: FloatingActionBarProps) {
	return (
		<footer className="fixed bottom-4 right-1/2 translate-x-1/2 flex gap-2 backdrop-blur-sm bg-background/80 border border-border rounded-xl p-1 shadow-lg animate-in slide-in-from-bottom">
			<Tooltip
				label={
					<span className="flex items-center gap-2">
						Ir al poema anterior
						<Kbd>←</Kbd>
					</span>
				}
			>
				<Button
					size="icon"
					variant="ghost"
					onClick={goPrevious}
					aria-label="Poema anterior"
				>
					<ArrowLeft className="size-4" />
				</Button>
			</Tooltip>
			<ReadingModeToggle
				isReadingMode={isReadingMode}
				onToggle={onToggleReadingMode}
			/>
			<LikeButton isLiked={isLiked} onToggle={onToggleLike} />
			<Tooltip
				label={
					<span className="flex items-center gap-2">
						{shareSuccess ? "¡Enlace copiado!" : "Compartir"}
						{!shareSuccess && <Kbd>S</Kbd>}
					</span>
				}
			>
				<Button
					size="icon"
					variant={shareSuccess ? "default" : "ghost"}
					onClick={onShare}
					aria-label="Compartir poema"
					aria-live="polite"
					className="transition-all duration-200"
				>
					<Share2
						className={shareSuccess ? "size-4 animate-in zoom-in" : "size-4"}
					/>
				</Button>
			</Tooltip>

			<div className="lg:hidden">
				<Tooltip
					label={
						<span className="flex items-center gap-2">
							Ver análisis
							<Kbd>I</Kbd>
						</span>
					}
				>
					<Button
						size="icon"
						variant="ghost"
						onClick={onOpenAnalysis}
						aria-label="Ver análisis"
					>
						<Info className="size-4" />
					</Button>
				</Tooltip>
			</div>

			<Tooltip
				label={
					<span className="flex items-center gap-2">
						Ir al poema siguiente
						<Kbd>→</Kbd>
					</span>
				}
			>
				<Button
					size="icon"
					variant="ghost"
					onClick={goNext}
					aria-label="Poema siguiente"
				>
					<ArrowRight className="size-4" />
				</Button>
			</Tooltip>
		</footer>
	);
}
