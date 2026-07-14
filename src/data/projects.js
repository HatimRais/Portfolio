export const projects = [
  {
    id: "sommeil-eog-ia",
    title: "DeepSleep AI (Sommeil EOG)",
    titleFr: "DeepSleep AI (Sommeil EOG)",
    domain: "ai",
    categoryKey: "analytics",
    description:
      "Sleep stage classification from EOG signals (CNN/Bi-LSTM & CNN-only), OpenVINO acceleration, and a clinical DeepSleep AI app (Next.js + FastAPI / Streamlit). 1st prize — best deep learning project at licence level (FSBM).",
    descriptionFr:
      "Classification des stades du sommeil à partir du signal EOG (CNN/Bi-LSTM & CNN pur), accélération OpenVINO, et app clinique DeepSleep AI (Next.js + FastAPI / Streamlit). 1er prix — meilleur projet deep learning niveau licence (FSBM).",
    stack: ["Python", "TensorFlow", "OpenVINO", "Next.js", "FastAPI", "MNE"],
    github: "https://github.com/HatimRais",
    demo: "https://deepsleepai.streamlit.app/",
    metrics: [
      { label: "Sleep stages", labelFr: "Stades du sommeil", value: "5" },
      { label: "Best accuracy", labelFr: "Meilleure accuracy", value: "91.6%" },
      { label: "Award", labelFr: "Récompense", value: "1st / 1er prix FSBM" },
    ],
    resultTags: [
      { label: "Clinical dashboard", labelFr: "Dashboard clinique" },
      { label: "NPU / OpenVINO", labelFr: "NPU / OpenVINO" },
    ],
    previewFrom: "from-blue-500/30",
    previewTo: "to-cyan-500/20",
  },
  {
    id: "sicam-caftan-ai",
    title: "SICAM — Classification IA (PFE)",
    titleFr: "SICAM — Classification IA (PFE)",
    domain: "ai",
    categoryKey: "analytics",
    description:
      "Live computer-vision classifier for Moroccan traditional clothing: cascade TYPE (6 classes) → heritage Caftan styles (7), with image upload demo. Built with EfficientNet, scraping, and Bronze→Gold dataset pipelines.",
    descriptionFr:
      "Classifieur live de vision par ordinateur pour les vêtements traditionnels marocains : cascade TYPE (6 classes) → styles Caftan patrimoine (7), avec démo upload d’image. EfficientNet, scraping et pipelines Bronze→Gold.",
    stack: ["Python", "TensorFlow", "OpenCV", "FastAPI", "EfficientNet", "Selenium"],
    github: "https://github.com/HatimRais",
    demo: "https://sicam-production.up.railway.app/",
    metrics: [
      { label: "Type accuracy", labelFr: "Accuracy type", value: "77.9%" },
      { label: "Garment classes", labelFr: "Classes vêtement", value: "6" },
      { label: "Heritage styles", labelFr: "Styles patrimoine", value: "7" },
    ],
    resultTags: [
      { label: "Live demo", labelFr: "Démo live" },
      { label: "PFE FSBM", labelFr: "PFE FSBM" },
    ],
    previewFrom: "from-violet-500/25",
    previewTo: "to-indigo-500/20",
  },
  {
    id: "sicam-labeling-platform",
    title: "SICAM Labeling Platform",
    titleFr: "SICAM Labeling Platform",
    domain: "fullstack",
    categoryKey: "web",
    description:
      "Collaborative labeling platform for Moroccan garment datasets: Tinder-style annotation, consensus voting, Admin / Moderator / Annotator roles, gamified badges, FR / EN / AR (RTL), analytics, and dataset export.",
    descriptionFr:
      "Plateforme d’annotation collaborative pour datasets de vêtements marocains : flux type Tinder, consensus, rôles Admin / Modérateur / Annotateur, badges, FR / EN / AR (RTL), analytics et export.",
    stack: ["Laravel", "React", "Vite", "MySQL", "Tailwind CSS", "Cloudinary"],
    github: "https://github.com/HatimRais/SICAM_Labeling_Platform",
    demo: "https://sicam-labeling-platform.vercel.app/",
    previewFrom: "from-amber-500/25",
    previewTo: "to-orange-600/20",
  },
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
    github: "https://github.com/HatimRais",
    demo: null,
    previewFrom: "from-cyan-500/30",
    previewTo: "to-emerald-600/25",
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
    github: "https://github.com/HatimRais",
    demo: "https://perfume-dupes-production.up.railway.app/",
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
    github: "https://github.com/HatimRais",
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
    github: "https://github.com/HatimRais",
    demo: "https://atelier-resine.netlify.app/",
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
    github: "https://github.com/HatimRais",
    demo: "https://www.moonspa-marrakech.com/",
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
    github: "https://github.com/HatimRais",
    demo: "https://movie-library-rust-zeta.vercel.app/",
    previewFrom: "from-teal-500/30",
    previewTo: "to-slate-600/20",
  },
  {
    id: "sweet-delights",
    title: "Sweet Delights Pastry Shop",
    titleFr: "Sweet Delights Patisserie",
    domain: "fullstack",
    categoryKey: "web",
    description:
      "Multilingual Next.js showcase website for a pastry shop with FR/EN/AR localization, menu presentation, and SEO-ready page structure.",
    descriptionFr:
      "Site vitrine Next.js multilingue pour une patisserie avec localisation FR/EN/AR, presentation du menu et structure SEO prete.",
    stack: ["Next.js", "React", "JavaScript", "i18n", "SEO"],
    github: "https://github.com/HatimRais",
    demo: "https://pastry-shop-omega.vercel.app/",
    previewFrom: "from-rose-400/25",
    previewTo: "to-amber-500/20",
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
    github: "https://github.com/HatimRais",
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
    github: "https://github.com/HatimRais",
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
