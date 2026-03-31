import { useState, useEffect } from "react";
import "@/App.css";

// Portfolio Data based on Resume
const portfolioData = {
  name: "Subash Sekar",
  title: "Python Full Stack Developer",
  subtitle: "Django | FastAPI | REST APIs | AI/LLM Integration",
  email: "subashsekar116@gmail.com",
  phone: "+91 8438420257",
  location: "Chennai, India",
  linkedin: "https://linkedin.com/in/subash-sekar-1609",
  github: "https://github.com/Subashsekar",
  about: `Python Full Stack Developer with hands-on experience in building scalable web applications using Django, FastAPI, and modern frontend technologies. Strong expertise in backend development, REST API design, Microservices architecture, and database-driven applications. Experience working with frontend technologies (HTML, CSS, JavaScript) to develop responsive and user-friendly interfaces. Skilled in integrating AI/LLM capabilities (OpenAI, Gemini, Claude, Llama) into full stack applications using RAG pipelines and intelligent APIs. Proficient in end-to-end application development, including authentication (JWT/OAuth2), system design, caching, and deployment using Docker.`,
  
  experience: [
    {
      company: "Conin Technologies Pvt Ltd",
      location: "Hyderabad, India",
      role: "Python Full Stack Developer",
      period: "January 2024 - Present",
      highlights: [
        "Developed end-to-end full stack applications using Django and FastAPI, delivering scalable and maintainable web solutions",
        "Built and consumed RESTful APIs for seamless frontend-backend integration",
        "Designed backend Microservices for healthcare automation and integrated them with frontend workflows",
        "Developed user-facing modules with HTML, CSS, and JavaScript for dashboards and data interaction",
        "Integrated AI-powered features using OpenAI, Gemini, Claude, and Llama APIs into web applications",
        "Implemented RAG pipelines for intelligent search and document retrieval features",
        "Built asynchronous processing systems using Celery and Redis for background tasks",
        "Implemented secure authentication using JWT, OAuth2, and RBAC"
      ]
    }
  ],
  
  education: [
    {
      degree: "MBA - Management Information Systems & Marketing",
      institution: "SRM Institute of Science and Technology, Trichy",
      period: "2022 - 2024"
    }
  ],
  
  skills: {
    "Programming Languages": ["Python", "JavaScript", "Java"],
    "Frontend Development": ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    "Backend Development": ["Django", "Django REST Framework", "FastAPI", "REST APIs", "Microservices"],
    "AI / LLM Integration": ["OpenAI", "Gemini", "Claude", "Llama", "RAG", "LlamaIndex", "Qdrant", "Prompt Engineering"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
    "Tools & DevOps": ["Docker", "Docker Compose", "Git", "GitHub", "Postman"],
    "Performance & System Design": ["Redis", "Celery", "Caching", "Task Queues", "API Gateway"],
    "Testing": ["PyTest", "Unit Testing"]
  },
  
  projects: [
    {
      title: "Care AI - Full Stack Healthcare Intelligence Platform",
      techStack: ["FastAPI", "Django", "LlamaIndex", "Qdrant", "OpenAI", "Gemini", "Claude", "Redis", "Celery", "Supabase", "Docker"],
      description: "Designed and developed a full stack healthcare platform using Microservices architecture for handling patient data, AI processing, and workflow automation.",
      highlights: [
        "Built scalable RESTful APIs using FastAPI and integrated them with frontend modules",
        "Implemented RAG pipelines using LlamaIndex and Qdrant Vector DB for clinical document search",
        "Integrated multiple LLM providers (OpenAI, Gemini, Claude, Llama) for intelligent query handling",
        "Built AI Agents using LangChain for multi-step reasoning and automated clinical workflows",
        "Developed asynchronous embedding service using Celery and Redis for large-scale vector generation"
      ]
    },
    {
      title: "CRM - Full Stack Lead Management System",
      techStack: ["Django", "Django REST Framework", "PostgreSQL", "Docker", "HTML", "CSS", "JavaScript"],
      description: "Developed a full stack CRM application to manage the complete lead lifecycle including creation, assignment, tracking, and reporting.",
      highlights: [
        "Built backend services using Django and DRF, exposing REST APIs for frontend integration",
        "Designed interactive UI components using HTML, CSS, and JavaScript",
        "Implemented role-based access control (RBAC) for secure data access",
        "Optimized database schema and queries in PostgreSQL for improved performance",
        "Containerized the application using Docker for easy deployment"
      ]
    }
  ]
};

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gradient" data-testid="nav-logo">SS</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                data-testid={`nav-${item}`}
                className={`nav-link capitalize ${activeSection === item ? 'active' : ''}`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                data-testid={`mobile-nav-${item}`}
                className="block py-3 text-white/80 hover:text-white capitalize"
                onClick={() => {
                  setActiveSection(item);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="hero-section" data-testid="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <p className="hero-greeting animate-fade-in">Hello, I'm</p>
          <h1 className="hero-name animate-fade-in-delay-1">{portfolioData.name}</h1>
          <h2 className="hero-title animate-fade-in-delay-2">{portfolioData.title}</h2>
          <p className="hero-subtitle animate-fade-in-delay-3">{portfolioData.subtitle}</p>
          
          <div className="hero-cta animate-fade-in-delay-4">
            <a href="#contact" className="btn-primary" data-testid="hero-contact-btn">
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary" data-testid="hero-projects-btn">
              View Projects
            </a>
          </div>
          
          <div className="hero-social animate-fade-in-delay-5">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="social-icon" data-testid="hero-github-link">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" data-testid="hero-linkedin-link">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href={`mailto:${portfolioData.email}`} className="social-icon" data-testid="hero-email-link">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="section-container" data-testid="about-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">{portfolioData.about}</p>
            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">{portfolioData.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">{portfolioData.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <span className="info-value">{portfolioData.phone}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value status-available">Immediate Joiner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container section-dark" data-testid="experience-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="experience-card" data-testid={`experience-card-${index}`}>
              <div className="experience-header">
                <div className="experience-company-info">
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-location">{exp.location}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="education-section">
          <h3 className="subsection-title">Education</h3>
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="education-card" data-testid={`education-card-${index}`}>
              <h4 className="education-degree">{edu.degree}</h4>
              <p className="education-institution">{edu.institution}</p>
              <span className="education-period">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  return (
    <section id="skills" className="section-container" data-testid="skills-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(portfolioData.skills).map(([category, skills], index) => (
            <div key={index} className="skill-category" data-testid={`skill-category-${index}`}>
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-tags">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container section-dark" data-testid="projects-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="project-card" data-testid={`project-card-${index}`}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="section-container" data-testid="contact-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm currently open to new opportunities. Whether you have a project in mind, 
          a question, or just want to say hello, feel free to reach out!
        </p>
        
        <div className="contact-cards">
          <a href={`mailto:${portfolioData.email}`} className="contact-card" data-testid="contact-email">
            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="contact-label">Email</span>
            <span className="contact-value">{portfolioData.email}</span>
          </a>
          
          <a href={`tel:${portfolioData.phone}`} className="contact-card" data-testid="contact-phone">
            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="contact-label">Phone</span>
            <span className="contact-value">{portfolioData.phone}</span>
          </a>
          
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card" data-testid="contact-linkedin">
            <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">Connect with me</span>
          </a>
          
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="contact-card" data-testid="contact-github">
            <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="contact-label">GitHub</span>
            <span className="contact-value">View my code</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} {portfolioData.name}. Built with passion.
          </p>
          <div className="footer-links">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${portfolioData.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App" data-testid="portfolio-app">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
