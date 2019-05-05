import { GridSize, CssUnit } from "./css.unit";

export interface BreakpointConfig {
    cols: number;
    // rows: number;
    columnSizes: GridSize[];
    // rowSizes: GridSize[];
}
export interface GridConfig {
    breakpoints: number[];
    breakpointConfig: BreakpointConfig[];
}
