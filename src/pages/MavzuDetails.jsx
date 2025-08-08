import React from 'react';
import { useParams } from 'react-router-dom';

import webMavzular from '../data/webMavzular';
import aiMavzular from '../data/aiMavzular';
import dizaynMavzular from '../data/dizaynMavzular';
import videoMontajMavzular from '../data/videoMontajMavzular';
import tilMavzular from '../data/tilMavzular';

const allMavzular = {
  web: webMavzular,
  ai: aiMavzular,
  grafik: dizaynMavzular,
  video: videoMontajMavzular,
  til: tilMavzular,
};

const MavzuDetails = () => {
  const { kasbId, mavzuId } = useParams();

  const mavzular = allMavzular[kasbId] || [];
  const mavzu = mavzular.find(m => m.id === mavzuId);

  if (!mavzu) return <p className="p-4">Mavzu topilmadi.</p>;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">{mavzu.nomi}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mavzu.videolar.map(video => (
          <div key={video.id} className="bg-black p-4 rounded shadow">
            <h3 className="font-semibold mb-2">{video.nomi}</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video.link}
                title={video.nomi}
                allowFullScreen
                frameBorder="0"
                 className="w-full h-full"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MavzuDetails;
