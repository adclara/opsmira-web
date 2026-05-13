import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  ChartColumn,
  ClipboardCheck,
  Factory,
  Gauge,
  HardHat,
  LayoutDashboard,
  MessageSquareMore,
  PackageCheck,
  PhoneCall,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Sparkles,
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
  roi: string;
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

export const site = {
  name: "OpsMira",
  legalName: "TEIMECA LAND LLC d/b/a OpsMira",
  legalDisclaimer:
    "OpsMira is a fictitious name / DBA owned by TEIMECA LAND LLC.",
  experienceDisclaimer:
    "Professional experience references are included for background context only. OpsMira is not affiliated with or endorsed by Amazon, Lowe's, Sam's Club, or Walmart.",
  email: "adrianarmando9@gmail.com",
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
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const homeExperienceCards: IconCard[] = [
  {
    title: "Workflow audit",
    body:
      "We map how requests, scheduling, follow-up, and reporting currently move so the highest-cost bottlenecks are obvious before anything is built.",
    icon: ScanSearch
  },
  {
    title: "Done-for-you implementation",
    body:
      "Customers buy a working operations layer: AI agents, workflow automation, dashboards, launch support, and optimization after deployment.",
    icon: Settings2
  },
  {
    title: "Measured business case",
    body:
      "Savings are framed around admin labor removed, owner time recovered, missed opportunities captured, and reporting work reduced.",
    icon: ChartColumn
  }
];

export const services: IconCard[] = [
  {
    title: "AI operations systems",
    body:
      "OpsMira implements an operational layer that combines AI agents, workflow automation, dashboards, and reporting into one delivery-first service.",
    icon: Bot
  },
  {
    title: "Customer follow-up systems",
    body:
      "Recover missed calls, send estimate reminders, route inbound requests, and keep customers moving without relying on manual follow-up alone.",
    icon: MessageSquareMore
  },
  {
    title: "Scheduling coordination",
    body:
      "Reduce office-to-field friction with calendar logic, dispatch support, appointment reminders, reschedule handling, and clearer handoffs.",
    icon: CalendarClock
  },
  {
    title: "Owner visibility dashboards",
    body:
      "Give owners and managers a cleaner view of request volume, open follow-up, scheduling load, and weekly operational performance.",
    icon: LayoutDashboard
  },
  {
    title: "Reporting automation",
    body:
      "Turn scattered updates, voice notes, and repetitive status checks into structured summaries, KPI reporting, and weekly reviews.",
    icon: BarChart3
  },
  {
    title: "Workflow mapping and SOP logic",
    body:
      "Document the process, remove repetitive admin, define exception handling, and configure the system around how the business actually operates.",
    icon: ClipboardCheck
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Audit workflow and admin drag",
    body:
      "We review customer intake, missed calls, scheduling, internal handoffs, follow-up, and reporting to see where labor and response quality are leaking."
  },
  {
    step: "02",
    title: "Quantify cost and revenue leakage",
    body:
      "We estimate admin hours, owner time, delayed response costs, missed opportunities, and reporting overhead so the project has a business case."
  },
  {
    step: "03",
    title: "Design the automation layer",
    body:
      "We configure the right mix of AI agents, workflow automation, dashboards, customer follow-up systems, and approval checkpoints."
  },
  {
    step: "04",
    title: "Deploy with human oversight",
    body:
      "The system goes live with practical guardrails, launch support, team handoff guidance, and operational control kept where it matters."
  },
  {
    step: "05",
    title: "Measure results and refine",
    body:
      "After launch, we tune response speed, reporting quality, scheduling coordination, and exception handling so the savings keep compounding."
  }
];

export const industries: IndustryCard[] = [
  {
    title: "Construction and trades",
    pain: "Leads, scheduling changes, and field updates get buried across calls and text threads.",
    outcome: "Cleaner coordination, faster follow-up, and fewer missed jobs.",
    icon: HardHat
  },
  {
    title: "Roofing and exterior teams",
    pain: "Estimate follow-up and job progress communication are inconsistent when volume spikes.",
    outcome: "More consistent customer updates and better pipeline control.",
    icon: Building2
  },
  {
    title: "Landscaping and maintenance",
    pain: "Repeat scheduling, route communication, and service updates create admin churn.",
    outcome: "Less office overhead and smoother recurring job coordination.",
    icon: Activity
  },
  {
    title: "HVAC and plumbing",
    pain: "Fast response matters, but dispatching and follow-up still depend on manual effort.",
    outcome: "Better missed-call recovery and stronger appointment flow.",
    icon: Gauge
  },
  {
    title: "Warehousing and light operations",
    pain: "Status reporting and task visibility often live across disconnected spreadsheets and messages.",
    outcome: "More reliable dashboards and less reporting cleanup.",
    icon: Factory
  },
  {
    title: "Logistics and field service",
    pain: "Office and field teams lose time chasing updates, ETAs, and handoff clarity.",
    outcome: "Improved scheduling coordination and clearer operational control.",
    icon: Truck
  },
  {
    title: "Multi-person service teams",
    pain: "Owners become the manual routing layer for follow-up, exceptions, and customer updates.",
    outcome: "Owner time recovery and stronger process consistency.",
    icon: BriefcaseBusiness
  },
  {
    title: "Operational SMBs",
    pain: "Growth creates more requests, more admin, and less visibility into what is slipping.",
    outcome: "A done-for-you AI operations layer that scales with demand.",
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
      "Best for businesses that want to start with the fastest payback workflow such as missed-call recovery, reminders, or reporting automation.",
    bullets: [
      "Workflow audit and mapping",
      "One automation lane configured",
      "Launch support",
      "Basic reporting"
    ],
    roi: "Often justified by 12 to 20 admin hours saved or one recovered job."
  },
  {
    title: "Professional",
    price: "$599/mo",
    setup: "From $1,500 setup",
    bestFor: "Core customer and scheduling operations",
    body:
      "Best for teams ready to connect customer follow-up, scheduling coordination, reporting automation, and owner visibility into one managed system.",
    bullets: [
      "Multiple workflow automations",
      "Customer follow-up system",
      "Scheduling coordination logic",
      "Owner dashboard"
    ],
    roi: "Often justified by admin labor savings plus faster response and cleaner follow-up."
  },
  {
    title: "Premium",
    price: "$899/mo",
    setup: "From $2,500 setup",
    bestFor: "Broader operational orchestration",
    body:
      "Best for operators who want a wider AI operations layer across communication, dashboards, reporting, dispatch support, and ongoing optimization.",
    bullets: [
      "Cross-workflow implementation",
      "Reporting and dashboard suite",
      "Deeper configuration support",
      "Optimization after deployment"
    ],
    roi: "Designed for teams where recovered owner time and missed opportunity capture matter materially."
  },
  {
    title: "Enterprise",
    price: "Custom",
    setup: "Custom scope",
    bestFor: "Complex multi-team environments",
    body:
      "Best for multi-location teams, higher workflow volume, custom integrations, or more advanced operational reporting and orchestration needs.",
    bullets: [
      "Custom workflow architecture",
      "Multi-team visibility",
      "Advanced reporting logic",
      "Integration planning"
    ],
    roi: "Scoped around process complexity, workflow volume, and strategic implementation depth."
  }
];

export const packagePaybackExamples = [
  {
    title: "Starter payback",
    body:
      "Often covered by roughly 12 to 20 admin hours removed monthly, or one recovered lead or job that would have otherwise gone cold."
  },
  {
    title: "Professional payback",
    body:
      "Usually justified when customer follow-up, scheduling coordination, and owner visibility are all creating labor cost or delayed response."
  },
  {
    title: "Premium payback",
    body:
      "Best for teams where owner time, reporting burden, and coordination complexity are large enough that a broader workflow layer creates compounding savings."
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

export const heroSignals = [
  "Missed-call recovery",
  "Customer follow-up systems",
  "Scheduling coordination",
  "Owner visibility dashboards",
  "Reporting automation"
];

export const platformModules: IconCard[] = [
  {
    title: "AI agents",
    body: "Handle repetitive coordination and communication steps.",
    icon: Bot
  },
  {
    title: "Workflow automation",
    body: "Move requests, reminders, and updates through cleaner paths.",
    icon: Settings2
  },
  {
    title: "Owner dashboards",
    body: "Give leadership a clearer view without extra reporting burden.",
    icon: LayoutDashboard
  },
  {
    title: "Reporting automation",
    body: "Turn scattered updates into structured operational summaries.",
    icon: ChartColumn
  }
];

export const savingsExamples = [
  {
    title: "Administrative labor saved",
    value: "$625/mo",
    body: "Example: 25 hours removed monthly at $25 per hour."
  },
  {
    title: "Owner time recovered",
    value: "$750/mo",
    body: "Example: 15 owner hours recovered monthly at $50 per hour."
  },
  {
    title: "Missed opportunities recovered",
    value: "$2k-$10k+",
    body: "Example: one additional project recovered monthly depending on ticket size."
  }
];

export const ctaArrow = ArrowRight;

export const comparisonRows = [
  {
    label: "Inbound requests",
    before: "Missed calls, delayed callbacks, and manual lead triage.",
    after: "Missed-call recovery, faster routing, and cleaner follow-up."
  },
  {
    label: "Scheduling",
    before: "Office staff or owners manually chase confirmations and changes.",
    after: "Reminder logic, reschedule handling, and clearer field coordination."
  },
  {
    label: "Reporting",
    before: "Updates are scattered across texts, calls, and spreadsheets.",
    after: "Owner dashboards and automated weekly operational summaries."
  },
  {
    label: "Owner involvement",
    before: "The owner becomes the fallback system for every exception.",
    after: "Better operational control without carrying every handoff manually."
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
      "Automation is configured to reduce repetitive work while approvals, exceptions, and judgment stay with the business."
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
      "OpsMira identifies the highest-payback operational lane to improve first and outlines the implementation path."
  },
  {
    title: "Launch with support",
    body:
      "After setup, the workflow is deployed with human oversight, practical handoff support, and refinement after launch."
  }
];

export const intakeOutputs = [
  "The highest-value workflow to improve first",
  "Where labor hours or owner time are leaking",
  "Which opportunities are getting missed or delayed",
  "What the first deployment should include",
  "What ROI assumptions are realistic to measure"
];

export const deliveryFacts = [
  {
    label: "Typical first focus",
    value: "One workflow with clear payback"
  },
  {
    label: "Oversight model",
    value: "Automation with human control"
  },
  {
    label: "Best-fit team size",
    value: "SMBs with real coordination load"
  },
  {
    label: "After launch",
    value: "Optimization and refinement support"
  }
];

export const buyerFaqs = [
  {
    question: "What does OpsMira actually implement first?",
    answer:
      "Usually the first deployment is the workflow with the clearest payback, such as missed-call recovery, customer follow-up, scheduling coordination, or reporting automation."
  },
  {
    question: "Is this software I have to manage myself?",
    answer:
      "No. OpsMira is positioned as a done-for-you implementation service. Customers are buying configured workflows, launch support, and refinement after deployment, not just access to another tool."
  },
  {
    question: "Do I lose human control over customer communication or approvals?",
    answer:
      "No. The model is automation with human oversight. Repetitive work gets reduced, while approvals, exceptions, and judgment stay with the business where needed."
  },
  {
    question: "How do I know the project is worth the cost?",
    answer:
      "The business case is framed around labor saved, owner time recovered, missed opportunities captured, response speed improved, and reporting burden reduced before the rollout gets broader."
  },
  {
    question: "What kinds of businesses fit best?",
    answer:
      "OpsMira fits SMBs with meaningful operational movement: inbound demand, schedule changes, team coordination, follow-up needs, and reporting work that currently create admin drag."
  },
  {
    question: "What happens after launch?",
    answer:
      "OpsMira supports the rollout after deployment by tuning workflow logic, refining reporting, and adjusting the system around how the business actually uses it."
  }
];

export const fitSignals = {
  bestFit: [
    "You are losing time to follow-up, scheduling, reporting, or internal coordination.",
    "You have enough workflow volume that small delays turn into real labor cost or missed revenue.",
    "You want a done-for-you implementation instead of another tool to manage yourself.",
    "You care about measurable payback, not vague innovation language."
  ],
  notFit: [
    "You are looking for a fully autonomous system with no human oversight.",
    "You do not yet have enough workflow volume for coordination issues to matter financially.",
    "You want a broad digital transformation project before proving one workflow's ROI.",
    "You are shopping only for the cheapest software subscription rather than implementation support."
  ],
  needsFromClient: [
    "A clear view of where the current bottleneck is showing up.",
    "Willingness to start with one high-payback workflow instead of everything at once.",
    "Access to the people or process context needed to map the workflow properly.",
    "A practical rollout mindset focused on measurable operational gains."
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
      "Set up the automation layer, test the operational flow, launch with oversight, and support the team through early usage."
  },
  {
    phase: "Days 60-90",
    title: "Measure and refine",
    body:
      "Review what changed, tune the workflow logic, improve reporting, and decide whether the next lane is worth expanding into."
  }
];

export const engagementPoints = [
  "Start with one workflow that has clear economic upside.",
  "Keep human approvals and exception handling where the business needs them.",
  "Measure the first lane before broadening the rollout.",
  "Use optimization after deployment to improve adoption and savings."
];

export const contactPrompts = [
  "Approximate monthly request or job volume",
  "Where missed follow-up or admin drag shows up most",
  "Current tools, calendars, or communication channels involved",
  "Which owner or manager pain point feels most urgent"
];

export const engagementSummary = {
  opsmiraHandles: [
    "Workflow mapping and bottleneck diagnosis",
    "System configuration and automation setup",
    "Launch support and early rollout tuning",
    "Dashboard and reporting structure",
    "Optimization after deployment"
  ],
  clientKeeps: [
    "Approvals, exceptions, and judgment calls",
    "Customer-facing tone and business rules",
    "Final control over rollout pace",
    "Visibility into what is being automated",
    "Ownership of the operating process"
  ],
  measuredOutcomes: [
    "Admin hours removed",
    "Owner or manager time recovered",
    "Customer response speed",
    "Missed opportunities recovered",
    "Reporting or coordination burden reduced"
  ]
};
