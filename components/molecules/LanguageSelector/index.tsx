import React, { useState, FC, useRef, useEffect } from "react";
import { styled } from "linaria/react";
import { Text } from "../../atoms/Text/v2";

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    width: fit-content;
    height: fit-content;
    align-items: flex-end;
    position: absolute;
    z-index: 5;
`;

const Box = styled.div`
    padding: 0.1rem 0.5rem;
    background-color: #f0f0f0;
    border-radius: 0.2rem;
    display: flex;
    width: fit-content;
    :hover {
        cursor: pointer;
        background-color: #ffdf53;
    }
`;

interface SelectorProps {
    outing: boolean;
}

const Selector = styled.div<SelectorProps>`
    display: flex;
    flex-flow: column;
    height: fit-content;
    width: fit-content;
    background-color: #ffffff;
    border: solid 1px #1b1b1b;
    border-radius: 0.4rem;
    overflow: hidden;

    transition: 0.3s;
    animation: in 0.3s linear;

    transform: ${props => (props.outing ? "translateY(-1rem)" : "translateY(0)")};
    opacity: ${props => (props.outing ? "0" : "100%")};
    @keyframes in {
        from {
            transform: translateY(-1rem);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 100%;
        }
    }

    @keyframes out {
        from {
            transform: translateY(0);
            opacity: 100%;
        }

        to {
            transform: translateY(-1rem);
            opacity: 0;
        }
    }
`;

const Item = styled.div`
    padding: 0.2rem 0.6rem;
    :hover {
        background-color: #ffdf53;
        cursor: pointer;
    }
`;

export interface LanguageLocale {
    little: string;
    full: string;
}

interface LanguageSelectorProps {
    languages: LanguageLocale[];
    initialSelected: string;
    onLanguageSelected?: (lang: LanguageLocale) => void;
}

const LanguageSelector: FC<LanguageSelectorProps> = (props: LanguageSelectorProps) => {
    const [openSelector, setOpenSelector] = useState<boolean>(false);
    const [outingSelector, setOutingSelector] = useState<boolean>(false);
    const [currentLang, setCurrentLang] = useState<LanguageLocale>(
        props.languages.filter(l => l.little === props.initialSelected)[0]
    );
    const [inOurOut, setInOrOut] = useState<number>(0);

    const selectorRef = useRef(null);
    // useOutsideAlerter(selectorRef);
    const onToggleSelector = () => {
        if (openSelector) {
            // to close... (outing)
            setOutingSelector(true);
            setTimeout(() => {
                setOpenSelector(!openSelector);
                setOutingSelector(false);
            }, 400); // 300ms 0.3s + 100ms
        } else {
            setInOrOut(0);
            setOpenSelector(!openSelector);
        }
    };

    return (
        <Wrapper ref={selectorRef}>
            <div style={{ paddingLeft: "5.4rem" }}>
                <Box onClick={() => onToggleSelector()}>
                    <Text bold fontFamily={"Rubik"} size={"1rem"}>
                        {currentLang.little.toUpperCase()}
                    </Text>
                </Box>
            </div>
            {openSelector && (
                <Selector
                    outing={outingSelector}
                    onMouseEnter={() => setInOrOut(inOurOut - 1)}
                    onMouseLeave={() => setInOrOut(inOurOut + 1)}
                >
                    {props.languages.map((lng, i) => {
                        return (
                            <Item
                                key={i}
                                onClick={() => {
                                    props.onLanguageSelected && props.onLanguageSelected(lng);
                                    onToggleSelector();
                                    setCurrentLang(lng);
                                }}
                            >
                                <Text fontFamily={"PT Mono"} size={"0.875rem"}>
                                    {lng.full}
                                </Text>
                            </Item>
                        );
                    })}
                </Selector>
            )}
        </Wrapper>
    );
};

export default LanguageSelector;
