import { BookOpen, BookOpenCheck } from "lucide-react";
import { Button } from "~/shared/ui/button";
import { Kbd } from "~/shared/ui/kbd";
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
				<span className="flex items-center gap-2">
					{isReadingMode ? "Salir del modo lectura" : "Activar modo lectura"}
					<Kbd>R</Kbd>
				</span>
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
