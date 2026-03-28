/** Deep-dive case study copy (EN / FR) — LearnHub & Perfume e-commerce */

export const caseStudiesDetail = {
  en: {
    learnhub: {
      name: "LearnHub",
      tag: "E-learning platform",
      problem:
        "Organizations needed a single place to run courses, manage cohorts, and separate responsibilities between admins, instructors, and students—without juggling disconnected tools.",
      solution:
        "Designed a fullstack product with role-based portals: Laravel for robust APIs, auth, and business rules; React for fast, component-driven UIs; MySQL for relational course and enrollment data.",
      archFe: "React SPA: modular screens, forms, and dashboards per role.",
      archBe: "Laravel: REST APIs, policies, validation, and service-oriented modules.",
      archDb: "MySQL: normalized schema for users, courses, modules, and progress.",
      challenges:
        "Balancing permission models across three roles, keeping enrollment and content state consistent, and structuring APIs so the frontend could evolve without breaking contracts.",
      results:
        "A cohesive platform for course delivery and administration, clearer ownership of features per role, and a foundation that scales with more courses and users.",
    },
    perfume: {
      name: "Perfume E-commerce",
      tag: "E-commerce",
      problem:
        "Retailers required a modern storefront with reliable catalog management, cart/checkout flow, and order handling—while keeping the experience fast and trustworthy for shoppers.",
      solution:
        "Built a Laravel + React stack: secure backend for products, inventory, and orders; React + Tailwind for a responsive, conversion-focused UI; MySQL as the source of truth for transactions.",
      archFe: "React + Tailwind: product grids, cart, checkout steps, and admin-aligned UX.",
      archBe: "Laravel: REST endpoints, order pipelines, and integration hooks for admin tools.",
      archDb: "MySQL: products, categories, carts, orders, and stock-related tables.",
      challenges:
        "Keeping cart and stock in sync under concurrent use, structuring checkout for fewer drop-offs, and maintaining clean separation between public shop and admin operations.",
      results:
        "End-to-end shopping flow from browse to order, maintainable catalog and order management, and UI patterns reusable across similar commerce projects.",
    },
  },
  fr: {
    learnhub: {
      name: "LearnHub",
      tag: "Plateforme e-learning",
      problem:
        "Les structures avaient besoin d’un espace unique pour dispenser des cours, gérer les promotions et séparer les rôles admin, formateur et étudiant—sans multiplier les outils.",
      solution:
        "Conception d’un produit fullstack avec portails par rôle : Laravel pour les API, l’auth et la logique métier ; React pour des interfaces modulaires ; MySQL pour les données cours et inscriptions.",
      archFe: "SPA React : écrans, formulaires et tableaux de bord par rôle.",
      archBe: "Laravel : API REST, politiques d’accès, validation et modules services.",
      archDb: "MySQL : schéma normalisé utilisateurs, cours, modules et progression.",
      challenges:
        "Harmoniser les droits sur trois rôles, garantir la cohérence des inscriptions et du contenu, et stabiliser les contrats d’API pour faire évoluer le front sans régressions.",
      results:
        "Une plateforme unifiée pour la formation et l’administration, une séparation claire des fonctionnalités par rôle, et une base prête à accueillir plus de cours et d’utilisateurs.",
    },
    perfume: {
      name: "E-commerce parfumerie",
      tag: "E-commerce",
      problem:
        "Besoin d’une vitrine moderne avec catalogue fiable, panier / commande et suivi des ventes—tout en offrant une expérience fluide et rassurante.",
      solution:
        "Stack Laravel + React : backend sécurisé pour produits, stocks et commandes ; React + Tailwind pour une UI responsive orientée conversion ; MySQL comme référentiel transactionnel.",
      archFe: "React + Tailwind : grilles produit, panier, tunnel de commande.",
      archBe: "Laravel : API REST, flux commandes et points d’extension pour l’admin.",
      archDb: "MySQL : produits, catégories, paniers, commandes et stock.",
      challenges:
        "Synchroniser panier et stock en usage concurrent, simplifier le tunnel de commande et isoler proprement boutique publique et back-office.",
      results:
        "Parcours complet de la découverte à la commande, gestion catalogue / commandes maintenable, et patterns UI réutilisables pour d’autres sites e-commerce.",
    },
  },
}

export const caseStudySteps = [
  { key: "problem", icon: "target" },
  { key: "solution", icon: "spark" },
  { key: "architecture", icon: "layers" },
  { key: "challenges", icon: "alert" },
  { key: "results", icon: "check" },
]
