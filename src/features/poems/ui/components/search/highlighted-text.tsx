/** biome-ignore-all lint/suspicious/noArrayIndexKey: Used in simple text splitting */
/**
 * Highlighting Component
 * Displays text with highlighted matches from search
 */

interface HighlightedTextProps {
	text: string;
	searchQuery?: string;
}

export function HighlightedText({ text, searchQuery }: HighlightedTextProps) {
	if (!searchQuery || !text) return <>{text}</>;

	const parts = text.split(new RegExp(`(${escapeRegex(searchQuery)})`, "gi"));

	return (
		<>
			{parts.map((part, index) => {
				const isMatch = part.toLowerCase() === searchQuery.toLowerCase();
				return isMatch ? (
					<mark
						key={index}
						className="bg-accent text-foreground rounded px-0.5"
					>
						{part}
					</mark>
				) : (
					<span key={index}>{part}</span>
				);
			})}
		</>
	);
}

function escapeRegex(str: string): string {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
