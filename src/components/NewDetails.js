import React from 'react';
import { useParams } from 'react-router-dom';
import  '../styles/tailwind.css';

const NewsDetails = ({ newsData }) => {
  const { id } = useParams();
  const post = newsData.find(post => post.id === parseInt(id));

  return (
    <div className="bg-gradient-to-t from-lime-400 to-lime-50 ">
      
      <div className="  mx-auto  p-8  rounded shadow">
        <h1 className="text-slate-800 text-center text-5xl font-bold leading-7 grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-6">
          {post.title}
        </h1>
        {post && (
          <div className="bg-white flex-col fill-white overflow-hidden self-stretch relative flex  w-full items-stretch my-6 py-4 max-md:max-w-full shadow-2xl">
            
            <div className=" object-contain object-center w-[426px] shadow-sm overflow-hidden self-center max-w-full m-0 max-md:mt-10">
              <img src={post.image} className="w-full rounded-lg" alt={post.title} width={400} height={600}/>
            </div>
            
            <div className="flex flex-col mt-12 pl-12 pr-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <p className="text-black text-lg font-medium leading-8 self-stretch mt-1 max-md:max-w-full max-md:mt-10">{post.detail}</p>
              <p className="text-black text-lg font-medium leading-8 self-stretch mt-12 max-md:max-w-full max-md:mt-10">{post.description}</p>
            </div>

          </div>
      
        )}
      
    </div>  
    </div>
    
  )};
export default NewsDetails;


