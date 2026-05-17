import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  ClipboardCheck,
  Factory,
  Gauge,
  HardHat,
  LayoutDashboard,
  MessageSquareMore,
  Package,
  PhoneCall,
  ScanSearch,
  Settings2,
  ShieldCheck,
  ShoppingCart,
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
    "Professional experience references are included for background context only. OpsMira is not affiliated with or endorsed by Amazon, Lowe's, Sam's Club, or Walmart.",
  email: "adrianclara@opsmira.ai",
  linkedIn: "https://www.linkedin.com/in/adrian-clara-9721a9122",
  location: "Serving businesses in Florida and across the United States.",
  valueProp:
    "AI agents that cut costs, streamline operations, maximize output, and grow profit on autopilot.",
  trustLine:
    "Operational audit, AI agent deployment, launch support, and continuous optimization.",
  founderSummary:
    "OpsMira translates enterprise-grade AI and operations expertise into practical, measurable implementations for growing businesses."
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "ROI Calculator", href: "/#savings-calculator" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const services: IconCard[] = [
  {
    title: "AI agents & automation",
    body:
      "Intelligent agents that handle follow-ups, scheduling, approvals, and reporting — all on autopilot.",
    icon: Bot
  },
  {
    title: "Process optimization",
    body:
      "AI-powered process analysis, resource management, task optimization, and bottleneck detection.",
    icon: Package
  },
  {
    title: "Production intelligence",
    body:
      "Real-time monitoring, anomaly detection, throughput optimization, and waste reduction across your operations.",
    icon: Factory
  },
  {
    title: "Sales & revenue agents",
    body:
      "Automated lead qualification, quote follow-ups, churn prevention, and pipeline management.",
    icon: ShoppingCart
  },
  {
    title: "Operations dashboards",
    body:
      "Real-time visibility into costs, production, operations, and team performance in one place.",
    icon: LayoutDashboard
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Audit",
    body:
      "We map your operations, identify where costs leak and production stalls, and define the highest-impact AI agent deployment."
  },
  {
    step: "02",
    title: "Deploy",
    body:
      "We configure and launch AI agents with human oversight, integrate with your existing tools, and support your team through adoption."
  },
  {
    step: "03",
    title: "Optimize",
    body:
      "We track performance, tune agent logic, and expand coverage so cost savings and output gains keep compounding."
  }
];

export const industries: IndustryCard[] = [
  {
    title: "Construction & trades",
    pain: "Leads and field updates get buried across calls and texts.",
    outcome: "AI agents catch every lead and automate coordination.",
    icon: HardHat
  },
  {
    title: "Manufacturing",
    pain: "Production inefficiencies and operational gaps go undetected.",
    outcome: "Real-time AI monitoring maximizes throughput and cuts waste.",
    icon: Factory
  },
  {
    title: "Logistics & distribution",
    pain: "Routing, scheduling, and demand forecasting rely on guesswork.",
    outcome: "AI agents optimize routes, predict demand, and reduce costs.",
    icon: Truck
  },
  {
    title: "HVAC & service companies",
    pain: "Dispatching and follow-up depend on manual effort.",
    outcome: "Automated scheduling, missed-call recovery, and faster response.",
    icon: Gauge
  },
  {
    title: "Retail & e-commerce",
    pain: "Inventory management and sales follow-up create revenue leaks.",
    outcome: "AI-driven inventory optimization and automated sales recovery.",
    icon: ShoppingCart
  },
  {
    title: "Multi-location operations",
    pain: "Owners become the manual routing layer for every decision.",
    outcome: "AI agents give visibility and control across all locations.",
    icon: BriefcaseBusiness
  },
  {
    title: "Warehousing & fulfillment",
    pain: "Status reporting and inventory tracking spread across spreadsheets.",
    outcome: "Unified dashboards and AI-powered inventory management.",
    icon: Warehouse
  }
];

export const packages: PackageCard[] = [
  {
    title: "Starter",
    price: "$250/mo",
    setup: "From $700 setup — based on business structure",
    bestFor: "One high-impact AI agent",
    body:
      "Start with the fastest-payback deployment — lead response, scheduling automation, or reporting intelligence.",
    bullets: [
      "Operations audit & mapping",
      "One AI agent deployed",
      "Dedicated AI agent device included",
      "Launch support & training",
      "Basic performance reporting"
    ]
  },
  {
    title: "Professional",
    price: "$419/mo",
    originalPrice: "$599/mo",
    setup: "From $700 setup — based on business structure",
    bestFor: "Core operations automation",
    body:
      "Multiple AI agents across sales, scheduling, operations, and reporting — working together as one system.",
    bullets: [
      "Multiple AI agent deployment",
      "Operations / production monitoring",
      "Sales & follow-up automation",
      "Executive dashboard"
    ]
  },
  {
    title: "Premium",
    price: "$629/mo",
    originalPrice: "$899/mo",
    setup: "From $700 setup — based on business structure",
    bestFor: "Full operational intelligence",
    body:
      "Enterprise-grade AI agent coverage across your entire organization — from operations to sales to production.",
    bullets: [
      "Cross-functional AI agents",
      "Predictive analytics & forecasting",
      "Custom integrations",
      "Continuous optimization & support"
    ]
  }
];

export const detailedServices: ServiceDetail[] = [
  {
    title: "Operations audit & AI strategy",
    description:
      "Every engagement starts by mapping your current operations, identifying where costs leak and production stalls, and designing an AI agent deployment plan that delivers measurable ROI.",
    deliverables: [
      "Process mapping",
      "Cost leakage analysis",
      "Production bottleneck review",
      "Operations assessment",
      "Revenue opportunity scan",
      "AI deployment roadmap"
    ],
    impact:
      "You get a clear, prioritized plan showing exactly which AI agents to deploy first and the expected cost savings.",
    icon: ScanSearch
  },
  {
    title: "AI customer & sales agents",
    description:
      "We deploy AI agents that respond to leads in seconds, qualify intent, schedule follow-ups, handle quote reminders, and prevent revenue from slipping through the cracks.",
    deliverables: [
      "Instant lead response",
      "Lead qualification & routing",
      "Quote follow-up automation",
      "Appointment scheduling",
      "Churn detection",
      "Pipeline management"
    ],
    impact:
      "Faster response times, higher conversion rates, and recovered revenue that was previously lost to slow follow-up.",
    icon: Bot
  },
  {
    title: "Operations & production intelligence",
    description:
      "AI agents that monitor your operations end-to-end — predicting bottlenecks, optimizing resources, flagging issues, and maximizing production throughput.",
    deliverables: [
      "Demand forecasting",
      "Inventory optimization",
      "Supplier performance tracking",
      "Production monitoring",
      "Bottleneck detection",
      "Waste reduction analytics"
    ],
    impact:
      "Lower costs, higher production efficiency, reduced waste, and operations that adapt in real time.",
    icon: Package
  },
  {
    title: "Executive dashboards & reporting automation",
    description:
      "We centralize the metrics that matter — costs, production, sales, operations — into real-time dashboards so leadership makes decisions faster without chasing spreadsheets.",
    deliverables: [
      "Executive dashboards",
      "Automated weekly reports",
      "KPI tracking",
      "Cost analytics",
      "Production metrics",
      "Operations visibility"
    ],
    impact:
      "Clear operational visibility without manual reporting, enabling faster and better-informed decisions.",
    icon: LayoutDashboard
  },
  {
    title: "Deployment, integration & optimization",
    description:
      "OpsMira isn't a handoff-only service. We deploy AI agents into your existing stack, support your team through adoption, and continuously optimize for better results.",
    deliverables: [
      "Tool integration",
      "AI agent configuration",
      "Team training",
      "Process documentation",
      "Performance tuning",
      "Expansion planning"
    ],
    impact:
      "AI agents that actually work within your existing operations and keep improving over time.",
    icon: ShieldCheck
  }
];

export const caseStudies: CaseStudy[] = [
  {
    title: "AI lead recovery for a service business",
    subtitle: "Representative implementation scenario",
    problem:
      "Inbound leads were falling through the cracks during peak hours and after business hours, creating preventable revenue loss and slow follow-up that cost the business an estimated $8k/month.",
    implementation:
      "OpsMira deployed an AI customer agent that responds to every lead within 30 seconds, qualifies intent, schedules appointments, and sends automated follow-ups — all integrated with the existing CRM.",
    outcome:
      "The business recovered 15+ leads per month that were previously lost, reduced response time by 90%, and saw a 3.2x ROI within the first 60 days.",
    economics:
      "At an average deal value of $2,500, recovering even 4 additional deals per month covers the platform cost multiple times over.",
    takeaways: [
      "Speed of response directly protects revenue.",
      "AI agents handle volume that humans can't scale for.",
      "Integration with existing CRM prevents workflow disruption.",
      "Measurable ROI within 30-60 days."
    ],
    note:
      "Illustrative scenario based on common service business patterns."
  },
  {
    title: "Operations optimization for a distribution company",
    subtitle: "Representative implementation scenario",
    problem:
      "Inventory stockouts and overstock situations were costing the business $15k/month in lost sales and excess carrying costs. Demand forecasting relied on gut feeling and spreadsheets.",
    implementation:
      "OpsMira deployed AI operations agents that analyze historical data, predict demand patterns, optimize reorder points, and alert the team to potential stockouts 2 weeks in advance.",
    outcome:
      "Stockout incidents dropped 78%, carrying costs decreased 23%, and the purchasing team saved 20 hours per week previously spent on manual forecasting.",
    economics:
      "The combination of reduced stockouts and lower inventory costs delivered over $12k/month in savings against a $599/month platform investment.",
    takeaways: [
      "AI demand forecasting outperforms manual methods significantly.",
      "Early stockout alerts prevent cascading operational failures.",
      "Reduced carrying costs compound over time.",
      "Purchasing teams can focus on strategy instead of spreadsheets."
    ],
    note:
      "Illustrative scenario based on common distribution and wholesale patterns."
  },
  {
    title: "Production throughput optimization for manufacturing",
    subtitle: "Representative implementation scenario",
    problem:
      "Production line inefficiencies, undetected anomalies, and poor scheduling coordination were limiting output to 65% of theoretical capacity and causing quality issues.",
    implementation:
      "OpsMira deployed AI production agents that monitor equipment performance in real time, detect anomalies before they cause downtime, optimize scheduling, and provide actionable throughput recommendations.",
    outcome:
      "Production output increased 31%, unplanned downtime dropped 45%, and quality defect rates decreased by 28% — all without adding headcount.",
    economics:
      "At the company's per-unit margins, the output increase alone generated an additional $40k/month in revenue capacity.",
    takeaways: [
      "Real-time AI monitoring catches issues humans miss.",
      "Predictive maintenance prevents costly unplanned downtime.",
      "Throughput gains compound with existing fixed costs.",
      "AI scheduling optimization reduces idle time between shifts."
    ],
    note:
      "Illustrative scenario based on common manufacturing and production patterns."
  }
];

export const testimonials: TestimonialAsset[] = [];
export const proofLogos: LogoAsset[] = [];
export const workflowVisuals: WorkflowVisualAsset[] = [];

export const values = [
  "Operations-first, not tool-first",
  "Measured ROI before broader rollout",
  "AI agents with human oversight",
  "Deploy fast, optimize continuously",
  "Integrate with existing systems",
  "Focus on cost savings and profit growth"
];

export const footerLinks = [
  { label: "Book Operations Audit", href: "/contact" },
  { label: "Explore Services", href: "/services" },
  { label: "View Case Studies", href: "/case-studies" }
];

export const heroStats = [
  { label: "Cost reduction", value: "20-40%" },
  { label: "Response speed", value: "50-90% faster" },
  { label: "Typical ROI", value: "3x-10x+" }
];

export const ctaArrow = ArrowRight;

export const comparisonRows = [
  {
    label: "Lead response",
    before: "Missed calls, delayed callbacks, lost deals.",
    after: "AI agents respond in < 30 seconds, qualify, and schedule."
  },
  {
    label: "Operation",
    before: "Spreadsheet tracking, reactive decisions, missed deadlines.",
    after: "AI-powered forecasting, automated task management, real-time alerts."
  },
  {
    label: "Production",
    before: "Manual monitoring, undetected bottlenecks, wasted capacity.",
    after: "AI monitoring, predictive maintenance, throughput optimization."
  },
  {
    label: "Reporting",
    before: "Hours spent compiling data across disconnected tools.",
    after: "Real-time dashboards and automated executive summaries."
  }
];

export const aboutStandards = [
  {
    title: "Deploy AI that delivers ROI",
    body:
      "OpsMira is structured around measurable outcomes — cost reduction, output increase, and profit growth — not theoretical AI capabilities."
  },
  {
    title: "Human oversight stays in place",
    body:
      "AI agents handle the repetitive work while approvals, exceptions, and strategic decisions stay with your team."
  },
  {
    title: "Start where impact is fastest",
    body:
      "Every engagement begins with the operation most likely to reduce costs, speed up response, or increase output within 30 days."
  }
];

export const implementationPrinciples = [
  "Map current operations before proposing AI solutions.",
  "Prioritize cost savings and profit growth first.",
  "Build around real workflows, not idealized processes.",
  "Integrate AI agents with existing tools and systems.",
  "Optimize continuously based on measured performance."
];

export const intakeSteps = [
  {
    title: "Share the bottleneck",
    body:
      "Tell us where costs are leaking, production is stalling, or sales opportunities are being missed."
  },
  {
    title: "Scope the first AI agent",
    body:
      "OpsMira identifies the highest-ROI deployment and outlines exactly what gets built and the expected impact."
  },
  {
    title: "Deploy with support",
    body:
      "Your AI agent goes live with human oversight, team training, and continuous optimization from day one."
  }
];

export const intakeOutputs = [
  "The highest-impact operation to automate first",
  "What the first AI agent deployment includes",
  "Realistic ROI projections based on your data"
];

export const buyerFaqs = [
  {
    question: "What does OpsMira deploy first?",
    answer:
      "The AI agent with the fastest payback — usually lead response, operations monitoring, production optimization, or reporting automation."
  },
  {
    question: "Is this software I have to manage myself?",
    answer:
      "No. OpsMira is a done-for-you service. You get deployed AI agents, launch support, and continuous optimization — not another tool to manage."
  },
  {
    question: "Do AI agents replace my team?",
    answer:
      "No. AI agents handle repetitive, time-consuming tasks so your team can focus on higher-value work that drives growth."
  }
];

export const fitSignals = {
  bestFit: [
    "You're losing money to manual processes, slow response, or operational gaps.",
    "You want measurable cost reduction and profit growth, not vague innovation.",
    "You prefer done-for-you implementation over managing another tool.",
    "You're ready to see ROI within 30-60 days, not 6 months."
  ],
  notFit: [
    "You want fully autonomous AI with zero human oversight.",
    "Your operation doesn't have enough volume for AI to make an impact.",
    "You want a broad AI transformation before proving one use case.",
    "You're only shopping for the cheapest software subscription."
  ],
  needsFromClient: [
    "Clarity on where costs are leaking or production is stalling.",
    "Willingness to start with one high-impact AI agent.",
    "Access to the operational data or context needed for setup.",
    "A results-first mindset focused on measurable outcomes."
  ]
};

export const rolloutTimeline = [
  {
    phase: "First 30 days",
    title: "Audit & deploy",
    body:
      "Map your operations, identify the highest-ROI opportunity, and deploy your first AI agent with full support."
  },
  {
    phase: "Days 30-60",
    title: "Measure & expand",
    body:
      "Track performance, validate cost savings, and expand AI agent coverage to additional operations."
  },
  {
    phase: "Days 60-90",
    title: "Optimize & scale",
    body:
      "Tune agent performance, add predictive capabilities, and build toward full operational intelligence."
  }
];

export const contactPrompts = [
  "Where are costs leaking or production stalling?",
  "What manual processes consume the most team hours?",
  "Current tools and systems in your stack",
  "Most urgent operational bottleneck"
];

export const engagementSummary = {
  opsmiraHandles: [
    "Operations audit and AI strategy",
    "AI agent configuration and deployment",
    "Integration, launch support, and optimization"
  ],
  clientKeeps: [
    "Strategic decisions and approvals",
    "Business rules and customer relationships",
    "Control over rollout pace and scope"
  ],
  measuredOutcomes: [
    "Cost reduction and savings",
    "Production output increase",
    "Revenue recovered and profit growth"
  ]
};
