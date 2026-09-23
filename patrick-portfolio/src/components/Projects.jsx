import { useRef, useState } from "react";
import "./Projects.css";

const repo = "https://github.com/patrickcoghlan2212-oss/android-portfolio/tree/main/";
const video = id => `https://deakin.au.panopto.com/Panopto/Pages/Viewer.aspx?id=${id}&start=0`;
const groups = ["All work", "App development", "Game development", "Cloud & backend", "3D design"];
const projects = [
  { id:"pat5", group:groups[2], title:"PAT5", year:"2026", status:"Currently working on", tags:["Godot", "GDScript", "Arcade games"],
    description:"An arcade collection I am developing in Godot, with three current games: Alien Avoid, Skyline Run and Tower Drop. Each explores a different movement challenge, connected through a shared menu and progression systems.",
    detail:"Alien Avoid focuses on dodging enemies and building combos. Skyline Run is a platform runner with cloud, road and sky routes. Tower Drop challenges players to descend through crumbling floors, switches and spike hazards. Shared systems include collectible coins, saved high scores, pause menus and audio/display settings. The visuals are still prototypes, with more games planned.",
    localVideo:"pat5-demo.mp4", images:[["pat5-title.png","PAT5 game-selection menu"],["pat5-game1.png","Alien Avoid prototype"],["pat5-game2.png","Skyline Run prototype"],["pat5-game3.png","Tower Drop prototype"]] },
  { id:"lost-found", group:groups[1], title:"Lost & Found", year:"2025", tags:["Kotlin","Android","Google Maps"], description:"Report lost or found items, choose a location and explore adverts on a map. An Android prototype combining address search, location permissions and map markers.", detail:"Developed for SIT305. The archived version stores adverts in memory during an app session. The recorded demo shows the application workflow.", demo:video("775ce168-95b4-444f-9869-b2db006ba6e2"), source:repo+"9.1P", images:[], steps:["Report an item","Choose a location","Explore the map"] },
  { id:"task-manager", group:groups[1], title:"Task Manager", year:"2025", tags:["Java","Android","SQLite"], description:"A practical Android task organiser with task creation, descriptions, due dates and local SQLite storage.", detail:"SIT305 coursework exploring Android activities, list interfaces and database-backed task management. Screenshots show the task list and entry form.", demo:video("00453fe1-57b1-40fd-840b-b2b500b6a255"), source:repo+"TaskManagerApp", portrait:true, images:[["task-2.png","Task creation form"],["task-3.png","Task list with an entry"],["task-1.png","Initial task list"]] },
  { id:"eco-nightmare", group:groups[2], title:"Eco Nightmare", year:"2024", tags:["Unity","C#","2D game design"], description:"A top-down game prototype with enemy encounters, NPC dialogue, collectible items and a health system. Explore the environment and use items to recover.", detail:"Created for SIT254. The gallery shows the title screen, in-game inventory and enemy encounters from the archived Windows build.", images:[["eco-gameplay.png","Exploration, health and inventory"],["eco-title.png","Eco Nightmare title screen"],["eco-enemy.png","An enemy encounter"]] },
  { id:"invaders", group:groups[2], title:"Invaders", year:"2024", tags:["Unity","C#","Arcade shooter"], description:"An arcade space shooter with escalating enemy waves, boss encounters and a ship-duplication power-up inspired by Galaga.", detail:"SIT151 project built on the course starting framework. My development report documents the duplicate-ship power-up, two boss variants, increasing stage difficulty and a final victory condition.", demo:video("bcafa1f4-ef9c-487d-9cdd-b179005225d8"), images:[["shooter-gameplay.jpg","Duplicate ships and enemy formation"],["shooter-boss.png","Final boss encounter"],["shooter-title.png","Invaders title screen"]] },
  { id:"cloud-api", group:groups[3], title:"Cloud Item API", year:"2025", tags:["Node.js","MongoDB","Docker","Kubernetes"], description:"An Express API for creating, listing, updating and deleting item records, with container packaging and Kubernetes deployment configuration.", detail:"SIT323 coursework. Submission screenshots document persistent storage, a database service and deployment configuration referencing Kubernetes Secrets. This is an archived learning project, not a live hosted API.", images:[["cloud-secrets.png","Deployment referencing Kubernetes Secrets"],["cloud-storage.png","Persistent volume claim for database storage"],["cloud-service.png","MongoDB service configuration"]] },
  { id:"slot-machine", group:groups[4], title:"Slot Machine", year:"2024", tags:["Blender","Hard-surface modelling","Materials"], description:"A 3D slot-machine model created for a class exam, developed from a blockout into a cabinet with reels, controls and a side lever.", detail:"SIT253 assessment model. The original Blender file and progress captures document the modelling process. Presented here as a 3D asset.", images:[["slot-final.png","Slot-machine model with materials"],["slot-progress.png","Reels, cabinet and lever in progress"]] },
  { id:"fantasy-assets", group:groups[4], title:"Fantasy Asset Collection", year:"2024", tags:["Blender","Character modelling","Prop design"], description:"A stylised collection of magical props and a cat companion: a winged potion bottle, crescent wand and witch's hat.", detail:"SIT253 asset-design coursework inspired by Little Witch Academia. Models explore shape, materials and texture work for an imagined VR broom-racing setting. This is a modelling collection rather than a completed VR game.", images:[["cat.png","Stylised cat companion"],["potion.png","Winged potion bottle"],["wand.png","Crescent-moon wand"],["hat.png","Witch's hat modelling view"]] },
];
const asset = name => `${import.meta.env.BASE_URL}projects/${name}`;

function Gallery({ project }) {
  const [index, setIndex] = useState(0);
  const dialog = useRef(null);
  const opener = useRef(null);
  const current = project.images[index];
  if (!current) return <div className="work-workflow"><p>APP WORKFLOW</p><ol>{project.steps.map(step => <li key={step}>{step}</li>)}</ol></div>;
  return <div className={`work-gallery ${project.portrait ? "work-portrait" : ""}`}>
    <button ref={opener} className="work-image-button" onClick={() => dialog.current.showModal()} aria-label={`Enlarge ${project.title}: ${current[1]}`}>
      <img src={asset(current[0])} alt={current[1]} loading="lazy" width="1200" height="700" /><span className="work-enlarge">View image ↗</span>
    </button>
    <div className="work-gallery-bar"><p>{current[1]}</p><div className="work-image-choices" aria-label={`${project.title} images`}>
      {project.images.map((img,i) => <button key={img[0]} onClick={() => setIndex(i)} aria-pressed={index===i} aria-label={`Show ${img[1]}`}>{i+1}</button>)}
    </div></div>
    <dialog ref={dialog} className="work-lightbox" onClose={() => opener.current?.focus()} aria-label={`${project.title} enlarged image`}>
      <button className="work-close" onClick={() => dialog.current.close()} autoFocus>Close ×</button>
      <img src={asset(current[0])} alt={current[1]} /><p>{project.title} — {current[1]}</p>
    </dialog>
  </div>;
}

function Projects() {
  const [filter,setFilter] = useState(groups[0]);
  const visible = projects.filter(p => filter===groups[0] || p.group===filter);
  return <section id="projects" className="section work-section" aria-labelledby="projects-heading">
    <p className="section-label">SELECTED WORK</p><h2 id="projects-heading">Code. Play. Create.</h2>
    <p className="section-description">From useful mobile apps to interactive games and 3D worlds. Personal projects in progress alongside selected university and design work.</p>
    <div className="work-filters" role="group" aria-label="Filter projects by discipline">{groups.map(group => <button key={group} aria-pressed={filter===group} onClick={() => setFilter(group)}>{group}</button>)}</div>
    <p className="work-count" aria-live="polite">{visible.length} projects · {filter}</p>
    {groups.slice(1).filter(group => visible.some(p => p.group===group)).map(group => <section className="work-group" key={group} aria-labelledby={`group-${groups.indexOf(group)}`}>
      <h3 id={`group-${groups.indexOf(group)}`} className="work-group-heading">{group}</h3>
      <div className="work-grid">{visible.filter(p=>p.group===group).map(project => <article className={`work-card work-${project.id}`} key={project.id}>
        <Gallery project={project}/><div className="work-copy"><p className="work-year">{project.group} / {project.year}</p>
          {project.status && <p className="work-status">{project.status}</p>}<h4>{project.title}</h4><p>{project.description}</p>
          <ul className="work-tags" aria-label="Technologies and skills">{project.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
          {project.localVideo && <figure className="work-demo">
            <video controls playsInline preload="none" poster={asset(project.images[0][0])} aria-label="PAT5 gameplay demo">
              <source src={asset(project.localVideo)} type="video/mp4" />
              Your browser does not support this video. <a href={asset(project.localVideo)}>Open the PAT5 demo</a>.
            </video>
            <figcaption>Development demo · prototype visuals. Tower Drop music: Voxel Revolution by Kevin MacLeod (incompetech.com), <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>.</figcaption>
          </figure>}
          <div className="work-links">{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Watch demo ↗</a>}{project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">View source ↗</a>}</div>
          {project.demo && <p className="work-video-note">Hosted on Deakin Panopto; access may require a Deakin sign-in.</p>}
          <details className="work-details"><summary>About this project</summary><p>{project.detail}</p></details>
        </div></article>)}</div>
    </section>)}
    {(filter === groups[0] || filter === groups[2]) && <aside className="work-upcoming" aria-labelledby="vr-upcoming">
      <p className="section-label">COMING SOON</p><h3 id="vr-upcoming">VR experiences</h3>
      <p>A showcase of my university VR projects is coming next, with demonstrations and development details.</p>
    </aside>}
  </section>;
}
export default Projects;
