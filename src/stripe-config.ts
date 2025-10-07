export const products = {
  'pack-complet': {
    id: 'prod_SGZuiXy15nQG06',
    priceId: 'price_1RM2m0A34r1a8Q1JMh5OZ2MY',
    name: "Pack Complet Guides",
    description: "Contiens : Trouver son bien rentable, le Guide Accès au crédit immobilier et le Guide Optimisation fiscales et juridiques",
    mode: 'payment',
    price: 560
  },
  'coaching-premium': {
    id: 'prod_SGZqAaGhWNid0G',
    priceId: 'price_1RM2gwA34r1a8Q1JM0Sb9VCi',
    name: "Package Coaching",
    description: "Un accompagnement complet et personnalisé pour réussir votre investissement",
    mode: 'payment',
    price: 2000
  },
  'analyse-express': {
    id: 'prod_SGZq14sXcVIHCO',
    priceId: 'price_1RM2gMA34r1a8Q1J69yW2OLF',
    name: "L'analyse express de bien",
    description: "Une analyse approfondie de votre bien pour une décision éclairée",
    mode: 'payment',
    price: 500
  },
  'guide-immobilier': {
    id: 'prod_SGJrV0S2rwbkUz',
    priceId: 'price_1RLnDpA34r1a8Q1JMUDPDQNY',
    name: "Trouver son bien rentable",
    description: "Guide complet pour identifier et analyser les biens à fort potentiel",
    mode: 'payment',
    price: 200
  },
  'guide-credit-non-resident': {
    id: 'prod_SGJqLkZVR3NT9g',
    priceId: 'price_1RLnCgA34r1a8Q1J0Gm4csuo',
    name: "Guide Accès au crédit immobilier pour Non-résident",
    description: "Découvrez comment obtenir les meilleures conditions de financement en tant que non-résident",
    mode: 'payment',
    price: 490
  },
  'guide-fiscal': {
    id: 'prod_SGJjjRrB3M5av7',
    priceId: 'price_1RLn6BA34r1a8Q1J3QriHnct',
    name: "Guide Optimisations Fiscales et Juridiques",
    description: "Maîtrisez la fiscalité française en tant que non-résident",
    mode: 'payment',
    price: 250
  }
} as const;

export type ProductId = keyof typeof products;