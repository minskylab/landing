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
    const display: string[] = getDisplayFromGridProps(props.type); // useMemo(() => getDisplayFromGridProps(props.type), [props.type]);

    const colsTemplate: string[] = getTemplateFromGridProps(props.columnsTemplate); // useMemo(() => getTemplateFromGridProps(props.columnsTemplate), [props.columnsTemplate]);
    const rowsTemplate: string[] = getTemplateFromGridProps(props.rowsTemplate); // useMemo(() => getTemplateFromGridProps(props.rowsTemplate), [props.rowsTemplate]);

    const gridCols: string[] = getPositionFromGridProps(props.cols); // useMemo(() => getPositionFromGridProps(props.cols), [props.cols]);
    const gridRows: string[] = getPositionFromGridProps(props.rows); // useMemo(() => getPositionFromGridProps(props.rows), [props.rows]);

    const columnsGap: string[] = getGapFromProps(props.columnGap); // useMemo(() => getGapFromProps(props.columnGap), [props.columnGap]);
    const rowsGap: string[] = getGapFromProps(props.rowGap); // useMemo(() => getGapFromProps(props.rowGap), [props.rowGap]);

    const justifyItems: string[] = getJustifyItemsFromProps(props.justifyItems); // useMemo(() => getJustifyItemsFromProps(props.justifyItems), [props.justifyItems]);
    const alignItems: string[] = getAlignItemsFromProps(props.alignItems); // useMemo(() => getAlignItemsFromProps(props.alignItems), [props.alignItems]);
    const justifyContent: string[] = getJustifyContentFromProps(props.justifyContent); // useMemo(() => getJustifyContentFromProps(props.justifyContent), [props.justifyContent]);
    const alignContent: string[] = getAlignContentFromProps(props.alignContent); // useMemo(() => getAlignContentFromProps(props.alignContent), [props.alignContent]);
    const justifySelf: string[] = getJustifySelfFromProps(props.justifySelf); // useMemo(() => getJustifySelfFromProps(props.justifySelf), [props.justifySelf]);
    const alignSelf: string[] = getAlignSelfFromProps(props.alignSelf); // useMemo(() => getAlignSelfFromProps(props.alignSelf), [props.alignSelf]);

    const padding: string[] = getPlainEnvelopeFromProps(props.p); // useMemo(() => getPlainEnvelopeFromProps(props.p), [props.p]);
    const margin: string[] = getPlainEnvelopeFromProps(props.m); // useMemo(() => getPlainEnvelopeFromProps(props.m), [props.m]);

    const gridAutoFlow: string[] = ["", "", "", ""];

    console.log(display);
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
            {...(props as React.Props<HTMLDivElement>)}
        />
    );
};

export { Grid };
