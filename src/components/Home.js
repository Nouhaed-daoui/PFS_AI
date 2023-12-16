import React from 'react';
import FooterHome from './FooterHome';
// import LandingPage from '../images/landingpage.jpeg';
import LandingPage from '../images/homeimagee.jpeg';


function Home() {
  const styles = {
    body: {
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      height: '100%',
      overflow: 'hidden',
    },
    app: {
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      padding: '20px',
      flex: 1,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    landingContainer: {
      width: '45%', // Ajustez la largeur selon vos besoins
      height: 'auto',
      minHeight: '500px',
      borderRadius: '12px', // Coins arrondis
      overflow: 'hidden', // Cache tout ce qui dépasse les coins arrondis
    },
    landingImage: {
      width: '100%', // Image prend 100% de la largeur du conteneur
      height: 'auto', // Cela garantit que l'aspect ratio est préservé
      borderRadius: '12px', // Coins arrondis
    },
    welcomeText: {
      maxWidth: '45%', // Ajustez la largeur selon vos besoins
      textAlign: 'left',
    },
    welcomeTitle: {
      fontSize: '2.5em', // Taille du titre augmentée
    },
    welcomeButton: {
      // backgroundColor: '#4caf50',
      color: 'white',
      padding: '15px 30px', // Taille du bouton augmentée
      textDecoration: 'none',
      borderRadius: '8px',
      marginTop: '20px',
      display: 'inline-block',
      fontSize: '1.2em', // Taille du texte du bouton augmentée
    },
    headerFooter: {
      backgroundColor: '#333',
      color: 'white',
      padding: '50px',
    },
  };

  return (
    <div style={styles.app} className='bg-gradient-to-t from-lime-400 to-lime-50'>
      <main style={styles.main}>
        {/* Partie gauche avec l'image */}
        <div style={styles.landingContainer}>
          <img src={LandingPage} alt="Landing Page Image" style={styles.landingImage} />
        </div>

        {/* Partie droite avec le texte et le bouton */}
        <div style={styles.welcomeText}>
          <h2 style={styles.welcomeTitle}>Web Site for Plant Disease Detection</h2>
          <p>identifies your plant diseases and improve productivity and get farming knowledge for free.</p>
          <a href="/GetDiagnostic"  style={styles.welcomeButton} className='bg-blue-600 hover:bg-blue-800'>Get a free diagnosis</a>
        </div>
      </main>
      <FooterHome style={styles.headerFooter} />
    </div>
  );
}

export default Home;

