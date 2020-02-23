import React, { useMemo } from "react";
import { defaultBreakpoints } from "./breakpoints";
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

const Grid = (props: GridProps) => {
    const display: string[] = useMemo(() => getDisplayFromGridProps(props.type), [props.type]);

    const colsTemplate: string[] = useMemo(() => getTemplateFromGridProps(props.columnsTemplate), [
        props.columnsTemplate
    ]);
    const rowsTemplate: string[] = useMemo(() => getTemplateFromGridProps(props.rowsTemplate), [props.rowsTemplate]);

    const gridCols: string[] = useMemo(() => getPositionFromGridProps(props.cols), [props.cols]);
    const gridRows: string[] = useMemo(() => getPositionFromGridProps(props.rows), [props.rows]);

    const columnsGap: string[] = useMemo(() => getGapFromProps(props.columnGap), [props.columnGap]);
    const rowsGap: string[] = useMemo(() => getGapFromProps(props.rowGap), [props.rowGap]);

    const justifyItems: string[] = useMemo(() => getJustifyItemsFromProps(props.justifyItems), [props.justifyItems]);
    const alignItems: string[] = useMemo(() => getAlignItemsFromProps(props.alignItems), [props.alignItems]);
    const justifyContent: string[] = useMemo(() => getJustifyContentFromProps(props.justifyContent), [
        props.justifyContent
    ]);
    const alignContent: string[] = useMemo(() => getAlignContentFromProps(props.alignContent), [props.alignContent]);
    const justifySelf: string[] = useMemo(() => getJustifySelfFromProps(props.justifySelf), [props.justifySelf]);
    const alignSelf: string[] = useMemo(() => getAlignSelfFromProps(props.alignSelf), [props.alignSelf]);

    const padding: string[] = useMemo(() => getPlainEnvelopeFromProps(props.p), [props.p]);
    const margin: string[] = useMemo(() => getPlainEnvelopeFromProps(props.m), [props.m]);

    const gridAutoFlow: string[] = ["", "", "", ""];

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
        >
            {props.children}
        </GridBase>
    );
};

export { Grid };
