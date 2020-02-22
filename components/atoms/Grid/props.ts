export interface GridProps {
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
    justifySelf?: "start" | "end" | "center" | "stretch; (default)" | "default";
    alignSelf?: "start" | "end" | "center" | "stretch; (default)" | "default";

    gridRow?: string;
    gridColumn?: string;
    flex?: boolean;
    p?: string;
    px?: string;
    py?: string;
    m?: string;
    mx?: string;
    my?: string;
}
