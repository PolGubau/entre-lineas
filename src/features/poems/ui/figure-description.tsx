import { getFiguraById } from "~/data/figuras-retoricas.data";

type Props = {
	figureId: string;
	contextual?: string;
};

export const FigureDescription = ({ figureId, contextual }: Props) => {
	const figura = getFiguraById(figureId);
	return (
		<article className="grid md:grid-cols-[1fr_3fr] gap-3 [&_span]:text-foreground/80 [&_strong]:font-normal">
			{contextual && (
				<>
					<strong>En este poema:</strong>
					<span>{contextual}</span>
				</>
			)}
			<strong>Definición:</strong>
			<span> {figura?.definicionGeneral}</span>
			<strong>Ejemplo:</strong>
			<span>
				<pre className="bg-neutral-200 px-3 py-1 rounded-lg w-fit">
					{figura?.ejemplo}
				</pre>
			</span>
		</article>
	);
};
