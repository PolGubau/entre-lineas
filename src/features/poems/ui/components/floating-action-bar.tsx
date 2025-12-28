import { Info } from "lucide-react";
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
	onOpenAnalysis?: () => void;
}

export function FloatingActionBar({
	isReadingMode,
	onToggleReadingMode,
	isLiked,
	onToggleLike,
	onOpenAnalysis,
}: FloatingActionBarProps) {
	return (
		<footer className="fixed bottom-4 right-1/2 translate-x-1/2 flex gap-2 backdrop-blur-sm bg-background/80 border border-border rounded-xl p-1 shadow-lg">
			<ReadingModeToggle
				isReadingMode={isReadingMode}
				onToggle={onToggleReadingMode}
			/>
			<LikeButton isLiked={isLiked} onToggle={onToggleLike} />
			{onOpenAnalysis && (
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
						className="lg:hidden"
						aria-label="Ver análisis"
					>
						<Info className="size-4" />
					</Button>
				</Tooltip>
			)}
		</footer>
	);
}
