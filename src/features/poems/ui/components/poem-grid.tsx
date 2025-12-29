import type { Poem } from "~/features/poems/domain/poem.types";
import { PoemCard } from "./poem-card";

interface PoemGridProps {
	poems: Poem[];
	isFavorite: (poemId: string) => boolean;
}

export function PoemGrid({ poems, isFavorite }: PoemGridProps) {
	return (
		<ul
			className="grid grid-cols-[repeat(auto-fit,minmax(600px,1fr))] 
		gap-3"
		>
			{poems.map((poem) => (
				<PoemCard key={poem.id} poem={poem} isFavorite={isFavorite(poem.id)} />
			))}
		</ul>
	);
}
