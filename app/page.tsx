
"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const emailAddress = "mansooraslam360@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/mansoor-aslam-649235361/";

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

const skillGroups = [
  {
    title: "Backend development",
    note: "Building application logic and APIs",
    skills: ["Python", "FastAPI", "REST APIs", "Pydantic", "SQLAlchemy"],
    icon: "{ }",
  },
  {
    title: "Databases",
    note: "Working with structured application data",
    skills: ["PostgreSQL", "SQL", "Alembic", "Database design"],
    icon: "▤",
  },
  {
    title: "Tools & workflow",
    note: "Developing, testing and running applications",
    skills: ["Docker", "Postman", "Git", "GitHub", "VS Code"],
    icon: "⌘",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const senderEmail = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(
      `Portfolio contact from ${name || "a visitor"}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`
    );

    window.location.href =
      `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${emailAddress}`;
    }
  }

  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Mansoor Aslam home">
          <span className="brand-mark">M</span>
          <span>
            Mansoor<span className="accent">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`navigation ${menuOpen ? "navigation-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s talk <ArrowIcon />
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            BACKEND DEVELOPER · PAKISTAN
          </div>

          <p className="hello-label">Hello, I&apos;m</p>

          <h1>
            Mansoor
            <br />
            Aslam<span className="accent">.</span>
          </h1>

          <h2 className="hero-role">
            I build the logic <span>behind</span> great applications.
          </h2>

          <p className="hero-description">
            I&apos;m a Computer Science student focused on backend
            development. I enjoy building APIs, working with databases,
            and turning application requirements into reliable software.
          </p>

          <div className="hero-tags" aria-label="Core technologies">
            <span>Python</span>
            <span>FastAPI</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowIcon />
            </a>

            <a className="button button-ghost" href="#contact">
              Contact me <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="hero-footnote">
            <span className="pulse-dot" />
            Interested in backend development opportunities and meaningful
            projects.
          </p>
        </div>

        {/* YOUR PERSONAL PHOTO */}
        <div
          className="hero-visual hero-photo-visual"
          aria-label="Mansoor Aslam profile photograph"
        >
          <div className="hero-photo-halo" />

          <div className="hero-photo-frame">
            <Image
              src="/images/mansoor.jpg"
              alt="Mansoor Aslam - Backend Developer"
              width={700}
              height={850}
              priority
              className="hero-profile-photo"
            />

            <div className="hero-photo-overlay">
              <span>HELLO, I&apos;M MANSOOR</span>
              <strong>Backend Developer</strong>
            </div>
          </div>

          <div className="visual-caption">
            DESIGN · BUILD · TEST · IMPROVE
          </div>
        </div>
      </section>

      {/* PROFESSIONAL HIGHLIGHTS */}
      <section className="quick-facts section-wrap" aria-label="Professional highlights">
        <div>
          <strong>BSCS</strong>
          <span>Computer Science</span>
        </div>

        <div>
          <strong>API</strong>
          <span>Backend development</span>
        </div>

        <div>
          <strong>SQL</strong>
          <span>Database-driven apps</span>
        </div>

        <div>
          <strong>Build<span className="accent">.</span></strong>
          <span>Learn and improve</span>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        className="section-wrap content-section about-section"
        id="about"
      >
        <div className="section-heading">
          <span className="section-kicker">A LITTLE INTRODUCTION</span>

          <h2>
            About <span className="accent">me.</span>
          </h2>

          <p>
            A little about who I am, what I enjoy building, and where I&apos;m
            heading.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-art">
            <div className="about-monogram">
              MA<span>.</span>
            </div>

            <div className="about-art-bottom">
              <span>CURIOUS BY NATURE</span>
              <span>BUILDER BY CHOICE</span>
            </div>

            <div className="about-ring" />
          </div>

          <div className="about-copy">
            <span className="mini-label">BEHIND THE CODE</span>

            <h3>
              Turning ideas into dependable backend systems.
            </h3>

            <p>
              I&apos;m pursuing a Bachelor of Science in Computer Science
              at the University of Lahore, with a growing focus on backend
              engineering.
            </p>

            <p>
              I work with Python, FastAPI, SQLAlchemy and PostgreSQL to
              create APIs and database-driven applications. I&apos;m
              interested in clean code, clear data models, permissions,
              and making sure the logic behind an application works as
              expected.
            </p>

            <p>
              I believe good development comes from asking the right
              questions, testing carefully, and improving a solution
              step by step.
            </p>

            <div className="about-details">
              <div>
                <span>FOCUS</span>
                <strong>Backend engineering</strong>
              </div>

              <div>
                <span>EDUCATION</span>
                <strong>BS Computer Science</strong>
              </div>

              <div>
                <span>UNIVERSITY</span>
                <strong>University of Lahore</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>Pakistan</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="section-wrap content-section" id="skills">
        <div className="section-heading centered-heading">
          <span className="section-kicker">MY TOOLKIT</span>

          <h2>
            Skills & <span className="accent">technologies.</span>
          </h2>

          <p>
            The tools I use and the areas I&apos;m actively developing.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-top">
                <span className="skill-icon">{group.icon}</span>
                <span className="card-index">0{index + 1}</span>
              </div>

              <h3>{group.title}</h3>

              <p>{group.note}</p>

              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="skills-note">
          My toolkit keeps evolving as I work on new problems and projects.
        </p>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        className="section-wrap content-section experience-section"
        id="experience"
      >
        <div className="section-heading">
          <span className="section-kicker">MY JOURNEY</span>

          <h2>
            Experience & <span className="accent">learning.</span>
          </h2>

          <p>
            Practical experience is where concepts become engineering habits.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <span />
            </div>

            <div className="timeline-date">INTERNSHIP</div>

            <article className="timeline-card">
              <div className="timeline-card-head">
                <div>
                  <span className="mini-label">BACKEND DEVELOPMENT</span>
                  <h3>Backend Development Intern</h3>
                </div>

                <span className="timeline-badge">
                  Hands-on experience
                </span>
              </div>

              <p>
                Contributing to backend application work and strengthening
                practical development skills.
              </p>

              <ul>
                <li>
                  Worked with API endpoints in a FastAPI application.
                </li>
                <li>
                  Tested application endpoints using Postman.
                </li>
                <li>
                  Worked with database-backed features and application
                  validation.
                </li>
              </ul>

              <div className="timeline-tags">
                <span>Python</span>
                <span>FastAPI</span>
                <span>PostgreSQL</span>
                <span>Postman</span>
              </div>

              <p className="edit-hint">
                Add your company name and internship dates here before
                publishing.
              </p>
            </article>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <span />
            </div>

            <div className="timeline-date">EDUCATION</div>

            <article className="timeline-card">
              <div className="timeline-card-head">
                <div>
                  <span className="mini-label">UNIVERSITY OF LAHORE</span>
                  <h3>Bachelor of Science in Computer Science</h3>
                </div>

                <span className="timeline-badge">In progress</span>
              </div>

              <p>
                Building foundations in computer science, programming,
                problem-solving and software development.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        className="section-wrap content-section projects-section"
        id="projects"
      >
        <div className="section-heading centered-heading">
          <span className="section-kicker">SELECTED WORK</span>

          <h2>
            Projects that make <span className="accent">ideas real.</span>
          </h2>

          <p>
            A look at the backend systems and application features I&apos;ve
            been working on.
          </p>
        </div>

        <article className="project-card">
          <div className="project-preview">
            <div className="project-preview-top">
              <span className="preview-brand">
                <i /> ORG<span className="accent">SPACE</span>
              </span>

              <span className="preview-status">BACKEND PLATFORM</span>
            </div>

            <div className="preview-layout">
              <div className="preview-sidebar">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>

              <div className="preview-main">
                <div className="preview-welcome">
                  <small>ORGANIZATION OVERVIEW</small>
                  <b>Manage with clarity.</b>
                </div>

                <div className="preview-stats">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="preview-table">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>

            <span className="preview-caption">
              CONCEPTUAL INTERFACE PREVIEW
            </span>
          </div>

          <div className="project-info">
            <span className="project-type">
              FEATURED PROJECT · BACKEND
            </span>

            <h3>Organization Management Platform</h3>

            <p>
              A multi-organization platform designed to manage organizations,
              suborganizations, packages, users and permissions from a
              centralized system.
            </p>

            <div className="project-features">
              <div>
                <span>01</span>
                Organization and suborganization management
              </div>

              <div>
                <span>02</span>
                Package assignment and feature controls
              </div>

              <div>
                <span>03</span>
                User roles and permission management
              </div>

              <div>
                <span>04</span>
                API testing and backend validation
              </div>
            </div>

            <div className="project-tech">
              <span>Python</span>
              <span>FastAPI</span>
              <span>SQLAlchemy</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
              <span>Alembic</span>
            </div>

            <a className="text-link" href="#contact">
              Ask me about this project <ArrowIcon />
            </a>
          </div>
        </article>

        <p className="project-disclaimer">
          Project visuals are illustrative. Replace them with real screenshots
          when you are ready to showcase the application.
        </p>
      </section>

      {/* DEVELOPMENT APPROACH */}
      <section className="section-wrap content-section approach-section">
        <div className="approach-panel">
          <div>
            <span className="section-kicker">HOW I LIKE TO WORK</span>

            <h2>
              Write it clearly.
              <br />
              <span className="accent">Test it carefully.</span>
            </h2>
          </div>

          <div className="approach-steps">
            <div>
              <span>01</span>
              <p>
                <b>Understand</b>
                <small>
                  Break a problem into clear requirements.
                </small>
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                <b>Build</b>
                <small>
                  Write maintainable code with a clear structure.
                </small>
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                <b>Verify</b>
                <small>
                  Test behavior and handle edge cases.
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        className="section-wrap content-section contact-section"
        id="contact"
      >
        <div className="section-heading centered-heading">
          <span className="section-kicker">GET IN TOUCH</span>

          <h2>
            Let&apos;s build something <span className="accent">useful.</span>
          </h2>

          <p>
            Have an opportunity, a project idea, or just want to connect?
            Send me a message.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label htmlFor="name">YOUR NAME</label>

            <input
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">YOUR EMAIL</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <label htmlFor="message">YOUR MESSAGE</label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me a little about what you have in mind..."
              required
            />

            <button
              className="button button-primary submit-button"
              type="submit"
            >
              Prepare email <span aria-hidden="true">→</span>
            </button>

            <p className="form-note">
              This opens your email application with the message filled in.
              It does not send anything automatically.
            </p>
          </form>

          <aside className="contact-aside">
            <div className="contact-info-card">
              <span className="mini-label">CONTACT DETAILS</span>

              <h3>Connect with me</h3>

              <button
                className="contact-detail"
                type="button"
                onClick={copyEmail}
              >
                <span className="detail-icon">@</span>

                <span>
                  <small>EMAIL</small>
                  <b>{emailAddress}</b>
                  <em>{copied ? "Copied" : "Click to copy"}</em>
                </span>
              </button>

              <a
                className="contact-detail"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="detail-icon">in</span>

                <span>
                  <small>LINKEDIN</small>
                  <b>Connect professionally</b>
                  <em>Open profile ↗</em>
                </span>
              </a>

              <div className="contact-detail">
                <span className="detail-icon">⌖</span>

                <span>
                  <small>LOCATION</small>
                  <b>Pakistan</b>
                  <em>Open to connecting worldwide</em>
                </span>
              </div>
            </div>

            <div className="contact-note">
              <span className="status-dot" />

              <p>
                <b>Always learning, always building.</b>
                <small>
                  I&apos;m interested in connecting with developers, teams
                  and people building useful products.
                </small>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">M</span>

          <span>
            Mansoor<span className="accent">.</span>
          </span>
        </a>

        <p>
          Backend developer in progress. Built with curiosity and code.
        </p>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowIcon />
          </a>
        </div>

        <span className="copyright">
          © {new Date().getFullYear()} Mansoor Aslam. All rights reserved.
        </span>
      </footer>

      {/* BACK TO TOP */}
      <a className="back-to-top" href="#home" aria-label="Back to top">
        ↑
      </a>
    </main>
  );
}
