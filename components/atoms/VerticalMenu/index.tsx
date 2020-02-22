import React, { FC } from "react";
import { styled } from "linaria/react";

const Wrapper = styled.div`
    margin: 1em 1em;
`;

interface ItemProps {
    selected?: boolean;
}

const Item = styled.div<ItemProps>`
    font-family: "Karla";
    font-size: 16px;
    font-weight: ${props => (props.selected ? "600" : "400")};
    padding: 0.2em 0.4em;
    margin-bottom: 0.4em;
    width: fit-content;
    transition: 0.3s;
    cursor: default;
    border-radius: 0.2em;

    background-color: transparent;

    :hover {
        background-color: ${props => (props.selected ? "transparent" : "#f0f0f0")};
        cursor: pointer;
    }
`;

const Line = styled.div`
    width: 100%;
    height: 0.2em;
    background-color: #ffdf53;
    border-radius: 2em;
`;

export interface VerticalMenuItem {
    name: string;
    key: string;
}

export interface VerticalMenuProps {
    items: VerticalMenuItem[];
    compact?: boolean;
    selectedItem?: string;
    onSelected?(item: VerticalMenuItem): void;
}

const VerticalMenu: FC<VerticalMenuProps> = (props: VerticalMenuProps) => {
    if (props.compact) {
        const items = props.items.filter(item => item.key === props.selectedItem);
        if (items.length < 1) {
            throw "invalid selected item";
        }

        return (
            <Wrapper>
                <Item selected>
                    {items[0].name}
                    <Line />
                </Item>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            {props.items.map(item => {
                const sel: boolean = item.key === props.selectedItem;
                return (
                    <Item selected={sel} onClick={() => props.onSelected(item)}>
                        {item.name}
                        {sel && <Line />}
                    </Item>
                );
            })}
        </Wrapper>
    );
};

export default VerticalMenu;
