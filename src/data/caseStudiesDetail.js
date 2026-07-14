/** Deep-dive case study copy (EN / FR) — DeepSleep AI & SICAM */

export const caseStudiesDetail = {
  en: {
    deepsleep: {
      name: "DeepSleep AI",
      tag: "Sleep staging · Biomedical AI · 1st prize DL (FSBM)",
      problem:
        "Manual sleep scoring from polysomnography is slow and expert-dependent. Clinics need automated staging from EOG (electro-oculography) that is accurate enough for triage and fast enough for interactive use—including on constrained hardware (CPU / NPU).",
      solution:
        "Built an end-to-end pipeline: MNE preprocessing of EOG epochs (AASM stages W/N1/N2/N3/REM), dual deep models (CNN+Bi-LSTM for peak accuracy, CNN-only for NPU), OpenVINO FP16 export, and a clinical DeepSleep AI app (Next.js + FastAPI, Streamlit legacy) for upload, hypnogram, and metrics.",
      archFe:
        "DeepSleep AI clinical UI — Next.js dashboards, charts, and hypnogram; Streamlit legacy for rapid demos.",
      archBe:
        "Python training (TensorFlow/Keras) + FastAPI inference service with OpenVINO (CPU/GPU/NPU auto-detect).",
      archDb:
        "Sleep-EDF signals & labels, subject-wise splits, exported Keras checkpoints and OpenVINO IR (.xml/.bin).",
      challenges:
        "Subject leakage in splits, class imbalance across stages, NPU limits on recurrent ops (forced a parallel CNN-only path), and keeping clinical UX clear while exposing model confidence.",
      results:
        "Up to ~91.6% indicative accuracy; CNN NPU path ~85.9% hold-out with κ ≈ 0.76 and ~5 650 epochs/s on Intel NPU. Awarded 1st prize — best deep learning project at licence level (FSBM).",
    },
    sicam: {
      name: "SICAM",
      tag: "Computer vision · Moroccan heritage garments · PFE",
      problem:
        "Generic fashion datasets ignore Moroccan traditional clothing. Without a curated, consensus-labeled corpus and culturally aware taxonomy, classifiers cannot reliably identify garment types (Caftan, Takchita, …) or heritage Caftan styles.",
      solution:
        "Designed a Bronze→Gold pipeline: automated scraping (e-commerce / Pinterest / Wikimedia), collaborative labeling platform with multi-annotator consensus, then cascade models — TYPE classifier (6 classes) followed by heritage Caftan style recognition (7 styles) when Caftan is detected — shipped as a live demo API/web app.",
      archFe:
        "Public classification demo (image upload → cascade prediction) on Railway + SICAM Labeling Platform (React/Vite) for annotation.",
      archBe:
        "Python pipeline (scrape, dedup, train, FastAPI serve) with EfficientNet TYPE/patrimoine models; Laravel API for labeling workflows.",
      archDb:
        "Staging / Gold image datasets, master CSVs, Cloudinary assets, MySQL for annotators, votes, and consensus state.",
      challenges:
        "Noisy web images, cultural taxonomy design, consensus thresholds for gold labels, domain shift between scrapers and real photos, and keeping TYPE vs patrimoine tracks independent yet cascaded at inference.",
      results:
        "Live demo at sicam-production.up.railway.app — TYPE test accuracy ~77.9% (EfficientNet-B2); heritage track for 7 Caftan styles; labeling platform in production for sustainable dataset growth.",
    },
  },
  fr: {
    deepsleep: {
      name: "DeepSleep AI",
      tag: "Stades du sommeil · IA biomédicale · 1er prix DL (FSBM)",
      problem:
        "Le scoring manuel du sommeil à partir de la polysomnographie est long et dépend d’experts. Les équipes cliniques ont besoin d’un staging automatique à partir de l’EOG (électro-oculographie), assez précis pour le triage et assez rapide pour un usage interactif — y compris sur matériel contraint (CPU / NPU).",
      solution:
        "Pipeline bout en bout : prétraitement MNE des époques EOG (stades AASM W/N1/N2/N3/REM), deux modèles deep (CNN+Bi-LSTM pour la précision, CNN pur pour le NPU), export OpenVINO FP16, et application clinique DeepSleep AI (Next.js + FastAPI, Streamlit legacy) pour upload, hypnogramme et métriques.",
      archFe:
        "UI clinique DeepSleep AI — dashboards Next.js, graphiques et hypnogramme ; Streamlit legacy pour les démos rapides.",
      archBe:
        "Entraînement Python (TensorFlow/Keras) + service d’inférence FastAPI avec OpenVINO (détection auto CPU/GPU/NPU).",
      archDb:
        "Signaux & labels Sleep-EDF, splits par sujet, checkpoints Keras et IR OpenVINO (.xml/.bin).",
      challenges:
        "Fuite de sujets dans les splits, déséquilibre des classes, limites NPU sur les ops récurrentes (chemin CNN parallèle obligatoire), et UX clinique claire avec exposition de la confiance du modèle.",
      results:
        "Jusqu’à ~91,6 % d’accuracy indicative ; chemin CNN NPU ~85,9 % hold-out (κ ≈ 0,76) et ~5 650 époques/s sur NPU Intel. 1er prix — meilleur projet deep learning niveau licence (FSBM).",
    },
    sicam: {
      name: "SICAM",
      tag: "Vision par ordinateur · Patrimoine vestimentaire · PFE",
      problem:
        "Les datasets fashion génériques ignorent les vêtements traditionnels marocains. Sans corpus annoté par consensus ni taxonomie culturelle, un classifieur ne peut pas identifier de façon fiable les types (Caftan, Takchita, …) ni les styles Caftan patrimoine.",
      solution:
        "Pipeline Bronze→Gold : scraping automatisé (e-commerce / Pinterest / Wikimedia), plateforme de labellisation collaborative avec consensus multi-annotateurs, puis modèles en cascade — classifieur TYPE (6 classes) puis styles Caftan patrimoine (7) si Caftan détecté — livrés en démo API / web.",
      archFe:
        "Démo de classification publique (upload → prédiction cascade) sur Railway + SICAM Labeling Platform (React/Vite) pour l’annotation.",
      archBe:
        "Pipeline Python (scrape, dedup, train, FastAPI) avec EfficientNet TYPE/patrimoine ; API Laravel pour les workflows de labellisation.",
      archDb:
        "Datasets images Staging / Gold, CSV master, assets Cloudinary, MySQL pour annotateurs, votes et consensus.",
      challenges:
        "Images web bruitées, conception de la taxonomie culturelle, seuils de consensus gold, décalage domaine scrapers ↔ photos réelles, et tracks TYPE / patrimoine indépendants mais cascaded à l’inférence.",
      results:
        "Démo live sicam-production.up.railway.app — accuracy TYPE ~77,9 % (EfficientNet-B2) ; track patrimoine 7 styles Caftan ; plateforme de labellisation en production pour enrichir le dataset.",
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
