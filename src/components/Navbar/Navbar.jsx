import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsPage from './FriendsPage/FriendsPage';
import s from './Navbar.module.css';

const Navbar = (props) => {

  // let friends = [
  //   { id: 1, name: 'Танька' },
  //   { id: 2, name: 'Сергій' },
  //   { id: 3, name: 'Толік' }
  // ]

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/friends' activeClassName={s.activeLink}><FriendsPage friends={props.state.friends} /></NavLink>
      </div>
    </nav>
  )
}

export default Navbar;