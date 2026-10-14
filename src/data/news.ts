export interface NewsItem {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  summary: string;
  content: string;
  imageUrl: string;
}

export const newsData: NewsItem[] = [
  {
    id: "ai-breakthrough-2026",
    title: "Next-Gen AI Models Achieve unprecedented reasoning capabilities",
    date: "May 15, 2026",
    author: "Elena Rodriguez",
    category: "Artificial Intelligence",
    summary: "The latest iteration of large language models demonstrates breakthrough capabilities in complex multi-step reasoning, closing the gap toward artificial general intelligence.",
    content: "<p>In a landmark development for the field of artificial intelligence, a consortium of leading research labs has unveiled a new architecture that fundamentally changes how neural networks process complex reasoning tasks. Unlike previous models that relied heavily on pattern recognition and next-token prediction, this new approach incorporates dynamic memory allocation and specialized reasoning modules.</p><br/><p>Tests on benchmark datasets spanning mathematics, advanced coding, and legal analysis show performance leaps of up to 40% compared to last year's state-of-the-art models. Industry experts believe this breakthrough will accelerate the adoption of autonomous AI agents in enterprise environments, particularly in fields requiring high-stakes decision-making such as finance and healthcare.</p><br/><p>However, the rapid advancement has reignited debates around AI safety and alignment, with policymakers calling for updated regulatory frameworks to manage the deployment of these highly capable systems.</p>",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "quantum-computing-milestone",
    title: "Quantum Computing Reaches 1,000 Logical Qubits Milestone",
    date: "May 10, 2026",
    author: "David Chen",
    category: "Quantum Tech",
    summary: "A major quantum computing firm announces successful error correction scaling, achieving 1,000 logical qubits and bringing commercial quantum applications closer to reality.",
    content: "<p>The race toward practical quantum computing has hit a significant milestone this week. Researchers successfully demonstrated a quantum processor featuring 1,000 logical qubits, achieved through advanced topological error correction techniques that significantly reduce the noise that has historically plagued quantum systems.</p><br/><p>This threshold is widely considered the starting point for 'quantum advantage' in commercial applications. Early access partners in the pharmaceutical and materials science industries are already utilizing the system to simulate complex molecular interactions that would take classical supercomputers millennia to process.</p><br/><p>While full-scale fault-tolerant quantum computing remains years away, this development signals a shift from theoretical research to practical, value-generating enterprise applications.</p>",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "web3-enterprise-adoption",
    title: "Global Banks Standardize on Web3 Protocols for Cross-Border Settlements",
    date: "May 5, 2026",
    author: "Sarah Jenkins",
    category: "Web3 & Blockchain",
    summary: "A coalition of top-tier global banks has officially adopted a unified blockchain protocol, drastically reducing friction and costs in international financial transfers.",
    content: "<p>The integration of decentralized technologies into traditional finance took a massive leap forward today as a consortium of fourteen major global banks announced their transition to a unified Web3 settlement layer. This customized, permissioned blockchain network promises to resolve transactions in seconds rather than days.</p><br/><p>The move is expected to eliminate billions of dollars in intermediary fees and counterparty risks annually. The protocol utilizes zero-knowledge proofs to ensure transaction privacy while maintaining regulatory compliance and auditability.</p><br/><p>Financial analysts view this as the moment blockchain technology finally delivers on its enterprise promise, moving past the speculative crypto era into robust, utility-driven infrastructure.</p>",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "spatial-computing-revolution",
    title: "Spatial Computing OS Becomes Open Source, Challenging Industry Giants",
    date: "April 28, 2026",
    author: "Marcus Thorne",
    category: "AR / VR",
    summary: "An open-source initiative releases a comprehensive spatial computing operating system, sparking a new wave of affordable AR hardware and accessible mixed-reality applications.",
    content: "<p>In a move that mirrors the impact of Linux on the server market and Android on smartphones, a coalition of independent developers has released 'OpenSpace OS'—a fully open-source operating system designed specifically for spatial computing and augmented reality headsets.</p><br/><p>The OS provides robust environment mapping, eye-tracking APIs, and gesture recognition out of the box, drastically lowering the barrier to entry for hardware manufacturers. Within days of the release, several budget-friendly headset prototypes running the software were announced by emerging tech firms.</p><br/><p>This democratization of spatial computing software is expected to challenge the walled-garden ecosystems currently dominating the AR/VR market and accelerate the development of mixed-reality applications for education and remote work.</p>",
    imageUrl: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sustainable-tech-datacenters",
    title: "Next-Gen Data Centers Achieve Net-Negative Carbon Footprints",
    date: "April 20, 2026",
    author: "Amira Patel",
    category: "Green Tech",
    summary: "Innovative cooling technologies and AI-optimized energy routing have allowed new cloud data centers to not only reach zero emissions but actively remove carbon from the atmosphere.",
    content: "<p>As the demand for computing power—driven largely by AI training—continues to surge, the tech industry has faced intense scrutiny over its environmental impact. This week, a leading cloud provider unveiled its next-generation data center design, which achieves a net-negative carbon footprint.</p><br/><p>The facility utilizes advanced immersion cooling techniques and is powered entirely by dedicated renewable micro-grids. More impressively, the waste heat generated by the servers is being captured and utilized to power direct air carbon capture (DACC) systems on-site.</p><br/><p>This integration of high-performance computing and climate tech represents a paradigm shift, proving that digital infrastructure can act as an environmental asset rather than a liability.</p>",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cybersecurity-ai-defense",
    title: "Autonomous AI Defense Systems Thwart Massive Coordinated Cyber Attack",
    date: "April 12, 2026",
    author: "James Wilson",
    category: "Cybersecurity",
    summary: "A sprawling, sophisticated ransomware attack targeting critical infrastructure was neutralized in real-time by newly deployed autonomous AI defense networks.",
    content: "<p>In what is being described as the largest cyber skirmish of the decade, a coordinated attack attempting to cripple multiple utility grids and transportation networks was successfully repelled without human intervention. The hero of the day was a newly deployed autonomous AI defense mesh.</p><br/><p>Unlike traditional security systems that rely on known threat signatures, the AI defense network utilized predictive behavioral modeling and micro-segmentation to identify and isolate the malicious actors within milliseconds of the initial breach. The system dynamically rewrote firewall rules and quarantined compromised nodes while maintaining essential services.</p><br/><p>Security experts note that the speed and complexity of modern cyber attacks have rendered human response times obsolete, making autonomous AI defense an absolute necessity for critical infrastructure.</p>",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "solid-state-battery-ev",
    title: "Solid-State Batteries Hit Mass Production, Promising 1000-Mile EV Range",
    date: "April 5, 2026",
    author: "Li Wei",
    category: "Hardware",
    summary: "Overcoming years of manufacturing hurdles, the first commercial solid-state batteries are rolling off assembly lines, set to revolutionize the electric vehicle industry.",
    content: "<p>The holy grail of battery technology has finally arrived. A prominent battery manufacturer has officially commenced mass production of solid-state cells, signaling a massive leap forward for electric vehicles and portable electronics.</p><br/><p>These new batteries replace the liquid electrolyte found in traditional lithium-ion cells with a solid ceramic material. The result is a battery that boasts twice the energy density, charges to 80% in under 10 minutes, and completely eliminates the risk of thermal runaway (battery fires).</p><br/><p>Automakers partnering with the manufacturer expect to launch flagship vehicles next year featuring unprecedented ranges exceeding 1,000 miles on a single charge, effectively eliminating range anxiety and accelerating the global transition to electric mobility.</p>",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "brain-computer-interface",
    title: "Non-Invasive Brain-Computer Interfaces Reach Consumer Market",
    date: "March 29, 2026",
    author: "Dr. Anya Sharma",
    category: "Biotech",
    summary: "A sleek, wearable neuro-headset allows users to control smart devices and type with their thoughts, bringing BCI technology out of the lab and into the living room.",
    content: "<p>Brain-Computer Interfaces (BCIs) are no longer restricted to medical applications or invasive surgical implants. Today marks the launch of the 'NeuroLink Halo,' a consumer-grade, non-invasive wearable that reads neural activity with astonishing precision.</p><br/><p>The headset uses advanced dry EEG sensors combined with machine learning algorithms to translate thought patterns into digital commands. Early reviewers have successfully demonstrated hands-free typing at 40 words per minute and seamless control of smart home ecosystems simply by concentrating on specific actions.</p><br/><p>While privacy advocates raise concerns about neural data security, the accessibility applications for individuals with motor disabilities are being hailed as revolutionary. The company has released a robust SDK, encouraging developers to build 'thought-controlled' apps.</p>",
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "5g-advanced-rollout",
    title: "5G Advanced Networks Go Live, Paving the Way for 6G Development",
    date: "March 20, 2026",
    author: "Thomas Wright",
    category: "Telecommunications",
    summary: "Telecom giants have officially flipped the switch on '5G Advanced' networks, delivering ultra-low latency and hyper-dense connectivity required for industrial automation.",
    content: "<p>The next phase of wireless connectivity, officially dubbed '5G Advanced' (or 5.5G), has been rolled out across major metropolitan areas. This upgrade significantly enhances network capacity, intelligence, and power efficiency compared to standard 5G.</p><br/><p>Key features include sub-millisecond latency and precise 3D positioning capabilities, which are critical for the deployment of autonomous vehicle fleets and complex robotic automation in manufacturing. The network also utilizes AI at the edge to dynamically allocate bandwidth based on real-time demand.</p><br/><p>Industry leaders note that 5G Advanced acts as the crucial stepping stone toward 6G, establishing the infrastructure and standards necessary for the eventual integration of immersive extended reality (XR) and holographic communications.</p>",
    imageUrl: "https://images.unsplash.com/photo-1614064641913-a5323ea1f222?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fusion-energy-net-gain",
    title: "Commercial Fusion Reactor Prototype Sustains Net-Gain Reaction",
    date: "March 15, 2026",
    author: "Rachel Dawson",
    category: "Energy",
    summary: "A privately funded fusion energy startup has successfully maintained a net-positive energy reaction for over an hour, a monumental step toward limitless clean energy.",
    content: "<p>In a historic achievement for physics and clean energy, a commercial fusion prototype has successfully sustained a burning plasma state with a Q-factor greater than 1 (net energy gain) for exactly 72 minutes.</p><br/><p>The reactor utilizes a novel compact tokamak design paired with high-temperature superconducting magnets, which allowed the team to achieve the immense pressures and temperatures required for sustained fusion in a much smaller footprint than traditional experimental reactors.</p><br/><p>While grid-scale commercial deployment is still projected to be a decade away, this sustained reaction proves the viability of the company's approach and has triggered a massive influx of funding aimed at building the first demonstration power plant by 2030.</p>",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  }
];
