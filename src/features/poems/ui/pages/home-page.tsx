import { useFavorites } from "~/features/poems/application/use-favorites";
import { usePoems } from "~/features/poems/application/use-poems";
import { useSearch } from "~/features/poems/application/use-search";
import { EmptyPoems } from "~/features/poems/ui/empty-poems";
import { HomeHero } from "../components/home-hero";
import { LoadingState } from "../components/loading-state";
import { PoemGrid } from "../components/poem-grid";

export function HomePage() {
	const { searchQuery, setSearchQuery, filters } = useSearch();
	const { favorites, isFavorite } = useFavorites();
	const { data: filteredPoems, isLoading } = usePoems(filters, favorites);

	return (
		<section className="relative grid md:grid-cols-[1fr_3fr] gap-10 md:gap-6 px-3 sm:px-6 lg:px-8 pt-6 md:pt-10 h-screen">
			<HomeHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

			<section className="h-full pb-16 overflow-y-auto">
				{isLoading ? (
					<LoadingState />
				) : (
					<>
						{filteredPoems && filteredPoems.length > 0 ? (
							<PoemGrid poems={filteredPoems} isFavorite={isFavorite} />
						) : (
							<div className="grid items-center justify-center h-full">
								<EmptyPoems setSearchQuery={setSearchQuery} />
							</div>
						)}
					</>
				)}
			</section>
		</section>
	);
}
