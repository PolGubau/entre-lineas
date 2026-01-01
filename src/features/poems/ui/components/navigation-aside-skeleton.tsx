export function NavigationAsideSkeleton() {
	return (
		<aside className="overflow-y-auto h-full animate-in fade-in duration-300">
			{/* Botón volver */}
			<div className="h-5 w-32 bg-muted/50 rounded animate-pulse mb-4" />

			{/* Lista de poemas */}
			<ul className="mt-4 space-y-2">
				{/* Input de búsqueda */}
				<div className="h-9 w-full bg-muted/50 rounded-lg animate-pulse mb-3" />

				{/* Items de navegación */}
				{Array.from({ length: 8 }, (_, i) => `skeleton-nav-${i}`).map(
					(id, i) => (
						<li key={id} className="py-1">
							<div className="space-y-1.5 border-l border-transparent pl-0">
								<div
									className="h-4 bg-muted/60 rounded animate-pulse"
									style={{
										width: `${Math.random() * 30 + 60}%`,
										animationDelay: `${i * 50}ms`,
									}}
								/>
								<div
									className="h-3 bg-muted/40 rounded animate-pulse"
									style={{
										width: `${Math.random() * 20 + 40}%`,
										animationDelay: `${i * 50 + 25}ms`,
									}}
								/>
							</div>
						</li>
					),
				)}
			</ul>
		</aside>
	);
}
