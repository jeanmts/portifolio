import './styles.css';
import iconButton from '../../assets/icon-hamburger-button.svg';

export default function Header() {

function menuModal() {
const openModal = document.querySelector('.open-modal');
    openModal.classList.toggle('close-modal');
}
function closeModal() {
    const closed = document.querySelector('.open-modal');
    if(!closed.classList.contains('.close-modal')) {
       closed.classList.add('close-modal');
    }
}

    return ( 
        <>
<div className='container-header'>
    <div className='logo'>
        <h2 className='logo-name'>Jm</h2>
        <img onClick={()=>menuModal()} className='icon-button' src={iconButton}></img>
    </div>
    <nav className='nav-header'>
        <ul className='list-header'>
           <a href='#main'><li className='list-options'>Inicio</li></a>
            <a href='#about'><li className='list-option about'>Sobre mim</li></a>
           <a href='#project'><li className='list-options'>Projetos</li></a>
    <a href='#contact'><li className='list-options'>Contato</li></a> 
        </ul>
    </nav>
</div>
<div onClick={()=>closeModal()} className='open-modal close-modal'>
     <nav className='nav-modal'>
        <ul className='list-modal'>
            <a href='#main'><li className='list-options-modal'>Inicio</li></a>
            <a href='#about'><li className='list-option-modal about-modal'>Sobre mim</li></a>
            <a href='#project'><li className='list-options-modal'>Projetos</li></a>
            <a href='#contact'><li className='list-options-modal'>Contato</li></a> 
        </ul>
    </nav>
</div>
        </>


    );
}