import { PersonCardProps } from "../../molecules/Cards/PersonCard";

export const defaultItems: PersonCardProps[] = [
    {
        img: (
            <img
                src="/images/blob.svg"
                alt="Antonio Toche"
                style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }}
            />
        ),
        tags: ["Backend", "Frontend", "CatLover"],
        name: "Antonio Toche",
        socialNet: [
            { type: "github", link: "https://github.com/antoniott15" },
            { type: "linkedin", link: "https://www.linkedin.com/in/antoniotoche/" },
            { type: "tinder", link: "https://gotinder.com/@antoniotoche" }
        ]
    },
    {
        img: (
            <img
                src="/images/blob.svg"
                alt="María Noriega"
                style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }}
            />
        ),
        tags: ["UX/UIResearch", "FrontEnd", "DataAnalyst"],
        name: "María Noriega",
        socialNet: [
            { type: "github", link: "https://github.com/mariagnoriegag" },
            { type: "linkedin", link: "https://www.linkedin.com/in/guadalupenoriega/" }
        ]
    },
    {
        img: (
            <img
                src="/images/blob.svg"
                alt="Bregy Malpartida"
                style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }}
            />
        ),
        tags: ["Inventor", "Developer", "Learner"],
        name: "Bregy Malpartida",
        socialNet: [
            { type: "github", link: "https://github.com/bregydoc" },
            { type: "linkedin", link: "https://www.linkedin.com/in/bregy/" }
        ]
    },
    {
        img: (
            <img
                src="/images/blob.svg"
                alt="Carlos A. Almenara"
                style={{ height: "50%", width: "50%", maxHeight: "180px", maxWidth: "180px" }}
            />
        ),
        tags: ["Scientist", "Psychologist", "ComputationalLover"],
        name: "Carlos Almenara",
        socialNet: [
            { type: "github", link: "https://github.com/almenaraio" },
            { type: "linkedin", link: "https://www.linkedin.com/in/almenaracarlos/" },
            { type: "twitter", link: "https://twitter.com/almenaracarlos" },
            { type: "homepage", link: "https://www.almenara.io" }
        ]
    }
];
