import React, { FC } from "react";
import { styled } from "linaria/react";

interface GridBaseProps {
    displayType?: string;
    columnsTemplate?: string;
    rowsTemplate?: string;
    gap?: string;
    rowGap?: string;
    columnGap?: string;
    justifyItems?: "start" | "end" | "center" | "stretch; (default)" | "default";
    alignItems?: "start" | "end" | "center" | "stretch; (default)" | "default";
    justifyContent?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "space-around"
        | "space-between"
        | "space-evenly"
        | "default";
    alignContent?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "space-around"
        | "space-between"
        | "space-evenly"
        | "default";
    gridAutoFlow?: "row" | "column" | "dense" | "default";
    gridRow?: string;
    gridColumn?: string;
    justifySelf?: "start" | "end" | "center" | "stretch; (default)" | "default";
    alignSelf?: "start" | "end" | "center" | "stretch; (default)" | "default";
}

const GridBase = styled.div<GridBaseProps>`
    display: ${props => props.displayType};
    grid-template-columns: ${props => props.columnsTemplate};
    grid-template-rows: ${props => props.rowsTemplate};

    /* grid-gap: ${props => props.gap}; */
    grid-row-gap: ${props => props.rowGap};
    grid-column-gap: ${props => props.columnGap};

    justify-items: ${props => props.justifyItems};
    align-items: ${props => props.alignItems};

    justify-content: ${props => props.justifyContent};
    align-content: ${props => props.alignContent};
    grid-auto-flow: ${props => props.gridAutoFlow};

    grid-column: ${props => props.gridColumn};
    grid-row: ${props => props.gridRow};

    justify-self: ${props => props.justifySelf};
    align-self: ${props => props.alignSelf};
`;

interface GridProps {
    container?: boolean;
    columnsTemplate?: string;
    rowsTemplate?: string;
    gap?: string;
    rowGap?: string;
    columnGap?: string;

    justifyItems?: "start" | "end" | "center" | "stretch; (default)" | "default";
    alignItems?: "start" | "end" | "center" | "stretch; (default)" | "default";
    justifyContent?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "space-around"
        | "space-between"
        | "space-evenly"
        | "default";
    alignContent?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "space-around"
        | "space-between"
        | "space-evenly"
        | "default";
    gridAutoFlow?: "row" | "column" | "dense" | "default";
    justifySelf?: "start" | "end" | "center" | "stretch; (default)" | "default";
    alignSelf?: "start" | "end" | "center" | "stretch; (default)" | "default";

    gridRow?: string;
    gridColumn?: string;
}

const Grid: FC<GridProps> = props => {
    var rowGap = props.rowGap;
    var columnGap = props.columnGap;

    if (props.gap) {
        rowGap = props.gap;
        columnGap = props.gap;
    }
    return (
        <GridBase
            {...props}
            displayType={props.container ? "grid" : "block"}
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
        />
    );
};

export default Grid;
