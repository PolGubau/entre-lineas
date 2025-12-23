import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useFavorites } from "~/features/poems/application/use-favorites";
import { usePoems } from "~/features/poems/application/use-poems";
import type { Poem } from "~/features/poems/domain/poem.types";
import { EmptyPoems } from "~/features/poems/ui/empty-poems";
import { useDebounce } from "~/shared/hooks/useDebounce";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "~/shared/ui/card";
import { Input } from "~/shared/ui/input";
import { Spinner } from "~/shared/ui/spinner";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const { favorites, isFavorite } = useFavorites();

	const debounced = useDebounce(searchQuery, 200);
	// Usar el hook con filtros - la lógica de filtrado está encapsulada en el hook
	const filters = useMemo(
		() => (debounced ? { search: debounced } : undefined),
		[debounced],
	);

	const { data: filteredPoems, isLoading } = usePoems(filters, favorites);

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
						<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
							{filteredPoems?.map((poem: Poem) => (
								<Link
									to="/poem/$poemId"
									params={{ poemId: poem.id }}
									key={poem.id}
									className="group"
								>
									<Card className="h-full hover:shadow-xl hover:scale-[0.99] transition-all duration-300 relative overflow-hidden border-2 hover:border-primary/20">
										{/* Gradient background sutil */}
										<div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										
										{isFavorite(poem.id) && (
											<div className="absolute top-3 right-3 z-10 text-red-500 animate-in fade-in zoom-in duration-300">
												<Heart className="size-5 fill-current drop-shadow-sm" />
											</div>
										)}
										
										<CardHeader className="relative">
											<CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
												{poem.title}
											</CardTitle>
											<CardDescription className="flex items-center gap-2">
												<span className="font-medium">{poem.author}</span>
												<span className="text-xs opacity-60">•</span>
												<span className="text-xs">{poem.context.publicationYear}</span>
											</CardDescription>
										</CardHeader>
										
										<CardContent className="space-y-3 text-sm text-muted-foreground relative">
											<p className="line-clamp-3 leading-relaxed">
												{poem.shortDescription}
											</p>
											
											<div className="pt-2 flex items-center gap-2">
												<span className="text-xs px-2 py-1 rounded-md bg-secondary/50 font-medium">
													{poem.context.movement}
												</span>
											</div>
											
											<ul className="flex flex-wrap gap-1.5">
												{poem.analysis.themes
													.slice(0, 3)
													.map((tema: string) => (
														<li
															key={tema}
															className="px-2.5 py-1 text-xs rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-foreground/80 border border-primary/10"
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
