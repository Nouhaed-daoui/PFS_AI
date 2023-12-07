import React from 'react';
import { Card, CardHeader, CardBody, Typography,} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import  '../styles/tailwind.css';


export function News() {

  return (
    <div className="bg-gradient-to-t from-lime-400 to-lime-50">
    <div className=" grid grid-cols-3" >
      {newsData.map((item) => (
        <div key={item.id} className="w-full  m-1 p-1 flex basis-1">
          <Card className=" bg-white m-3 hover:shadow-md " >
            <CardHeader color="green" className="relative h-56 m-2 flex">
              <img src={item.image}  className="h-full  rounded-lg"  width={800} height={250} />
            </CardHeader>
            <CardBody className='m-3'>
              <Typography variant="h4" color="green" className="mb-2  text-green-700">
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


