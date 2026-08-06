import React from 'react';

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Schéma Organisation — STMF
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "STMF",
  "url": "https://stmf-gestion-locative.com",
  "description": "Spécialiste de l'externalisation comptable et administrative en gestion locative depuis Madagascar.",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "stmfanilo@gmail.com",
    "contactType": "customer service",
    "availableLanguage": "French"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61573559982621"
  ],
  "foundingDate": "2023",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  }
};

// Schéma Site Web
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "STMF Gestion Locative",
  "url": "https://stmf-gestion-locative.com",
  "inLanguage": "fr-FR",
  "description": "Externalisation comptable et administrative en gestion locative"
};

// Schéma Services FAQ (enrichit les résultats Google)
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que STMF propose comme services ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "STMF propose de la sous-traitance comptable (rapprochements bancaires, factures, indexation des loyers), de la sous-traitance administrative (dossiers locataires, relances, GED) et de la relation clients (accueil téléphonique, suivi des entretiens) pour les administrateurs de biens français."
      }
    },
    {
      "@type": "Question",
      "name": "Où est basée l'équipe STMF ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "STMF est basée à Madagascar et accompagne les professionnels de la gestion locative en France depuis 2023 dans l'externalisation de leurs tâches administratives et comptables."
      }
    },
    {
      "@type": "Question",
      "name": "Comment contacter STMF ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous pouvez contacter STMF par email à stmfanilo@gmail.com ou via leur page Facebook."
      }
    }
  ]
};
