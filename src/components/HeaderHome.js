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
    // style={navStyle}
    <header  className="items-center shadow-lg bg-white flex w-full flex-col justify-center px-16 max-md:max-w-full max-md:px-5">

      <div className="items-center flex w-full max-w-[1140px] justify-between gap-5 pl-2.5 max-md:max-w-full max-md:flex-wrap">
        <div className="flex items-stretch justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
          <Link to="/" style={logoStyle}>
            <img src={logo} alt="Logo" style={logoImgStyle} />
          </Link>

          <div className="items-stretch flex justify-between gap-5 px-4 self-center">
            <div className="text-stone-800 text-sm grow whitespace-nowrap">
              <Link to="/">
                Home
              </Link>
            </div>
            <div className="text-stone-800 text-sm">
              <Link to="/library">
                Library
              </Link>
            </div>
            <div className="text-stone-800 text-sm">
              <Link to="/news">
                News 
              </Link>
            </div>
            <div className="text-stone-800 text-sm">
              <Link to="/History">
                History
              </Link>
            </div>
            <div className="text-stone-800 text-sm">
              <Link to="/Contact">
                Contact Us
              </Link>
            </div>
            <div className="text-stone-800 text-sm grow whitespace-nowrap">
              API
            </div>
          </div>
        </div>

        <div className="items-stretch self-stretch flex justify-between gap-5 pl-20 py-4 max-md:pl-5">
          <div className="text-white text-right text-sm whitespace-nowrap justify-center items-stretch bg-red-700 grow px-6 py-2.5 rounded-lg max-md:px-5">
          <Link to="/SignOut">
            Sign Out
          </Link>
          </div>
        </div>
      </div>


    </header>
  );
};

export default HeaderHome;
