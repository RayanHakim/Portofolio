import React from 'react';

// DATA CONFIGURATION 
const portfolioData = {
  name: "Rayan Luqman Hakim",
  role: "Informatics Engineering",
  githubUrl: "https://github.com/RayanHakim",
  
  projects: [
    {
      title: "Sentiment Analysis Dashboard",
      category: "MACHINE LEARNING (NLP)",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      desc: "Aplikasi desktop (Tkinter) untuk analisis sentimen otomatis pada YouTube dan Instagram. Mengimplementasikan Hybrid Ensemble Model (Naive Bayes & Logistic Regression) dengan Soft Voting, serta vektorisasi TF-IDF dan Count Vectorizer.",
      tech: ["Python", "Tkinter", "Scikit-Learn", "NLTK", "SMOTE"],
      repo: "https://github.com/RayanHakim/Skripsi-Analisis-Sentimen-Mobil-Listrik-Cina" 
    },
    {
      title: "Web Portal Dinkominfostasandi",
      category: "FULLSTACK DEVELOPMENT",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      desc: "Digitalisasi layanan informasi publik Kabupaten Purworejo. Mempermudah akses data birokrasi secara real-time melalui integrasi MySQL dan Flask API.",
      tech: ["Python", "Flask", "MySQL", "Bootstrap"],
      repo: "https://github.com/RayanHakim/DINKOMINFOSTASANDI_PURWOREJO_MAGANG"
    },
    {
      title: "Pahlawan Indonesia Mobile",
      category: "MOBILE DEVELOPMENT",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      desc: "Aplikasi mobile edukatif berbasis Flutter. Mengintegrasikan autentikasi terenkripsi, SQLite untuk penyimpanan lokal, REST API, Sensor Gyroscope untuk fitur interaktif, dan sistem notifikasi lokal.",
      tech: ["Flutter", "Dart", "SQLite", "REST API", "Sensors"],
      repo: "https://github.com/RayanHakim/Project_Akhir_Mobile"
    },
    {
      title: "QA Automation Testing Portal",
      category: "QUALITY ASSURANCE",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      desc: "Pengujian otomatis end-to-end pada Web Portal Dinkominfostasandi. Mencakup UI Testing menggunakan Selenium, Unit Testing API dengan Pytest, serta simulasi Load Testing hingga 1000 Virtual Users menggunakan Locust.",
      tech: ["Selenium", "Pytest", "Locust", "Python"],
      repo: "https://github.com/RayanHakim/Quality-Assurance-Kominfo"
    },
    {
      title: "Pentest Web Portal Kominfo",
      category: "CYBERSECURITY",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      desc: "Hasil pengujian keamanan (Penetration Testing) pada web portal pemerintahan. Menggabungkan automated scanning (OWASP ZAP) dan pengujian manual terhadap kerentanan Brute Force, XSS, serta SQL Injection.",
      tech: ["OWASP ZAP", "Python", "Security Testing"],
      repo: "https://github.com/RayanHakim/Pentest-Kominfo"
    }
  ],

  internships: [
    {
      role: "Fullstack Developer Intern",
      company: "Dinkominfostasandi Purworejo",
      duration: "Agustus 2025 - September 2025",
      desc: "Mengembangkan portal web cms informasi publik, mengelola basis data MySQL, dan membantu digitalisasi layanan informasi daerah."
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
    { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg" },
    { name: "Laravel", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original-wordmark.svg" },
    { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Flutter", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
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

// COMPONENTS 

const TechCard = ({ item }) => (
  <div className="flex items-center gap-4 sm:gap-6 bg-slate-900/40 border border-slate-800 p-4 sm:p-6 rounded-2xl hover:border-sky-500/50 hover:bg-slate-800/60 transition-all duration-300 group shadow-lg">
    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors shrink-0">
      <img 
        src={item.icon} 
        alt={item.name} 
        className={`w-8 h-8 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform ${item.name === 'Next.js' || item.name === 'GitHub' ? 'bg-white/10 p-1 rounded-md' : ''}`} 
        onError={(e) => { e.target.src = "https://cdn.simpleicons.org/google/ffffff"; }} 
      />
    </div>
    <span className="text-sm sm:text-xl font-bold text-slate-200 group-hover:text-white transition-colors">{item.name}</span>
  </div>
);

const BigProjectCard = ({ project }) => (
  <div className="group relative w-full bg-slate-900/20 border border-slate-800 rounded-3xl sm:rounded-[2.5rem] overflow-hidden hover:border-sky-500/40 transition-all duration-700 shadow-2xl flex flex-col lg:flex-row items-stretch">
    
    {/* Visual Side */}
    <div className="w-full lg:w-1/2 overflow-hidden h-64 sm:h-80 lg:h-auto relative shrink-0">
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 lg:opacity-50 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden"></div>
    </div>
    
    {/* Content Side */}
    <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-slate-900/80 lg:from-slate-900/40 to-transparent relative z-10">
      <span className="text-sky-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.4em] mb-3 sm:mb-4 uppercase">{project.category}</span>
      <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-4 sm:mb-6 group-hover:text-sky-400 transition-colors leading-tight uppercase tracking-tighter">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 font-light italic">
        "{project.desc}"
      </p>
      <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
        {project.tech.map(t => (
          <span key={t} className="bg-slate-800 text-slate-300 text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-md border border-slate-700 uppercase tracking-widest hover:text-sky-300 hover:border-sky-900 transition-colors">{t}</span>
        ))}
      </div>
      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="w-fit flex items-center gap-3 sm:gap-4 text-white font-bold group/btn mt-auto">
        <span className="h-10 w-10 sm:h-14 sm:w-14 rounded-full border border-slate-700 flex items-center justify-center group-hover/btn:bg-sky-600 group-hover/btn:border-sky-600 transition-all shadow-xl text-lg sm:text-xl">→</span>
        <span className="tracking-[0.1em] sm:tracking-[0.2em] font-mono uppercase text-xs sm:text-sm">Source_Code</span>
      </a>
    </div>
  </div>
);

//  MAIN APP 

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen font-sans selection:bg-sky-500 selection:text-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center items-center px-4 sm:px-6 text-center pt-20 pb-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-sky-600/10 blur-[100px] lg:blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="z-10 animate-fade-in w-full max-w-5xl">
          <p className="font-mono text-sky-500 mb-4 sm:mb-6 tracking-[0.2em] sm:tracking-[0.5em] text-xs sm:text-sm uppercase">Portofolio</p>
          <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-black text-white tracking-tighter leading-none mb-6 sm:mb-8 uppercase break-words">
            {portfolioData.name.split(' ')[0]} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
              {portfolioData.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed uppercase tracking-widest border-y border-slate-900 py-3 sm:py-4">
            {portfolioData.role}
          </p>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a href="#projects" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-black hover:bg-sky-500 hover:text-white transition-all transform hover:scale-105 shadow-2xl tracking-widest text-xs uppercase text-center">VIEW PROJECTS</a>
            <a href={portfolioData.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-slate-700 text-white px-8 py-4 rounded-full font-black hover:bg-slate-800 transition-all tracking-widest text-xs uppercase text-center">Github Profile</a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 sm:space-y-48 pb-32 sm:pb-40">
        
        {/* PROJECTS SECTION */}
        <section id="projects">
          <div className="flex flex-col items-center mb-16 sm:mb-24 text-center">
             <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 uppercase italic tracking-tighter">Selected Works</h2>
             <div className="h-1.5 w-24 sm:w-32 bg-sky-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-16 sm:gap-24">
            {portfolioData.projects.map((p, i) => (
              <BigProjectCard key={i} project={p} />
            ))}
          </div>

          <div className="mt-24 sm:mt-32 flex flex-col items-center bg-slate-900/20 p-8 sm:p-20 rounded-3xl sm:rounded-[3rem] border border-slate-800 border-dashed group text-center mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">Interested in more?</h3>
            <a 
              href={portfolioData.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/gh flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white text-black px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-black hover:bg-sky-500 hover:text-white transition-all shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <img src="https://cdn.simpleicons.org/github/000000" className="w-8 h-8 group-hover/gh:filter group-hover/gh:invert transition-all shrink-0" alt="GitHub" />
              <span className="tracking-[0.1em] sm:tracking-[0.2em] font-mono text-xs sm:text-sm uppercase text-center">Explore all repos</span>
            </a>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-20 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tighter italic">Experience</h2>
            <div className="h-1 w-12 bg-sky-500 mx-auto sm:mx-0"></div>
          </div>
          <div className="space-y-8 sm:space-y-12">
            {portfolioData.internships.map((job, i) => (
              <div key={i} className="bg-slate-900/30 p-6 sm:p-12 rounded-3xl sm:rounded-[2rem] border border-slate-800 hover:border-sky-900/50 transition-all group shadow-xl">
                <div className="flex flex-col sm:flex-row justify-between mb-6 sm:mb-8 gap-4 items-start sm:items-center">
                   <div>
                      <h4 className="text-2xl sm:text-3xl font-black text-white group-hover:text-sky-400 transition-colors uppercase leading-tight tracking-tight">{job.role}</h4>
                      <p className="text-sky-500 font-mono font-bold mt-1 sm:mt-2 tracking-widest uppercase text-xs sm:text-sm">{job.company}</p>
                   </div>
                   <span className="text-slate-400 font-mono bg-slate-950 px-4 sm:px-6 py-2 rounded-full border border-slate-800 h-fit text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-inner whitespace-nowrap">{job.duration}</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-base sm:text-xl font-light italic border-l-4 border-slate-800 pl-4 sm:pl-8 group-hover:border-sky-900 transition-colors">
                  "{job.desc}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS & TOOLS SECTION */}
        <section id="skills" className="max-w-5xl mx-auto space-y-24 sm:space-y-32">
          {/* Tech Stack */}
          <div>
            <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-widest uppercase text-center sm:text-left">Languange</h2>
              <div className="h-px bg-slate-800 w-full sm:flex-grow"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {portfolioData.techStack.map((s, i) => (
                <TechCard key={i} item={s} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-widest uppercase opacity-60 italic text-center sm:text-left">Tools</h2>
              <div className="h-px bg-slate-800 w-full sm:flex-grow opacity-60"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {portfolioData.tools.map((t, i) => (
                <TechCard key={i} item={t} />
              ))}
            </div>
          </div>

          {/* TOEFL Card */}
          <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900/20 p-8 sm:p-16 rounded-3xl sm:rounded-[4rem] border border-sky-500/10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 shadow-2xl relative overflow-hidden group text-center lg:text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-3xl rounded-full group-hover:bg-sky-500/10 transition-colors"></div>
              <div className="z-10">
                <span className="text-sky-500 font-mono mb-2 sm:mb-4 tracking-[0.2em] sm:tracking-[0.5em] block uppercase text-xs sm:text-sm font-bold">English Proficiency</span>
                <h4 className="text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase leading-none">TOEFL EPT Score</h4>
                <p className="text-slate-500 font-mono mt-2 sm:mt-3 uppercase tracking-[0.1em] sm:tracking-widest text-xs sm:text-sm italic opacity-70">Verified March 2026</p>
              </div>
              <div className="flex flex-col items-center z-10 bg-slate-950/30 p-6 sm:p-8 rounded-3xl border border-slate-800/50">
                <div className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-sky-700 leading-none group-hover:scale-110 transition-transform duration-500">437</div>
                <span className="text-slate-400 font-bold tracking-[0.5em] sm:tracking-[1em] mt-2 uppercase text-[10px] sm:text-xs">Total</span>
              </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="py-16 sm:py-24 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 sm:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tighter uppercase leading-none tracking-[0.05em]">{portfolioData.name}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              <a href={portfolioData.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all font-bold text-[10px] sm:text-xs tracking-widest uppercase border-b-2 border-transparent hover:border-sky-500 pb-1">Github</a>
              <a href="https://www.linkedin.com/in/rayan-luqman-hakim-ab8a81379/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all font-bold text-[10px] sm:text-xs tracking-widest uppercase border-b-2 border-transparent hover:border-sky-500 pb-1">LinkedIn</a>
              <a href="rayanluqmanhakim@gmail.com" className="text-slate-400 hover:text-white transition-all font-bold text-[10px] sm:text-xs tracking-widest uppercase border-b-2 border-transparent hover:border-sky-500 pb-1">Email</a>
            </div>
          </div>
          <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left">
            <p className="text-[9px] sm:text-[10px] font-mono text-slate-600 tracking-[0.2em] sm:tracking-[0.4em] uppercase">© 2026 Rayan Luqman Hakim</p>
            <p className="text-[9px] sm:text-[10px] font-mono text-slate-600 tracking-[0.2em] sm:tracking-[0.4em] uppercase italic opacity-50">Handcrafted with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}