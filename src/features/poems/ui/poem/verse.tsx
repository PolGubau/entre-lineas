import { cn } from "~/shared/lib/utils";

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
	annotations: _annotations,
}: Props) => {
	return (
		<div className="flex gap-3 group items-center">
			<small className="text-muted-foreground w-2 md:w-6 text-right text-xs">
				{number}
			</small>
			<span
				className={cn("transition-all rounded-lg px-2", {
					"bg-accent": isHighlighted,
				})}
			>
				{text}
			</span>
			<div className="invisible group-hover:visible transition-all text-xs text-muted-foreground flex gap-1">
				<span>{syllables}</span>
			</div>
		</div>
	);
};
