import React from 'react';
import MavzuCard from '../components/MavzuCard';
import tilMavzular from '../data/tilMavzular';

const TilOqituvchisi = () => {
  // URL uchun kasb ID
  const kasbId = "til";

  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold mb-6">📚 Til O‘qituvchisi</h1>

      {/* Kasb haqida to‘liq va chiroyli ma'lumot */}
      <div className="mb-10 text-gray-700 max-w-4xl leading-relaxed text-justify">
        <p className="mb-4">
          <strong>Til o‘qituvchisi</strong> — bu boshqa insonlarga xorijiy yoki ona tilini o‘rgatish bilan shug‘ullanuvchi pedagogik mutaxassis. U o‘rgatuvchi tilning <strong>grammatikasi, talaffuzi, so‘z boyligi, yozuvi va og‘zaki nutqi</strong> bo‘yicha bilimlarni berib boradi. Shuningdek, o‘quvchilarga madaniy kontekstni ham o‘rgatadi.
        </p>
        <p className="mb-4">
          Zamonaviy til o‘qituvchilari <strong>interaktiv metodika</strong>, <strong>audio-video vositalar</strong>, <strong>mobil ilovalar</strong> va <strong>onlayn platformalar</strong> (masalan, Zoom, Google Classroom, Duolingo, Quizlet) orqali samarali dars o‘tadi.
        </p>
        <p className="mb-4">
          Ular maktab, universitet, til markazlari, xususiy darslar yoki masofaviy (online) tarzda ta'lim berishadi. Ayniqsa, ingliz, rus, koreys, turk va arab tillari o‘rgatadigan o‘qituvchilarga talab yuqori.
        </p>
        <p className="mb-4">
          Bu kasb <strong>sabr, muloqot qilish qobiliyati, tushuntirish san’ati</strong> va zamonaviy texnologiyalar bilan ishlashni talab qiladi. Yaxshi o‘qituvchi doimo o‘z tilini mukammallashtirib boradi va metodikasini yangilaydi.
        </p>
        <p className="mb-4">
          Til o‘qituvchilari <strong>xalqaro sertifikatlar</strong> (masalan, IELTS, TOEFL, CELTA, TESOL, DELF) orqali malakalarini tasdiqlab, xalqaro darajada ham ishlash imkoniyatiga ega bo‘lishadi.
        </p>
        <p className="mb-4">
          Daromad esa tajriba, til darajasi va o‘quvchilarga bog‘liq. Boshlovchi o‘qituvchilar oyiga <strong>$100–$300</strong> topishi mumkin, tajribali va xalqaro sertifikatga ega bo‘lganlar esa <strong>$500–$2000+</strong> gacha daromad oladilar.
        </p>
        <p>
          Agar siz o‘qitish, til o‘rganish va boshqa insonlarga bilim berishdan zavqlansangiz — <strong>til o‘qituvchisi</strong> bo‘lish siz uchun ideal kasb bo‘lishi mumkin.
        </p>
      </div>

      {/* Mavzular ro'yxati */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tilMavzular.map((mavzu, index) => (
          <MavzuCard 
            key={mavzu.id || index} 
            mavzu={{
              ...mavzu, 
              id: mavzu.id || `til-${index + 1}`
            }} 
            kasbId={kasbId} // <-- MUHIM! URL uchun kasbId beramiz
          />
        ))}
      </div>
    </section>
  );
};

export default TilOqituvchisi;
