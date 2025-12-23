import { Spinner } from "~/shared/ui/spinner";

export function LoadingState() {
	return (
		<article className="grid items-center justify-center h-full gap-2 text-muted-foreground">
			<div className="flex flex-col items-center gap-2">
				<Spinner />
				Cargando...
			</div>
		</article>
	);
}
