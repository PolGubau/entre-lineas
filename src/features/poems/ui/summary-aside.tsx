import { ChevronDown, ZoomIn } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/shared/ui/accordion";
import { Button } from "~/shared/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "~/shared/ui/collapsible";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "~/shared/ui/item";
import type { FiguraRetoricaEnPoem, Poem } from "../domain/poem.types";
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
		<aside>
			<ul className="space-y-2">
				{poem.contexto.movimiento && (
					<Item variant={"muted"}>
						<ItemContent>
							<ItemTitle>Contexto</ItemTitle>
							<ItemDescription className="space-y-4">
								<p>{poem.contexto.contextoSocial}</p>

								<PoemContextTable context={poem.contexto} author={poem.autor} />
							</ItemDescription>
						</ItemContent>
					</Item>
				)}
				{poem.figurasRetoricas.length > 0 && (
					<Item variant={"muted"}>
						<ItemContent>
							<ItemTitle>Figuras Retóricas</ItemTitle>
							<ItemDescription>
								<Accordion
									type="single"
									collapsible
									onValueChange={(v) => {
										const figura = poem.figurasRetoricas.find(
											(fig) => fig.id === v,
										);
										setOpenFigure(figura ?? null);
									}}
									value={openFigure?.id ?? undefined}
								>
									{poem.figurasRetoricas.map((figura) => (
										<AccordionItem value={figura.id} key={figura.id}>
											<AccordionTrigger>
												<span className="capitalize text-foreground">
													{figura.id}
												</span>
											</AccordionTrigger>
											<AccordionContent className="flex flex-col gap-6">
												<FigureDescription
													figureId={figura.id}
													contextual={figura.descripcionContextual}
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
			</ul>
		</aside>
	);
};
