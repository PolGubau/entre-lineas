import type { Poem } from "~/features/poems/domain/poem.types";
import { ay } from "./poems/ay";
import { caminante } from "./poems/caminante";
import { cueva } from "./poems/cueva";
import { despuesdePasar } from "./poems/despues-de-pasar";
import { elGrito } from "./poems/el-grito";
import { elPasoDeLaSiguiriya } from "./poems/el-paso-de-la-siguiriya";
import { elSilencio } from "./poems/el-silencio";
import { encrucijada } from "./poems/encrucijada";
import { laGuitarra } from "./poems/la-guitarra";
import { laSolea } from "./poems/la-solea";
import { baladillaTresRios } from "./poems/lorca-baladilla-tres-rios";
import { pueblo } from "./poems/pueblo";
import { punal } from "./poems/punal";
import { siguiriyaGitana } from "./poems/siguiriya-gitana";
import { sorpresa } from "./poems/sorpresa";
import { tierraSeca } from "./poems/tierra-seca";
import { versosMasTristes } from "./poems/versos-mas-tristes";
import { yDespues } from "./poems/y-despues";

export const poemasData: Poem[] = [
	versosMasTristes,
	caminante,
	baladillaTresRios,
	siguiriyaGitana,
	laGuitarra,
	laSolea,
	cueva,
	despuesdePasar,
	yDespues,
	tierraSeca,
	pueblo,
	punal,
	encrucijada,
	ay,
	sorpresa,
	elGrito,
	elSilencio,
	elPasoDeLaSiguiriya,
];
