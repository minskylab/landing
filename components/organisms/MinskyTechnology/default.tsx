import { TecnologyCard } from ".";
import { Repository } from "../../molecules/GithubCard/github";

export const defaultItems: TecnologyCard[] = [
    {
        title: "Chatbots",
        description: "Multichannel technology",
        repository: ""
    },
    {
        title: "Payment",
        description: "Multi payment gateway",
        repository: ""
    },
    {
        title: "Just for fun",
        description: "Developing everything",
        repository: ""
    }
];

export const NeocortexDefault: Repository = {
    id: 175750396,
    name: "neocortex",
    description:
        "🧠Neocortex is a tool to connect your cognitive service (e.g. DialogFlow) 🤖 with your communication channels (like facebook) 📞to create amazing bots",
    language: "Go",
    owner: {
        avatar_url: "https://avatars2.githubusercontent.com/u/59119432?v=4",
        login: "minskylab"
    },
    stargazers_count: 19,
    forks_count: 2
};

export const PlutusDefault: Repository = {
    id: 175750396,
    name: "plutus",
    description:
        "Plutus is a modern little tool to manage your payments, charges and invoices of your products. This tool is payment gateway agnostic and it's like a new layer on your traditional payment stack.",
    language: "Go",
    owner: {
        avatar_url: "https://avatars2.githubusercontent.com/u/59119432?v=4",
        login: "minskylab"
    },
    stargazers_count: 2,
    forks_count: 0
};

export const Pe2020ruDefault: Repository = {
    id: 175750396,
    name: "pe2020ru",
    description:
        "Peru2020Scrapper es un programa que extrae tweets relacionados a las Elecciones Congresales Extraordinarias 2020 del Peru cada 30 minutos y pone los resultados a disposición de la comunidad.",
    language: "Python",
    owner: {
        avatar_url: "https://avatars2.githubusercontent.com/u/59119432?v=4",
        login: "minskylab"
    },
    stargazers_count: 3,
    forks_count: 3
};
