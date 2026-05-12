import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  ShieldCheck,
  BarChart3,
  ExternalLink,
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
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-dot-pattern" />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/90 dark:bg-corp-dark-bg/90 backdrop-blur-md shadow-sm border-b border-corp-grey-light dark:border-white/5' : 'py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <img src="/images/logo.png" alt="Digicore logo" className="h-10 object-contain" />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest hover:text-corp-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-6 border-l border-corp-grey-light dark:border-white/10 pl-6 text-xs uppercase font-bold tracking-widest">
              <div className="flex items-center space-x-3">
                {(['EN', 'zh-TW', 'DE'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`transition-colors ${lang === l ? 'text-corp-red' : 'text-corp-grey hover:text-corp-grey-dark dark:hover:text-white'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className="p-1 hover:text-corp-red transition-all"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white dark:bg-corp-dark-bg pt-24 px-6 md:hidden flex flex-col items-center justify-center text-center space-y-12"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif font-bold tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6">
              {(['EN', 'zh-TW', 'DE'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setIsMenuOpen(false); }}
                  className={`text-sm font-bold tracking-widest ${lang === l ? 'text-corp-red' : 'text-corp-grey'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="section-container min-h-screen flex flex-col justify-center items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-10"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-tight">
              {t.hero.title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-corp-red block' : 'block'}>
                  {word}
                </span>
              ))}
            </h1>

            <p className="text-xs md:text-sm text-corp-grey dark:text-gray-400 max-w-xl leading-tight line-clamp-2">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="btn-primary">
                {t.hero.cta}
              </button>
              <button className="btn-secondary">
                {t.hero.secondaryCta}
              </button>
            </div>
          </motion.div>

          {/* Business Stats */}
          <div className="mt-32 w-full grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-corp-grey-light dark:border-white/10 pt-12">
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
        </section>

        {/* Client Logos/Badges Section */}
        <section id="clients" className="section-container py-16">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-corp-grey mb-4">{t.clientLogos.title}</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-70">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 bg-corp-grey-light dark:bg-white/5 rounded flex items-center justify-center">
                <div className="text-xs font-bold text-corp-grey">Client {i+1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Differentiators Section */}
        <section id="values" className="section-container bg-corp-grey-light dark:bg-white/5 rounded-3xl mb-24">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-display font-bold mb-6">{t.valueProp.title}</h2>
              <div className="accent-line mb-8" />
              <p className="text-corp-grey dark:text-gray-400 leading-relaxed italic">
                {t.valueProp.philosophy}
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
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

        {/* Solutions Overview Section */}
        <section id="solutions" className="section-container mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">{t.solutions.title}</h2>
            <div className="accent-line mx-auto mb-8" />
            <p className="text-xl text-corp-grey dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t.solutions.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.solutions.items.map((solution, i) => (
              <div key={solution.title} className="corp-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-corp-red mt-1">
                    {i === 0 ? <BarChart3 size={24} /> : i === 1 ? <ShieldCheck size={24} /> : i === 2 ? <Users size={24} /> : <Layers size={24} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-3">{solution.title}</h3>
                    <p className="text-corp-grey dark:text-gray-400 leading-relaxed">{solution.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* TokenPiazza Product Card */}
            <div className="md:col-span-2 corp-card p-8 border-corp-red/20">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="text-corp-red mb-4">
                    <BarChart3 size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{t.product.title}</h3>
                  <p className="text-corp-grey dark:text-gray-400 mb-6 leading-relaxed">
                    {t.product.desc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {t.product.features.map(f => (
                      <div key={f} className="flex items-center text-sm font-bold uppercase tracking-wider">
                        <ArrowUpRight size={16} className="text-corp-red mr-3" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center space-x-2 text-corp-red group font-bold border-b-2 border-corp-red pb-1">
                    <span>Enterprise Dashboard Access</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="lg:w-1/2">
                  <div className="corp-card p-4 aspect-[4/3] bg-corp-grey-light dark:bg-corp-dark-bg/60 border-2 h-full">
                    <div className="h-full w-full bg-white dark:bg-corp-dark-bg rounded-lg shadow-inner flex flex-col p-6 overflow-hidden">
                      <div className="flex justify-between items-center mb-8 border-b border-corp-grey-light dark:border-white/10 pb-4">
                        <div className="flex space-x-4">
                           <div className="w-8 h-8 rounded bg-corp-red/10 border border-corp-red/20 flex items-center justify-center">
                              <BarChart3 size={14} className="text-corp-red" />
                           </div>
                           <div>
                              <div className="text-[10px] font-bold text-corp-grey-dark dark:text-white uppercase">System Matrix</div>
                              <div className="text-[8px] text-corp-grey font-mono">STATUS: OPTIMAL // EN_US_EAST</div>
                           </div>
                        </div>
                        <div className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-1 leading-none rounded">ACTIVE</div>
                      </div>

                      <div className="space-y-6">
                        {[
                          { label: 'Request Volume', value: '1.2M', growth: '+12%' },
                          { label: 'Token Efficiency', value: '94.2%', growth: '+2.4%' },
                          { label: 'Security Handshakes', value: '45,201', growth: '--' }
                        ].map(stat => (
                          <div key={stat.label} className="flex justify-between items-end border-b border-corp-grey-light dark:border-white/5 pb-2">
                            <div>
                              <div className="text-[8px] text-corp-grey uppercase font-bold">{stat.label}</div>
                              <div className="text-xl font-serif font-bold">{stat.value}</div>
                            </div>
                            <div className="text-[8px] text-green-600 font-bold">{stat.growth}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex justify-end">
                        <FileSearch size={16} className="text-corp-red opacity-50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies/Success Stories Section */}
        <section id="case-studies" className="section-container bg-corp-grey-light dark:bg-white/5 rounded-3xl py-24 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">{t.caseStudies.title}</h2>
            <div className="accent-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="corp-card p-8 bg-white dark:bg-corp-dark-bg">
                <div className="text-corp-red mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Case Study {item}</h3>
                <p className="text-corp-grey dark:text-gray-400 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="flex items-center space-x-2 text-corp-red group font-bold border-b-2 border-corp-red pb-1">
                  <span>Read Full Story</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-container border-t border-corp-grey-light dark:border-white/10 pt-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-10 leading-tight">
                {t.about.title.split(' ').slice(0, 3).join(' ')} <br />
                <span className="text-corp-red">{t.about.title.split(' ').slice(3).join(' ')}</span>
              </h2>
              <div className="accent-line mb-10" />
            </div>
            <div>
              <p className="text-xl text-corp-grey dark:text-gray-400 leading-relaxed mb-12">
                {t.about.content}
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-corp-red mb-4"><ShieldCheck size={24} /></div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Hardening</h4>
                  <p className="text-xs text-corp-grey leading-relaxed">Continuous threat modeling and penetration testing.</p>
                </div>
                <div>
                  <div className="text-corp-red mb-4"><Building2 size={24} /></div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Scale</h4>
                  <p className="text-xs text-corp-grey leading-relaxed">Micro-services optimized for enterprise vertical clusters.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section id="cta" className="section-container py-24">
          <div className="corp-card bg-gradient-to-r from-corp-red to-corp-red/80 text-white rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-display font-bold mb-8">{t.ctaBanner.title}</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary bg-white text-corp-red hover:bg-corp-grey-light">
                {t.ctaBanner.primaryCta}
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                {t.ctaBanner.secondaryCta}
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-corp-dark-bg text-white mt-24">
          <div className="section-container py-24 grid md:grid-cols-3 gap-16">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <img src="/Digicore-logo.png" alt="Digicore logo" className="w-8 h-8 object-contain" />
                <span className="font-sans font-extrabold text-sm tracking-[0.2em] uppercase">
                  Digicore
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed tracking-widest uppercase">
                {t.footer.slogan}
              </p>
            </div>
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase text-corp-grey mb-8">{t.footer.navigation}</h5>
              <div className="flex flex-col space-y-4 text-xs font-bold uppercase tracking-widest">
                <a href="#solutions" className="hover:text-corp-red">Solutions</a>
                <a href="#about" className="hover:text-corp-red">About</a>
                <a href="#" className="hover:text-corp-red">Contact</a>
              </div>
            </div>
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase text-corp-grey mb-8">{t.footer.legal}</h5>
              <div className="flex flex-col space-y-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                <span>{t.footer.privacy}</span>
                <span>{t.footer.terms}</span>
                <span>{t.footer.security}</span>
              </div>
            </div>
          </div>
          <div className="section-container py-8 border-t border-white/5 flex justify-between items-center text-[8px] font-bold tracking-[0.5em] text-gray-600 uppercase">
             <span>{t.footer.copy}</span>
             <span className="flex items-center"><Globe size={10} className="mr-2" /> Global Presence</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
