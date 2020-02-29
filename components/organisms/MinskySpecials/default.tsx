import { SpecialProps } from "../../molecules/Cards/SpecialCard";

export const defaultItems: SpecialProps[] = [
    {
        image: <img src="/images/softDev.png" alt="Software Development" style={{ height: "25vh", width: "auto" }} />,
        title: "Software Development",
        topics: [
            "IT Consulting",
            "DevOps Services",
            "Mobile and Web Apps",
            "Maintenance and Support",
            "IA and Machine Learing Development"
        ],
        iconTopic: (
            <img src="/images/blobpoint.svg" alt="Software Develpment" style={{ height: "0.8rem", width: "auto" }} />
        )
    },
    {
        image: (
            <img src="/images/blockchain.png" alt="Blockchain Solutions" style={{ height: "25vh", width: "auto" }} />
        ),
        title: "Blockchain Solutions",
        topics: ["Business Consulting", "Cross-Border payments", "Blockchain for Business", "Product Development"],
        iconTopic: <img src="/images/blobpoint.svg" alt="Blockchain" style={{ height: "0.8rem", width: "auto" }} />
    },
    {
        image: <img src="/images/iot.png" alt="Iot" style={{ height: "25vh", width: "auto" }} />,
        title: "Iot and Embedded Systems",
        topics: ["Hardware Development", "Prototyping", "System Design", "Consulting"],
        iconTopic: <img src="/images/blobpoint.svg" alt="Iot" style={{ height: "0.8rem", width: "auto" }} />
    }
];
