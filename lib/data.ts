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

export const site = {
  name: "OpsMira",
  legalName: "TEIMECA LAND LLC d/b/a OpsMira",
  legalDisclaimer:
    "OpsMira is a fictitious name / DBA owned by TEIMECA LAND LLC.",
  experienceDisclaimer:
    "Company names are referenced only to describe professional experience. OpsMira is not affiliated with or endorsed by Amazon, Lowe's, Sam's Club, or Walmart.",
  email: "adrianarmando9@gmail.com",
  linkedIn: "https://www.linkedin.com/in/adrian-clara-9721a9122",
  location: "Serving businesses in Florida and across the United States.",
  valueProp:
    "Private AI operational infrastructure for businesses that need faster execution and less admin chaos.",
  trustLine:
    "Built by Adrian Clara from real operations work across Amazon, Lowe's, and Sam's Club/Walmart.",
  founderSummary:
    "Adrian Clara combines supply chain discipline, workflow design, and AI automation strategy to help SMB operators reduce waste, centralize communication, and recover margin."
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const homeExperienceCards: IconCard[] = [
  {
    title: "Sam's Club Cost Reduction Work",
    body:
      "Adrian supported projects focused on minimizing roughly $500,000 in process-related costs by tightening execution, visibility, and operational discipline.",
    icon: ClipboardCheck
  },
  {
    title: "Amazon Supply Chain Opportunity",
    body:
      "Adrian developed and proposed a supply chain improvement concept aimed at minimizing up to $50 million in value leakage across workflow, validation, and process control.",
    icon: PackageCheck
  },
  {
    title: "OpsMira Operating Lens",
    body:
      "The same thinking is now applied to SMB operations: reduce repetitive admin work, speed up customer response, centralize communication, and build workflows that scale.",
    icon: Sparkles
  }
];

export const services: IconCard[] = [
  {
    title: "AI Operational Infrastructure",
    body:
      "Privately managed AI systems built to support scheduling, customer communication, follow-up, reporting, voice workflows, and daily operations.",
    icon: Bot
  },
  {
    title: "WhatsApp & Customer Coordination",
    body:
      "Automate customer follow-up, appointment reminders, estimate updates, missed call recovery, and project communication without losing human oversight.",
    icon: MessageSquareMore
  },
  {
    title: "Executive Dashboards & Reporting",
    body:
      "Centralize tasks, customer requests, field updates, weekly summaries, KPIs, and operational visibility in one decision-friendly layer.",
    icon: LayoutDashboard
  },
  {
    title: "Workflow Automation & SOP Logic",
    body:
      "Map the current process, remove repetitive admin steps, standardize the flow, and automate the work that slows owners and teams down.",
    icon: Settings2
  },
  {
    title: "Scheduling & Dispatch Support",
    body:
      "Reduce scheduling friction with AI-assisted coordination, calendar logic, reminders, and better job communication between office and field teams.",
    icon: CalendarClock
  },
  {
    title: "Operational ROI Analysis",
    body:
      "Estimate labor savings, owner time recovery, customer opportunity recovery, and realistic monthly ROI before and after implementation.",
    icon: ChartColumn
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Audit The Administrative Drag",
    body:
      "We review how customer requests, scheduling, updates, follow-ups, reporting, and approvals currently move through the business."
  },
  {
    step: "02",
    title: "Quantify Lost Time And Missed Revenue",
    body:
      "We estimate where the company is losing labor hours, owner attention, customer opportunities, and process consistency."
  },
  {
    step: "03",
    title: "Design The Managed AI Workflow Layer",
    body:
      "We build a private operational system using AI agents, dashboards, automation logic, reporting routines, and communication workflows."
  },
  {
    step: "04",
    title: "Deploy With Human Control",
    body:
      "Automations support the team, approvals stay where needed, and the business gets cleaner workflows without losing operational judgment."
  },
  {
    step: "05",
    title: "Measure, Refine, And Expand",
    body:
      "We keep optimizing response speed, admin workload, reporting accuracy, and operational visibility as the business grows."
  }
];

export const industries = [
  { title: "Construction", icon: HardHat },
  { title: "Roofing", icon: Building2 },
  { title: "Landscaping", icon: Activity },
  { title: "HVAC", icon: Gauge },
  { title: "Plumbing", icon: Factory },
  { title: "Logistics", icon: Truck },
  { title: "Field Service Teams", icon: BriefcaseBusiness },
  { title: "Operational SMBs", icon: Warehouse }
];

export const packages = [
  {
    title: "Starter",
    price: "$299/mo",
    body:
      "For businesses starting with one high-friction workflow such as missed request follow-up, reminders, simple reporting, or communication triage."
  },
  {
    title: "Professional",
    price: "$599/mo",
    body:
      "For teams ready to centralize customer communication, scheduling, AI summaries, dashboards, and recurring administrative workflows."
  },
  {
    title: "Premium",
    price: "$899/mo",
    body:
      "For operators needing a broader AI-powered admin layer across reporting, dispatch, follow-up, organization, and managed optimization support."
  },
  {
    title: "Enterprise",
    price: "Custom",
    body:
      "For complex operational environments requiring deeper workflow orchestration, multi-team visibility, private infrastructure planning, or custom integrations."
  }
];

export const detailedServices = [
  {
    title: "Operational Workflow Diagnostics",
    description:
      "We identify administrative friction, delayed handoffs, missed customer requests, and process gaps that are quietly costing the business time and money.",
    bullets: [
      "Workflow mapping",
      "Administrative waste review",
      "Customer response analysis",
      "Task ownership clarity",
      "KPI visibility gaps",
      "Owner overload review",
      "Improvement roadmap"
    ],
    icon: ScanSearch
  },
  {
    title: "AI Agents & Communication Automation",
    description:
      "We build AI-supported operational workflows that handle repetitive coordination work while keeping practical guardrails around approvals and exceptions.",
    bullets: [
      "Customer follow-up",
      "Incoming request triage",
      "Appointment scheduling",
      "Estimate update reminders",
      "Voice note transcription",
      "AI summaries",
      "Weekly reports",
      "WhatsApp workflows",
      "Internal coordination prompts"
    ],
    icon: Bot
  },
  {
    title: "Dashboards & Operational Visibility",
    description:
      "We centralize your operational picture so leadership can see request flow, reporting, team workload, and missed opportunities without digging through disconnected tools.",
    bullets: [
      "Executive dashboards",
      "KPI scorecards",
      "Pipeline of incoming requests",
      "Field reporting views",
      "Summary reports",
      "Task dashboards",
      "Operations health scoring"
    ],
    icon: BarChart3
  },
  {
    title: "Scheduling & Field Coordination",
    description:
      "We reduce friction between office, owner, and field teams with better reminders, routing logic, communication timing, and centralized scheduling support.",
    bullets: [
      "Calendar coordination",
      "Reminder systems",
      "Dispatch support",
      "Job coordination updates",
      "Customer ETA messaging",
      "Reschedule handling",
      "Daily team visibility"
    ],
    icon: PhoneCall
  },
  {
    title: "Reporting, SOPs, And Managed Improvement",
    description:
      "We turn repeatable operational knowledge into reporting logic, standard work, and manageable routines that help teams execute more consistently.",
    bullets: [
      "SOP creation",
      "AI-generated reporting",
      "Executive recaps",
      "Operational scorecards",
      "Workflow documentation",
      "Training guides",
      "Ongoing optimization support"
    ],
    icon: ShieldCheck
  }
];

export const caseStudies = [
  {
    title: "Amazon Supply Chain Improvement Opportunity",
    subtitle:
      "A process and systems concept designed to reduce large-scale value leakage.",
    body:
      "During Adrian Clara's work in Amazon operations, he developed and proposed an improvement concept aimed at minimizing as much as $50 million in supply chain cost exposure through stronger process validation, standardization, and workflow control.",
    detail:
      "The opportunity centered on identifying operational gaps where system logic and better process design could reduce preventable variation, rework, and execution losses.",
    outcome:
      "This work reflects Adrian's ability to think at enterprise scale while diagnosing workflow breakdowns that start at the process level.",
    note:
      "This example is presented as professional experience and improvement thinking, not as a public claim of an adopted Amazon-wide deployment.",
    takeaways: [
      "Large savings often begin with small process failures repeated at scale.",
      "Validation logic matters when consistency and throughput are critical.",
      "Operational design should reduce rework before it reaches customers.",
      "The same discipline can be translated into SMB automation strategy."
    ]
  },
  {
    title: "Sam's Club Process Cost Reduction Work",
    subtitle:
      "Operational improvement work tied to meaningful process cost reduction.",
    body:
      "At Sam's Club/Walmart, Adrian worked in quality assurance and inventory environments while contributing to projects focused on minimizing approximately $500,000 in process-related costs through tighter execution and operational visibility.",
    takeaways: [
      "Operational savings come from disciplined follow-through, not hype.",
      "Inventory flow, slotting, and quality routines can materially affect cost.",
      "Small execution failures accumulate into large process waste.",
      "Clear visibility improves both accountability and decision-making."
    ]
  },
  {
    title: "OpsMira For SMB Operations",
    subtitle:
      "Translating enterprise operational thinking into managed AI infrastructure.",
    body:
      "OpsMira applies that same mindset to SMB businesses that lose money through slow response, repetitive admin work, disconnected communication, and weak operational organization.",
    takeaways: [
      "20-60 admin hours can often be recovered monthly.",
      "Response times can often improve by 50-90%.",
      "Manual reporting can often be reduced by 40-80%.",
      "Recovering one missed project can outweigh platform cost several times over."
    ]
  }
];

export const values = [
  "Operations-first before software-first",
  "Financially grounded ROI assumptions",
  "Automation with human oversight",
  "Private managed infrastructure",
  "Clear dashboards and executive visibility",
  "Practical systems that teams can actually use"
];

export const contactFields = [
  "Name",
  "Company",
  "Email",
  "Phone",
  "Industry",
  "What administrative or operational problem is slowing you down?",
  "Preferred contact method"
];

export const footerLinks = [
  { label: "Schedule Call", href: "/contact" },
  { label: "Explore Services", href: "/services" },
  { label: "View Case Studies", href: "/case-studies" }
];

export const heroStats = [
  { label: "Admin Hours Recovered", value: "20-60/mo" },
  { label: "Faster Response Times", value: "50-90%" },
  { label: "Typical ROI Range", value: "3x-10x+" }
];

export const heroSignals = [
  "Missed call recovery",
  "AI summaries for owners",
  "Scheduling automation",
  "Operational reporting",
  "Customer follow-up flows"
];

export const platformModules: IconCard[] = [
  {
    title: "AI agents",
    body: "Support repetitive coordination and administrative tasks.",
    icon: Bot
  },
  {
    title: "Voice-to-text workflows",
    body: "Turn field notes and voice messages into usable updates.",
    icon: MessageSquareMore
  },
  {
    title: "Operational dashboards",
    body: "Make owner and manager visibility easier to maintain.",
    icon: LayoutDashboard
  },
  {
    title: "Automated reporting",
    body: "Reduce manual reporting overhead with structured summaries.",
    icon: ChartColumn
  }
];

export const savingsExamples = [
  {
    title: "Administrative labor",
    value: "$625/mo",
    body: "25 hours saved monthly at $25 per hour."
  },
  {
    title: "Owner time recovery",
    value: "$750/mo",
    body: "15 hours recovered monthly at $50 per hour."
  },
  {
    title: "Recovered customer work",
    value: "$2k-$10k+",
    body: "One additional project recovered monthly depending on industry."
  }
];

export const ctaArrow = ArrowRight;
