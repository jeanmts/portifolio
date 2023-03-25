import "./styles.css";
import projects from "../../Data/project/index";
export default function Article() {
  return (
    <>
      <div className="container-article">
        {projects.map((project, indice) => {
          return (
            <a
              id="project"
              key={project.id}
              href={project.url}
              className="info-project">
              {project.name}
            </a>
          );
        })}
      </div>
    </>
  );
}
