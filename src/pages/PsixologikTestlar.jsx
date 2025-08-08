import React from 'react';

const PsixologikTestlar = () => {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-yellow-500">
        Kasb tanlashda psixologik testlar qanday yordam beradi?
      </h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Kasb tanlashda psixologik testlar o‘z qiziqishlaringiz, qobiliyatingiz va shaxsiy xususiyatlaringizni aniqlashda yordam beradi.
        Bu testlar orqali o‘zingiz uchun eng mos va qoniqarli yo‘nalishni topish mumkin.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Testlar odatda shaxsiy xususiyatlar, qobiliyatlar, qiziqishlar va ish sharoitlariga bo‘lgan munosabatni o‘lchaydi. Natijalarga qarab, sizga mos keladigan kasblar tavsiya qilinadi.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Masalan, quyidagi testlarni sinab ko‘rishingiz mumkin:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>MBTI (Myers-Briggs Type Indicator)</li>
        <li>Holland Codes (RIASEC)</li>
        <li>Strong Interest Inventory</li>
      </ul>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Shuni unutmangki, test natijalari faqat yo‘nalish ko‘rsatkichidir. Asosiysi o‘zingizni sinab ko‘rish va amaliyot qilishdir.
      </p>
    </section>
  );
};

export default PsixologikTestlar;
