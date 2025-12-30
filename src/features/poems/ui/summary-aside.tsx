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

// Helper para extraer el número de verso de un verseId
const getVerseNumber = (verseId: string): number => {
	return Number.parseInt(verseId.split("-v")[1] || "0");
};

// Helper para ordenar figuras por aparición en el poema
const sortFiguresByVerseOrder = (
	figures: FiguraRetoricaEnPoem[],
): FiguraRetoricaEnPoem[] => {
	return [...figures].sort((a, b) => {
		const verseA = getVerseNumber(a.verseIds[0] || "");
		const verseB = getVerseNumber(b.verseIds[0] || "");
		return verseA - verseB;
	});
};

type RhetoricalFiguresAccordionProps = {
	poem: Poem;
	openFigure: FiguraRetoricaEnPoem | null;
	setOpenFigure: (figura: FiguraRetoricaEnPoem | null) => void;
};

const RhetoricalFiguresAccordion = ({
	poem,
	openFigure,
	setOpenFigure,
}: RhetoricalFiguresAccordionProps) => {
	const sortedFigures = sortFiguresByVerseOrder(poem.rhetoricalFigures);

	const handleValueChange = (value: string) => {
		if (!value) {
			setOpenFigure(null);
			return;
		}
		const index = Number.parseInt(value);
		setOpenFigure(sortedFigures[index] ?? null);
	};

	const currentValue = openFigure
		? String(sortedFigures.indexOf(openFigure))
		: undefined;

	return (
		<Accordion
			type="single"
			collapsible
			onValueChange={handleValueChange}
			value={currentValue}
		>
			{sortedFigures.map((figura, index) => {
				const sameTypeBefore = sortedFigures
					.slice(0, index)
					.filter((f) => f.id === figura.id).length;
				const totalSameType = sortedFigures.filter(
					(f) => f.id === figura.id,
				).length;

				const displayName =
					totalSameType > 1
						? `${figura.id} (${sameTypeBefore + 1}/${totalSameType})`
						: figura.id;

				const uniqueKey = `${figura.id}-${index}-${figura.verseIds[0]}`;

				return (
					<AccordionItem value={String(index)} key={uniqueKey}>
						<AccordionTrigger>
							<span className="capitalize text-foreground text-sm font-normal">
								{displayName}
							</span>
						</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-6">
							<FigureDescription
								figureId={figura.id}
								contextual={figura.contextualDescription}
							/>
						</AccordionContent>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
};

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
		<aside className="space-y-2 overflow-y-auto h-full p-1">
			<Item variant={"muted"}>
				<ItemContent>
					<ItemTitle>Resumen</ItemTitle>
					<ItemDescription>{poem.shortDescription}</ItemDescription>
				</ItemContent>
			</Item>

			<Item variant={"muted"} className="p-0">
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

			<Item variant={"muted"} className="p-0">
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
							<RhetoricalFiguresAccordion
								poem={poem}
								openFigure={openFigure}
								setOpenFigure={setOpenFigure}
							/>
						</ItemDescription>
					</ItemContent>
					<ItemActions />
				</Item>
			)}
		</aside>
	);
};
