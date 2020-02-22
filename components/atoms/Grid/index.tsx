import React, { FC } from "react";
import { GridBase } from "./base";
import { GridProps } from "./props";

const Grid: FC<GridProps> = props => {
    var rowGap = props.rowGap;
    var columnGap = props.columnGap;

    if (props.gap) {
        rowGap = props.gap;
        columnGap = props.gap;
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

    return (
        <GridBase
            {...props}
            displayType={props.container ? "grid" : props.flex ? "flex" : "block"}
            columnsTemplate={props.columnsTemplate || "repeat(12, auto)"}
            rowsTemplate={props.rowsTemplate || "auto"}
            rowGap={rowGap || "auto"}
            columnGap={columnGap || "auto"}
            justifyItems={props.justifyItems || "default"}
            alignItems={props.alignItems || "default"}
            justifyContent={props.justifyContent || "default"}
            alignContent={props.alignContent || "default"}
            justifySelf={props.justifySelf || "default"}
            alignSelf={props.alignSelf || "default"}
            gridAutoFlow={props.gridAutoFlow || "default"}
            gridRow={props.gridRow || "auto"}
            gridColumn={props.gridColumn || "auto"}
            p={padding}
            m={margin}
        />
    );
};

export default Grid;
