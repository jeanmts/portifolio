import "./styles.css";
import projects from "../../Data/project/index";
export default function Article() {
  function handleVisitProject() {}

  return (
    <>
      {projects.map((project, indice) => {
        return (
          <div
            id="project"
            onClick={() => handleVisitProject()}
            key={project.id}
            className="container-article">
            <a href={project.url} className="info-project">
              {project.name}
            </a>
          </div>
        );
      })}
    </>
  );
}
