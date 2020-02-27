import { PersonCardProps } from "../../molecules/Cards/PersonCard";

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
        socialNet: [{ type: "github" }, { type: "linkedin" }]
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
        socialNet: [{ type: "github" }, { type: "linkedin" }]
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
        socialNet: [{ type: "github" }, { type: "linkedin" }]
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
        socialNet: [{ type: "github" }, { type: "linkedin" }, { type: "twitter" }]
    }
];
