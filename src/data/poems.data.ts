import type { Poem } from "~/features/poems/domain/poem.types";
import { caminante } from "./poems/caminante";
import { baladillaTresRios } from "./poems/lorca-baladilla-tres-rios";
import { versosMasTristes } from "./poems/versos-mas-tristes";

export const poemasData: Poem[] = [
	versosMasTristes,
	caminante,
	baladillaTresRios,
];
