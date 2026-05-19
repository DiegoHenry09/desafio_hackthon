import type { Route } from "../types";
export type Navigate = (r: Route | Route["name"]) => void;
