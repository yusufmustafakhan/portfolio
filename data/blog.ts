export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  readTime: string;
  tags: string[];
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "preventing-csp-subscription-lifecycle-failures",
    title: "Preventing Microsoft CSP Subscription Lifecycle Failures Before Customers Notice",
    excerpt:
      "Renewals, suspensions, credit holds and provisioning errors cause most CSP escalations. Here's how structured workflows make them predictable.",
    date: "2026-11-21",
    readTime: "5 min read",
    tags: ["Microsoft CSP", "Partner Center", "Operations"],
    content: [
      {
        type: "paragraph",
        text: "Most Microsoft CSP escalations don't start as big problems. They start as a missed renewal, a credit hold nobody saw, or a provisioning mismatch between Partner Center and a distributor platform. By the time a customer notices, it's already a service disruption.",
      },
      { type: "heading", text: "Where lifecycle failures usually come from" },
      {
        type: "list",
        items: [
          "Renewals and term changes that aren't tracked against customer expectations.",
          "Credit holds and billing blocks that surface only when an order fails.",
          "Provisioning mismatches between Partner Center and platforms like C3, Ingram Xvantage or Crayon.",
          "Access and tenant-mapping issues that slow down troubleshooting.",
        ],
      },
      { type: "heading", text: "Turning manual handling into structured workflows" },
      {
        type: "paragraph",
        text: "The biggest improvement comes from treating lifecycle events as workflows, not one-off tickets. In Jira Service Management, that means clear request categories, automated routing to the right team, and defined escalation paths to licensing teams and Microsoft support.",
      },
      {
        type: "paragraph",
        text: "In my experience across a 400+ customer-tenant CSP ecosystem, restructuring these workflows and automating routing reduced recurring operational incidents by about 75%.",
      },
      { type: "heading", text: "Key takeaways" },
      {
        type: "list",
        items: [
          "Monitor lifecycle events proactively instead of waiting for failures.",
          "Standardize categories and escalation paths so issues reach the right owner fast.",
          "Keep Partner Center and distributor platforms in sync to avoid provisioning mismatches.",
        ],
      },
    ],
  },
  {
    slug: "mca-compliance-readiness-for-csp-partners",
    title: "Microsoft Customer Agreement (MCA) Readiness: A Practical Guide for CSP Partners",
    excerpt:
      "Missing MCA acceptance can block orders and renewals. A simple readiness process keeps customers compliant and services running.",
    date: "2026-11-21",
    readTime: "4 min read",
    tags: ["MCA", "Compliance", "Microsoft CSP"],
    content: [
      {
        type: "paragraph",
        text: "For CSP partners, the Microsoft Customer Agreement isn't just paperwork. When customer acceptance is missing or outdated, it can block new orders and renewals and turn into an urgent escalation.",
      },
      { type: "heading", text: "A simple readiness process" },
      {
        type: "list",
        items: [
          "Identify customers with missing or outdated MCA acceptance in Partner Center.",
          "Prioritize by upcoming renewals and high-value subscriptions.",
          "Guide partners and resellers through collecting and attesting customer acceptance.",
          "Track progress centrally until every active customer is compliant.",
        ],
      },
      { type: "heading", text: "Why it matters" },
      {
        type: "paragraph",
        text: "Running MCA readiness as a structured program, rather than reacting to failed orders, protects service continuity for customers and reduces billing disputes and escalations for partners.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
