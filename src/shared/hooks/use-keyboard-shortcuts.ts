import { useEffect } from "react";

type KeyboardShortcut = {
	key: string;
	ctrl?: boolean;
	alt?: boolean;
	shift?: boolean;
	meta?: boolean;
};

type ShortcutConfig = {
	[key: string]: {
		handler: () => void;
		description: string;
		shortcut: KeyboardShortcut;
	};
};

export function useKeyboardShortcuts(config: ShortcutConfig) {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			for (const [_id, { handler, shortcut }] of Object.entries(config)) {
				const { key, ctrl, alt, shift, meta } = shortcut;

				const ctrlMatch = ctrl ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey;
				const altMatch = alt ? event.altKey : !event.altKey;
				const shiftMatch = shift ? event.shiftKey : !event.shiftKey;
				const metaMatch = meta ? event.metaKey : !event.metaKey;

				if (
					event.key.toLowerCase() === key.toLowerCase() &&
					ctrlMatch &&
					altMatch &&
					shiftMatch &&
					metaMatch
				) {
					event.preventDefault();
					handler();
					break;
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [config]);
}
