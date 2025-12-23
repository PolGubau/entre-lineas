import type { Poem } from "~/features/poems/domain/poem.types";
import { PoemCard } from "./poem-card";

interface PoemGridProps {
	poems: Poem[];
	isFavorite: (poemId: string) => boolean;
}

export function PoemGrid({ poems, isFavorite }: PoemGridProps) {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
			{poems.map((poem) => (
				<PoemCard key={poem.id} poem={poem} isFavorite={isFavorite(poem.id)} />
			))}
		</ul>
	);
}
