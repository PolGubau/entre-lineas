import { Badge } from "~/shared/ui/badge";
import type { Poem } from "../domain/poem.types";

type Props = {
	context: Poem["contexto"];
	author: Poem["autor"];
};

export const PoemContextTable = ({ context, author }: Props) => {
	return (
		<article className="grid md:grid-cols-[1fr_3fr] gap-3 [&_span]:text-foreground/80 [&_strong]:font-normal">
			<strong>Año de Publicación:</strong>
			<span>{context.añoPublicacion}</span>

			<strong>Autor:</strong>
			<span>{author}</span>

			<strong>Movimiento:</strong>
			<span>{context.movimiento}</span>

			<strong>País:</strong>
			<span>{context.paisOrigen}</span>

			<strong>Época:</strong>
			<span>{context.epoca}</span>

			<strong>Influencias:</strong>
			<span>
				<ul className="space-x-1 flex flex-wrap">
					{context.influencias.map((influencia) => {
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
