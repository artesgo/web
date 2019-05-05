export enum CssUnit {
    rem = 'rem',
    em = 'em',
    px = 'px',
    fr = 'fr',
}

export interface GridSize {
    value: number
    unit: CssUnit
}