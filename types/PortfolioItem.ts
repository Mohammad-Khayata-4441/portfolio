export type PortfolioItem = {
    name: string;
    id: string;
    screenShots: string[];
    url?: string,
    year: string,
    technologiesIcons: string[];
    description: string;
    workInformation: string;
    client: string;
    gitRepo?: string,
    primaryColor: string,
    type: ("Landing Page" | "Website" | "eCommerce" | "Dashboard" | "Web Application")[];
    status: "Pending" | "in Progress" | "Finished" | "Deprated";
}