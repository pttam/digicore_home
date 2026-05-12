import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  ShieldCheck,
  BarChart3,
  Menu,
  X,
  Globe,
  Moon,
  Sun,
  ChevronRight,
  TrendingUp,
  Layers,
  FileSearch,
  ArrowUpRight,
  Users,
  Award,
  Zap
} from 'lucide-react';
import { Language, translations } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[lang];

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: t.nav.solutions, href: '#solutions' },
    { name: t.nav.about, href: '#about' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${isDark ? 'bg-corp-dark-bg text-white dark' : 'bg-white text-corp-grey-dark'}`}>
      
      {/* HEADER: Solid white background */}
      <nav className="relative w-full z-50 py-6 bg-white border-b border-corp-grey-light shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
            <img src="/images/logo.png" alt="Digicore logo" className="h-8 object-contain" />
          </motion.div>

          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-corp-grey-dark hover:text-corp-red transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-6 border-l border-corp-grey-light pl-6 text-xs uppercase font-bold tracking-widest">
              <div className="flex items-center space-x-3">
                {(['EN', 'zh-TW', 'DE'] as Language[]).map((l) => (
                  <button 
                    key={l} 
                    onClick={() => setLang(l)} 
                    className={`transition-colors ${lang === l ? 'text-corp-red' : 'text-corp-grey hover:text-corp-grey-dark'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <button onClick={toggleTheme} className="p-1 text-corp-grey-dark hover:text-corp-red transition-all">
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>
          <button className="md:hidden text-corp-grey-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO IMAGE */}
        <div className="relative h-[50vh] w-full overflow-hidden bg-corp-grey-light">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('/images/hero-background.jpg')" }} 
          />
        </div>

        {/* HERO CONTENT: White overlap card */}
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="relative -mt-[25vh]"> 
            <div className="w-full max-w-5xl mx-auto bg-white p-10 md:p-16 rounded-lg shadow-2xl border border-corp-grey-light">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight text-corp-grey-dark">
                   {t.hero.title}
                </h1>

                <p className="text-lg md:text-xl text-corp-grey max-w-3xl leading-relaxed">
                  {t.hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    className={`px-10 py-4 bg-corp-red text-white font-bold rounded uppercase tracking-widest hover:bg-red-800 transition-colors 
                    ${lang === 'zh-TW' ? 'text-sm' : 'text-xs'}`}
                  >
                    {t.hero.cta}
                  </button>
                  <button 
                    className={`px-10 py-4 border border-corp-grey-light text-corp-grey-dark font-bold rounded uppercase tracking-widest hover:bg-gray-50 transition-colors 
                    ${lang === 'zh-TW' ? 'text-sm' : 'text-xs'}`}
                  >
                    {t.hero.secondaryCta}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="max-w-7xl mx-auto px-6 mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-corp-grey-light dark:border-white/10 pt-16">
          {[
            { label: 'Latency Rate', value: '< 20ms' },
            { label: 'Service Uptime', value: '99.9%' },
            { label: 'Global Nodes', value: '14+' },
            { label: 'Audit Score', value: '100%' }
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-[10px] font-bold tracking-widest text-corp-grey uppercase mb-2">{stat.label}</div>
              <div className="text-3xl font-serif font-bold text-corp-red">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* DIFFERENTIATORS */}
        <section id="values" className="section-container bg-corp-grey-light dark:bg-white/5 rounded-3xl mt-32 mb-24 py-20 px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-display font-bold mb-6">{t.valueProp.title}</h2>
              <div className="accent-line mb-8" />
              <p className="text-corp-grey dark:text-gray-400 leading-relaxed italic">{t.valueProp.philosophy}</p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
              {t.valueProp.items.map((item, i) => (
                <div key={item.title} className="space-y-4">
                  <div className="text-corp-red">
                    {i === 0 ? <Zap size={32} /> : i === 1 ? <TrendingUp size={32} /> : i === 2 ? <ShieldCheck size={32} /> : <Layers size={32} />}
                  </div>
                  <h3 className="text-lg font-display font-bold uppercase tracking-widest">{item.title}</h3>
                  <p className="text-sm text-corp-grey dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className="section-container mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">{t.solutions.title}</h2>
            <div className="accent-line mx-auto mb-8" />
            <p className="text-xl text-corp-grey dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">{t.solutions.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {t.solutions.items.map((solution, i) => (
              <div key={solution.title} className="bg-white dark:bg-white/5 p-8 border border-corp-grey-light dark:border-white/10 rounded-xl shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="text-corp-red mt-1">
                    {i === 0 ? <BarChart3 size={24} /> : i === 1 ? <ShieldCheck size={24} /> : i === 2 ? <Users size={24} /> : <Layers size={24} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-3">{solution.title}</h3>
                    <p className="text-sm text-corp-grey dark:text-gray-400 leading-relaxed">{solution.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FLAGSHIP PRODUCT HEADING */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">{t.product.sectionHeading}</h2>
            <div className="accent-line mx-auto mb-8" />
          </div>

          {/* TOKENPIAZZA CARD */}
          <div className="bg-white dark:bg-white/5 p-8 md:p-12 border border-corp-red/20 rounded-xl shadow-sm">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <div className="text-corp-red mb-4"><BarChart3 size={32} /></div>
                <h3 className="text-2xl font-display font-bold mb-4">{t.product.title}</h3>
                <p className="text-corp-grey dark:text-gray-400 mb-6 leading-relaxed">{t.product.desc}</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {t.product.features.map(f => (
                    <div key={f} className="flex items-center text-sm font-bold uppercase tracking-wider">
                      <ArrowUpRight size={16} className="text-corp-red mr-3" /> {f}
                    </div>
                  ))}
                </div>
                <button className="flex items-center space-x-2 text-corp-red group font-bold border-b-2 border-corp-red pb-1">
                  <span>Enterprise Dashboard Access</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="lg:w-1/2">
                 <div className="bg-corp-grey-light dark:bg-corp-dark-bg/60 border border-corp-grey-light dark:border-white/5 p-6 rounded-xl aspect-video flex flex-col">
                    <div className="flex justify-between items-center mb-6 border-b border-corp-grey-light dark:border-white/10 pb-4">
                      <div className="text-[10px] font-bold text-corp-grey uppercase tracking-widest">Live Matrix // TokenPiazza</div>
                      <div className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-1 rounded">SYSTEM ONLINE</div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-2 w-full bg-corp-red/10 rounded-full overflow-hidden"><motion.div animate={{ width: ['30%', '85%', '60%'] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-corp-red" /></div>
                      <div className="h-2 w-2/3 bg-corp-red/10 rounded-full overflow-hidden"><motion.div animate={{ width: ['40%', '20%', '55%'] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="h-full bg-corp-red" /></div>
                    </div>
                    <div className="mt-auto flex justify-between items-end">
                      <FileSearch size={24} className="text-corp-red opacity-30" />
                      <div className="text-[20px] font-serif font-bold text-corp-grey-dark dark:text-white">94.2%</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES: Mapping from t.caseStudies.items */}
        <section id="case-studies" className="section-container bg-corp-grey-light dark:bg-white/5 rounded-3xl py-24 mb-24 px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">{t.caseStudies.title}</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.caseStudies.items.map((item, i) => (
              <div key={i} className="bg-white dark:bg-corp-dark-bg p-8 rounded-xl shadow-sm border border-corp-grey-light dark:border-white/5">
                <div className="text-corp-red mb-4"><Award size={24} /></div>
                <h3 className="text-xl font-display font-bold mb-4 text-black dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <button className="flex items-center space-x-2 text-corp-red group font-bold border-b-2 border-corp-red pb-1 text-xs">
                  <span>{item.cta}</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-container border-t border-corp-grey-light dark:border-white/10 pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-10 leading-tight">
                {t.about.title}
              </h2>
              <div className="accent-line mb-10" />
            </div>
            <div>
              <p className="text-xl text-corp-grey dark:text-gray-400 leading-relaxed mb-12">{t.about.content}</p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-corp-red mb-4"><ShieldCheck size={24} /></div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Security</h4>
                  <p className="text-xs text-corp-grey leading-relaxed">Enterprise-grade protection with HK-based sovereignty.</p>
                </div>
                <div>
                  <div className="text-corp-red mb-4"><Building2 size={24} /></div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Heritage</h4>
                  <p className="text-xs text-corp-grey leading-relaxed">Founded by industry veterans in Hong Kong.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section id="cta" className="section-container py-24">
          <div className="bg-gradient-to-r from-corp-red to-corp-red/80 text-white rounded-3xl p-12 text-center shadow-xl">
            <h2 className="text-4xl font-display font-bold mb-8">{t.ctaBanner.title}</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-corp-red font-bold rounded uppercase text-xs tracking-widest hover:bg-corp-grey-light transition-colors">{t.ctaBanner.primaryCta}</button>
              <button className="px-10 py-4 border border-white text-white font-bold rounded uppercase text-xs tracking-widest hover:bg-white/10 transition-colors">{t.ctaBanner.secondaryCta}</button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-corp-dark-bg text-white pt-24 pb-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 pb-24">
            <div>
              <img src="/images/logo.png" alt="Digicore" className="h-6 mb-8 brightness-0 invert" />
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] leading-relaxed max-w-xs">{t.footer.slogan}</p>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest space-y-4">
              <p className="text-corp-grey mb-6 tracking-[0.3em]">{t.footer.navigation}</p>
              <a href="#solutions" className="block hover:text-corp-red transition-colors">{t.nav.solutions}</a>
              <a href="#about" className="block hover:text-corp-red transition-colors">{t.nav.about}</a>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest space-y-4 text-gray-500">
              <p className="text-corp-grey mb-6 tracking-[0.3em]">{t.footer.legal}</p>
              <span className="block">{t.footer.privacy}</span>
              <span className="block">{t.footer.terms}</span>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-[8px] font-bold tracking-[0.4em] text-gray-600 uppercase flex justify-between">
            <span>{t.footer.copy}</span>
            <span className="flex items-center"><Globe size={10} className="mr-2" /> HK HQ</span>
          </div>
        </footer>
      </main>
    </div>
  );
}