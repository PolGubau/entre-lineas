import { useMemo, useState } from "react";
import { useDebounce } from "~/shared/hooks/useDebounce";

export function useSearch(debounceMs = 200) {
	const [searchQuery, setSearchQuery] = useState("");
	const debouncedSearch = useDebounce(searchQuery, debounceMs);

	const filters = useMemo(
		() => (debouncedSearch ? { search: debouncedSearch } : undefined),
		[debouncedSearch],
	);

	return {
		searchQuery,
		setSearchQuery,
		filters,
	};
}
