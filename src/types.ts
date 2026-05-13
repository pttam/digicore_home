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
    cta: string; // New Field
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
      subtitle: 'Enterprise-Grade AI and Data Analytics Solutions powered by Digicore. We help financial institutions and global enterprises navigate the future of digital assets.',
      cta: 'Explore Solutions',
      secondaryCta: 'View Platform',
    },
    valueProp: {
      title: 'Our Core Philosophy',
      philosophy: 'We believe that the future of finance is built on transparency, speed, and uncompromising security.',
      items: [
        { title: 'Intelligence First', desc: 'Advanced neural networks tailored for high-frequency financial data processing.' },
        { title: 'Scalable Growth', desc: 'Infrastructure designed to evolve with your enterprise as global markets shift.' },
        { title: 'Zero-Trust Security', desc: 'Military-grade encryption and privacy protocols at every layer of the stack.' },
        { title: 'Seamless Access', desc: 'Unified API gateway for effortless integration with existing legacy systems.' }
      ]
    },
    solutions: {
      title: 'Enterprise Ecosystem',
      subtitle: 'Comprehensive modular solutions designed for the modern digital economy.',
      items: [
        { title: 'Predictive Analytics', desc: 'Real-time market sentiment and trend forecasting using proprietary LLMs.' },
        { title: 'Asset Tokenization', desc: 'End-to-end lifecycle management for RWA and digital native assets.' },
        { title: 'Risk Compliance', desc: 'Automated AML/KYT monitoring with instantaneous regulatory reporting.' },
        { title: 'Liquidity Routing', desc: 'Smart order execution across fragmented global liquidity pools.' }
      ]
    },
    product: {
      sectionHeading: 'Flagship Product',
      title: 'TokenPiazza Enterprise',
      desc: 'The industry-standard dashboard for digital asset management and real-time on-chain intelligence.',
      features: ['Multi-Model Routing', 'Usage Analytics', 'Enterprise Auth', 'Rate Limiting', 'Universal API', '70% Faster Integration'],
      cta: 'Explore TokenPiazza...',
    },
    caseStudies: {
      title: 'Case Studies',
      items: [
        { title: 'Global Finance Logistics', desc: 'Scaling data infrastructure for multi-regional deployment.', cta: 'Read Full Story' },
        { title: 'Predictive Supply Chain', desc: 'Demand forecasting that reduced inventory costs by 25%.', cta: 'Read Full Story' },
        { title: 'Zero-Trust AI Security', desc: 'Hardening LLM deployments for banking compliance.', cta: 'Read Full Story' }
      ]
    },
    about: {
      title: 'Hong Kong-Based Experts in AI & Data Security',
      content: 'Founded in Hong Kong by a team of data scientists and cybersecurity specialists, Digicore Technology Limited bridges deep analytical expertise with a security-first approach. We bring enterprise quality to innovative startups and growing firms.',
      features: {
        security: { title: 'Security', desc: 'Enterprise protection with data sovereignty in HK.' },
        heritage: { title: 'Heritage', desc: 'Founded by industry veterans in Hong Kong.' }
      }
    },
    ctaBanner: {
      title: 'Ready to transform your data?',
      primaryCta: 'Book a Demo',
      secondaryCta: 'Contact Sales',
    },
    footer: {
      copy: '© 2026 Digicore Technology Limited. All rights reserved.',
      navigation: 'Navigation',
      legal: 'Legal',
      privacy: 'Privacy Protocol',
      terms: 'Terms of Service',
      security: '2026 Security Audit',
      slogan: 'Redefining Digital Intelligence.',
    },
  },
  'zh-TW': {
    nav: { solutions: '解決方案', about: '關於我們' },
    hero: {
      title: '將複雜數據轉化為具前瞻性的洞察',
      subtitle: '由 Digicore 驅動的企業級 AI 和數據分析解決方案。我們協助金融機構與全球企業導航數字資產的未來。',
      cta: '探索方案',
      secondaryCta: '查看平台',
    },
    valueProp: {
      title: '核心理念',
      philosophy: '我們相信未來的金融建立在透明、速度和絕不妥協的安全性之上。',
      items: [
        { title: '智能優先', desc: '專為高頻金融數據處理設計的先進神經網絡。' },
        { title: '可擴展增長', desc: '隨全球市場變化而進化的企業級基礎設施。' },
        { title: '零信任安全', desc: '在技術堆棧的每一層均採用軍用級加密和隱私協議。' },
        { title: '無縫接入', desc: '統一 API 網關，實現與現有舊系統的輕鬆集成。' }
      ]
    },
    solutions: {
      title: '企業生態系統',
      subtitle: '專為現代數字經濟設計的全面模塊化解決方案。',
      items: [
        { title: '預測性分析', desc: '使用專有大語言模型進行實時市場情緒和趨勢預測。' },
        { title: '資產代幣化', desc: '現實世界資產 (RWA) 和原生數字資產的全生命週期管理。' },
        { title: '風險合規', desc: '自動化 AML/KYT 監控及即時監管報告。' },
        { title: '流動性路由', desc: '在破碎的全球流動性池中實現智能訂單執行。' }
      ]
    },
    product: {
      sectionHeading: '旗艦產品',
      title: 'TokenPiazza 企業版',
      desc: '數字資產管理和實時鏈上情報的行業標準儀表板。',
      features: ['多模型路由', '使用量分析', '企業級認證', '速率限制', '通用 API', '集成速度提升 70%'],
      cta: '探索 TokenPiazza...',
    },
    caseStudies: {
      title: '案例研究',
      items: [
        { title: '全球金融物流', desc: '為跨區域部署擴展數據基礎設施。', cta: '閱讀全文' },
        { title: '預測性供應鏈', desc: '需求預測使庫存成本降低了 25%。', cta: '閱讀全文' },
        { title: '零信任 AI 安全', desc: '強化大語言模型部署以符合銀行合規要求。', cta: '閱讀全文' }
      ]
    },
    about: {
      title: '總部位於香港的 AI 與數據安全專家',
      content: 'Digicore Technology Limited 由數據科學家和網絡安全專家團隊在香港創立，將深厚的分析專業知識與安全優先的方法相結合。我們為創新初創公司和成長中的企業提供企業級品質。',
      features: {
        security: { title: '安全性', desc: '在香港境內擁有數據主權的企業級保護。' },
        heritage: { title: '傳承', desc: '由香港行業資深人士創立。' }
      }
    },
    ctaBanner: {
      title: '準備好轉化您的數據了嗎？',
      primaryCta: '預約演示',
      secondaryCta: '聯繫銷售',
    },
    footer: {
      copy: '© 2026 Digicore Technology Limited. 版權所有。',
      navigation: '導航',
      legal: '法律',
      privacy: '隱私協議',
      terms: '服務條款',
      security: '2026 安全審計',
      slogan: '重新定義數字智能。',
    },
  },
  DE: {
    nav: { solutions: 'Lösungen', about: 'Über uns' },
    hero: {
      title: 'Komplexe Daten in umsetzbare Erkenntnisse verwandeln',
      subtitle: 'KI- und Datenanalyselösungen für Unternehmen von Digicore. Wir unterstützen Finanzinstitute und globale Unternehmen bei der Navigation in die Zukunft digitaler Assets.',
      cta: 'Lösungen erkunden',
      secondaryCta: 'Plattform ansehen',
    },
    valueProp: {
      title: 'Unsere Kernphilosophie',
      philosophy: 'Wir glauben, dass die Zukunft der Finanzen auf Transparenz, Geschwindigkeit und kompromissloser Sicherheit basiert.',
      items: [
        { title: 'Intelligenz Zuerst', desc: 'Fortschrittliche neuronale Netze für die Hochfrequenz-Finanzdatenverarbeitung.' },
        { title: 'Skalierbares Wachstum', desc: 'Infrastruktur, die sich mit Ihrem Unternehmen entwickelt, wenn sich globale Märkte verschieben.' },
        { title: 'Zero-Trust-Sicherheit', desc: 'Verschlüsselung und Datenschutzprotokolle auf Militärniveau auf jeder Ebene.' },
        { title: 'Nahtloser Zugang', desc: 'Einheitliches API-Gateway für die mühelose Integration in bestehende Altsysteme.' }
      ]
    },
    solutions: {
      title: 'Enterprise-Ökosystem',
      subtitle: 'Umfassende modulare Lösungen für die moderne digitale Wirtschaft.',
      items: [
        { title: 'Prädiktive Analytik', desc: 'Marktstimmung und Trendprognosen in Echtzeit mit proprietären LLMs.' },
        { title: 'Asset-Tokenisierung', desc: 'End-to-End-Lebenszyklusmanagement für RWA und digital native Assets.' },
        { title: 'Risiko-Compliance', desc: 'Automatisierte AML/KYT-Überwachung mit sofortiger Berichterstattung.' },
        { title: 'Liquiditäts-Routing', desc: 'Intelligente Auftragsausführung über fragmentierte globale Liquiditätspools hinweg.' }
      ]
    },
    product: {
      sectionHeading: 'Flaggschiff-Produkt',
      title: 'TokenPiazza Enterprise',
      desc: 'Das branchenübliche Dashboard für das Management digitaler Assets und Echtzeit-On-Chain-Intelligence.',
      features: ['Multi-Modell-Routing', 'Nutzungsanalysen', 'Enterprise Auth', 'Ratenbegrenzung', 'Universeller API-Zugriff', '70% schneller'],
      cta: 'TokenPiazza erkunden...',
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
      privacy: 'Datenschutzprotokoll',
      terms: 'Nutzungsbedingungen',
      security: '2026 Sicherheitsaudit',
      slogan: 'Neudefinition digitaler Intelligenz.',
    },
  },
};