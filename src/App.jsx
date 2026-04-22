import React, { useState, useEffect } from 'react';

const portfolioData = {
  name: "Rayan Luqman Hakim",
  role: "Informatics Engineering",
  githubUrl: "https://github.com/RayanHakim",
  cvUrl: "/Portofolio/CV_Rayan Luqman Hakim.pdf",    
  
  projects: [
    {
      title: "Sentiment Analysis Dashboard",
      category: "MACHINE LEARNING",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      desc: "Aplikasi desktop (Tkinter) untuk analisis sentimen otomatis pada YouTube dan Instagram. Mengimplementasikan Hybrid Ensemble Model dengan Soft Voting.",
      tech: ["Python", "Tkinter", "Scikit-Learn", "NLTK"],
      repo: "https://github.com/RayanHakim/Skripsi-Analisis-Sentimen-Mobil-Listrik-Cina" 
    },
    {
      title: "Website CMS Dinkominfostasandi",
      category: "FULLSTACK DEV",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      desc: "Digitalisasi layanan informasi publik Kabupaten Purworejo. Mempermudah akses data birokrasi secara real-time.",
      tech: ["Python", "Flask", "MySQL", "Bootstrap"],
      repo: "https://github.com/RayanHakim/DINKOMINFOSTASANDI_PURWOREJO_MAGANG"
    },
    {
      title: "Pahlawan Indonesia Mobile",
      category: "MOBILE DEV",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      desc: "Aplikasi mobile edukatif berbasis Flutter. Mengintegrasikan autentikasi terenkripsi, SQLite, dan Sensor Gyroscope.",
      tech: ["Flutter", "Dart", "SQLite", "REST API"],
      repo: "https://github.com/RayanHakim/Project_Akhir_Mobile"
    },
    {
      title: "QA Automation Testing",
      category: "QUALITY ASSURANCE",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      desc: "Pengujian otomatis end-to-end pada Website Dinkominfostasandi. Mencakup UI Testing dan Unit Testing API.",
      tech: ["Selenium", "Pytest", "Locust", "Python"],
      repo: "https://github.com/RayanHakim/Quality-Assurance-Kominfo"
    },
    {
      title: "Pentest Website Kominfo",
      category: "CYBERSECURITY",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      desc: "Hasil pengujian keamanan (Penetration Testing) pada website dinkominfostasandi menggunakan automated scanning.",
      tech: ["OWASP ZAP", "Python", "Security Testing"],
      repo: "https://github.com/RayanHakim/Pentest-Kominfo"
    }
  ],

  internships: [
    {
      role: "Fullstack Developer Intern",
      company: "Dinkominfostasandi Purworejo",
      duration: "Agustus 2025 - September 2025",
      desc: "Mengembangkan website cms informasi publik, mengelola basis data MySQL, dan membantu digitalisasi layanan informasi daerah."
    }
  ],

  techStack: [
    { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
    { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
    { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
    { name: "React.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
    { name: "Flutter", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" },
  ],

  tools: [
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
    { name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Android Studio", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg" },
  ]
};

// --- Komponen Marquee Futuristik ---
const TechMarquee = ({ items, title, reverse = false }) => {
  const marqueeClass = reverse ? "animate-marquee-reverse" : "animate-marquee";
  return (
    <div className="relative overflow-hidden py-4 mb-8">
      <h3 className="text-xl sm:text-2xl font-mono mb-8 text-center text-[#8C00FF] uppercase tracking-[0.3em] font-bold">
        {'//'} {title}
      </h3>
      
      {/* Efek gradient fading di tepi marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080210] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080210] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max">
        <div className={`flex gap-8 px-4 ${marqueeClass}`}>
          {[...items, ...items, ...items, ...items].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 p-6 sm:p-8 bg-[#0e041d] border-2 border-[#450693] rounded-2xl hover:border-[#8C00FF] hover:shadow-[0_0_25px_rgba(140,0,255,0.4)] hover:-translate-y-2 transition-all duration-300 min-w-[260px] sm:min-w-[320px] group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-2 opacity-80 group-hover:opacity-100 transition-opacity">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => { e.target.src = "https://cdn.simpleicons.org/google/ffffff"; }} 
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-slate-300 group-hover:text-[#FFC400] transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Komponen Grid Project Modern (1 Baris 1 Kolom Ekstra Besar) ---
const ProjectGrid = ({ projects }) => (
  <div className="grid grid-cols-1 gap-12 sm:gap-16 px-4">
    {projects.map((project, i) => (
      <div
        key={i}
        className="group relative flex flex-col lg:flex-row overflow-hidden bg-[#0a0214] border-2 border-[#450693] hover:border-[#FF3F7F] rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(255,63,127,0.3)]"
      >
        <div className="w-full lg:w-5/12 h-64 sm:h-96 lg:h-auto overflow-hidden relative border-b-2 lg:border-b-0 lg:border-r-2 border-[#450693] group-hover:border-[#FF3F7F] transition-colors duration-500">
          <div className="absolute inset-0 bg-[#450693]/50 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
          />
          {/* Garis aksen highlight */}
          <div className="absolute bottom-0 left-0 w-full lg:w-2 lg:h-full h-2 bg-gradient-to-r lg:bg-gradient-to-b from-[#8C00FF] to-[#FF3F7F] z-20"></div>
        </div>

        <div className="w-full lg:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col relative z-10 bg-gradient-to-b lg:bg-gradient-to-r from-[#0e041d] to-[#0a0214]">
          <span className="inline-block self-start font-mono text-[#FFC400] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
            {project.category}
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight group-hover:text-[#8C00FF] transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 mb-8 text-lg sm:text-xl font-light leading-relaxed">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-[#450693]/20 text-[#8C00FF] text-sm sm:text-base font-mono rounded-lg border border-[#450693]"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center gap-4 py-4 px-8 bg-transparent border-2 border-[#FF3F7F] text-[#FF3F7F] w-fit rounded-xl hover:bg-[#FF3F7F] hover:text-white transition-all duration-300 font-bold uppercase text-sm sm:text-base tracking-widest"
          >
            Source Code <span className="font-mono text-xl leading-none">{'->'}</span>
          </a>
        </div>
      </div>
    ))}
  </div>
);

// --- Komponen Experience Timeline ---
const ExperienceCard = ({ experience }) => (
  <div className="relative pl-10 sm:pl-16 py-8 border-l-4 border-[#450693] hover:border-[#FFC400] transition-colors duration-300 max-w-5xl mx-auto group">
    {/* Titik Timeline */}
    <div className="absolute left-[-14px] top-10 w-6 h-6 bg-[#0a0214] border-4 border-[#8C00FF] group-hover:border-[#FFC400] group-hover:bg-[#FFC400] group-hover:shadow-[0_0_15px_#FFC400] rounded-full transition-all duration-300"></div>
    
    <div className="bg-[#0e041d] border-2 border-[#450693] p-8 sm:p-12 rounded-2xl group-hover:border-[#8C00FF] transition-colors">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
        <div>
          <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {experience.role}
          </h4>
          <p className="text-[#8C00FF] font-mono text-base sm:text-lg tracking-wider">{experience.company}</p>
        </div>
        <span className="font-mono text-[#FF3F7F] text-sm sm:text-base bg-[#450693]/20 px-4 py-2 rounded-lg border border-[#450693] whitespace-nowrap">
          {experience.duration}
        </span>
      </div>
      <p className="text-slate-400 font-light text-lg sm:text-xl leading-relaxed">
        {experience.desc}
      </p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="font-sans relative bg-[#080210] min-h-screen overflow-x-hidden text-slate-300 selection:bg-[#FF3F7F] selection:text-white">
      {/* --- INJEKSI CSS UNTUK ANIMASI TECH/CYBER --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap');
        
        .font-mono {
          font-family: 'Fira Code', monospace;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }

        .cyber-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background-image: 
            linear-gradient(rgba(69, 6, 147, 0.2) 2px, transparent 2px),
            linear-gradient(90deg, rgba(69, 6, 147, 0.2) 2px, transparent 2px);
          background-size: 60px 60px;
          transform: perspective(500px) rotateX(60deg);
          animation: grid-move 20s linear infinite;
          pointer-events: none;
          z-index: 0;
        }
        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(60px); }
        }
      `}</style>

      {/* Efek Cahaya Belakang (Glow Orbs) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#450693] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-[#8C00FF] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute top-[40%] right-[10%] w-[20vw] h-[20vw] bg-[#FF3F7F] rounded-full blur-[150px] opacity-10"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center z-10 border-b border-[#450693]/30">
        <div className="max-w-5xl mx-auto w-full relative">
          
          <div className="inline-block mb-8 font-mono text-[#FFC400] tracking-[0.3em] text-sm sm:text-base uppercase bg-[#450693]/20 px-6 py-2 border-2 border-[#450693] rounded-lg">
            System.out.println("Hello World");
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-black leading-none mb-6 text-white tracking-tight">
            {portfolioData.name.split(' ')[0]} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C00FF] via-[#FF3F7F] to-[#FFC400]">
              {portfolioData.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl font-mono text-slate-400 mb-12 max-w-2xl mx-auto uppercase tracking-widest">
            {'>'} {portfolioData.role}_
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-10 py-5 bg-[#8C00FF] text-white font-bold rounded-xl hover:bg-[#FF3F7F] hover:shadow-[0_0_25px_rgba(255,63,127,0.5)] transition-all duration-300 uppercase text-sm tracking-widest"
            >
              View Projects
            </a>
            <a
              href={portfolioData.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-transparent text-white font-bold rounded-xl border-2 border-[#8C00FF] hover:bg-[#8C00FF]/10 transition-all duration-300 uppercase text-sm tracking-widest"
            >
              Lihat CV
            </a>
            <a
              href={portfolioData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-[#0e041d] text-[#FFC400] font-bold rounded-xl border-2 border-[#450693] hover:border-[#FFC400] hover:text-[#FFC400] hover:bg-[#FFC400]/10 transition-all duration-300 uppercase text-sm tracking-widest flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <div className="w-full relative z-20 pt-16 pb-20">
        
        {/* TECH STACK & TOOLS (MARQUEE) */}
        <section className="mb-20">
          <TechMarquee items={portfolioData.techStack} title="Technologies" />
          <TechMarquee items={portfolioData.tools} title="Development_Tools" reverse={true} />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 px-4 text-center sm:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              Featured<span className="text-[#8C00FF]">_Works</span>
            </h2>
            <div className="h-1 flex-grow bg-gradient-to-r from-[#450693] to-transparent w-full sm:w-auto"></div>
          </div>
          <ProjectGrid projects={portfolioData.projects} />
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16 px-4 text-center sm:text-left">
            <div className="hidden sm:block h-1 w-16 bg-[#8C00FF]"></div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              Work<span className="text-[#FF3F7F]">_Experience</span>
            </h2>
            <div className="h-1 flex-grow bg-gradient-to-r from-[#450693] to-transparent w-full sm:w-auto"></div>
          </div>
          <div className="px-4">
            {portfolioData.internships.map((job, i) => (
              <ExperienceCard key={i} experience={job} />
            ))}
          </div>
        </section>

      </div>

      {/* --- FOOTER MODERN (CYBER GRID) --- */}
      <footer className="relative bg-[#05010a] pt-32 pb-16 border-t-2 border-[#450693]/50 overflow-hidden z-30">
        
        {/* Grid Background Effect */}
        <div className="absolute bottom-0 left-0 w-full h-[400px] overflow-hidden opacity-30">
           <div className="cyber-grid"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#05010a]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-white mb-6 uppercase tracking-widest">
            Let's <span className="text-[#FFC400]">Connect</span>
          </h2>
          <p className="text-slate-400 font-mono text-lg sm:text-xl mb-16">
            Open for opportunities and collaborations.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 sm:gap-12 mb-24">
            <a href={portfolioData.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#8C00FF] font-mono text-xl sm:text-2xl uppercase tracking-widest transition-colors hover:scale-110 transform">
              [ GitHub ]
            </a>
            <a href="https://www.linkedin.com/in/rayan-luqman-hakim-ab8a81379/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#FF3F7F] font-mono text-xl sm:text-2xl uppercase tracking-widest transition-colors hover:scale-110 transform">
              [ LinkedIn ]
            </a>
            <a href="mailto:rayanluqmanhakim@gmail.com" className="text-slate-300 hover:text-[#FFC400] font-mono text-xl sm:text-2xl uppercase tracking-widest transition-colors hover:scale-110 transform">
              [ Email ]
            </a>
          </div>
          
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#450693] to-transparent mb-12"></div>
          
          <p className="text-slate-500 font-mono text-sm sm:text-base uppercase tracking-widest">
            © 2026 {portfolioData.name} <br className="sm:hidden mt-4" />
            <span className="hidden sm:inline"> | </span> 
            Built with React & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}