import { styled } from "linaria/react";
import { GridBreakpoints } from "./breakpoints";

export type SMMinimal<T> = {
    0: T;
} & Array<T>;

export type JutifyItems = "start" | "end" | "center" | "stretch; (default)" | "default";
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
    justifyItems?: SMMinimal<JutifyItems>;
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

    /* width: 100%; */

    @media screen and (min-width: ${props => props.breakpoints.md}) {
        /* width: 50%; */
    }

    @media screen and (min-width: ${props => props.breakpoints.lg}) {
        /* width: 25%; */
    }

    @media screen and (min-width: ${props => props.breakpoints.xl}) {
        /* width: 15%; */
    }

    transition: 0.3s;
`;

export { GridBase };
