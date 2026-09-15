import { useState, useEffect } from "react";

type Page = "home" | "about" | "resume" | "projects" | "contact";

const NAV_ITEMS: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Nav({
  current,
  onChange,
}: {
  current: Page;
  onChange: (p: Page) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-primary-foreground)",
        fontFamily: "var(--font-sans)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <button
          onClick={() => onChange("home")}
          style={{ fontFamily: "var(--font-display)", color: "var(--color-primary-foreground)" }}
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          Alex Morgan
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              style={{
                fontFamily: "var(--font-sans)",
                backgroundColor:
                  current === item.id ? "var(--color-accent)" : "transparent",
                color: "var(--color-primary-foreground)",
              }}
              className="px-4 py-2 text-sm font-medium transition-all hover:opacity-80 rounded-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            style={{ backgroundColor: "var(--color-primary-foreground)" }}
            className={`block w-6 h-0.5 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            style={{ backgroundColor: "var(--color-primary-foreground)" }}
            className={`block w-6 h-0.5 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            style={{ backgroundColor: "var(--color-primary-foreground)" }}
            className={`block w-6 h-0.5 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          className="md:hidden px-6 pb-4 flex flex-col gap-1"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onChange(item.id);
                setMenuOpen(false);
              }}
              style={{
                fontFamily: "var(--font-sans)",
                backgroundColor:
                  current === item.id ? "var(--color-accent)" : "transparent",
                color: "var(--color-primary-foreground)",
              }}
              className="text-left px-4 py-2.5 text-sm font-medium rounded-sm transition-all hover:opacity-80"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
        className="px-6 pt-24 pb-20"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-accent)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
              }}
              className="mb-4 uppercase"
            >
              Full-Stack Engineer & Designer
            </p>
            <h1
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.05 }}
              className="font-light mb-6"
            >
              Alex
              <br />
              <em style={{ fontStyle: "italic" }}>Morgan</em>
            </h1>
            <p
              style={{ color: "rgba(242,240,235,0.7)", maxWidth: "42ch" }}
              className="text-lg leading-relaxed mb-10"
            >
              I build thoughtful digital products — from architecture to interface.
              Five years shipping software that people actually enjoy using.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("resume")}
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-accent-foreground)",
                  fontFamily: "var(--font-sans)",
                }}
                className="px-6 py-3 text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                View Résumé
              </button>
              <button
                onClick={() => onNavigate("projects")}
                style={{
                  border: "1px solid rgba(242,240,235,0.75)",
                  color: "var(--color-primary-foreground)",
                  fontFamily: "var(--font-sans)",
                  backgroundColor: "rgba(242,240,235,0.1)",
                }}
                className="px-6 py-3 text-sm font-semibold rounded-sm hover:bg-white/20 hover:border-white transition-colors"
              >
                See Projects
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=320&fit=crop&auto=format"
              alt="Portrait of Alex Morgan"
              className="rounded-sm object-cover"
              style={{ width: 220, height: 264, filter: "grayscale(20%)" }}
            />
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section
        style={{ backgroundColor: "var(--color-card)", borderBottom: "1px solid var(--color-border)" }}
        className="px-6 py-10"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "5+", label: "Years Experience" },
            { num: "30+", label: "Projects Shipped" },
            { num: "12", label: "Open Source Repos" },
            { num: "3", label: "Industries" },
          ].map((s) => (
            <div key={s.label}>
              <p
                style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--color-accent)" }}
                className="font-light leading-none mb-1"
              >
                {s.num}
              </p>
              <p
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-muted-foreground)", letterSpacing: "0.1em" }}
                className="uppercase"
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills preview */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2
            style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}
            className="mb-8 font-light"
          >
            Core Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                area: "Frontend",
                items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Figma"],
              },
              {
                area: "Backend",
                items: ["Node.js", "PostgreSQL", "Prisma", "REST & GraphQL", "Docker"],
              },
              {
                area: "Craft",
                items: ["UI/UX Design", "Accessibility", "Performance", "Testing", "CI/CD"],
              },
            ].map((group) => (
              <div
                key={group.area}
                style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
                className="p-6 rounded-sm"
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--color-accent)",
                    letterSpacing: "0.12em",
                  }}
                  className="uppercase mb-4"
                >
                  {group.area}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      style={{ color: "var(--color-foreground)", fontFamily: "var(--font-sans)" }}
                      className="text-sm flex items-center gap-2"
                    >
                      <span style={{ color: "var(--color-accent)" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-accent)", letterSpacing: "0.12em" }}
          className="uppercase mb-3"
        >
          About Me
        </p>
        <h1
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          className="font-light mb-10"
        >
          Human behind
          <br />
          <em>the code</em>
        </h1>

        <div className="grid md:grid-cols-[1fr_340px] gap-12 items-start">
          <div>
            <div
              style={{ borderLeft: "3px solid var(--color-accent)" }}
              className="pl-6 mb-10"
            >
              <p
                style={{ fontSize: "1.2rem", color: "var(--color-foreground)", lineHeight: 1.7 }}
                className="mb-4"
              >
                I'm a full-stack engineer based in Portland, Oregon, with a background
                in visual design that shapes how I think about software. I care deeply
                about the handoff between design and engineering — and I've built tools
                on both sides of that gap.
              </p>
              <p style={{ color: "var(--color-muted-foreground)" }} className="leading-relaxed">
                Before going full-time into engineering, I studied graphic design and worked
                in print production. That discipline — grid systems, typographic hierarchy,
                intentional whitespace — still drives how I structure interfaces and APIs alike.
              </p>
            </div>

            <p style={{ color: "var(--color-muted-foreground)" }} className="leading-relaxed mb-6">
              Outside of work you'll find me climbing in the Columbia River Gorge,
              restoring a 1974 Raleigh road bike, or maintaining an unhealthy number of
              houseplants. I occasionally write about engineering culture and design systems
              on my blog.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { label: "Location", value: "Portland, OR" },
                { label: "Education", value: "BSc Computer Science, Oregon State" },
                { label: "Available for", value: "Full-time & contract work" },
                { label: "Languages", value: "English, Spanish (conversational)" },
              ].map((f) => (
                <div key={f.label} style={{ borderTop: "1px solid var(--color-border)" }} className="pt-4">
                  <p
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-muted-foreground)", letterSpacing: "0.1em" }}
                    className="uppercase mb-1"
                  >
                    {f.label}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }} className="text-sm">
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=340&h=400&fit=crop&auto=format"
              alt="Alex Morgan working at a desk"
              className="rounded-sm w-full object-cover"
              style={{ filter: "grayscale(15%)" }}
            />
            <div
              style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
              className="p-5 rounded-sm"
            >
              <p
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-accent)", letterSpacing: "0.1em" }}
                className="uppercase mb-3"
              >
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {["Rock Climbing", "Bicycle Restoration", "Typography", "Open Source", "Houseplants", "Cooking"].map((t) => (
                  <span
                    key={t}
                    style={{ border: "1px solid var(--color-border)", fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
                    className="px-3 py-1 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// ── RESUME ────────────────────────────────────────────────────────────────────
function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div>
            <p
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-accent)", letterSpacing: "0.12em" }}
              className="uppercase mb-3"
            >
              Résumé
            </p>
            <h1
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
              className="font-light"
            >
              Experience &amp; <em>Education</em>
            </h1>
          </div>
        </div>

        {/* Experience */}
        <Section title="Work Experience">
          {[
            {
              role: "Senior Frontend Engineer",
              company: "Lattice Systems",
              period: "2022 — Present",
              location: "Portland, OR (remote)",
              bullets: [
                "Led the redesign of the core product dashboard, reducing load time by 40% and improving satisfaction scores by 28%.",
                "Architected a shared component library adopted across 4 product teams; now covers 90% of UI surface area.",
                "Mentored 3 junior engineers and ran bi-weekly design-engineering syncs.",
              ],
            },
            {
              role: "Full-Stack Engineer",
              company: "Meridian Labs",
              period: "2020 — 2022",
              location: "San Francisco, CA",
              bullets: [
                "Built a real-time collaboration layer using WebSockets and CRDTs for a document editing product (3 k DAU).",
                "Migrated legacy REST API to GraphQL, cutting average query payload by 55%.",
                "Implemented CI/CD pipeline with GitHub Actions and automated visual regression testing.",
              ],
            },
            {
              role: "UI Engineer (Contract)",
              company: "Fieldwork Studio",
              period: "2019 — 2020",
              location: "Remote",
              bullets: [
                "Delivered responsive marketing sites and prototypes for 6 startup clients.",
                "Established a Figma-to-code workflow using design tokens that reduced implementation drift.",
              ],
            },
          ].map((job) => (
            <JobEntry key={job.role + job.company} {...job} />
          ))}
        </Section>

        {/* Education */}
        <Section title="Education">
          {[
            {
              role: "BSc Computer Science",
              company: "Oregon State University",
              period: "2015 — 2019",
              location: "Corvallis, OR",
              bullets: [
                "Graduated with honors (GPA 3.8). Thesis on adaptive UI layout algorithms.",
                "Teaching assistant for Introduction to Algorithms (2 years).",
              ],
            },
          ].map((edu) => (
            <JobEntry key={edu.role} {...edu} />
          ))}
        </Section>

        {/* Skills */}
        <Section title="Skills &amp; Tools">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { cat: "Languages", items: "TypeScript, JavaScript, Python, SQL, Bash" },
              { cat: "Frameworks", items: "React, Next.js, Node.js, Express, Prisma" },
              { cat: "Styling", items: "Tailwind CSS, CSS Modules, Figma" },
              { cat: "Databases", items: "PostgreSQL, SQLite, Redis, Supabase" },
              { cat: "DevOps", items: "Docker, GitHub Actions, Vercel, AWS S3" },
              { cat: "Testing", items: "Vitest, Playwright, Testing Library" },
            ].map((s) => (
              <div
                key={s.cat}
                style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-card)" }}
                className="p-4 rounded-sm"
              >
                <p
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-accent)", letterSpacing: "0.1em" }}
                  className="uppercase mb-2"
                >
                  {s.cat}
                </p>
                <p style={{ fontFamily: "var(--font-sans)" }} className="text-sm leading-relaxed">
                  {s.items}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <h2
          style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}
          className="font-light whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div style={{ height: 1, backgroundColor: "var(--color-border)" }} className="flex-1" />
      </div>
      {children}
    </div>
  );
}

function JobEntry({
  role,
  company,
  period,
  location,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-4 mb-8">
      <div>
        <p
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-muted-foreground)" }}
          className="mb-1"
        >
          {period}
        </p>
        <p
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-muted-foreground)" }}
        >
          {location}
        </p>
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }} className="font-normal mb-0.5">
          {role}
        </p>
        <p
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-accent)" }}
          className="mb-3"
        >
          {company}
        </p>
        <ul className="space-y-1.5">
          {bullets.map((b) => (
            <li key={b} className="text-sm flex gap-2" style={{ color: "var(--color-muted-foreground)" }}>
              <span style={{ color: "var(--color-accent)", flexShrink: 0 }}>·</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── PROJECTS ──────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    name: "Slate",
    tagline: "Real-time collaborative editor",
    description:
      "A browser-based document editor with live multiplayer editing, cursor presence, and version history. Built with React, WebSockets, and CRDTs for conflict-free merging.",
    tech: ["TypeScript", "React", "WebSockets", "CRDT", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=360&fit=crop&auto=format",
    link: "#",
    gh: "#",
    featured: true,
  },
  {
    name: "Tokensmith",
    tagline: "Design token pipeline",
    description:
      "CLI tool that syncs Figma variables to CSS custom properties, TypeScript types, and Tailwind theme extensions. Used by 4 design teams.",
    tech: ["Node.js", "Figma API", "TypeScript", "CLI"],
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=360&fit=crop&auto=format",
    link: "#",
    gh: "#",
    featured: true,
  },
  {
    name: "Fieldlog",
    tagline: "Offline-first field notes app",
    description:
      "Mobile-first PWA for field researchers to log observations without internet. Syncs to a PostgreSQL backend when connectivity is restored.",
    tech: ["React", "IndexedDB", "PWA", "Supabase"],
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=360&fit=crop&auto=format",
    link: "#",
    gh: "#",
    featured: false,
  },
  {
    name: "Lumen",
    tagline: "Lightweight analytics dashboard",
    description:
      "Self-hosted analytics dashboard with zero-cookie tracking, live visitor counts, and a minimal UI. Drop-in <script> tag integration.",
    tech: ["Next.js", "Prisma", "Recharts", "SQLite"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&fit=crop&auto=format",
    link: "#",
    gh: "#",
    featured: false,
  },
];

function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const visible = filter === "featured" ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-accent)", letterSpacing: "0.12em" }}
          className="uppercase mb-3"
        >
          Projects
        </p>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
            className="font-light"
          >
            Things I've <em>built</em>
          </h1>
          <div
            style={{ border: "1px solid var(--color-border)" }}
            className="flex rounded-sm overflow-hidden"
          >
            {(["all", "featured"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  backgroundColor: filter === f ? "var(--color-primary)" : "transparent",
                  color: filter === f ? "var(--color-primary-foreground)" : "var(--color-muted-foreground)",
                }}
                className="px-4 py-2 uppercase transition-colors"
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((p) => (
            <article
              key={p.name}
              style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-card)" }}
              className="rounded-sm overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden" style={{ height: 200, backgroundColor: "var(--color-muted)" }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.featured && (
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      backgroundColor: "var(--color-accent)",
                      color: "var(--color-accent-foreground)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                    }}
                    className="px-2 py-1 rounded-sm uppercase"
                  >
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }} className="font-normal mb-1">
                  {p.name}
                </h2>
                <p
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-accent)" }}
                  className="mb-3"
                >
                  {p.tagline}
                </p>
                <p style={{ color: "var(--color-muted-foreground)" }} className="text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        border: "1px solid var(--color-border)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        color: "var(--color-muted-foreground)",
                      }}
                      className="px-2 py-0.5 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={p.link}
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-primary-foreground)",
                      fontFamily: "var(--font-sans)",
                    }}
                    className="px-4 py-2 text-xs font-medium rounded-sm hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.gh}
                    style={{
                      border: "1px solid var(--color-border)",
                      fontFamily: "var(--font-sans)",
                      color: "var(--color-foreground)",
                    }}
                    className="px-4 py-2 text-xs font-medium rounded-sm hover:border-current transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-accent)", letterSpacing: "0.12em" }}
          className="uppercase mb-3"
        >
          Contact
        </p>
        <h1
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
          className="font-light mb-10"
        >
          Let's <em>talk</em>
        </h1>

        <div className="grid md:grid-cols-[1fr_360px] gap-12">
          {/* Prose contact info */}
          <div>
            <div
              style={{ borderLeft: "3px solid var(--color-accent)" }}
              className="pl-6 mb-8"
            >
              <p style={{ fontSize: "1.15rem", lineHeight: 1.75 }}>
                The best way to reach me is by email at{" "}
                <a
                  href="mailto:alex@alexmorgan.dev"
                  style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontSize: "1rem" }}
                  className="hover:underline"
                >
                  alex@alexmorgan.dev
                </a>
                . I'm based in Portland, OR and open to fully remote opportunities anywhere.
              </p>
            </div>
            <p style={{ color: "var(--color-muted-foreground)", lineHeight: 1.75 }} className="mb-4">
              Whether you have a project in mind, a role you think I'd be a good fit for,
              or just want to say hello — I'd love to hear from you. I typically read and
              respond to messages within 48 hours.
            </p>
            <p style={{ color: "var(--color-muted-foreground)", lineHeight: 1.75 }}>
              You can also find me on the platforms listed to the right — I'm most active
              on GitHub and LinkedIn.
            </p>
          </div>

          {/* Sidebar — online profiles only */}
          <div className="space-y-8">
            <div>
              <p
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-accent)", letterSpacing: "0.1em" }}
                className="uppercase mb-4"
              >
                Find me online
              </p>
              {[
                { name: "GitHub", handle: "@alexmorgan" },
                { name: "LinkedIn", handle: "linkedin.com/in/alexmorgan" },
                { name: "Dribbble", handle: "dribbble.com/alexmorgan" },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  style={{
                    border: "1px solid var(--color-border)",
                    fontFamily: "var(--font-sans)",
                  }}
                  className="flex items-center justify-between px-4 py-3 rounded-sm mb-2 hover:border-current transition-colors group"
                >
                  <span className="text-sm font-medium">{s.name}</span>
                  <span
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-muted-foreground)" }}
                    className="group-hover:text-current transition-colors"
                  >
                    {s.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-card)",
        fontFamily: "var(--font-sans)",
      }}
      className="px-6 py-8"
    >
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-muted-foreground)", letterSpacing: "0.08em" }}
        >
          © 2026 Alex Morgan — Built with React + Vite, hosted on GitHub Pages
        </p>
        <nav className="flex flex-wrap gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-muted-foreground)", letterSpacing: "0.08em" }}
              className="uppercase hover:text-current transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav current={page} onChange={setPage} />
      <div style={{ flex: 1 }}>
        {page === "home" && <HomePage onNavigate={setPage} />}
        {page === "about" && <AboutPage />}
        {page === "resume" && <ResumePage />}
        {page === "projects" && <ProjectsPage />}
        {page === "contact" && <ContactPage />}
      </div>
      <Footer onNavigate={setPage} />
    </div>
  );
}
