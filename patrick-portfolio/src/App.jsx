import "./App.css";

function App() {
  return (
    <div className="website">

      {/* NAVIGATION BAR */}
      <header className="navbar">
        <div className="logo">
          YOURNAME
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      {/* HERO / FIRST THING PEOPLE SEE */}
      <main>

        <section id="home" className="hero">

          <div className="hero-content">

            <p className="hero-label">
              SOFTWARE DEVELOPER • DESIGNER
            </p>

            <h1>
              Hi, I'm <span>Your Name.</span>
            </h1>

            <p className="hero-description">
              I build websites, applications and games.
              This website is where I showcase the things
              I'm working on.
            </p>

            <div className="hero-buttons">

              <a
                className="button primary-button"
                href="#projects"
              >
                View my work
              </a>

              <a
                className="button secondary-button"
                href="#contact"
              >
                Contact me
              </a>

            </div>

          </div>

        </section>


        {/* ABOUT */}
        <section id="about" className="section">

          <p className="section-label">
            ABOUT
          </p>

          <h2>
            A little about me.
          </h2>

          <p className="section-description">
            I'm interested in software development,
            web development and game development.
            I enjoy turning ideas into real projects
            and learning new technologies along the way.
          </p>

        </section>


        {/* PROJECTS */}
        <section id="projects" className="section">

          <p className="section-label">
            PROJECTS
          </p>

          <h2>
            Things I've built.
          </h2>

          <div className="project-grid">

            <article className="project-card">

              <p className="project-number">
                01
              </p>

              <h3>
                Project One
              </h3>

              <p>
                Put a short explanation of your project
                here and explain what you built.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

            </article>


            <article className="project-card">

              <p className="project-number">
                02
              </p>

              <h3>
                Project Two
              </h3>

              <p>
                Another project can go here. Eventually
                we'll link these cards to GitHub and
                live demos.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>API</span>
              </div>

            </article>


            <article className="project-card">

              <p className="project-number">
                03
              </p>

              <h3>
                Project Three
              </h3>

              <p>
                This could be a game, application,
                website or university project.
              </p>

              <div className="project-tags">
                <span>Game Dev</span>
                <span>C#</span>
              </div>

            </article>

          </div>

        </section>


        {/* CONTACT */}
        <section id="contact" className="section contact-section">

          <p className="section-label">
            CONTACT
          </p>

          <h2>
            Let's build something.
          </h2>

          <p className="section-description">
            Want to get in touch? Send me an email.
          </p>

          <a
            className="button primary-button"
            href="mailto:your@email.com"
          >
            Email me
          </a>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer">

        <p>
          © 2026 Your Name
        </p>

        <p>
          Built with React + Vite
        </p>

      </footer>

    </div>
  );
}

export default App;