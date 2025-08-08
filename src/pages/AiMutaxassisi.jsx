import React from 'react';
import { Link } from 'react-router-dom';
import aiMavzular from '../data/aiMavzular';

const AiDasturchi = () => {
  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold mb-6">🧑🏻‍💻 AI Dasturchi</h1>

      {/* AI dasturchi haqida to‘liq ma’lumot */}
      <div className="mb-10 text-gray-700 max-w-4xl leading-relaxed text-justify">
        <p className="mb-4">
          <strong>AI dasturchi</strong> — bu sun’iy intellekt (AI) va mashinaviy o‘rganish (Machine Learning) texnologiyalarini yaratish, o‘rgatish va amaliyotga tadbiq etish bilan shug‘ullanadigan mutaxassisdir. Ular kompyuterlarni inson kabi fikrlashga, o‘rganishga va qaror qabul qilishga o‘rgatadilar.
        </p>
        <p className="mb-4">
          AI dasturchilar <strong>Python, R, Java</strong> kabi dasturlash tillarida ishlaydi va <strong>TensorFlow, PyTorch, Scikit-learn, Keras</strong> kabi kutubxonalar yordamida neyron tarmoqlar, klassifikatorlar, tavsiya tizimlari va chatbotlar yaratadilar.
        </p>
        <p className="mb-4">
          Ular katta hajmdagi ma’lumotlar ustida ishlaydi (Data Science) va ularni analiz qilib, mashinalarga bu ma’lumotlardan o‘rganishga yordam beradi. AI dasturchilar sun’iy intellektdan <strong>meditsina, moliya, sanoat, avtomatlashtirish, texnik ko‘rik</strong> kabi ko‘plab sohalarda foydalanadilar.
        </p>
        <p className="mb-4">
          Bu kasb kuchli mantiqiy fikrlash, matematika, statistikani tushunish va uzluksiz o‘rganishni talab qiladi. Ayniqsa, <strong>linear algebra, calculus, probability</strong> va <strong>data visualization</strong> bilimlari muhimdir.
        </p>
        <p className="mb-4">
          AI dasturchilarning oyligi juda yuqori bo‘lib, dunyo bo‘ylab o‘rtacha yillik maoshi <strong>$80,000 – $150,000</strong> oralig‘ida bo‘ladi. Masofadan ishlash imkoniyati keng, ayniqsa Yevropa va AQSH kompaniyalarida talab yuqori.
        </p>
        <p>
          Agar siz mantiq, matematika, algoritmlar va texnologiyani sevuvchi bo‘lsangiz — AI dasturchi bo‘lish siz uchun juda istiqbolli va foydali yo‘nalishdir.
        </p>
      </div>

      {/* AI mavzular ro‘yxati */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aiMavzular.map(mavzu => (
          <Link
            key={mavzu.id}
            to={`/kasblar/ai/mavzular/${mavzu.id}`}
            className="block p-4 bg-white rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{mavzu.nomi}</h3>
            <p className="text-gray-600">{mavzu.qisqacha}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AiDasturchi;
