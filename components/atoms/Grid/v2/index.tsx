import React, { useMemo, FC } from "react";
import {
    getDisplayFromGridProps,
    getTemplateFromGridProps,
    getJustifyContentFromProps,
    getJustifyItemsFromProps,
    getAlignItemsFromProps,
    getAlignContentFromProps,
    getJustifySelfFromProps,
    getAlignSelfFromProps,
    getPositionFromGridProps,
    getGapFromProps,
    getPlainEnvelopeFromProps
} from "./miner";
import { GridProps } from "./grid-types";
import { GridBase } from "./base-component";

const Grid: FC<GridProps> = (props: GridProps) => {
    const display: string[] = useMemo(() => getDisplayFromGridProps(props.type), [props.type]); // getDisplayFromGridProps(props.type);

    const colsTemplate: string[] = useMemo(() => getTemplateFromGridProps(props.colsTemplate), [props.colsTemplate]); // getTemplateFromGridProps(props.columnsTemplate);
    const rowsTemplate: string[] = useMemo(() => getTemplateFromGridProps(props.rowsTemplate), [props.rowsTemplate]); // getTemplateFromGridProps(props.rowsTemplate);

    const gridCols: string[] = useMemo(() => getPositionFromGridProps(props.cols), [props.cols]); // getPositionFromGridProps(props.cols);
    const gridRows: string[] = useMemo(() => getPositionFromGridProps(props.rows), [props.rows]); // getPositionFromGridProps(props.rows);

    const columnsGap: string[] = useMemo(() => getGapFromProps(props.columnGap), [props.columnGap]); // getGapFromProps(props.columnGap);
    const rowsGap: string[] = useMemo(() => getGapFromProps(props.rowGap), [props.rowGap]); // getGapFromProps(props.rowGap);

    const justifyItems: string[] = useMemo(() => getJustifyItemsFromProps(props.justifyItems), [props.justifyItems]); // getJustifyItemsFromProps(props.justifyItems);
    const alignItems: string[] = useMemo(() => getAlignItemsFromProps(props.alignItems), [props.alignItems]); // getAlignItemsFromProps(props.alignItems);
    const justifyContent: string[] = useMemo(() => getJustifyContentFromProps(props.justifyContent), [
        props.justifyContent
    ]); // getJustifyContentFromProps(props.justifyContent);
    const alignContent: string[] = useMemo(() => getAlignContentFromProps(props.alignContent), [props.alignContent]); // getAlignContentFromProps(props.alignContent);
    const justifySelf: string[] = useMemo(() => getJustifySelfFromProps(props.justifySelf), [props.justifySelf]); // getJustifySelfFromProps(props.justifySelf);
    const alignSelf: string[] = useMemo(() => getAlignSelfFromProps(props.alignSelf), [props.alignSelf]); // getAlignSelfFromProps(props.alignSelf);

    const padding: string[] = useMemo(() => getPlainEnvelopeFromProps(props.p), [props.p]); // getPlainEnvelopeFromProps(props.p);
    const margin: string[] = useMemo(() => getPlainEnvelopeFromProps(props.m), [props.m]); // getPlainEnvelopeFromProps(props.m);

    const gridAutoFlow: string[] = ["", "", "", ""]; // TODO

    return (
        <GridBase
            display={display}
            colsTemplate={colsTemplate}
            rowsTemplate={rowsTemplate}
            gridCols={gridCols}
            gridRows={gridRows}
            columnsGap={columnsGap}
            rowsGap={rowsGap}
            justifyItems={justifyItems}
            alignItems={alignItems}
            justifyContent={justifyContent}
            alignContent={alignContent}
            justifySelf={justifySelf}
            alignSelf={alignSelf}
            padding={padding}
            margin={margin}
            gridAutoFlow={gridAutoFlow}
            debug={props.debug}
            className={props.className}
            // {...(props as React.Props<HTMLDivElement>)}
        >
            {props.children}
        </GridBase>
    );
};

export { Grid };
export default Grid;
