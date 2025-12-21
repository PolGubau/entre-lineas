import { useEffect, useState } from "react";

/**
 * Hook para debounce de valores
 * Retrasa la actualización del valor hasta que pase el delay especificado
 *
 * @param value - Valor a debounce
 * @param delay - Tiempo de espera en milisegundos (default: 300ms)
 * @returns Valor debouncedo
 *
 * @example
 * ```tsx
 * const [search, setSearch] = useState('')
 * const debouncedSearch = useDebounce(search, 500)
 *
 * // debouncedSearch solo se actualiza 500ms después del último cambio
 * ```
 */
export function useDebounce<T>(value: T, delay = 300): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		// Actualizar el valor debouncedo después del delay
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// Limpiar el timeout si el valor cambia antes del delay
		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
}
