import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import type { Poem } from "~/features/poems/domain/poem.types";
import { poemsQueryOptions } from "~/features/poems/infra/api";
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

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const { data: poems } = useSuspenseQuery<Poem[]>(poemsQueryOptions.all());
	const [searchQuery, setSearchQuery] = useState("");

	const filteredPoems = poems.filter(
		(poem: Poem) =>
			poem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			poem.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
			poem.analysis.tematica.some((t: string) =>
				t.toLowerCase().includes(searchQuery.toLowerCase()),
			),
	);

	return (
		<section className="h-full grid grid-cols-[1fr_3fr] gap-6 px-4 sm:px-6 lg:px-8 pt-10 pb-16">
			{/* Hero Section */}

			<aside className="space-y-8">
				<header className="space-y-6">
					<h1 className="text-3xl poem md:text-5xl font-bold tracking-tight">
						Entre líneas
					</h1>
					<p className="text-muted-foreground max-w-lg text-balance">
						Descubre figuras retóricas, contexto histórico y análisis detallado
						de cada verso
					</p>
				</header>

				<Input
					type="text"
					icon={<Search className="size-5 text-muted-foreground" />}
					placeholder="Buscar por título, autor o tema..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</aside>

			{/* Poems Grid */}
			<section className="">
				<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredPoems.map((poem: Poem) => (
						<Link to="/poem/$poemId" params={{ poemId: poem.id }} key={poem.id}>
							<Card className="hover:bg-primary/2 hover:shadow-lg transition-all">
								<CardHeader>
									<CardTitle>{poem.title}</CardTitle>
									<CardDescription>{poem.author}</CardDescription>
									<CardAction>
										<span>{poem.context.añoPublicacion}</span>
									</CardAction>
								</CardHeader>
								<CardContent className="space-y-4 text-sm text-muted-foreground">
									<p className="line-clamp-3">{poem.shortDescription}</p>
									<span className="text-xs">{poem.context.movimiento}</span>
								</CardContent>
								<CardFooter>
 									<ul className="flex flex-wrap gap-2">
										{poem.analysis.tematica.slice(0, 3).map((tema: string) => (
											<li
												key={tema}
												className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
											>
												{tema}
											</li>
										))}
									</ul>
								</CardFooter>
							</Card>
						</Link>
					))}
				</ul>

				{filteredPoems.length === 0 && (
					<div className="text-center py-20">
						<p className="text-neutral-500 dark:text-neutral-400">
							No se encontraron poemas
						</p>
					</div>
				)}
			</section>
		</section>
	);
}
