import './styles.css';

export default function Header() {
    return (
<div className='container-header'>
    <div className='logo'>
        <h2 className='logo-name'>Jm</h2>
    </div>
    <nav className='nav-header'>
        <ul className='list-header'>
           <a href='#main'><li className='list-options'>Inicio</li></a>
            <a href='#about'><li className='list-options'>Sobre mim</li></a>
           <a href='#project'><li className='list-options'>Projetos</li></a>
    <a href='#contact'><li className='list-options'>Contato</li></a> 
        </ul>
    </nav>
</div>
    );
}