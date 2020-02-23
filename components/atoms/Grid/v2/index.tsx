import React from "react";
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
    var breakpoints = defaultBreakpoints;
    if (props.breakpoints) {
        breakpoints = props.breakpoints;
    }

    var display: string[] = getDisplayFromGridProps(props.type);

    var colsTemplate: string[] = getTemplateFromGridProps(props.columnsTemplate);
    var rowsTemplate: string[] = getTemplateFromGridProps(props.rowsTemplate);

    var gridCols: string[] = getPositionFromGridProps(props.cols);
    var gridRows: string[] = getPositionFromGridProps(props.rows);

    var columnsGap: string[] = getGapFromProps(props.columnGap);
    var rowsGap: string[] = getGapFromProps(props.rowGap);

    var justifyItems: string[] = getJustifyItemsFromProps(props.justifyItems);
    var alignItems: string[] = getAlignItemsFromProps(props.alignItems);
    var justifyContent: string[] = getJustifyContentFromProps(props.justifyContent);
    var alignContent: string[] = getAlignContentFromProps(props.alignContent);
    var justifySelf: string[] = getJustifySelfFromProps(props.justifySelf);
    var alignSelf: string[] = getAlignSelfFromProps(props.alignSelf);

    var padding: string[] = getPlainEnvelopeFromProps(props.p);
    var margin: string[] = getPlainEnvelopeFromProps(props.m);

    var gridAutoFlow: string[] = ["", "", "", ""];

    console.log(
        display,
        colsTemplate,
        rowsTemplate,
        gridCols,
        gridRows,
        columnsGap,
        rowsGap,
        justifyItems,
        alignItems,
        justifyContent,
        alignContent,
        justifySelf,
        alignSelf,
        padding,
        margin
    );
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
            breakpoints={breakpoints}
        >
            {props.children}
        </GridBase>
    );
};

export { Grid };
