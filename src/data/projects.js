export const projects = [
  {
    id: "learnhub",
    title: "LearnHub",
    titleFr: "LearnHub",
    domain: "fullstack",
    categoryKey: "elearning",
    description:
      "Fullstack e-learning web application with admin, instructor, and student portals and a complete course management system.",
    descriptionFr:
      "Application web e-learning fullstack avec espaces admin, formateur et étudiant et gestion complète des cours.",
    stack: ["Laravel", "React", "MySQL", "REST API"],
    github: "https://github.com/818MF",
    demo: null,
    previewFrom: "from-cyan-500/30",
    previewTo: "to-emerald-600/25",
  },
  {
    id: "elearning-2",
    title: "E-learning Platform",
    titleFr: "Plateforme e-learning",
    domain: "fullstack",
    categoryKey: "elearning",
    description:
      "Second e-learning system with improved architecture, UX focus, and scalability for growing content and users.",
    descriptionFr:
      "Deuxième plateforme e-learning avec architecture renforcée, UX soignée et scalabilité.",
    stack: ["Laravel", "React", "MySQL"],
    github: "https://github.com/818MF",
    demo: null,
    previewFrom: "from-teal-500/25",
    previewTo: "to-cyan-500/30",
  },
  {
    id: "infounder-blog",
    title: "INFOUNDER Blog Website",
    titleFr: "Site blog INFOUNDER",
    domain: "fullstack",
    categoryKey: "blog",
    description:
      "Professional company blog developed during internship to present services and insights.",
    descriptionFr:
      "Blog professionnel développé en stage pour présenter les services de l’entreprise.",
    stack: ["Laravel", "HTML/CSS", "JavaScript"],
    github: "https://github.com/818MF",
    demo: null,
    previewFrom: "from-emerald-500/20",
    previewTo: "to-cyan-500/25",
  },
  {
    id: "perfume-shop",
    title: "Perfume E-commerce Website",
    titleFr: "E-commerce parfumerie",
    domain: "fullstack",
    categoryKey: "ecommerce",
    description:
      "Advanced e-commerce platform with product management, cart, orders, and a polished UI/UX.",
    descriptionFr:
      "Plateforme e-commerce avancée : catalogue, panier, commandes et UI/UX soignée.",
    stack: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    github: "https://github.com/818MF",
    demo: null,
    previewFrom: "from-cyan-400/25",
    previewTo: "to-green-500/20",
  },
  {
    id: "perfume-admin",
    title: "Flutter Admin App (Perfume)",
    titleFr: "App admin Flutter (Parfumerie)",
    domain: "fullstack",
    categoryKey: "mobile",
    description:
      "Mobile admin application for managing the perfume e-commerce backend and operations.",
    descriptionFr:
      "Application mobile d’administration pour la gestion du e-commerce parfumerie.",
    stack: ["Flutter", "REST API"],
    github: "https://github.com/818MF",
    demo: null,
    previewFrom: "from-emerald-500/30",
    previewTo: "to-teal-600/20",
  },
  {
    id: "resin",
    title: "Resin Workshop Website",
    titleFr: "Site atelier résine",
    domain: "fullstack",
    categoryKey: "web",
    description:
      "Showcase website for a creative workshop with service presentation and design-forward layout.",
    descriptionFr:
      "Site vitrine pour un atelier créatif : services et mise en page orientée design.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/818MF",
    demo: null,
    previewFrom: "from-green-500/15",
    previewTo: "to-cyan-500/25",
  },
  {
    id: "spa",
    title: "Spa Website",
    titleFr: "Site spa",
    domain: "fullstack",
    categoryKey: "spa",
    description:
      "Full professional spa website with service listings and booking-oriented interface.",
    descriptionFr:
      "Site spa professionnel : prestations et interface orientée réservation.",
    stack: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/818MF",
    demo: null,
    previewFrom: "from-cyan-500/35",
    previewTo: "to-emerald-500/15",
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation API",
    titleFr: "API de recommandation de films",
    domain: "fullstack",
    categoryKey: "api",
    description:
      "REST API built with Node.js for movie recommendations, with RabbitMQ for asynchronous messaging between services and Docker for reproducible, containerized deployment.",
    descriptionFr:
      "API REST en Node.js pour la recommandation de films, avec RabbitMQ pour la messagerie asynchrone entre services et Docker pour un déploiement conteneurisé reproductible.",
    stack: ["Node.js", "REST API", "RabbitMQ", "Docker"],
    github: "https://github.com/818MF",
    demo: null,
    previewFrom: "from-teal-500/30",
    previewTo: "to-slate-600/20",
  },
  {
    id: "spam-detection-demo",
    title: "Spam message classifier",
    titleFr: "Classifieur de messages spam",
    domain: "ai",
    categoryKey: "nlp",
    description:
      "Interactive heuristic classifier in this portfolio: token scoring, confidence output, and UX for explainable triage—pattern for plugging in a real ML model later.",
    descriptionFr:
      "Classifieur heuristique interactif dans ce portfolio : score par jetons, confiance et UX pour un triage explicable—base pour brancher un vrai modèle ML.",
    stack: ["JavaScript", "Heuristics", "UX"],
    github: "https://github.com/818MF",
    demo: null,
    internalDemoId: "ai-action",
    metrics: [
      { label: "Demo confidence", labelFr: "Confiance (démo)", value: "Dynamic" },
      { label: "Latency", labelFr: "Latence", value: "< 5 ms" },
      { label: "Labels", labelFr: "Classes", value: "2" },
    ],
    resultTags: [
      { label: "Explainable scores", labelFr: "Scores explicables" },
      { label: "Real-time UI", labelFr: "UI temps réel" },
    ],
  },
  {
    id: "data-analysis-pipeline",
    title: "Retail data analysis",
    titleFr: "Analyse de données retail",
    domain: "ai",
    categoryKey: "analytics",
    description:
      "Exploratory analysis workflow: cleaning with Pandas, aggregations, cohort-style metrics, and charts to support inventory and promotion decisions.",
    descriptionFr:
      "Workflow d’analyse exploratoire : nettoyage avec Pandas, agrégations, métriques type cohorte et graphiques pour stock et promotions.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/818MF",
    demo: null,
    metrics: [
      { label: "Rows cleaned", labelFr: "Lignes nettoyées", value: "12k+" },
      { label: "Features", labelFr: "Variables", value: "28" },
      { label: "Run time", labelFr: "Exécution", value: "~2 s" },
    ],
    resultTags: [
      { label: "Trend detection", labelFr: "Détection de tendances" },
      { label: "Exportable charts", labelFr: "Graphiques exportables" },
    ],
  },
]
