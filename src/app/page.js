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
    codePreview: {
      file: "payment_cycle_tracker.py",
      language: "PYTHON",
      lineStart: 118,
      href: "https://github.com/Cheseny1996/payment-cycle-tracker/blob/main/payment_cycle_tracker.py#L118-L125",
      lines: [
        "def summary_stats(df: pd.DataFrame) -> dict:",
        '    paid = df[df["status"] == "Paid"]',
        '    open_ = df[df["status"] == "Open"]',
        "    return {",
        '        "total_invoices": len(df),',
        '        "total_billed": round(df["amount"].sum(), 2),',
        '        "open_ar_balance": round(open_["amount"].sum(), 2),',
        '        "avg_days_to_pay": round(paid["days_to_pay"].mean(), 1),',
      ],
    },
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
    codePreview: {
      file: "unit_economics_model.py",
      language: "PYTHON",
      lineStart: 93,
      href: "https://github.com/Cheseny1996/unit-economics-model/blob/main/unit_economics_model.py#L93-L100",
      lines: [
        "    # CAC — sales & marketing spend / new customers acquired",
        '    df["cac"] = (df["sales_marketing_spend"] * scenario_mult["cac_mult"]) / df["new_customers"]',
        "",
        "    # LTV — ARPU / churn rate  (simple LTV formula)",
        '    df["ltv"] = df["arpu"] / df["churn"]',
        "",
        "    # LTV:CAC ratio",
        '    df["ltv_cac"] = df["ltv"] / df["cac"]',
      ],
    },
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
    codePreview: {
      file: "silent_failure_experiment.py",
      language: "PYTHON",
      lineStart: 180,
      href: "https://github.com/Cheseny1996/silent-failures-production-ml/blob/main/silent_failure_experiment.py#L180-L186",
      lines: [
        "    # 1. Population Stability Index (PSI) — standard drift metric",
        "    psi_scores = []",
        "    for i in range(X_current.shape[1]):",
        "        psi = compute_psi(X_baseline[:, i], X_current[:, i])",
        "        psi_scores.append(psi)",
        "    mean_psi = np.mean(psi_scores)",
        "    max_psi  = np.max(psi_scores)",
      ],
    },
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
    codePreview: {
      file: "lib/analytics/metrics.ts",
      language: "TYPESCRIPT",
      lineStart: 12,
      href: "https://github.com/Cheseny1996/analytics-workspace/blob/main/lib/analytics/metrics.ts#L12-L17",
      lines: [
        "  return {",
        "    ...totals,",
        "    conversionRate: totals.sessions ? (totals.conversions / totals.sessions) * 100 : 0,",
        "    averageOrderValue: totals.conversions ? totals.revenue / totals.conversions : 0,",
        "  };",
        "}",
      ],
    },
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
    codePreview: {
      file: "lib/retrieval.ts",
      language: "TYPESCRIPT",
      lineStart: 40,
      href: "https://github.com/Cheseny1996/applied-ai-knowledge-assistant/blob/main/lib/retrieval.ts#L40-L47",
      lines: [
        "    .map((chunk) => {",
        "      const words = terms(chunk.content);",
        "      const wordSet = new Set(words);",
        "      const matched = queryTerms.filter((term) => wordSet.has(term));",
        "      const score = matched.length / Math.sqrt(Math.max(words.length, 1));",
        "      return { chunk, score, matched: matched.length };",
        "    })",
        "    .filter((result) => result.matched > 0)",
      ],
    },
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
    codePreview: {
      file: "src/lib/evaluation.ts",
      language: "TYPESCRIPT",
      lineStart: 14,
      href: "https://github.com/Cheseny1996/quality-evaluation-workbench/blob/main/src/lib/evaluation.ts#L14-L21",
      lines: [
        "function overlapScore(source: string, candidate: string): number {",
        "  const expected = new Set(tokens(source));",
        "  const actual = new Set(tokens(candidate));",
        "  if (expected.size === 0 || actual.size === 0) return 0;",
        "  let common = 0;",
        "  for (const token of actual) if (expected.has(token)) common += 1;",
        "  return Math.round((2 * common / (expected.size + actual.size)) * 100);",
        "}",
      ],
    },
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
    image: "/projects/elliots-global-marketplace-shot.png",
    imageAlt: "Homepage screenshot of Elliot's Global Marketplace, showing its storefront, product categories, and featured campaigns",
    imageLabel: "LIVE SITE / STOREFRONT",
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
    image: "/projects/mzima-wells-studios-shot.png",
    imageAlt: "Homepage screenshot of Mzima Wells Studios, showing its creative studio storefront and navigation",
    imageLabel: "LIVE SITE / CREATIVE STUDIO",
    repository: "https://github.com/Cheseny1996/mw-studios",
    demo: "https://mw-studios.vercel.app",
  },
];

const skillGroups = [
  {
    name: "Full-stack & web",
    skills: ["Python", "Flask", "FastAPI", "Django", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Go", "REST APIs", "WebSockets", "Microservices", "MQTT", "Docker", "Secure application design"],
  },
  {
    name: "AI & machine learning",
    skills: ["Predictive models", "Propensity models", "Recommendation systems", "Computer vision", "Multimodal LLMs", "Prompt engineering", "RAG", "TensorFlow", "PyTorch", "PCA", "PLSR", "Neural networks", "Anomaly detection", "Feature engineering"],
  },
  {
    name: "AI rating & evaluation",
    skills: ["OpenAI API", "Claude API", "LLM output rating", "Accuracy & correctness review", "Reasoning and logical-soundness review", "Error and anti-pattern identification", "Structured failure-mode feedback", "Prompt engineering", "Model validation against held-out data"],
  },
  {
    name: "Data engineering",
    skills: ["Pandas", "NumPy", "PySpark", "Databricks", "ETL & migration", "Database, S3, API & web-scraping ingestion", "PostgreSQL", "SQLAlchemy", "Amazon RDS", "Apache Airflow", "Data validation", "Pipeline design"],
  },
  {
    name: "Data analyst",
    skills: ["SQL & Python analysis", "Data cleaning", "Data validation", "Statistical analysis", "Reporting", "Written findings for non-technical readers", "IBM Data Analyst Professional Certificate", "Power BI", "Tableau", "Excel"],
  },
  {
    name: "Automation engineering",
    skills: ["pytest test automation", "Automated security testing", "GitHub Actions", "CI/CD", "Apache Airflow orchestration", "GitHub bots", "Docker–MQTT integrations", "Python & C++ tooling", "asyncio", "Threading", "OOP"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS EC2", "AWS S3", "Amazon RDS", "Amazon EKS", "CloudWatch", "VPC", "Terraform", "Kubernetes", "ArgoCD", "Prometheus", "Grafana", "Docker", "Git", "GitHub Actions", "CI/CD"],
  },
  {
    name: "Testing & code review",
    skills: ["Unit testing", "Integration testing", "Performance testing", "pytest", "C++ test harnesses", "Embedded Python/C++ validation", "Debugging", "Bug & edge-case analysis", "Structured code review", "Mentoring"],
  },
  {
    name: "Editing & technical writing",
    skills: ["Editing & proofreading", "Accuracy & consistency review", "Technical documentation", "Runbooks", "FDA submission reports", "Scientific manuscripts", "Jira & Slack documentation", "Stakeholder communication", "Presentations"],
  },
];

const experience = [
  {
    role: "AI Rater & Automation Engineer",
    company: "Revelo",
    period: "Mar 2025 – Jun 2026",
    focus: "AI output rating, automation engineering, testing, CI/CD & cloud infrastructure",
    highlights: [
      "Rated AI and LLM-generated outputs for accuracy, correctness, and reasoning quality; identified plausible-looking logical errors and anti-patterns and wrote structured feedback explaining corrections.",
      "Validated embedded satellite software in Python and C++, debugging defects through unit and integration tests with pytest and custom C++ test harnesses.",
      "Automated security-testing workflows to reduce manual QA effort and support critical project milestones.",
      "Analyzed and refactored production Python code using asyncio, threading, and OOP to improve reliability, readability, and performance ahead of launch.",
      "Built Docker–MQTT integrations and improved REST API functions, resolving GPS and networking issues before customer shipment.",
      "Maintained CI/CD pipelines across teams and implemented GitHub Actions quality gates, automated deployments, and security practices.",
      "Provisioned repeatable AWS VPC, RDS, and EKS environments using modular Terraform, with Prometheus, Grafana, and ArgoCD.",
      "Documented decisions, fixes, and runbooks in Jira and Slack for a remote, asynchronous, cross-regional team.",
    ],
  },
  {
    role: "Senior Full-Stack Developer / Data Engineer",
    company: "QuantumNest Global",
    period: "Jan 2023 – Feb 2025",
    focus: "Data pipelines, quality enforcement & AI evaluation",
    highlights: [
      "Integrated OpenAI and Claude APIs; evaluated output accuracy and correctness and documented recurring error patterns.",
      "Created a Python GitHub bot enforcing code-review and security standards before merge.",
      "Built Pandas, PySpark, and Databricks ETL pipelines; developed source-document parsers and validation checks.",
      "Developed multithreaded Python ingestion and database-refresh jobs, monitoring runs and resolving failures.",
    ],
  },
  {
    role: "Business System Analyst / AI & Data Engineer",
    company: "Amgen",
    period: "Dec 2022 – Apr 2024",
    focus: "Production ML, MLOps & multimodal AI",
    highlights: [
      "Built predictive models in TensorFlow and PyTorch and evaluated them against held-out data before deployment.",
      "Developed a real-time computer-vision system using multimodal LLMs and prompt engineering.",
      "Automated ETL and model-deployment workflows with Apache Airflow; built recommendation, propensity, and in-app search systems.",
      "Translated model results into clear recommendations for product and marketing stakeholders.",
    ],
  },
  {
    role: "Senior AI Scientist",
    company: "Analytics 4 Life",
    period: "Dec 2019 – Apr 2022",
    focus: "Production ML in an FDA-regulated environment",
    highlights: [
      "Led development of a Python and C++ application predicting cardiac disease from non-invasive ECG/PPG signals, from data collection through AWS deployment and monitoring; the work supports pending US and international patents.",
      "Designed anomaly-detection algorithms for noisy physiological time series and validated results on imperfect data.",
      "Improved inference performance of a production AWS model by 60% through parallelization and algorithmic optimization.",
      "Authored FDA submission reports and scientific manuscripts; reviewed colleagues’ models and code against quality, correctness, and documentation standards.",
      "Mentored junior data scientists, contributed to hiring decisions, and presented model capabilities to non-technical audiences.",
    ],
  },
];

const physicsCourseYears = [
  {
    year: "Year I · 2015/2016",
    courses: [
      ["BOT 110", "Basic Botany I", 3],
      ["BOT 111", "Basic Botany II", 3],
      ["CHE 110", "Basic Chemistry I", 4],
      ["CHE 111", "Basic Chemistry II", 4],
      ["IRD 100", "Communication Skills I", 3],
      ["IRD 102", "Communication Skills II", 3],
      ["IRD 101", "Quantitative Skills I", 3],
      ["IRD 104", "Development Concepts and Its Application", 3],
      ["MAT 110", "Basic Calculus", 3],
      ["MAT 111", "Chemistry and Elementary Applied Mathematics", 4],
      ["PHY 110", "Basic Physics I", 4],
      ["PHY 111", "Basic Physics II", 3],
      ["ZOO 110", "Basic Zoology I", 3],
      ["ZOO 111", "Basic Zoology II", 4],
    ],
  },
  {
    year: "Year II · 2016/2017",
    courses: [
      ["COM 210", "Introduction to Computer Science", 3],
      ["IRD 200", "State, Society and Development", 3],
      ["MAT 210", "Calculus", 3],
      ["MAT 211", "Calculus and Analytical Geometry", 3],
      ["MAT 212", "Linear Algebra I", 3],
      ["MAT 213", "Linear Algebra II", 3],
      ["MAT 214", "Vector Analysis", 3],
      ["MAT 215", "Classical Mechanics", 3],
      ["PHY 210", "Electricity and Magnetism", 3],
      ["PHY 211", "Vibration and Waves", 3],
      ["PHY 212", "Modern Physics", 4],
      ["PHY 213", "Electronics I", 3],
      ["STA 210", "Statistics and Probability I", 3],
      ["STA 211", "Statistics and Probability II", 3],
    ],
  },
  {
    year: "Year III · 2017/2018",
    courses: [
      ["COM 310", "Computer Programming", 3],
      ["MAT 312", "Complex Analysis", 3],
      ["MAT 313", "Abstract Algebra", 3],
      ["MAT 314", "Ordinary Differential Equations", 3],
      ["MAT 316", "Methods", 3],
      ["MAT 317", "Numerical Analysis I", 3],
      ["MAT 319", "Advanced Calculus", 3],
      ["PHY 310", "Mathematical Physics", 3],
      ["PHY 311", "Solid State Physics II", 3],
      ["PHY 312", "Optics", 3],
      ["PHY 313", "Electronics II", 3],
      ["PHY 314", "Quantum Mechanics", 3],
      ["PHY 316", "Introduction to Material Science", 3],
      ["PHY 317", "Classical Mechanics II", 3],
    ],
  },
  {
    year: "Year IV · 2018/2019",
    courses: [
      ["COM 400", "Database Management", 3],
      ["COM 410", "Project Appraisal", 3],
      ["PHY 410", "Quantum Mechanics II", 3],
      ["PHY 411", "Thermodynamics", 3],
      ["PHY 412", "Workshop and Drawing", 3],
      ["PHY 413", "Mathematical Physics II", 3],
      ["PHY 414", "Solid State Physics III", 3],
      ["PHY 415", "Statistical Mechanics", 3],
      ["PHY 416", "Atomic and Nuclear Physics", 3],
      ["PHY 419", "Research Project", 6],
      ["PHY 420", "Renewable Energy", 3],
      ["PHY 421", "Digital Electronics", 3],
      ["PHY 429", "Introduction to Lasers", 3],
      ["PHY 430", "Electronic Circuits and Microprocessors", 3],
    ],
  },
];

const codeTokenPattern =
  /(#.*|\/\/.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:async|await|const|def|else|export|for|from|function|if|import|in|let|new|return|throw|type|while)\b|\b\d+(?:\.\d+)?\b)/g;
const codeKeywords = new Set(
  "async await const def else export for from function if import in let new return throw type while"
    .split(" "),
);

function highlightCodeLine(line) {
  return line.split(codeTokenPattern).filter(Boolean).map((token, index) => {
    let className = "";
    if (token.startsWith("#") || token.startsWith("//")) {
      className = "code-token--comment";
    } else if (/^["'`]/.test(token)) {
      className = "code-token--string";
    } else if (/^\d/.test(token)) {
      className = "code-token--number";
    } else if (codeKeywords.has(token)) {
      className = "code-token--keyword";
    }

    return className
      ? <span className={className} key={index}>{token}</span>
      : token;
  });
}

function ProjectVisual({ type, image, imageAlt, imageLabel, codePreview }) {
  if (image) {
    return (
      <div className="project-visual project-visual--photo">
        <Image
          alt={imageAlt}
          className="project-cover-image"
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          src={image}
        />
        <span className="project-image-label">{imageLabel}</span>
      </div>
    );
  }

  if (codePreview) {
    return (
      <div className="project-visual project-visual--code">
        <div className="code-editor">
          <div className="code-editor__header">
            <span className="code-editor__traffic" aria-hidden="true">
              <i /><i /><i />
            </span>
            <span className="code-editor__file">{codePreview.file}</span>
            <span className="code-editor__language">{codePreview.language}</span>
          </div>
          <ol className="code-editor__lines" aria-label={`${codePreview.file} source excerpt`}>
            {codePreview.lines.map((line, index) => (
              <li key={`${codePreview.lineStart + index}-${line}`}>
                <span className="code-editor__line-number" aria-hidden="true">
                  {codePreview.lineStart + index}
                </span>
                <code>{highlightCodeLine(line)}</code>
              </li>
            ))}
          </ol>
          <div className="code-editor__footer">
            <span>
              SOURCE EXCERPT · L{codePreview.lineStart}–L{codePreview.lineStart + codePreview.lines.length - 1}
            </span>
            <ExternalLink className="code-editor__source" href={codePreview.href}>
              View source <span aria-hidden="true">↗</span>
            </ExternalLink>
          </div>
        </div>
      </div>
    );
  }

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
            <p className="eyebrow"><span className="status-dot" /> Daniel Cheseny Samoei · Nairobi, Kenya</p>
            <div className="hero-role-list" aria-label="Professional focus areas">
              <span>Software Engineer</span>
              <span>ML Scientist</span>
              <span>Physicist</span>
            </div>
            <h1 id="hero-title">
              I build,
              <br />
              test & evaluate
              <br />
              <span>what matters.</span>
            </h1>
            <p className="hero-intro">
              Software engineer, machine learning scientist, and physicist
              with 8+ years of Python and C++ development. I build and review
              production software, evaluate AI outputs, and explain complex
              technical results with care.
            </p>
            <ul className="hero-role-tags" aria-label="Professional roles">
              <li>Senior Full-Stack, AI &amp; Data Engineer</li>
              <li>Automation Engineer</li>
              <li>Data Analyst</li>
              <li>Technical Editor</li>
            </ul>
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
            <span className="orbit-label orbit-label--data">PHYSICS</span>
            <span className="orbit-label orbit-label--ai">MACHINE LEARNING</span>
            <span className="hero-coordinate">01 / 03</span>
          </div>
          <div className="hero-bottom">
            <span>AI MODEL EVALUATION · CODE REVIEW · TECHNICAL REASONING</span>
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
                With 8+ years of Python and C++ development and a Bachelor of
                Science in Physics, I bring software engineering, machine learning, and
                experimental reasoning together. My work includes evaluating
                OpenAI and Claude API outputs, reviewing code against quality
                standards, and testing models against held-out data.
              </p>
              <p>
                I have authored FDA submission reports and scientific
                manuscripts, improved production-model inference speed by 60%,
                and explained technical results to regulators, engineers, and
                non-technical stakeholders. I work fluently in English and am
                comfortable collaborating remotely and asynchronously.
              </p>
            </div>
            <div className="intro-role-list" aria-label="Core professional roles">
              <span>AI Model Evaluation</span>
              <span>AI Rating & Code Review</span>
              <span>Machine Learning</span>
              <span>Data & Signal Analysis</span>
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
                <ProjectVisual
                  type={project.visual}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  imageLabel={project.imageLabel}
                  codePreview={project.codePreview}
                />
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
          <div className="section-index"><span>04</span> / EXPERIENCE</div>
          <div className="experience-layout">
            <div className="experience-heading">
              <h2 id="experience-title">Evidence-led work, from <span>research to release.</span></h2>
              <p>
                Across AI research, regulated machine learning, data platforms,
                and cloud delivery, I focus on correctness, reproducibility,
                and clear communication. Dates and descriptions below reflect
                the experience provided in my profile.
              </p>
            </div>
            <div className="experience-list">
              {experience.map((job, index) => (
                <article key={`${job.company}-${job.role}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{job.role} <span className="experience-company">· {job.company}</span></h3>
                    <p className="experience-meta">{job.period} · {job.focus}</p>
                    <ul>
                      {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="credentials-section section-shell" id="credentials" aria-labelledby="credentials-title">
          <div className="section-index"><span>05</span> / EDUCATION & CERTIFICATIONS</div>
          <div className="credentials-card">
            <div className="credential-block">
              <p className="section-kicker">Education</p>
              <h2 id="credentials-title">Built on science, <span>applied with purpose.</span></h2>
              <article className="credential-item">
                <h3>B.Sc. Physics</h3>
                <p>Moi University · 2014–2019</p>
                <p>Physics degree covering mathematics, mechanics, electromagnetism, electronics, computation, and experimental research.</p>
              </article>
              <div className="physics-coursework">
                <p className="section-kicker">Transcript coursework & course units</p>
                <p className="coursework-note">Selected course titles and unit counts from the academic records.</p>
                {physicsCourseYears.map((year) => (
                  <details className="course-year" key={year.year}>
                    <summary>
                      <span>{year.year}</span>
                      <span>{year.courses.length} courses</span>
                    </summary>
                    <ul>
                      {year.courses.map(([code, title, units]) => (
                        <li key={code}>
                          <span className="course-code">{code}</span>
                          <span className="course-title">{title}</span>
                          <span className="course-units">{units} units</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>
            <div className="credential-details">
              <div>
                <p className="section-kicker">Certifications & training</p>
                <ul>
                  <li>IBM Data Analyst Professional Certificate · Coursera / IBM</li>
                  <li>Applied Data Science Lab · WorldQuant University</li>
                  <li>TEFL certificate · English curriculum</li>
                </ul>
              </div>
              <div>
                <p className="section-kicker">Languages</p>
                <p>English — fluent (speaking, reading, writing)</p>
                <p>Swahili — proficiency not specified in the supplied profile</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <div className="section-index"><span>06</span> / CONTACT</div>
          <div className="contact-content">
            <p className="section-kicker">Have a thoughtful problem to solve?</p>
            <h2 id="contact-title">Let&apos;s make something <span>useful.</span></h2>
            <p className="contact-copy">
              Open to remote opportunities in AI model evaluation, code review,
              software engineering, machine learning, and technical research.
              Based in Nairobi, Kenya.
            </p>
            <a className="button button-primary contact-button" href="mailto:dscheseny@gmail.com">
              Email Daniel <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-phone" href="tel:+254797844624">+254 797 844 624</a>
            <div className="contact-links">
              <ExternalLink href="https://github.com/cheseny1996">GitHub ↗</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/daniel-samoei-638307164/">
                LinkedIn ↗
              </ExternalLink>
              <ExternalLink href="mailto:dscheseny@gmail.com">dscheseny@gmail.com ↗</ExternalLink>
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
        <p>AI model evaluation · software engineering · physics</p>
        <span>© {new Date().getFullYear()} Daniel Samoei</span>
      </footer>
    </>
  );
}
