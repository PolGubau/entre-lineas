import { Badge } from "~/shared/ui/badge";
import type { Poem } from "../domain/poem.types";

type Props = {
	context: Poem["context"];
	author: Poem["author"];
};

export const PoemContextTable = ({ context, author }: Props) => {
	return (
		<article className="grid md:grid-cols-[1fr_3fr] gap-3 [&_span]:text-foreground/80 [&_strong]:font-normal">
			<strong>Año de Publicación:</strong>
			<span>{context.publicationYear}</span>

			<strong>Autor:</strong>
			<span>{author}</span>

			<strong>Movimiento:</strong>
			<span>{context.movement}</span>

			<strong>País:</strong>
			<span>{context.originCountry}</span>

			<strong>Época:</strong>
			<span>{context.era}</span>

			<strong>Influencias:</strong>
			<span>
				<ul className="space-x-1 flex flex-wrap">
					{context.influences.map((influencia) => {
						return (
							<li key={influencia}>
								<Badge variant={"outline"}>{influencia}</Badge>
							</li>
						);
					})}
				</ul>
			</span>
		</article>
	);
};
