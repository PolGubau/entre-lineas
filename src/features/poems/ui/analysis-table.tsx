import { Badge } from "~/shared/ui/badge";
import type { Poem } from "../domain/poem.types";

type Props = {
	analysis: Poem["analysis"];
};

export const AnalysisTable = ({ analysis }: Props) => {
	return (
		<article className="grid md:grid-cols-[1fr_3fr] gap-3 [&_span]:text-foreground/80 [&_strong]:font-normal">
			<strong>Resumen:</strong>
			<span>{analysis.generalSummary}</span>

			<strong>Interpretación:</strong>
			<span>{analysis.interpretation}</span>

			<strong>Esquema:</strong>
			<span>{analysis.rhymeScheme}</span>

			<strong>Métrica:</strong>
			<span>{analysis.meter}</span>

			<strong>Tematica:</strong>
			<span>
				<ul className="space-x-1 flex flex-wrap">
					{analysis.themes.map((v) => {
						return (
							<li key={v}>
								<Badge variant={"outline"}>{v}</Badge>
							</li>
						);
					})}
				</ul>
			</span>

			<strong>Tono:</strong>
			<span>{analysis.tone}</span>
		</article>
	);
};
