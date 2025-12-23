import { AlertCircle, Home, RefreshCw } from "lucide-react";
import { Button } from "~/shared/ui/button";
 
interface PoemNotFoundProps {
	poemId: string;
	onRetry?: () => void;
}

export function PoemNotFound({ poemId, onRetry }: PoemNotFoundProps) {
	return (
		<div className="min-h-screen grid place-items-center px-4">
			<div className="max-w-md w-full space-y-6 text-center">
				<div className="flex justify-center">
					<div className="rounded-full bg-muted p-6">
						<AlertCircle className="size-12 text-muted-foreground" />
					</div>
				</div>

				<div className="space-y-2">
					<h1 className="text-3xl font-bold">Poema no encontrado</h1>
					<p className="text-muted-foreground">
						No pudimos encontrar el poema con ID{" "}
						<code className="px-2 py-1 bg-muted rounded text-sm">{poemId}</code>
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-3 justify-center">
					{onRetry && (
						<Button onClick={onRetry} variant="outline" className="gap-2">
							<RefreshCw className="size-4" />
							Reintentar
						</Button>
					)}
					<Button asChild>
						<a href="/" className="gap-2">
							<Home className="size-4" />
							Volver al inicio
						</a>
					</Button>
				</div>

				<div className="pt-6 border-t">
					<p className="text-sm text-muted-foreground">
						Explora nuestra colección de poemas desde la página principal
					</p>
				</div>
			</div>
		</div>
	);
}
