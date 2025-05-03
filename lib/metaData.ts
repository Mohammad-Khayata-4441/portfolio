// lib/metadata.ts
export interface PageMetadataOptions {
    title?: string;
    description?: string;
    slug?: string; // e.g. 'projects' or 'about'
}
import type { Metadata } from 'next';


const BASE_URL = 'https://mohammad-khayata.vercel.app';
const DEFAULT_TITLE = 'Mohammad Khayata – Frontend Developer';
const DEFAULT_DESCRIPTION =
    'Portfolio of Mohammad Khayata, a frontend developer specialized in scalable and modular web apps using React, Next.js, and modern technologies.';

export function generatePageMetadata({
    title,
    description,
    slug = '',
}: PageMetadataOptions): Metadata {
    const fullTitle = title ? `${title}` : DEFAULT_TITLE;
    const fullDescription = description || DEFAULT_DESCRIPTION;
    const url = `${BASE_URL}/${slug}`;

    return {
        title: fullTitle,
        description: fullDescription,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: fullTitle,
            description: fullDescription,
            url,
            siteName: 'Mohammad Khayata',
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: fullDescription,
            images: ['https://example.com/og-image.png'],

        },
    };
}
