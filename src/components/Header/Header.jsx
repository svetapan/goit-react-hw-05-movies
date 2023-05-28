import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  const {nav, navLink, navLinkActive} = css;
  const activePage = ({ isActive }) => isActive ? `${navLink} ${navLinkActive}` : navLink;
  
  return (
    <nav className={nav}>
      <NavLink className={activePage} to="/">
        Home
      </NavLink>
      <NavLink className={activePage} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Header;
