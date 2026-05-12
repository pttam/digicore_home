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
  clientLogos: {
    title: string;
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
    title: string;
    desc: string;
    features: string[];
  };
  caseStudies: {
    title: string;
  };
  about: {
    title: string;
    content: string;
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
    clientLogos: {
      title: 'Trusted by Industry Leaders',
    },
    valueProp: {
      title: 'Key Differentiators',
      philosophy: '"Our philosophy is simple: architecture determines outcomes. We build bridges between complex data and clear decisions."',
      items: [
        { title: 'Instant Scalability with Microservices', desc: 'Deploy in minutes, scale to millions of requests instantly with our cloud-native microservices architecture.' },
        { title: 'Predictive Accuracy You Can Trust', desc: '95%+ forecast accuracy with pre-built models for financial risk, supply chain optimization, and demand planning.' },
        { title: 'Bank-Grade Security, Compliance-Ready', desc: 'SOC 2 Type II certified with zero-trust architecture, ensuring your data meets the highest security standards.' },
        { title: 'Integrate in Hours, Not Weeks', desc: 'Connect with your existing stack in hours with our extensive API library and pre-built connectors.' },
      ],
    },
    solutions: {
      title: 'Solutions Overview',
      subtitle: 'We offer expert, end-to-end solutions to accelerate your digital transformation:',
      items: [
        { title: 'SaaS Strategy That Delivers ROI', desc: 'Reduce time-to-market by 40% with our proven roadmap methodology and cloud-native deployment strategies.' },
        { title: 'Proactive Security That Prevents Breaches', desc: 'Identify and remediate 95% of vulnerabilities before they can be exploited with our comprehensive security assessment.' },
        { title: 'Smarter Workflows, Higher Productivity', desc: 'Increase team productivity by 30% with custom AI workflows that automate repetitive tasks and enhance decision-making.' },
        { title: 'Systems That Work Together Seamlessly', desc: 'Eliminate data silos and reduce operational costs by 25% with our end-to-end system integration approach.' },
      ],
    },
    product: {
      title: 'Route, Secure, and Scale All Your AI Models Through a Single Endpoint',
      desc: 'TokenPiazza.ai eliminates vendor lock-in by providing universal access to OpenAI, Anthropic, Google, Azure, and other AI models through one developer-friendly API. Reduce integration time by 70% while maintaining enterprise-grade security and governance.',
      features: ['Multi-model routing', 'Usage analytics', 'Enterprise Auth', 'Rate limiting', 'Universal API access', '70% faster integration'],
    },
    caseStudies: {
      title: 'Case Studies & Success Stories',
    },
    about: {
      title: 'Hong Kong-Based Experts in AI and Data Security',
      content: 'Founded in Hong Kong by a team of data scientists, AI researchers, cybersecurity specialists, and former payment-systems executives, Digicore Technology Limited fuses deep analytics expertise with a security-by-design mindset. Our founding team combines decades of experience from leading financial institutions, cybersecurity firms, and AI research labs. With a track record of delivering mission-critical solutions for Fortune 500 companies, we bring enterprise-grade expertise to innovative startups and growing businesses.',
    },
    ctaBanner: {
      title: 'Ready to Transform Your Data Into Actionable Insights?',
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
      slogan: 'Redefining the digital frontier with cutting-edge solutions.'
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
    clientLogos: {
      title: '受行業領導者信賴',
    },
    valueProp: {
      title: '關鍵差異化因素',
      philosophy: '"我們的理念很簡單：架構決定結果。我們在複雜數據和明確決策之間搭建橋樑。"',
      items: [
        { title: '微服務即時擴展', desc: '透過我們的雲原生微服務架構，幾分鐘內部署，瞬間擴展到百萬級請求。' },
        { title: '值得信賴的預測準確性', desc: '預建模型在金融風險、供應鏈優化和需求規劃方面達到95%以上的預測準確率。' },
        { title: '銀行級安全，合規就緒', desc: 'SOC 2 Type II 認證，採用零信任架構，確保您的數據符合最高安全標準。' },
        { title: '幾小時而非幾週內整合', desc: '透過我們廣泛的 API 庫和預建連接器，在幾小時內與您現有的技術棧連接。' },
      ],
    },
    solutions: {
      title: '解決方案概覽',
      subtitle: '我們提供專業的端到端解決方案，加速您的數位轉型：',
      items: [
        { title: '帶來投資回報的 SaaS 策略', desc: '透過我們經過驗證的路線圖方法和雲原生部署策略，將上市時間縮短40%。' },
        { title: '主動防禦的安全措施', desc: '透過我們全面的安全評估，在漏洞被利用之前識別並修復95%的漏洞。' },
        { title: '更智能的工作流程，更高的生產力', desc: '通過定制的 AI 工作流程自動化重複性任務並增強決策能力，使團隊生產力提高30%。' },
        { title: '無縫協作的系統', desc: '通過我們的端到端系統集成方法消除數據孤島並將運營成本降低25%。' },
      ],
    },
    product: {
      title: '通過單一端點路由、保護和擴展您的所有 AI 模型',
      desc: 'TokenPiazza.ai 通過一個開發者友好的 API 提供對 OpenAI、Anthropic、Google、Azure 和其他 AI 模型的通用訪問，消除了供應商鎖定。在保持企業級安全和治理的同時，將集成時間縮短70%。',
      features: ['多模型路由', '使用量分析', '企業認證', '速率限制', '通用 API 訪問', '集成速度快70%'],
    },
    caseStudies: {
      title: '案例研究與成功故事',
    },
    about: {
      title: '香港的人工智能和數據安全專家',
      content: '由數據科學家、AI 研究人員、網絡安全專家和前支付系統高管在香港創立，Digicore Technology Limited 將深度分析專業知識與安全設計思維相結合。我們的創始團隊擁有來自領先金融機構、網絡安全公司和 AI 研究實驗室的數十年經驗。憑藉為財富500強公司交付任務關鍵解決方案的記錄，我們為創新型初創公司和成長中的企業帶來企業級專業知識。',
    },
    ctaBanner: {
      title: '準備好將您的數據轉化為可執行的洞察了嗎？',
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
      title: 'Verwandeln Sie komplexe Daten in umsetzbare Erkenntnisse',
      subtitle: 'Unternehmensfähige KI-Lösungen für hochwirksame digitale Transformation.',
      cta: 'Demo vereinbaren',
      secondaryCta: 'Expertenberatung',
    },
    clientLogos: {
      title: 'Vertraut von Branchenführern',
    },
    valueProp: {
      title: 'Schlüsseldifferenzierungsmerkmale',
      philosophy: '"Unsere Philosophie ist einfach: Architektur bestimmt Ergebnisse. Wir bauen Brücken zwischen komplexen Daten und klaren Entscheidungen."',
      items: [
        { title: 'Sofortige Skalierbarkeit mit Microservices', desc: 'In Minuten bereitstellen, sofort auf Millionen von Anfragen skalieren mit unserer Cloud-native-Microservices-Architektur.' },
        { title: 'Vorhersagegenauigkeit, der Sie vertrauen können', desc: '95%+ Vorhersagegenauigkeit mit vorgefertigten Modellen für Finanzrisiken, Supply-Chain-Optimierung und Nachfrageplanung.' },
        { title: 'Bankähnliche Sicherheit, DSGVO-konform', desc: 'SOC 2 Type II zertifiziert mit Zero-Trust-Architektur, die sicherstellt, dass Ihre Daten den höchsten Sicherheitsstandards entsprechen.' },
        { title: 'Integration in Stunden, nicht Wochen', desc: 'Verbinden Sie sich in Stunden mit Ihrem bestehenden Stack durch unsere umfangreiche API-Bibliothek und vorgefertigte Konnektoren.' },
      ],
    },
    solutions: {
      title: 'Lösungsüberblick',
      subtitle: 'Wir bieten maßgeschneiderte End-to-End-Lösungen, um Ihre digitale Transformation zu beschleunigen:',
      items: [
        { title: 'SaaS-Strategie mit ROI', desc: 'Reduzieren Sie die Markteinführungszeit um 40% mit unserer bewährten Roadmap-Methodik und Cloud-native-Bereitstellungsstrategien.' },
        { title: 'Proaktive Sicherheit gegen Verletzungen', desc: 'Identifizieren und beheben Sie 95% der Schwachstellen, bevor sie ausgenutzt werden können, mit unserer umfassenden Sicherheitsbewertung.' },
        { title: 'Intelligentere Arbeitsabläufe, höhere Produktivität', desc: 'Steigern Sie die Teamproduktivität um 30% mit maßgeschneiderten KI-Arbeitsabläufen, die repetitive Aufgaben automatisieren und die Entscheidungsfindung verbessern.' },
        { title: 'Systeme, die nahtlos zusammenarbeiten', desc: 'Beseitigen Sie Datensilos und reduzieren Sie die Betriebskosten um 25% mit unserem End-to-End-Systemintegrationsansatz.' },
      ],
    },
    product: {
      title: 'Leiten, sichern und skalieren Sie alle Ihre KI-Modelle über einen einzigen Endpunkt',
      desc: 'TokenPiazza.ai eliminiert Vendor Lock-in, indem es universellen Zugriff auf OpenAI, Anthropic, Google, Azure und andere KI-Modelle über eine entwicklerfreundliche API bietet. Reduzieren Sie die Integrationszeit um 70%, während Sie Unternehmenssicherheit und Governance aufrechterhalten.',
      features: ['Multi-Modell-Routing', 'Nutzungsanalysen', 'Unternehmensauthentifizierung', 'Ratenbegrenzung', 'Universeller API-Zugriff', '70% schnellere Integration'],
    },
    caseStudies: {
      title: 'Fallstudien & Erfolgsgeschichten',
    },
    about: {
      title: 'Hongkong-basierte Experten für KI und Datensicherheit',
      content: 'Gegründet in Hongkong von einem Team aus Datenwissenschaftlern, KI-Forschern, Cybersicherheitsspezialisten und ehemaligen Zahlungssystem-Executives, verbindet Digicore Technology Limited tiefgreifende Analyseexpertise mit einem Sicherheit-durch-Design-Ansatz. Unser Gründer-Team vereint Jahrzehnte an Erfahrung aus führenden Finanzinstitutionen, Cybersicherheitsfirmen und KI-Forschungslaboren. Mit einer Erfolgsbilanz bei der Lieferung missionkritischer Lösungen für Fortune-500-Unternehmen bringen wir Unternehmensqualität zu innovativen Start-ups und wachsenden Unternehmen.',
    },
    ctaBanner: {
      title: 'Bereit, Ihre Daten in umsetzbare Erkenntnisse zu verwandeln?',
      primaryCta: 'Demo vereinbaren',
      secondaryCta: 'Verkauf kontaktieren',
    },
    footer: {
      copy: '© 2026 Digicore Technology Limited. Alle Rechte vorbehalten.',
      navigation: 'Navigation',
      legal: 'Rechtliches',
      privacy: 'Datenschutzprotokoll',
      terms: 'Nutzungsbedingungen',
      security: 'Sicherheitsaudit 2026',
      slogan: 'Neudefinition der digitalen Grenzen mit bahnbrechenden Lösungen.'
    },
  },
};
