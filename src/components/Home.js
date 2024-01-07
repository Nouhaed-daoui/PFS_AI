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
    // headerFooter: {
    //   backgroundColor: '#333',
    //   color: 'white',
    //   padding: '50px',
    // },
  };

  return (
    // style={styles.app}
    <div>
      <div  className='bg-gradient-to-t from-lime-300 to-lime-50 pt-16 '>
        <main style={styles.main} className=' grid  content-center'>
          <div style={styles.landingContainer}>
            {/* <img src={LandingPage} alt="Landing Page Image" style={styles.landingImage} className='' /> */}
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35d9f20f853ce4e9cedf49e4fd4adee40c8a5edbecf39420e07e40249a690c17?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d9f20f853ce4e9cedf49e4fd4adee40c8a5edbecf39420e07e40249a690c17?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d9f20f853ce4e9cedf49e4fd4adee40c8a5edbecf39420e07e40249a690c17?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d9f20f853ce4e9cedf49e4fd4adee40c8a5edbecf39420e07e40249a690c17?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d9f20f853ce4e9cedf49e4fd4adee40c8a5edbecf39420e07e40249a690c17?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d9f20f853ce4e9cedf49e4fd4adee40c8a5edbecf39420e07e40249a690c17?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d9f20f853ce4e9cedf49e4fd4adee40c8a5edbecf39420e07e40249a690c17?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d9f20f853ce4e9cedf49e4fd4adee40c8a5edbecf39420e07e40249a690c17?apiKey=49a8e08e74bb44d9affdaac81f6699af&"
              className="aspect-[1.52] object-contain object-center w-[939px] shadow-sm overflow-hidden self-center z-[1] max-w-full"
            />
          </div>

          <div className="md:w-1/2 text-left text-zinc-900">
            <h2 className="text-4xl  md:text-5xl lg:text-6xl font-bold mb-4">
              Kachf: an AI-powered WebSite for Plant Disease Detection            
            </h2>
            <p className="text-lg mb-6 mt-4 leading-7">
              identifies your plant diseases and improve productivity and get farming knowledge for free.            
            </p>
            <a href="/GetDiagnostic" className="bg-indigo-600 hover:bg-indigo-800 text-white px-8 py-4 rounded-full text-lg transition duration-300 inline-block">
              Get a free diagnosis
            </a>
          </div>


        </main>
      
      </div>


      <div className="bg-gradient-to-t from-lime-50 to-lime-300 pt-16 justify-center items-center flex flex-col px-20 max-md:px-5">
      <div className=" bg-zinc-100 flex w-[1140px] shrink-0 max-w-full h-px flex-col border-t border-solid" />
      <div className="flex w-full max-w-[1017px] justify-between gap-5 mt-12 items-center max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="text-zinc-900 text-4xl font-medium leading-[50px] grow shrink basis-auto mt-2.5">
          Check out what our users are saying
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55143535ef60cc4faa3469f34159639c689c354bb5c7c8d1d25dc003521a5e9c?apiKey=49a8e08e74bb44d9affdaac81f6699af&"
          className="aspect-[1.24] object-contain object-center w-full-50% overflow-hidden self-stretch"
        />
      </div>
      <div className="w-full max-w-[1140px] mt-7 max-md:max-w-full py-8">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

        <div className=" p-6 rounded-lg shadow-md text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcab6a2ea710328cfd0f66eb92f711f1616d41a295bd26086f895def67688530?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=200"
              alt="User 1"
              className="mx-auto w-20 h-20 rounded-full mb-4"
            />
            <p className="text-gray-800 text-lg mb-4">
              The website is efficient and user-friendly, making it a help to identify crop diseases and find both chemical and biological treatments that we can use.
            </p>
            <div className="text-blue-600 font-semibold">
              Benaarouch Mohamed
            </div>
            <div className="text-gray-500 text-sm">
              IT Student | Morocco
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-md text-center">
            <img
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9528334e8ef534bdb7f84055b2c9080d091285ab0e40ebdb4f176d8070f6754a?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9528334e8ef534bdb7f84055b2c9080d091285ab0e40ebdb4f176d8070f6754a?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9528334e8ef534bdb7f84055b2c9080d091285ab0e40ebdb4f176d8070f6754a?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9528334e8ef534bdb7f84055b2c9080d091285ab0e40ebdb4f176d8070f6754a?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9528334e8ef534bdb7f84055b2c9080d091285ab0e40ebdb4f176d8070f6754a?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9528334e8ef534bdb7f84055b2c9080d091285ab0e40ebdb4f176d8070f6754a?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9528334e8ef534bdb7f84055b2c9080d091285ab0e40ebdb4f176d8070f6754a?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9528334e8ef534bdb7f84055b2c9080d091285ab0e40ebdb4f176d8070f6754a?apiKey=49a8e08e74bb44d9affdaac81f6699af&"
              alt="User 1"
              className="mx-auto w-20 h-20 rounded-full mb-4"
            />
            <p className="text-gray-800 text-lg mb-4">
            As an agronomist, I highly recommend this solution. It's been effective in identifying and providing solutions to combat plant diseases.
            </p>
            <div className="text-blue-600 font-semibold">
            Boujamaa Echou
            </div>
            <div className="text-gray-500 text-sm">
            Agronomist | Morocco
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-md text-center">
            <img
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b28e8b1ea2c931951da7816ab754313fdb9dbba70c93517dfcf84e42f793120f?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28e8b1ea2c931951da7816ab754313fdb9dbba70c93517dfcf84e42f793120f?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28e8b1ea2c931951da7816ab754313fdb9dbba70c93517dfcf84e42f793120f?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28e8b1ea2c931951da7816ab754313fdb9dbba70c93517dfcf84e42f793120f?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28e8b1ea2c931951da7816ab754313fdb9dbba70c93517dfcf84e42f793120f?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28e8b1ea2c931951da7816ab754313fdb9dbba70c93517dfcf84e42f793120f?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28e8b1ea2c931951da7816ab754313fdb9dbba70c93517dfcf84e42f793120f?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28e8b1ea2c931951da7816ab754313fdb9dbba70c93517dfcf84e42f793120f?apiKey=49a8e08e74bb44d9affdaac81f6699af&"
                  alt="User 1"
              className="mx-auto w-20 h-20 rounded-full mb-4"
            />
            <p className="text-gray-800 text-lg mb-4">
            This app provided excellent analysis and solutions for my plant diseases. I highly recommend it to anyone looking to improve their crop health!
            </p>
            <div className="text-blue-600 font-semibold">
            Hamza Ibrahim
            </div>
            <div className="text-gray-500 text-sm">
            Farmer | Tunis
            </div>
          </div>
          
        </div>
      </div>
    </div>

    </div>

  );
}

export default Home;