// import React from 'react';
// import { Link } from 'react-router-dom';

// const kasblar = [
//   {
//     id: 'web-dasturchi',
//     name: 'Web Dasturchi',
//     shortInfo: 'Veb sayt va ilovalarni yaratadi.',
//   },
//   {
//     id: 'grafik-dizayner',
//     name: 'Grafik Dizayner',
//     shortInfo: 'Vizual kontent yaratadi.',
//   },
//   {
//     id: 'ai-mutaxassisi',
//     name: 'AI Mutaxassisi',
//     shortInfo: 'Sun’iy intellekt texnologiyalari ustida ishlaydi.',
//   },
//   {
//     id: 'video-montaj-ustasi',
//     name: 'Video Montaj Ustasi',
//     shortInfo: 'Videolarni tahrir qiladi.',
//   },
//   {
//     id: 'til-oqituvchisi',
//     name: 'Til O‘qituvchisi',
//     shortInfo: 'Til o‘rgatadi.',
//   },
// ];

// const Kasblar = () => {
//   return (
//     <div className="container">
//       <h2>Kasblar ro‘yxati</h2>
//       <ul className="kasb-list">
//         {kasblar.map(kasb => (
//           <li key={kasb.id} className="kasb-item">
//             <Link to={`/kasblar/${kasb.id}`}>
//               <h3>{kasb.name}</h3>
//               <p>{kasb.shortInfo}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Kasblar;
import React from 'react';
import { Link } from 'react-router-dom';

const kasblar = [
  { id: 'web-dasturchi', name: 'Web Dasturchi', shortInfo: 'Veb sayt va ilovalarni yaratadi.' },
  { id: 'grafik-dizayner', name: 'Grafik Dizayner', shortInfo: 'Vizual kontent yaratadi.' },
  { id: 'ai-mutaxassisi', name: 'AI Mutaxassisi', shortInfo: 'Sun’iy intellekt texnologiyalari ustida ishlaydi.' },
  { id: 'video-montaj-ustasi', name: 'Video Montaj Ustasi', shortInfo: 'Videolarni tahrir qiladi.' },
  { id: 'til-oqituvchisi', name: 'Til O‘qituvchisi', shortInfo: 'Til o‘rgatadi.' },
];

const Kasblar = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Kasblar ro‘yxati</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kasblar.map(kasb => (
        <li key={kasb.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <Link to={`/kasblar/${kasb.id}`}>
            <h3 className="text-xl font-semibold mb-2">{kasb.name}</h3>
            <p>{kasb.shortInfo}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Kasblar;
