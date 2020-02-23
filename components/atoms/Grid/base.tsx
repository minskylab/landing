import { styled } from "linaria/react";
import { GridBreakpoints } from "./breakpoints";

export type SMMinimal<T> = {
    0: T;
} & Array<T>;

export type JustifyItems = "start" | "end" | "center" | "stretch; (default)" | "default";
export type AlignItems = "start" | "end" | "center" | "stretch; (default)" | "default";
export type JustifyContent =
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

export type AlignContent =
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "default";

export type GridAutoFlow = "row" | "column" | "dense" | "default";

export type JustifySelf = "start" | "end" | "center" | "stretch; (default)" | "default";
export type AlignSelf = "start" | "end" | "center" | "stretch; (default)" | "default";

interface GridBaseProps {
    displayType?: SMMinimal<string>;
    columnsTemplate?: SMMinimal<string>;
    rowsTemplate?: SMMinimal<string>;
    // gap?: SMMinimal<string>;
    rowGap?: SMMinimal<string>;
    columnGap?: SMMinimal<string>;
    justifyItems?: SMMinimal<JustifyItems>;
    alignItems?: SMMinimal<AlignItems>;
    justifyContent?: SMMinimal<JustifyContent>;
    alignContent?: SMMinimal<AlignContent>;
    gridAutoFlow?: SMMinimal<GridAutoFlow>;
    gridRow?: SMMinimal<string>;
    gridColumn?: SMMinimal<string>;
    justifySelf?: SMMinimal<JustifySelf>;
    alignSelf?: SMMinimal<AlignSelf>;
    flex?: SMMinimal<boolean>;
    p?: SMMinimal<string>;
    m?: SMMinimal<string>;

    breakpoints?: GridBreakpoints;
}

// Default breakpoints = [0em, 40em, 52em, 64em]

const GridBase = styled.div<GridBaseProps>`
    display: ${props => props.displayType[0]};
    grid-template-columns: ${props => props.columnsTemplate[0]};
    grid-template-rows: ${props => props.rowsTemplate[0]};

    grid-row-gap: ${props => props.rowGap[0]};
    grid-column-gap: ${props => props.columnGap[0]};

    justify-items: ${props => props.justifyItems[0]};
    align-items: ${props => props.alignItems[0]};

    justify-content: ${props => props.justifyContent[0]};
    align-content: ${props => props.alignContent[0]};
    grid-auto-flow: ${props => props.gridAutoFlow[0]};

    grid-column: ${props => props.gridColumn[0]};
    grid-row: ${props => props.gridRow[0]};

    justify-self: ${props => props.justifySelf[0]};
    align-self: ${props => props.alignSelf[0]};

    padding: ${props => props.p[0]};
    margin: ${props => props.m[0]};

    @media screen and (min-width: ${props => props.breakpoints.md}) {
        display: ${props => props.displayType[1] || props.displayType[0]};
        grid-template-columns: ${props => props.columnsTemplate[1] || props.displayType[0]};
        grid-template-rows: ${props => props.rowsTemplate[1] || props.displayType[0]};

        grid-row-gap: ${props => props.rowGap[1] || props.rowGap[0]};
        grid-column-gap: ${props => props.columnGap[1] || props.columnGap[0]};

        justify-items: ${props => props.justifyItems[1] || props.justifyItems[0]};
        align-items: ${props => props.alignItems[1] || props.alignItems[0]};

        justify-content: ${props => props.justifyContent[1] || props.justifyContent[0]};
        align-content: ${props => props.alignContent[1] || props.alignContent[0]};
        grid-auto-flow: ${props => props.gridAutoFlow[1] || props.gridAutoFlow[0]};

        grid-column: ${props => props.gridColumn[1] || props.gridColumn[0]};
        grid-row: ${props => props.gridRow[1] || props.gridRow[0]};

        justify-self: ${props => props.justifySelf[1] || props.justifySelf[0]};
        align-self: ${props => props.alignSelf[1] || props.alignSelf[0]};

        padding: ${props => props.p[1] || props.p[0]};
        margin: ${props => props.m[1] || props.m[0]};
    }

    @media screen and (min-width: ${props => props.breakpoints.lg}) {
        display: ${props => props.displayType[2] || props.displayType[0]};
        grid-template-columns: ${props => props.columnsTemplate[2] || props.displayType[0]};
        grid-template-rows: ${props => props.rowsTemplate[2] || props.displayType[0]};

        grid-row-gap: ${props => props.rowGap[2] || props.rowGap[0]};
        grid-column-gap: ${props => props.columnGap[2] || props.columnGap[0]};

        justify-items: ${props => props.justifyItems[2] || props.justifyItems[0]};
        align-items: ${props => props.alignItems[2] || props.alignItems[0]};

        justify-content: ${props => props.justifyContent[2] || props.justifyContent[0]};
        align-content: ${props => props.alignContent[2] || props.alignContent[0]};
        grid-auto-flow: ${props => props.gridAutoFlow[2] || props.gridAutoFlow[0]};

        grid-column: ${props => props.gridColumn[2] || props.gridColumn[0]};
        grid-row: ${props => props.gridRow[2] || props.gridRow[0]};

        justify-self: ${props => props.justifySelf[2] || props.justifySelf[0]};
        align-self: ${props => props.alignSelf[2] || props.alignSelf[0]};

        padding: ${props => props.p[2] || props.p[0]};
        margin: ${props => props.m[2] || props.m[0]};
    }

    @media screen and (min-width: ${props => props.breakpoints.xl}) {
        display: ${props => props.displayType[3] || props.displayType[0]};
        grid-template-columns: ${props => props.columnsTemplate[3] || props.displayType[0]};
        grid-template-rows: ${props => props.rowsTemplate[3] || props.displayType[0]};

        grid-row-gap: ${props => props.rowGap[3] || props.rowGap[0]};
        grid-column-gap: ${props => props.columnGap[3] || props.columnGap[0]};

        justify-items: ${props => props.justifyItems[3] || props.justifyItems[0]};
        align-items: ${props => props.alignItems[3] || props.alignItems[0]};

        justify-content: ${props => props.justifyContent[3] || props.justifyContent[0]};
        align-content: ${props => props.alignContent[3] || props.alignContent[0]};
        grid-auto-flow: ${props => props.gridAutoFlow[3] || props.gridAutoFlow[0]};

        grid-column: ${props => props.gridColumn[3] || props.gridColumn[0]};
        grid-row: ${props => props.gridRow[3] || props.gridRow[0]};

        justify-self: ${props => props.justifySelf[3] || props.justifySelf[0]};
        align-self: ${props => props.alignSelf[3] || props.alignSelf[0]};

        padding: ${props => props.p[3] || props.p[0]};
        margin: ${props => props.m[3] || props.m[0]};
    }

    transition: 0.3s;
`;

export { GridBase };
