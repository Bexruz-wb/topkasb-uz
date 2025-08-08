import React from 'react';
import { Link } from 'react-router-dom';

const MavzuCard = ({ mavzu, kasbId }) => {
  return (
    <Link
      to={`/kasblar/${kasbId}/mavzular/${mavzu.id}`}
      className="block p-4 bg-white rounded shadow hover:bg-gray-100 transition"
    >
      <h3 className="text-lg font-semibold mb-2">{mavzu.nomi}</h3>
      <p className="text-gray-700">{mavzu.qisqacha}</p>
    </Link>
  );
};

export default MavzuCard;
