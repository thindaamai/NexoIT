import {
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  DatabaseBackup,
  Globe2,
  Headphones,
  LockKeyhole,
  Mail,
  MessageSquare,
  FileText,
  AppWindow,
  Network,
  ShieldCheck,
  HardDrive,
  Monitor,
  UserPlus,
  Wrench,
  Users,
  Wifi,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { label: "Core service lines", value: "4" },
  { label: "Setup support window", value: "30d" },
  { label: "Delivery modes", value: "3" },
  { label: "SMB focus", value: "AU" },
];

export const services = [
  {
    slug: "business-essentials",
    title: "Business Essentials",
    summary:
      "Microsoft 365, Teams, secure network infrastructure, devices, backup, endpoint protection, and handover for growing businesses.",
    detail:
      "A complete business technology foundation for SMBs that need email, collaboration, devices, networking, security, backup, and staff onboarding delivered as one clear setup.",
    icon: BriefcaseBusiness,
    image: "/service-images/business-essentials.png",
    items: ["M365 tenant setup", "Email and data migration", "Network, WiFi, firewall", "User onboarding"],
    products: ["Microsoft 365 licenses", "Microsoft Teams and Teams Phone", "Router, firewall, switch, and WiFi", "Exchange Online", "OneDrive and SharePoint", "Endpoint protection", "Windows PCs, laptops, monitors, peripherals, and printers"],
    delivery: ["Consultation and requirements assessment", "License and hardware procurement", "Physical installation and network configuration", "M365 tenant, email, OneDrive, and SharePoint setup", "Email and data migration", "SSO, MFA, backup, endpoint protection, training, handover, and support"],
    outcomes: ["A clean office technology stack", "Secure access for every user", "Documented credentials and handover", "A supported first operating window"],
    projectExamples: ["New office IT setup", "Email migration and MFA rollout", "Network and WiFi refresh"],
    audience: "Owners and operations teams opening a new office, modernising old systems, or moving staff into a secure Microsoft 365 environment.",
    problems: ["Email, files, devices, and network tools are managed separately", "New users take too long to onboard", "Backups, MFA, and endpoint protection are not consistent", "Credentials and handover notes are scattered"],
    workflow: ["Audit current users, domains, devices, network, and data", "Design the license, hardware, security, and backup plan", "Configure Microsoft 365, Teams, Email, and Cloud Infrastructure", "Migrate data, train staff, document credentials, and handover", "On-demand technical resolution and production fleet management"],
    metrics: ["M365", "MFA", "Backup", "WiFi"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Websites, web apps, CMS platforms, ecommerce, hosting, deployment, and maintenance with performance built in.",
    detail:
      "Design and development for websites, web applications, ecommerce, CMS platforms, databases, hosting, deployment, and ongoing maintenance.",
    icon: Code2,
    image: "/service-images/web-development.png",
    items: ["UI/UX design", "Frontend and backend", "CMS and ecommerce", "SEO and speed"],
    products: ["Web hosting", "Domain registration", "SSL certificates", "CMS platforms", "Databases", "Ecommerce platforms"],
    delivery: ["Requirement discovery and solution recommendation", "UI/UX design and content structure", "Frontend and backend development", "CMS or ecommerce setup", "Database design and hosting configuration", "Deployment, performance tuning, documentation, and maintenance"],
    outcomes: ["A modern website or app", "A manageable content workflow", "Fast and secure hosting", "Clear launch and handover support"],
    projectExamples: ["Business website redesign", "Custom client portal", "CMS and ecommerce launch"],
    audience: "Businesses that need a professional website, customer portal, ecommerce flow, or CMS-backed platform that is easy to run after launch.",
    problems: ["The current website does not explain the offer clearly", "Content updates depend on developers", "Forms, payments, booking, or CRM flows are missing", "Hosting, analytics, SEO, and performance are not managed properly"],
    workflow: ["Map audiences, offers, pages, content, and conversion goals", "Design the UX, page structure, and visual system", "Build frontend, backend, CMS, database, integrations, and admin flows", "Launch with hosting, SSL, analytics, performance checks, documentation, and maintenance"],
    metrics: ["UX", "CMS", "SEO", "SSL"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    summary:
      "Network engineers and SRE specialists for project-based, hourly, or long-term enterprise engagements.",
    detail:
      "Specialist network engineering and SRE capacity for enterprise-grade projects, audits, implementation, troubleshooting, automation, and documentation.",
    icon: Network,
    image: "/service-images/professional-services.png",
    items: ["Network architecture", "Firewall implementation", "SRE and automation", "Knowledge transfer"],
    products: ["Network engineering", "SRE specialists", "Hourly engagements", "Project-based delivery", "Long-term contracts", "Remote, on-site, or hybrid support"],
    delivery: ["Network design and architecture", "LAN, WAN, routing, switching, VPN, and SD-WAN implementation", "Firewall deployment and security assessment", "Network troubleshooting, audits, and reporting", "SRE monitoring, automation, runbooks, and knowledge transfer"],
    outcomes: ["Specialist engineering capacity", "Documented and supportable systems", "Reduced operational risk", "Stronger internal team knowledge"],
    projectExamples: ["Firewall implementation", "Network audit and remediation", "SRE monitoring rollout"],
    audience: "Technology teams that need specialist network engineers or SRE support for complex implementation, audits, reliability work, or documentation.",
    problems: ["Internal teams need extra engineering capacity", "Firewall, routing, VPN, or SD-WAN changes require specialist care", "Monitoring and runbooks are incomplete", "Knowledge is stuck with one person or vendor"],
    workflow: ["Review architecture, risks, constraints, and operational goals", "Plan the implementation, migration, or remediation approach", "Execute network, firewall, cloud networking, SRE, or automation work", "Document the environment, transfer knowledge, and leave clear runbooks"],
    metrics: ["LAN/WAN", "SRE", "VPN", "Runbooks"],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    summary:
      "Azure and AWS setup, virtual networks, VPN, identity integration, monitoring, backup, and cost controls.",
    detail:
      "Cloud foundations across Azure and AWS, covering accounts, networking, security, VPN, identity, monitoring, backup, disaster recovery, and cost management.",
    icon: Cloud,
    image: "/service-images/cloud-services.png",
    items: ["Tenant setup", "Cloud networking", "VPN and security", "Monitoring and DR"],
    products: ["Azure subscriptions", "AWS accounts", "Virtual networks", "Cloud firewalls and security groups", "VPN gateways", "Cloud storage and compute"],
    delivery: ["Cloud requirement assessment", "Azure or AWS account and tenant setup", "Virtual networks, routing, firewall, and security group configuration", "Site-to-site and point-to-site VPN", "Identity integration, resource provisioning, monitoring, backup, disaster recovery, and cost controls"],
    outcomes: ["A secure cloud foundation", "Reliable remote and site connectivity", "Monitoring and backup visibility", "Cost-aware cloud operations"],
    projectExamples: ["Azure landing zone setup", "Site-to-site VPN build", "Backup and DR implementation"],
    audience: "SMBs and technical teams moving workloads into Azure or AWS, connecting sites to cloud, or improving cloud security and resilience.",
    problems: ["Cloud accounts exist but networking and access are unclear", "VPN, firewall rules, and routing are fragile", "Monitoring, backups, and disaster recovery are incomplete", "Cloud spend is growing without visibility"],
    workflow: ["Assess platform choice, users, workloads, sites, and security requirements", "Design virtual networks, routing, access, backup, and cost controls", "Implement tenants, VPN, identity, firewalls, security groups, resources, and monitoring", "Document the cloud environment and provide handover and support"],
    metrics: ["Azure", "AWS", "VPN", "DR"],
  },
];

export const packages = [
  {
    name: "Business Essentials",
    tagline: "Office, network, security, and staff onboarding in one managed setup.",
    products: ["Microsoft 365", "Teams Phone", "Router, firewall, switch, WiFi", "Exchange Online", "OneDrive and SharePoint", "Endpoint protection"],
    services: ["Consultation", "Procurement", "Installation", "Configuration", "Migration", "Training", "Handover", "Support"],
  },
  {
    name: "Web Development",
    tagline: "Modern websites and apps that are easy to operate after launch.",
    products: ["Web hosting", "Domain registration", "SSL certificates", "CMS platforms", "Databases"],
    services: ["Website design", "Web app development", "Frontend", "Backend APIs", "Ecommerce", "CMS setup", "Performance optimisation"],
  },
  {
    name: "Professional Services",
    tagline: "Specialist engineers for serious network, SRE, and security work.",
    products: ["Network engineers", "SRE specialists", "Remote, on-site, hybrid", "Hourly or project-based"],
    services: ["Network design", "Implementation", "Troubleshooting", "Audits", "Cloud networking", "Security assessments", "Documentation"],
  },
  {
    name: "Cloud Services",
    tagline: "Secure cloud foundations for teams that need resilience and control.",
    products: ["Azure", "AWS", "Virtual networks", "Security groups", "VPN gateway"],
    services: ["Tenant setup", "Routing", "Firewall rules", "Identity integration", "Monitoring", "Backup and DR", "Cost management"],
  },
];

export const industries = [
  { name: "Finance", icon: ShieldCheck, copy: "Security-first networks, access controls, and resilient operational support." },
  { name: "Healthcare", icon: CheckCircle2, copy: "Reliable identity, endpoint protection, backups, and support for sensitive workflows." },
  { name: "Government", icon: Building2, copy: "Documentation, governance, audit readiness, and structured delivery practices." },
  { name: "Telecommunications", icon: Wifi, copy: "Routing, switching, cloud networking, observability, and engineering capacity." },
  { name: "Retail", icon: Globe2, copy: "Point-of-sale connectivity, secure WiFi, ecommerce, hosting, and support." },
  { name: "Enterprise", icon: Cpu, copy: "Specialist SRE, firewall, automation, network architecture, and knowledge transfer." },
];

export const process = [
  "Assess business goals, risks, users, sites, and existing systems.",
  "Design the right mix of licenses, hardware, hosting, security, and support.",
  "Procure, configure, migrate, deploy, and document the environment.",
  "Train the team, hand over credentials, and support the first operating window.",
];

export const capabilities = [
  { label: "Microsoft 365", icon: Users },
  { label: "Security", icon: LockKeyhole },
  { label: "Cloud networking", icon: Cloud },
  { label: "Backup and DR", icon: DatabaseBackup },
  { label: "Support", icon: Headphones },
];

export const businessEssentialsCapabilities = [
  { label: "Email", icon: Mail },
  { label: "Chat", icon: MessageSquare },
  { label: "Files", icon: FileText },
  { label: "Office", icon: AppWindow },
  { label: "Network", icon: Network },
  { label: "Security", icon: ShieldCheck },
  { label: "Backup", icon: HardDrive },
  { label: "Devices", icon: Monitor },
  { label: "Onboarding", icon: UserPlus },
  { label: "Services", icon: Wrench },
];

export const founders = [
  {
    name: "Arun Reddy",
    role: "Founder & Principal Network Architect",
    experience: "20 years",
    image: "/team/arun-reddy.png",
    focus: "Enterprise network design, routing, switching, firewalls, and secure infrastructure delivery.",
  },
  {
    name: "Maya Sharma",
    role: "Co-founder & Cloud Strategy Lead",
    experience: "18 years",
    image: "/team/maya-sharma.png",
    focus: "Azure, AWS, identity, cloud migration, cost governance, and resilient cloud foundations.",
  },
  {
    name: "Daniel Kim",
    role: "Founding SRE & Automation Lead",
    experience: "15 years",
    image: "/team/daniel-kim.png",
    focus: "Reliability engineering, monitoring, runbooks, DevOps automation, and production support.",
  },
  {
    name: "Priya Nair",
    role: "Founding Product & Web Lead",
    experience: "12 years",
    image: "/team/priya-nair.png",
    focus: "Website strategy, UX systems, CMS builds, ecommerce flows, and client-facing platforms.",
  },
  {
    name: "Leon Walker",
    role: "Founding Security & Operations Lead",
    experience: "16 years",
    image: "/team/leon-walker.png",
    focus: "Endpoint protection, MFA, backup, operational handover, and security-first support practices.",
  },
];

export const partners = [
  { name: "Microsoft Cloud", image: "/partners/microsoft-cloud.png", area: "Microsoft 365, Teams, identity" },
  { name: "AWS Network", image: "/partners/aws-network.png", area: "Cloud infrastructure and networking" },
  { name: "Azure Security", image: "/partners/azure-security.png", area: "Cloud security and governance" },
  { name: "Fortinet Edge", image: "/partners/fortinet-edge.png", area: "Firewall and edge protection" },
  { name: "Cisco Systems", image: "/partners/cisco-systems.png", area: "Routing, switching, and wireless" },
  { name: "Cloudflare", image: "/partners/cloudflare.png", area: "DNS, CDN, and app protection" },
];
