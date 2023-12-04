// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';


import HeaderHome from './components/HeaderHome';


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
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:blogId" element={<BlogDetail/>} />
      </Routes>
      
    </Router>
    
  );
};

export default App;
