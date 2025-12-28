import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { cn } from "~/shared/lib/utils";
import { Input } from "~/shared/ui/input";
import { usePoems } from "../application/use-poems";


export const NavigationAside = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const filters = useMemo(
		() => (searchQuery ? { search: searchQuery } : undefined),
		[searchQuery],
	);

	const { data: filteredPoems } = usePoems(filters);
	return (
		<aside className="overflow-y-auto h-full">
			<Link to="/" className="text-sm text-primary hover:underline">
				&larr; Volver al inicio
			</Link>

			<ul className="mt-4 space-y-2 max-md:hidden">
				<Input
					type="search"
					className="w-full py-1.5 px-3 rounded-lg max-w-sm"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Buscar poemas..."
				/>
				{filteredPoems?.map((p) => {
					return (
						<li key={p.id} className="py-1">
							<Link
								to="/poem/$poemId"
								params={{ poemId: p.id }}
								activeProps={{
									className: "border-l-accent pl-2",
								}}
								className={cn(
									"hover:underline flex flex-col border-l border-transparent transition-all",
								)}
							>
								<span className="text-sm text-balance">{p.title}</span>
								<small className="text-xs text-muted-foreground text-pretty">
									{p.author}
								</small>
							</Link>
						</li>
					);
				})}
				{filteredPoems && filteredPoems.length === 0 && (
					<li className="text-sm text-muted-foreground text-balance max-w-sm">
						No se encontraron poemas que coincidan con tu búsqueda.
					</li>
				)}
			</ul>
		</aside>
	);
};
