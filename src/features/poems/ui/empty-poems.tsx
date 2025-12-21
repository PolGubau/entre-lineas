import { Search, Trash } from "lucide-react";
import { Button } from "~/shared/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "~/shared/ui/empty";

type EmptyProps = {
	setSearchQuery: (query: string) => void;
};
export const EmptyPoems = ({ setSearchQuery }: EmptyProps) => {
	return (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<Search />
				</EmptyMedia>
				<EmptyTitle>No se encontraron poemas</EmptyTitle>
				<EmptyDescription>Intenta con otra búsqueda o filtro.</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<div className="flex gap-2">
					<Button onClick={() => setSearchQuery("")}>
						<Trash />
						Borrar filtros
					</Button>
				</div>
			</EmptyContent>
		</Empty>
	);
};
