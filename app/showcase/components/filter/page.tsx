"use client"

import * as React from "react"
import { FilterDropdown, type FilterDropdownOption } from "@/components/ui/filter-dropdown"

// ─── Data ─────────────────────────────────────────────────────────────────────

const YEAR_OPTIONS: FilterDropdownOption[] = [
  { value: "all", label: "All" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
  { value: "2014", label: "2014" },
]

const REGION_OPTIONS: FilterDropdownOption[] = [
  { value: "all", label: "All Regions" },
  { value: "north", label: "North" },
  { value: "south", label: "South" },
  { value: "east", label: "East" },
  { value: "west", label: "West" },
]

// ─── Spec table ───────────────────────────────────────────────────────────────

type SpecRow = { property: string; value: string; source: string }

const triggerSpec: SpecRow[] = [
  { property: "Width", value: "182 px (fixed)", source: "Figma frame 67:7028" },
  { property: "Padding", value: "px-2 (8 px) · py-3 (12 px)", source: "Figma Field node" },
  { property: "Border", value: "1 px solid #9DACBF (--cic-surface-hover)", source: "Field border" },
  { property: "Border radius", value: "4 px", source: "rounded-[var(--4,4px)]" },
  { property: "Background", value: "#FFFFFF (--neutral-white)", source: "bg-[var(--neutral-white)]" },
  { property: "Label font", value: "Universal/Label M — 20 px / 300 / lh 1.3 / ls −1%", source: "Figma: Universal/Label M" },
  { property: "Label color", value: "#003D84 (--cic-text-heading)", source: "text/heading/default" },
  { property: "Body font", value: "Universal/Body S — 16 px / 300 / lh 1.4 / ls 0", source: "Figma: Universal/Body S" },
  { property: "Body color", value: "#394D60 (--cic-text-body)", source: "text/body/default" },
  { property: "Caret icon", value: "ChevronUp · 24 px · #F18702 (--orange-100)", source: "Icons/24px/CaretUp (Figma)" },
  { property: "Caret — closed", value: "rotate-180 (points down)", source: "Trigger default" },
  { property: "Caret — open", value: "rotate-0 (points up)", source: "Figma 'Scrolled' state" },
  { property: "Trigger → list gap", value: "4 px (sideOffset)", source: "Figma gap-[4px]" },
]

const itemSpec: SpecRow[] = [
  { property: "Item padding", value: "px-4 (16 px) · py-2 (8 px)", source: "Figma node 67:6991" },
  { property: "Item bg — default", value: "#F2F6F9 (--cic-surface)", source: "neutral/grey/25 in component" },
  { property: "Item border", value: "border-b 1 px #D9E1E6 (--cic-border)", source: "border/default" },
  { property: "Item text — default", value: "#394D60 (--cic-text-body)", source: "text/body/default" },
  { property: "Item bg — hover", value: "#9DACBF (--cic-surface-hover)", source: "Figma node 67:6993" },
  { property: "Item text — hover", value: "#FFFFFF (--neutral-white)", source: "Figma node 67:6994" },
  { property: "Scrollbar width", value: "4 px", source: "Global/Scroll bar" },
  { property: "Scrollbar track", value: "#9DACBF (--cic-surface-hover)", source: "Global/Scroll bar bg" },
  { property: "Scrollbar thumb", value: "#394D60 (--cic-text-body) · rounded-full", source: "Global/Scroll bar thumb" },
  { property: "Max dropdown height", value: "380 px (with scroll)", source: "Figma scroll list height" },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SpecTable({ rows, caption }: { rows: SpecRow[]; caption: string }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-[#BFC3CF]">
      <table className="w-full text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-[#BFC3CF] bg-[#F5F6F8] text-left">
            <th className="px-4 py-2.5 font-medium text-[#2B2F3B]">Property</th>
            <th className="px-4 py-2.5 font-medium text-[#2B2F3B]">Value</th>
            <th className="px-4 py-2.5 font-medium text-[#666F8A]">Source</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.property} className="border-b border-[#BFC3CF]/50 last:border-0">
              <td className="px-4 py-2.5 font-medium text-[#2B2F3B] whitespace-nowrap">{row.property}</td>
              <td className="px-4 py-2.5">
                <code className="rounded bg-[#BFC3CF]/20 px-1.5 py-0.5 text-[#2B2F3B]">
                  {row.value}
                </code>
              </td>
              <td className="px-4 py-2.5 text-[#666F8A]">{row.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PreviewCard({
  label,
  children,
  bg = "bg-[#E8EBF0]",
}: {
  label: string
  children: React.ReactNode
  bg?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-[#666F8A] uppercase tracking-widest">{label}</p>
      <div className={`flex items-start justify-center rounded-xl p-10 ${bg}`}>
        {children}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ComponentsShowcase() {
  const [year, setYear] = React.useState<string>("")
  const [region, setRegion] = React.useState<string>("")

  return (
    <main className="min-h-screen bg-white px-10 py-16">

      {/* Page header */}
      <header className="mb-16 border-b border-[#BFC3CF] pb-8">
        <p className="desktop-body-m text-[#666F8A] mb-1">CIC Redesign · Interactive Components</p>
        <h1 className="desktop-heading-m text-[#2B2F3B]">Filter Dropdown</h1>
        <p className="desktop-body-m text-[#666F8A] mt-3">
          Source:{" "}
          <code className="rounded bg-[#BFC3CF]/20 px-1.5 py-0.5 text-sm text-[#2B2F3B]">
            components/ui/filter-dropdown.tsx
          </code>{" "}
          — Figma nodes{" "}
          <code className="rounded bg-[#BFC3CF]/20 px-1.5 py-0.5 text-sm text-[#2B2F3B]">
            67:6995
          </code>{" "}
          (DropdownFilter) /{" "}
          <code className="rounded bg-[#BFC3CF]/20 px-1.5 py-0.5 text-sm text-[#2B2F3B]">
            67:6990
          </code>{" "}
          (DropdownListStates)
        </p>
      </header>

      {/* ── Live preview ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="preview-heading" className="mb-24">
        <h2
          id="preview-heading"
          className="desktop-body-m font-medium tracking-widest uppercase text-[#666F8A] mb-8"
        >
          Live Preview
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <PreviewCard label="Default — no selection">
            <FilterDropdown
              label="Filter by Year:"
              options={YEAR_OPTIONS}
              placeholder="All"
            />
          </PreviewCard>

          <PreviewCard label="Controlled — with value">
            <FilterDropdown
              label="Filter by Year:"
              options={YEAR_OPTIONS}
              value={year}
              onValueChange={setYear}
              placeholder="All"
            />
          </PreviewCard>

          <PreviewCard label="Different option set">
            <FilterDropdown
              label="Filter by Region:"
              options={REGION_OPTIONS}
              value={region}
              onValueChange={setRegion}
              placeholder="All Regions"
            />
          </PreviewCard>

          <PreviewCard label="Disabled state">
            <FilterDropdown
              label="Filter by Year:"
              options={YEAR_OPTIONS}
              value="2022"
              disabled
            />
          </PreviewCard>
        </div>

        {year && (
          <p className="mt-6 desktop-body-m text-[#394D60]">
            Selected year: <strong className="font-medium">{year}</strong>
          </p>
        )}
      </section>

      {/* ── Spec ──────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="spec-heading" className="mb-24">
        <h2
          id="spec-heading"
          className="desktop-body-m font-medium tracking-widest uppercase text-[#666F8A] mb-2"
        >
          Spec
        </h2>

        <h3 className="desktop-body-m text-[#2B2F3B] mt-8 mb-0">Trigger &amp; Label</h3>
        <SpecTable rows={triggerSpec} caption="Trigger and label spec" />

        <h3 className="desktop-body-m text-[#2B2F3B] mt-10 mb-0">Dropdown List &amp; Items</h3>
        <SpecTable rows={itemSpec} caption="Dropdown list and item spec" />
      </section>

      {/* ── Inconsistencies ───────────────────────────────────────────────────── */}
      <section aria-labelledby="issues-heading" className="mb-24">
        <h2
          id="issues-heading"
          className="desktop-body-m font-medium tracking-widest uppercase text-[#666F8A] mb-8"
        >
          ⚠ Inconsistencies &amp; Open Questions
        </h2>

        <div className="flex flex-col gap-6">

          {/* Inconsistency 1 */}
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-medium text-amber-900 mb-1">
              1 · grey/25 value conflict — color guide vs. component
            </p>
            <p className="text-sm text-amber-800 leading-relaxed">
              The Color Style Guide (Figma node 20:1077) defines{" "}
              <code className="bg-amber-100 px-1 rounded">--grey-25: #F8F8F8</code>.
              The Filter Dropdown component (nodes 67:6991 / 67:6993) uses{" "}
              <code className="bg-amber-100 px-1 rounded">neutral/grey/25 = #F2F6F9</code> for
              list item backgrounds. These are different colours. The component token was kept as{" "}
              <code className="bg-amber-100 px-1 rounded">--cic-surface: #F2F6F9</code> to match
              the component exactly; <code className="bg-amber-100 px-1 rounded">--grey-25</code>{" "}
              in the palette remains <code className="bg-amber-100 px-1 rounded">#F8F8F8</code>.
              <br />
              <strong className="font-medium">Action needed:</strong> Confirm with designer which
              value is authoritative.
            </p>
          </div>

          {/* Inconsistency 2 */}
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-medium text-amber-900 mb-1">
              2 · sys-orange-25 hex label is incorrect in Figma
            </p>
            <p className="text-sm text-amber-800 leading-relaxed">
              Figma labels both <code className="bg-amber-100 px-1 rounded">sys-orange-25</code>{" "}
              and <code className="bg-amber-100 px-1 rounded">sys-orange-50</code> as{" "}
              <code className="bg-amber-100 px-1 rounded">#FCB618</code>, but the swatch visuals
              are clearly different (light sandy vs. saturated amber). The 25-shade was set to{" "}
              <code className="bg-amber-100 px-1 rounded">#FDE8B4</code> as a visual
              approximation. The colour style node also marks both tokens with the same hex in
              the <code className="bg-amber-100 px-1 rounded">get_variable_defs</code> API
              response.
              <br />
              <strong className="font-medium">Action needed:</strong> Get corrected hex for
              sys-orange-25 from designer.
            </p>
          </div>

          {/* Inconsistency 3 */}
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-medium text-amber-900 mb-1">
              3 · Golden Yellow &amp; Yellowish Orange hex labels are clearly wrong in Figma
            </p>
            <p className="text-sm text-amber-800 leading-relaxed">
              Figma labels{" "}
              <code className="bg-amber-100 px-1 rounded">golden-yellow/100</code>,{" "}
              <code className="bg-amber-100 px-1 rounded">golden-yellow/200</code>, and{" "}
              <code className="bg-amber-100 px-1 rounded">yellowish-orange/200</code> all as{" "}
              <code className="bg-amber-100 px-1 rounded">#17324D</code> — which is a dark navy
              blue (the Brand Blue shade). The swatches are visually light yellow and amber. The
              hex labels in globals.css are visual approximations from the swatch screenshots,
              not from Figma data.
              <br />
              <strong className="font-medium">Action needed:</strong> Obtain correct hex values
              for these three tokens directly from the designer.
            </p>
          </div>

          {/* Inconsistency 4 */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-medium text-blue-900 mb-1">
              4 · Caret icon — custom Figma icon vs. Lucide fallback
            </p>
            <p className="text-sm text-blue-800 leading-relaxed">
              The Figma design uses a custom{" "}
              <code className="bg-blue-100 px-1 rounded">Icons/24px/CaretUp</code> asset.
              The component currently uses{" "}
              <code className="bg-blue-100 px-1 rounded">ChevronUpIcon</code> from Lucide as a
              stand-in; exact icon geometry may differ (pointy caret vs. chevron curve).
              <br />
              <strong className="font-medium">Action needed:</strong> Replace with the project's
              own icon set once available.
            </p>
          </div>

          {/* Inconsistency 5 */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-medium text-blue-900 mb-1">
              5 · Gradient swatch hex labels are placeholders
            </p>
            <p className="text-sm text-blue-800 leading-relaxed">
              The gradient tokens in globals.css (
              <code className="bg-blue-100 px-1 rounded">--gradient-blue-orange-*</code>,{" "}
              <code className="bg-blue-100 px-1 rounded">--gradient-yellow-orange-*</code>) were
              constructed from directional inspection of the swatch images. Figma's
              variable-definition API returned empty strings for all gradient tokens; no stop
              positions or colour values could be extracted programmatically.
              <br />
              <strong className="font-medium">Action needed:</strong> Export gradient definitions
              directly from Figma styles panel.
            </p>
          </div>

        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────────── */}
      <footer className="mt-16 border-t border-[#BFC3CF] pt-8">
        <p className="desktop-body-m text-[#BFC3CF]">
          Source: Figma — CIC_Redesign_08-04_HiFi_Int · nodes 67:6995 · 67:6990
        </p>
      </footer>
    </main>
  )
}
