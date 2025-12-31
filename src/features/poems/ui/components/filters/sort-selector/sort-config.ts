import {
	ArrowDownAZ,
	Calendar,
	Heart,
	type LucideIcon,
	User,
} from "lucide-react";
import type { SortBy } from "~/features/poems/application/use-poems";

export interface SortOption {
	value: SortBy;
	label: string;
	description: string;
	icon: LucideIcon;
	shortcut?: string;
}

/**
 * Configuración de opciones de ordenamiento
 * Cada opción incluye:
 * - value: Valor interno usado en la lógica
 * - label: Texto visible en el UI
 * - description: Descripción para tooltips
 * - icon: Ícono descriptivo de Lucide
 * - shortcut: Atajo de teclado (futuro)
 */
export const SORT_OPTIONS: readonly SortOption[] = [
	{
		value: "title",
		label: "Título",
		description: "Ordenar alfabéticamente por título del poema",
		icon: ArrowDownAZ,
	},
	{
		value: "author",
		label: "Autor",
		description: "Ordenar alfabéticamente por nombre del autor",
		icon: User,
	},
	{
		value: "date",
		label: "Fecha",
		description: "Ordenar por año de publicación (más recientes primero)",
		icon: Calendar,
	},
	{
		value: "favorites",
		label: "Favoritos",
		description: "Mostrar favoritos primero (sin orden secundario)",
		icon: Heart,
	},
] as const;

/**
 * Helper para obtener la configuración de una opción de ordenamiento
 */
export function getSortOption(sortBy: SortBy): SortOption {
	return SORT_OPTIONS.find((opt) => opt.value === sortBy) ?? SORT_OPTIONS[0];
}
