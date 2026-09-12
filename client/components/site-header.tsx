"use client"

import PillNav from "@/components/PillNav"
import { useActiveSection } from "@/hooks/use-active-section"

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "Themes", href: "#themes" },
  { label: "Organised By", href: "#clubs" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const activeHref = useActiveSection(NAV_ITEMS.map((item) => item.href))

  return (
    <header className="sticky top-0 z-50 border-b border-black/20 bg-red-700">
      <div className="relative mx-auto flex h-16 w-full max-w-[1332px] items-center justify-between px-3 md:h-20 md:px-0">
        <a href="#home" className="mr-3 flex shrink-0 items-center md:mr-0">
          <span
            className="h-8 w-8 shrink-0 bg-[#ede1c5]"
            style={{
              WebkitMaskImage: "url(/logo-atom.png)",
              maskImage: "url(/logo-atom.png)",
              maskMode: "luminance",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </a>

        <div className="flex-1 overflow-hidden md:absolute md:left-1/2 md:flex-initial md:-translate-x-1/2">
          <PillNav
            items={NAV_ITEMS}
            activeHref={activeHref}
            baseColor="#ede1c5"
            pillColor="rgba(237, 225, 197, 0.16)"
            pillTextColor="#ede1c5"
            hoveredPillTextColor="#b91c1c"
            trackBg="transparent"
            className="font-tagline lowercase"
          />
        </div>
      </div>
    </header>
  )
}
