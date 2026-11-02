import Image from "next/image";

import MobileNav from "./mobile-nav";

const projects = [
  {
    number: "01",
    status: "Built",
    statusType: "built",
    title: "Payment Cycle Tracker",
    category: "Business intelligence",
    summary:
      "Turns an invoice ledger into a clear view of receivables, overdue risk, and collection trends.",
    approach:
      "A Python pipeline calculates invoice aging and DSO, then produces a visual report and a formula-driven Excel dashboard.",
    stack: ["Python", "Pandas", "Matplotlib", "Excel"],
    visual: "ledger",
    repository: "https://github.com/Cheseny1996/payment-cycle-tracker",
  },
  {
    number: "02",
    status: "Built",
    statusType: "built",
    title: "Unit Economics & Margin Model",
    category: "Decision support",
    summary:
      "Makes the core economics behind growth, pricing, and runway easier to inspect.",
    approach:
      "A reusable model calculates CAC, LTV, payback, margins, and Bear / Base / Bull scenarios in a CEO-ready workbook.",
    stack: ["Python", "Pandas", "NumPy", "Excel"],
    visual: "scenarios",
    repository: "https://github.com/Cheseny1996/unit-economics-model",
  },
  {
    number: "03",
    status: "Research prototype",
    statusType: "prototype",
    title: "Silent Failures in Production ML",
    category: "AI systems & evaluation",
    summary:
      "Explores how standard model metrics can miss progressive distribution shift.",
    approach:
      "An empirical experiment compares conventional evaluation with drift-aware signals to study when model quality can degrade quietly.",
    stack: ["Python", "Machine learning", "Evaluation"],
    visual: "signals",
    repository: "https://github.com/Cheseny1996/silent-failures-production-ml",
  },
  {
    number: "04",
    status: "Local prototype",
    statusType: "prototype",
    title: "Maize Yield Modeling Pipeline",
    category: "Data processing & ML",
    summary:
      "A reproducible starter for checking agricultural inputs and comparing yield-model baselines.",
    approach:
      "Validates input ranges, compares Ridge with XGBoost using region-held-out cross-validation, and tracks metrics with MLflow. Synthetic data is the default; independent field validation is still required.",
    stack: ["Python", "Pandas", "scikit-learn", "XGBoost", "MLflow"],
    visual: "pipeline",
  },
  {
    number: "05",
    status: "Built",
    statusType: "built",
    title: "Full-stack Analytics Workspace",
    category: "Analytics product",
    summary:
      "A production-ready analytics workspace for private CSV imports, user dashboards, and source-aware data exploration.",
    approach:
      "Implemented secure Supabase authentication, private user workspaces, CSV validation and imports, database migrations, responsive dashboards, tests, and a documented Next.js application.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    visual: "workspace",
    repository: "https://github.com/Cheseny1996/analytics-workspace",
  },
  {
    number: "06",
    status: "Built",
    statusType: "built",
    title: "Applied AI Knowledge Assistant",
    category: "AI product",
    summary:
      "A source-grounded knowledge assistant designed to make AI answers traceable and verifiable.",
    approach:
      "Built secure document ingestion, retrieval, source citations, optional AI-provider integration, private Supabase storage, and explicit failure and evaluation paths.",
    stack: ["Python", "LLMs", "RAG", "Evaluation"],
    visual: "knowledge",
    repository: "https://github.com/Cheseny1996/applied-ai-knowledge-assistant",
  },
  {
    number: "07",
    status: "Built",
    statusType: "built",
    title: "Automated Quality & Evaluation Workbench",
    category: "Quality engineering",
    summary:
      "A repeatable workbench for checking application behavior, API contracts, data quality, and AI outputs.",
    approach:
      "Implemented a Next.js workspace with automated checks, structured test results, validation rules, reusable quality views, and Vitest coverage for the evaluation workflow.",
    stack: ["Next.js", "TypeScript", "Vitest", "Data quality", "Evaluation"],
    visual: "quality",
    repository: "https://github.com/Cheseny1996/quality-evaluation-workbench",
  },
  {
    number: "08",
    status: "Built & deployed",
    statusType: "built",
    title: "Elliot’s Global Marketplace",
    category: "Full-stack commerce",
    summary:
      "A warm, interactive multi-vendor marketplace with a live storefront, secure account journeys, cart, password recovery, and role-based client, vendor, and admin experiences.",
    approach:
      "Built with Next.js, React, TypeScript, MongoDB, Resend, and Stripe integration points. Implemented product discovery and detail views, sharing, saved finds, persistent cart, secure registration, email-based password reset, seller applications and approvals, product review, order flows, an original responsive logo, and production deployment on GitHub and Vercel.",
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "Stripe"],
    visual: "workspace",
    repository: "https://github.com/Cheseny1996/elliotsglobal-marketplace",
    demo: "https://elliotsglobal-marketplace.vercel.app",
  },
  {
    number: "09",
    status: "Built & deployed",
    statusType: "built",
    title: "Mzima Wells Studios",
    category: "Creative platform & commerce",
    summary:
      "A public-facing creative studio platform with a managed shop, interactive product pages, cart and checkout, and Jishindie challenge publishing.",
    approach:
      "Built with Next.js, React, TypeScript, and MongoDB. Delivered staff administration, product and challenge management, an M-Pesa checkout integration, and a responsive public experience deployed on Vercel.",
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "M-Pesa"],
    visual: "workspace",
    repository: "https://github.com/Cheseny1996/mw-studios",
    demo: "https://mw-studios.vercel.app",
  },
];

const skillGroups = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Accessible UI"],
  },
  {
    name: "Backend & APIs",
    skills: ["Python", "FastAPI", "Django", "Node.js", "Express", "REST APIs"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "SQL"],
  },
  {
    name: "Data engineering",
    skills: ["Pandas", "NumPy", "Data validation", "Pipeline design"],
  },
  {
    name: "Analytics & BI",
    skills: ["Power BI", "Tableau", "Excel", "Metric design", "Reporting"],
  },
  {
    name: "AI & machine learning",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "LLMs", "RAG", "Evaluation"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Git", "GitHub Actions", "CI/CD"],
  },
  {
    name: "Testing & quality",
    skills: ["Automated testing", "API testing", "Data quality", "Model evaluation"],
  },
];

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      <div className="visual-header">
        <span>FIELD NOTES / {type.toUpperCase()}</span>
        <span>DS—{type === "ledger" ? "01" : type === "scenarios" ? "02" : "03"}</span>
      </div>
      {type === "ledger" && (
        <div className="visual-ledger">
          <div className="visual-kpi">
            <span>OPEN RECEIVABLES</span>
            <i />
            <i />
          </div>
          <div className="visual-bars">
            {[46, 70, 55, 88, 63, 77, 48, 69, 92, 59, 75, 53].map(
              (height, index) => (
                <i key={index} style={{ "--bar-height": `${height}%` }} />
              ),
            )}
          </div>
          <div className="visual-axis">
            <span>AGING</span>
            <span>COLLECTIONS</span>
            <span>DSO TREND</span>
          </div>
        </div>
      )}
      {type === "scenarios" && (
        <div className="visual-scenarios">
          {["BEAR", "BASE", "BULL"].map((scenario, index) => (
            <div className="scenario-row" key={scenario}>
              <span>{scenario}</span>
              <i className={`scenario-track scenario-track--${index + 1}`}>
                <b />
              </i>
              <span>SCENARIO</span>
            </div>
          ))}
          <div className="scenario-caption">MODEL → COMPARE → DECIDE</div>
        </div>
      )}
      {type === "signals" && (
        <div className="visual-signals">
          <div className="signal-labels">
            <span>BASELINE</span>
            <span>DRIFT SIGNAL</span>
          </div>
          <div className="signal-chart">
            <i />
            <i />
            <i />
          </div>
          <div className="signal-note">EVALUATION OVER TIME</div>
        </div>
      )}
      {type === "pipeline" && (
        <div className="visual-pipeline">
          {["INPUT", "VALIDATE", "COMPARE", "TRACK"].map((step, index) => (
            <div className="pipeline-step" key={step}>
              <span>0{index + 1}</span>
              <b>{step}</b>
            </div>
          ))}
        </div>
      )}
      {type === "workspace" && (
        <div className="visual-workspace">
          <div className="workspace-sidebar"><i /><i /><i /><i /></div>
          <div className="workspace-content">
            <i className="workspace-line" />
            <div className="workspace-panels"><i /><i /><i /></div>
            <i className="workspace-chart" />
          </div>
        </div>
      )}
      {type === "knowledge" && (
        <div className="visual-knowledge">
          <span className="knowledge-node">QUESTION</span>
          <i />
          <span className="knowledge-node knowledge-node--accent">RETRIEVE</span>
          <i />
          <span className="knowledge-node">CITED ANSWER</span>
        </div>
      )}
      {type === "quality" && (
        <div className="visual-quality">
          {["API CONTRACT", "DATA CHECKS", "MODEL REVIEW"].map((check, index) => (
            <div className="quality-row" key={check}>
              <span className="quality-check">{index === 0 ? "✓" : "·"}</span>
              <span>{check}</span>
              <i />
            </div>
          ))}
          <span className="quality-caption">QUALITY BEFORE RELEASE</span>
        </div>
      )}
      <span className="visual-disclaimer">Illustrative project diagram</span>
    </div>
  );
}

function ExternalLink({ href, children, className }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Daniel Samoei, home">
          <span className="brand-mark brand-mark--photo">
            <Image alt="Daniel Samoei portrait" height={64} src="/profile.png" width={64} />
          </span>
          <span className="brand-name">Daniel Samoei</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let&apos;s connect <span aria-hidden="true">↗</span>
        </a>
        <MobileNav />
      </header>

      <main id="main">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Software · Data · Applied AI</p>
            <div className="hero-role-list" aria-label="Professional focus areas">
              <span>AI Rating</span>
              <span>Machine Learning</span>
              <span>Data Analyst</span>
            </div>
            <h1 id="hero-title">
              I build useful
              <br />
              technology for
              <br />
              <span>real-world work.</span>
            </h1>
            <p className="hero-intro">
              I&apos;m Daniel Samoei — a full-stack developer and data
              professional focused on practical software, thoughtful analytics,
              and AI systems that earn their place.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-action" href="#contact">
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-links">
              <ExternalLink href="https://github.com/cheseny1996">
                GitHub <span aria-hidden="true">↗</span>
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/daniel-samoei-638307164/">
                LinkedIn <span aria-hidden="true">↗</span>
              </ExternalLink>
            </div>
          </div>
          <div className="hero-art" aria-label="Portrait of Daniel Samoei">
            <div className="hero-orbit hero-orbit--outer" />
            <div className="hero-orbit hero-orbit--inner" />
            <div className="hero-portrait-frame">
              <Image
                alt="Daniel Samoei portrait"
                className="hero-portrait"
                height={500}
                src="/profile.png"
                width={500}
              />
            </div>
            <span className="orbit-label orbit-label--software">SOFTWARE</span>
            <span className="orbit-label orbit-label--data">DATA</span>
            <span className="orbit-label orbit-label--ai">APPLIED AI</span>
            <span className="hero-coordinate">01 / 03</span>
          </div>
          <div className="hero-bottom">
            <span>ENGINEERING THAT CONNECTS THE DOTS</span>
            <a href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="intro-band section-shell" id="about" aria-labelledby="about-title">
          <div className="section-index"><span>01</span> / THE APPROACH</div>
          <div className="intro-content">
            <p className="section-kicker">Curious by default. Practical by design.</p>
            <h2 id="about-title">
              Good technology starts with a clear problem — and ends with
              something people can <span>trust and use.</span>
            </h2>
            <div className="intro-columns">
              <p>
                My work sits between software engineering, business analysis,
                and data. I like getting close to the problem, understanding
                what a useful outcome looks like, and building a thoughtful path
                from idea to working solution.
              </p>
              <p>
                Whether I&apos;m shaping an API, checking a dataset, or
                evaluating an AI system, I care about the same things: sound
                assumptions, clear feedback, maintainable decisions, and
                technology that solves a practical need.
              </p>
            </div>
            <div className="intro-role-list" aria-label="Core professional roles">
              <span>AI Rating</span>
              <span>Machine Learning</span>
              <span>Data Analyst</span>
            </div>
          </div>
        </section>

        <section className="work-section section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <div className="section-index"><span>02</span> / SELECTED WORK</div>
              <h2 id="work-title">Built, tested, and <span>still curious.</span></h2>
            </div>
            <p className="section-aside">
              Real repositories, working previews, and clearly labeled
              concepts. No invented deployments or client work.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <ProjectVisual type={project.visual} />
                <div className="project-content">
                  <div className="project-meta">
                    <span className={`project-status project-status--${project.statusType}`}>
                      <i /> {project.status}
                    </span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-approach">{project.approach}</p>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="project-actions">
                    {project.demo && (
                      <ExternalLink className="project-link" href={project.demo}>
                        Open preview <span aria-hidden="true">↗</span>
                      </ExternalLink>
                    )}
                    {project.repository ? (
                      <ExternalLink
                        className="project-link project-link--secondary"
                        href={project.repository}
                      >
                        View repository <span aria-hidden="true">↗</span>
                      </ExternalLink>
                    ) : (
                      <span className="project-link project-link--muted">
                        {project.statusType === "planned"
                          ? "Project concept · not yet built"
                          : "Prototype · public repository to be added"}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities-section section-shell" id="capabilities" aria-labelledby="capabilities-title">
          <div className="section-heading">
            <div>
              <div className="section-index"><span>03</span> / TOOLKIT</div>
              <h2 id="capabilities-title">The right tool for <span>the real problem.</span></h2>
            </div>
            <p className="section-aside">
              Technologies I work with and explore across the product lifecycle.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <details className="skill-group" key={group.name} open={index === 0}>
                <summary>
                  <span className="skill-number">0{index + 1}</span>
                  <span>{group.name}</span>
                  <span className="skill-toggle" aria-hidden="true">+</span>
                </summary>
                <ul className="skill-list">
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </details>
            ))}
          </div>
        </section>

        <section className="experience-section section-shell" id="experience" aria-labelledby="experience-title">
          <div className="section-index"><span>04</span> / PROFESSIONAL FOCUS</div>
          <div className="experience-layout">
            <div className="experience-heading">
              <h2 id="experience-title">From the question to the <span>quality check.</span></h2>
              <p>
                My experience spans business analysis, software engineering,
                data processing, technical evaluation, and quality assurance.
                I bring those perspectives together rather than treating them
                as separate handoffs.
              </p>
            </div>
            <div className="experience-list">
              <article>
                <span>01</span>
                <div>
                  <h3>Frame the problem</h3>
                  <p>Translate a business need into clear requirements, useful measures, and a buildable plan.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Build with context</h3>
                  <p>Connect application logic, data flows, and user needs into solutions that are understandable and maintainable.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Check what matters</h3>
                  <p>Validate inputs, test important behaviors, and evaluate whether a system is doing what it claims.</p>
                </div>
              </article>
              <article>
                <span>04</span>
                <div>
                  <h3>Keep learning</h3>
                  <p>Stay curious about new tools while grounding decisions in evidence, constraints, and real use.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="credentials-section section-shell" id="credentials" aria-labelledby="credentials-title">
          <div className="section-index"><span>05</span> / EDUCATION & CERTIFICATIONS</div>
          <div className="credentials-card">
            <div>
              <p className="section-kicker">A note on credentials</p>
              <h2 id="credentials-title">Verified details, <span>when ready.</span></h2>
            </div>
            <p>
              Education and certifications are intentionally not listed until
              verified details are available. This section is ready to update
              with accurate qualifications.
            </p>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <div className="section-index"><span>06</span> / CONTACT</div>
          <div className="contact-content">
            <p className="section-kicker">Have a thoughtful problem to solve?</p>
            <h2 id="contact-title">Let&apos;s make something <span>useful.</span></h2>
            <p className="contact-copy">
              Reach out about software, data, applied AI, or a collaboration.
            </p>
            <a className="button button-primary contact-button" href="mailto:dscheseny@gmail.com">
              Email Daniel <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-links">
              <ExternalLink href="https://github.com/cheseny1996">GitHub ↗</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/daniel-samoei-638307164/">
                LinkedIn ↗
              </ExternalLink>
            </div>
          </div>
          <div className="contact-orbit" aria-hidden="true"><span>DS</span></div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top" aria-label="Daniel Samoei, back to top">
          <span className="brand-mark">DS</span>
          <span className="brand-name">Daniel Samoei</span>
        </a>
        <p>Software, data, and AI — applied with intention.</p>
        <span>© {new Date().getFullYear()} Daniel Samoei</span>
      </footer>
    </>
  );
}
