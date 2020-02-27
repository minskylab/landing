import { PersonCardProps } from "../../molecules/Cards/personCard";

export const defaultItems: PersonCardProps[] = [
    {
        img: (
            <img
                src="/images/blob.svg"
                style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }}
            />
        ),
        tags: ["Backend", "Frontend", "CatLover"],
        name: "Antonio Toche",
        socialNet: ["Github", "Linkedin"]
    },
    {
        img: (
            <img
                src="/images/blob.svg"
                style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }}
            />
        ),
        tags: ["UXIUResearch", "FrontEnd", "DataAnalyst"],
        name: "María Noriega",
        socialNet: ["Github", "Linkedin"]
    },
    {
        img: (
            <img
                src="/images/blob.svg"
                style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }}
            />
        ),
        tags: ["Inventor", "Developer", "UXIUResearch"],
        name: "Bregy Malpartida",
        socialNet: ["Github", "Linkedin"]
    },
    {
        img: (
            <img
                src="/images/blob.svg"
                style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }}
            />
        ),
        tags: ["Scientist", "Psychologist", "ComputationalLover"],
        name: "Carlos Almenara",
        socialNet: ["Github", "Linkedin", "Twitter"]
    }
];
