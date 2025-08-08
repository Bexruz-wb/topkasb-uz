import React from 'react';

const WebDizayn = () => {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-yellow-500">
        Web dizayn va UX/UI asoslari
      </h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Web dizayn — veb sahifalarning tashqi ko‘rinishi va foydalanuvchi tajribasini shakllantirish.
        UX (User Experience) — foydalanuvchining sayt yoki ilovadagi tajribasi,
        UI (User Interface) — foydalanuvchi ko‘rgan interfeys elementlari.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Asosiy ko‘nikmalar:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Adobe XD, Figma, Sketch kabi dizayn vositalari</li>
        <li>Ranglar va tipografiya nazariyasi</li>
        <li>Foydalanuvchi yo‘nalishini tushunish</li>
        <li>Responsive dizayn va mobil moslashuvchanlik</li>
        <li>Prototiplash va testlash</li>
      </ul>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Web dizayner sifatida doimiy ravishda yangi trendlarni kuzatish va foydalanuvchilarni tushunish muhim.
      </p>
    </section>
  );
};

export default WebDizayn;
