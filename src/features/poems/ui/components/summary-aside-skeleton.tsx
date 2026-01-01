export function SummaryAsideSkeleton() {
	return (
		<aside className="hidden lg:block overflow-y-auto h-full space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
			{/* Sección de contexto */}
			<section className="space-y-3">
				<div className="h-5 w-24 bg-muted/60 rounded animate-pulse" />
				<div className="space-y-2">
					<div className="h-4 w-full bg-muted/50 rounded animate-pulse" />
					<div className="h-4 w-5/6 bg-muted/50 rounded animate-pulse" />
					<div className="h-4 w-4/5 bg-muted/50 rounded animate-pulse" />
				</div>
			</section>
			{/* Sección de temáticas */}
			<section className="space-y-3">
				<div className="h-5 w-28 bg-muted/60 rounded animate-pulse" />
				<div className="flex flex-wrap gap-2">
					{Array.from({ length: 5 }, (_, i) => `skeleton-theme-${i}`).map(
						(id) => {
							const index = Number.parseInt(id.split("-").pop() || "0");
							return (
								<div
									key={id}
									className="h-6 bg-muted/50 rounded-full animate-pulse"
									style={{
										width: `${Math.random() * 40 + 60}px`,
										animationDelay: `${index * 75}ms`,
									}}
								/>
							);
						},
					)}
				</div>
			</section>
			{/* Sección de análisis */}
			<section className="space-y-3">
				<div className="h-5 w-32 bg-muted/60 rounded animate-pulse" />
				<div className="space-y-3">
					{Array.from({ length: 3 }, (_, i) => `skeleton-analysis-${i}`).map(
						(id) => {
							const index = Number.parseInt(id.split("-").pop() || "0");
							return (
								<div
									key={id}
									className="p-3 bg-muted/30 rounded-lg space-y-2 animate-pulse"
									style={{ animationDelay: `${index * 100}ms` }}
								>
									<div className="h-4 w-3/4 bg-muted/60 rounded" />
									<div className="h-3 w-full bg-muted/40 rounded" />
									<div className="h-3 w-5/6 bg-muted/40 rounded" />
								</div>
							);
						},
					)}
				</div>
			</section>{" "}
			{/* Figuras retóricas */}
			<section className="space-y-3">
				<div className="h-5 w-36 bg-muted/60 rounded animate-pulse" />
				<div className="space-y-2">
					{Array.from({ length: 4 }, (_, i) => `skeleton-figure-${i}`).map(
						(id, i) => (
							<div
								key={id}
								className="h-10 bg-muted/50 rounded-lg animate-pulse"
								style={{ animationDelay: `${i * 80}ms` }}
							/>
						),
					)}
				</div>
			</section>
		</aside>
	);
}
