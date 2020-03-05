import { PersonCardProps } from "../../molecules/Cards/PersonCard";

export const defaultItems: PersonCardProps[] = [
    {
        img: (
            <img
                src="/images/blob.svg"
                alt= "Antonio Toche"
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
                alt = "María Noriega"
                style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }}
            />
        ),
        tags: ["UX/UIResearch", "FrontEnd", "DataAnalyst"],
        name: "María Noriega",
        socialNet: [{ type: "github" }, { type: "linkedin" }]
    },
    {
        img: (
            <img
                src="/images/blob.svg"
                alt= "Bregy Malpartida"
                style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }}
            />
        ),
        tags: ["Inventor", "Developer", "UX/UIResearch"],
        name: "Bregy Malpartida",
        socialNet: [{ type: "github" }, { type: "linkedin" }]
    },
    {
        img: (
            <img
                src="/images/blob.svg"
                alt = "Carlos A. Almenara"
                style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }}
            />
        ),
        tags: ["Scientist", "Psychologist", "ComputationalLover"],
        name: "Carlos A. Almenara",
        socialNet: [{ type: "github" }, { type: "linkedin" }, { type: "twitter" }]
    }
];
