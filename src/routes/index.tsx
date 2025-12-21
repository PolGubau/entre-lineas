import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { usePoems } from "~/features/poems/application/use-poems";
import type { Poem } from "~/features/poems/domain/poem.types";
import { EmptyPoems } from "~/features/poems/ui/empty-poems";
import { useDebounce } from "~/shared/hooks/useDebounce";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/shared/ui/card";
import { Input } from "~/shared/ui/input";
import { Spinner } from "~/shared/ui/spinner";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const [searchQuery, setSearchQuery] = useState("");

	const debounced = useDebounce(searchQuery, 200);
	// Usar el hook con filtros - la lógica de filtrado está encapsulada en el hook
	const filters = useMemo(
		() => (debounced ? { search: debounced } : undefined),
		[debounced],
	);

	const { data: filteredPoems, isLoading } = usePoems(filters);

	return (
		<section className="relative grid md:grid-cols-[1fr_3fr] gap-10 md:gap-6 px-3 sm:px-6 lg:px-8 pt-6 md:pt-10 h-screen">
			{/* Hero Section */}

			<aside className="space-y-4 md:space-y-8 overflow-y-auto">
				<header className="space-y-2 md:space-y-6">
					<h1 className="text-2xl poem md:text-5xl font-bold tracking-tight">
						Entre líneas
					</h1>
					<p className="text-muted-foreground max-w-lg text-balance text-sm md:text-md">
						Descubre figuras retóricas, contexto histórico y análisis detallado
						de cada verso
					</p>
				</header>
 					<Input
						type="search"
						icon={<Search className="size-5 text-muted-foreground" />}
						placeholder="Buscar por título, autor o tema..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						/>
 			</aside>

			<section className="h-full pb-16 overflow-y-auto">
				{isLoading ? (
					<article className="grid items-center justify-center h-full gap-2 text-muted-foreground">
						<div className="flex flex-col items-center gap-2">
							<Spinner />
							Cargando...
						</div>
					</article>
				) : (
					<>
						<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
							{filteredPoems?.map((poem: Poem) => (
								<Link
									to="/poem/$poemId"
									params={{ poemId: poem.id }}
									key={poem.id}
								>
									<Card className="hover:bg-primary/2 hover:shadow-lg transition-all">
										<CardHeader>
											<CardTitle>{poem.title}</CardTitle>
											<CardDescription>{poem.author} - { poem.context.publicationYear}</CardDescription>
											
										</CardHeader>
										<CardContent className="space-y-4 text-sm text-muted-foreground">
											<p className="line-clamp-3">{poem.shortDescription}</p>
											<span className="text-xs">{poem.context.movement}</span>
											<ul className="flex flex-wrap gap-2 pt-2 -ml-1">
												{poem.analysis.themes
													.slice(0, 3)
													.map((tema: string) => (
														<li
															key={tema}
															className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
														>
															{tema}
														</li>
													))}
											</ul>
										</CardContent>
								 
									</Card>
								</Link>
							))}
						</ul>

						{filteredPoems && filteredPoems.length === 0 && (
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
