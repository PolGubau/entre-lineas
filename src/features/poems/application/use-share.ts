import { useCallback } from "react";
import { toast } from "sonner";

export interface ShareData {
	title: string;
	text: string;
	url: string;
}

export interface ShareOptions {
	fallbackMessage?: string;
	onSuccess?: () => void;
	onError?: (error: Error) => void;
}

/**
 * Hook para compartir contenido usando la Web Share API
 * con fallback a copiar al portapapeles
 */
export function useShare() {
	const canShare = typeof navigator !== "undefined" && !!navigator.share;

	const share = useCallback(
		async (data: ShareData, options: ShareOptions = {}) => {
			const {
				fallbackMessage = "Enlace copiado al portapapeles",
				onSuccess,
				onError,
			} = options;

			try {
				if (canShare) {
					// Usar Web Share API si está disponible
					await navigator.share({
						title: data.title,
						text: data.text,
						url: data.url,
					});
					onSuccess?.();
				} else {
					// Fallback: copiar al portapapeles
					await navigator.clipboard.writeText(data.url);
					toast.success(fallbackMessage);
					onSuccess?.();
				}
			} catch (error) {
				// Error puede ser AbortError si el usuario cancela el diálogo
				if (error instanceof Error && error.name !== "AbortError") {
					console.error("Error al compartir:", error);
					onError?.(error);
				}
			}
		},
		[canShare],
	);

	return { share, canShare };
}
