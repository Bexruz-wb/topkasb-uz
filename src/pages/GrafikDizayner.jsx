import React from 'react';
import MavzuCard from '../components/MavzuCard';
import dizaynMavzular from '../data/dizaynMavzular';

const GrafikDizayner = () => {
  const kasbId = 'grafik'; // allMavzular obyektingizdagi kalitga mos bo'lishi kerak

  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold mb-6">🧑🏻‍💻 Grafik Dizayner</h1>

      <div className="mb-8 text-gray-700 max-w-4xl leading-relaxed text-justify">
  <p className="mb-4">
    <strong>Grafik dizayner</strong> — bu turli vizual materiallar orqali g‘oyalarni etkazuvchi ijodiy mutaxassis. U logotip, banner, reklama materiallari, ijtimoiy tarmoq postlari, plakatlar va web dizayn elementlarini yaratadi.
  </p>
  <p className="mb-4">
    Grafik dizaynerlar odatda <strong>Adobe Photoshop, Illustrator, Figma, Canva, Sketch</strong> kabi grafik dizayn dasturlarida ishlaydi. Ular kompaniya brendiga mos, chiroyli va samarali dizaynlarni yaratib, foydalanuvchi e’tiborini tortishga harakat qiladi.
  </p>
  <p className="mb-4">
    Dizayn tayyorlashda <strong>rangsifatlar, shriftlar, kompozitsiya va vizual balans</strong> muhim rol o‘ynaydi. Grafik dizayner foydalanuvchining psixologiyasini tushunishi, trendlarni bilishi va kreativ fikrlashi kerak.
  </p>
  <p className="mb-4">
    Zamonaviy grafik dizaynerlar nafaqat statik dizayn (banner, logo), balki <strong>UI/UX dizayn, animatsiya</strong> va <strong>motion graphics</strong> bilan ham shug‘ullanadi. Ayniqsa, web va mobil ilovalar uchun interfeys yaratishda ular katta rol o‘ynaydi.
  </p>
  <p className="mb-4">
    Bozorda grafik dizaynerlarga talab juda yuqori. Freelancer sifatida ishlash, dizayn studiyalarda faoliyat yuritish yoki o‘z mijozlaringiz bilan ishlash orqali barqaror daromadga ega bo‘lish mumkin.
  </p>
  <p className="mb-4">
    Grafik dizaynerlarning daromadi tajriba va loyihaga qarab o‘zgaradi. Boshlang‘ich darajada oyiga $100–$300 atrofida topish mumkin. Tajribali dizaynerlar esa $500–$1500 va undan yuqori daromad olishi mumkin. Ayniqsa, xorijiy mijozlar bilan ishlaganda bu raqamlar oshadi.
  </p>
  <p>
    Grafik dizayner bo‘lish uchun eng muhimi — <strong>portfolio</strong>. Ko‘proq amaliy ishlar qilish, real loyihalarda qatnashish va o‘z ishlaringizni onlayn platformalarda namoyish etish — bu sohada muvaffaqiyat kalitidir.
  </p>
</div>


      <h2 className="text-2xl font-semibold mb-4">Asosiy mavzular</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dizaynMavzular.map(mavzu => (
          <MavzuCard key={mavzu.id} mavzu={mavzu} kasbId={kasbId} />
        ))}
      </div>
    </section>
  );
};

export default GrafikDizayner;
