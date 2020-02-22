import React, { FC } from "react";
import {
    GridBase,
    SMMinimal,
    JutifyItems,
    AlignItems,
    JustifyContent,
    AlignContent,
    GridAutoFlow,
    JustifySelf,
    AlignSelf
} from "./base";
import { GridProps } from "./props";
import { GridBreakpoints } from "./breakpoints";

const Grid: FC<GridProps> = props => {
    var rowGapSm = props.rowGap;
    var columnGapSm = props.columnGap;

    if (props.gap) {
        rowGapSm = props.gap;
        columnGapSm = props.gap;
    }

    let padding = "";
    let margin = "";

    if (props.p) {
        padding = props.p;
    } else {
        padding = `${props.px || 0} ${props.py || 0}`;
    }

    if (props.m) {
        padding = props.m;
    } else {
        padding = `${props.mx || 0} ${props.my || 0}`;
    }

    // breakpoint = [0em, 40em, 52em, 64em]
    var breakPoints: GridBreakpoints = {
        sm: "0em",
        md: "40em",
        lg: "52em",
        xl: "64em"
    };

    var displayType: SMMinimal<string> = [props.container ? "grid" : props.flex ? "flex" : "block"];
    var columnsTemplate: SMMinimal<string> = [props.columnsTemplate || "repeat(12, auto)"];

    var rowsTemplate: SMMinimal<string> = [props.rowsTemplate || "auto"];
    var rowGap: SMMinimal<string> = [rowGapSm || "auto"];
    var columnGap: SMMinimal<string> = [columnGapSm || "auto"];
    var justifyItems: SMMinimal<JutifyItems> = [props.justifyItems || "default"];
    var alignItems: SMMinimal<AlignItems> = [props.alignItems || "default"];
    var justifyContent: SMMinimal<JustifyContent> = [props.justifyContent || "default"];
    var alignContent: SMMinimal<AlignContent> = [props.alignContent || "default"];
    var justifySelf: SMMinimal<JustifySelf> = [props.justifySelf || "default"];
    var alignSelf: SMMinimal<AlignSelf> = [props.alignSelf || "default"];
    var gridAutoFlow: SMMinimal<GridAutoFlow> = [props.gridAutoFlow || "default"];
    var gridRow: SMMinimal<string> = [props.gridRow || "auto"];
    var gridColumn: SMMinimal<string> = [props.gridColumn || "auto"];

    var pad: SMMinimal<string> = [padding];
    var mar: SMMinimal<string> = [margin];

    return (
        <GridBase
            // {...props}
            displayType={displayType}
            columnsTemplate={columnsTemplate}
            rowsTemplate={rowsTemplate}
            rowGap={rowGap}
            columnGap={columnGap}
            justifyItems={justifyItems}
            alignItems={alignItems}
            justifyContent={justifyContent}
            alignContent={alignContent}
            justifySelf={justifySelf}
            alignSelf={alignSelf}
            gridAutoFlow={gridAutoFlow}
            gridRow={gridRow}
            gridColumn={gridColumn}
            p={pad}
            m={mar}
            breakpoints={breakPoints}
            children={props.children}
        />
    );
};

export default Grid;
