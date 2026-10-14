export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  categoryId: string; // Matches service ID from content.ts
  categoryName: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-omni-retail",
    title: "Omni-Channel Retail Platform",
    client: "Global Retail Corp",
    categoryId: "web-development",
    categoryName: "Web Development",
    description: "A highly scalable e-commerce platform handling 100k+ concurrent users, featuring unified inventory management and seamless checkout experiences.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    liveUrl: "https://example.com"
  },
  {
    id: "proj-health-sync",
    title: "HealthSync Mobile App",
    client: "MedTech Innovators",
    categoryId: "mobile-development",
    categoryName: "Mobile Apps",
    description: "A cross-platform mobile application for real-time patient monitoring and secure telemedicine consultations, fully HIPAA compliant.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    techStack: ["React Native", "Firebase", "WebRTC", "TypeScript"],
    liveUrl: "https://example.com"
  },
  {
    id: "proj-nexus-erp",
    title: "Nexus Global ERP System",
    client: "Manufacturing Logistics Inc.",
    categoryId: "erp",
    categoryName: "ERP Development",
    description: "End-to-end enterprise resource planning system streamlining multi-warehouse inventory, procurement, and financial reporting across 12 countries.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    techStack: ["Python", "Django", "Vue.js", "MySQL"],
  },
  {
    id: "proj-fin-ai",
    title: "Predictive Market AI Agent",
    client: "Quantum Capital",
    categoryId: "ai",
    categoryName: "AI Services",
    description: "Advanced machine learning model utilizing natural language processing to analyze sentiment across global financial news in real-time.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    techStack: ["PyTorch", "HuggingFace", "FastAPI", "Docker"],
    liveUrl: "https://example.com"
  },
  {
    id: "proj-rebrand-nova",
    title: "Nova Tech Rebranding",
    client: "Nova Technologies",
    categoryId: "design",
    categoryName: "Graphic Design",
    description: "Complete visual identity overhaul including logo design, design system creation, and comprehensive brand guidelines for a rising tech startup.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
    techStack: ["Figma", "Illustrator", "Photoshop"],
  },
  {
    id: "proj-b2b-crm",
    title: "SalesFlow CRM Portal",
    client: "Enterprise Sales Co.",
    categoryId: "crm",
    categoryName: "CRM Development",
    description: "Custom customer relationship management software featuring automated sales pipelines, lead scoring, and deep email integration.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    techStack: ["React", "Express", "MongoDB", "Redis"],
  },
  {
    id: "proj-event-expo",
    title: "Tech Summit Expo Materials",
    client: "Global Tech Summit",
    categoryId: "printing",
    categoryName: "Printing Solutions",
    description: "High-quality, large-format printing for international tech expo, including 40ft backdrops, branded lanyards, and premium brochures.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    techStack: ["Large Format Print", "Spot UV", "Die-Cut"],
  },
  {
    id: "proj-growth-campaign",
    title: "Q4 Digital Growth Campaign",
    client: "SaaS Platform X",
    categoryId: "marketing",
    categoryName: "Digital Marketing",
    description: "A multi-channel performance marketing campaign spanning Google Ads, LinkedIn, and targeted SEO that increased MRR by 35%.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    techStack: ["Google Analytics 4", "SEMrush", "Meta Ads"],
    liveUrl: "https://example.com"
  },
  {
    id: "proj-vision-bot",
    title: "Automated Defect Detection",
    client: "AutoParts Manufacturer",
    categoryId: "ai",
    categoryName: "AI Services",
    description: "Computer vision system deployed on the assembly line to identify micro-defects in automotive components, reducing QA time by 80%.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    techStack: ["TensorFlow", "OpenCV", "C++", "Edge AI"],
  },
  {
    id: "proj-fintech-app",
    title: "PaySwift Digital Wallet",
    client: "PaySwift Financial",
    categoryId: "mobile-development",
    categoryName: "Mobile Apps",
    description: "A secure digital wallet application featuring NFC payments, peer-to-peer transfers, and crypto portfolio tracking.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    techStack: ["Flutter", "Dart", "Stripe API", "Node.js"],
    liveUrl: "https://example.com"
  },
  {
    id: "proj-eco-platform",
    title: "EcoTrack Web Platform",
    client: "Green Earth Initiative",
    categoryId: "web-development",
    categoryName: "Web Development",
    description: "An interactive dashboard for tracking corporate carbon footprints with real-time data visualization and automated ESG reporting.",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    techStack: ["React", "D3.js", "GraphQL", "Tailwind CSS"],
    liveUrl: "https://example.com"
  },
  {
    id: "proj-brand-campaign",
    title: "Product Launch Visuals",
    client: "Aura Smart Home",
    categoryId: "design",
    categoryName: "Graphic Design",
    description: "3D product rendering, packaging design, and social media creative assets for a highly anticipated smart home device launch.",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    techStack: ["Blender", "Cinema 4D", "Figma"],
  }
];
