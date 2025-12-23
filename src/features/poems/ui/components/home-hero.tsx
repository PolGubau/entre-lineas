import { Search } from "lucide-react";
import { Input } from "~/shared/ui/input";

interface HomeHeroProps {
	searchQuery: string;
	onSearchChange: (value: string) => void;
}

export function HomeHero({ searchQuery, onSearchChange }: HomeHeroProps) {
	return (
		<aside className="space-y-4 md:space-y-8 overflow-y-auto">
			<header className="space-y-2 md:space-y-6">
				<h1 className="text-2xl poem md:text-5xl font-bold tracking-tight">
					Entre líneas
				</h1>
				<p className="text-muted-foreground max-w-lg text-balance text-sm md:text-md">
					Descubre figuras retóricas, contexto histórico y análisis detallado de
					cada verso
				</p>
			</header>
			<Input
				type="search"
				icon={<Search className="size-5 text-muted-foreground" />}
				placeholder="Buscar por título, autor o tema..."
				value={searchQuery}
				onChange={(e) => onSearchChange(e.target.value)}
			/>
		</aside>
	);
}
