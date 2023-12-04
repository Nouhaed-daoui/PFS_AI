// Blog.js
import React from 'react';
//import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PlanteCote from "../images/deco.png";

import blogs from '../data/blogsData'; // Import the blogs array
import Header from './Header';

//import { IoMdArrowBack } from 'react-icons/io';
const DecorativeImageLeft = styled.img`
  position: absolute;
  // top: 0.1;
  top: 2;
  left: 50px;
  width: 100px;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const DecorativeImageRight = styled.img`
  position: absolute;
  // top: 0.05;
  top: 2;
  right: 50px;
  width: 100px;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
  

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  max-width: 1000px;
`;
const BlogContent = styled.div`
  font-family: 'Copperplate', Fantasy;
  color: #333;
  line-height: 1.6;
  font-weight: bold;
  font-size: 20px;
  overflow-y: auto;
  max-height: 800px;
  max-width: 5000px; /* Adjust the max-width according to your design */
  margin: 0 auto; /* Center the content horizontally */

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4caf50;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f8f8f8;
  }

  p {
    margin-bottom: 12px;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 12px;
  }

  li {
    margin-bottom: 6px;
  }
`;

const BlogTitle = styled.h2`
  color: #4caf50;
  margin-bottom: 16px;
  font-family: 'Copperplate', Fantasy;
  font-weight: bold;
  font-size: 3em; /* Adjust this value to your desired font size */
  text-align: center; /* Center the text */
`;

const BlogImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd; /* Couleur de la bordure */
  background-color: #f8f8f8; /* Couleur de fond */
`;

const BlogImageContainer = styled.div`
  display: flex;
  gap: 400px; /* Espace entre les images */
`;


// const BlogContent = styled.div`
//   color: #333;
//   line-height: 1.6;

//   p {
//     margin-bottom: 12px;
//   }

//   ul {
//     list-style-type: disc;
//     padding-left: 20px;
//     margin-bottom: 12px;
//   }

//   li {
//     margin-bottom: 4px;
//   }
// `;

const BlogDetail = () => {
  const { blogId } = useParams();
  //const navigate = useNavigate();
  

  // Simulated blog content
  const blog = blogs.find((blog) => blog.id === Number(blogId));

  if (!blog) {
    return <div>Blog not found</div>;
  }
  
  return (
     
    <BlogContainer>
       <Header />
<DecorativeImageLeft src={PlanteCote} alt="Decorative Image" />
      <DecorativeImageRight src={PlanteCote} alt="Decorative Image" />     

    {/* {blogId && (
        <NavBarLink>
          <HomeLink onClick={() => navigate('/')}>
            <BackArrow>&larr;</BackArrow> 
          </HomeLink>
        </NavBarLink>
      )} */}
       
      <BlogTitle>{blog.title}</BlogTitle>
      <BlogImageContainer>
        
        {blog.images.map((image, index) => (
          <BlogImage key={index} src={image} alt={`Blog ${blog.id} Image ${index}` } /> 
        ))}
    </BlogImageContainer>
      <BlogContent dangerouslySetInnerHTML={{ __html: blog.detailedContent }} />
      

    </BlogContainer>

  );
};

export default BlogDetail;
