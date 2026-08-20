import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ];

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        PATRICK COGHLAN
      </a>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={closeMenu}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={closeMenu}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </a>
      </nav>

      <button
        className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;