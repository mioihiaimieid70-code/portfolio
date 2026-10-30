import { useEffect, useMemo, useState } from 'react';

type Project = {
  id?: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  workflow: string[];
  tools: string[];
  features: string[];
  image: string;
  video?: string;
  poster?: string;
  projectType: string;
};

const skills = {
  automation: [
    'n8n',
    'Webhooks',
    'HTTP Requests',
    'APIs',
    'JSON',
    'Workflow logic',
    'IF / conditional logic',
    'Data processing',
    'Data transformation',
    'RSS',
    'Scheduling',
    'Google Sheets integration',
  ],
  ai: [
    'AI Agents',
    'Prompt Engineering',
    'AI-powered customer support',
    'AI text processing',
    'Image input / understanding',
    'Voice input / processing',
    'AI workflow automation',
    'Memory concepts',
  ],
  integrations: ['Telegram', 'WhatsApp', 'Google Sheets', 'Postman', 'Webhooks', 'REST APIs / HTTP requests'],
};

const projects: Project[] = [
  {
    title: 'Telegram Restaurant Automation',
    summary:
      'A Telegram-based restaurant automation that helps customers ask menu questions, check prices, place orders, and send the order details into Google Sheets through n8n.',
    problem:
      'Restaurants often rely on repeated manual conversations, menu explanations, and order collection across chat messages.',
    solution:
      'I built an automation that receives Telegram messages, evaluates the request, provides menu and pricing responses, and captures order details in a structured flow.',
    workflow: [
      'Customer sends a message in Telegram',
      'n8n receives the request and starts the workflow',
      'The automation checks the request type and context',
      'AI understands the customer question or order intent',
      'Order details are structured and recorded in Google Sheets',
      'The customer receives an automated response',
    ],
    tools: ['n8n', 'Telegram', 'AI Agent', 'Google Sheets', 'HTTP requests', 'JSON'],
    features: [
      'Menu and pricing responses',
      'Order collection flow',
      'Structured order handling',
      'Automated customer support behavior',
      'Google Sheets logging',
    ],
    image: '/media/telegram_resturant.jpeg',
    video: '/media/telegram-restaurant-video.mp4',
    poster: '/media/telegram_resturant.jpeg',
    projectType: 'Practice project',
  },
  {
    id: 'ai-lead-management-crm',
    title: 'AI Lead Management & Customer Communication System',
    summary:
      'AI-powered WhatsApp lead management and CRM automation built with n8n, AI Agents, Google Sheets, Looker Studio Dashboard, and automated follow-ups.',
    problem:
      'Managing customer conversations, qualifying leads, organizing CRM records, tracking analytics, and remembering follow-ups can require repetitive manual work.',
    solution:
      'An AI-powered lead management and customer communication system designed to automate customer conversations, lead qualification, CRM organization, real-time analytics, and WhatsApp follow-ups. The system uses n8n and WhatsApp Cloud API to communicate naturally with customers, collect and organize lead information, answer service-related questions through a Knowledge Base, calculate lead scores and priorities, and store qualified leads in Google Sheets connected directly to an interactive Google Looker Studio Dashboard.',
    workflow: [
      'WhatsApp Trigger',
      'n8n Automation',
      'AI Agent & Knowledge Base',
      'Lead Scoring & Qualification',
      'Google Sheets & Looker Studio Sync',
      'Automated Scheduled Follow-up',
    ],
    tools: [
      'n8n',
      'AI Agent',
      'WhatsApp Cloud API',
      'Google Sheets CRM',
      'Google Looker Studio',
      'Knowledge Base',
      'Webhooks',
      'Lead Scoring',
      'Automated Follow-ups',
    ],
    features: [
      'AI customer communication in Egyptian Arabic via WhatsApp Cloud API',
      'Knowledge Base integration for official pricing, FAQs, and service details',
      'Automatic lead data collection: name, phone, service, budget, and notes',
      'Intelligent lead qualification and automatic Hot/Warm/Cold scoring',
      'Lightweight Google Sheets CRM with automated status syncing',
      'Executive Looker Studio Dashboard for real-time lead tracking',
      'Automated WhatsApp follow-ups with a maximum of three scheduled attempts',
    ],
    image: '/media/ai-lead-management-workflow.jpeg',
    video: '/media/ai-lead-management-demo.mp4',
    poster: '/media/ai-lead-management-workflow.jpeg',
    projectType: 'Portfolio project',
  },
  {
    title: 'WhatsApp AI Assistant',
    summary:
      'An AI-powered WhatsApp assistant that demonstrates handling text, image, and voice input with automated responses driven by an n8n workflow.',
    problem:
      'Manual support and repetitive messaging can become slow and inconsistent when handling multiple input types.',
    solution:
      'I built a workflow that accepts WhatsApp messages, routes them through AI processing, and delivers an automated response in a conversational flow.',
    workflow: [
      'User sends a WhatsApp message',
      'Automation trigger receives the input',
      'The workflow analyzes the request type',
      'AI processes text, image, or voice input',
      'The system formats the response',
      'The user receives the generated answer',
    ],
    tools: ['n8n', 'WhatsApp', 'AI', 'Webhooks', 'Image input', 'Voice input'],
    features: [
      'Text message handling',
      'Image input support',
      'Voice input support',
      'AI response generation',
      'Workflow-based automation',
    ],
    image: '/media/whatsApp-chat-bot.jpg',
    video: '/media/whatsapp-ai-assistant.mp4',
    poster: '/media/whatsApp-chat-bot.jpg',
    projectType: 'Practice project',
  },
  {
    title: 'AI News Monitor & Telegram Digest',
    summary:
      'This workflow monitors incoming updates, processes the data, and routes it through AI logic before generating a Telegram digest or structured output.',
    problem:
      'Monitoring content and summarizing updates manually can be time-consuming when there are frequent sources or repeated updates.',
    solution:
      'I built an n8n automation that listens for a trigger, processes the incoming information, uses AI for reasoning or summarization, and creates a structured result for Telegram output.',
    workflow: [
      'Trigger starts the automation',
      'Incoming data is received and parsed',
      'The workflow processes the content',
      'AI evaluates or summarizes the information',
      'The result is formatted for Telegram output',
      'The final response is delivered',
    ],
    tools: ['n8n', 'Webhook', 'AI', 'Telegram', 'HTTP requests', 'JSON'],
    features: [
      'Webhook-based trigger',
      'Content parsing',
      'AI-assisted processing',
      'Structured output generation',
      'Telegram delivery flow',
    ],
    image: '/media/ai-news-monitor-telegram-digest.jpeg',
    projectType: 'Practice project',
  },
  {
    title: 'E-Commerce Order Automation',
    summary:
      'A self-built practical e-commerce automation workflow demonstrating how order-related information can be received, processed, and routed through logic and AI-assisted handling.',
    problem:
      'E-commerce operations often involve repeated order intake, manual validation, and handling across multiple steps.',
    solution:
      'I created a workflow that receives order-related information, applies logic, processes the data, and sends it to the appropriate output or storage step.',
    workflow: [
      'Order or request data is triggered',
      'The workflow receives the input data',
      'The data is parsed and validated',
      'AI or logic handles the record',
      'The result is sent to a target output',
      'The flow updates or stores the order information',
    ],
    tools: ['n8n', 'AI', 'Webhooks', 'Google Sheets', 'HTTP requests', 'JSON'],
    features: [
      'Trigger-based automation',
      'Structured data handling',
      'AI-assisted logic',
      'Order-processing flow',
      'Output routing and storage',
    ],
    image: '/media/ecommerce-order-automation.jpeg',
    projectType: 'Portfolio project',
  },
  {
    id: 'ai-presales-automation-system',
    title: 'نظام أتمتة ما قبل البيع الذكي (AI Presales Automation System)',
    summary:
      'نظام SaaS متكامل مصمم لشركات وحلول الشبكات والاتصالات. يستقبل استفسارات العملاء عبر WhatsApp كنصوص أو صور أو ملفات أو رسائل صوتية، ثم يحلل الطلبات ويطابق المنتجات ويولد عروض أسعار PDF ديناميكية دون تدخل بشري.',
    problem:
      'تحتاج فرق المبيعات في قطاع الشبكات والاتصالات إلى وقت كبير لفهم الطلبات متعددة الوسائط، مراجعة الكتالوج، طلب البيانات الناقصة، وإعداد عروض الأسعار يدويًا.',
    solution:
      'نظام أتمتة متكامل يعمل كمهندس مبيعات ذكي: يفهم نية العميل، يحلل المدخلات المختلفة، يطابق المواصفات مع كتالوج المنتجات في Supabase، يطلب أي بيانات ناقصة، ثم ينشئ عرض سعر عربيًا بصيغة PDF ويرسله للعميل عبر WhatsApp.',
    workflow: [
      'استقبال رسائل WhatsApp وتصنيف النصوص والصور والملفات والرسائل الصوتية آليًا',
      'تحويل الرسائل الصوتية إلى نص عبر OpenAI Whisper واستخراج البيانات من الصور والملفات',
      'فهم نية العميل وتفكيك الطلبات المعقدة عبر AI Presales Agent',
      'مطابقة الأصناف والمواصفات الفنية مع كتالوج المنتجات في Supabase',
      'طلب النواقص الفنية من العميل عند عدم اكتمال الطلب',
      'حساب التكلفة وتوليد HTML عربي منسق وتحويله إلى عرض سعر PDF',
      'رفع الملف على Supabase Storage وإنشاء رابط فريد وإرساله عبر WhatsApp',
    ],
    tools: [
      'n8n',
      'OpenAI GPT-4',
      'OpenAI Whisper',
      'Supabase',
      'PostgreSQL',
      'Vector Store',
      'Meta WhatsApp API',
      'RAG',
      'JavaScript',
      'HTML2PDF',
    ],
    features: [
      'معالجة متعددة الوسائط للنصوص والصور والصوت وملفات CSV وPDF',
      'فهم نية العميل وتفكيك الطلبات المعقدة',
      'مطابقة ذكية للمنتجات والمواصفات الفنية',
      'طلب البيانات الناقصة تلقائيًا قبل إعداد العرض',
      'توليد عروض أسعار PDF باللغة العربية بشكل ديناميكي',
      'تخزين سحابي وإنشاء رابط تسليم فريد عبر Supabase Storage',
      'تسليم العرض النهائي مباشرة إلى العميل عبر WhatsApp',
    ],
    image: '/media/AI Presales Agent1.jpg',
    projectType: 'Portfolio project',
  },
];

const experience = {
  title: 'Independent AI Automation Projects',
  context: 'Practice and portfolio work',
  description:
    'Building self-directed n8n workflows for AI-assisted customer communication, lead management, and process automation. These are portfolio projects, not client engagements.',
};

const education = {
  title: 'Self-directed professional learning',
  context: 'AI Automation & n8n Development',
  description:
    'Ongoing hands-on learning in workflow design, AI agents, webhooks, APIs, WhatsApp, Telegram, and Google Sheets integrations.',
};

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const galleryImages = useMemo(
    () => projects.map((project, index) => ({ title: project.title, src: project.image, index })),
    [],
  );

  const openImage = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex].src);
    setSelectedIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex].src);
    setSelectedIndex(prevIndex);
  };

  useEffect(() => {
    if (!selectedProject) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedProject]);

  return (
    <div className="page-shell">
      <header className="intro" id="top">
        <div className="intro-copy">
          <p className="eyebrow">AI Automation / n8n</p>
          <h1>Hi, I’m Mohammed<span>.</span></h1>
          <h2>AI Automation Architect &amp; Engineer</h2>
          <p className="intro-summary">
            I design practical AI-powered workflows that connect people, data, and the tools they
            already use. My portfolio focuses on n8n, conversational AI, and reliable business
            automation.
          </p>
          <div className="intro-actions">
            <a href="#projects" className="text-link">Explore projects <span aria-hidden="true">↘</span></a>
            <a href="#contact" className="quiet-link">Get in touch</a>
          </div>
        </div>
        <div className="profile-frame">
          <img src="/media/profile.jpeg" alt="Mohamed Atef Mousa" />
        </div>
      </header>

      <nav className="site-dock" aria-label="Page sections">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <main>
        <section id="about" className="content-section about-section">
          <div className="section-heading">
            <p className="eyebrow">A little about me</p>
            <h2>Thoughtful automation, built around real workflows.</h2>
          </div>
          <p className="section-copy">
            I’m Mohamed Atef, an AI automation developer focused on connecting services, handling
            incoming data, and making repetitive processes easier to manage. I build and document
            independent portfolio projects across WhatsApp, Telegram, AI agents, and Google Sheets.
          </p>
        </section>

        <section id="experience" className="content-section resume-section">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Background</p>
            <h2>Work Experience</h2>
          </div>
          <article className="resume-entry">
            <div className="resume-mark" aria-hidden="true">01</div>
            <div className="resume-main">
              <h3>{experience.title}</h3>
              <p className="resume-context">{experience.context}</p>
              <p className="resume-description">{experience.description}</p>
            </div>
            <span className="resume-label">Independent</span>
          </article>
        </section>

        <section id="education" className="content-section resume-section">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Learning</p>
            <h2>Education</h2>
          </div>
          <article className="resume-entry">
            <div className="resume-mark" aria-hidden="true">02</div>
            <div className="resume-main">
              <h3>{education.title}</h3>
              <p className="resume-context">{education.context}</p>
              <p className="resume-description">{education.description}</p>
            </div>
            <span className="resume-label">Ongoing</span>
          </article>
        </section>

        <section id="skills" className="content-section skills-section">
          <div className="section-heading">
            <p className="eyebrow">Toolkit</p>
            <h2>Skills</h2>
          </div>
          <div className="skill-groups">
            <div className="skill-group">
              <h3>Automation</h3>
              <ul className="tag-list">
                {skills.automation.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="skill-group">
              <h3>AI</h3>
              <ul className="tag-list">
                {skills.ai.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="skill-group">
              <h3>Integrations</h3>
              <ul className="tag-list">
                {skills.integrations.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="content-section projects-section">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Projects</h2>
            </div>
            <span className="project-count">{String(projects.length).padStart(2, '0')} projects</span>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.id ?? project.title}>
                <div className="project-media">
                  <button
                    className="project-image-button"
                    onClick={() => openImage(project.image, index)}
                    aria-label={`View ${project.title} screenshot`}
                  >
                    <img src={project.image} alt={`${project.title} project screenshot`} />
                  </button>
                  {project.video && (
                    <a className="project-media-action" href={`#project-demo-${index}`}>
                      <span aria-hidden="true">▶</span> Watch demo
                    </a>
                  )}
                </div>
                <div className="project-card-content">
                  <div className="project-card-meta">
                    <span>{project.projectType}</span>
                  </div>
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <button
                      className="details-link"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View details for ${project.title}`}
                    >
                      ↗
                    </button>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <ul className="project-tags" aria-label={`${project.title} technologies`}>
                    {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
                  </ul>
                  {project.video && (
                    <div className="project-demo" id={`project-demo-${index}`}>
                      <p>Project demo</p>
                      <video controls preload="metadata" aria-label={`${project.title} demonstration video`}>
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Have a workflow worth improving?</h2>
          <p>Let’s talk about practical ways to put automation to work.</p>
        </div>
        <a className="footer-email" href="mailto:asksnjdnxjdnk686@gmail.com">asksnjdnxjdnk686@gmail.com</a>
        <div className="footer-links">
          <a href="https://wa.me/201144158313" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://www.linkedin.com/in/mohamed-atef-409319383" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/mioihiaimieid70-code" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="footer-note">Mohamed Atef Mousa · AI Automation &amp; n8n</p>
      </footer>

      {selectedProject && (
        <div className="dialog-backdrop" onClick={() => setSelectedProject(null)}>
          <section
            className="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="dialog-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button>
            <div className="dialog-heading">
              <p className="eyebrow">{selectedProject.projectType}</p>
              <h2 id="project-dialog-title">{selectedProject.title}</h2>
              <p>{selectedProject.solution}</p>
            </div>
            <div className="dialog-media">
              <img src={selectedProject.image} alt={`${selectedProject.title} workflow`} />
              {selectedProject.video && (
                <video controls poster={selectedProject.poster || selectedProject.image} preload="none">
                  <source src={selectedProject.video} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="dialog-details">
              <div>
                <h3>Workflow</h3>
                <ol>{selectedProject.workflow.map((step) => <li key={step}>{step}</li>)}</ol>
              </div>
              <div>
                <h3>Key features</h3>
                <ul>{selectedProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </div>
              <div className="dialog-technologies">
                <h3>Technologies</h3>
                <ul className="tag-list">{selectedProject.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              </div>
            </div>
          </section>
        </div>
      )}

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close image">×</button>
            <button className="lightbox-nav prev" onClick={prevImage} aria-label="Previous project image">‹</button>
            <img src={selectedImage} alt="Project detail" />
            <button className="lightbox-nav next" onClick={nextImage} aria-label="Next project image">›</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
