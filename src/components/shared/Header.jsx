import { Link } from "react-router-dom"
import "./styles/Header.css"

const Header = () => {
  return (
    <header className="header__container">
        <Link to="/" >
         <h1 className="header__title">E-Commerce </h1>
        </Link>
        <nav className="header__nav">
            <ul className="header__ul">
                <li className="header__ul">
                    <Link to="/login"><i className='bx bx-user'></i> </Link>
                </li>
                <li className="header__ul  header__register">
                    <Link to="/register"><i className='bx bx-user-plus'></i></Link>
                </li>
                <li className="header__ul">
                    <Link to="/cart"><i className='bx bx-cart'></i></Link>
                </li>
                <li className="header__ul">
                    <Link to="/purchases"><i className='bx bx-shopping-bag'></i></Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header