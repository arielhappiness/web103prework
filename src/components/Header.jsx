import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <div>
    <header className='center'>
      <h1 id = "head">Kpop-Creatorverse</h1>
      <div className='button-flex2'>
      <Link to="/add">
        <button id= 'view'>Add Kpop Creators</button>
      </Link>
      <Link to="/">
        <button id='edit'> View All Creators</button>
      </Link>
      </div>

      </header>
      </div>
  );
};

export default Header;