import { useState } from "react";

export function useReadingMode() {
	const [isReadingMode, setIsReadingMode] = useState(false);

	const toggleReadingMode = () => setIsReadingMode((prev) => !prev);
	const enableReadingMode = () => setIsReadingMode(true);
	const disableReadingMode = () => setIsReadingMode(false);

	return {
		isReadingMode,
		toggleReadingMode,
		enableReadingMode,
		disableReadingMode,
	};
}
