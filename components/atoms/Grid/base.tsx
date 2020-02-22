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
        | "default"
        | "flex-end"
        | "flex-start";
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
    flex?: boolean;
    p?: string;
    m?: string;
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
    
    padding: ${props => props.p};
    margin: ${props => props.m};
    
    transition: 0.3s;
`;

export { GridBase };
