import { RiPhoneFill, RiMailFill, RiInstagramFill, RiFacebookCircleFill, RiWhatsappFill, RiArrowDownSLine } from 'react-icons/ri';
import logo from '../../../assets/logo/logo.jpg';

export const Header = (): JSX.Element => {
  return (
    <>
      <header className='header'>
        <div className='header__bar'>
          <div className="header__bar__contact">
            <a href="" target="_blank" rel="noopener noreferrer"><RiPhoneFill/>959 075 511</a>
            <a href="" target="_blank" rel="noopener noreferrer"><RiMailFill/>ventas.dioselyna@gmail.com</a>
          </div>  
          <div className="header__bar__media">
            <a href="" target="_blank" rel="noopener noreferrer"><RiInstagramFill/></a>
            <a href="" target="_blank" rel="noopener noreferrer"><RiFacebookCircleFill/></a>
            <a href="" target="_blank" rel="noopener noreferrer"><RiWhatsappFill/></a>
          </div>
        </div>
        <div className="header__menu">
          <div className="header__menu__logo">
            <img src={logo} alt="" />
          </div>
          <nav className="header__menu__nav">
            <ul>
              <li><a href="">Inicio</a></li>
              <li><a href="">Nosotros</a></li>
              <li>
                <a href="">Categorías<RiArrowDownSLine/></a>
                <ul>
                  <li><a href="">Categoría 1</a></li>
                  <li><a href="">Categoría 2</a></li>
                  <li><a href="">Categoría 3</a></li>
                  <li><a href="">Categoría 4</a></li>
                  <li><a href="">Categoría 5</a></li>
                </ul>
              </li>
              <li><a href="">Novedades</a></li>
              <li><a href="">Marcas</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Contacto</a></li>
            </ul>
          </nav>
        </div>

      </header>
    </>
  )
}
