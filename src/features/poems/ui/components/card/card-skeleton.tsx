import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/shared/ui/card";

export function PoemCardSkeleton() {
	return (
		<div className="group animate-in fade-in slide-in-from-bottom-4 duration-500 pointer-events-none">
			<Card className="h-full transition-all duration-300 relative overflow-hidden border-2 hover:border-primary/20">
				{/* Gradient background sutil */}
				<div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

				<CardHeader className="relative">
					<CardTitle className="group-hover:text-primary transition-colors line-clamp-2 skeleton">
						lorem ipsum dolor sit amet
					</CardTitle>
					<CardDescription className="flex items-center gap-2">
						<span className="font-medium skeleton">author name</span>
						<span className="text-xs opacity-60">•</span>
						<span className="text-xs skeleton">2024</span>
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-3 text-sm text-muted-foreground relative">
					<p className="line-clamp-3 leading-relaxed skeleton">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
						alias hic blan ditisseque, odit molestiae quas? Lorem ipsum dolor
						sit, amet.
					</p>

					<div className="pt-2 flex items-center gap-2">
						<span className="text-xs px-2 py-1 rounded-md bg-secondary/50 font-medium skeleton">
							Movement Name
						</span>
					</div>

					<ul className="flex flex-wrap gap-1.5">
						{["Theme 1", "Theme 2", "Theme 3"].map((tema: string) => (
							<li
								key={tema}
								className="px-2.5 py-1 text-xs rounded-full bg-linear-to-r from-primary/10 to-primary/5 text-foreground/80 border border-primary/10 skeleton"
							>
								{tema}
							</li>
						))}
					</ul>
				</CardContent>
			</Card>
		</div>
	);
}
