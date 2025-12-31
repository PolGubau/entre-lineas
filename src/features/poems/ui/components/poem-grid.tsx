import type { Poem } from "~/features/poems/domain/poem.types";
import { PoemCard } from "./poem-card";

interface PoemGridProps {
	poems: Poem[];
	isFavorite: (poemId: string) => boolean;
}

export function PoemGrid({ poems, isFavorite }: PoemGridProps) {
	return (
		<ul
			className="grid grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-3"
			key={poems.map((p) => p.id).join("-")} // Force re-render on sort change
		>
			{poems.map((poem, index) => (
				<li
					key={poem.id}
					className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
					style={{ animationDelay: `${index * 50}ms` }}
				>
					<PoemCard poem={poem} isFavorite={isFavorite(poem.id)} />
				</li>
			))}
		</ul>
	);
}
