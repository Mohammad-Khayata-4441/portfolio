export type PortfolioItem = {
    name: string;
    id: string;
    imageUrl: string;
    technologiesIcons: string[];
    description: string;
    workInformation: string;
    client: string;
    primaryColor:string,
    type:["Landing Page" | "Website" | "eCommerce" | "Dashboard"  , "Web Application"];
    status: "Pending" | "in Progress" | "Finished" | "Deprated";
}