import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Cloud, Braces, GraduationCap, BriefcaseBusiness,
  ExternalLink, Sparkles, ChevronUp, Terminal, Layers3
} from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { profile } from './config'
import './styles.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

function SectionHeading({ eyebrow, title, text }) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </motion.div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [contactStatus, setContactStatus] = useState('')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']
  const closeMenu = () => setMenuOpen(false)
  const validEmail = profile.email && !profile.email.includes('YOUR_')
  const validLinkedin = profile.linkedin && !profile.linkedin.includes('YOUR_')
  const handleContactSubmit = (event) => {
    event.preventDefault()
    if (!validEmail) {
      setContactStatus('Please add your active email address in src/config.js before using the contact form.')
      return
    }
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setContactStatus('Your email app should open with the message ready to send. No message is sent by this website.')
  }

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">{profile.initials}</span><span>{profile.name}</span><i>.</i></a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </div>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </nav>
    </header>

    <main>
      <section id="home" className="hero container">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="availability"><span className="pulse-dot"/> OPEN TO OPPORTUNITIES</motion.div>
          <motion.p className="hero-kicker" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.15}}>HELLO, WORLD! I'M</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }}>
            {profile.name.split(' ')[0]}<br/><span>{profile.name.split(' ').slice(1).join(' ')}</span><b>.</b>
          </motion.h1>
          <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.35}}>{profile.role}</motion.h2>
          <motion.p className="hero-description" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45}}>{profile.summary}</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0, y:12}} animate={{opacity:1,y:0}} transition={{delay:.55}}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-ghost" href="#contact">Get in touch <ArrowRight size={16}/></a>
          </motion.div>
          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
            {validLinkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>}
            {validEmail && <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18}/></a>}
    {profile.leetcode && <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 size={18}/></a>}
            <span className="social-line"/> <span className="location-label">{profile.location}</span>
          </div>
        </div>
        <motion.div className="hero-art" initial={{opacity:0, scale:.92, rotate:2}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1,delay:.25}}>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="code-window">
            <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>developer.js</span><span className="window-more">•••</span></div>
            <div className="code-body">
              <div><span className="ln">01</span><span className="syntax-purple">const</span> <span className="syntax-blue">developer</span> = {'{'}</div>
              <div><span className="ln">02</span>&nbsp;&nbsp;name: <span className="syntax-green">'{profile.name}'</span>,</div>
              <div><span className="ln">03</span>&nbsp;&nbsp;focus: <span className="syntax-green">'Software Development'</span>,</div>
              <div><span className="ln">04</span>&nbsp;&nbsp;stack: [<span className="syntax-green">'Python'</span>,</div>
              <div><span className="ln">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-green">'React'</span>, <span className="syntax-green">'SQL'</span>],</div>
              <div><span className="ln">06</span>&nbsp;&nbsp;curious: <span className="syntax-orange">true</span>,</div>
              <div><span className="ln">07</span>&nbsp;&nbsp;building: <span className="syntax-green">'what's next'</span></div>
              <div><span className="ln">08</span>{'}'};</div>
              <div className="code-cursor"><span className="ln">09</span><span className="syntax-purple">_</span></div>
            </div>
            <div className="window-footer"><span><span className="green-dot"/> All systems curious</span><span>UTF-8&nbsp; · &nbsp;JavaScript</span></div>
          </div>
          <div className="floating-chip chip-python"><span>Py</span> Python</div>
          <div className="floating-chip chip-react"><span>⚛</span> React</div>
          <div className="floating-chip chip-cloud"><Cloud size={15}/> AWS</div>
          <div className="art-caption"><Sparkles size={14}/> ALWAYS LEARNING. ALWAYS BUILDING.</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>

      <section id="about" className="section container">
        <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title="Curiosity drives the code." text="A quick introduction to who I am and what I enjoy building."/>
        <div className="about-grid">
          <motion.div className="about-main glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <span className="card-index">01 — INTRODUCTION</span>
            <h3>Building ideas into<br/><em>useful experiences.</em></h3>
            <p>{profile.summary}</p>
            <p>I enjoy learning how technology works under the hood, solving programming problems, and turning concepts into working applications. I’m looking forward to contributing to a development team, learning from real-world projects, and growing as an engineer.</p>
            <div className="about-tags"><span>Problem solving</span><span>Continuous learning</span><span>Team collaboration</span></div>
          </motion.div>
          <div className="about-side">
            <motion.div className="mini-card glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}>
              <div className="mini-icon"><GraduationCap/></div><span className="card-index">EDUCATION</span><h4>B.Tech, CSE (AI & ML)</h4><p>{profile.education.college}</p><strong>{profile.education.period}</strong>
            </motion.div>
            <motion.div className="mini-card glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}>
              <div className="mini-icon violet"><Code2/></div><span className="card-index">CURRENT FOCUS</span><h4>Software development</h4><p>Python · Web technologies · Databases</p><strong>Learn / Build / Improve</strong>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="section container">
        <SectionHeading eyebrow="02 / MY TOOLKIT" title="Tools I work with." text="Technologies and concepts I have learned and used across coursework, training, and projects."/>
        <div className="skills-grid">
          {profile.skills.map((group, i) => {
            const icons = [Braces, Code2, Database, Layers3]
            const Icon = icons[i] || Terminal
            return <motion.div key={group.group} className="skill-card glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}>
              <div className="skill-card-top"><div className="mini-icon"><Icon size={20}/></div><span>0{i+1}</span></div>
              <h3>{group.group}</h3><div className="skill-list">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div>
            </motion.div>
          })}
        </div>
        <p className="skills-footnote"><span className="pulse-dot"/> Skills shown reflect learning and project exposure; no artificial proficiency scores.</p>
      </section>

      <section id="projects" className="section container">
        <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects with a purpose." text="Explore my academic and personal projects, where I turn ideas into practical technology solutions."/>
        <div className="projects-grid">
          {profile.projects.map((project, i) => <motion.article key={project.number} className="project-card glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <div className={`project-visual visual-${i+1}`}>
              <div className="visual-grid"/>
              <span className="project-number">{project.number}</span>
              {i === 0 ? <div className="visual-symbol"><span>01</span><span className="symbol-divider"/> <span>10</span><small>semantic<br/>similarity</small></div> : i === 1 ? <div className="graph-art"><i/><i/><i/><i/><i/><b/><b/><b/></div> : <div className="hand-art"><span>✳</span><small>GESTURE → TEXT → SPEECH</small></div>}
              <span className="visual-label">FEATURED PROJECT</span>
            </div>
            <div className="project-content"><div className="project-meta"><span>ACADEMIC PROJECT</span><span>{project.number} / 03</span></div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="tech-tags">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
              <div className="project-links">
                {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={15}/></a> : <span className="link-muted">Add GitHub URL in config.js</span>}
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14}/></a>}
              </div>
            </div>
          </motion.article>)}
        </div>
      </section>

      <section id="experience" className="section container">
        <SectionHeading eyebrow="04 / EXPERIENCE" title="Learning beyond the classroom." text="Training and experience that helped me connect concepts with practical technology."/>
        <div className="timeline">
          {profile.experience.map((item, i) => <motion.div key={item.role} className="timeline-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <div className="timeline-marker"><BriefcaseBusiness size={17}/></div><div className="timeline-card glass-card">
              <div className="timeline-top"><span className="eyebrow">INTERNSHIP</span><span className="date-pill">{item.period}</span></div>
              <h3>{item.role}</h3><h4>{item.organization}</h4><p>{item.details}</p>
            </div>
          </motion.div>)}
        </div>
        <div className="cert-row"><span className="cert-label">CERTIFICATIONS & TRAINING</span>{profile.certificates.map(c => <span className="cert-pill" key={c}>{c}</span>)}</div>
      </section>

      <section id="education" className="section container">
        <SectionHeading eyebrow="05 / EDUCATION" title="The foundation." text="My academic journey and the foundation behind my interest in technology."/>
        <motion.div className="education-card glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}>
          <div className="education-icon"><GraduationCap size={27}/></div>
          <div className="education-details"><span className="eyebrow">2022 — {profile.education.graduation}</span><h3>{profile.education.degree}</h3><p>{profile.education.college}</p></div>
          <div className="cgpa"><strong>{profile.education.cgpa}</strong><span>CGPA</span></div>
        </motion.div>
      </section>

      <section id="contact" className="section container contact-section">
        <div className="contact-panel">
          <div className="contact-orb"/>
          <div className="contact-copy"><span className="eyebrow">06 / WHAT'S NEXT?</span><h2>Have an idea?<br/><em>Let's build it.</em></h2><p>I'm open to entry-level software development opportunities, collaboration, and conversations about technology.</p>
            <div className="contact-actions">
              {validEmail ? <a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <Mail size={16}/></a> : <span className="button button-primary disabled-button">Add your email in config.js <Mail size={16}/></span>}
              <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub <Github size={16}/></a>
              <a className="button button-ghost" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <Code2 size={16}/></a>
              {validLinkedin && <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin size={16}/></a>}
            </div>
            <p className="contact-phone">Phone: <a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <label>Your name<input name="name" type="text" placeholder="Name" required /></label>
                <label>Your email<input name="email" type="email" placeholder="you@example.com" required /></label>
              </div>
              <label>Your message<textarea name="message" rows="3" placeholder="Tell me what you'd like to discuss..." required /></label>
              <button className="button button-primary" type="submit">Prepare email <ArrowUpRight size={16}/></button>
              {contactStatus && <p className="form-status" role="status">{contactStatus}</p>}
            </form>
          </div>
          <div className="contact-side"><div className="contact-code"><span>LET'S CONNECT</span><Mail size={35}/><strong>Good things<br/>start with a<br/><em>conversation.</em></strong><small>{profile.location}</small></div></div>
        </div>
      </section>
    </main>

    <footer className="footer container"><a className="brand" href="#home"><span className="brand-mark">{profile.initials}</span><span>{profile.name}</span><i>.</i></a><span>Designed & built with curiosity <b>✳</b></span><span>© {new Date().getFullYear()} {profile.name}</span></footer>
    <AnimatePresence>{showTop && <motion.button className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:10}}><ChevronUp size={19}/></motion.button>}</AnimatePresence>
  </div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
