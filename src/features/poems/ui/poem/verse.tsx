import { cn } from "~/shared/lib/utils";
import { Tooltip } from "~/shared/ui/tooltip";

type Props = {
	number: number;
	text: string;
	isHighlighted: boolean;
	annotations?: string;
	syllables?: number;
	onAnnotationClick?: (
		verseNumber: number,
		text: string,
		annotation: string,
	) => void;
	isReadingMode?: boolean;
};

export const Verse = ({
	number,
	text,
	isHighlighted,
	syllables,
	annotations,
	onAnnotationClick,
	isReadingMode = false,
}: Props) => {
	return (
		<div className="flex gap-3 group items-center">
			{!isReadingMode && (
				<small className="text-muted-foreground w-2 md:w-6 text-right text-xs">
					{number}
				</small>
			)}
			<span
				className={cn("transition-all rounded-lg", {
					"bg-accent": isHighlighted,
				})}
			>
				<MightContainAnnotations
					annotations={annotations}
					text={text}
					verseNumber={number}
					onAnnotationClick={onAnnotationClick}
					isReadingMode={isReadingMode}
				/>
			</span>
			{!isReadingMode && (
				<div className="invisible group-hover:visible transition-all text-xs text-muted-foreground flex gap-1">
					<span>{syllables}</span>
				</div>
			)}
		</div>
	);
};

function MightContainAnnotations({
	annotations,
	text,
	verseNumber,
	onAnnotationClick,
	isReadingMode = false,
}: {
	annotations?: string;
	text: string;
	verseNumber: number;
	onAnnotationClick?: (
		verseNumber: number,
		text: string,
		annotation: string,
	) => void;
	isReadingMode?: boolean;
}) {
	// Reading mode: plain text without borders or interactions
	if (isReadingMode || !annotations) {
		return (
			<span className="px-2 border border-transparent rounded-lg text-left">
				{text}
			</span>
		);
	}

	const handleClick = () => {
		if (onAnnotationClick) {
			onAnnotationClick(verseNumber, text, annotations);
		}
	};

	return (
		<>
			{/* Desktop: Tooltip */}
			<Tooltip
				label={<div className="max-w-xs space-y-1">{annotations}</div>}
				asChild
			>
				<span className="hidden lg:inline px-2 border border-border rounded-lg cursor-help text-left justify-start">
					{text}
				</span>
			</Tooltip>

			{/* Mobile: Clickable */}
			<button
				type="button"
				onClick={handleClick}
				className="lg:hidden px-2 border border-border rounded-lg cursor-pointer text-left justify-start active:bg-accent transition-colors"
			>
				{text}
			</button>
		</>
	);
}
