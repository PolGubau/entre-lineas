import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/shared/ui/accordion";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "~/shared/ui/item";
import type { FiguraRetoricaEnPoem, Poem } from "../domain/poem.types";
import { AnalysisTable } from "./analysis-table";
import { PoemContextTable } from "./context-table";
import { FigureDescription } from "./figure-description";

type Props = {
	poem: Poem;
	openFigure: FiguraRetoricaEnPoem | null;
	setOpenFigure: (figura: FiguraRetoricaEnPoem | null) => void;
};

export const PoemSummaryAside = ({
	poem,
	openFigure,
	setOpenFigure,
}: Props) => {
	return (
		<aside className="space-y-2">
			<Item variant={"muted"}>
				<ItemContent>
					<ItemTitle>Resumen </ItemTitle>
					<ItemDescription className="space-y-4">
						<p>{poem.shortDescription}</p>
					</ItemDescription>
				</ItemContent>
			</Item>
			<Item variant={"muted"}>
				<ItemContent>
					<ItemTitle>Contexto</ItemTitle>
					<ItemDescription className="space-y-4">
						<p>{poem.context.socialContext}</p>

						<PoemContextTable context={poem.context} author={poem.author} />
					</ItemDescription>
				</ItemContent>
			</Item>
			<Item variant={"muted"}>
				<ItemContent>
					<ItemTitle>Análisis</ItemTitle>
					<ItemDescription className="space-y-4">
						<AnalysisTable analysis={poem.analysis} />
					</ItemDescription>
				</ItemContent>
			</Item>

			{poem.rhetoricalFigures.length > 0 && (
				<Item variant={"muted"}>
					<ItemContent>
						<ItemTitle>Figuras Retóricas</ItemTitle>
						<ItemDescription>
							<Accordion
								type="single"
								collapsible
								onValueChange={(v) => {
									const figura = poem.rhetoricalFigures.find(
										(fig) => fig.id === v,
									);
									setOpenFigure(figura ?? null);
								}}
								value={openFigure?.id ?? undefined}
							>
								{poem.rhetoricalFigures.map((figura) => (
									<AccordionItem value={figura.id} key={figura.id}>
										<AccordionTrigger>
											<span className="capitalize text-foreground">
												{figura.id}
											</span>
										</AccordionTrigger>
										<AccordionContent className="flex flex-col gap-6">
											<FigureDescription
												figureId={figura.id}
												contextual={figura.contextualDescription}
											/>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</ItemDescription>
					</ItemContent>
					<ItemActions />
				</Item>
			)}
		</aside>
	);
};
