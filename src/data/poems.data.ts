import type { Poem } from "~/features/poems/domain/poem.types";
import { caminante } from "./poems/caminante";
import { versosMasTristes } from "./poems/versos-mas-tristes";

export const poemasData: Poem[] = [versosMasTristes, caminante];
