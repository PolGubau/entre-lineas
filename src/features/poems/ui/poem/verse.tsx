import { cn } from "~/shared/lib/utils";
import { Tooltip } from "~/shared/ui/tooltip";

type Props = {
	number: number;
	text: string;
	isHighlighted: boolean;
	annotations?: string;
	syllables?: number;
};

export const Verse = ({
	number,
	text,
	isHighlighted,
	syllables,
	annotations,
}: Props) => {
	return (
		<div className="flex gap-3 group items-center">
			<small className="text-muted-foreground w-2 md:w-6 text-right text-xs">
				{number}
			</small>
			<span
				className={cn("transition-all rounded-lg", {
					"bg-accent": isHighlighted,
				})}
			>
				<MightContainAnnotations annotations={annotations} text={text} />
			</span>
			<div className="invisible group-hover:visible transition-all text-xs text-muted-foreground flex gap-1">
				<span>{syllables}</span>
			</div>
		</div>
	);
};

function MightContainAnnotations({
	annotations,
	text,
}: {
	annotations?: string;
	text: string;
}) {
	if (!annotations)
		return (
			<span className="px-2 border border-transparent rounded-lg">{text}</span>
		);
	return (
		<Tooltip label={<div className="max-w-xs space-y-1">{annotations}</div>}>
			<span className="px-2 border border-border rounded-lg cursor-help">
				{text}
			</span>
		</Tooltip>
	);
}
