"use client"

import { DownloadIcon } from "@phosphor-icons/react"

export default function SponsorshipKit() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">Sponsorship Kit</h2>
                <p className="text-lg text-muted-foreground">
                    Download our comprehensive sponsorship prospectus for detailed information on all partnership opportunities,
                    benefits, and deliverables.
                </p>
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors">
                    <DownloadIcon className="w-5 h-5" />
                    Download Sponsorship Kit
                </button>
            </div>
        </section>
    )
}
