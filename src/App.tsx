import React from 'react';
import { Github, Linkedin, Mail, Code, Server, Database, Brain, Terminal, Globe, Rocket, Coffee, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white">
     
      <header className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Pyetro
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-200">
            Desenvolvedor Web
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto mb-8">
            Transformando ideias em soluções digitais com paixão por código limpo e inovação tecnológica
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contato" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
              Contato
            </a>
            <a href="#projetos" className="bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg font-medium transition duration-300">
              Projetos
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Sobre Mim</h2>
          <p className="text-blue-200 text-lg mb-6">
          Sou um desenvolvedor focado em construir aplicações web modernas e performáticas. Trabalho com JavaScript e Python, desenvolvendo tanto no frontend, com React e Next.js, quanto no backend, com Node.js e Express.

Gosto de desafios e estou sempre aprimorando minhas habilidades, buscando escrever código limpo, eficiente e escalável. Tenho um olhar analítico para a resolução de problemas e foco na experiência do usuário e na performance das aplicações.

🔹 Tecnologias com as quais trabalho:
✔ Frontend: React.js, Next.js, TailwindCSS
✔ Backend: Node.js, Express, Python
✔ Banco de Dados: MongoDB, Supabase, Firebase, Sql
✔ Ferramentas: Git, Docker, Vercel

Atualmente, estou desenvolvendo projetos que exploram interfaces interativas, otimização de desempenho e boas práticas de desenvolvimento. Gosto de aprender novas tecnologias e trocar ideias sobre programação
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-200">Problem Solver</span>
            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-blue-200">Clean Code</span>
            <span className="px-4 py-2 bg-green-500/20 rounded-full text-blue-200">Trabalho em Equipe</span>
            <span className="px-4 py-2 bg-red-500/20 rounded-full text-blue-200">Aprendizado Contínuo</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition duration-300">
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            <ul className="text-blue-200 space-y-2">
              <li>React & Next.js</li>
              <li>Tailwind CSS</li>
              <li>HTML5 & CSS3</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition duration-300">
            <Server className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Backend</h3>
            <ul className="text-blue-200 space-y-2">
              <li>Node.js</li>
              <li>Python</li>
              <li>APIs RESTful</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition duration-300">
            <Database className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Banco de Dados</h3>
            <ul className="text-blue-200 space-y-2">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition duration-300">
            <Brain className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">DevOps</h3>
            <ul className="text-blue-200 space-y-2">
              <li>Docker</li>
              <li>AWS</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden group">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Projeto 1" 
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <a href="https://memoriasdecasal.netlify.app" className="text-white hover:text-blue-300 transition">Ver Projeto →</a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Plataforma de armazenamento de Memorias</h3>
              <p className="text-blue-200 mb-4">Plataforma Para Salvar as Memorias de um casal</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden group">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80" 
                alt="Projeto 2" 
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <a href="acervogeek28.netlify.app" className="text-white hover:text-blue-300 transition">Ver Projeto →</a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">LandingPage Acervo de Livros</h3>
              <p className="text-blue-200 mb-4">Plataforma em desenvolvimento para a criação de um acervo de livros</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">GraphQL</span>
                <span className="px-3 py-1 bg-red-500/20 rounded-full text-sm">Redis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experiência Profissional</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Desenvolvedor Frelancer</h3>
              <span className="text-blue-300">2024 - Presente</span>
            </div>
            <p className="text-blue-200 mb-4"> </p>
              
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm"></span>
              <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm"></span>
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Vamos Conversar?</h2>
        <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-center text-blue-200 text-lg mb-6">
              Estou sempre interessado em novos projetos e oportunidades de colaboração.
              Vamos criar algo incrível juntos!
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/TrainerKiri" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition duration-300">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/henriquespyetro/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition duration-300">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:pyetro@email.com" className="text-blue-200 hover:text-white transition duration-300">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 text-center text-blue-200">
        <p className="flex items-center justify-center gap-2">
          pPyetro ©{new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;