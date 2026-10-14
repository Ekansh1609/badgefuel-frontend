import {
  Globe,
  Smartphone,
  Palette,
  Printer,
  Megaphone,
  Building2,
  Users,
  Brain,
  Code,
  Layout,
  ShoppingCart,
  Zap,
  Monitor,
  Server,
  Database,
  BarChart3,
  Mail,
  Search,
  Target,
  TrendingUp,
  Settings,
  Shield,
  Layers,
  Cpu,
  Eye,
  MessageSquare,
  FileText,
  Bot,
  Sparkles,
  Cog,
  PieChart,
  Lightbulb,
  Stethoscope,
  Landmark,
  Factory,
  GraduationCap,
  Home as HomeIcon,
  Truck,
} from "lucide-react";

export const companyInfo = {
  name: "BADGEFUEL",
  tagline: "Brains Behind The Next Tech Wave",
  email: "hello@badgefuel.com",
  website: "www.badgefuel.com",
  copyright: "© 2026 Badgefuel. All Rights Reserved.",
};

export const whoWeAre = {
  title: "WHO WE ARE",
  description:
    "Badgefuel is a forward-thinking Information Technology firm engineered for the digital era. We are not just a service provider — we are your strategic technology partner, committed to transforming your ideas into powerful digital realities. With a multidisciplinary team of innovators, designers, developers, and strategists, we bring cutting-edge solutions across web, mobile, design, printing, marketing, ERP, CRM, and Artificial Intelligence.",
  philosophy:
    "Our philosophy is simple: technology should empower businesses, not complicate them. Whether you are a startup finding your footing or an enterprise scaling new heights, Badgefuel delivers solutions with precision, creativity, and measurable impact.",
};

export const ourPromise = {
  title: "OUR PROMISE",
  description:
    "At Badgefuel, every project begins with understanding your unique business challenges. We combine technical excellence with strategic thinking to deliver outcomes that matter — faster time to market, improved operational efficiency, and lasting competitive advantage. Partnering with us means choosing innovation that is reliable, scalable, and built for the future.",
};

export const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Service Verticals" },
  { value: "99%", label: "Client Satisfaction" },
];

export const whyChooseUs = [
  {
    title: "Strategic Approach",
    description:
      "We start with understanding your business before writing a single line of code.",
  },
  {
    title: "Full-Stack Expertise",
    description:
      "From design to deployment, AI to printing — one team, complete capability.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Every solution is built to grow with your business, not limit it.",
  },
  {
    title: "Measurable Impact",
    description:
      "We deliver results that matter — ROI, efficiency, and competitive advantage.",
  },
  {
    title: "Agile Delivery",
    description: "Iterative development with transparency at every stage.",
  },
  {
    title: "Dedicated Support",
    description:
      "Post-launch maintenance, training, and continuous improvement.",
  },
];

export const industries = [
  {
    name: "Healthcare",
    icon: Stethoscope,
    description: "Telemedicine, HIPAA-compliant platforms, and AI diagnostics.",
  },
  {
    name: "Finance & Fintech",
    icon: Landmark,
    description: "Secure payment gateways, crypto wallets, and trading bots.",
  },
  {
    name: "E-commerce & Retail",
    icon: ShoppingCart,
    description: "Omni-channel platforms, AR fitting, and POS systems.",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description: "ERP systems, supply chain tracking, and IoT integrations.",
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "E-learning portals, student management, and virtual classrooms.",
  },
  {
    name: "Real Estate",
    icon: HomeIcon,
    description: "Property portals, virtual tours, and CRM solutions.",
  },
  {
    name: "Logistics",
    icon: Truck,
    description: "Fleet management, route optimization, and live tracking.",
  },
  {
    name: "Technology",
    icon: Cpu,
    description: "SaaS platforms, cloud infrastructure, and AI APIs.",
  },
];

export interface ServiceData {
  id: string;
  title: string;
  shortTitle: string;
  icon: typeof Globe;
  color: string;
  summary: string;
  description: string;
  flagship?: boolean;
  sections: {
    title: string;
    description?: string;
    items?: string[];
  }[];
  technologies?: string;
  whyChoose?: string;
  process?: string;
  commitment?: string;
}

export const services: ServiceData[] = [
  {
    id: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    summary: "Scalable, high-performance websites & web applications",
    description:
      "In a world where your website is often the first impression, Badgefuel ensures it is an unforgettable one. Our web development practice is built on a foundation of technical mastery, aesthetic excellence, and performance engineering. We craft websites and web applications that are not only visually stunning but also functionally superior — delivering seamless user experiences that convert visitors into loyal customers.",
    sections: [
      {
        title: "Our Web Development Capabilities",
        items: [
          "Custom Website Design & Development — Tailored from scratch to reflect your unique brand identity and business objectives",
          "E-Commerce Development — Feature-rich online stores powered by Shopify, WooCommerce, Magento, or fully custom solutions with secure payment gateways",
          "Progressive Web Apps (PWA) — Web applications that deliver app-like experiences directly in the browser, with offline functionality and lightning-fast load times",
          "Single Page Applications (SPA) — Built with React, Vue, or Angular for dynamic, fluid user experiences without full page reloads",
          "CMS-Driven Websites — WordPress, Webflow, Strapi, and headless CMS implementations for content-rich platforms that are easy to manage",
          "Landing Page Development — High-conversion landing pages optimized for campaigns, product launches, and lead generation",
          "API Development & Integration — RESTful and GraphQL APIs that connect your platforms, automate workflows, and power third-party integrations",
          "Website Maintenance & Support — Ongoing updates, security patches, performance monitoring, and technical support",
        ],
      },
    ],
    technologies:
      "Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Vue.js, Tailwind CSS, SASS. Backend: Node.js, Python (Django, FastAPI), PHP (Laravel), Ruby on Rails. Databases: PostgreSQL, MySQL, MongoDB, Firebase. DevOps: AWS, Google Cloud, Azure, Docker, CI/CD pipelines.",
    whyChoose:
      "We go beyond code. Our web development process is deeply collaborative — starting with discovery, moving through wireframing and prototyping, into agile development sprints, and concluding with rigorous QA testing and launch support. Every website we build is mobile-responsive, SEO-optimized, accessibility-compliant, and performance-benchmarked. Your website is your digital headquarters, and we build it to last.",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
    summary: "Native and cross-platform mobile experiences",
    description:
      "Mobile is no longer the future — it is the present. Billions of users interact with the world through their smartphones, and businesses that fail to meet customers on mobile are left behind. Badgefuel's mobile app development team creates powerful, intuitive, and scalable applications that deliver exceptional experiences on every device and platform.",
    sections: [
      {
        title: "What We Build",
        items: [
          "iOS App Development — Native Swift and Objective-C applications optimized for the entire Apple ecosystem including iPhone, iPad, and Apple Watch",
          "Android App Development — Native Kotlin and Java applications designed for performance and compatibility across the diverse Android landscape",
          "Cross-Platform Development — Flutter and React Native solutions that allow you to deploy on both iOS and Android from a single codebase without compromising quality",
          "Hybrid Apps — Web technology-based applications that wrap native containers for cost-effective multi-platform deployment",
          "Enterprise Mobile Apps — Secure, feature-rich applications for internal operations, field workforce management, and enterprise communication",
          "On-Demand Apps — Uber-style, food delivery, grocery, and service-on-demand applications with real-time tracking and dynamic pricing",
          "Social & Community Apps — Feature-rich social platforms with chat, media sharing, notifications, and community management",
          "App Maintenance & Updates — Continuous support, OS compatibility updates, and feature enhancements post-launch",
        ],
      },
      {
        title: "Specialized Capabilities",
        items: [
          "Push notification systems and in-app messaging",
          "Third-party API and SDK integrations (payment gateways, maps, analytics)",
          "Offline functionality and data synchronization",
          "Biometric authentication and advanced security protocols",
          "In-app purchases and subscription monetization models",
          "AR/VR experiences and IoT device connectivity",
        ],
      },
    ],
    process:
      "We follow a user-centered design philosophy, beginning with deep research into your target users' behaviors and pain points. Our process flows through concept validation, UX wireframing, UI design, agile development, quality assurance, App Store/Play Store submission, and post-launch analytics. We ensure your app not only functions flawlessly but also delights users at every interaction.",
  },
  {
    id: "design",
    title: "Graphic Design & Branding",
    shortTitle: "Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    summary: "Identity, UI/UX, and visual communication",
    description:
      "Visual identity is the language your brand speaks before words are exchanged. At Badgefuel, our graphic design practice is where artistry meets strategy. We create visual experiences that are not only beautiful but deeply meaningful — communicating your brand's values, personality, and promise with clarity and impact. Our designers are storytellers with pixels, and every design we produce is crafted to connect, compel, and convert.",
    sections: [
      {
        title: "Brand Identity & Strategy",
        items: [
          "Logo Design — Distinctive, timeless logos that encapsulate your brand essence, designed in versatile formats for every medium",
          "Brand Identity Systems — Complete visual languages including color palettes, typography hierarchies, iconography, and usage guidelines",
          "Brand Style Guides — Comprehensive brand manuals that ensure consistency across every touchpoint, internally and externally",
          "Brand Refresh & Rebranding — Thoughtful evolution of existing brands to stay relevant while preserving equity",
        ],
      },
      {
        title: "Marketing & Advertising Design",
        items: [
          "Social Media Graphics — Scroll-stopping content for Instagram, Facebook, LinkedIn, Twitter/X, and YouTube, sized and optimized per platform",
          "Digital Ad Creatives — Banners, display ads, animated GIFs, and HTML5 ads designed for maximum click-through rates",
          "Brochures & Catalogues — Professionally designed multi-page marketing collateral for print and digital distribution",
          "Posters & Flyers — Event promotions, product launches, and campaign materials with bold visual impact",
          "Infographics — Complex data and information transformed into engaging, shareable visual narratives",
        ],
      },
      {
        title: "UI/UX Design",
        items: [
          "Website UI Design — Visually refined interfaces with intuitive user flows and cohesive design systems",
          "Mobile App UI/UX — User experience mapping, wireframing, interactive prototypes, and pixel-perfect screen designs",
          "Dashboard & Admin Interface Design — Clean, data-rich interfaces for software products and enterprise platforms",
          "Design Systems & Component Libraries — Scalable Figma/Sketch design systems for product teams",
        ],
      },
      {
        title: "Publication & Editorial Design",
        items: [
          "Annual Reports & Corporate Presentations — Premium-quality documents that reflect organizational excellence",
          "Magazines & Newsletters — Print-ready and digital-first editorial layouts with strong typographic personality",
          "E-Books & Whitepapers — Thought leadership content dressed in professional, reader-friendly design",
          "Packaging Design — Product packaging and label design that stands out on shelves and communicates quality",
        ],
      },
      {
        title: "Motion & Animation",
        items: [
          "Logo Animations & Motion Intros — Animated brand assets for video content and digital presentations",
          "Explainer Video Graphics — Visual assets and motion sequences for product explainer and promotional videos",
          "Social Media Animations — Eye-catching animated content for Stories, Reels, and TikTok-format creatives",
        ],
      },
    ],
  },
  {
    id: "printing",
    title: "Printing Solutions",
    shortTitle: "Printing",
    icon: Printer,
    color: "from-orange-500 to-amber-500",
    summary: "Backdrops, e-cards, brochures, banners & more",
    description:
      "In an increasingly digital world, the power of physical print endures. Badgefuel's printing solutions bring your brand to life in the tangible world — with precision, vibrancy, and quality that commands attention. From grand-format event backdrops to meticulously crafted digital stationery, we handle every printing need with the same professionalism and creative excellence that defines our digital work.",
    sections: [
      {
        title: "Large Format & Event Printing",
        items: [
          "Backdrops & Step-and-Repeat Banners — High-resolution, vibrant backdrop printing for events, press conferences, exhibitions, and photoshoots",
          "Roll-Up & Pull-Up Banners — Portable and impactful display solutions for conferences, trade shows, and retail spaces",
          "Exhibition Stands & Displays — Custom-designed and printed exhibition booth graphics, panel displays, and branded environments",
          "Outdoor Signage & Billboards — Weather-resistant, large-scale graphics for outdoor advertising and wayfinding",
          "Vehicle Wraps & Branding — Full and partial vehicle wrap design and printing for mobile brand visibility",
        ],
      },
      {
        title: "Event & Promotional Materials",
        items: [
          "Invitation Cards — Elegantly designed and printed event invitations for weddings, corporate galas, product launches, and private events",
          "E-Cards & Digital Invitations — Custom-designed digital greeting cards and invitations with animated elements for all occasions",
          "Business Cards — Premium business card printing in standard, square, rounded, spot-UV, matte, gloss, and foil finishes",
          "Flyers & Leaflets — Single and double-sided promotional flyers in various sizes for distribution and display",
          "Brochures & Catalogues — Professionally folded brochures (bi-fold, tri-fold, Z-fold) and perfect-bound catalogues",
        ],
      },
      {
        title: "Corporate Stationery & Identity Print",
        items: [
          "Letterheads & Envelopes — Branded correspondence materials that reinforce professional credibility",
          "Folders & Presentation Kits — Branded corporate folders, press kits, and proposal covers",
          "ID Cards & Access Badges — Durable, photo-quality employee and event ID card printing",
          "Certificates & Awards — Custom-designed achievement certificates, plaques, and recognition materials",
        ],
      },
      {
        title: "Specialty Print",
        items: [
          "Notebooks & Branded Merchandise — Custom-printed corporate gifts, planners, and promotional merchandise",
          "Stickers & Labels — Custom die-cut stickers, product labels, and packaging tape in any shape and size",
          "Mugs, T-Shirts & Merchandise Printing — Corporate gifting and promotional merchandise with high-quality print",
          "Canvas & Photo Prints — Artwork reproduction and photographic prints on premium substrates",
          "Table Tents & Menu Cards — Hospitality and food service branded tabletop materials",
        ],
      },
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    icon: Megaphone,
    color: "from-violet-500 to-purple-500",
    summary: "SEO, social media, PPC, and content strategy",
    description:
      "Visibility drives growth, and growth demands strategy. Badgefuel's digital marketing practice is built on data, creativity, and relentless optimization. We design and execute integrated digital marketing campaigns that position your brand where your audience lives — across search engines, social platforms, email inboxes, and beyond. Our goal is not just to generate traffic, but to attract the right audiences and convert them into measurable business results.",
    sections: [
      {
        title: "Search Engine Optimization (SEO)",
        items: [
          "Technical SEO Audits — Comprehensive analysis of site structure, speed, crawlability, indexing, and Core Web Vitals",
          "On-Page Optimization — Keyword research, meta optimization, content structuring, and internal linking strategies",
          "Off-Page SEO & Link Building — Authority-building through high-quality backlink acquisition and digital PR",
          "Local SEO — Google Business Profile optimization and local citation building for location-based businesses",
          "E-Commerce SEO — Product and category page optimization, schema markup, and conversion-focused content strategies",
        ],
      },
      {
        title: "Pay-Per-Click Advertising (PPC)",
        items: [
          "Google Search & Display Ads — Targeted campaigns with compelling ad copy and conversion-optimized landing pages",
          "Shopping Campaigns — Product listing ads for e-commerce brands with feed management and bidding optimization",
          "Remarketing Campaigns — Highly targeted ads that re-engage users who have previously interacted with your brand",
          "YouTube Advertising — Pre-roll, bumper, and discovery ads to reach audiences through video",
          "Meta Ads (Facebook & Instagram) — Sophisticated audience targeting, creative testing, and funnel-based campaigns",
        ],
      },
      {
        title: "Social Media Marketing (SMM)",
        items: [
          "Social Strategy Development — Platform-specific strategies aligned with your audience demographics and business goals",
          "Content Creation & Calendar Management — Consistent, engaging content across all major platforms",
          "Community Management — Active audience engagement, comment moderation, and brand reputation management",
          "Influencer Marketing — Identifying and managing collaborations with relevant micro and macro influencers",
        ],
      },
      {
        title: "Content Marketing & Email",
        items: [
          "Blog & Article Writing — SEO-driven, authoritative long-form content that establishes thought leadership",
          "Video Marketing Strategy — Concept development and distribution strategy for YouTube and short-form video",
          "Email Marketing Campaigns — Segmented, automated email sequences for nurturing, retention, and re-engagement",
          "Marketing Automation — HubSpot, Mailchimp, and custom automation workflows for scalable lead management",
        ],
      },
      {
        title: "Analytics & Reporting",
        description:
          "We believe in radical transparency. Every campaign we manage is backed by detailed monthly reporting covering key performance indicators, spend efficiency, audience insights, and strategic recommendations. We use Google Analytics 4, Meta Business Suite, SEMrush, and custom dashboards to give you a complete picture of your digital performance.",
      },
    ],
  },
  {
    id: "erp",
    title: "ERP Development",
    shortTitle: "ERP",
    icon: Building2,
    color: "from-teal-500 to-cyan-500",
    summary: "End-to-end enterprise resource planning systems",
    description:
      "Enterprise Resource Planning is the nervous system of a modern organization. A well-implemented ERP system unifies your operations, eliminates data silos, automates repetitive processes, and gives decision-makers the real-time visibility they need to act with confidence. Badgefuel designs and develops custom ERP systems built precisely around your business model — not the other way around.",
    sections: [
      {
        title: "What Our ERP Systems Cover",
        items: [
          "Finance & Accounting Module — General ledger, accounts payable and receivable, budgeting, expense management, and automated financial reporting",
          "Human Resources Management — Employee records, payroll processing, attendance & leave management, performance reviews, and recruitment workflows",
          "Inventory & Warehouse Management — Real-time stock tracking, multi-warehouse management, purchase order automation, and barcode/RFID integration",
          "Sales & Order Management — Lead-to-cash pipeline, quotation management, order processing, and customer invoicing",
          "Procurement & Supply Chain — Vendor management, purchase requisitions, supplier performance tracking, and supply chain visibility",
          "Manufacturing & Production Planning — Bill of materials, production scheduling, work order management, and quality control",
          "Project Management — Task assignment, milestone tracking, resource allocation, time logging, and project profitability analysis",
          "Reporting & Business Intelligence — Customizable dashboards, KPI tracking, and advanced analytics with real-time data visualization",
        ],
      },
      {
        title: "Integration Capabilities",
        items: [
          "Third-party accounting software integration (Tally, QuickBooks, Zoho Books)",
          "E-commerce platform connectivity (Shopify, WooCommerce)",
          "Payment gateway and banking API integration",
          "Custom API development for legacy system connectivity",
        ],
      },
    ],
    process:
      "We begin every ERP project with a thorough business process analysis — mapping your existing workflows, identifying pain points, and designing a system architecture that solves real operational challenges. We follow an agile development methodology, delivering the system in modular phases to allow early adoption and iterative improvement. Post-deployment, we provide comprehensive user training and dedicated technical support.",
    technologies:
      "Our ERP solutions are built on modern, scalable technology: Python (Django/FastAPI), Node.js, React.js for frontend dashboards, PostgreSQL and MySQL for data integrity, and cloud infrastructure on AWS or Azure for maximum uptime and scalability. We also specialize in customizing and extending leading open-source ERP platforms including Odoo and ERPNext.",
  },
  {
    id: "crm",
    title: "CRM Development",
    shortTitle: "CRM",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
    summary: "Customer relationship management tailored to your workflow",
    description:
      "Your customers are your most valuable asset, and how you manage those relationships defines your business trajectory. Badgefuel develops custom Customer Relationship Management systems that give your sales, marketing, and customer service teams the tools they need to build stronger relationships, close more deals, and deliver exceptional customer experiences — all within a single, intelligent platform.",
    sections: [
      {
        title: "Core CRM Modules We Build",
        items: [
          "Contact & Account Management — Centralized repository of all customer, prospect, and partner information with full interaction history",
          "Lead Management & Pipeline — Capture, score, assign, and track leads through every stage of your sales funnel with visual pipeline boards",
          "Sales Automation — Automated follow-up reminders, task creation, deal stage transitions, and email sequence triggers",
          "Customer Service & Support Desk — Ticketing system, SLA tracking, escalation workflows, and customer satisfaction measurement",
          "Marketing Integration — Seamless connection with email campaigns, social listening, and marketing automation platforms",
          "Quotation & Proposal Management — In-CRM quote builder with digital signature capabilities and proposal tracking",
          "Customer Analytics & Reporting — 360-degree customer dashboards, revenue forecasting, churn prediction, and team performance reports",
          "Mobile CRM — On-the-go access for field sales teams with offline data sync and geo-tagging capabilities",
        ],
      },
      {
        title: "Integration Ecosystem",
        items: [
          "Email & calendar integration (Gmail, Outlook, Google Calendar)",
          "Telephony and VoIP integration for click-to-call and call logging",
          "WhatsApp Business API and SMS automation",
          "Accounting and ERP system connectivity",
          "Website lead capture form integration",
          "Analytics tools (Google Analytics, Meta Pixel)",
        ],
      },
    ],
    whyChoose:
      "Generic CRM platforms like Salesforce or HubSpot are powerful but come with significant licensing costs, feature bloat, and the constant need to adapt your processes to the software. A Badgefuel custom CRM is built around your specific sales process, industry requirements, and team workflows — delivering exactly the features you need, nothing more, nothing less. It grows with you.",
  },
  {
    id: "ai",
    title: "AI Services",
    shortTitle: "AI Services",
    icon: Brain,
    color: "from-amber-500 to-yellow-500",
    summary: "Machine learning, automation, and intelligent systems",
    flagship: true,
    description:
      "Artificial Intelligence is no longer the domain of tech giants — it is the competitive frontier for every ambitious business. Badgefuel's AI Services practice helps organizations harness the transformative power of machine learning, natural language processing, computer vision, and intelligent automation to unlock new efficiencies, create innovative products, and make smarter decisions at scale. We are not AI evangelists who promise magic. We are engineers and strategists who build practical, measurable AI solutions that solve real business problems — delivering genuine ROI from day one.",
    sections: [
      {
        title: "AI Consulting & Strategy",
        items: [
          "AI Readiness Assessment — Evaluating your data infrastructure, use case potential, and organizational capacity for AI adoption",
          "Use Case Identification — Discovering the highest-impact AI opportunities within your specific industry and business model",
          "AI Roadmap Development — Creating a phased implementation strategy that aligns AI initiatives with business priorities and budgets",
        ],
      },
      {
        title: "Machine Learning Solutions",
        items: [
          "Predictive Analytics — Models that forecast sales, demand, churn, equipment failure, and other critical business outcomes",
          "Recommendation Engines — Personalization systems for e-commerce, content platforms, and service recommendations",
          "Anomaly Detection — Intelligent systems that identify fraud, operational irregularities, and quality issues in real time",
          "Customer Segmentation — Unsupervised learning models that identify meaningful customer clusters for targeted strategy",
        ],
      },
      {
        title: "Natural Language Processing (NLP)",
        items: [
          "AI-Powered Chatbots & Virtual Assistants — Intelligent conversational agents for customer support, lead qualification, and internal knowledge bases",
          "Sentiment Analysis — Real-time analysis of customer feedback, reviews, and social mentions to gauge brand perception",
          "Document Intelligence — Automated extraction and classification of data from invoices, contracts, forms, and reports",
          "Text Summarization & Generation — AI tools that draft, summarize, and categorize textual content at scale",
        ],
      },
      {
        title: "Computer Vision",
        items: [
          "Image Recognition & Classification — Automated visual quality inspection, product categorization, and content moderation",
          "Object Detection & Tracking — Real-time detection systems for retail analytics, security, and manufacturing",
          "Facial Recognition Systems — Secure, privacy-compliant identity verification for access control and attendance",
          "Document OCR & Digitization — Intelligent optical character recognition for converting physical documents into searchable digital data",
        ],
      },
      {
        title: "AI Automation & Process Intelligence",
        items: [
          "Robotic Process Automation (RPA) — Software bots that automate high-volume, rule-based tasks across your business systems",
          "Intelligent Document Processing (IDP) — AI-driven workflows that extract, validate, and route information from incoming documents",
          "Workflow Optimization — AI-powered analysis and redesign of business processes to maximize efficiency",
          "AI-Assisted Business Intelligence — Natural language query interfaces for your data, enabling non-technical users to generate insights",
        ],
      },
      {
        title: "Generative AI Integration",
        items: [
          "Custom LLM-Powered Applications — Building business tools powered by GPT-4, Claude, Gemini, and open-source large language models",
          "AI Content Generation Pipelines — Automated content production systems for marketing, product descriptions, and reporting",
          "RAG (Retrieval-Augmented Generation) Systems — AI that answers questions based on your proprietary company knowledge base",
          "AI API Development — Custom AI APIs and microservices that embed intelligence into your existing products and workflows",
        ],
      },
    ],
    commitment:
      "Every AI solution Badgefuel builds is grounded in three principles: accuracy, transparency, and ethics. We do not deploy black-box systems without clear explainability mechanisms. We ensure our AI solutions comply with applicable data protection regulations. And we measure success not by model complexity, but by business impact — reduced costs, increased revenue, and faster, smarter decisions for your organization.",
  },
];

export const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    children: services.map((s) => ({
      label: s.title,
      path: `/services/${s.id}`,
      icon: s.icon,
      flagship: s.flagship,
    })),
  },
  { label: "Projects", path: "/projects" },
  { label: "News", path: "/news" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];
