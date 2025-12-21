import { useSuspenseQuery } from "@tanstack/react-query";
import type { Poem } from "../domain/poem.types";
import { poemsQueryOptions } from "../infra/api";

export function usePoemById(id: string) {
	const {
		data: poem,
		isLoading,
		error,
	} = useSuspenseQuery<Poem | undefined>(poemsQueryOptions.byId(id));
	return { poem, isLoading, error };
}
