import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{

    return [
        {
            url:`https://mohammad-khayata.vercel.app/en/`,
        },
        {
            url:`https://mohammad-khayata.vercel.app/en/about`,
        },
        {
            url:`https://mohammad-khayata.vercel.app/en/portfolio`,
        },
        {
            url:`https://mohammad-khayata.vercel.app/en/contact`,
        },
    ]
}