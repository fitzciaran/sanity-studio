const displayTranslations = {
  en: {
    "Screen Size and Resolution": "Screen Size and Resolution",
    "Screen Type": "Screen Type",
    "Blue Light Reduction": "Blue Light Reduction",
    "Bonded Glass": "Bonded Glass",
    "Aspect Ratio": "Aspect Ratio",
    "Display Area": "Display Area",
    "Display Colors": "Display Colors",
    "LCD Viewing Angle": "LCD Viewing Angle",
    "LCD Response Time": "LCD Response Time",
    "LCD Refresh Rate": "LCD Refresh Rate",
    "LCD Brightness": "LCD Brightness (Brightness of display without cover glass)",
    "LED Lifespan": "LED Lifespan",
    "Contrast Ratio": "Contrast Ratio",
    Brightness: "Brightness",
    "Ambient Light Sensor": "Ambient Light Sensor",
    "Glass Hardness": "Glass Hardness",
    "Glass Type": "Glass Type",
    "Glass Thickness": "Glass Thickness",
  },
  fr: {
    "Screen Size and Resolution": "Taille et résolution de l'écran",
    "Screen Type": "Type d'écran",
    "Blue Light Reduction": "Réduction de la lumière bleue",
    "Bonded Glass": "Verre collé",
    "Aspect Ratio": "Format d'image",
    "Display Area": "Zone d'affichage",
    "Display Colors": "Couleurs d'affichage",
    "LCD Viewing Angle": "Angle de visionnage du LCD",
    "LCD Response Time": "Temps de réponse LCD",
    "LCD Refresh Rate": "Taux de rafraîchissement LCD (ENI)",
    "LCD Brightness": "Luminosité LCD (Luminosité de l'écran 455 cd/m² sans vitre de protection)",
    "LED Lifespan": "Durée de vie des DEL",
    "Contrast Ratio": "Facteur de contraste",
    Brightness: "Luminosité",
    "Ambient Light Sensor": "Capteur de lumière ambiante",
    "Glass Hardness": "Résistance du verre",
    "Glass Type": "Type de verre",
    "Glass Thickness": "Épaisseur du verre",
  },
};
const physicalSpecsTranslations = {
  en: {
    "Panel Dimensions": "Panel Dimensions",
    "Packed Dimensions": "Packed Dimensions",
    "Panel Net Weight": "Panel Net Weight",
    "Packed Weight": "Packed Weight",
    "VESA Mount Point": "VESA Mount Point",
    "Wall Mount* Dimensions": "Wall Mount* Dimensions",
  },
  fr: {
    "Panel Dimensions": "Dimensions de l'ENI ",
    "Packed Dimensions": "Dimensions du produit emballé",
    "Panel Net Weight": "Poids net de l'ENI",
    "Packed Weight": "Poids emballé",
    "VESA Mount Point": "VESA Mount Point",
    "Wall Mount* Dimensions": "Dimensions de fixation murale*",
  },
};
const computingTranslations = {
  en: {
    "Operating System": "Operating System",
    RAM: "RAM",
    "Internal Storage": "Internal Storage",
    CPU: "CPU",
    GPU: "GPU",
    "Trusted Platform Module": "Trusted Platform Module",
    "Cloud Based User Profiles": "Cloud Based User Profiles",
  },
  fr: {
    "Operating System": "Système d'exploitation",
    RAM: "RAM",
    "Internal Storage": "Stockage interne",
    CPU: "CPU",
    GPU: "GPU",
    "Trusted Platform Module": "Module de plate-forme de confiance",
    "Cloud Based User Profiles": "Profils d'utilisateurs basés sur le cloud",
  },
};
const panelManagementTranslations = {
  en: { "OTA Updates": "OTA Updates", "Promethean Admin Tools": "Promethean Admin Tools" },
  fr: {
    "OTA Updates": "Mises à jour OTA",
    "Promethean Admin Tools": "Outils d'administration Promethean",
  },
};
const miscTranslations = {
  en: {
    "Dual Front-facing Speakers": "Dual Front-facing Speakers",
    "What’s in the Box": "What’s in the Box",
    "ActivInspire® Professional Single User": "ActivInspire® Professional Single User",
  },
  fr: {
    "Dual Front-facing Speakers": "Deux enceintes frontales",
    "What’s in the Box": "Que contient la boîte ?",
    "ActivInspire® Professional Single User": "ActivInspire® Professional pour utilisateur unique",
  },
};

const powerTranslations = {
  en: {
    "Power Requirements": "Power Requirements",
    "Power Consumption (Typical)": "Power Consumption (Typical)",
    "Power Consumption (Standby)": "Power Consumption (Standby)",
    "Ultra-Quiet Fanless Design": "Ultra-Quiet Fanless Design",
  },
  fr: {
    "Power Requirements": "Exigences en matière d'alimentation",
    "Power Consumption (Typical)": "Consommation électrique (type)",
    "Power Consumption (Standby)": "Consommation électrique (en veille)",
    "Ultra-Quiet Fanless Design": "Conception sans ventilation ultrasilencieuse",
  },
};

const environmentalTranslations = {
  en: {
    "Operating Temperature": "Operating Temperature",
    "Storage Temperature": "Storage Temperature",
    "Operating Humidity": "Operating Humidity",
    "Storage Humidity": "Storage Humidity",
    "non-condensing humidity": "non-condensing humidity",
  },
  fr: {
    "Operating Temperature": "Température en fonctionnement",
    "Storage Temperature": "Température de stockage",
    "Operating Humidity": "Humidité en fonctionnement",
    "Storage Humidity": "Humidité de stockage",
    "non-condensing humidity": "sans condensation",
  },
};

const complianceTranslations = {
  en: {
    "Regulatory Certifications": "Regulatory Certifications",
    "Energy Star Certified": "Energy Star Certified",
    "Trade Agreements Act (TAA) Compliance": "Trade Agreements Act (TAA) Compliance",
  },
  fr: {
    "Regulatory Certifications": "Certifications réglementaires",
    "Energy Star Certified": "Certifié Energy Star",
    "Trade Agreements Act (TAA) Compliance": "Trade Agreements Act (TAA) Compliance",
  },
};

const connectivityKeyTranslations = {
  en: {
    "OPS Slot": "OPS Slot",
    "HDMI In (Rear)": "HDMI In (Rear)",
    "HDMI In (Front)": "HDMI In (Front)",
    "Display Port": "Display Port",
    "USB-A (Rear)": "USB-A (Rear)",
    "USB-A 2.0 (Rear)": "USB-A 2.0 (Rear)",
    "USB-A 3.2 Gen 1 (Rear)": "USB-A 3.2 Gen 1 (Rear)",
    "USB-A 3.2 Gen 1 (Front)": "USB-A 3.2 Gen 1 (Front)",
    "USB-A 3.2 Gen 1 (Touch, Rear)": "USB-A 3.2 Gen 1 (Touch, Rear)",
    "USB-A 3.2 Gen 1 (Touch, Front)": "USB-A 3.2 Gen 1 (Touch, Front)",
    "USB-B 3.2 Gen 1 (Touch, Front)": "USB-B 3.2 Gen 1 (Touch, Front)",
    "USB-C 3.2 Gen 1 (Rear)": "USB-C 3.2 Gen 1 (Rear)",
    "USB-B Touch (Front)": "USB-B Touch (Front)",
    "USB-B Touch (Rear)": "USB-B Touch (Rear)",
    "USB-A (Front)": "USB-A (Front)",
    "MicroSD Slot": "MicroSD Slot",
    "LAN In (RJ45)": "LAN In (RJ45)",
    "LAN Out (RJ45)": "LAN Out (RJ45)",
    "Wake-on-LAN": "Wake-on-LAN",
    "Wi-Fi (Client)": "Wi-Fi (Client)",
    Bluetooth: "Bluetooth",
    "HDMI Out": "HDMI Out",
    "AV-In (3.5 mm)": "AV-In (3.5 mm)",
    "Mic (3.5 mm)": "Mic (3.5 mm)",
    "Audio Out (3.5 mm)": "Audio Out (3.5 mm)",
    "RS-232": "RS-232",
    "Wireless Protocol": "Wireless Protocol",
    "Dual Band": "Dual Band",
    MIMO: "MIMO",
    Bandwidth: "Bandwidth",
    Connector: "Connector",
    Encryption: "Encryption",
    "HDMI In Details": "HDMI In Details",
    "HDMI Out Details": "HDMI Out Details",
    "USB Type": "USB Type",
    "USB 2.0": "USB 2.0",
    "USB 3.0": "USB 3.0",
    "USB Type-C": "USB Type-C",
    "Combined Audio 3.5 mm": "Combined Audio 3.5 mm",
    "Network Connectivity": "Network Connectivity",
  },
  fr: {
    "OPS Slot": "Emplacement OPS",
    "HDMI In (Rear)": "Entrée HDMI (arrière)",
    "HDMI In (Front)": "Entrée HDMI (avant)",
    "Display Port": "Port d'affichage",
    "USB-A (Rear)": "USB-A (arrière)",
    "USB-A 2.0 (Rear)": "USB-A 2.0 (arrière)",
    "USB-A 3.2 Gen 1 (Rear)": "USB-C 3.2 Gen 1 (arrière)",
    "USB-A 3.2 Gen 1 (Front)": "USB-A 3.2 Gen 1 (avant)",
    "USB-A 3.2 Gen 1 (Touch, Rear)": "USB-B 3.2 Gen 1 (tactile, avant)",
    "USB-A 3.2 Gen 1 (Touch, Front)": "USB-A 3.2 Gen 1 (tactile, avant)",
    "USB-B 3.2 Gen 1 (Touch, Front)": "USB-B 3.2 Gen 1 (tactile, avant)",
    "USB-C 3.2 Gen 1 (Rear)": "USB-C 3.2 Gen 1 (arrière)",
    "USB-B Touch (Front)": "USB-B tactile (avant)",
    "USB-B Touch (Rear)": "USB-B 3.2 (tactile, arrière)",
    "USB-A (Front)": "USB-A (Avant)",
    "MicroSD Slot": "Fente pour MicroSD",
    "LAN In (RJ45)": "Entrée LAN (RJ45)",
    "LAN Out (RJ45)": "Sortie LAN (RJ45)",
    "Wake-on-LAN": "Wake-on-LAN",
    "Wi-Fi (Client)": "Wi-Fi (Client) (Facultatif)",
    Bluetooth: "Bluetooth (Facultatif)",
    "HDMI Out": "Sortie HDMI",
    "AV-In (3.5 mm)": "Entrée AV (3,5 mm)",
    "Mic (3.5 mm)": "Micro (3,5 mm)",
    "Audio Out (3.5 mm)": "Sortie audio (3,5 mm)",
    "RS-232": "RS-232",
    "Wireless Protocol": "Protocole Sans Fil",
    "Dual Band": "Double Bande",
    MIMO: "MIMO",
    Bandwidth: "Bande Passante",
    Connector: "Connecteur",
    Encryption: "Cryptage",
    "HDMI In Details": "Détails HDMI Entrée",
    "HDMI Out Details": "Détails HDMI Sortie",
    "USB Type": "Type USB",
    "USB 2.0": "USB 2.0",
    "USB 3.0": "USB 3.0",
    "USB Type-C": "USB Type-C",
    "Combined Audio 3.5 mm": "Audio Combiné 3,5 mm",
    "Network Connectivity": "Connectivité Réseau",
  },
};

const titleTranslations = {
  en: {
    "Screen Size and Resolution": "Screen Size and Resolution",
    CONNECTIVITY: "CONNECTIVITY",
    "TECHNICAL DRAWINGS (in mm)": "TECHNICAL DRAWINGS (in mm)",
    "TECHNICAL DRAWINGS": "TECHNICAL DRAWINGS",
    DISPLAY: "DISPLAY",
    "ActivPanel 9 Wi-Fi and Bluetooth Module": "ActivPanel 9 Wi-Fi and Bluetooth Module",
    "PHYSICAL SPECIFICATIONS": "PHYSICAL SPECIFICATIONS",
    INTERACTIVITY: "INTERACTIVITY",
    COMPUTING: "COMPUTING",
    AUDIO: "AUDIO",
    POWER: "POWER",
    ENVIRONMENTAL: "ENVIRONMENTAL",
    INSTALLATION: "INSTALLATION",
    WARRANTY: "WARRANTY",
    SUPPORT: "SUPPORT",
    "COMPLIANCE & CERTIFICATION": "COMPLIANCE & CERTIFICATION",
    "PHYSICAL SPECIFICATIONS - AP9-Axx-NA": "PHYSICAL SPECIFICATIONS - AP9-Axx-NA",
    "PHYSICAL SPECIFICATIONS - AP9-Axx-V-NA": "PHYSICAL SPECIFICATIONS - AP9-Axx-V-NA",
    "PANEL MANAGEMENT": "PANEL MANAGEMENT",
    "PACKED CONTENTS": "PACKED CONTENTS",
    "EDUCATION SOFTWARE LICENSE": "EDUCATION SOFTWARE LICENSE",
    "Product Specifications": "Product Specifications",
  },
  fr: {
    "Screen Size and Resolution": "Taille et résolution de l'écran",
    CONNECTIVITY: "CONNECTIVITÉ",
    "TECHNICAL DRAWINGS (in mm)": "DESSINS TECHNIQUES (en mm)",
    "TECHNICAL DRAWINGS": "DESSINS TECHNIQUES",
    DISPLAY: "ÉCRAN",
    "ActivPanel 9 Wi-Fi and Bluetooth Module": "Module Wi-Fi et Bluetooth ActivPanel 9",
    "PHYSICAL SPECIFICATIONS": "Le PHYSICAL SPECIFICATIONS",
    INTERACTIVITY: "INTERACTIVITÉ",
    COMPUTING: "INFORMATIQUE",
    AUDIO: "AUDIO",
    POWER: "ALIMENTATION",
    ENVIRONMENTAL: "ENVIRONNEMENT",
    INSTALLATION: "INSTALLATION",
    WARRANTY: "GARANTIE",
    SUPPORT: "ASSISTANCE",
    "COMPLIANCE & CERTIFICATION": "CONFORMITÉ & CERTIFICATION",
    "PHYSICAL SPECIFICATIONS - AP9-Axx-NA": "CARACTÉRISTIQUES PHYSIQUES - AP9-Axx-NA",
    "PHYSICAL SPECIFICATIONS - AP9-Axx-V-NA": "CARACTÉRISTIQUES PHYSIQUES - AP9-Axx-V-NA",
    "PANEL MANAGEMENT": "GESTION DES ENI",
    "PACKED CONTENTS": "CONTENU DE L'EMBALLAGE",
    "EDUCATION SOFTWARE LICENSE": "LICENCE POUR LOGICIEL D'ÉDUCATION",
    "Product Specifications": "SPÉCIFICATIONS PRODUIT",
  },
};

const footerTranslations = {
  en: "©2024 Promethean. All Rights Reserved. Promethean, the Promethean logo, ActivPanel, ActivSync, ActivInspire, ActivConnect, ActivSoundBar, ClassFlow and Vellum are trademarks or registered trademarks of Promethean Limited in the United Kingdom, United States, and other countries around the world. All other product and company names are trademarks or registered trademarks of their respective holders. Unless specifically identified as such, Promethean’s use of third-party trademarks does not indicate any relationship, sponsorship, or endorsement between Promethean and the owners of these trademarks. Applicable Terms and Conditions for warranty and support available at PrometheanWorld.com/warranty. All weights and dimensions are approximate. Product specifications are subject to change without notice. PrometheanWorld.com.",
  fr: "©2024 Prométhéen. Tous droits réservés. Promethean, le logo Promethean, ActivPanel, ActivSync, ActivInspire, ActivConnect, ActivSoundBar, ClassFlow et Vellum sont des marques commerciales ou déposées de Promethean Limited au Royaume-Uni, aux États-Unis et dans d'autres pays du monde. Tous les autres noms de produits et de sociétés sont des marques commerciales ou des marques déposées de leurs détenteurs respectifs. Sauf indication contraire spécifique, l’utilisation par Promethean de marques tierces n’indique aucune relation, parrainage ou approbation entre Promethean et les propriétaires de ces marques. Conditions générales applicables pour la garantie et l’assistance disponibles sur PrometheanWorld.com/warranty. Tous les poids et les dimensions sont approximatifs. Les spécifications du produit sont sujettes à changement sans préavis. PrometheanWorld.com.",
};

const symbolTranslations = {
  en: {
    GB: "GB",
    MM: "mm",
    hours: "hours",
    mm: "mm",
    ms: "ms",
    hz: "hz",
    "m/s": "m/s",
  },
  fr: {
    GB: "Go",
    MM: "mm",
    hours: "heures",
    mm: "mm",
    ms: "ms",
    hz: "hz",
    "m/s": "m/s",
  },
};

// export const humidityText = {
//   en: "humidity",
//   it: "umidità",
//   fr: "humidité",
// };

export const hoursTranslation = {
  en: "hours",
  it: "ore",
  fr: "heures",
};

export const temperatureUnit = {
  en: "°C",
  it: "°C",
  fr: "°C",
};

export const fahrenheitUnit = {
  en: "°F",
  it: "°F",
  fr: "°F",
};

export const yesNo = { en: ["Yes", "No"], fr: ["Oui", "Non"] };
export const included = { en: ["Included", "Not Included"], fr: ["Inclus", "Non Inclus"] };

export function localizeTitle(key, language) {
  return titleTranslations[language]?.[key] || titleTranslations.en[key] || key;
}

export function localizeConnectivityKey(key, language) {
  return connectivityKeyTranslations[language]?.[key] || connectivityKeyTranslations.en[key] || key;
}

export function localizeDisplayKey(key, language) {
  return displayTranslations[language]?.[key] || displayTranslations.en[key] || key;
}
export function localizeComputingKey(key, language) {
  return computingTranslations[language]?.[key] || computingTranslations.en[key] || key;
}

export function localizeEnvironmentalKey(key, language) {
  return environmentalTranslations[language]?.[key] || environmentalTranslations.en[key] || key;
}
export function localizeMiscKey(key, language) {
  return miscTranslations[language]?.[key] || miscTranslations.en[key] || key;
}
export function localizePowerKey(key, language) {
  return powerTranslations[language]?.[key] || powerTranslations.en[key] || key;
}
export function localizeComplianceKey(key, language) {
  return complianceTranslations[language]?.[key] || complianceTranslations.en[key] || key;
}
export function localizePanelManagementKey(key, language) {
  return panelManagementTranslations[language]?.[key] || panelManagementTranslations.en[key] || key;
}
export function localizePhysicalSpecsKey(key, language) {
  return physicalSpecsTranslations[language]?.[key] || physicalSpecsTranslations.en[key] || key;
}

export function localizeFooter(language) {
  return footerTranslations[language] || footerTranslations.en;
}

export function localizeSymbol(key, language) {
  const hasLeadingSpace = key.startsWith(" ");

  const trimmedKey = hasLeadingSpace ? key.trimStart() : key;

  const symbolTranslation = symbolTranslations[language]?.[trimmedKey] || symbolTranslations.en[trimmedKey];

  const result = symbolTranslation ? (hasLeadingSpace ? ` ${symbolTranslation}` : symbolTranslation) : key;

  return result;
}
// export function localizeSymbol(key, language) {

//   return symbolTranslations[language]?.[key] || symbolTranslations.en[key] || key;
// }
// console.log("localizeSymbol ", key, language);
// console.log("localizeSymbol ", symbolTranslations[language]);
// console.log("localizeSymbol ", symbolTranslations[language]?.[key]);
