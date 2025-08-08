import React from 'react';

const FrontendDasturchi = () => {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-yellow-500">
        Frontend dasturchi bo‘lish uchun kerakli bilimlar
      </h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Frontend dasturchi veb-sayt va ilovalarning ko‘rinadigan qismini yaratadi. Quyidagi bilim va ko‘nikmalarni o‘zlashtirish tavsiya etiladi:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>HTML, CSS — sahifa tuzilishi va dizayni uchun asosiy tillar.</li>
        <li>JavaScript — sahifalarga interaktivlik qo‘shish uchun.</li>
        <li>React, Vue yoki Angular kabi zamonaviy frontend kutubxonalar.</li>
        <li>Responsive dizayn — turli ekran o‘lchamlari uchun moslashuvchanlik.</li>
        <li>Git — versiya nazorati tizimi.</li>
        <li>Asosiy UX/UI tushunchalari.</li>
      </ul>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Shuningdek, testing, performance optimization, va SEO haqida ham bilim olish foydali bo‘ladi. Praktik loyihalar orqali o‘rganishni mustahkamlash juda muhim.
      </p>
    </section>
  );
};

export default FrontendDasturchi;
