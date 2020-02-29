import { styled } from "linaria/react";
import { defaultBreakpoints } from "./breakpoints";

interface GridBaseProps {
    display: string[];
    colsTemplate: string[];
    rowsTemplate: string[];
    gridCols: string[];
    gridRows: string[];
    columnsGap: string[];
    rowsGap: string[];
    justifyItems: string[];
    alignItems: string[];
    justifyContent: string[];
    alignContent: string[];
    justifySelf: string[];
    alignSelf: string[];
    padding: string[];
    margin: string[];
    gridAutoFlow: string[];
    debug?: boolean;
}

const GridBase = styled.div<GridBaseProps>`
    display: ${props => props.display[0]};
    grid-template-columns: ${props => props.colsTemplate[0]};
    grid-template-rows: ${props => props.rowsTemplate[0]};

    grid-row-gap: ${props => props.rowsGap[0]};
    grid-column-gap: ${props => props.columnsGap[0]};

    justify-items: ${props => props.justifyItems[0]};
    align-items: ${props => props.alignItems[0]};

    justify-content: ${props => props.justifyContent[0]};
    align-content: ${props => props.alignContent[0]};
    /* grid-auto-flow: ${props => props.gridAutoFlow[0]}; */

    grid-column: ${props => props.gridCols[0]};
    grid-row: ${props => props.gridRows[0]};

    justify-self: ${props => props.justifySelf[0]};
    align-self: ${props => props.alignSelf[0]};

    padding: ${props => props.padding[0]};
    margin: ${props => props.margin[0]};

    @media screen and (min-width: ${defaultBreakpoints.md}) {
        display: ${props => props.display[1] || props.display[0]};
        grid-template-columns: ${props => props.colsTemplate[1] || props.colsTemplate[0]};
        grid-template-rows: ${props => props.rowsTemplate[1] || props.rowsTemplate[0]};

        grid-row-gap: ${props => props.rowsGap[1] || props.rowsGap[0]};
        grid-column-gap: ${props => props.columnsGap[1] || props.columnsGap[0]};

        justify-items: ${props => props.justifyItems[1] || props.justifyItems[0]};
        align-items: ${props => props.alignItems[1] || props.alignItems[0]};

        justify-content: ${props => props.justifyContent[1] || props.justifyContent[0]};
        align-content: ${props => props.alignContent[1] || props.alignContent[0]};
        grid-auto-flow: ${props => props.gridAutoFlow[1] || props.gridAutoFlow[0]};

        grid-column: ${props => props.gridCols[1] || props.gridCols[0]};
        grid-row: ${props => props.gridRows[1] || props.gridRows[0]};

        justify-self: ${props => props.justifySelf[1] || props.justifySelf[0]};
        align-self: ${props => props.alignSelf[1] || props.alignSelf[0]};

        padding: ${props => props.padding[1] || props.padding[0]};
        margin: ${props => props.margin[1] || props.margin[0]};
    }

    @media screen and (min-width: ${defaultBreakpoints.lg}) {
        display: ${props => props.display[2] || props.display[0]};
        grid-template-columns: ${props => props.colsTemplate[2] || props.colsTemplate[0]};
        grid-template-rows: ${props => props.rowsTemplate[2] || props.rowsTemplate[0]};

        grid-row-gap: ${props => props.rowsGap[2] || props.rowsGap[0]};
        grid-column-gap: ${props => props.columnsGap[2] || props.columnsGap[0]};

        justify-items: ${props => props.justifyItems[2] || props.justifyItems[0]};
        align-items: ${props => props.alignItems[2] || props.alignItems[0]};

        justify-content: ${props => props.justifyContent[2] || props.justifyContent[0]};
        align-content: ${props => props.alignContent[2] || props.alignContent[0]};
        grid-auto-flow: ${props => props.gridAutoFlow[2] || props.gridAutoFlow[0]};

        grid-column: ${props => props.gridCols[2] || props.gridCols[0]};
        grid-row: ${props => props.gridRows[2] || props.gridRows[0]};

        justify-self: ${props => props.justifySelf[2] || props.justifySelf[0]};
        align-self: ${props => props.alignSelf[2] || props.alignSelf[0]};

        padding: ${props => props.padding[2] || props.padding[0]};
        margin: ${props => props.margin[2] || props.margin[0]};
    }

    @media screen and (min-width: ${defaultBreakpoints.xl}) {
        display: ${props => props.display[3] || props.display[0]};
        grid-template-columns: ${props => props.colsTemplate[3] || props.colsTemplate[0]};
        grid-template-rows: ${props => props.rowsTemplate[3] || props.rowsTemplate[0]};

        grid-row-gap: ${props => props.rowsGap[3] || props.rowsGap[0]};
        grid-column-gap: ${props => props.columnsGap[3] || props.columnsGap[0]};

        justify-items: ${props => props.justifyItems[3] || props.justifyItems[0]};
        align-items: ${props => props.alignItems[3] || props.alignItems[0]};

        justify-content: ${props => props.justifyContent[3] || props.justifyContent[0]};
        align-content: ${props => props.alignContent[3] || props.alignContent[0]};
        grid-auto-flow: ${props => props.gridAutoFlow[3] || props.gridAutoFlow[0]};

        grid-column: ${props => props.gridCols[3] || props.gridCols[0]};
        grid-row: ${props => props.gridRows[3] || props.gridRows[0]};

        justify-self: ${props => props.justifySelf[3] || props.justifySelf[0]};
        align-self: ${props => props.alignSelf[3] || props.alignSelf[0]};

        padding: ${props => props.padding[3] || props.padding[0]};
        margin: ${props => props.margin[3] || props.margin[0]};
    }

    border: ${props => (props.debug ? "solid #ff6445 0.5px" : "none")};

    /* transition: 0.3s; */
`;

export { GridBase };
