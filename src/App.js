// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';

import HeaderHome from './components/HeaderHome';
import NavBar from './components/NavBar';
import { News } from './components/News';
import NewsDetails from './components/NewDetails';
import { newsData } from './data/newsData';
import GetDiagnostic from './components/GetDiagnostic';


const App = () => {

  const styles = {
    
    headerHome: {
      backgroundColor: '#333',
      color: 'white',
      padding: '10px',
    },
    
  };

  return (
    <Router>
    <HeaderHome style={styles.headerHome} />
    {/* <NavBar /> */}
    {/* <GetDiagnostic /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:blogId" element={<BlogDetail/>} />
        <Route path="/news" element={<News />} />
        <Route path="/GetDiagnostic" element={<GetDiagnostic />} />
        <Route path="/news/post/:id" element={<NewsDetails newsData={newsData} />} />
      </Routes>
      
    </Router>
    
  );
};

export default App;
