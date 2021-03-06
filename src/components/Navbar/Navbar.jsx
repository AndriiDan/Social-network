import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsPageContainer from './FriendsPage/FriendsPageContainer';
import s from './Navbar.module.css';

const Navbar = (props) => {
  return (
    // let state = store.getState().sidebar;

    <nav className={s.nav}>
      <div className={s.item}>
        {/* NavLink - щоб змінювалися url без перезавантаження сторінки, коли Route (в App.js) побачать зміну url, то виконають свій render */}
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
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
        <NavLink to='/friends' activeClassName={s.activeLink}><FriendsPageContainer
        //  friends={state.friends} 
        /></NavLink>
      </div>
    </nav>
  )
}

export default Navbar;