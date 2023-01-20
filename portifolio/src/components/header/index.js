import "./styles.css";
import iconButton from "../../assets/icon-hamburger-button.svg";

export default function Header() {
  function menuModal() {
    const openModal = document.querySelector(".open-modal");
    openModal.classList.toggle("close-modal");
  }
  function closeModal() {
    const closed = document.querySelector(".open-modal");
    if (!closed.classList.contains(".close-modal")) {
      closed.classList.add("close-modal");
    }
  }

  return (
    <>
      <div className="container-header">
        <div className="logo">
          <h2 className="logo-name">Jm</h2>
          <img
            onClick={() => menuModal()}
            className="icon-button"
            src={iconButton}
          ></img>
        </div>
        <nav className="nav-header">
          <ul className="list-header">
            <li className="list-options">
              {" "}
              <a href="#main">Inicio</a>
            </li>
            <li className="list-option about">
              <a href="#about"> Sobre mim</a>
            </li>
            <li className="list-options">
              <a href="#project">Projetos</a>
            </li>
            <li className="list-options">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
      <div onClick={() => closeModal()} className="open-modal close-modal">
        <nav className="nav-modal">
          <ul className="list-modal">
            <li className="list-options-modal">
              <a href="#main">Inicio</a>
            </li>
            <li className="list-option-modal about-modal">
              <a href="#about">Sobre mim</a>
            </li>
            <li className="list-options-modal">
              <a href="#project">Projetos</a>
            </li>
            <li className="list-options-modal">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
