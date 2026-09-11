import { Building2, Landmark, Warehouse, ShoppingBag, GraduationCap, Plane, Hospital, Factory } from "lucide-react";

const logos = [
  { icon: Building2, name: "Northgate Offices" },
  { icon: Landmark, name: "Meridian Corp" },
  { icon: Warehouse, name: "Cargill Logistics" },
  { icon: ShoppingBag, name: "Halcyon Retail" },
  { icon: GraduationCap, name: "Ashford Academy" },
  { icon: Plane, name: "Skyline Transit" },
  { icon: Hospital, name: "Wellpoint Health" },
  { icon: Factory, name: "Ironclad Industrial" },
];

export function TrustBar() {
  const doubled = [...logos, ...logos];
  return (
    <section className="relative border-y border-line bg-background py-10">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">
        Trusted by homes and businesses including
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="animate-marquee flex w-fit items-center gap-16">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap text-foreground/40 grayscale transition duration-300 hover:text-foreground hover:grayscale-0"
            >
              <logo.icon className="h-6 w-6" />
              <span className="font-display text-lg font-semibold">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
