import CardProject from "../cardProject/cardProject";
import "./projectView.css";
import Projects from "./projects.json";

function ProjectView() {
  const projects: any = Projects;
  return (
    <section className="projectView" id="project">
      <h2>&lt; Mes Projets &gt;</h2>
      <div className="projectContainer">
        {projects.map((e: any, index: number) => (
          <CardProject
            key={index}
            link={e.link}
            name={e.name}
            github={e.github}
            lang={e.lang}
            desc={e.desc}
            logo={e.logo}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectView;
