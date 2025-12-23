import React from "react";

interface ErrorBoundaryProps {
	children: React.ReactNode;
	fallback?: (error: Error, retry: () => void) => React.ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	retry = () => {
		this.setState({ hasError: false, error: null });
	};

	render() {
		if (this.state.hasError && this.state.error) {
			if (this.props.fallback) {
				return this.props.fallback(this.state.error, this.retry);
			}

			return <DefaultErrorFallback error={this.state.error} retry={this.retry} />;
		}

		return this.props.children;
	}
}

function DefaultErrorFallback({
	error,
	retry,
}: { error: Error; retry: () => void }) {
	return (
		<div className="min-h-screen grid place-items-center px-4">
			<div className="max-w-md w-full space-y-6 text-center">
				<div className="space-y-2">
					<h1 className="text-4xl font-bold text-red-500">¡Algo salió mal!</h1>
					<p className="text-muted-foreground">
						Ocurrió un error inesperado al cargar el contenido.
					</p>
				</div>

				<div className="bg-muted/50 border border-border rounded-lg p-4">
					<p className="text-sm text-left font-mono break-all">
						{error.message}
					</p>
				</div>

				<div className="flex gap-3 justify-center">
					<button
						type="button"
						onClick={retry}
						className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
					>
						Reintentar
					</button>
					<a
						href="/"
						className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
					>
						Volver al inicio
					</a>
				</div>
			</div>
		</div>
	);
}
