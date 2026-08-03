import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send, Moon, Sun, ExternalLink, Mail, Phone, Linkedin, Code, Database, Zap, Layers, ChevronDown, MapPin, Download, ArrowRight, Instagram, Award, Briefcase, Target, Github, Settings, GitBranch } from 'lucide-react';
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
    const mailto = `mailto:llopes3025@gmail.com?subject=Contato de ${formData.name}&body=${formData.message}`;
    window.location.href = mailto;
    setFormData({ name: '', email: '', message: '' });
  };

  const bgClass = isDark ? 'bg-slate-950 text-gray-100' : 'bg-gray-50 text-gray-900';
  const sectionBgClass = isDark ? 'bg-slate-900' : 'bg-gradient-to-b from-gray-100 to-gray-50';
  const cardBgClass = isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-white border border-gray-200';
  const borderClass = isDark ? 'border-emerald-500/30' : 'border-gray-300';

  const skills = [
    { icon: <Code className="w-6 h-6" />, title: 'Desenvolvimento', items: ['JavaScript', '.NET', 'Python', 'React'] },
    { icon: <Database className="w-6 h-6" />, title: 'Bancos de Dados', items: ['SQL Server', 'Oracle', 'PL/SQL', 'PostgreSQL'] },
    { icon: <Settings className="w-6 h-6" />, title: 'Sistemas', items: ['Implantação', 'Configuração', 'Sustentação', 'Homologação'] },
    { icon: <Zap className="w-6 h-6" />, title: 'Suporte & QA', items: ['Incidentes críticos', 'Análise de logs', 'Testes', 'GMUDs'] },
    { icon: <GitBranch className="w-6 h-6" />, title: 'Agilidade & DevOps', items: ['Azure DevOps', 'Scrum', 'Kanban', 'Sprints'] },
    { icon: <Layers className="w-6 h-6" />, title: 'Integrações', items: ['REST', 'SOAP', 'RabbitMQ', 'Kafka'] },
    { icon: <Award className="w-6 h-6" />, title: 'Observabilidade', items: ['New Relic', 'Zabbix', 'Grafana', 'Datadog'] },
    { icon: <Code className="w-6 h-6" />, title: 'Análise Funcional', items: ['Requisitos', 'BPMN', 'UML', 'Documentação'] },
  ];

  const softSkills = [
    { title: 'Comunicação com o negócio', description: 'Condução de reuniões, entendimento das necessidades dos usuários e tradução de demandas em requisitos técnicos e funcionais.' },
    { title: 'Resolução de problemas', description: 'Investigação estruturada de incidentes, análise de causa e definição de soluções sustentáveis para sistemas corporativos.' },
    { title: 'Visão de processos', description: 'Compreensão do fluxo ponta a ponta para apoiar implantações, melhorias, homologações e integrações.' },
    { title: 'Colaboração multidisciplinar', description: 'Atuação próxima a desenvolvimento, produto, infraestrutura, fornecedores e áreas usuárias.' },
    { title: 'Organização e priorização', description: 'Gestão de demandas, acompanhamento de sprints e controle de entregas conforme criticidade e prazo.' },
    { title: 'Adaptabilidade', description: 'Experiência em diferentes setores e rápida assimilação de regras de negócio, tecnologias e ambientes.' },
  ];

  const projects = [
    {
      title: 'Implantação de Sistemas na PRODAM-SP',
      company: 'CRP Tecnologia | 2026 – Atual',
      description: 'Atuação como Analista de Sistemas Pleno em projeto de implantação e evolução de sistemas para a PRODAM-SP, conectando áreas de negócio, times técnicos e fornecedores.',
      results: [
        'Condução de reuniões de entendimento e levantamento de requisitos técnicos e funcionais',
        'Configuração e ajustes de regras de sistemas utilizando JavaScript e SQL Server',
        'Acompanhamento de sprints, backlog, testes, homologações e entregas pelo Azure DevOps'
      ],
      technologies: ['JavaScript', 'SQL Server', 'Azure DevOps', 'Scrum', 'Implantação'],
      impact: 'Projeto atual'
    },
    {
      title: 'Sustentação de Plataforma Logística',
      company: 'Strada | 2022 – 2025',
      description: 'Sustentação N3 de aplicação crítica de logística, com análise de incidentes, dados, performance e acompanhamento de mudanças em produção.',
      results: [
        'Análise de logs, performance e integridade de dados com SQL, Oracle e New Relic',
        'Validação de GMUDs, acompanhamento de deploys e execução de testes',
        'Produção de documentação técnica e funcional em BPMN e UML'
      ],
      technologies: ['SQL', 'Oracle', 'New Relic', 'QA', 'BPMN', 'UML'],
      impact: 'Sistema crítico'
    },
    {
      title: 'Integração e Sustentação de Sistemas Corporativos',
      company: 'GAFOR, Unitrading, Carrefour e JBS',
      description: 'Experiência em sustentação, integração e melhoria de sistemas corporativos nos segmentos de logística, varejo e indústria.',
      results: [
        'Suporte e melhorias em SAP, Hybris, PDV e sistemas internos',
        'Levantamento de requisitos e integração entre áreas de negócio e TI',
        'Consultas SQL, monitoramento e atendimento orientado a SLA'
      ],
      technologies: ['SAP', 'Hybris', 'SQL', 'Zabbix', 'Jira', 'Service Desk'],
      impact: 'Experiência consolidada'
    }
  ];

  const experience = [
    {
      company: 'CRP Tecnologia',
      role: 'Analista de Sistemas Pleno — Projeto PRODAM-SP',
      period: 'mai/2026 – atual',
      desc: [
        'Atuação na implantação, configuração e evolução de sistemas corporativos para a PRODAM-SP',
        'Condução de reuniões com áreas técnicas e de negócio para entendimento de processos e levantamento de requisitos',
        'Análise e documentação de requisitos técnicos e funcionais, regras de negócio e cenários de uso',
        'Configuração e ajustes de sistemas utilizando JavaScript e SQL Server',
        'Criação de consultas, validações, correções e análises de dados em SQL Server',
        'Acompanhamento de backlog, sprints, atividades e entregas por meio do Azure DevOps',
        'Apoio a testes integrados, homologações, implantações e análise de incidentes pós-entrega',
        'Interface entre usuários, equipe de desenvolvimento, fornecedores e demais stakeholders'
      ]
    },
    {
      company: 'JD Consultores',
      role: 'Analista de Projetos e Implantação',
      period: 'nov/2025 – abr/2026',
      desc: [
        'Acompanhamento de projetos e atividades de implantação de sistemas',
        'Interface com usuários e equipes técnicas para entendimento e organização das demandas',
        'Apoio a testes, validações, documentação e acompanhamento de entregas'
      ]
    },
    {
      company: 'Strada',
      role: 'Analista de Suporte N3 / Analista de Sistemas',
      period: 'dez/2022 – set/2025',
      desc: [
        'Resolução de incidentes críticos em aplicação de logística, garantindo a disponibilidade do sistema',
        'Uso de SQL, Oracle e New Relic para análise de performance, logs e integridade de dados',
        'Documentação técnica e funcional com BPMN e UML',
        'QA, testes, validação de GMUDs e acompanhamento de deploys',
        'Integração com áreas de negócio, produto e engenharia'
      ]
    },
    {
      company: 'Unitrading Logistics',
      role: 'Analista de TI Sênior / Analista de Sistemas',
      period: 'nov/2021 – mai/2022',
      desc: [
        'Levantamento e análise de requisitos junto a usuários-chave',
        'Sustentação e suporte a aplicações críticas da operação',
        'Consultas SQL para extração e análise de dados',
        'Integração entre áreas de negócio e TI'
      ]
    },
    {
      company: 'GAFOR Logística',
      role: 'Analista de TI Pleno / Analista de Sistemas',
      period: 'out/2020 – set/2021',
      desc: [
        'Suporte e melhorias em ERP SAP e sistemas internos',
        'Levantamento de requisitos para processos logísticos',
        'Consultas SQL, relatórios e integração de sistemas internos e externos'
      ]
    },
    {
      company: 'Carrefour',
      role: 'Analista de Sistemas',
      period: 'mai/2018 – fev/2019',
      desc: [
        'Suporte N2 a pedidos online e integração com ERP Hybris',
        'Monitoramento de SLA e análise de inconsistências em pedidos',
        'Gestão de demandas por meio do Jira'
      ]
    },
    {
      company: 'JBS',
      role: 'Analista de Suporte SAP / Analista de Sistemas',
      period: 'set/2015 – jan/2018',
      desc: [
        'Suporte e sustentação a sistemas SAP e PDV',
        'Monitoramento via Zabbix em ambientes críticos',
        'Atendimento via Service Desk com foco em SLAs'
      ]
    }
  ];

  const education = [
    { course: 'Graduação em Inteligência Artificial e Automação Digital', institution: 'UniFECAF', period: '2025 – 2027' },
    { course: 'Análise e Desenvolvimento de Sistemas', institution: 'Universidade Anhembi Morumbi', period: '2018 – 2020' },
    { course: 'Product Manager', institution: 'EBAC', period: '2025 – 2026' },
    { course: 'Desenvolvimento de Software FullStack', institution: 'Cubos Academy', period: '2024 – 2025' },
    { course: 'Engenharia de Dados', institution: 'Data Science Academy', period: '2022 – 2023' },
  ];

  return (
    <div className={`${bgClass} transition-colors duration-300 min-h-screen w-full overflow-x-hidden`}>
      {/* Navbar CORRIGIDA */}
      <nav className={`fixed w-full z-50 transition-all backdrop-blur-md ${isScrolled ? (isDark ? 'bg-gray-950/80 border-b border-gray-800' : 'bg-white/80 border-b border-gray-200') : 'bg-transparent'}`}>
        <div className="w-full px-4 py-4 flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Soli Deo Gloria
          </div>

          {/* ✅ Agora está DENTRO da div pai */}
          <div className="hidden md:flex gap-8 items-center">
            {['Sobre', 'Competências', 'Soft Skills', 'Projetos', 'Experiência', 'Formação', 'Contato'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`text-sm font-medium ${isDark ? 'text-gray-300 hover:text-emerald-500' : 'text-gray-700 hover:text-emerald-600'} transition-colors`}>
                {item}
              </a>
            ))}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full transition-colors border ${isDark ? 'hover:bg-emerald-500/10 border-emerald-500/30' : 'hover:bg-gray-200 border-gray-300'}`}>
              {isDark ? <Sun className="w-5 h-5 text-emerald-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full transition-colors"
            >
              {isDark ? (
                <Sun className="w-5 h-5" style={{ color: '#10b981' }} />
              ) : (
                <Moon className="w-5 h-5" style={{ color: '#374151' }} />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" style={{ color: isDark ? '#ffffff' : '#1f2937' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: isDark ? '#ffffff' : '#1f2937' }} />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className={`md:hidden ${isDark ? 'bg-slate-800 border-slate-700' : sectionBgClass} px-4 py-4 flex flex-col gap-4 border-t`}>
              {['Sobre', 'Competências', 'Soft Skills', 'Projetos', 'Experiência', 'Formação', 'Contato'].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`${isDark ? 'text-emerald-300 hover:text-emerald-200' : 'text-emerald-600 hover:text-emerald-700'} transition-colors font-medium`} onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
                Analista de Sistemas Pleno | Implantação, Sustentação e Integração
              </p>
              <p className={`text-base mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Atuação atual em implantação de sistemas para a PRODAM-SP
              </p>
              <p className="text-sm md:text-base mb-6 italic font-medium text-blue-600">
                "Conecto necessidades de negócio, tecnologia e operação para entregar sistemas confiáveis."
              </p>

              <div className={`flex flex-col gap-2 mb-8 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <a href="mailto:llopes3025@gmail.com">llopes3025@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <a href="tel:+5511987079347">+55 (11) 98707-9347</a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-blue-600" />
                    <a href="https://www.instagram.com/lklopesbjj/" target="_blank" rel="noopener noreferrer">@lklopesbjj</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-blue-600" />
                    <a href="https://github.com/llopes0610" target="_blank" rel="noopener noreferrer">github.com/llopes0610</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/lucasslopes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl !text-white px-5 py-2 md:px-6 md:py-3 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base font-bold">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href="#contato" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 shadow-lg hover:shadow-xl !text-white px-5 py-2 md:px-6 md:py-3 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base font-bold">
                  <Send className="w-5 h-5" /> Contato
                </a>
                <a href="/Curriculo_Lucas_Silva_Lopes.docx" download className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl !text-white px-5 py-2 md:px-6 md:py-3 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base font-bold">
                  <Download className="w-5 h-5" /> Baixar CV
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
                <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                <p className="text-gray-600 dark:text-gray-400">Empresas na trajetória</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-400">Comprometido</p>
              </div>
            </div>
            <p className={`text-lg leading-relaxed mb-6 mt-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Profissional de tecnologia com mais de 8 anos de experiência em análise, implantação, sustentação e integração de sistemas corporativos nos setores público, logístico, varejista e industrial.
            </p>

            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Atualmente atuo na <strong>CRP Tecnologia</strong>, em projeto de implantação de sistemas para a <strong>PRODAM-SP</strong>, conduzindo reuniões, levantamento de requisitos, configurações em JavaScript, análises em SQL Server e acompanhamento de sprints pelo Azure DevOps.
            </p>

            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Tenho experiência com <strong>SQL Server, Oracle, JavaScript, Python, .NET, SAP e Hybris</strong>, além de integrações, observabilidade, QA, documentação técnica e metodologias ágeis. Meu foco é transformar necessidades de negócio em soluções claras, testáveis e sustentáveis.
            </p>

            <p className={`text-lg leading-relaxed italic font-semibold text-blue-600 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              Busco oportunidades em que eu possa contribuir com visão analítica, proximidade com o negócio e execução técnica na evolução de sistemas corporativos.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competências" className="py-20 px-4 w-screen">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Competências Técnicas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Soft Skills Section */}
      <section id="soft-skills" className={`py-20 px-4 w-screen ${sectionBgClass}`}>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Competências Comportamentais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, idx) => (
              <div key={idx} className={`${cardBgClass} backdrop-blur-sm p-6 rounded-xl border ${borderClass} transition-all hover:shadow-lg`}>
                <div className="flex items-start gap-3 mb-3">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg">{skill.title}</h3>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-4 w-screen">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projetos Destaque</h2>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className={`${cardBgClass} backdrop-blur-sm p-6 md:p-8 rounded-xl border-l-4 border-blue-600 transition-all hover:shadow-lg`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-blue-600 font-semibold text-sm">{project.company}</p>
                  </div>
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold mt-2 md:mt-0">{project.impact}</span>
                </div>
                <p className={`text-base mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-sm">Resultados Alcançados:</h4>
                  <ul className={`space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.results.map((result, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <Target className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-600/20 text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
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
                  <span><strong>AZ-900 — Microsoft Azure Fundamentals</strong> (2025)</span>
                </li>
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
                <a href="mailto:llopes3025@gmail.com" className="text-blue-600 hover:underline break-all">llopes3025@gmail.com</a>
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
        <p className="mb-2">© 2026 Lucas Silva Lopes. Todos os direitos reservados.</p>
        <p className="text-sm">Desenvolvido com React e Tailwind CSS</p>
      </footer>
    </div>
  );
}