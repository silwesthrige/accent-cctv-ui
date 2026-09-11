import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Projects | Accent CCTV Solutions",
  description: "A selection of recent CCTV, alarm and access control installations by Accent CCTV Solutions.",
};

const projects = [
  {
    title: "Warehouse Perimeter Protection",
    category: "Industrial & Logistics",
    description: "Thermal and ANPR cameras covering a 12-acre distribution yard, integrated with the site's existing alarm.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Retail Store Refit",
    category: "Retail",
    description: "Colour night-vision cameras and heat mapping across five stores, live within a fortnight.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Family Home CCTV & Door Entry",
    category: "Residential",
    description: "A four-camera WiFi kit plus video door entry, fitted in a single day.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Office Access Control Upgrade",
    category: "Commercial Offices",
    description: "Video door entry across reception and staff entrances, timestamped alongside CCTV footage.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "School Campus Monitoring",
    category: "Education",
    description: "Full-perimeter coverage with AcuSense detection to reduce false alarms out of school hours.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Monitored Alarm Installation",
    category: "Alarm Systems",
    description: "A monitored intruder alarm with smart sensors, integrated with the building's CCTV system.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        breadcrumb="Projects"
        title="Recent installations"
        description="A snapshot of the CCTV, alarm and access control projects we've delivered for homes and businesses."
      />

      <section className="relative bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {projects.map((project) => (
              <RevealItem key={project.title}>
                <div className="group h-full overflow-hidden rounded-2xl border border-line bg-surface/60 transition hover:-translate-y-1 hover:border-brand-blue/40">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm text-foreground/60">{project.description}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABanner
        title="Have a project in mind?"
        description="Tell us about your property and we'll put together a tailored plan and quote."
      />
    </>
  );
}
