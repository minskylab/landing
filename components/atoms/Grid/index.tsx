import React, { FC } from "react";
import {
    GridBase,
    SMMinimal,
    JustifyItems,
    AlignItems,
    JustifyContent,
    AlignContent,
    GridAutoFlow,
    JustifySelf,
    AlignSelf
} from "./base";
import { GridProps } from "./props";
import { GridBreakpoints } from "./breakpoints";

const Grid: FC<GridProps> = (props: GridProps & HTMLElement) => {
    var rowGapSm = props.rowGap;
    var columnGapSm = props.columnGap;

    if (props.gap) {
        rowGapSm = props.gap;
        columnGapSm = props.gap;
    }

    let padding = "";
    let margin = "";

    if (props.p) {
        padding = props.p as string;
    } else {
        padding = `${props.px || 0} ${props.py || 0}`;
    }

    if (props.m) {
        padding = props.m as string;
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

    console.log(props);

    var displayType: SMMinimal<string> = ["block"];
    if (props.container) {
        if (typeof props.container === "boolean") {
            displayType = [props.container ? "grid" : props.flex ? "flex" : "block"];
        } else {
            props.container.map((i, index) => (displayType[index] = i ? "grid" : "flex"));
        }
    }
    console.log("displayType: ", displayType);

    var columnsTemplate: SMMinimal<string> = [""];
    if (props.columnsTemplate && typeof props.columnsTemplate === "string") {
        columnsTemplate = [props.columnsTemplate || "repeat(12, auto)"];
    }
    var rowsTemplate: SMMinimal<string> = [""];
    if (props.rowsTemplate && typeof props.rowsTemplate === "string") {
        rowsTemplate = [props.rowsTemplate || "auto"];
    }
    var rowGap: SMMinimal<string> = ["auto"];
    if (props.rowGap && typeof props.rowGap === "string") {
        rowGap = [(rowGapSm as string) || "auto"];
    }
    var columnGap: SMMinimal<string> = ["auto"];
    if (props.columnGap && typeof props.columnGap === "string") {
        columnGap = [(columnGapSm as string) || "auto"];
    }
    var justifyItems: SMMinimal<JustifyItems> = ["default"];
    if (props.justifyItems && typeof props.justifyItems === "string") {
        justifyItems = [(props.justifyItems as JustifyItems) || "default"];
    }
    var alignItems: SMMinimal<AlignItems> = ["default"];
    if (props.alignItems && typeof props.alignItems === "string") {
        alignItems = [props.alignItems || "default"];
    }
    var justifyContent: SMMinimal<JustifyContent> = ["default"];
    if (props.justifyContent && typeof props.justifyContent === "string") {
        justifyContent = [props.justifyContent || "default"];
    }
    var alignContent: SMMinimal<AlignContent> = ["default"];
    if (props.alignContent && typeof props.alignContent === "string") {
        alignContent = [props.alignContent || "default"];
    }
    var justifySelf: SMMinimal<JustifySelf> = ["default"];
    if (props.justifySelf && typeof props.justifySelf === "string") {
        justifySelf = [props.justifySelf || "default"];
    }
    var alignSelf: SMMinimal<AlignSelf> = ["default"];
    if (props.alignSelf && typeof props.alignSelf === "string") {
        alignSelf = [props.alignSelf || "default"];
    }
    var gridAutoFlow: SMMinimal<GridAutoFlow> = ["default"];
    if (props.gridAutoFlow && typeof props.gridAutoFlow === "string") {
        gridAutoFlow = [props.gridAutoFlow || "default"];
    }
    var gridRow: SMMinimal<string> = ["auto"];
    if (props.gridRow && typeof props.gridRow === "string") {
        gridRow = [props.gridRow || "auto"];
    }
    var gridColumn: SMMinimal<string> = ["auto"];
    if (props.gridColumn && typeof props.gridColumn === "string") {
        gridColumn = [props.gridColumn || "auto"];
    }
    var pad: SMMinimal<string> = [""];
    if (padding && typeof padding == "string") {
        pad = [padding];
    }
    var mar: SMMinimal<string> = [""];
    if (margin && typeof margin == "string") {
        mar = [margin];
    }

    return (
        <GridBase
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
