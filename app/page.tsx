import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Popup } from "@/components/Popup";
import { site } from "@/lib/site";

export const metadata = {
  title: { absolute: site.name },
};

const criteria = [
  {
    title: "Reserve Quality",
    icon: "criteria-reserve-quality.png",
    items: [
      "High certainty",
      "On stable decline (8-12%)",
      "Reserve life index at least 8 years",
      "80%+ PDP",
    ],
  },
  {
    title: "Cost Structure",
    icon: "criteria-cost-structure.png",
    items: ["Clean ops", "Low operating & capital costs", "Low reclamation costs"],
  },
  {
    title: "Marketing",
    icon: "criteria-marketing.png",
    items: ["Confirmed takeaway capacity", "Low price differentials", "Ability to hedge"],
  },
  {
    title: "Reinvestment Opp.",
    icon: "Group-1-2.svg",
    items: [
      "< 30% of EBITDA to reinvest",
      "Well workovers",
      "Infill drilling",
      "Tuck-in acquisitions",
    ],
  },
  {
    title: "ESG / Regulatory",
    icon: "Group-2-1.svg",
    items: [
      "O&G friendly jurisdictions",
      "Ease of operating/permitting",
      "Little/no title issues",
      "Minimal environmental issues",
      "Visibility to reduce CO2 and CH4",
    ],
    note: "*There can be no guarantee that Covalence’s ESG efforts will be successful or that its investments create a positive ESG impact.",
  },
];

const execution = [
  {
    title: "Extensive Experience",
    icon: "image-1-1.svg",
    text: "Knowledge of asset quality across basins and geologies",
  },
  {
    title: "Proprietary Network",
    icon: "image-2-1.svg",
    text: "Offers ability to source and transact on potentially attractive assets",
  },
  {
    title: "Mergers & Acquisitions",
    icon: "image-2-1.svg",
    text: "Experience with pricing and M&A transactions",
  },
];

// The three overlapping step graphics; each opens its own list.
const stewardship = [
  {
    label: "Emissions",
    image: "step-1.png",
    offset: "",
    z: "z-[9]",
    items: [
      "Timely monitoring of methane emission",
      "Minimize flaring",
      "Create programs to anticipate and minimize leaks where possible",
    ],
  },
  {
    label: "Oilfield",
    image: "step-02.png",
    offset: "-left-2.5 md:-left-7",
    z: "z-[8]",
    items: [
      "Closed system production of piping as much oil, gas, and water as commercially possible to minimize trucking, venting, and/or flaring",
      "Utilize chemicals appropriately and sustainably where possible",
      "Reclaim abandoned wells/properties in a timely and proper manner",
    ],
  },
  {
    label: "Sustainability",
    image: "step-03.png",
    offset: "-left-5 md:-left-[50px]",
    z: "z-[7]",
    items: [
      "Influence, adopt, and adhere to industry standards for reporting and regulations",
      "Work closely with reputable peers and third-party ESG firms for continual learning and adoption of industry-standard practices",
    ],
  },
];

function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <p key={item}>
          {i + 1}. {item}
        </p>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[url(/images/homepage-banner-2.jpg)] bg-cover bg-center px-6 py-[150px] md:py-[250px]">
        <div className="text-shadow mx-auto max-w-[1080px] text-center text-white">
          <h1 className="text-[36px] font-extrabold tracking-[0.5px] text-white uppercase md:text-[48px]">
            Covalence Investment Partners
          </h1>
          <p className="mt-4 text-lg font-semibold md:text-xl">
            Dedicated to traditional energy investments, employs a
            <br className="hidden md:inline" /> demonstrated strategy aligning partners and
            assets in an effort to achieve optimal success.
          </p>
          <hr className="mx-auto my-6 w-[15%] border-t border-white" />
          <h2 className="text-lg font-semibold text-white">{site.tagline}</h2>
        </div>
      </section>

      {/* About */}
      <section className="bg-mist px-6 py-[50px]">
        <div id="about" className="mx-auto max-w-[1080px] bg-white p-[30px]">
          <div className="mx-auto w-full text-[16px] md:w-[90%] md:text-justify md:text-[18px]">
            <h2 className="mb-6 text-center text-[20px] leading-[1.7] md:text-[36px] lg:text-[48px]">
              About Covalence Investment Partners
            </h2>
            <p>
              Covalence Investment Partners was founded by David Habachy and David Krieger in
              2023 and is headquartered in Houston, Texas.
            </p>
            <p className="mt-4">
              The Firm was established to invest in the traditional energy sector, which
              Covalence believes is at an inflection point.
            </p>
            <p className="mt-4">
              Covalence Investment Partners will seek to apply a disciplined approach to
              acquiring assets and implementing an operationally intensive method to managing
              the assets in which it invests as they have done together since 2017. They blend
              a range of complementary financial skills and a foundation of technical and
              operational expertise.
            </p>
            <p className="mt-4">
              Their overall experience in O&amp;G operations includes investments in and
              providing oversight to assets in many O&amp;G basins in North America.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/about-us/"
              className="inline-block rounded-[3px] border-2 border-brand px-5 py-1.5 text-lg font-medium text-brand transition-colors hover:bg-brand hover:text-white"
            >
              The Team
            </Link>
          </div>
        </div>
      </section>

      {/* Investment strategy */}
      <section
        id="investment"
        className="bg-ocean px-6 py-[70px] text-white"
      >
        <div className="mx-auto grid max-w-[1080px] items-center gap-10 md:grid-cols-5">
          <div className="text-shadow text-center text-[14px] leading-[1.4] md:col-span-3 md:text-left">
            <h2 className="text-[36px] font-medium text-white">Covalence Investment Partners</h2>
            <h3 className="mt-2 text-lg text-white">Investment Strategy</h3>
            <p className="mt-4">
              Covalence Investment Partners seeks to target what it believes are mature,
              attractive assets.
            </p>
            <p className="mt-4">
              The initial focus lies on properties meeting specific criteria, including
              situations where the principals possess firsthand experience. The emphasis is on
              properties that we believe have a high likelihood of completing a transaction,
              primarily featuring proved, developed, and producing wells as the predominant
              assets.
            </p>
            <p className="mt-4">
              The approach is commodity-agnostic, but attention is directed towards commodity
              price differentials and access to end markets.
            </p>
          </div>
          <div className="md:col-span-2">
            <Image
              src="/images/map-3.png"
              alt="COVALENCE INVESTMENT PARTNERS"
              width={1797}
              height={1023}
              className="h-auto w-full"
            />
          </div>
        </div>

        <ul className="mx-auto mt-12 grid max-w-[1080px] gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {criteria.map((c) => (
            <li key={c.title}>
              <Popup
                label={c.title}
                trigger={
                  <span className="flex items-center gap-3 text-[18px] font-semibold text-white">
                    {/* The PNG icons carry their own purple circle; the SVGs
                        are bare glyphs, so they get the circle here. */}
                    {c.icon.endsWith(".svg") ? (
                      <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-brand p-2.5">
                        {/* eslint-disable-next-line @next/next/no-img-element -- small SVG icon */}
                        <img src={`/images/${c.icon}`} alt="" className="h-10 w-10" />
                      </span>
                    ) : (
                      <Image src={`/images/${c.icon}`} alt="" width={60} height={60} className="shrink-0" />
                    )}
                    {c.title}
                  </span>
                }
              >
                <NumberedList items={c.items} />
                {c.note && <p className="mt-6 text-sm">{c.note}</p>}
              </Popup>
            </li>
          ))}
        </ul>
      </section>

      {/* Execution */}
      <section id="execution" className="px-6 py-[54px]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-center text-[40px] text-brand-dark">Execution</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {execution.map((e) => (
              <div
                key={e.title}
                className="flex items-start gap-4 rounded-[10px] bg-white p-5 shadow-[0_0_10px_0_rgba(0,0,0,0.2)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- small SVG icon */}
                <img src={`/images/${e.icon}`} alt="" className="h-16 w-16 shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">{e.title}</h3>
                  <p className="mt-1">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental stewardship */}
      <section
        id="environmental"
        className="bg-lilac bg-[url(/images/pipes-1-1.png)] bg-contain bg-right-bottom bg-no-repeat px-6 py-[70px]"
      >
        <div className="mx-auto max-w-[1080px] text-center">
          <h2 className="text-[40px]">Environmental Stewardship</h2>
          <p className="mt-3">
            Covalence Investment Partners aims to conform with best practices in environmental
            and sustainability stewardship
          </p>
        </div>
        <div className="mx-auto mt-10 flex max-w-[1100px] justify-center pl-5 md:pl-0">
          {stewardship.map((s) => (
            <div key={s.label} className={`relative w-1/3 ${s.offset} ${s.z}`}>
              <Popup
                label={s.label}
                trigger={
                  <Image
                    src={`/images/${s.image}`}
                    alt={s.label}
                    width={400}
                    height={200}
                    className="mx-auto h-auto w-full"
                  />
                }
              >
                <NumberedList items={s.items} />
              </Popup>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-brand-dark bg-[url(/images/bg-2.png)] bg-cover bg-blend-overlay px-6 py-[54px]"
      >
        <h2 className="text-shadow text-center text-[40px] text-white">Contact</h2>
        <div className="mx-auto mt-8 grid max-w-[1080px] gap-10 pb-10 md:grid-cols-2">
          <div className="relative rounded-[5px] bg-white px-6 py-10 md:px-[50px]">
            <ContactForm />
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Image
              src="/images/map-1.png"
              alt=""
              width={427}
              height={406}
              className="h-auto w-full max-w-[500px]"
            />
            <a href={`mailto:${site.email}`} className="text-white">
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
