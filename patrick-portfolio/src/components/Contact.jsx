function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="section-label">CONTACT</p>

      <h2>Let's get in touch.</h2>

      <p className="section-description">
        I'm always open to discussing development opportunities, projects,
        collaborations or just having a chat about technology and games.
      </p>

      <div className="contact-links">
        <a
          className="contact-card"
          href="mailto:patrickcoghlan2212@gmail.com"
        >
          <p className="contact-type">EMAIL</p>

          <h3>Email me</h3>

          <p>patrickcoghlan2212@gmail.com</p>

          <span>Send email →</span>
        </a>

        <a
          className="contact-card"
          href="https://www.linkedin.com/in/patrick-coghlan-a7a73542b/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="contact-type">LINKEDIN</p>

          <h3>Connect with me</h3>

          <p>LinkedIn</p>

          <span>View profile →</span>
        </a>

        <a
          className="contact-card"
          href="https://github.com/patrickcoghlan2212-oss"
          target="_blank"
          rel="noreferrer"
        >
          <p className="contact-type">GITHUB</p>

          <h3>View my code</h3>

          <p>@patrickcoghlan2212-oss</p>

          <span>View GitHub →</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;