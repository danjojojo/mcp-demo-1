type StyleEntry = {
  label: string;
  className: string;
  family: string;
  weight: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  usage: string;
};

const desktopStyles: StyleEntry[] = [
  {
    label: "Display L",
    className: "desktop-display-l",
    family: "TASA Explorer",
    weight: "800 · ExtraBold",
    size: "120 px · 7.5 rem",
    lineHeight: "0.9",
    letterSpacing: "−0.02 em (−2%)",
    usage: "Hero statement",
  },
  {
    label: "Display M",
    className: "desktop-display-m",
    family: "TASA Explorer",
    weight: "800 · ExtraBold",
    size: "106 px · 6.625 rem",
    lineHeight: "1.0",
    letterSpacing: "−0.02 em (−2%)",
    usage: "Section heading",
  },
  {
    label: "Heading L",
    className: "desktop-heading-l",
    family: "TASA Explorer",
    weight: "700 · Bold",
    size: "76.29 px · 4.768 rem",
    lineHeight: "1.0",
    letterSpacing: "−0.02 em (−2%)",
    usage: "Banner sections",
  },
  {
    label: "Heading M",
    className: "desktop-heading-m",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "61.04 px · 3.815 rem",
    lineHeight: "1.1",
    letterSpacing: "−0.02 em (−2%)",
    usage: "Main section subheadings",
  },
  {
    label: "Heading XS",
    className: "desktop-heading-xs",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "37.32 px · 2.333 rem",
    lineHeight: "1.3",
    letterSpacing: "0",
    usage: "Small section title",
  },
  {
    label: "Title L",
    className: "desktop-title-l",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "31.1 px · 1.944 rem",
    lineHeight: "1.3",
    letterSpacing: "−0.02 em (−2%)",
    usage: "Large card titles",
  },
  {
    label: "Title M",
    className: "desktop-title-m",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "25 px · 1.563 rem",
    lineHeight: "1.4",
    letterSpacing: "0",
    usage: "Minor text block headings",
  },
  {
    label: "Body L",
    className: "desktop-body-l",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "20 px · 1.25 rem",
    lineHeight: "1.5",
    letterSpacing: "0",
    usage: "Main body copy",
  },
  {
    label: "Body M",
    className: "desktop-body-m",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "18 px · 1.125 rem",
    lineHeight: "1.5",
    letterSpacing: "0",
    usage: "Main body copy",
  },
];

// Mobile/Body L API style definition = 18 px; the Figma canvas specimen shows
// 22.5 px. Named-style values are used here — verify with designer if needed.
const mobileStyles: StyleEntry[] = [
  {
    label: "Display L",
    className: "mobile-display-l",
    family: "TASA Explorer",
    weight: "800 · ExtraBold",
    size: "54.93 px · 3.433 rem",
    lineHeight: "0.95",
    letterSpacing: "−0.02 em (−2%)",
    usage: "Hero statement",
  },
  {
    label: "Display M",
    className: "mobile-display-m",
    family: "TASA Explorer",
    weight: "800 · ExtraBold",
    size: "43.95 px · 2.747 rem",
    lineHeight: "1.0",
    letterSpacing: "−0.02 em (−2%)",
    usage: "Section heading",
  },
  {
    label: "Heading L",
    className: "mobile-heading-l",
    family: "TASA Explorer",
    weight: "700 · Bold",
    size: "35.16 px · 2.198 rem",
    lineHeight: "1.1",
    letterSpacing: "−0.02 em (−2%)",
    usage: "Banner sections",
  },
  {
    label: "Heading M",
    className: "mobile-heading-m",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "28.13 px · 1.758 rem",
    lineHeight: "1.1",
    letterSpacing: "0",
    usage: "Main section subheadings",
  },
  {
    label: "Heading S",
    className: "mobile-heading-s",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "22.5 px · 1.406 rem",
    lineHeight: "1.1",
    letterSpacing: "−0.02 em (−2%)",
    usage: "Small section title",
  },
  {
    label: "Title L",
    className: "mobile-title-l",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "21 px · 1.313 rem",
    lineHeight: "1.2",
    letterSpacing: "0",
    usage: "Large card titles",
  },
  {
    label: "Body L",
    className: "mobile-body-l",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "18 px · 1.125 rem",
    lineHeight: "1.4",
    letterSpacing: "0",
    usage: "Main body copy",
  },
  {
    label: "Body M",
    className: "mobile-body-m",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "16 px · 1 rem",
    lineHeight: "1.4",
    letterSpacing: "0",
    usage: "Main body copy",
  },
];

const universalStyles: StyleEntry[] = [
  {
    label: "Overline 1",
    className: "universal-overline-1",
    family: "Stack Sans Text",
    weight: "400 · Regular",
    size: "18 px · 1.125 rem",
    lineHeight: "1.3",
    letterSpacing: "0.13 em (13%)",
    usage: "Overline + small article card titles",
  },
  {
    label: "Label L",
    className: "universal-label-l",
    family: "Stack Sans Text",
    weight: "400 · Regular",
    size: "21 px · 1.313 rem",
    lineHeight: "1.3",
    letterSpacing: "0",
    usage: "Labels",
  },
  {
    label: "Label M",
    className: "universal-label-m",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "20 px · 1.25 rem",
    lineHeight: "1.3",
    letterSpacing: "−0.01 em (−1%)",
    usage: "Labels",
  },
  {
    label: "Body S",
    className: "universal-body-s",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "16 px · 1 rem",
    lineHeight: "1.4",
    letterSpacing: "0",
    usage: "Supporting body copy",
  },
  {
    label: "Body S Bold",
    className: "universal-body-s-bold",
    family: "Stack Sans Text",
    weight: "700 · Bold",
    size: "16 px · 1 rem",
    lineHeight: "1.4",
    letterSpacing: "0",
    usage: "Supporting body copy",
  },
  {
    label: "Body XS",
    className: "universal-body-xs",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "12.8 px · 0.8 rem",
    lineHeight: "1.4",
    letterSpacing: "0",
    usage: "Utility text or hints",
  },
  {
    label: "Body XS Bold",
    className: "universal-body-xs-bold",
    family: "Stack Sans Text",
    weight: "700 · Bold",
    size: "12.8 px · 0.8 rem",
    lineHeight: "1.4",
    letterSpacing: "0",
    usage: "Utility text or hints",
  },
  {
    label: "Button L",
    className: "universal-button-l",
    family: "Stack Sans Text",
    weight: "400 · Regular",
    size: "18 px · 1.125 rem",
    lineHeight: "1.3",
    letterSpacing: "−0.01 em (−1%)",
    usage: "Large button labels and links",
  },
  {
    label: "Button M",
    className: "universal-button-m",
    family: "Stack Sans Text",
    weight: "400 · Regular",
    size: "16 px · 1 rem",
    lineHeight: "1.3",
    letterSpacing: "−0.01 em (−1%)",
    usage: "Medium button labels",
  },
  {
    label: "Button S",
    className: "universal-button-s",
    family: "Stack Sans Text",
    weight: "400 · Regular",
    size: "12.8 px · 0.8 rem",
    lineHeight: "1.3",
    letterSpacing: "−0.01 em (−1%)",
    usage: "Small links",
  },
  {
    label: "Caption",
    className: "universal-caption",
    family: "Stack Sans Text",
    weight: "300 · Light",
    size: "12.8 px · 0.8 rem",
    lineHeight: "1.5",
    letterSpacing: "0",
    usage: "Small copy",
  },
];

function StyleRow({ s }: { s: StyleEntry }) {
  return (
    <section className="grid grid-cols-[1fr_auto] items-end gap-8 border-b border-[#BFC3CF] py-10 first:border-t">
      <div>
        <p className={`${s.className} text-[#2B2F3B]`}>Aa — {s.label}</p>
        <p className="desktop-body-m text-[#666F8A] mt-3">{s.usage}</p>
      </div>

      <dl className="shrink-0 text-right desktop-body-m text-[#666F8A]">
        <div>
          <dt className="sr-only">Class</dt>
          <dd>
            <code className="text-[#2B2F3B] bg-[#BFC3CF]/20 px-1.5 py-0.5 rounded text-sm">
              .{s.className}
            </code>
          </dd>
        </div>
        <div className="pt-1.5 text-sm leading-relaxed">
          <dd>{s.family}</dd>
          <dd>{s.weight}</dd>
          <dd>{s.size}</dd>
          <dd>Line height {s.lineHeight}</dd>
          <dd>Letter spacing {s.letterSpacing}</dd>
        </div>
      </dl>
    </section>
  );
}

export default function FontsShowcase() {
  return (
    <main className="min-h-screen bg-white px-10 py-16">
      <header className="mb-16 border-b border-[#BFC3CF] pb-8">
        <p className="desktop-body-m text-[#666F8A] mb-1">CIC Redesign · Typography</p>
        <h1 className="desktop-heading-m text-[#2B2F3B]">Type Scale</h1>
        <p className="desktop-body-m text-[#666F8A] mt-3">
          Fonts:{" "}
          <strong className="font-normal text-[#2B2F3B]">TASA Explorer</strong> &amp;{" "}
          <strong className="font-normal text-[#2B2F3B]">Stack Sans Text</strong> — both loaded
          via Google Fonts.
        </p>
      </header>

      <section aria-labelledby="desktop-heading" className="mb-24">
        <h2
          id="desktop-heading"
          className="desktop-body-m font-medium tracking-widest uppercase text-[#666F8A] mb-8"
        >
          Desktop
        </h2>
        <div>
          {desktopStyles.map((s) => (
            <StyleRow key={s.className} s={s} />
          ))}
        </div>
      </section>

      <section aria-labelledby="mobile-heading">
        <h2
          id="mobile-heading"
          className="desktop-body-m font-medium tracking-widest uppercase text-[#666F8A] mb-8"
        >
          Mobile
        </h2>
        <div>
          {mobileStyles.map((s) => (
            <StyleRow key={s.className} s={s} />
          ))}
        </div>
      </section>

      {/* Universal */}
      <section aria-labelledby="universal-heading" className="mt-24">
        <h2
          id="universal-heading"
          className="desktop-body-m font-medium tracking-widest uppercase text-[#666F8A] mb-2"
        >
          Universal
        </h2>
        <p className="desktop-body-m text-[#BFC3CF] mb-8">Shared across desktop and mobile</p>
        <div>
          {universalStyles.map((s) => (
            <StyleRow key={s.className} s={s} />
          ))}
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-[#BFC3CF]">
        <p className="desktop-body-m text-[#BFC3CF]">
          Source: Figma — CIC_Redesign_08-04_HiFi_Int · Desktop node 15-36 · Mobile node 15-110 ·
          Universal node 15-182
        </p>
        <p className="text-sm text-[#BFC3CF] mt-1">
          ⚠ Mobile/Body L named style = 18 px (API); canvas specimen shows 22.5 px. Verify with
          designer.
        </p>
        <p className="text-sm text-[#BFC3CF] mt-1">
          ⚠ Universal/Overline 1 — <code>text-transform: uppercase</code> is not declared in the
          Figma named style; apply it at component level.
        </p>
        <p className="text-sm text-[#BFC3CF] mt-1">
          ⚠ Universal/Button L/M/S — canvas shows weight Medium (500); API named style declares
          Regular (400). API value used.
        </p>
      </footer>
    </main>
  );
}
