import { Metadata } from "next"

export const SITE_CONFIG = {
    name: "Zen Forward Africa",
    shortName: "AYBCIF",
    description: "Africa Youth, Business & Climate Innovation Forum - Empowering Africa's future through youth innovation, business development, and climate action.",
    url: "https://zenforwardafrica.org", // Update with actual production URL
    ogImage: "/images/og-image.jpg", // Update with actual OG image path
    keywords: [
        "Africa Youth",
        "Climate Innovation",
        "Business Forum",
        "AYBCIF",
        "Zen Forward Africa",
        "Youth Empowerment",
        "Sustainable Development",
        "Climate Action",
        "African Innovation",
        "Green Economy",
        "Youth Leadership",
        "Climate Tech",
        "Nairobi",
        "Kenya",
        "2026",
    ],
}

interface SEOProps {
    title?: string
    description?: string
    keywords?: string[]
    ogImage?: string
    ogType?: string
    noindex?: boolean
    canonical?: string
}

export function generateMetadata({
    title,
    description = SITE_CONFIG.description,
    keywords = SITE_CONFIG.keywords,
    ogImage = SITE_CONFIG.ogImage,
    ogType = "website",
    noindex = false,
    canonical,
}: SEOProps = {}): Metadata {
    const metaTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name
    const metaDescription = description
    const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_CONFIG.url}${ogImage}`

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: keywords.join(", "),
        authors: [{ name: SITE_CONFIG.name }],
        creator: SITE_CONFIG.name,
        publisher: SITE_CONFIG.name,
        robots: noindex ? "noindex, nofollow" : "index, follow",
        alternates: {
            canonical: canonical || SITE_CONFIG.url,
        },
        openGraph: {
            type: ogType as any,
            title: metaTitle,
            description: metaDescription,
            url: canonical || SITE_CONFIG.url,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: absoluteOgImage,
                    width: 1200,
                    height: 630,
                    alt: metaTitle,
                },
            ],
            locale: "en_US",
        },
        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description: metaDescription,
            images: [absoluteOgImage],
            creator: "@ZenForwardAfrica", // Update with actual Twitter handle
        },
    }
}

// Generate Organization JSON-LD structured data
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.shortName,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/images/logo.png`,
        description: SITE_CONFIG.description,
        sameAs: [
            "https://facebook.com/ZenForwardAfrica", // Update with actual social URLs
            "https://twitter.com/ZenForwardAfrica",
            "https://linkedin.com/company/zen-forward-africa",
            "https://instagram.com/zenforwardafrica",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            email: "info@zenforwardafrica.org",
            contactType: "Customer Service",
            areaServed: "Africa",
            availableLanguage: ["English"],
        },
    }
}

// Generate Event JSON-LD structured data
export function generateEventSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Event",
        name: "Africa Youth, Business & Climate Innovation Forum 2026",
        description: "A three-day forum bringing together African youth, business leaders, and climate experts to drive sustainable innovation and economic growth.",
        startDate: "2026-05-27T09:00:00+03:00",
        endDate: "2026-05-29T18:00:00+03:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
            "@type": "Place",
            name: "To be announced",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Nairobi",
                addressCountry: "KE",
            },
        },
        organizer: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
        },
        offers: {
            "@type": "Offer",
            url: `${SITE_CONFIG.url}/event#registration`,
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            validFrom: "2025-12-01T00:00:00+03:00",
        },
        performer: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
        },
        image: `${SITE_CONFIG.url}/images/event-hero.jpg`,
    }
}

// Generate BreadcrumbList JSON-LD structured data
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${SITE_CONFIG.url}${item.url}`,
        })),
    }
}
