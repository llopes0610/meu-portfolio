import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Moon, Sun, ExternalLink, Mail, Phone, Linkedin, Code, Database, Zap, Layers, ChevronDown, MapPin, Download, ArrowRight, Instagram } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:lucaslopes.ti@live.com?subject=Contato de ${formData.name}&body=${formData.message}`;
    window.location.href = mailto;
    setFormData({ name: '', email: '', message: '' });
  };

  const bgClass = isDark ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900';
  const sectionBgClass = isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-50 to-white';
  const cardBgClass = isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white/50 hover:bg-white';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-200';

  const skills = [
    { icon: <Database className="w-6 h-6" />, title: 'Bancos de Dados', items: ['SQL', 'Oracle', 'PL/SQL'] },
    { icon: <Code className="w-6 h-6" />, title: 'Programação', items: ['.NET', 'Python', 'Microsserviços'] },
    { icon: <Zap className="w-6 h-6" />, title: 'Sustentação', items: ['Incidentes Críticos', 'Performance', 'QA'] },
    { icon: <Layers className="w-6 h-6" />, title: 'Ferramentas', items: ['SAP', 'Jira', 'NewRelic', 'Zabbix'] },
  ];

  const experience = [
    { 
      company: 'Strada', 
      role: 'Analista de Suporte N3 / Analista de Sistemas', 
      period: '2022 – 2025', 
      desc: [
        'Resolução de incidentes críticos em aplicação de logística, garantindo alta disponibilidade', 
        'SQL, Oracle e NewRelic para análise de performance, logs e integridade de dados',
        'Documentação técnica e funcional (BPMN, UML)',
        'QA e testes automatizados, validação de GMUDs e acompanhamento de deploys',
        'Procedimentos técnicos preventivos que reduziram falhas e tempo de resposta'
      ]
    },
    { 
      company: 'Unitrading Logistics', 
      role: 'Analista de TI Sênior', 
      period: '2021 – 2022', 
      desc: [
        'Levantamento detalhado de requisitos junto aos stakeholders',
        'Otimização de fluxos de negócio e processos internos',
        'Sustentação de sistemas críticos com alta disponibilidade'
      ]
    },
    { 
      company: 'GAFOR Logística', 
      role: 'Analista de TI Pleno', 
      period: '2020 – 2021', 
      desc: [
        'Integração de sistemas SAP com sistemas internos legados',
        'Automação de processos repetitivos através de scripts e procedures',
        'Geração de relatórios SQL complexos para análise de dados'
      ]
    },
    { 
      company: 'Carrefour', 
      role: 'Analista de Sistemas', 
      period: '2018 – 2019', 
      desc: [
        'Suporte N2 para plataforma de pedidos online',
        'Administração do ERP Hybris com gerenciamento de usuários',
        'Análise e resolução de inconsistências de dados'
      ]
    },
    { 
      company: 'JBS', 
      role: 'Analista de Suporte SAP', 
      period: '2015 – 2018', 
      desc: [
        'Sustentação de sistemas SAP em produção',
        'Monitoramento através de ferramentas como Zabbix',
        'Geração de relatórios técnicos para a administração'
      ]
    }
  ];

  const education = [
    { course: 'Inteligência Artificial e Automação Digital', institution: 'Unifecaf e RocketSeat', period: '2025–2026' },
    { course: 'Desenvolvimento de Software FullStack', institution: 'Cubos Academy', period: '2024–2025' },
    { course: 'Engenharia de Dados', institution: 'Data Science Academy', period: '2022–2023' },
    { course: 'Análise e Desenvolvimento de Sistemas', institution: 'Universidade Anhembi Morumbi', period: '2018–2020' },
  ];

  return (
    <div className={`${bgClass} transition-colors duration-300 min-h-screen w-full overflow-x-hidden`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all backdrop-blur-md ${isScrolled ? (isDark ? 'bg-gray-950/80 border-b border-gray-800' : 'bg-white/80 border-b border-gray-200') : 'bg-transparent'}`}>
        <div className="w-full px-4 py-4 flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Soli Deo Gloria</div>
          
          <div className="hidden md:flex gap-8 items-center">
            {['Sobre', 'Competências', 'Experiência', 'Formação', 'Contato'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-blue-500 transition-colors">{item}</a>
            ))}
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-gray-300 dark:border-gray-700">
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsDark(!isDark)} className="p-2">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${sectionBgClass} px-4 py-4 flex flex-col gap-4 border-t ${borderClass}`}>
            {['Sobre', 'Competências', 'Experiência', 'Formação', 'Contato'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className={`pt-28 pb-12 px-4 w-screen bg-gradient-to-br ${isDark ? 'from-gray-950 via-gray-900 to-gray-950' : 'from-white via-blue-50 to-white'}`}>
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Esquerda - Foto */}
            <div className="flex justify-center md:justify-end order-2 md:order-1">
              <div className="relative w-56 h-56 md:w-72 md:h-72">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src="/lucas-perfil.jpg" 
                  alt="Lucas Silva Lopes" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-blue-600 shadow-2xl"
                />
              </div>
            </div>

            {/* Direita - Conteúdo */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                Olá, sou <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Lucas</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2 font-semibold">
                Analista de Sistemas Pleno/Sênior
              </p>
              <p className={`text-base mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Especialista em Sustentação, Integração e Automação de Sistemas
              </p>
              <p className="text-sm md:text-base mb-6 italic font-medium text-blue-600">
                "Transformo sistemas complexos em soluções estáveis, eficientes e escaláveis."
              </p>

              <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a href="mailto:lucaslopes.ti@live.com" className="hover:text-blue-600">lucaslopes.ti@live.com</a>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <a href="tel:+5511987079347" className="hover:text-blue-600">+55 (11) 98707-9347</a>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Instagram className="w-4 h-4 text-blue-600" />
                  <a href="https://www.instagram.com/lucas5sola/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">@lucas5sola</a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/lucasslopes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl !text-white px-5 py-2 md:px-6 md:py-3 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base font-bold">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href="#contato" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 shadow-lg hover:shadow-xl !text-white px-5 py-2 md:px-6 md:py-3 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base font-bold">
                  <Send className="w-5 h-5" /> Contato
                </a>
                <a href="/CV_Lucas_Silva_Lopes.pdf" download className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl !text-white px-5 py-2 md:px-6 md:py-3 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base font-bold">
                  <Download className="w-5 h-5" /> CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className={`py-20 px-4 w-screen bg-gradient-to-br ${sectionBgClass}`}>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Sobre Mim</h2>
          <div className={`${cardBgClass} backdrop-blur-sm p-8 md:p-12 rounded-2xl border ${borderClass} transition-all`}>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
                <p className="text-gray-600 dark:text-gray-400">Anos de Experiência</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <p className="text-gray-600 dark:text-gray-400">Projetos Completados</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-400">Comprometido</p>
              </div>
            </div>
            <p className={`text-lg leading-relaxed mb-6 mt-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Sou Analista de Sistemas e Suporte <strong>Pleno/Sênior</strong> com mais de 8 anos de experiência em análise, sustentação e integração de sistemas corporativos nos setores de <strong>logística, varejo e indústria</strong>.
            </p>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Atuo com <strong>SQL, Oracle, Python, .NET</strong> e <strong>ERPs (SAP/Hybris)</strong>, além de metodologias ágeis como <strong>Scrum e Kanban</strong>. Tenho foco em garantir <strong>alta disponibilidade</strong>, <strong>otimizar processos</strong> e aplicar soluções inteligentes.
            </p> <br/>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}><strong>Baixe meu CV completo acima ;D</strong></p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competências" className="py-20 px-4 w-screen">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Competências Técnicas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className={`${cardBgClass} backdrop-blur-sm p-6 rounded-xl border ${borderClass} transition-all hover:shadow-lg hover:scale-105 group`}>
                <div className="text-blue-600 mb-4 group-hover:scale-125 transition-transform">{skill.icon}</div>
                <h3 className="font-bold mb-4 text-lg">{skill.title}</h3>
                <ul className={`space-y-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiência" className={`py-20 px-4 w-screen ${sectionBgClass}`}>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experiência Profissional</h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className={`${cardBgClass} backdrop-blur-sm p-6 md:p-8 rounded-xl border-l-4 border-blue-600 transition-all hover:shadow-lg`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <p className="text-blue-600 font-semibold mt-1">{exp.role}</p>
                  </div>
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-2 md:mt-0`}>{exp.period}</p>
                </div>
                {Array.isArray(exp.desc) ? (
                  <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {exp.desc.map((item, i) => (
                      <li key={i} className="text-sm md:text-base flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={`text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{exp.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formação" className="py-20 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Formação & Certificações</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className={`${cardBgClass} backdrop-blur-sm p-6 rounded-xl border ${borderClass} transition-all hover:shadow-lg`}>
                <h3 className="font-bold text-lg mb-1">{edu.course}</h3>
                <p className="text-blue-600 font-semibold">{edu.institution}</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>{edu.period}</p>
              </div>
            ))}
            <div className={`${cardBgClass} backdrop-blur-sm p-6 rounded-xl border ${borderClass} transition-all mt-8`}>
              <h3 className="font-bold text-lg mb-4">Certificações</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span><strong>SAP MM</strong> — Training Education Services (2017)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span><strong>MCSA Windows Server 2012</strong> — Green Treinamentos (2015)</span>
                </li>
                 <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span><strong>ITIL V3</strong> — Impacta (2015)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span><strong>CCNA 5.0</strong> — NetAcademy (2014)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className={`py-20 px-4 ${sectionBgClass}`}>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Vamos Conectar?</h2>
          <p className="text-center mb-12 text-lg text-blue-600 font-medium">
            Aberto a novos desafios em tecnologia, inovação e transformação digital
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleFormChange}
                className={`w-full px-4 py-3 rounded-lg border ${borderClass} ${isDark ? 'bg-gray-800' : 'bg-white'} transition-all focus:outline-none focus:ring-2 focus:ring-blue-600`}
              />
              <input
                type="email"
                name="email"
                placeholder="Seu E-mail"
                value={formData.email}
                onChange={handleFormChange}
                className={`w-full px-4 py-3 rounded-lg border ${borderClass} ${isDark ? 'bg-gray-800' : 'bg-white'} transition-all focus:outline-none focus:ring-2 focus:ring-blue-600`}
              />
              <textarea
                name="message"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleFormChange}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border ${borderClass} ${isDark ? 'bg-gray-800' : 'bg-white'} transition-all focus:outline-none focus:ring-2 focus:ring-blue-600`}
              />
              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.message}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg disabled:bg-gray-400 text-white px-6 py-3 rounded-lg transition-all font-semibold"
              >
                <Send className="inline w-5 h-5 mr-2" /> Enviar Mensagem
              </button>
            </div>
            <div className="space-y-4">
              <div className={`${cardBgClass} backdrop-blur-sm p-6 rounded-xl border ${borderClass}`}>
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" /> E-mail
                </h3>
                <a href="mailto:lucaslopes.ti@live.com" className="text-blue-600 hover:underline break-all">lucaslopes.ti@live.com</a>
              </div>
              <div className={`${cardBgClass} backdrop-blur-sm p-6 rounded-xl border ${borderClass}`}>
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" /> Telefone
                </h3>
                <a href="tel:+5511987079347" className="text-blue-600 hover:underline">+55 (11) 98707-9347</a>
              </div>
              <div className={`${cardBgClass} backdrop-blur-sm p-6 rounded-xl border ${borderClass}`}>
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-blue-600" /> LinkedIn
                </h3>
                <a href="https://www.linkedin.com/in/lucasslopes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-2">
                  Visitar Perfil <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${borderClass} text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        <p className="mb-2">© 2025 Lucas Silva Lopes. Todos os direitos reservados.</p>
        <p className="text-sm">Desenvolvido com React e Tailwind CSS</p>
      </footer>
    </div>
  );
}