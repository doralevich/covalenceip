import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="bg-navy py-14">
        <div className="mx-auto flex max-w-[1080px] justify-center px-6">
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo, no optimisation needed */}
          <img
            src="/images/CovalencePurpleLogo.svg"
            alt={`${site.name} Logo`}
            className="h-auto w-3/4 max-w-[370px] md:w-[34%]"
          />
        </div>
      </div>
      <div className="bg-ink py-4">
        <p className="mx-auto w-4/5 max-w-[1250px] text-center text-xs text-white">
          © {new Date().getFullYear()}&nbsp; All Rights Reserved. |{" "}
          <a href="https://designsbydaveo.com" target="_blank" rel="noopener">
            Designs By Dave O.
          </a>
        </p>
      </div>
    </footer>
  );
}
