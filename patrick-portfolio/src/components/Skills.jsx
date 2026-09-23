const skillGroups = [
  { title: "Programming", skills: ["C#", "C++", "Python", "Kotlin", "Data structures", "Algorithms"] },
  { title: "Mobile Development", skills: ["Android", "Kotlin", "Android Studio Meerkat"] },
  { title: "Games & VR", skills: ["Godot", "Unity", "Unity VR", "Unreal Engine 4"] },
  { title: "3D Modelling", skills: ["Blender"] },
  { title: "Hardware & Systems", skills: ["PCs & laptops", "Handheld devices", "Microcontrollers", "Windows", "macOS", "Linux", "IT troubleshooting"] },
  { title: "Cybersecurity Tools", skills: ["Virtual machines", "Kali Linux"] },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">SKILLS</p>

      <h2>Technologies I work with.</h2>

      <p className="section-description">
        My technical background spans programming, Android development, game
        engines, VR, 3D modelling and IT systems.
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