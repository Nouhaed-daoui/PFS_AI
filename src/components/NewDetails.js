import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetails = ({ newsData }) => {
  const { id } = useParams();
  const post = newsData.find(post => post.id === parseInt(id));

  return (
    <div className='bg-green-100 max-w-8xl'>
      <div className="bg-green-100  mx-auto mt-4 p-4 rounded shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">{post.title}</h2>
        {post && (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 mb-4 md:mb-0">
            <p className="text-gray-700">{post.detail}</p>
              <p className="text-gray-700">{post.description}</p>
            </div>
            <div className="md:w-1/3">
              <img src={post.image} className="w-full rounded-lg" alt={post.title} width={400} height={600}/>
            </div>
          </div>
      
        )}
        </div>
    </div>
  )};
export default NewsDetails;


