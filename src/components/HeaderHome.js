import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const HeaderHome = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1em',
    background: 'linear-gradient(to right, #ffffff, #4caf50)', // Dégradé du blanc vers le vert
    color: 'white',
    position: 'relative',
  };


  const logoStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.5em',
    fontWeight: 'bold',
    display: 'flex', // Permet d'aligner l'image et le texte correctement
    alignItems: 'center', // Centre l'image et le texte verticalement
  };

  const logoImgStyle = {
    marginRight: '0.5em', // Ajoute un espace entre l'image et le texte
    height: '45px', // Ajustez la hauteur selon vos besoins
    // Ajoutez d'autres styles selon vos besoins
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '1em',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <header style={navStyle}>
      <Link to="/" style={logoStyle}>
        <img src={logo} alt="Logo" style={logoImgStyle} />
        
      </Link>
    
      <nav style={navLinksStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        
        <Link to="/Blog" style={linkStyle}>
          Blog
        </Link>
        <Link to="/news" style={linkStyle}>
          News 
        </Link>
        <Link to="/History" style={linkStyle}>
          Historique
        </Link>
        <Link to="/Contact" style={linkStyle}>
          Contact Us
        </Link>
        <Link to="/SignOut" style={linkStyle}>
          Sign Out
        </Link>
      </nav>
    </header>
  );
};

export default HeaderHome;
