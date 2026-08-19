function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-label">
          SOFTWARE DEVELOPER • GAME DEVELOPER • WEB DEVELOPER
        </p>

        <h1>
          Hi, I'm <span>Pat.</span>
        </h1>

        <p className="hero-description">
          I'm an IT student and developer based in Melbourne,
          interested in software development, web development
          and game design.
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
            href="https://github.com/patrickcoghlan2212-oss"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;