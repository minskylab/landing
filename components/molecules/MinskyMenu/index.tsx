import React, { FC, ReactElement } from "react";
import { styled } from "linaria/react";
import { Grid } from "../../atoms/Grid/v2";
import { MinskyLogoIcon, UpArrowIcon } from "../../atoms/Icon/icons";
import VerticalMenu, { VerticalMenuItem } from "../../atoms/VerticalMenu";
import ButtonIcon from "../../atoms/Button/ButtonIcon";

const Wrapper = styled.div`
    width: 100%;
    background-color: #ffdf53;
    border-radius: 0 0 1.4em 1.4em;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

interface MinskyMenuProps {
    cleanMode?: boolean;
    onClose?: () => void;
    compact?: boolean;
    onSelected?: (item: VerticalMenuItem) => void;
    selectedItem?: string;
    items?: VerticalMenuItem[];
    right?: ReactElement;
}

const MinskyMenu: FC<MinskyMenuProps> = (props: MinskyMenuProps) => {
    return (
        <Wrapper>
            <Grid
                type={"grid"}
                colsTemplate={{ parts: 3, size: "auto" }}
                rowsTemplate={{ parts: 3, size: "auto" }}
                p={{ x: "0.8em", y: "0.8em" }}
            >
                <Grid
                    type={"grid"}
                    colsTemplate={{ parts: 3, size: "1fr" }}
                    cols={{ from: 1, how: 3 }}
                    rows={{ from: 1, how: 1 }}
                    alignItems={"start"}
                    m={{ bottom: "1em", top: "0.4em" }}
                >
                    <Grid type={"flex"} cols={{ from: 1, how: 1 }} justifyContent={"flex-start"}>
                        <ButtonIcon icon={UpArrowIcon} onClick={props.onClose} />
                    </Grid>
                    <Grid type={"flex"} cols={{ from: 2, how: 1 }} alignItems={"center"} justifyContent={"center"}>
                        {!props.cleanMode && <MinskyLogoIcon />}
                    </Grid>
                </Grid>
                <Grid type={"flex"} cols={{ from: 1, to: 2 }} rows={{ from: 2, how: 1 }} alignItems={"end"}>
                    <VerticalMenu
                        items={props.items}
                        selectedItem={props.selectedItem}
                        onSelected={props.onSelected}
                        compact={props.compact}
                    />
                </Grid>
                <Grid
                    type={"grid"}
                    cols={{ from: 3, how: 1 }}
                    rows={{ from: 2, how: 1 }}
                    alignItems={"end"}
                    rowsTemplate={{ parts: 2, size: "auto" }}
                    justifyContent={"end"}
                    alignContent={"flex-end"}
                    p={{ bottom: "0em", top: "2.4em" }}
                    m={{ bottom: "0.5em" }}
                >
                    {!props.cleanMode && props.right}
                </Grid>
            </Grid>
        </Wrapper>
    );
};

export default MinskyMenu;
