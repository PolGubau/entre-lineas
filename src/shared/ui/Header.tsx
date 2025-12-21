import { Link } from "@tanstack/react-router";
import { Album } from "lucide-react";

export default function Header() {
	return (
		<header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
			<Link
				to="/"
				className="flex items-center gap-3 hover:opacity-80 transition-opacity"
			>
				<Album className="size-5" />
				<h1 className="text-xl poem font-bold text-foreground">Entre Líneas</h1>
			</Link>

			<nav className="hidden md:flex items-center gap-6 text-sm">
				<Link
					to="/"
					className="text-foreground-muted hover:text-foreground/80 transition-colors"
					activeProps={{
						className: "text-foreground font-medium",
					}}
				>
					Inicio
				</Link>
			</nav>
		</header>
	);
}
