import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Covalence Investment Partners is led by 20+ year industry veterans David Habachy and David Krieger, who together built and ran Warburg Pincus' Houston office.",
};

const team = [
  {
    name: "David Habachy",
    title: "Managing Partner",
    photo: "David-S-Habachy.jpg",
    bio: [
      "David Habachy is a Managing Partner and Co-CEO of Covalence. Mr. Habachy most recently was a Managing Director on the Energy team at Warburg. While at Warburg, he also served as a member of the firm’s Energy Review Committee, which approved most energy investment decisions for the firm.",
      "Prior to Warburg, Mr. Habachy was a Managing Director and member of the Investment Committee of the Kayne Anderson energy funds. Prior to his career in private equity, he worked as a petroleum engineer for Arco Oil & Gas/Vastar Resources, NSAI, and Manti Resources.",
      "Mr. Habachy graduated with a B.S. in Chemical Engineering and an M.B.A. with George Kozmetsky highest honors distinction from The University of Texas at Austin. He has served on the board of directors of multiple upstream E&P companies, including recent board positions at Earthstone Energy, Inc. (NYSE: ESTE) and Ring Energy, Inc. (NYSE: REI). Additionally, Mr. Habachy serves on the Investment Committee Board for Memorial Hermann Health System.",
    ],
  },
  {
    name: "David Krieger",
    title: "Managing Partner",
    photo: "David-Krieger.jpg",
    bio: [
      "David Krieger is a Managing Partner and Co-CEO of Covalence. Mr. Krieger spent 20 years at Warburg starting as an Associate and most recently retired as a Managing Director. He led the firm’s energy investments in upstream, services and technology, was a key man of WP Energy Partners, the firm’s $4 billion energy-focused companion fund to its flagship funds, and was a member of the firm’s Executive Management Group.",
      "Prior to Warburg, Mr. Krieger was an Analyst with McKinsey & Company both in the U.S., where he worked with manufacturing-oriented companies, and in Europe, as a Corporate Finance Specialist. He graduated summa cum laude with a BSEcon from the University of Pennsylvania, an M.S. in Industrial Engineering with high honors from the Georgia Institute of Technology and an M.B.A. with distinction from Harvard Business School.",
      "Mr. Krieger currently serves as a member of the board directors of Datagration and Orennia, an observer of the board of P6 Technologies, and as a Trustee of the Houston Symphony.",
    ],
  },
];

export default function AboutUs() {
  return (
    <section className="px-6 py-[54px]">
      <div className="mx-auto max-w-[1080px]">
        <h1 className="text-[30px]">About Covalence Investment Partners</h1>
        <h2 className="mt-4 text-lg">
          Covalence Investment Partners has been established to invest in the traditional
          energy space
        </h2>
        <p className="mt-2">
          Led by 20+ year industry veterans – David Habachy and David Krieger – who, together,
          built and ran Warburg Pincus’ Houston Office &amp; were senior professionals in the
          firm’s Energy Practice
        </p>

        {team.map((person) => (
          <div key={person.name} className="mt-14 grid gap-8 md:grid-cols-3">
            <Image
              src={`/images/${person.photo}`}
              alt={person.name}
              width={600}
              height={700}
              className="h-auto w-full"
            />
            <div className="md:col-span-2">
              <h2 className="text-[30px]">{person.name}</h2>
              <h3 className="mt-1 text-lg">{person.title}</h3>
              {person.bio.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
