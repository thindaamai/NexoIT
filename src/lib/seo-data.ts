import { services } from "@/lib/site-data";

export const siteUrl = "https://nexoit.com.au";

export const seoServices = [
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    baseServiceSlug: "business-essentials",
    intent: "ongoing IT support, user onboarding, device management, Microsoft 365, endpoint protection, and documentation",
  },
  {
    slug: "microsoft-365-setup",
    title: "Microsoft 365 Setup",
    baseServiceSlug: "business-essentials",
    intent: "Microsoft 365 tenant setup, Exchange Online, Teams, SharePoint, OneDrive, SSO, MFA, and user migration",
  },
  {
    slug: "business-it-setup",
    title: "Business IT Setup",
    baseServiceSlug: "business-essentials",
    intent: "new office technology, network infrastructure, devices, email, collaboration, backup, and handover",
  },
  {
    slug: "web-development",
    title: "Web Development",
    baseServiceSlug: "web-development",
    intent: "websites, web apps, CMS platforms, ecommerce, hosting, deployment, and maintenance",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    baseServiceSlug: "web-development",
    intent: "website updates, CMS support, hosting checks, performance improvements, forms, content, and security maintenance",
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    baseServiceSlug: "web-development",
    intent: "online stores, payment flows, product catalogues, CMS operations, hosting, and performance optimisation",
  },
  {
    slug: "network-engineering",
    title: "Network Engineering",
    baseServiceSlug: "professional-services",
    intent: "LAN, WAN, routing, switching, VPN, SD-WAN, firewall implementation, audits, and troubleshooting",
  },
  {
    slug: "sre-services",
    title: "SRE Services",
    baseServiceSlug: "professional-services",
    intent: "monitoring, reliability engineering, automation, incident readiness, runbooks, and operational handover",
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    baseServiceSlug: "cloud-services",
    intent: "Azure, AWS, virtual networks, VPN, identity, monitoring, backups, disaster recovery, and cloud cost control",
  },
  {
    slug: "cybersecurity-services",
    title: "Cybersecurity Services",
    baseServiceSlug: "cloud-services",
    intent: "MFA, endpoint protection, firewall rules, secure access, cloud security, backups, and risk reduction",
  },
  {
    slug: "backup-disaster-recovery",
    title: "Backup and Disaster Recovery",
    baseServiceSlug: "cloud-services",
    intent: "business backup planning, restore readiness, cloud backup, disaster recovery, monitoring, and documentation",
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    baseServiceSlug: "cloud-services",
    intent: "moving workloads, files, users, identity, and networking into Azure or AWS with secure handover",
  },
];

export const locations = [
  { slug: "melbourne", name: "Melbourne", state: "Victoria", industries: ["professional services", "healthcare", "retail", "finance"] },
  { slug: "sydney", name: "Sydney", state: "New South Wales", industries: ["finance", "enterprise", "retail", "healthcare"] },
  { slug: "brisbane", name: "Brisbane", state: "Queensland", industries: ["construction", "healthcare", "professional services", "retail"] },
  { slug: "perth", name: "Perth", state: "Western Australia", industries: ["resources", "engineering", "enterprise", "professional services"] },
  { slug: "adelaide", name: "Adelaide", state: "South Australia", industries: ["education", "healthcare", "government", "professional services"] },
  { slug: "canberra", name: "Canberra", state: "ACT", industries: ["government", "consulting", "education", "security"] },
  { slug: "hobart", name: "Hobart", state: "Tasmania", industries: ["tourism", "healthcare", "retail", "professional services"] },
  { slug: "darwin", name: "Darwin", state: "Northern Territory", industries: ["government", "logistics", "construction", "healthcare"] },
  { slug: "gold-coast", name: "Gold Coast", state: "Queensland", industries: ["tourism", "retail", "healthcare", "professional services"] },
  { slug: "newcastle", name: "Newcastle", state: "New South Wales", industries: ["healthcare", "construction", "education", "professional services"] },
  { slug: "geelong", name: "Geelong", state: "Victoria", industries: ["manufacturing", "retail", "healthcare", "professional services"] },
  { slug: "wollongong", name: "Wollongong", state: "New South Wales", industries: ["education", "healthcare", "industrial", "professional services"] },
  { slug: "sunshine-coast", name: "Sunshine Coast", state: "Queensland", industries: ["healthcare", "tourism", "retail", "professional services"] },
  { slug: "townsville", name: "Townsville", state: "Queensland", industries: ["government", "logistics", "healthcare", "construction"] },
  { slug: "cairns", name: "Cairns", state: "Queensland", industries: ["tourism", "healthcare", "retail", "professional services"] },
  { slug: "ballarat", name: "Ballarat", state: "Victoria", industries: ["education", "healthcare", "retail", "professional services"] },
  { slug: "bendigo", name: "Bendigo", state: "Victoria", industries: ["healthcare", "finance", "retail", "professional services"] },
  { slug: "toowoomba", name: "Toowoomba", state: "Queensland", industries: ["agriculture", "education", "healthcare", "professional services"] },
  { slug: "launceston", name: "Launceston", state: "Tasmania", industries: ["tourism", "retail", "healthcare", "professional services"] },
  { slug: "albury-wodonga", name: "Albury Wodonga", state: "NSW and Victoria", industries: ["logistics", "healthcare", "manufacturing", "professional services"] },
];

export const seoIndustries = [
  { slug: "healthcare", name: "Healthcare", needs: ["secure user access", "backup readiness", "endpoint protection", "documented support"] },
  { slug: "finance", name: "Finance", needs: ["secure identity", "network resilience", "audit-friendly documentation", "reliable backups"] },
  { slug: "retail", name: "Retail", needs: ["stable WiFi", "ecommerce operations", "endpoint support", "secure payments workflows"] },
  { slug: "government", name: "Government", needs: ["documentation", "security controls", "network governance", "reliable handover"] },
  { slug: "education", name: "Education", needs: ["identity management", "device support", "cloud collaboration", "student and staff access"] },
  { slug: "construction", name: "Construction", needs: ["remote access", "site connectivity", "device management", "cloud files"] },
  { slug: "professional-services", name: "Professional Services", needs: ["email reliability", "website credibility", "secure files", "fast support"] },
  { slug: "telecommunications", name: "Telecommunications", needs: ["network engineering", "monitoring", "SRE practices", "technical documentation"] },
];

export const resourceTopics = [
  {
    slug: "microsoft-365-migration-checklist",
    title: "Microsoft 365 Migration Checklist for Australian SMBs",
    serviceSlug: "microsoft-365-setup",
    questions: ["What should be prepared before migration?", "How do we reduce email downtime?", "When should MFA be enabled?"],
  },
  {
    slug: "managed-it-support-cost-australia",
    title: "How Much Does Managed IT Support Cost in Australia?",
    serviceSlug: "managed-it-services",
    questions: ["What affects monthly support cost?", "What should be included?", "How do we avoid hidden costs?"],
  },
  {
    slug: "small-business-backup-plan",
    title: "Small Business Backup and Disaster Recovery Plan",
    serviceSlug: "backup-disaster-recovery",
    questions: ["What data should be backed up?", "How often should backups run?", "How do we test restore readiness?"],
  },
  {
    slug: "website-redesign-checklist",
    title: "Website Redesign Checklist for Australian Businesses",
    serviceSlug: "web-development",
    questions: ["What pages should be planned first?", "How do we protect SEO during redesign?", "What should be tested before launch?"],
  },
  {
    slug: "cloud-migration-checklist",
    title: "Cloud Migration Checklist for SMBs",
    serviceSlug: "cloud-migration",
    questions: ["Which workloads should move first?", "How do we design secure access?", "How do we control cloud costs?"],
  },
  {
    slug: "business-wifi-network-refresh",
    title: "Business WiFi and Network Refresh Guide",
    serviceSlug: "network-engineering",
    questions: ["When should WiFi be refreshed?", "How do we plan coverage?", "What security controls matter?"],
  },
  {
    slug: "endpoint-protection-small-business",
    title: "Endpoint Protection Guide for Small Businesses",
    serviceSlug: "cybersecurity-services",
    questions: ["What should endpoint protection include?", "How do we manage laptops remotely?", "How do we handle alerts?"],
  },
  {
    slug: "sre-monitoring-runbook-guide",
    title: "SRE Monitoring and Runbook Guide",
    serviceSlug: "sre-services",
    questions: ["What should be monitored?", "What belongs in a runbook?", "How do we reduce incident response time?"],
  },
  {
    slug: "ecommerce-website-launch-checklist",
    title: "Ecommerce Website Launch Checklist",
    serviceSlug: "ecommerce-development",
    questions: ["What should be tested before launch?", "How do payments and shipping fit together?", "What analytics should be installed?"],
  },
  {
    slug: "business-it-setup-new-office",
    title: "New Office Business IT Setup Checklist",
    serviceSlug: "business-it-setup",
    questions: ["What hardware is needed?", "How should users be onboarded?", "What should be documented at handover?"],
  },
  {
    slug: "secure-cloud-vpn-setup",
    title: "Secure Cloud VPN Setup Guide",
    serviceSlug: "cloud-services",
    questions: ["When is site-to-site VPN useful?", "What routing needs to be planned?", "How do we monitor connectivity?"],
  },
  {
    slug: "website-maintenance-plan",
    title: "Website Maintenance Plan for SMBs",
    serviceSlug: "website-maintenance",
    questions: ["What should be updated monthly?", "How do we monitor forms?", "How do we keep the CMS secure?"],
  },
];

export const comparisons = [
  { slug: "managed-it-services-vs-break-fix-support", a: "Managed IT Services", b: "Break-Fix Support", serviceSlug: "managed-it-services" },
  { slug: "microsoft-365-vs-google-workspace-small-business", a: "Microsoft 365", b: "Google Workspace", serviceSlug: "microsoft-365-setup" },
  { slug: "custom-website-vs-template-website", a: "Custom Website", b: "Template Website", serviceSlug: "web-development" },
  { slug: "azure-vs-aws-small-business", a: "Azure", b: "AWS", serviceSlug: "cloud-services" },
  { slug: "cloud-backup-vs-local-backup", a: "Cloud Backup", b: "Local Backup", serviceSlug: "backup-disaster-recovery" },
  { slug: "network-audit-vs-network-refresh", a: "Network Audit", b: "Network Refresh", serviceSlug: "network-engineering" },
  { slug: "sre-services-vs-devops-support", a: "SRE Services", b: "DevOps Support", serviceSlug: "sre-services" },
  { slug: "website-maintenance-vs-website-redesign", a: "Website Maintenance", b: "Website Redesign", serviceSlug: "website-maintenance" },
];

export function getSeoService(slug: string) {
  return seoServices.find((service) => service.slug === slug);
}

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function getSeoIndustry(slug: string) {
  return seoIndustries.find((industry) => industry.slug === slug);
}

export function getBaseService(serviceSlug: string) {
  const seoService = getSeoService(serviceSlug);
  return services.find((service) => service.slug === seoService?.baseServiceSlug) ?? services[0];
}
