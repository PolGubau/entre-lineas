/** biome-ignore-all lint/suspicious/noArrayIndexKey: Static so ok */
import { Skeleton } from "~/shared/ui/skeleton";

export function PoemSkeleton() {
	return (
		<section className="space-y-14 poem overflow-y-auto h-full">
			<header className="flex flex-col gap-2">
				<Skeleton className="h-7 w-3/4" />
				<Skeleton className="h-5 w-1/2" />
			</header>
			<article className="flex flex-col gap-5">
				{Array.from({ length: 4 }).map((_, i) => (
					<div className="grid grid-cols-[20px_1fr] gap-2" key={`stanza-${i}`}>
						<Skeleton className="h-4 w-4" />
						<div className="flex flex-col gap-2">
							{Array.from({ length: 4 }).map((_, j) => (
								<Skeleton
									key={`verse-${i}-${j}`}
									className="h-4"
									style={{ width: `${Math.random() * 40 + 60}%` }}
								/>
							))}
						</div>
					</div>
				))}
			</article>
		</section>
	);
}
