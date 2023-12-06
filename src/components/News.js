import React from 'react';
import { Card, CardHeader, CardBody, Typography,} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import  '../styles/tailwind.css';


export function News() {

  return (
    <div className='mx-4 my-4 ms-8 me-8 ps-8'>
    <div className="row flex flex-wrap justify-center mx-auto " >
      {newsData.map((item) => (
        <div key={item.id} className="w-full md:w-1 p-3 col-md-4">
          <Card className=" bg-green-100 mt-6  flex flex-col  space-x-4  hover:shadow-md" >
            <CardHeader color="green" className="relative h-56 mt-4 flex">
              <img src={item.image}  className="h-full me-5 rounded-lg"  width={800} height={250} />
            </CardHeader>
            <CardBody className='me-2'>
              <Typography variant="h4" color="green" className="mb-2  mt-4 text-green-700">
                {item.title}
              </Typography>
              <Typography className="leading-tight max-w-prose" variant="h6" >
                <p className="text-gray-700">{item.detail.slice(0,100)}{" ..."}</p>

              </Typography>
              <div className="py-1 px-2 mt-4 mb-1 decoration-none rounded">
                <Link to={`/news/post/${item.id}`}className="bg-green-700 text-white font-bold py-1 px-2 mt-4 decoration-none rounded hover:bg-green-800" >Read more</Link>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
    </div>
      
  );
}


