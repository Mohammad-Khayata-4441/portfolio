import { Skill } from "./Skll";

export type PortfolioItem = {
    name: string;
    id: string;
    host_url?: string,
    year: string,
    key: string,
    teamMates?: { name: string, url?: string, role: 'Frontend Developer' | 'CTO' | 'Backend Developer' | 'Frontend Team Leader' }[]
    techFeatures?: string[],
    businessFeatures?: string[]
    images: string[];
    promoVideo?: string;
    order?: number,
    technologiesIcons: string[];
    description: string;
    workInformation: string;
    client?: string;
    repo_url?: string,
    npm_package?: string
    cover_image: string
    primary_color: string,
    type: ("Landing Page" | "Website" | "eCommerce" | "Dashboard" | "Web Application" | "Package")[];
    status: "Pending" | "in Progress" | "Finished" | "Deprated";
    project_skills: ProjectSkill[]
}

export type ProjectSkill = {
    id: number;
    skills: Skill
}