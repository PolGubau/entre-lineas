import { LikeButton } from "~/shared/ui/like-button";
import { ReadingModeToggle } from "./reading-mode-toggle";

interface FloatingActionBarProps {
	isReadingMode: boolean;
	onToggleReadingMode: () => void;
	isLiked: boolean;
	onToggleLike: () => void;
}

export function FloatingActionBar({
	isReadingMode,
	onToggleReadingMode,
	isLiked,
	onToggleLike,
}: FloatingActionBarProps) {
	return (
		<footer className="fixed bottom-4 right-1/2 translate-x-1/2 flex gap-2 backdrop-blur-sm bg-background/80 border border-border rounded-xl p-1 shadow-lg">
			<ReadingModeToggle
				isReadingMode={isReadingMode}
				onToggle={onToggleReadingMode}
			/>
      <LikeButton isLiked={isLiked} onToggle={onToggleLike} />      
		</footer>
	);
}
