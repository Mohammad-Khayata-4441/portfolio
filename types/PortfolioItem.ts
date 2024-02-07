export type PortfolioItem = {
    name: string;
    id: string;
    url?: string,
    year: string,
    key:string,
    teamMates?:{name:string , url?:string , role:'Frontend Developer' | 'CTO' | 'Backend Developer' | 'Frontend Team Leader'}[]
    techFeatures?: string[],
    businessFeatures?: string[]
    screenShots: string[];
    promoVideo?: string;
    order?:number,
    technologiesIcons: string[];
    description: string;
    workInformation: string;
    client?: string;
    gitRepo?: string,
    npmPackage?:string
    coverImage:string
    primaryColor: string,
    type: ("Landing Page" | "Website" | "eCommerce" | "Dashboard" | "Web Application" | "Package")[];
    status: "Pending" | "in Progress" | "Finished" | "Deprated";
}