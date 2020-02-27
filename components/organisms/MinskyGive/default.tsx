import PrizeOutline from "../../atoms/Icon/PrizeOutline";
import BranchOutline from "../../atoms/Icon/BranchOutline";
import LoveOutline from "../../atoms/Icon/LoveOutline";
import ColorTypes from "../../atoms/Colors";
import { ValueProp } from "../../molecules/Cards/Value";

export const defaultItems: ValueProp[] = [
    {
        title: "High level of service",
        body:
            "We respond to the needs and desires of customers, with the lowest possible cost and the highest level of quality and details.",
        icon: <PrizeOutline color={ColorTypes.black._50} />
    },
    {
        title: "Constant maintenance",
        body:
            "We keep abreast of the latest technologies, test them and verify their effectiveness in the development of projects.",
        icon: <BranchOutline color={ColorTypes.black._50} />
    },
    {
        title: "Open development for the community",
        body:
            "Every time we take projects, micro technology and engines occur to us, which we make available to the community in order to improve the development of technology in the country.",
        icon: <LoveOutline color={ColorTypes.black._50} />
    }
];
