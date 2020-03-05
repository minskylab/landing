import React, { FC, ReactElement } from "react";
import Grid from "../Grid/v2";
import { styled } from "linaria/react";
import { Subtitle, Title } from "../Text/v2";
import { Button } from "../Button";
import { useSpring, animated } from "react-spring";
import { CloseIcon } from "../Icon/icons";

const Card = styled.div`
    background-color: white;
    border-radius: 0.8rem;
    padding: 1rem;
    min-width: 16rem;
    max-width: 90vw;
    z-index: 13;
`;

type Action = "open" | "close" | "ok" | "cancel";

interface ModalCardProps {
    title: string;
    children: ReactElement;
    titleBold?: boolean;
    closable?: boolean;
    customActions?: ReactElement;
    onAction?: (action: Action) => void;
}

const ModalCard: FC<ModalCardProps> = (props: ModalCardProps) => {
    const animatedIn = useSpring({ transform: "translateY(0)", from: { transform: "translateY(80vh)" } });
    return (
        <animated.div style={animatedIn}>
            <Card>
                <Grid rowsTemplate={{ parts: 3, size: "auto" }}>
                    <Grid type={"flex"} justifyContent={"flex-start"}>
                        {/* HEADER */}
                        <Title bold={props.titleBold}>{props.title}</Title>
                        {props.closable && (
                            <>
                                <div style={{ marginLeft: "auto" }}></div>
                                <div onClick={() => props.onAction && props.onAction("close")}>
                                    <CloseIcon />
                                </div>
                            </>
                        )}
                    </Grid>
                    <Grid m={{ y: "1rem", x: "1rem" }}>
                        {/* BODY */}
                        {props.children}
                    </Grid>
                    <Grid type={"flex"} justifyContent={"flex-end"}>
                        {/* FOOTER */}
                        {props.customActions || (
                            <>
                                <Grid m={{ right: "0.8rem" }}>
                                    <Button secondary onClick={() => props.onAction && props.onAction("cancel")}>
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid>
                                    <Button primary onClick={() => props.onAction && props.onAction("ok")}>
                                        Ok
                                    </Button>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Grid>
            </Card>
        </animated.div>
    );
};

export default ModalCard;
