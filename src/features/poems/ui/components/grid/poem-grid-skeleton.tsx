import { LoaderCircle } from "lucide-react";

export function PoemGridLoader() {
	return (
		// <ul className="grid grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-3">
		// 	{Array.from({ length: 20 }, (_, i) => `skeleton-${i}`).map((id) => (
		// 		<PoemCardSkeleton key={id} />
		// 	))}
		// </ul>
		<section className="flex flex-col gap-2 justify-center items-center mt-[20vh]">
			<LoaderCircle className="size-6 text-foreground/70 animate-spin" />
			<span className="text-sm text-muted-foreground">Loading poems...</span>
		</section>
	);
}
