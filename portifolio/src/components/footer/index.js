import "./styles.css";
import imgGit from "../../assets/git.svg";
import imgLink from "../../assets/linkedin.svg";

export default function Footer() {
  return (
    <div id="contact" className="container-footer">
      <a href="https://github.com/jeanmts">
        <img className="img-footer" alt="footer image" src={imgGit}></img>
      </a>
      <a href="https://www.linkedin.com/in/-jeancarlos/">
        <img className="img-footer" alt="footer image" src={imgLink}></img>
      </a>
    </div>
  );
}
