import "./styles.css";
import profile from "../../assets/profile.jpeg";

export default function Main() {
  return (
    <div id="main" className="container-main">
      <div className="main">
        <div className="presentation">
          <h3 className="presentation-h3">Oi, eu sou</h3>
          <div>
            <h1 className="presentation-h1">Jean Matos</h1>
          </div>
          <div>
            <h3 className="presentation-h3">Desenvolvedor Front-end</h3>
          </div>
        </div>
        <div>
          <img className="profile" alt="profile-image" src={profile} />
        </div>
      </div>
    </div>
  );
}
