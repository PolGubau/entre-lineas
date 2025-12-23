import { Keyboard } from "lucide-react";
import { useState } from "react";
 
import { Button } from "~/shared/ui/button";
import { Drawer } from "~/shared/ui/drawer";

interface KeyboardShortcut {
	key: string;
	description: string;
	context?: "global" | "home" | "poem";
}

const shortcuts: KeyboardShortcut[] = [
	{
		key: "/",
		description: "Enfocar búsqueda",
		context: "home",
	},
	{
		key: "ESC",
		description: "Limpiar búsqueda / Salir del modo lectura / Volver al inicio",
		context: "global",
	},
	{
		key: "F",
		description: "Añadir/quitar de favoritos",
		context: "poem",
	},
	{
		key: "R",
		description: "Activar/desactivar modo lectura",
		context: "poem",
	},
	{
		key: "←",
		description: "Ir al poema anterior",
		context: "poem",
	},
	{
		key: "→",
		description: "Ir al poema siguiente",
		context: "poem",
	},
];

const contextLabels = {
	global: "Global",
	home: "En la página principal",
	poem: "En un poema",
};

export function KeyboardShortcutsDialog() {
	const groupedShortcuts = shortcuts.reduce(
		(acc, shortcut) => {
			const context = shortcut.context || "global";
			if (!acc[context]) {
				acc[context] = [];
			}
			acc[context].push(shortcut);
			return acc;
		},
		{} as Record<string, KeyboardShortcut[]>,
  );
  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <Button
      variant="ghost" 
      onClick={() => setIsOpen(true)}
      aria-expanded={isOpen}
      size="icon"
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-accent/50"
      aria-label="Ver atajos de teclado"
    >
      <Keyboard className="size-4" />
    </Button>
    <Drawer title={"Atajos de teclado"} description={"Lista de atajos de teclado disponibles"} open={isOpen} onClose={() => setIsOpen(false)}>
		 
 				
				<div className="space-y-6 py-4">
					{Object.entries(groupedShortcuts).map(([context, items]) => (
						<div key={context} className="space-y-3">
							<h3 className="text-sm font-semibold text-muted-foreground">
								{contextLabels[context as keyof typeof contextLabels]}
							</h3>
							<div className="space-y-2">
								{items.map((shortcut) => (
									<div
										key={shortcut.key}
										className="flex items-center justify-between gap-4 py-2"
									>
										<span className="text-sm text-foreground">
											{shortcut.description}
										</span>
										<kbd className="px-2.5 py-1.5 text-xs font-semibold bg-muted border border-border rounded-md shadow-sm">
											{shortcut.key}
										</kbd>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
 		</Drawer></>
	);
}
