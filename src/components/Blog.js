import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import RosierSain from '../images/rosiersain.jpeg';

import OrchidSain from '../images/orchidsain.jpeg';

import AloeVeraSain from '../images/aloeverasain.jpeg';

import AshTreeSain from '../images/ashtreesain.jpeg';

import BambooSain from '../images/bamboosain.jpeg';

import CactusSain from '../images/cactussain.jpeg';

import SunFlowersSain from '../images/sunflowerssain.jpeg';

import FersSain from '../images/fernssain.jpeg';

import TulipomaniaSain from '../images/tulipomaniasain.jpeg';

import BonsaiSain from '../images/bonsaisain.jpeg';

const Emoji = styled.span`
  font-size: 1.2em; /* Adjust the size as needed */
  margin-left: 5px; /* Adjust the spacing as needed */
`;



const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const BlogCard = styled.div`
  width: 300px;
  margin: 20px;
  padding: 15px;
  // border: 5px solid #4caf50;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const ReadMoreLink = styled(Link)`
  display: block;
  text-align: right;
  color: #4caf50;
  text-decoration: none;
`;

const SearchInput = styled.input`
  margin-bottom: 20px;
  padding: 8px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.div`
  margin: 0 10px;
  padding: 8px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#4caf50' : '#ddd')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
`;

const ITEMS_PER_PAGE = 8; // Nombre d'articles par page

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const blogs = [
    { id: 1, title: 'Ash tree', content: 'Ash trees are deciduous trees that ...',image: AshTreeSain },
    { id: 2, title: 'Orchids', content: 'Orchids are stunning flowers that require special care ...' ,image: OrchidSain},
    { id: 3, title: 'Roses', content: 'Roses, with their magnificent flowers, are plants cherished in ...',image: RosierSain},
    { id: 4, title: 'Cactus Varieties', content: 'Cactus Varieties are unique and fascinating plants known for ...',image: CactusSain },
    { id: 5, title: 'Bamboo ', content: 'Bamboo is a versatile and fast-growing plant that can add...',image: BambooSain },
    { id: 6, title: 'Tulipomania', content: 'Tulipomania refers to a period in the 17th century during which tulip bulbs became ...',image: TulipomaniaSain },
    { id: 7, title: 'Sunflowers ', content: 'Sunflowers, with their vibrant yellow petals and distinctive appearance, have ...',image:SunFlowersSain },
    { id: 8, title: 'Bonsai  ', content: 'Bonsai, the art of cultivating miniature trees, is a centuries-old practice that ...',image: BonsaiSain },
    { id: 9, title: 'Ferns', content: 'Ferns are versatile and elegant plants that add ...' ,image: FersSain},
    { id: 10, title: 'Aloe Vera', content: 'Aloe vera, known for its succulent leaves and various medicinal properties, is a popular plant ...',image: AloeVeraSain },
    // ... Add more entries for other plants
  ];

  // Filtrer les blogs en fonction du terme de recherche
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  // Calculer l'index de début et de fin pour l'élément actuel sur la page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Sélectionner les blogs à afficher sur la page actuelle
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  return (
    
    <div  className='bg-gradient-to-t from-lime-400 to-lime-50 p-5 '>
    {/* <Header /> */}
      <center>
        
        <h2 style={{ color: '#4caf50' }}>-- Let's know more about plants  <Emoji role="img" aria-label="Plant">
            🌿
          </Emoji> --</h2>
       
        <SearchInput
          type="text"
          placeholder="Search Plant..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Réinitialiser la page actuelle lors de la recherche
          }}
        />
        <Emoji role="img" aria-label="Search">
            🔍
          </Emoji>

      </center>
      <BlogList>
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id}>
            <img src={blog.image} alt={`Blog ${blog.id} Image`} style={{ width: '100%', height: '50%', objectFit: 'cover', borderRadius: '10px'}} />
            <h3 style={{ color: '#4caf50' }}>{blog.title}</h3>
            <p>{blog.content.substring(0, 100)}...</p>
            <ReadMoreLink to={`/blog/${blog.id}`}>Read More</ReadMoreLink>
          </BlogCard>
        ))}
      </BlogList>

      {totalPages > 1 && (
        <Pagination>
          {Array.from({ length: totalPages }).map((_, index) => (
            <PageNumber
              key={index}
              active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </PageNumber>
          ))}
        </Pagination>
      )}
      
    </div>
  );
};

export default Blog;
