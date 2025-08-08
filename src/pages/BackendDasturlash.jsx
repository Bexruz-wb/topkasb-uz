import React from 'react';

const BackendDasturlash = () => {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-yellow-500">
        Backend dasturlash asoslari
      </h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Backend dasturlash — veb ilovaning server qismi, ma’lumotlar bazasi va biznes logikasini boshqaradi. Quyidagi tillar va texnologiyalarni o‘rganish tavsiya etiladi:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Node.js va Express.js (JavaScript server tomon uchun)</li>
        <li>Python va Django/Flask</li>
        <li>Ruby on Rails</li>
        <li>Java Spring</li>
        <li>Ma’lumotlar bazalari (MySQL, PostgreSQL, MongoDB)</li>
        <li>RESTful API yaratish va integratsiyasi</li>
        <li>Authentication & Authorization</li>
      </ul>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Backend dasturchi sifatida xavfsizlik, ma’lumotlar bazasi optimizatsiyasi va server infratuzilmasini tushunish muhim. Kod yozishdan tashqari, tizim arxitekturasi haqida bilim olish foydali.
      </p>
    </section>
  );
};

export default BackendDasturlash;
