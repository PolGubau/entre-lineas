import type { Poem } from "../../domain/poem.types";
import { Verse } from "./verse";

type Props = {
	poem: Poem;
	highlightedVersesIds?: string[];
	onVerseAnnotationClick?: (
		verseNumber: number,
		text: string,
		annotation: string,
	) => void;
	isReadingMode?: boolean;
};

export const PoemSection = ({
	poem,
	highlightedVersesIds,
	onVerseAnnotationClick,
	isReadingMode = false,
}: Props) => {
	return (
		<section className="space-y-14 poem overflow-y-auto h-full">
			<header className="flex flex-col">
				<h1 className="text-xl font-bold text-balance">{poem.title}</h1>
				<p className="text-muted-foreground">{poem.author}</p>
			</header>
			<article className="flex flex-col gap-5">
				{poem.estrofas.map((estrofa) => (
					<div className="grid grid-cols-[20px_1fr] gap-2" key={estrofa.id}>
						<small className="text-muted-foreground">{estrofa.number}</small>
						<div className="whitespace-pre-line flex flex-col">
							{estrofa.verses.map((verso) => {
								const isHighlighted =
									highlightedVersesIds?.includes(verso.id) ?? false;
								return (
									<Verse
										annotations={verso.annotation}
										key={verso.id}
										number={verso.number}
										text={verso.text}
										isHighlighted={isHighlighted}
										syllables={verso.syllables}
										onAnnotationClick={onVerseAnnotationClick}
										isReadingMode={isReadingMode}
									/>
								);
							})}
						</div>
					</div>
				))}
			</article>
		</section>
	);
};
