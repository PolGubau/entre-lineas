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
		<aside className="space-y-2 overflow-y-auto h-full">
			<Item variant={"muted"}>
				<ItemContent>
					<ItemTitle>Resumen </ItemTitle>
					<ItemDescription>{poem.shortDescription}</ItemDescription>
				</ItemContent>
			</Item>

			<Item variant={"muted"} className="p-0 ">
				<ItemContent>
					<Accordion defaultValue={"context"} type="single" collapsible>
						<AccordionItem value="context">
							<AccordionTrigger className="p-3">Contexto </AccordionTrigger>
							<AccordionContent className="flex flex-col gap-6 p-3">
								<p>{poem.context.socialContext}</p>
								<PoemContextTable context={poem.context} author={poem.author} />
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</ItemContent>
			</Item>

			<Item variant={"muted"} className="p-0 ">
				<ItemContent>
					<Accordion type="single" collapsible>
						<AccordionItem value="analysis">
							<AccordionTrigger className="p-3">Análisis </AccordionTrigger>
							<AccordionContent className="flex flex-col gap-6 p-3">
								<AnalysisTable analysis={poem.analysis} />
							</AccordionContent>
						</AccordionItem>
					</Accordion>
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
										<AccordionTrigger className="">
											<span className="capitalize text-foreground text-sm font-normal">
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
