import React from 'react';
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import '../styles/tailwind.css';

export function News() {
  return (
    <div className="bg-gradient-to-t from-lime-50 via-lime-300 to-lime-50 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {newsData.map((item) => (
          <div key={item.id} className="mb-8">
            <Card className="bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardHeader color="green" className="h-56 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-lg flex items-center justify-center">
                  <Typography variant="subtitle2" color="white">
                    {item.category}
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="p-4">
                <Typography variant="h5" color="green" className="mb-2 text-green-700 font-semibold">
                  {item.title}
                </Typography>
                <Typography className="text-gray-700 leading-tight mb-4">
                  {item.detail.slice(0, 100)}{" ..."}
                </Typography>
                <div className="mt-4">
                  <Link
                    to={`/news/post/${item.id}`}
                    className="bg-green-700 text-white font-bold py-2 px-4 rounded-full hover:bg-green-800 transition-colors duration-300"
                  >
                    Read more
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
