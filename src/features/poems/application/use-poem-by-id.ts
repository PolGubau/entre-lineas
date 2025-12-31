import { useQuery } from "@tanstack/react-query";
import type { Poem } from "../domain/poem.types";
import { poemsQueryOptions } from "../infra/api";

type UsePoemByIdResult = {
	poem: Poem | undefined;
	isLoading: boolean;
	error: unknown;
};

export function usePoemById(id: string): UsePoemByIdResult {
	const {
		data: poem,
		isLoading,
		error,
	} = useQuery<Poem | undefined>(poemsQueryOptions.byId(id));
	return { poem, isLoading, error };
}
