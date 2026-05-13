import {
  Activity,
  ArrowRight,
  Bot,
  Boxes,
  BriefcaseBusiness,
  ChartColumn,
  ClipboardCheck,
  Factory,
  Gauge,
  HardHat,
  LayoutDashboard,
  PackageCheck,
  Route,
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
  valueProp: "See the process. Improve the flow. Automate the work.",
  trustLine:
    "Built from real-world operational experience across Amazon, Lowe's, and Sam's Club/Walmart."
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const homeExperienceCards: IconCard[] = [
  {
    title: "Amazon Operations",
    body:
      "Outbound quality, central flow operations, defect reduction, manual packing analysis, labor planning, and process standardization.",
    icon: PackageCheck
  },
  {
    title: "Lowe's Inbound Operations",
    body:
      "Inbound execution, Non-Con operations, FIFO discipline, safety communication, KPI improvement, quality control, and team supervision.",
    icon: Warehouse
  },
  {
    title: "Sam's Club / Walmart Quality Assurance",
    body:
      "Inventory analysis, pick variation review, slotting support, damage reporting, audits, food-safety segregation, and associate coaching.",
    icon: ClipboardCheck
  }
];

export const services: IconCard[] = [
  {
    title: "Supply Chain Process Optimization",
    body:
      "Analyze workflows, identify bottlenecks, reduce waste, and redesign processes to improve speed, quality, and consistency.",
    icon: Route
  },
  {
    title: "AI Agents & Workflow Automation",
    body:
      "Build AI-assisted workflows for customer communication, project updates, scheduling, reminders, email drafts, reports, and operational follow-ups.",
    icon: Bot
  },
  {
    title: "Warehouse & Operations Consulting",
    body:
      "Improve receiving, inventory flow, picking, packing, quality control, slotting, damage reduction, standard work, and productivity.",
    icon: Boxes
  },
  {
    title: "Training & Standard Work",
    body:
      "Create SOPs, training plans, accountability routines, and associate development systems to improve consistency.",
    icon: ShieldCheck
  },
  {
    title: "Systems Improvement",
    body:
      "Improve existing tools or create simple operational systems using Excel, dashboards, automation, APIs, reporting workflows, and AI-supported processes.",
    icon: Settings2
  },
  {
    title: "Data-Driven Decision Support",
    body:
      "Turn operational data into clear insights, leadership dashboards, action plans, and measurable improvement priorities.",
    icon: ChartColumn
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body:
      "We review your current operation, pain points, systems, communication flow, and business goals."
  },
  {
    step: "02",
    title: "Diagnose",
    body:
      "We identify bottlenecks, manual waste, cost drivers, training gaps, and automation opportunities."
  },
  {
    step: "03",
    title: "Design",
    body:
      "We create a practical improvement plan with workflows, SOPs, automation logic, reporting needs, and implementation priorities."
  },
  {
    step: "04",
    title: "Implement",
    body:
      "We build or adapt systems, configure AI tools, train the team, and support rollout."
  },
  {
    step: "05",
    title: "Improve",
    body:
      "We monitor results, refine workflows, and continue improving the process over time."
  }
];

export const industries = [
  { title: "Construction & Contractors", icon: HardHat },
  { title: "Warehousing & Distribution", icon: Warehouse },
  { title: "Retail Operations", icon: BriefcaseBusiness },
  { title: "Logistics & Transportation", icon: Truck },
  { title: "Service Businesses", icon: Activity },
  { title: "Small and Mid-Sized Companies", icon: Factory },
  { title: "Field Service Teams", icon: Gauge },
  { title: "Project-Based Operations", icon: LayoutDashboard }
];

export const packages = [
  {
    title: "Process Assessment",
    price: "Starting at $500+",
    body:
      "Includes workflow review, pain point analysis, bottleneck identification, process mapping, and improvement recommendations."
  },
  {
    title: "AI Automation Setup",
    price: "Starting at $3,500+",
    body:
      "Includes AI agent configuration, workflow design, integrations, reporting setup, documentation, and basic team training."
  },
  {
    title: "Monthly Optimization Support",
    price: "Starting at $550/month",
    body:
      "Includes support, monitoring, adjustments, reports, workflow refinement, and continued optimization."
  },
  {
    title: "Custom Operations Improvement Project",
    price: "Custom pricing",
    body:
      "For companies needing deeper supply chain, warehouse, training, system, or workflow transformation."
  }
];

export const detailedServices = [
  {
    title: "Supply Chain & Process Optimization",
    description:
      "We study the current state of your operation and identify waste, bottlenecks, duplicated work, waiting time, poor handoffs, quality issues, and missed productivity opportunities.",
    bullets: [
      "Process mapping",
      "Bottleneck analysis",
      "KPI review",
      "Waste identification",
      "Workflow redesign",
      "Improvement roadmap",
      "Productivity opportunity review"
    ],
    icon: ScanSearch
  },
  {
    title: "AI Agents & Workflow Automation",
    description:
      "We design AI-supported workflows that help automate repetitive administrative and operational tasks while keeping human approval where needed.",
    bullets: [
      "Customer follow-ups",
      "Lead qualification",
      "Appointment scheduling",
      "Daily reports",
      "Weekly reports",
      "Project updates",
      "Email draft support",
      "WhatsApp or messaging workflows",
      "Voice note transcription",
      "Task reminders",
      "Operational alerts"
    ],
    icon: Bot
  },
  {
    title: "Warehouse & Inventory Operations",
    description:
      "We help businesses improve receiving, inventory flow, item location logic, picking paths, packing flow, quality checks, damage reduction, and layout efficiency.",
    bullets: [
      "Receiving flow",
      "Inventory accuracy",
      "Slotting logic",
      "Picking efficiency",
      "Packing quality",
      "Damage reporting",
      "Audit routines",
      "Layout and travel path analysis"
    ],
    icon: Warehouse
  },
  {
    title: "Training & SOP Development",
    description:
      "We create practical training systems and standard work documents to help teams execute consistently.",
    bullets: [
      "SOP creation",
      "Training guides",
      "New associate onboarding flows",
      "Quality checklists",
      "Accountability routines",
      "Coaching templates",
      "Performance follow-up systems"
    ],
    icon: ClipboardCheck
  },
  {
    title: "Reporting & Business Systems",
    description:
      "We improve or build simple systems for reporting, tracking, dashboards, Excel-based workflows, operational scorecards, and leadership visibility.",
    bullets: [
      "Excel-based trackers",
      "Dashboard concepts",
      "KPI reports",
      "Operational scorecards",
      "Project tracking sheets",
      "Automated reminders",
      "Reporting workflows"
    ],
    icon: ChartColumn
  }
];

export const caseStudies = [
  {
    title: "Amazon Manual Packing Improvement Study",
    subtitle: "Reducing manual packing errors through system-driven validation.",
    body:
      "During Adrian Clara's role as a Process Assistant in Amazon outbound packing operations, he supported quality improvement efforts focused on Defects Per Million Opportunities (DPMO), including unscannables, conveyor-related issues, damaged items, overage items, and missing items.",
    detail:
      "The study identified a critical gap between manual packing and automated packing. Automated packing used system-driven validation that significantly reduced unscannable defects, while manual packing relied more heavily on human scanning and manual resolution steps.",
    outcome:
      "The proposed strategy explored adapting automated validation logic into manual packing workflows to reduce operator-dependent variation, improve process control, reduce rework, and increase throughput.",
    note:
      "This was a conceptual improvement initiative and should not be presented as a fully implemented Amazon system. It is included as an example of analytical thinking, process diagnosis, automation opportunity identification, and operational problem solving.",
    takeaways: [
      "Manual processes often create hidden operational waste.",
      "System-driven validation can reduce human-dependent variation.",
      "Process standardization improves quality and consistency.",
      "Automation should support the process, not replace process understanding."
    ]
  },
  {
    title: "Lowe's Inbound / Non-Con Operations",
    subtitle: "Improving inbound execution, FIFO discipline, and KPI performance.",
    body:
      "At Lowe's, Adrian supervised inbound and non-con operations, supported safety execution, communicated daily priorities, implemented FIFO picking logic, and worked on projects designed to improve KPI performance, security, quality control, and labor efficiency.",
    takeaways: [
      "Clear execution routines improve operational consistency.",
      "FIFO discipline supports better inventory flow.",
      "Communication between leadership and floor teams reduces execution gaps.",
      "KPI improvement requires both process control and associate training."
    ]
  },
  {
    title: "Sam's Club / Walmart Quality Assurance & Inventory Flow",
    subtitle: "Inventory flow, quality audits, slotting support, and damage reduction.",
    body:
      "At Sam's Club/Walmart, Adrian worked in quality assurance and inventory environments, supporting inventory analysis, pick variation review, slotting improvements, food-safety segregation, damage reporting, seasonal area setup, quality audits, and associate coaching.",
    takeaways: [
      "Inventory visibility supports better decision-making.",
      "Slotting and aisle design affect travel time and productivity.",
      "Damage reporting helps identify root causes and reduce waste.",
      "Quality audits create accountability and process discipline."
    ]
  }
];

export const values = [
  "Practical improvement over buzzwords",
  "Process before technology",
  "Clear visibility before action",
  "Training and execution discipline",
  "Data-informed decisions",
  "Human-approved automation"
];

export const contactFields = [
  "Name",
  "Company",
  "Email",
  "Phone",
  "Industry",
  "What problem are you trying to solve?",
  "Preferred contact method"
];

export const footerLinks = [
  { label: "Schedule Call", href: "/contact" },
  { label: "Explore Services", href: "/services" },
  { label: "View Case Studies", href: "/case-studies" }
];

export const heroStats = [
  { label: "Workflow Visibility", value: "78%" },
  { label: "Execution Score", value: "91" },
  { label: "Waste Signals", value: "14" }
];

export const heroSignals = [
  "Process Improvement Map",
  "AI Assisted Operations",
  "Bottleneck Detection",
  "Cost Waste Signals",
  "Team Execution Score"
];

export const ctaArrow = ArrowRight;
