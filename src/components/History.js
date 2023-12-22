import React from 'react';


import  '../styles/tailwind.css';

import FersSain from '../images/fernssain.jpeg';

import TulipomaniaSain from '../images/tulipomaniasain.jpeg';

import BonsaiSain from '../images/bonsaisain.jpeg';





const History = () => {
  const historyData = [
    { id: 1, imageUrl:FersSain , date: '2023-01-01', plantName: 'Plante 1',state:'good'},
    { id: 2, imageUrl: BonsaiSain, date: '2023-02-15', plantName: 'Plante 2',state: 'sick'},
  ];



    return (
       
      <div className="bg-white shadow-2xl overflow-hidden self-stretch relative flex min-h-[12px] w-full items-stretch mt-6 py-11 max-md:max-w-full">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nom de la plante</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">State</th>
            <th className="px-6 py-3 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody>
          {historyData.map(item => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap">
                <img src={item.imageUrl} alt={`Image de ${item.plantName}`} className="h-8 w-8 object-cover rounded-full" />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">{item.date}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{item.plantName}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{item.state}</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Détails</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      );
};

export default History

