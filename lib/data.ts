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
  PhoneCall,
  ScanSearch,
  Settings2,
  ShieldCheck,
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
  location: "Serving SMB operators in Florida and across the United States.",
  valueProp:
    "Done-for-you AI operations systems for SMBs that need lower admin cost, faster response times, and better owner visibility.",
  trustLine:
    "Workflow mapping, system configuration, launch support, and optimization after deployment.",
  founderSummary:
    "OpsMira translates enterprise-style operations discipline into practical SMB implementations focused on cost savings, cleaner coordination, and measurable workflow improvement."
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Savings Calculator", href: "/#savings-calculator" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const services: IconCard[] = [
  {
    title: "AI operations systems",
    body:
      "AI agents, workflow automation, dashboards, and reporting in one delivery-first service.",
    icon: Bot
  },
  {
    title: "Customer follow-up",
    body:
      "Recover missed calls, send reminders, route requests, and keep customers moving.",
    icon: MessageSquareMore
  },
  {
    title: "Scheduling coordination",
    body:
      "Calendar logic, dispatch support, appointment reminders, and cleaner handoffs.",
    icon: CalendarClock
  },
  {
    title: "Owner dashboards",
    body:
      "Cleaner view of request volume, follow-up, scheduling load, and performance.",
    icon: LayoutDashboard
  },
  {
    title: "Reporting automation",
    body:
      "Turn scattered updates into structured summaries and weekly reviews.",
    icon: BarChart3
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Audit",
    body:
      "We map your workflows, identify where admin hours and revenue are leaking, and define the highest-payback deployment target."
  },
  {
    step: "02",
    title: "Build & deploy",
    body:
      "We configure the automation layer, launch with human oversight, and support your team through early adoption."
  },
  {
    step: "03",
    title: "Measure & refine",
    body:
      "We track results, tune workflow logic, and optimize the system so savings keep compounding."
  }
];

export const industries: IndustryCard[] = [
  {
    title: "Construction and trades",
    pain: "Leads and field updates get buried across calls and texts.",
    outcome: "Cleaner coordination and fewer missed jobs.",
    icon: HardHat
  },
  {
    title: "Roofing and exterior teams",
    pain: "Estimate follow-up breaks down when volume spikes.",
    outcome: "More consistent customer updates and pipeline control.",
    icon: Building2
  },
  {
    title: "HVAC and plumbing",
    pain: "Dispatching and follow-up still depend on manual effort.",
    outcome: "Better missed-call recovery and appointment flow.",
    icon: Gauge
  },
  {
    title: "Landscaping and maintenance",
    pain: "Repeat scheduling and service updates create admin churn.",
    outcome: "Less office overhead and smoother job coordination.",
    icon: Factory
  },
  {
    title: "Logistics and field service",
    pain: "Office and field teams lose time chasing updates and ETAs.",
    outcome: "Improved scheduling and clearer operational control.",
    icon: Truck
  },
  {
    title: "Multi-person service teams",
    pain: "Owners become the manual routing layer for everything.",
    outcome: "Owner time recovery and stronger process consistency.",
    icon: BriefcaseBusiness
  },
  {
    title: "Warehousing and operations",
    pain: "Status reporting lives across disconnected spreadsheets.",
    outcome: "More reliable dashboards and less reporting cleanup.",
    icon: Warehouse
  }
];

export const packages: PackageCard[] = [
  {
    title: "Starter",
    price: "$299/mo",
    setup: "From $750 setup",
    bestFor: "One high-friction workflow",
    body:
      "Start with the fastest payback workflow — missed-call recovery, reminders, or reporting.",
    bullets: [
      "Workflow audit and mapping",
      "One automation lane configured",
      "Launch support",
      "Basic reporting"
    ]
  },
  {
    title: "Professional",
    price: "$599/mo",
    setup: "From $1,500 setup",
    bestFor: "Core customer and scheduling operations",
    body:
      "Connect follow-up, scheduling, reporting, and owner visibility into one managed system.",
    bullets: [
      "Multiple workflow automations",
      "Customer follow-up system",
      "Scheduling coordination",
      "Owner dashboard"
    ]
  },
  {
    title: "Premium",
    price: "$899/mo",
    setup: "From $2,500 setup",
    bestFor: "Broader operational orchestration",
    body:
      "A wider AI operations layer across communication, dashboards, reporting, and dispatch.",
    bullets: [
      "Cross-workflow implementation",
      "Reporting and dashboard suite",
      "Deeper configuration support",
      "Optimization after deployment"
    ]
  }
];

export const detailedServices: ServiceDetail[] = [
  {
    title: "Workflow audit and implementation plan",
    description:
      "Every engagement starts by mapping the current process, identifying where admin labor and revenue leakage are showing up, and turning that into a practical deployment roadmap.",
    deliverables: [
      "Workflow mapping",
      "Admin drag review",
      "Missed opportunity analysis",
      "Response speed review",
      "Owner visibility gap review",
      "Priority workflow roadmap"
    ],
    impact:
      "This gives the business a clear first implementation target instead of a vague automation wish list.",
    icon: ScanSearch
  },
  {
    title: "AI agents and customer follow-up systems",
    description:
      "We configure AI-supported communication flows that keep inbound demand moving, reduce manual follow-up, and improve response consistency without removing human judgment.",
    deliverables: [
      "Missed-call recovery",
      "Lead triage",
      "Estimate reminders",
      "Appointment confirmations",
      "Customer update sequences",
      "Exception routing"
    ],
    impact:
      "This reduces missed opportunities and keeps customer communication from depending entirely on owner attention.",
    icon: Bot
  },
  {
    title: "Scheduling coordination and dispatch support",
    description:
      "We reduce the back-and-forth between office, owner, and field teams by configuring scheduling workflows around reminders, routing logic, and status updates.",
    deliverables: [
      "Calendar coordination",
      "Reschedule handling",
      "Dispatch support",
      "ETA messaging",
      "Team notification logic",
      "Daily scheduling visibility"
    ],
    impact:
      "This removes repetitive coordination work and improves schedule reliability as job volume grows.",
    icon: PhoneCall
  },
  {
    title: "Owner visibility dashboards and reporting automation",
    description:
      "We centralize the numbers and updates owners actually need so they spend less time chasing status and more time managing priorities.",
    deliverables: [
      "Owner dashboards",
      "Weekly summaries",
      "KPI reporting",
      "Open follow-up views",
      "Task status boards",
      "Operations recap automation"
    ],
    impact:
      "This reduces manual reporting cleanup and gives leadership clearer operational control.",
    icon: LayoutDashboard
  },
  {
    title: "System configuration, launch support, and refinement",
    description:
      "OpsMira is not a handoff-only engagement. We support launch, adjust workflow logic, document the process, and refine the implementation after deployment.",
    deliverables: [
      "System configuration",
      "Launch support",
      "Workflow documentation",
      "SOP support",
      "Optimization reviews",
      "Performance tuning"
    ],
    impact:
      "This helps the automation layer stay usable, controlled, and aligned with how the business actually runs.",
    icon: ShieldCheck
  }
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Missed-call recovery for a service business",
    subtitle: "Representative implementation scenario",
    problem:
      "Inbound calls and web requests were arriving during active jobs, after hours, or when the office was busy, which created preventable lead loss and delayed follow-up.",
    implementation:
      "OpsMira would map the intake flow, configure missed-call recovery and follow-up automation, route urgent requests, and give the owner a simple dashboard for open opportunities.",
    outcome:
      "The business gains faster first response, more consistent follow-up, and less dependence on someone manually checking every missed request.",
    economics:
      "Recovering even one additional mid-ticket project per month can outweigh the platform cost several times over.",
    takeaways: [
      "Fast response protects revenue.",
      "Missed-call recovery is often one of the quickest-payback workflows.",
      "Owners should not be the only fallback for inbound demand.",
      "Visibility matters as much as automation."
    ],
    note:
      "Illustrative scenario based on common SMB service workflow patterns."
  },
  {
    title: "Scheduling coordination for a field team",
    subtitle: "Representative implementation scenario",
    problem:
      "Schedule changes, customer reminders, team updates, and ETA communication were spread across calls, texts, and manual check-ins, creating avoidable admin drag.",
    implementation:
      "OpsMira would configure scheduling coordination workflows, reminder logic, update prompts, and exception handling so the office and field team work from a cleaner operating rhythm.",
    outcome:
      "The team spends less time chasing confirmations, owners get fewer interruption calls, and customers receive more consistent communication.",
    economics:
      "The value usually shows up as admin hours recovered, owner time recovered, and fewer preventable scheduling breakdowns.",
    takeaways: [
      "Coordination issues quietly compound labor cost.",
      "Simple reminder and routing systems often remove daily friction quickly.",
      "Field teams benefit when office communication becomes more structured.",
      "Owners recover time when handoffs are clearer."
    ],
    note:
      "Illustrative scenario based on common multi-person service operations."
  },
  {
    title: "Owner reporting automation for a growing operator",
    subtitle: "Representative implementation scenario",
    problem:
      "Weekly reporting depended on manual spreadsheet cleanup, message reviews, and status chasing, which delayed decisions and consumed management time.",
    implementation:
      "OpsMira would configure dashboards, summary logic, recurring reporting automation, and operational review views around the metrics the owner actually uses.",
    outcome:
      "Leadership gets clearer operational visibility with less reporting cleanup and a better view of where the business is slipping or improving.",
    economics:
      "Reducing 8 to 20 hours of owner and admin reporting work monthly can create immediate payback before broader automation benefits are counted.",
    takeaways: [
      "Reporting should support decisions, not create more admin.",
      "Automation is strongest when it improves control as well as speed.",
      "Clear visibility helps prioritize follow-up and staffing.",
      "The owner should not have to rebuild the business picture manually every week."
    ],
    note:
      "Illustrative scenario based on common SMB reporting and dashboard needs."
  }
];

export const testimonials: TestimonialAsset[] = [];
export const proofLogos: LogoAsset[] = [];
export const workflowVisuals: WorkflowVisualAsset[] = [];

export const values = [
  "Operations-first before tool-first",
  "Measured ROI before bigger rollout",
  "Automation with human oversight",
  "Workflow clarity before adding complexity",
  "Owner visibility without extra admin",
  "Optimization after deployment"
];

export const footerLinks = [
  { label: "Book Workflow Audit", href: "/contact" },
  { label: "Review Services", href: "/services" },
  { label: "See Use Cases", href: "/case-studies" }
];

export const heroStats = [
  { label: "Admin time removed", value: "20-60 hrs/mo" },
  { label: "Response speed gain", value: "50-90% faster" },
  { label: "Typical ROI target", value: "3x-10x+" }
];

export const ctaArrow = ArrowRight;

export const comparisonRows = [
  {
    label: "Inbound requests",
    before: "Missed calls, delayed callbacks, manual triage.",
    after: "Missed-call recovery, faster routing, cleaner follow-up."
  },
  {
    label: "Scheduling",
    before: "Staff manually chase confirmations and changes.",
    after: "Reminder logic, reschedule handling, field coordination."
  },
  {
    label: "Reporting",
    before: "Updates scattered across texts, calls, spreadsheets.",
    after: "Owner dashboards and automated operational summaries."
  },
  {
    label: "Owner involvement",
    before: "The owner is the fallback for every exception.",
    after: "Better control without carrying every handoff manually."
  }
];

export const aboutStandards = [
  {
    title: "Delivery before theory",
    body:
      "OpsMira is structured around implemented workflows, configured systems, and launch support rather than slide-deck consulting."
  },
  {
    title: "Human oversight stays in place",
    body:
      "Automation reduces repetitive work while approvals, exceptions, and judgment stay with the business."
  },
  {
    title: "Start where payback is easiest to prove",
    body:
      "Most engagements begin with the workflow most likely to recover labor, improve response speed, or capture missed revenue quickly."
  }
];

export const implementationPrinciples = [
  "Map the current workflow before proposing tools.",
  "Prioritize cost savings and owner time recovery first.",
  "Build around real operating behavior, not idealized process charts.",
  "Keep dashboards decision-friendly and lightweight.",
  "Refine after deployment based on actual use."
];

export const intakeSteps = [
  {
    title: "Share the bottleneck",
    body:
      "Explain where admin time, missed follow-up, scheduling friction, or reporting burden is showing up."
  },
  {
    title: "Scope the first workflow",
    body:
      "OpsMira identifies the highest-payback operational lane and outlines the implementation path."
  },
  {
    title: "Launch with support",
    body:
      "The workflow is deployed with oversight, handoff support, and refinement after launch."
  }
];

export const intakeOutputs = [
  "The highest-value workflow to improve first",
  "What the first deployment should include",
  "What ROI assumptions are realistic to measure"
];

export const buyerFaqs = [
  {
    question: "What does OpsMira actually implement first?",
    answer:
      "Usually the workflow with the clearest payback — missed-call recovery, customer follow-up, scheduling coordination, or reporting automation."
  },
  {
    question: "Is this software I have to manage myself?",
    answer:
      "No. OpsMira is a done-for-you service. You get configured workflows, launch support, and refinement — not just another tool."
  },
  {
    question: "Do I lose control over customer communication?",
    answer:
      "No. Repetitive work gets automated while approvals, exceptions, and judgment stay with your team."
  }
];

export const fitSignals = {
  bestFit: [
    "You are losing time to follow-up, scheduling, reporting, or coordination.",
    "Small delays are turning into real labor cost or missed revenue.",
    "You want done-for-you implementation, not another tool to manage.",
    "You care about measurable payback, not vague innovation."
  ],
  notFit: [
    "You want a fully autonomous system with no human oversight.",
    "You do not have enough workflow volume for coordination issues to matter.",
    "You want a broad transformation before proving one workflow's ROI.",
    "You are shopping only for the cheapest software subscription."
  ],
  needsFromClient: [
    "A clear view of where the current bottleneck is.",
    "Willingness to start with one high-payback workflow.",
    "Access to the people or process context needed for mapping.",
    "A practical rollout mindset focused on measurable gains."
  ]
};

export const rolloutTimeline = [
  {
    phase: "First 30 days",
    title: "Audit and scope",
    body:
      "Map the workflow, identify where labor and response breakdowns are costing money, and define the first deployment lane."
  },
  {
    phase: "Days 30-60",
    title: "Configure and launch",
    body:
      "Set up the automation layer, test the flow, launch with oversight, and support the team through early usage."
  },
  {
    phase: "Days 60-90",
    title: "Measure and refine",
    body:
      "Review what changed, tune the workflow logic, improve reporting, and decide whether to expand."
  }
];

export const contactPrompts = [
  "Approximate monthly request or job volume",
  "Where missed follow-up or admin drag shows up most",
  "Current tools, calendars, or communication channels involved",
  "Which pain point feels most urgent"
];

export const engagementSummary = {
  opsmiraHandles: [
    "Workflow mapping and bottleneck diagnosis",
    "System configuration and automation setup",
    "Launch support and optimization after deployment"
  ],
  clientKeeps: [
    "Approvals, exceptions, and judgment calls",
    "Customer-facing tone and business rules",
    "Final control over rollout pace"
  ],
  measuredOutcomes: [
    "Admin hours removed",
    "Owner or manager time recovered",
    "Customer response speed improved"
  ]
};
