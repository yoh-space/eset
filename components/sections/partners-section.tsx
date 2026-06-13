"use client";

import Image from "next/image";

const PARTNERS = [
  {
    name: "Ethiopian Ministry of Women and Social Affairs",
    tag: "Government Partner",
    logo: "/images/partners/mowsa.png",
    initials: "MoWSA",
    color: "#1a6b3c",
    website: "https://www.mowsa.gov.et",
  },
  {
    name: "United Nations Development Programme",
    tag: "Development Partner",
    logo: "/images/partners/undp.svg",
    initials: "UNDP",
    color: "#009edb",
    website: "https://www.undp.org",
  },
  {
    name: "African Union Commission",
    tag: "Continental Partner",
    logo: "/images/partners/african-union.png",
    initials: "AU",
    color: "#006b3f",
    website: "https://au.int",
  },
  {
    name: "Ethiopian Red Cross Society",
    tag: "Humanitarian Partner",
    logo: "/images/partners/ethiopian-red-cross.png",
    initials: "ERCS",
    color: "#ce1126",
    website: "https://www.ercs.org.et",
  },
  {
    name: "Addis Ababa University",
    tag: "Academic Partner",
    logo: "/images/partners/addis-ababa-university.png",
    initials: "AAU",
    color: "#003087",
    website: "https://www.aau.edu.et",
  },
  {
    name: "World Food Programme",
    tag: "Food Security Partner",
    logo: "/images/partners/wfp.svg",
    initials: "WFP",
    color: "#0099cc",
    website: "https://www.wfp.org",
  },
];

export function PartnersSection() {
  return (
    <section className="w-full py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-green-700 mb-3 block">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Trusted by leading organizations
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            We collaborate with government bodies, international agencies, and
            academic institutions to maximize our impact across Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              title={partner.name}
            >
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={64}
                  height={64}
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = partner.color + "15";
                      parent.style.borderRadius = "12px";
                      parent.innerHTML = `<span style="color:${partner.color};font-weight:700;font-size:13px;">${partner.initials}</span>`;
                    }
                  }}
                />
              </div>
              <span className="text-[10px] font-medium text-gray-400 text-center leading-tight group-hover:text-gray-600 transition-colors">
                {partner.tag}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
