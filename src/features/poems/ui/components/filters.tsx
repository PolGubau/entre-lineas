import { Search, User } from "lucide-react";
import type { RefObject } from "react";
import { Input } from "~/shared/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/shared/ui/select";
import { useAuthors } from "../../application/use-poems";

interface FiltersProps {
	searchQuery: string;
	onSearchChange: (value: string) => void;
	selectedAuthor: string | null;
	onAuthorChange: (value: string | null) => void;
	searchInputRef?: RefObject<HTMLInputElement | null>;
}

/**
 * Componente de filtros para poemas
 * Incluye búsqueda general y selector de autor
 */
export function Filters({
	searchQuery,
	onSearchChange,
	selectedAuthor,
	onAuthorChange,
	searchInputRef,
}: FiltersProps) {
	const { data: authors } = useAuthors();

	return (
		<div className="space-y-3">
			<Input
				type="search"
				ref={searchInputRef}
				icon={<Search className="size-5 text-muted-foreground" />}
				placeholder="Buscar por título, autor o tema..."
				value={searchQuery}
				onChange={(e) => onSearchChange(e.target.value)}
			/>

			<Select
				value={selectedAuthor ?? "all"}
				onValueChange={(value) =>
					onAuthorChange(value === "all" ? null : value)
				}
			>
				<SelectTrigger className="w-full">
					<div className="flex items-center gap-2">
						<User className="size-4 text-muted-foreground" />
						<SelectValue placeholder="Todos los autores" />
					</div>
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">Todos los autores</SelectItem>
					{authors?.map((author) => (
						<SelectItem key={author} value={author}>
							{author}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
