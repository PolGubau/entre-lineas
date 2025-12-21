import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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
		<aside>
			<Link to="/" className="text-sm text-primary hover:underline">
				&larr; Volver al inicio
			</Link>

			<ul className="mt-4 space-y-2 max-md:hidden">
				<Input
					className="w-fit min-w-sm"
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
								className="hover:underline flex flex-col"
							>
								<span className="text-sm">{p.titulo}</span>
								<small className="text-xs text-muted-foreground">
									{p.autor}
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
