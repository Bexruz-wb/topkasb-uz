// pages/KasbDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import webMavzular from '../data/webMavzular';
import aiMavzular from '../data/aiMavzular';
import dizaynMavzular from '../data/dizaynMavzular';
import videoMontajMavzular from '../data/videoMontajMavzular';
import tilMavzular from '../data/tilMavzular';

const mavzularMap = {
  web: webMavzular,
  ai: aiMavzular,
  grafik: dizaynMavzular,
  video: videoMontajMavzular,
  til: tilMavzular,
};

const KasbDetails = () => {
  const { kasbId } = useParams();
  const mavzular = mavzularMap[kasbId] || [];

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>{kasbId.toUpperCase()} bo‘yicha mavzular:</h2>
      <ul className='space-y-3'>
        {mavzular.map((mavzu) => (
          <li key={mavzu.id} className='bg-gray-100 p-4 rounded shadow'>
            <Link to={`/kasblar/${kasbId}/${mavzu.id}`} className='font-semibold text-blue-600'>
              {mavzu.nomi}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KasbDetails;
