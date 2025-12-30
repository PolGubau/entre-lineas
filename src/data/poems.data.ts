import type { Poem } from "~/features/poems/domain/poem.types";
import { caminante } from "./poems/caminante";
import { elGrito } from "./poems/el-grito";
import { elPasoDeLaSiguiriya } from "./poems/el-paso-de-la-siguiriya";
import { elSilencio } from "./poems/el-silencio";
import { laGuitarra } from "./poems/la-guitarra";
import { baladillaTresRios } from "./poems/lorca-baladilla-tres-rios";
import { siguiriyaGitana } from "./poems/siguiriya-gitana";
import { versosMasTristes } from "./poems/versos-mas-tristes";

export const poemasData: Poem[] = [
	versosMasTristes,
	caminante,
	baladillaTresRios,
	siguiriyaGitana,
	laGuitarra,
	elGrito,
	elSilencio,
	elPasoDeLaSiguiriya,
];
