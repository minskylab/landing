import {
    JustifyContent,
    JustifyItems,
    SMMinimal,
    AlignItems,
    AlignContent,
    GridAutoFlow,
    JustifySelf,
    AlignSelf
} from "./base";

export interface GridProps {
    container?: boolean | boolean[];
    columnsTemplate?: string | string[];
    rowsTemplate?: string | string[];

    gap?: string | string[];
    rowGap?: string | string[];
    columnGap?: string | string[];

    justifyItems?: JustifyItems | SMMinimal<JustifyItems>;
    alignItems?: AlignItems | SMMinimal<AlignItems>;
    justifyContent?: JustifyContent | SMMinimal<JustifyContent>;
    alignContent?: AlignContent | SMMinimal<AlignContent>;
    gridAutoFlow?: GridAutoFlow | SMMinimal<GridAutoFlow>;
    justifySelf?: JustifySelf | SMMinimal<JustifySelf>;
    alignSelf?: AlignSelf | SMMinimal<AlignSelf>;

    gridRow?: string | string[];
    gridColumn?: string | string[];
    flex?: boolean | string[];
    p?: string | string[];
    px?: string | string[];
    py?: string | string[];
    m?: string | string[];
    mx?: string | string[];
    my?: string | string[];
}
