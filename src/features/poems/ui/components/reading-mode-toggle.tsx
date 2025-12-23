import { BookOpen, BookOpenCheck } from "lucide-react";
import { Button } from "~/shared/ui/button";
import { Tooltip } from "~/shared/ui/tooltip";

interface ReadingModeToggleProps {
	isReadingMode: boolean;
	onToggle: () => void;
}

export function ReadingModeToggle({
	isReadingMode,
	onToggle,
}: ReadingModeToggleProps) {
	return (
		<Tooltip
			label={
				isReadingMode ? "Salir del modo lectura" : "Activar modo lectura"
			}
		>
			<Button
				size="icon"
				variant="ghost"
				onClick={onToggle}
				aria-label={
					isReadingMode ? "Salir del modo lectura" : "Activar modo lectura"
				}
			>
				{isReadingMode ? (
					<BookOpenCheck className="size-4" />
				) : (
					<BookOpen className="size-4" />
				)}
			</Button>
		</Tooltip>
	);
}
