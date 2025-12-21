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
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Buscar poemas..."
				/>
				{filteredPoems?.map((p) => {
					return (
						<li key={p.id} className="py-2">
							<Link
								to="/poem/$poemId"
								params={{ poemId: p.id }}
								className="hover:underline"
							>
								{p.titulo} - {p.autor}
							</Link>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};
