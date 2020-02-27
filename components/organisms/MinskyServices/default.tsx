type ContentServiceCard = {
    icon: any;
    title: string;
    body: string;
};

export const defaultItems: ContentServiceCard[] = [
    {
        icon: <img src="/images/ideation.png" alt="Ideation" height="48px" width="48px" />,
        title: "Ideation and Strategy",
        body: "We offer experience in building a new product."
    },
    {
        icon: <img src="/images/design.png" alt="Design" height="48px" width="48px" />,
        title: "Product Design",
        body: "We will create a beufiful and working design for your idea."
    },
    {
        icon: <img src="/images/development.png" alt="Development" height="48px" width="48px" />,
        title: "Web and Mobile Development",
        body: "We specialise in delivering end-to-end services."
    },
    {
        icon: <img src="/images/devOps.png" alt="DevOps" height="48px" width="48px" />,
        title: "DevOps and Cloud",
        body: "We use modern microservices approach for your software."
    }
];
