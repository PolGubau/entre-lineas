import { Search } from "lucide-react";
import type { RefObject } from "react";
import { useCallback } from "react";
import { Input } from "~/shared/ui/input";

interface SearchInputProps {
	searchInputRef?: RefObject<HTMLInputElement | null>;
	searchQuery: string;
	setSearchQuery: (query: string) => void;
}

/**
 * Input de búsqueda siempre visible con highlighting
 */
export function SearchInput({
	searchInputRef,
	searchQuery,
	setSearchQuery,
}: SearchInputProps) {
	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value;
			setSearchQuery(value);
		},
		[setSearchQuery],
	);

	return (
		<div className="animate-in fade-in slide-in-from-top-2 duration-300">
			<Input
				type="search"
				ref={searchInputRef}
				icon={
					<Search className="size-5 text-muted-foreground transition-colors duration-200 group-focus-within:text-primary" />
				}
				placeholder="Buscar por título, autor o tema..."
				value={searchQuery}
				onChange={handleChange}
				className="transition-all duration-200 hover:shadow-md focus:shadow-lg"
			/>
		</div>
	);
}
