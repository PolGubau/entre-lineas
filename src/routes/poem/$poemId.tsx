import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { usePoemById } from "~/features/poems/application/use-poem-by-id";
import type { FiguraRetoricaEnPoem } from "~/features/poems/domain/poem.types";
import { PoemContextTable } from "~/features/poems/ui/context-table";
import { PoemSummaryAside } from "~/features/poems/ui/summary-aside";
import { cn } from "~/shared/lib/utils";
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
import { Spinner } from "~/shared/ui/spinner";

export const Route = createFileRoute("/poem/$poemId")({
	// In a loader
	loader: ({ params }) => console.log(params.poemId),
	// Or in a component
	component: PostComponent,
});

function PostComponent() {
	const [openFigure, setOpenFigure] = useState<FiguraRetoricaEnPoem | null>(
		null,
	);

	const { poemId } = Route.useParams();
	const { poem, isLoading, error } = usePoemById(poemId);
	if (isLoading)
		return (
			<section className="gap-2 grid justify-center items-center">
				<Spinner />
				Loading...
			</section>
		);
	if (error || !poem) return <div>Error loading poem.</div>;

	return (
		<main className="h-full grid md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 pt-10 pb-16">
			<aside>
				<Link to="/" className="text-sm text-primary hover:underline">
					&larr; Volver al inicio
				</Link>
			</aside>

			<section className="space-y-14 poem">
				<header className="flex flex-col">
					<h1 className="text-xl font-bold">{poem.titulo}</h1>
					<p className="text-muted-foreground">{poem.autor}</p>
				</header>
				<article className="flex flex-col gap-5">
					{poem.estrofas.map((estrofa) => (
						<div className="grid grid-cols-[20px_1fr] gap-2" key={estrofa.id}>
							<small className="text-muted-foreground">{estrofa.numero}</small>
							<div className="whitespace-pre-line">
								{estrofa.versos.map((verso) => {
									const isHighlighted = openFigure?.versosIds.includes(
										verso.id,
									);
									return (
										<p key={verso.id} className="flex gap-3">
											<small className="text-muted-foreground w-6 text-right">
												{verso.numero}
											</small>
											<span
												className={cn("transition-all rounded-lg px-2", {
													"bg-amber-400": isHighlighted,
												})}
											>
												{verso.texto}
											</span>
										</p>
									);
								})}
							</div>
						</div>
					))}
				</article>
			</section>
			<PoemSummaryAside
				openFigure={openFigure}
				poem={poem}
				setOpenFigure={setOpenFigure}
			/>
		</main>
	);
}
