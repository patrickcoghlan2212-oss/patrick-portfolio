const skillGroups = [
  {
    title: "Development",
    skills: [
      "JavaScript",
      "React",
      "Python",
      "C#",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Game Development",
    skills: [
      "Unity",
      "Game Design",
      "Level Design",
      "Gameplay Prototyping",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Supabase",
      "Docker",
      "VS Code",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">SKILLS</p>

      <h2>Technologies I work with.</h2>

      <p className="section-description">
        A selection of languages, frameworks and tools I use across software,
        web and game development.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-item" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;