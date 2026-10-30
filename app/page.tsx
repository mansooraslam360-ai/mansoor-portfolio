
"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const emailAddress = "mansooraslam360@gmail.com";

const linkedinUrl =
  "https://www.linkedin.com/in/mansoor-aslam-649235361/";

const githubUrl =
  "https://github.com/mansooraslam360-ai";

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
    note: "Intermediate proficiency",
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "SQLAlchemy",
    ],
    icon: "{ }",
  },
  {
    title: "Databases",
    note: "Intermediate proficiency",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
    icon: "▤",
  },
  {
    title: "Development tools",
    note: "Used in practical development",
    skills: [
      "Docker",
      "Postman",
      "Git",
      "GitHub",
      "Alembic",
    ],
    icon: "⌘",
  },
];

function ArrowIcon() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleContactSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(
      formData.get("name") || ""
    ).trim();

    const senderEmail = String(
      formData.get("email") || ""
    ).trim();

    const message = String(
      formData.get("message") || ""
    ).trim();

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

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      window.location.href = `mailto:${emailAddress}`;
    }
  }

  return (
    <main>

      {/* ================= NAVIGATION ================= */}

      <header className="site-header">

        <a
          className="brand"
          href="#home"
          aria-label="Mansoor Aslam home"
        >
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
          className={`navigation ${
            menuOpen ? "navigation-open" : ""
          }`}
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
          Let's talk <ArrowIcon />
        </a>

      </header>

      {/* ================= HERO SECTION ================= */}

      <section className="hero section-wrap" id="home">

        <div className="hero-copy">

          <div className="eyebrow">
            <span className="status-dot" />
            BACKEND DEVELOPER · PAKISTAN
          </div>

          <p className="hello-label">
            Hello, I'm
          </p>

          <h1>
            Mansoor
            <br />
            Aslam<span className="accent">.</span>
          </h1>

          <h2 className="hero-role">
            I engineer the backend <span>behind</span> great
            applications.
          </h2>

          <p className="hero-description">
            I'm a Computer Science graduate and Backend
            Developer with practical internship experience
            developing APIs and database-driven applications.
            I work with Python, FastAPI, Django and SQL
            technologies to build reliable backend solutions.
          </p>

          <div className="hero-tags">
            <span>Python</span>
            <span>FastAPI</span>
            <span>Django</span>
            <span>PostgreSQL</span>
          </div>

          <div className="hero-actions">

            <a
              className="button button-primary"
              href="#projects"
            >
              Explore my work <ArrowIcon />
            </a>

            <a
              className="button button-ghost"
              href="#contact"
            >
              Contact me <span aria-hidden="true">→</span>
            </a>

          </div>

          <p className="hero-footnote">
            <span className="pulse-dot" />
            Open to Backend Developer opportunities.
          </p>

        </div>

        {/* PERSONAL PHOTOGRAPH */}

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
              <span>HELLO, I'M MANSOOR</span>
              <strong>Backend Developer</strong>
            </div>

          </div>

          <div className="floating-card floating-top">

            <span className="float-icon">⌘</span>

            <span>
              <b>Clean APIs</b>
              <small>Thoughtful backend design</small>
            </span>

          </div>

          <div className="floating-card floating-bottom">

            <span className="float-icon float-icon-blue">
              ▤
            </span>

            <span>
              <b>Structured data</b>
              <small>Reliable database foundations</small>
            </span>

          </div>

          <div className="visual-caption">
            DESIGN · BUILD · TEST · IMPROVE
          </div>

        </div>

      </section>

      {/* ================= PROFESSIONAL HIGHLIGHTS ================= */}

      <section
        className="quick-facts section-wrap"
        aria-label="Professional highlights"
      >

        <div>
          <strong>BSCS</strong>
          <span>Graduate · 2026</span>
        </div>

        <div>
          <strong>2026</strong>
          <span>Industry internship</span>
        </div>

        <div>
          <strong>API</strong>
          <span>Backend development</span>
        </div>

        <div>
          <strong>Build<span className="accent">.</span></strong>
          <span>Learn and improve</span>
        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section
        className="section-wrap content-section about-section"
        id="about"
      >

        <div className="section-heading">

          <span className="section-kicker">
            A LITTLE INTRODUCTION
          </span>

          <h2>
            About <span className="accent">me.</span>
          </h2>

          <p>
            My background, professional experience and
            passion for backend engineering.
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

            <span className="mini-label">
              BEHIND THE CODE
            </span>

            <h3>
              Building reliable systems, one solution at a time.
            </h3>

            <p>
              I'm a Computer Science graduate from the
              University of Lahore with a strong interest
              in backend engineering and software development.
            </p>

            <p>
              I have practical experience developing APIs,
              working with databases, implementing
              authentication and authorization, and building
              application-level business logic.
            </p>

            <p>
              During my Backend Development Internship at
              Decibels Dev, I worked on a full application
              backend using Python and FastAPI, including
              feature flags, database operations, permissions
              and API testing.
            </p>

            <p>
              I enjoy understanding complex requirements,
              designing structured solutions, writing
              maintainable code and testing applications
              carefully.
            </p>

            <div className="about-details">

              <div>
                <span>PROFESSION</span>
                <strong>Backend Developer</strong>
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
                <strong>Bahawalpur, Pakistan</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS SECTION ================= */}

      <section
        className="section-wrap content-section"
        id="skills"
      >

        <div className="section-heading centered-heading">

          <span className="section-kicker">
            MY TECHNICAL TOOLKIT
          </span>

          <h2>
            Skills & <span className="accent">technologies.</span>
          </h2>

          <p>
            Technologies I have worked with through
            practical backend development.
          </p>

        </div>

        <div className="skill-grid">

          {skillGroups.map((group, index) => (

            <article className="skill-card" key={group.title}>

              <div className="skill-card-top">

                <span className="skill-icon">
                  {group.icon}
                </span>

                <span className="card-index">
                  0{index + 1}
                </span>

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
          Additional development tools include Postman,
          Git, GitHub and Alembic.
        </p>

      </section>

      {/* ================= EXPERIENCE SECTION ================= */}

      <section
        className="section-wrap content-section experience-section"
        id="experience"
      >

        <div className="section-heading">

          <span className="section-kicker">
            PROFESSIONAL JOURNEY
          </span>

          <h2>
            Experience & <span className="accent">education.</span>
          </h2>

          <p>
            My professional experience, academic background
            and leadership journey.
          </p>

        </div>

        <div className="timeline">

          {/* DECIBELS DEV INTERNSHIP */}

          <div className="timeline-item">

            <div className="timeline-marker">
              <span />
            </div>

            <div className="timeline-date">
              JULY 2026 — OCTOBER 2026
            </div>

            <article className="timeline-card">

              <div className="timeline-card-head">

                <div>

                  <span className="mini-label">
                    DECIBELS DEV
                  </span>

                  <h3>
                    Backend Developer Intern
                  </h3>

                </div>

                <span className="timeline-badge">
                  Internship completed
                </span>

              </div>

              <p>
                Worked as a Backend Developer Intern at
                Decibels Dev in Bahawalpur, Punjab, Pakistan.
                Contributed to the development of a
                database-driven application backend in an
                on-site development environment.
              </p>

              <ul>

                <li>
                  Developed backend API endpoints using
                  Python and FastAPI, followed by endpoint
                  testing and response verification.
                </li>

                <li>
                  Implemented feature-flag functionality
                  to manage organization-level application
                  features.
                </li>

                <li>
                  Worked on authentication and authorization
                  functionality to manage application access
                  and permissions.
                </li>

                <li>
                  Worked with database models, PostgreSQL,
                  SQLAlchemy and Alembic migrations.
                </li>

                <li>
                  Worked on application validation,
                  database operations and backend
                  business logic.
                </li>

                <li>
                  Contributed to the backend of a complete
                  application that remains under development
                  and has not yet been deployed.
                </li>

              </ul>

              <div className="timeline-tags">

                <span>Python</span>
                <span>FastAPI</span>
                <span>PostgreSQL</span>
                <span>SQLAlchemy</span>
                <span>Docker</span>
                <span>Alembic</span>
                <span>Postman</span>

              </div>

              <p className="edit-hint">
                On-site internship · Bahawalpur, Punjab, Pakistan
              </p>

            </article>

          </div>

          {/* EDUCATION */}

          <div className="timeline-item">

            <div className="timeline-marker">
              <span />
            </div>

            <div className="timeline-date">
              2022 — 2026
            </div>

            <article className="timeline-card">

              <div className="timeline-card-head">

                <div>

                  <span className="mini-label">
                    UNIVERSITY OF LAHORE
                  </span>

                  <h3>
                    Bachelor of Science in Computer Science
                  </h3>

                </div>

                <span className="timeline-badge">
                  Graduated
                </span>

              </div>

              <p>
                Completed a Bachelor's degree in Computer
                Science, developing academic foundations in
                programming, computer science concepts,
                problem-solving and software development.
              </p>

            </article>

          </div>

          {/* YPDC UNIVERSITY LEADERSHIP */}

          <div className="timeline-item">

            <div className="timeline-marker">
              <span />
            </div>

            <div className="timeline-date">
              UNIVERSITY LEADERSHIP
            </div>

            <article className="timeline-card">

              <div className="timeline-card-head">

                <div>

                  <span className="mini-label">
                    YPDC · YOUNG PEACE AND DEVELOPMENT CORPS
                  </span>

                  <h3>
                    Vice President
                  </h3>

                </div>

                <span className="timeline-badge">
                  Leadership
                </span>

              </div>

              <p>
                Progressed from Management Head to Vice
                President within YPDC (Young Peace and
                Development Corps), a university society.
              </p>

              <div className="timeline-tags">

                <span>Vice President</span>
                <span>Management Head</span>
                <span>Leadership</span>
                <span>Team Coordination</span>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* ================= PROJECT SECTION ================= */}

      <section
        className="section-wrap content-section projects-section"
        id="projects"
      >

        <div className="section-heading centered-heading">

          <span className="section-kicker">
            SELECTED WORK
          </span>

          <h2>
            Projects that make <span className="accent">ideas real.</span>
          </h2>

          <p>
            Practical backend development and
            database-driven application engineering.
          </p>

        </div>

        <article className="project-card">

          {/* CONCEPTUAL PROJECT PREVIEW */}

          <div className="project-preview">

            <div className="project-preview-top">

              <span className="preview-brand">
                <i /> ORG<span className="accent">SPACE</span>
              </span>

              <span className="preview-status">
                BACKEND PLATFORM
              </span>

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

          {/* PROJECT DETAILS */}

          <div className="project-info">

            <span className="project-type">
              FEATURED PROJECT · BACKEND DEVELOPMENT
            </span>

            <h3>
              Organization Management Platform
            </h3>

            <p>
              A multi-organization management platform
              designed to manage organizations,
              suborganizations, package assignments,
              application features, users and permissions
              through a centralized backend architecture.
            </p>

            <div className="project-features">

              <div>
                <span>01</span>
                Organization and suborganization management
              </div>

              <div>
                <span>02</span>
                Package assignment and version management
              </div>

              <div>
                <span>03</span>
                Organization-level feature flag controls
              </div>

              <div>
                <span>04</span>
                Authentication and role-based permissions
              </div>

              <div>
                <span>05</span>
                Database models and migration management
              </div>

              <div>
                <span>06</span>
                API development, testing and validation
              </div>

            </div>

            <div className="project-tech">

              <span>Python</span>
              <span>FastAPI</span>
              <span>SQLAlchemy</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
              <span>Alembic</span>
              <span>Postman</span>

            </div>

            <p className="edit-hint">
              Project status: In development · Not yet deployed
            </p>

            <a
              className="text-link"
              href="#contact"
            >
              Ask me about this project <ArrowIcon />
            </a>

          </div>

        </article>

        <p className="project-disclaimer">
          This project was developed during my internship.
          The application is still under development and is
          not publicly deployed. The dashboard illustration
          is conceptual, not a screenshot of the actual
          application.
        </p>

      </section>

      {/* ================= DEVELOPMENT APPROACH ================= */}

      <section className="section-wrap content-section approach-section">

        <div className="approach-panel">

          <div>

            <span className="section-kicker">
              MY DEVELOPMENT APPROACH
            </span>

            <h2>
              Understand the problem.
              <br />
              <span className="accent">
                Build the right solution.
              </span>
            </h2>

          </div>

          <div className="approach-steps">

            <div>
              <span>01</span>

              <p>
                <b>Understand</b>
                <small>
                  Translate application requirements into
                  clear backend logic.
                </small>
              </p>
            </div>

            <div>
              <span>02</span>

              <p>
                <b>Develop</b>
                <small>
                  Build structured APIs and maintainable
                  database solutions.
                </small>
              </p>
            </div>

            <div>
              <span>03</span>

              <p>
                <b>Test</b>
                <small>
                  Verify endpoint behavior, validate data
                  and handle errors.
                </small>
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section
        className="section-wrap content-section contact-section"
        id="contact"
      >

        <div className="section-heading centered-heading">

          <span className="section-kicker">
            GET IN TOUCH
          </span>

          <h2>
            Let's build something <span className="accent">useful.</span>
          </h2>

          <p>
            Looking for a Backend Developer? Have a project
            idea or an opportunity? Let's connect.
          </p>

        </div>

        <div className="contact-grid">

          <form
            className="contact-form"
            onSubmit={handleContactSubmit}
          >

            <label htmlFor="name">
              YOUR NAME
            </label>

            <input
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">
              YOUR EMAIL
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <label htmlFor="message">
              YOUR MESSAGE
            </label>

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
              This opens your email application with your
              message prepared. It does not send anything
              automatically.
            </p>

          </form>

          <aside className="contact-aside">

            <div className="contact-info-card">

              <span className="mini-label">
                CONTACT DETAILS
              </span>

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
                  <em>
                    {copied ? "Copied" : "Click to copy"}
                  </em>
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

              <a
                className="contact-detail"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >

                <span className="detail-icon">GH</span>

                <span>
                  <small>GITHUB</small>
                  <b>Explore my GitHub profile</b>
                  <em>View repositories ↗</em>
                </span>

              </a>

              <div className="contact-detail">

                <span className="detail-icon">⌖</span>

                <span>
                  <small>LOCATION</small>
                  <b>Bahawalpur, Pakistan</b>
                  <em>Open to opportunities</em>
                </span>

              </div>

            </div>

            <div className="contact-note">

              <span className="status-dot" />

              <p>
                <b>Always learning, always building.</b>

                <small>
                  Interested in connecting with software
                  developers, engineering teams and people
                  building useful products.
                </small>
              </p>

            </div>

          </aside>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="site-footer section-wrap">

        <a className="brand" href="#home">

          <span className="brand-mark">M</span>

          <span>
            Mansoor<span className="accent">.</span>
          </span>

        </a>

        <p>
          Backend Developer focused on building reliable
          applications and APIs.
        </p>

        <div className="footer-links">

          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowIcon />
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowIcon />
          </a>

        </div>

        <span className="copyright">
          © 2026 Mansoor Aslam. All rights reserved.
        </span>

      </footer>

      {/* BACK TO TOP */}

      <a
        className="back-to-top"
        href="#home"
        aria-label="Back to top"
      >
        ↑
      </a>

    </main>
  );
}
