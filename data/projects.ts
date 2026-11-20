export const projects = [
  {
    id: 1,
    title: "Microsoft Partner Center Governance Framework",
    category: "Partner Governance",
    featured: true,
    year: "2025 - Present",
    status: "Production",
    image: "/projects/partner-center.png",
    description:
      "Governance framework for Microsoft Partner Center operations across a 400+ customer-tenant, multi-geo CSP ecosystem — covering access management, compliance reviews, role governance, and operational reporting.",
    challenge:
      "Partner Center access, roles, and compliance were managed inconsistently across multiple geographies, partner teams, and customer tenants, creating security risk and operational blind spots.",
    solution:
      "Designed standardized governance processes and operating procedures, introduced least-privilege role models and recurring access reviews, and built reporting to give leadership and partner teams clear visibility into Partner Center administration.",
    impact: [
      "Standardized governance across 400+ customer tenants",
      "Stabilized Partner Center operations and access control",
      "Consistent, audit-ready compliance reporting",
      "Reduced manual administrative effort",
    ],
    technologies: ["Microsoft Partner Center", "Microsoft Entra ID", "Microsoft Graph", "PowerShell", "Power BI"],
    github: "",
    demo: "",
  },
  {
    id: 2,
    title: "CSP Customer Migration Tracker",
    category: "Microsoft CSP",
    featured: true,
    year: "2026",
    status: "Production",
    image: "/projects/csp-migration.png",
    description:
      "End-to-end tracking platform for Direct CSP to Indirect CSP migrations — covering customer onboarding, license transfers, approvals, and distributor onboarding.",
    challenge:
      "Moving customers from Direct to Indirect CSP involved many parties — customers, distributors, licensing teams, and Microsoft — and tracking transfers, approvals, and onboarding manually created delays and continuity risk.",
    solution:
      "Built a structured migration tracker with defined stages, ownership, and automated status reporting, plus dashboards that give partners and leadership a single view of every migration.",
    impact: [
      "Single source of truth for migration status",
      "Reduced manual tracking and follow-ups",
      "Protected customer service continuity during transfers",
      "Clear visibility for partners and leadership",
    ],
    technologies: ["Microsoft Partner Center", "Microsoft CSP", "Microsoft 365", "Excel", "Power BI"],
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "CSP Service Workflow Automation",
    category: "Automation",
    featured: true,
    year: "2025 - 2026",
    status: "Production",
    image: "/projects/jsm-automation.png",
    description:
      "Jira Service Management workflows that replaced manual handling of CSP billing, provisioning, and licensing requests with automated routing, categorization, and escalation.",
    challenge:
      "Recurring CSP issues — renewals, suspensions, credit holds, and provisioning errors — were handled manually, leading to repeated incidents, partner escalations, and missed SLAs.",
    solution:
      "Designed structured service workflows with automated ticket routing, categorization, and escalation paths, and positioned operations as the escalation bridge between partners, licensing teams, and Microsoft support.",
    impact: [
      "75% reduction in recurring operational incidents",
      "Improved SLA adherence and turnaround",
      "Fewer partner escalations and billing disputes",
      "Scalable support for a growing tenant base",
    ],
    technologies: ["Jira Service Management", "Microsoft Partner Center", "C3", "Ingram Xvantage", "Crayon"],
    github: "",
    demo: "",
  },
  {
    id: 4,
    title: "Microsoft Incentive Dashboard",
    category: "Power BI",
    featured: true,
    year: "2026",
    status: "Production",
    image: "/projects/incentives.png",
    description:
      "Executive dashboard for Microsoft Commerce Incentives — tracking earnings, claims, payments, and partner program KPIs.",
    challenge:
      "Finance, alliance, and leadership teams lacked a consolidated view of Microsoft incentive earnings and claims, making partner program performance hard to track.",
    solution:
      "Designed executive dashboards and KPI reporting in Power BI on top of Partner Center incentive data, linking incentive performance to partner program goals.",
    impact: [
      "Consolidated incentive visibility for leadership",
      "Faster, data-driven partner program decisions",
      "Reduced manual incentive reporting",
    ],
    technologies: ["Power BI", "Microsoft Partner Center", "Excel"],
    github: "",
    demo: "",
  },
  {
    id: 5,
    title: "Technical Partner Enablement Program",
    category: "Partner Enablement",
    featured: false,
    year: "2026 - Present",
    status: "In Progress",
    image: "/projects/partner-enablement.png",
    description:
      "Enablement program for distributors, resellers, and internal teams across Microsoft CSP, Azure, Microsoft 365, Copilot, Partner Center, and licensing.",
    challenge:
      "Partners and sales teams needed consistent technical guidance to position Microsoft solutions, handle licensing, and run CSP operations without repeated escalations.",
    solution:
      "Building structured enablement content, playbooks, and technical sessions that align Microsoft capabilities with partner go-to-market goals and operational readiness.",
    impact: [
      "Improved partner readiness and operational maturity",
      "Stronger technical positioning for sales teams",
      "Alignment between Microsoft capabilities and partner GTM",
    ],
    technologies: ["Microsoft CSP", "Microsoft Partner Center", "Azure", "Microsoft 365", "Microsoft 365 Copilot"],
    github: "",
    demo: "",
  },
  {
    id: 6,
    title: "Microsoft Customer Agreement (MCA) Compliance Readiness",
    category: "Compliance",
    featured: false,
    year: "2025 - 2026",
    status: "Completed",
    image: "/projects/mca-compliance.png",
    description:
      "Readiness program to drive Microsoft Customer Agreement compliance and adoption across partners and their customer tenants.",
    challenge:
      "Missing or outdated MCA attestations put renewals and provisioning at risk, leading to billing holds and service disruption.",
    solution:
      "Led a structured readiness process — identifying non-compliant tenants, guiding partners through MCA acceptance, and tracking adoption to completion.",
    impact: [
      "Improved MCA compliance across the partner base",
      "Prevented renewal and provisioning blocks",
      "Protected service continuity for enterprise customers",
    ],
    technologies: ["Microsoft Partner Center", "Microsoft CSP", "Excel"],
    github: "",
    demo: "",
  },
  {
    id: 7,
    title: "Azure Reservation Automation",
    category: "Azure FinOps",
    featured: false,
    year: "2025",
    status: "Production",
    image: "/projects/azure-ri.png",
    description:
      "Automation toolkit for Azure Reserved Instance governance, reporting, and cost optimization across CSP customer environments.",
    challenge:
      "Manual reservation management increased operational effort and limited visibility into Azure cost optimization opportunities for customers.",
    solution:
      "Automated reservation reporting, utilization tracking, governance checks, and purchasing guidance with PowerShell and Azure Cost Management.",
    impact: [
      "Better visibility into reservation utilization",
      "Reduced manual FinOps effort",
      "Data-driven purchasing recommendations",
    ],
    technologies: ["Azure", "Azure Cost Management", "PowerShell", "CloudCheckr"],
    github: "",
    demo: "",
  },
];
