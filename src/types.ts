export type Language = 'EN' | 'zh-TW' | 'DE';

export interface Translations {
  nav: {
    solutions: string;
    about: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  valueProp: {
    title: string;
    philosophy: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  solutions: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  product: {
    sectionHeading: string;
    title: string;
    desc: string;
    features: string[];
  };
  caseStudies: {
    title: string;
    items: {
      title: string;
      desc: string;
      cta: string;
    }[];
  };
  about: {
    title: string;
    content: string;
    features: {
      security: { title: string; desc: string };
      heritage: { title: string; desc: string };
    };
  };
  ctaBanner: {
    title: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    copy: string;
    navigation: string;
    legal: string;
    privacy: string;
    terms: string;
    security: string;
    slogan: string;
  };
}

export const translations: Record<Language, Translations> = {
  EN: {
    nav: { solutions: 'Solutions', about: 'About' },
    hero: {
      title: 'Transform Complex Data Into Actionable Insights',
      subtitle: 'Enterprise-Grade AI Solutions for high-impact digital transformation.',
      cta: 'Schedule a Demo',
      secondaryCta: 'Expert Consultation',
    },
    valueProp: {
      title: 'Key Differentiators',
      philosophy: '"Our philosophy is simple: architecture determines outcomes. We build bridges between complex data and clear decisions."',
      items: [
        { title: 'Instant Scalability', desc: 'Deploy in minutes, scale to millions of requests instantly with our cloud-native microservices.' },
        { title: 'Predictive Accuracy', desc: '95%+ forecast accuracy with pre-built models for financial risk and supply chain optimization.' },
        { title: 'Bank-Grade Security', desc: 'SOC 2 Type II certified with zero-trust architecture, ensuring the highest data standards.' },
        { title: 'Integrate in Hours', desc: 'Connect with your existing stack in hours with our extensive API library.' },
      ],
    },
    solutions: {
      title: 'Solutions Overview',
      subtitle: 'We offer expert, end-to-end solutions to accelerate your digital transformation:',
      items: [
        { title: 'SaaS Strategy', desc: 'Reduce time-to-market by 40% with our proven roadmap methodology.' },
        { title: 'Proactive Security', desc: 'Identify and remediate 95% of vulnerabilities before they can be exploited.' },
        { title: 'Smarter Workflows', desc: 'Increase team productivity by 30% with custom AI workflows.' },
        { title: 'Seamless Integration', desc: 'Eliminate data silos and reduce operational costs by 25%.' },
      ],
    },
    product: {
      sectionHeading: 'Flagship Product',
      title: 'TokenPiazza',
      desc: 'Our unified orchestration layer eliminates vendor lock-in by providing universal access to leading AI models through one API. Reduce integration time by 70% while maintaining enterprise governance.',
      features: ['Multi-model routing', 'Usage analytics', 'Enterprise Auth', 'Rate limiting', 'Universal API access', '70% faster integration'],
    },
    caseStudies: {
      title: 'Case Studies & Success Stories',
      items: [
        { title: 'Global Financial Logistics', desc: 'Scaling data infrastructure for multi-regional enterprise deployment. Optimizing vertical clusters for high-performance throughput.', cta: 'Read Full Story' },
        { title: 'Predictive Supply Chain', desc: 'Implementing real-time demand forecasting for a Fortune 500 retailer, reducing inventory overhead by 25%.', cta: 'Read Full Story' },
        { title: 'Zero-Trust AI Security', desc: 'Hardening LLM deployments with custom orchestration layers to meet strict banking compliance standards.', cta: 'Read Full Story' }
      ]
    },
    about: {
      title: 'Hong Kong-Based Experts in AI and Data Security',
      content: 'Founded in Hong Kong by data scientists and cybersecurity specialists, Digicore fuses deep analytics with a security-by-design mindset.',
      features: {
        security: { title: 'Security', desc: 'Enterprise-grade protection with HK-based data sovereignty.' },
        heritage: { title: 'Heritage', desc: 'Founded by industry veterans in Hong Kong.' }
      }
    },
    ctaBanner: {
      title: 'Ready to Transform Your Data?',
      primaryCta: 'Schedule a Demo',
      secondaryCta: 'Contact Sales',
    },
    footer: {
      copy: '© 2026 Digicore Technology Limited. All rights reserved.',
      navigation: 'Navigation',
      legal: 'Legal',
      privacy: 'Privacy Protocol',
      terms: 'Terms of Service',
      security: 'Security Audit 2026',
      slogan: 'Redefining the digital frontier.'
    },
  },
  'zh-TW': {
    nav: { solutions: '解決方案', about: '關於我們' },
    hero: {
      title: '將複雜數據轉化為可執行的洞察',
      subtitle: '企業級 AI 解決方案，推動高影響力的數位轉型。',
      cta: '預約示範',
      secondaryCta: '專家諮詢',
    },
    valueProp: {
      title: '關鍵差異化因素',
      philosophy: '"我們的理念很簡單：架構決定結果。我們在複雜數據和明確決策之間搭建橋樑。"',
      items: [
        { title: '微服務即時擴展', desc: '透過我們的雲原生微服務架構，幾分鐘內部署，瞬間擴展到百萬級請求。' },
        { title: '值得信賴的預測準確性', desc: '預建模型在金融風險和需求規劃方面達到 95% 以上的準確率。' },
        { title: '銀行級安全', desc: 'SOC 2 Type II 認證，採用零信任架構，確保數據符合最高安全標準。' },
        { title: '幾小時內整合', desc: '透過我們廣泛的 API 庫，在幾小時內與您現有的技術棧連接。' },
      ],
    },
    solutions: {
      title: '解決方案概覽',
      subtitle: '我們提供專業的端到端解決方案，加速您的數位轉型：',
      items: [
        { title: '帶來投資回報的 SaaS 策略', desc: '透過我們經過驗證的路線圖方法，將上市時間縮短 40%。' },
        { title: '主動防禦的安全措施', desc: '在漏洞被利用之前識別並修復 95% 的漏洞。' },
        { title: '更智能的工作流程', desc: '通過定制 AI 工作流程自動化重複性任務，使生產力提高 30%。' },
        { title: '無縫協作的系統', desc: '通過我們的集成方法消除數據孤島並將運營成本降低 25%。' },
      ],
    },
    product: {
      sectionHeading: '旗艦產品',
      title: 'TokenPiazza',
      desc: '我們統一的編排層透過單一 API 提供對領先 AI 模型的通用訪問。減少 70% 的整合時間，同時保持企業級治理。',
      features: ['多模型路由', '使用量分析', '企業認證', '速率限制', '通用 API 訪問', '集成速度快 70%'],
    },
    caseStudies: {
      title: '案例研究與成功故事',
      items: [
        { title: '全球金融物流', desc: '為多區域企業部署擴展數據基礎設施。優化垂直集群以實現高性能吞吐量。', cta: '閱讀完整故事' },
        { title: '預測性供應鏈', desc: '為財富 500 強零售商實施實時需求預測，將庫存開銷減少了 25%。', cta: '閱讀完整故事' },
        { title: '零信任 AI 安全', desc: '使用自定義編排層加固 LLM 部署，以滿足嚴格的銀行合規標準。', cta: '閱讀完整故事' }
      ]
    },
    about: {
      title: '香港的人工智能和數據安全專家',
      content: '由數據科學家和網絡安全專家在香港創立，Digicore 將深度分析與安全設計思維相結合。',
      features: {
        security: { title: '安全保障', desc: '提供基於香港數據主權的企業級保護。' },
        heritage: { title: '產業傳承', desc: '由香港資深產業專家創立。' }
      }
    },
    ctaBanner: {
      title: '準備好將您的數據轉化為洞察了嗎？',
      primaryCta: '預約示範',
      secondaryCta: '聯繫銷售',
    },
    footer: {
      copy: '© 2026 Digicore Technology Limited. 版權所有。',
      navigation: '導航',
      legal: '法律',
      privacy: '隱私協議',
      terms: '服務條款',
      security: '2026年安全審計',
      slogan: '以尖端解決方案重新定義數字前沿。'
    },
  },
  DE: {
    nav: { solutions: 'Lösungen', about: 'Über uns' },
    hero: {
      title: 'Verwandeln Sie komplexe Daten in Erkenntnisse',
      subtitle: 'KI-Lösungen für Unternehmen für eine wirkungsvolle digitale Transformation.',
      cta: 'Demo vereinbaren',
      secondaryCta: 'Expertenberatung',
    },
    valueProp: {
      title: 'Differenzierungsmerkmale',
      philosophy: '"Unsere Philosophie ist einfach: Architektur bestimmt Ergebnisse. Wir bauen Brücken zwischen komplexen Daten und klaren Entscheidungen."',
      items: [
        { title: 'Sofortige Skalierbarkeit', desc: 'In Minuten bereitstellen mit unserer Cloud-native-Microservices-Architektur.' },
        { title: 'Vorhersagegenauigkeit', desc: '95%+ Genauigkeit mit vorgefertigten Modellen für Finanzrisiken.' },
        { title: 'Bankähnliche Sicherheit', desc: 'SOC 2 Type II zertifiziert mit Zero-Trust-Architektur.' },
        { title: 'Schnelle Integration', desc: 'Verbinden Sie sich in Stunden mit Ihrem bestehenden Stack.' },
      ],
    },
    solutions: {
      title: 'Lösungsüberblick',
      subtitle: 'Wir bieten maßgeschneiderte End-to-End-Lösungen:',
      items: [
        { title: 'SaaS-Strategie', desc: 'Reduzieren Sie die Markteinführungszeit um 40%.' },
        { title: 'Proaktive Sicherheit', desc: 'Identifizieren und beheben Sie 95% der Schwachstellen.' },
        { title: 'KI-Arbeitsabläufe', desc: 'Steigern Sie die Teamproduktivität um 30%.' },
        { title: 'Systemintegration', desc: 'Beseitigen Sie Datensilos und reduzieren Sie Kosten um 25%.' },
      ],
    },
    product: {
      sectionHeading: 'Flaggschiff-Produkt',
      title: 'TokenPiazza',
      desc: 'Unsere Orchestrierungsschicht bietet universellen Zugriff auf KI-Modelle über eine API. Reduzieren Sie die Integrationszeit um 70%.',
      features: ['Multi-Modell-Routing', 'Nutzungsanalysen', 'Enterprise Auth', 'Ratenbegrenzung', 'API-Zugriff', '70% schneller'],
    },
    caseStudies: {
      title: 'Fallstudien & Erfolgsgeschichten',
      items: [
        { title: 'Globale Finanzlogistik', desc: 'Skalierung der Dateninfrastruktur für multi-regionale Einsätze.', cta: 'Vollständige Story lesen' },
        { title: 'Prädiktive Lieferkette', desc: 'Bedarfsprognosen, die Lagerkosten um 25 % senken.', cta: 'Vollständige Story lesen' },
        { title: 'Zero-Trust-KI-Sicherheit', desc: 'Härtung von LLM-Bereitstellungen für Banken-Compliance.', cta: 'Vollständige Story lesen' }
      ]
    },
    about: {
      title: 'Hongkong-basierte Experten für KI',
      content: 'Gegründet in Hongkong verbindet Digicore Analyseexpertise mit Sicherheit.',
      features: {
        security: { title: 'Sicherheit', desc: 'Unternehmensschutz mit Datenhoheit in Hongkong.' },
        heritage: { title: 'Erbe', desc: 'Gegründet von Branchenveteranen in Hongkong.' }
      }
    },
    ctaBanner: {
      title: 'Bereit, Ihre Daten zu verwandeln?',
      primaryCta: 'Demo vereinbaren',
      secondaryCta: 'Verkauf kontaktieren',
    },
    footer: {
      copy: '© 2026 Digicore Technology Limited. Alle Rechte vorbehalten.',
      navigation: 'Navigation',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      security: 'Sicherheitsaudit 2026',
      slogan: 'Neudefinition digitaler Grenzen.'
    },
  },
};