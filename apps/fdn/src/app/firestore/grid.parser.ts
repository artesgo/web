import { Layout } from './layout';

export class GridUtils {
    static parser(id: string, str: string): Layout {
        const split = `*`
        const layout = new Layout();
        layout.id = id;
        layout.raw = str;
        const grid = str.substr(0,str.indexOf(split));
        if (grid) {
            const [row, rowspan, col, colspan, type, alignment] = grid.split(',');
            const content = str.substr(str.indexOf(split)+1);
            layout.row = Number.parseInt(row, 10);
            layout.rowspan = Number.parseInt(rowspan, 10);
            layout.col = Number.parseInt(col, 10);
            layout.colspan = Number.parseInt(colspan, 10);
            layout.content = content;
            layout.type = type; // optional
            layout.alignment = Number.parseInt(alignment, 10); // optional;
        }
        return layout;
    }
}
