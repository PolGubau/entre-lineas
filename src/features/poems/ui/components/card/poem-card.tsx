import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Poem } from "~/features/poems/domain/poem.types";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/shared/ui/card";
import { Ripple } from "~/shared/ui/ripple/ripple";

interface PoemCardProps {
	poem: Poem;
	isFavorite: boolean;
}

export function PoemCard({ poem, isFavorite }: PoemCardProps) {
	return (
		<Link
			to="/poem/$poemId"
			preload="viewport"
			params={{ poemId: poem.id }}
			className="group animate-in fade-in slide-in-from-bottom-4 duration-500"
		>
			<Card className="h-full hover:shadow-xl hover:scale-[0.99] transition-all duration-300 relative overflow-hidden border-2 hover:border-primary/20">
				{/* Gradient background sutil */}
				<div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				<Ripple />

				{isFavorite && (
					<div className="absolute top-3 right-3 z-10 text-red-500 animate-in fade-in zoom-in duration-300">
						<Heart className="size-5 drop-shadow-sm" />
					</div>
				)}

				<CardHeader className="relative">
					<CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
						{poem.title}
					</CardTitle>
					<CardDescription className="flex items-center gap-2">
						<span className="font-medium">{poem.author}</span>
						<span className="text-xs opacity-60">•</span>
						<span className="text-xs">
							{poem.context.publicationDate.getFullYear()}
						</span>
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-3 text-sm text-muted-foreground relative">
					<p className="line-clamp-3 leading-relaxed">
						{poem.shortDescription}
					</p>

					<div className="pt-2 flex items-center gap-2">
						<span className="text-xs px-2 py-1 rounded-md bg-secondary/50 font-medium">
							{poem.context.movement}
						</span>
					</div>

					<ul className="flex flex-wrap gap-1.5">
						{poem.analysis.themes.slice(0, 3).map((tema: string) => (
							<li
								key={tema}
								className="px-2.5 py-1 text-xs rounded-full bg-linear-to-r from-primary/10 to-primary/5 text-foreground/80 border border-primary/10"
							>
								{tema}
							</li>
						))}
					</ul>
				</CardContent>
			</Card>
		</Link>
	);
}
