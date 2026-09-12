"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Search, X } from "lucide-react"
import { useState } from "react"

import { EVENTS } from "@/data/events"
import { Hero } from "@/components/hero"
import { Logos } from "@/components/logos"
import { SiteHeader } from "@/components/site-header"
import DomeGallery from "@/components/DomeGallery"

const EVENT_CATEGORIES = ["All", "Technical", "Workshops", "Gaming", "Cultural", "Sports", "Hackathon"]

const THEMES = [
  "Robotics & Automation",
  "HealthcareTech & Wellness",
  "Mobility & Logistics",
  "Green Technologies",
  "Enterprise & Fintech",
  "Design & Manufacturing",
  "Smart Living",
  "Tech for Social Good",
]

// const FACULTY_COORDINATORS = [
//   { name: "[Name]", role: "[Department]", phone: "[Phone number]" },
//   { name: "[Name]", role: "[Department]", phone: "[Phone number]" },
//   { name: "[Name]", role: "[Department]", phone: "[Phone number]" },
// Dr. Y. Chalapathi Rao – Event Management & Coordination
// Mrs. E. Lalitha – PR & Outreach
// Dr. S. Sangeetha – Sponsorship & Finance
// Dr. D. Srinivasa Rao – Sponsorship & Finance
// Dr. Y. Chalapathi Rao – Registration & Help Desk
// Dr. O. Sobhana – Design & Creatives
// Dr. O. Sobhana – Social Media & Content
// Mrs. E. Lalitha – Social Media & Content
// Dr. D. Srinivasa Rao – Web & IT
// Dr. S. Sangeetha – Logistics & Operations
// Mrs. E. Lalitha – Photography & Videography
// Dr. D. Srinivasa Rao – Hospitality & Guest Relations
// Dr. O. Sobhana – Documentation
// ]

const FACULTY_COORDINATORS = [
  { name: "Dr. D. Srinivasa Rao", role: ["Sponsorship & Finance", "Web & IT", "Hospitality & Guest Relations"], phone: "+91 9966232722" },
  { name: "Dr. Y. Chalapathi Rao", role: ["Event Management & Coordination", "Registration & Help Desk"], phone: "+91 9491127967" },
  { name: "Mrs. E. Lalitha", role: ["PR & Outreach", "Social Media & Content", "Photography & Videography"], phone: "+91 9014355042" },
  { name: "Dr. S. Sangeetha", role: ["Sponsorship & Finance", "Logistics & Operations"], phone: "+91 9849575415" },
  { name: "Dr. O. Sobhana", role: ["Design & Creatives", "Social Media & Content", "Documentation"], phone: "+91 9441169927" },
]

const EVENT_COORDINATORS = [
  { name: "Srikar Burgula", role: ["Events Coordinator"], phone: "+91 8328292124" },
  { name: "P Maheshwar", role: ["Web & IT Coordinator"], phone: "+91 9515871625" },
  { name: "E. V. Gaurav", role: ["Registrations & Help Desk Coordinator"], phone: "+91 8179590621" },
]

// const FACULTY_COORDINATORS = [
//   { name: "Dr. Y. Chalapathi Rao", phone: "+91 9491127967" },
//   { name: "Mrs. E. Lalitha", phone: "+91 9014355042" },
//   { name: "Dr. S. Sangeetha", phone: "+91 9849575415" },
//   { name: "Dr. D. Srinivasa Rao", phone: "+91 9966232722" },
//   { name: "Dr. O. Sobhana", phone: "+91 9441169927" },
// ]

const CLUB_IMAGES = [

  { src: '/clubs/club-02.png', alt: 'Club 2' },
  { src: '/clubs/club-03.png', alt: 'Club 3' },
  { src: '/clubs/club-04.png', alt: 'Club 4' },
  { src: '/clubs/club-05.png', alt: 'Club 5' },
  { src: '/clubs/club-06.png', alt: 'Club 6' },
  { src: '/clubs/club-07.png', alt: 'Club 7' },
  { src: '/clubs/club-09.png', alt: 'Club 9' },
  { src: '/clubs/club-10.png', alt: 'Club 10' },
  { src: '/clubs/club-11.png', alt: 'Club 11' },
  { src: '/clubs/club-12.png', alt: 'Club 12' },
  { src: '/clubs/club-13.png', alt: 'Club 13' },
  { src: '/clubs/club-14.png', alt: 'Club 14' },
  { src: '/clubs/club-15.png', alt: 'Club 15' },
  { src: '/clubs/club-16.png', alt: 'Club 16' },
  { src: '/clubs/club-17.png', alt: 'Club 17' },
  { src: '/clubs/club-18.png', alt: 'Club 18' },
  { src: '/clubs/club-19.png', alt: 'Club 19' },
  { src: '/clubs/club-20.png', alt: 'Club 20' },
  { src: '/clubs/club-21.png', alt: 'Club 21' },
  { src: '/clubs/club-22.png', alt: 'Club 22' },
  { src: '/clubs/club-23.png', alt: 'Club 23' },
  { src: '/clubs/club-24.png', alt: 'Club 24' },
  { src: '/clubs/club-25.png', alt: 'Club 25' },
  { src: '/clubs/club-26.png', alt: 'Club 26' },
  { src: '/clubs/club-27.png', alt: 'Club 27' },
  { src: '/clubs/club-28.png', alt: 'Club 28' },
  { src: '/clubs/club-29.png', alt: 'Club 29' },
  { src: '/clubs/club-30.png', alt: 'Club 30' },
  { src: '/clubs/club-31.png', alt: 'Club 31' },
  { src: '/clubs/club-32.png', alt: 'Club 32' },
  { src: '/clubs/club-33.png', alt: 'Club 33' },
  { src: '/clubs/club-34.png', alt: 'Club 34' },
  { src: '/clubs/club-35.png', alt: 'Club 35' },
  { src: '/clubs/club-36.png', alt: 'Club 36' },
  { src: '/clubs/club-37.png', alt: 'Club 37' },
  { src: '/clubs/club-38.png', alt: 'Club 38' },
  { src: '/clubs/club-39.png', alt: 'Club 39' },
  { src: '/clubs/club-gdgc.png', alt: 'GDGC' },
  { src: '/clubs/club-01.png', alt: 'Club 1' },
  { src: '/clubs/club-40.png', alt: 'Club 40' },
  { src: '/clubs/club-41.png', alt: 'Club 41' },
  { src: '/clubs/club-42.png', alt: 'Club 42' },
  { src: '/clubs/club-43.png', alt: 'Club 43' },
  { src: '/clubs/club-44.png', alt: 'Club 44' },
  { src: '/clubs/club-45.png', alt: 'Club 45' },
  { src: '/clubs/club-46.png', alt: 'Club 46' },
  { src: '/clubs/club-47.png', alt: 'Club 47' },
  { src: '/clubs/club-48.png', alt: 'Club 48' },
  { src: '/clubs/club-49.jpeg', alt: 'Club 49' },
  { src: '/clubs/club-50.png', alt: 'Club 50' },
  { src: '/clubs/club-51.png', alt: 'Club 51' },
  { src: '/clubs/club-52.png', alt: 'Club 52' },
  { src: '/clubs/club-53.png', alt: 'Club 53' },
  { src: '/clubs/club-54.jpeg', alt: 'Club 54' },
  { src: '/clubs/club-55.png', alt: 'Club 55' },
]

function ContactCard({ name, role, phone, isFaculty }: { name: string; role?: string[]; phone: string, isFaculty?: boolean | undefined }) {
  return (
    <div className="flex flex-col items-center gap-2 border border-border p-6 text-center">
      <div className="w-14 h-14 rounded-full bg-black/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-black/20 transition-colors duration-300">
        <span className="text-2xl font-bold text-black">
          {
            isFaculty ? (name.split(" ")[1] ? name.split(" ")[1][0] + name.split(" ")[2][0] : name[0]) : (name.split(" ").length > 1 ? name.split(" ")[0][0] + name.split(" ")[1][0] : name[0])
          }
        </span>
      </div>
      <p className="text-sm font-medium">{name}</p>
      <div className="text-xs text-muted-foreground">{
        role?.map((r, i) => (
          <p key={i}>
            {r}
          </p>
        ))
      }</div>
      <p className="text-xs text-muted-foreground">{phone}</p>
    </div>
  )
}

function EventSearch({
  value,
  onChange,
  onClear,
}: {
  value: string
  onChange: (value: string) => void
  onClear: () => void
}) {
  return (
    <div className="mx-auto mb-8 max-w-md">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search events by name or category..."
          className="w-full border border-border bg-background py-2.5 pl-10 pr-9 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-foreground focus:outline-none"
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState(EVENT_CATEGORIES[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [isCreditHovered, setIsCreditHovered] = useState(false)
  const [isCreditPinned, setIsCreditPinned] = useState(false)

  const isSearching = searchQuery.trim().length > 0
  const filteredEvents = isSearching
    ? EVENTS.filter((event) => {
        const query = searchQuery.trim().toLowerCase()
        return (
          event.name.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query)
        )
      })
    : EVENTS.filter(
        (event) => event.category === selectedCategory || selectedCategory === "All"
      )

  const isCreditOpen = isCreditHovered || isCreditPinned

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <Hero />

        <section id="events" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="mb-8 text-center text-3xl font-bold">Events</h2>

            <EventSearch
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery("")}
            />

            <div className="flex flex-col border border-border md:flex-row">
              <div className="border-b border-border p-6 md:sticky md:top-20 md:w-1/3 md:self-start md:border-b-0 md:border-r">
                <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Categories</p>
                <ul className="space-y-3 text-sm">
                  {EVENT_CATEGORIES.map((category) => (
                    <li
                      key={category}
                      className={`border px-3 py-2 ${
                        selectedCategory === category
                          ? "border-foreground bg-foreground text-background"
                          : "border-border"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category)
                          setSearchQuery("")
                        }}
                        className="flex w-full items-center justify-between text-left"
                      >
                        <span>{category}</span>
                        <span
                          className={`h-4 w-8 border ${
                            selectedCategory === category ? "border-background" : "border-border"
                          }`}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {isSearching
                      ? `Search Results (${filteredEvents.length})`
                      : `${selectedCategory} Events`}
                  </p>
                  {isSearching && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="text-xs text-muted-foreground underline hover:text-foreground"
                    >
                      Clear search
                    </button>
                  )}
                </div>
                {filteredEvents.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {filteredEvents.map((event) => (
                      <div key={event.id} className="flex flex-col border border-border p-4">
                        <div className="relative aspect-video border-b border-border">
                          <Image
                            src={event.posterUrl}
                            alt={event.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 33vw"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-3 pt-4">
                          <span className="w-fit border border-border px-2 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                            {event.category}
                          </span>
                          <h3 className="text-lg font-bold">{event.name}</h3>
                          <a
                            href={event.regLink}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-auto w-fit border border-border px-3 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                          >
                            Register on Aspireup
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-sm text-muted-foreground">
                      {isSearching
                        ? `No events found matching "${searchQuery}"`
                        : "No events in this category yet"}
                    </p>
                    {isSearching && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="mt-3 border border-border px-3 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      >
                        Clear search
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="themes" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="mb-2 text-center text-3xl font-bold">Themes</h2>
            <p className="mb-10 text-center text-sm text-muted-foreground">
              Explore the tracks for this year&apos;s edition
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {THEMES.map((theme) => (
                <div key={theme} className="border border-border">
                  <div className="flex aspect-video items-center justify-center border-b border-border text-xs text-muted-foreground">
                    Image
                  </div>
                  <div className="p-3 text-sm font-medium">{theme}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clubs" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <h2 className="mb-2 text-3xl font-bold">Organised By</h2>
            <p className="mx-auto mb-10 max-w-xl text-sm text-muted-foreground">
              Convergence 2K25R is brought to you by 55 student clubs and technical societies working together to create an unforgettable experience
            </p>
            <Logos count={0} />
            <div className="mt-12 w-full" style={{ height: '400px' }}>
              <DomeGallery
                images={CLUB_IMAGES}
                fit={0.6}
                fitBasis="auto"
                minRadius={500}
                maxRadius={800}
                overlayBlurColor="#000000"
                imageBorderRadius="20px"
                openedImageBorderRadius="20px"
                openedImageWidth="500px"
                openedImageHeight="500px"
                grayscale={false}
                dragSensitivity={18}
                maxVerticalRotationDeg={8}
                segments={35}
                dragDampening={2}
                hideOverlays={true}
              />
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Drag to explore • Click to enlarge
            </p>
          </div>
        </section>

        <section id="contact" className="border-b border-border">
          <div className="mx-auto max-w-6xl space-y-16 px-6 py-20">
            <div>
              <h2 className="mb-2 text-center text-3xl font-bold">Faculty Coordinators</h2>
              <p className="mb-8 text-center text-sm text-muted-foreground">
                Meet our dedicated faculty coordinators.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {FACULTY_COORDINATORS.map((person, i) => (
                  <ContactCard key={i} {...person} isFaculty={true} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-center text-3xl font-bold">Contact Us</h2>
              <p className="mb-8 text-center text-sm text-muted-foreground">
                Get in touch with our team for any inquiries.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {EVENT_COORDINATORS.map((person, i) => (
                  <ContactCard key={i} {...person} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <motion.div
          className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Follow us on social media
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } },
            }}
          >
            <motion.a
              href="https://www.instagram.com/convergence2k26_vnrvjiet/"
              target="_blank"
              rel="noreferrer"
              variants={{ hidden: { opacity: 0, y: 10 },visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              whileFocus={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative outline-none"
            >
              <span className="block border border-border px-3 py-1 transition-colors duration-300 group-hover:border-primary group-hover:text-foreground group-focus-visible:border-primary group-focus-visible:text-foreground">
                Instagram
              </span>
              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
            </motion.a>
            <motion.a
              href="mailto:convergence@vnrvjiet.in"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              whileFocus={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative outline-none"
            >
              <span className="block border border-border px-3 py-1 transition-colors duration-300 group-hover:border-primary group-hover:text-foreground group-focus-visible:border-primary group-focus-visible:text-foreground">
                Email
              </span>
              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/school/vnrvjiethyd/home/"
              target="_blank"
              rel="noreferrer"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              whileFocus={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative outline-none"
            >
              <span className="block border border-border px-3 py-1 transition-colors duration-300 group-hover:border-primary group-hover:text-foreground group-focus-visible:border-primary group-focus-visible:text-foreground">
                LinkedIn
              </span>
              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
            </motion.a>
            {/* <a href="https://linktr.ee/convergence2k26">
              <span className="border border-border px-3 py-1">Linktree</span>
            </a> */}
          </motion.div>
        </motion.div>
      </footer>

      <div
        className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7"
        onMouseEnter={() => setIsCreditHovered(true)}
        onMouseLeave={() => setIsCreditHovered(false)}
      >
        <AnimatePresence>
          {isCreditOpen && (
            <motion.div
              initial={{ opacity: 0, x: 16, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 16, scale: 0.92 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute bottom-1 right-16 w-max max-w-[calc(100vw-7rem)] border border-border bg-background px-4 py-3 text-xs font-medium shadow-lg"
            >
              Developed by GDGC Web Dev Volunteers
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          type="button"
          aria-label="Show development credit"
          aria-expanded={isCreditOpen}
          onClick={() => setIsCreditPinned((isPinned) => !isPinned)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-foreground bg-black shadow-lg outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Image
            src="/clubs/club-gdgc2.png"
            alt="GDGC logo"
            fill
            sizes="256px"
            className="scale-250 object-contain"
          />
        </motion.button>
      </div>
    </div>
  )
}
