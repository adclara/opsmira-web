import {
  ArrowRight,
  AppWindow,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  ClipboardCheck,
  Factory,
  Gauge,
  GraduationCap,
  HardHat,
  LayoutDashboard,
  MessageSquareMore,
  Package,
  PhoneCall,
  Route,
  ScanSearch,
  SearchCheck,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  TrendingDown,
  Truck,
  Warehouse
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavLink = { label: string; href: string };
export type IconCard = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export type IndustryCard = {
  title: string;
  pain: string;
  outcome: string;
  icon: LucideIcon;
};

export type PackageCard = {
  title: string;
  price: string;
  originalPrice?: string;
  setup: string;
  bestFor: string;
  body: string;
  bullets: string[];
};

export type ServiceDetail = {
  title: string;
  description: string;
  deliverables: string[];
  impact: string;
  icon: LucideIcon;
};

export type CaseStudy = {
  title: string;
  subtitle: string;
  problem: string;
  implementation: string;
  outcome: string;
  economics: string;
  takeaways: string[];
  note?: string;
};

export type TestimonialAsset = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type LogoAsset = {
  name: string;
  src: string;
  alt: string;
};

export type WorkflowVisualAsset = {
  title: string;
  src: string;
  alt: string;
  caption: string;
};

export const site = {
  name: "OpsMira",
  legalName: "TEIMECA LAND LLC d/b/a OpsMira",
  legalDisclaimer:
    "OpsMira is a fictitious name / DBA owned by TEIMECA LAND LLC.",
  experienceDisclaimer:
    "Professional experience references are included for background context only. OpsMira is an independent firm and is not affiliated with or endorsed by Amazon, Lowe's, Sam's Club, or Walmart.",
  email: "adrianclara@opsmira.ai",
  linkedIn: "https://www.linkedin.com/in/adrian-clara-9721a9122",
  location: "Serving businesses in Florida and across the United States.",
  valueProp:
    "Operations and supply-chain consulting that pays for itself — process improvements, custom apps, dashboards, and AI agents, scoped to the value they create.",
  trustLine:
    "Free operations diagnosis, scoped proposal, delivery, and continuous optimization.",
  founderSummary:
    "OpsMira translates enterprise-grade operations and supply-chain expertise into practical, measurable improvements for growing businesses."
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Value Estimator", href: "/#savings-calculator" },
  { label: "Engagement", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const services: IconCard[] = [
  {
    title: "Operations & supply-chain advisory",
    body:
      "On-site or remote diagnosis of your operations, supply chain, and cost structure — with a prioritized, practical roadmap.",
    icon: SearchCheck
  },
  {
    title: "Process design & standards",
    body:
      "Redesigned workflows, SOPs, and documented standards your team can actually follow day to day.",
    icon: ClipboardCheck
  },
  {
    title: "Cost reduction & efficiency audits",
    body:
      "Deep audits that surface where money leaks — labor, inventory, routing, overhead — and exactly how to stop it.",
    icon: TrendingDown
  },
  {
    title: "Custom apps & tools",
    body:
      "Software built around your real workflow: intake, scheduling, tracking, approvals — not a generic template.",
    icon: AppWindow
  },
  {
    title: "Dashboards & analytics",
    body:
      "Real-time visibility into cost, output, and team performance, consolidated into one operational view.",
    icon: BarChart3
  },
  {
    title: "AI agents & automation",
    body:
      "Where it pays off, AI agents handle follow-ups, reporting, and repetitive work — a layer on top, not the whole plan.",
    icon: Bot
  },
  {
    title: "Training & change management",
    body:
      "We bring your team along — training, documentation, and adoption support so the improvements actually stick.",
    icon: GraduationCap
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Free diagnosis",
    body:
      "We visit or meet remotely, map your operations and supply chain, and pinpoint the highest-impact opportunities. No cost, no obligation."
  },
  {
    step: "02",
    title: "Scoped proposal",
    body:
      "You get a clear plan with fixed scope: the improvement, the deliverable, and the expected payback. You only invest in the fix."
  },
  {
    step: "03",
    title: "Build & optimize",
    body:
      "We deliver the processes, standards, apps, dashboards, or agents — then support adoption and tune for measurable results."
  }
];

export const industries: IndustryCard[] = [
  {
    title: "Construction & trades",
    pain: "Leads and field updates get buried across calls and texts.",
    outcome: "Standardized intake and coordination capture every job.",
    icon: HardHat
  },
  {
    title: "Manufacturing",
    pain: "Production inefficiencies and operational gaps go undetected.",
    outcome: "Process redesign and monitoring maximize throughput and cut waste.",
    icon: Factory
  },
  {
    title: "Logistics & distribution",
    pain: "Routing, scheduling, and demand forecasting rely on guesswork.",
    outcome: "Optimized routes, demand planning, and lower operating cost.",
    icon: Truck
  },
  {
    title: "HVAC & service companies",
    pain: "Dispatching and follow-up depend on manual effort.",
    outcome: "Standardized scheduling, faster response, and recovered jobs.",
    icon: Gauge
  },
  {
    title: "Retail & e-commerce",
    pain: "Inventory management and sales follow-up create revenue leaks.",
    outcome: "Inventory standards and sales recovery built into the workflow.",
    icon: ShoppingCart
  },
  {
    title: "Multi-location operations",
    pain: "Owners become the manual routing layer for every decision.",
    outcome: "Documented standards and dashboards give control across locations.",
    icon: BriefcaseBusiness
  },
  {
    title: "Warehousing & fulfillment",
    pain: "Status reporting and inventory tracking spread across spreadsheets.",
    outcome: "Unified dashboards and standardized inventory management.",
    icon: Warehouse
  }
];

export const packages: PackageCard[] = [
  {
    title: "Diagnose",
    price: "Free",
    setup: "No cost · no obligation",
    bestFor: "Where you're losing money",
    body:
      "An on-site or remote assessment of your operations, supply chain, and cost structure — with a prioritized roadmap.",
    bullets: [
      "Operations & cost mapping",
      "Quick-win identification",
      "Prioritized roadmap",
      "Clear next steps"
    ]
  },
  {
    title: "Build",
    price: "Scoped to the fix",
    setup: "Priced to the value it creates",
    bestFor: "The improvement that pays back",
    body:
      "You invest only in what we deliver — process redesign, standards, a custom app, dashboards, or AI agents.",
    bullets: [
      "Fixed scope & deliverable",
      "Expected payback up front",
      "Built around your workflow",
      "Launch & training included"
    ]
  },
  {
    title: "Optimize",
    price: "Optional retainer",
    setup: "Only if it keeps earning",
    bestFor: "Compounding the gains",
    body:
      "Continuous improvement, tuning, and new opportunities as your operation grows and changes.",
    bullets: [
      "Performance tracking",
      "Iterative improvements",
      "Priority support",
      "Expansion planning"
    ]
  }
];

export const detailedServices: ServiceDetail[] = [
  {
    title: "Operations audit & improvement strategy",
    description:
      "Every engagement starts by mapping your current operations, identifying where costs leak and processes stall, and designing an improvement plan that delivers measurable ROI.",
    deliverables: [
      "Process mapping",
      "Cost leakage analysis",
      "Production bottleneck review",
      "Operations assessment",
      "Revenue opportunity scan",
      "Prioritized improvement roadmap"
    ],
    impact:
      "You get a clear, prioritized plan showing exactly which improvements to make first and the expected cost savings.",
    icon: ScanSearch
  },
  {
    title: "Process design & standards",
    description:
      "We redesign how work flows and document the standards and SOPs your team needs — so execution is consistent, repeatable, and easy to onboard into.",
    deliverables: [
      "Workflow redesign",
      "SOP documentation",
      "Operating standards",
      "Role & responsibility maps",
      "Quality checkpoints",
      "Rollout playbooks"
    ],
    impact:
      "Consistent execution, faster onboarding, and processes that hold up as you grow.",
    icon: ClipboardCheck
  },
  {
    title: "Custom apps, dashboards & analytics",
    description:
      "We build software and real-time visibility around your actual workflow — intake, scheduling, tracking, approvals — and surface the metrics that matter.",
    deliverables: [
      "Custom internal tools",
      "Operational dashboards",
      "KPI tracking",
      "Cost analytics",
      "Production metrics",
      "Automated reporting"
    ],
    impact:
      "Clear operational visibility without manual reporting, enabling faster and better-informed decisions.",
    icon: LayoutDashboard
  },
  {
    title: "AI agents & automation",
    description:
      "Where it pays off, we layer in AI agents to handle follow-ups, reporting, scheduling, and repetitive work — an add-on to the process improvements, not a replacement for them.",
    deliverables: [
      "Instant lead response",
      "Follow-up automation",
      "Appointment scheduling",
      "Reporting automation",
      "Repetitive-task agents",
      "Integration with your stack"
    ],
    impact:
      "Less time on busywork, faster response, and capacity reclaimed for higher-value work.",
    icon: Bot
  },
  {
    title: "Delivery, integration & optimization",
    description:
      "OpsMira isn't advice-only. We implement the improvement into your existing stack, support your team through adoption, and continuously optimize for results.",
    deliverables: [
      "Tool integration",
      "Implementation",
      "Team training",
      "Process documentation",
      "Performance tuning",
      "Expansion planning"
    ],
    impact:
      "Improvements that actually work within your operations and keep improving over time.",
    icon: ShieldCheck
  }
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Process standardization for a service business",
    subtitle: "Representative engagement scenario",
    problem:
      "Inbound leads were falling through the cracks during peak hours and after business hours because intake and follow-up were ad hoc, costing the business an estimated $8k/month in lost work.",
    implementation:
      "OpsMira mapped the intake process, designed a standardized response-and-scheduling workflow, documented the SOP, and added an AI follow-up agent integrated with the existing CRM.",
    outcome:
      "The business recovered 15+ jobs per month that were previously lost, cut response time by 90%, and saw a 3.2x return on the engagement within the first 60 days.",
    economics:
      "At an average deal value of $2,500, recovering even 4 additional jobs per month covers the engagement cost multiple times over.",
    takeaways: [
      "A standardized process protects revenue more than any single tool.",
      "Automation pays off once the process underneath it is sound.",
      "Integration with existing systems prevents workflow disruption.",
      "Measurable ROI within 30-60 days."
    ],
    note:
      "Illustrative scenario based on common service business patterns."
  },
  {
    title: "Operations optimization for a distribution company",
    subtitle: "Representative engagement scenario",
    problem:
      "Inventory stockouts and overstock were costing the business $15k/month in lost sales and excess carrying costs. Demand planning relied on gut feeling and spreadsheets.",
    implementation:
      "OpsMira audited the operation, redesigned reorder processes, built a demand-planning dashboard, and set standards that alert the team to potential stockouts two weeks in advance.",
    outcome:
      "Stockout incidents dropped 78%, carrying costs decreased 23%, and the purchasing team saved 20 hours per week previously spent on manual forecasting.",
    economics:
      "Reduced stockouts plus lower inventory costs delivered over $12k/month in savings against the engagement investment.",
    takeaways: [
      "Better processes and visibility outperform manual methods significantly.",
      "Early alerts prevent cascading operational failures.",
      "Reduced carrying costs compound over time.",
      "Purchasing teams can focus on strategy instead of spreadsheets."
    ],
    note:
      "Illustrative scenario based on common distribution and wholesale patterns."
  },
  {
    title: "Production throughput optimization for manufacturing",
    subtitle: "Representative engagement scenario",
    problem:
      "Production line inefficiencies, undocumented standards, and poor scheduling coordination were limiting output to 65% of theoretical capacity and causing quality issues.",
    implementation:
      "OpsMira mapped the line, redesigned scheduling and standard work, built a throughput dashboard, and layered monitoring on top to flag anomalies before they cause downtime.",
    outcome:
      "Production output increased 31%, unplanned downtime dropped 45%, and quality defect rates decreased by 28% — all without adding headcount.",
    economics:
      "At the company's per-unit margins, the output increase alone generated an additional $40k/month in revenue capacity.",
    takeaways: [
      "Standard work and scheduling catch losses that tooling alone misses.",
      "Monitoring prevents costly unplanned downtime.",
      "Throughput gains compound with existing fixed costs.",
      "Reduced idle time between shifts adds up fast."
    ],
    note:
      "Illustrative scenario based on common manufacturing and production patterns."
  }
];

export const testimonials: TestimonialAsset[] = [];
export const proofLogos: LogoAsset[] = [];
export const workflowVisuals: WorkflowVisualAsset[] = [];

export const values = [
  "Diagnosis first, tools second",
  "Measured ROI before broader rollout",
  "Process improvements that last",
  "Deliver fast, optimize continuously",
  "Integrate with existing systems",
  "Focus on cost savings and profit growth"
];

export const footerLinks = [
  { label: "Book Free Diagnosis", href: "/contact" },
  { label: "Explore Services", href: "/services" },
  { label: "View Case Studies", href: "/case-studies" }
];

export const heroStats = [
  { label: "Cost reduction", value: "20-40%" },
  { label: "Process cycle time", value: "-35%" },
  { label: "Typical payback", value: "30-90 days" }
];

export const ctaArrow = ArrowRight;

export const comparisonRows = [
  {
    label: "Cost visibility",
    before: "Costs buried across spreadsheets and gut feel.",
    after: "Audited cost structure with a prioritized savings plan."
  },
  {
    label: "Processes",
    before: "Tribal knowledge, inconsistent execution.",
    after: "Documented SOPs and standards your team follows."
  },
  {
    label: "Tools",
    before: "Manual workarounds and disconnected apps.",
    after: "Custom tools and dashboards built around your workflow."
  },
  {
    label: "Repetitive work",
    before: "Staff buried in follow-ups and reporting.",
    after: "Automated where it pays — AI agents handle the busywork."
  }
];

export const aboutStandards = [
  {
    title: "Deliver improvements that pay back",
    body:
      "OpsMira is structured around measurable outcomes — cost reduction, faster processes, and profit growth — not theoretical capability."
  },
  {
    title: "The advice is free; you pay for results",
    body:
      "Diagnosis comes at no cost. You invest only in the improvement we deliver, scoped and priced to the value it creates."
  },
  {
    title: "Start where impact is fastest",
    body:
      "Every engagement begins with the operation most likely to reduce cost, speed up processes, or increase output within 30 days."
  }
];

export const implementationPrinciples = [
  "Map current operations before proposing solutions.",
  "Prioritize cost savings and profit growth first.",
  "Build around real workflows, not idealized processes.",
  "Integrate improvements with existing tools and systems.",
  "Optimize continuously based on measured performance."
];

export const intakeSteps = [
  {
    title: "Share the bottleneck",
    body:
      "Tell us where costs are leaking, processes are stalling, or opportunities are being missed."
  },
  {
    title: "Get a free diagnosis",
    body:
      "OpsMira maps your operations and identifies the highest-ROI improvement, with the expected impact spelled out."
  },
  {
    title: "Build with support",
    body:
      "Your improvement is delivered with team training and continuous optimization from day one."
  }
];

export const intakeOutputs = [
  "The highest-impact operation to improve first",
  "What the first engagement would deliver",
  "Realistic ROI projections based on your data"
];

export const buyerFaqs = [
  {
    question: "What does the free diagnosis include?",
    answer:
      "An on-site or remote assessment of your operations and cost structure, plus a prioritized roadmap of the highest-impact improvements — at no cost and no obligation."
  },
  {
    question: "How does pricing work?",
    answer:
      "The diagnosis is free. From there, every engagement is scoped to a specific deliverable and priced to the value it creates — process redesign, standards, an app, dashboards, or AI agents."
  },
  {
    question: "Do you replace my team?",
    answer:
      "No. We improve how your team works — better processes, tools, and (where it pays) automation — so they can focus on higher-value work."
  }
];

export const fitSignals = {
  bestFit: [
    "You're losing money to manual processes, slow response, or operational gaps.",
    "You want measurable cost reduction and profit growth, not vague innovation.",
    "You prefer a delivered improvement over managing another tool.",
    "You're ready to see ROI within 30-60 days, not 6 months."
  ],
  notFit: [
    "You want fully autonomous AI with zero human oversight.",
    "Your operation doesn't have enough volume for improvements to matter.",
    "You want a broad transformation before proving one improvement.",
    "You're only shopping for the cheapest software subscription."
  ],
  needsFromClient: [
    "Clarity on where costs are leaking or processes are stalling.",
    "Willingness to start with one high-impact improvement.",
    "Access to the operational data or context needed for setup.",
    "A results-first mindset focused on measurable outcomes."
  ]
};

export const rolloutTimeline = [
  {
    phase: "First 30 days",
    title: "Diagnose & build",
    body:
      "Map your operations, identify the highest-ROI opportunity, and deliver the first improvement with full support."
  },
  {
    phase: "Days 30-60",
    title: "Measure & expand",
    body:
      "Track performance, validate cost savings, and expand to additional operations."
  },
  {
    phase: "Days 60-90",
    title: "Optimize & scale",
    body:
      "Tune performance, add new capabilities, and build toward full operational excellence."
  }
];

export const contactPrompts = [
  "Where are costs leaking or processes stalling?",
  "What manual processes consume the most team hours?",
  "Current tools and systems in your stack",
  "Most urgent operational bottleneck"
];

export const engagementSummary = {
  opsmiraHandles: [
    "Operations diagnosis and improvement strategy",
    "Process redesign, standards, apps, and dashboards",
    "Integration, launch support, and optimization"
  ],
  clientKeeps: [
    "Strategic decisions and approvals",
    "Business rules and customer relationships",
    "Control over rollout pace and scope"
  ],
  measuredOutcomes: [
    "Cost reduction and savings",
    "Faster, more consistent processes",
    "Revenue recovered and profit growth"
  ]
};
