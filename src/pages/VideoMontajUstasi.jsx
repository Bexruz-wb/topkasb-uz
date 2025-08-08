import React from 'react';
import MavzuCard from '../components/MavzuCard';
import videoMontajMavzular from '../data/videoMontajMavzular';

const VideoMontajUstasi = () => {
  const kasbId = "video"; // URL uchun ID

  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold mb-6">🎬 Video Montaj Ustasi</h1>

      {/* Kasb haqida to‘liq ma'lumot */}
      <div className="mb-10 text-gray-700 max-w-4xl leading-relaxed text-justify">
        <p className="mb-4">
          <strong>Video montaj ustasi</strong> — bu video materiallarni tahrir qilish, montaj qilish va yakuniy mahsulotni professional tarzda tayyorlash bilan shug‘ullanuvchi ijodiy mutaxassisdir. Ular xom videoni kesish, kerakli sahnalarni birlashtirish, musiqa, ovoz, effekt va titrlar qo‘shish orqali tayyor kontent hosil qiladi.
        </p>
        <p className="mb-4">
          Montajchilar <strong>Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, After Effects</strong> kabi professional video montaj dasturlarida ishlaydi. Shuningdek, oddiy montajlar uchun <strong>CapCut, VN Editor, Filmora</strong> kabi mobil ilovalar ham qo‘llaniladi.
        </p>
        <p className="mb-4">
          Video montaj ustalari <strong>ijtimoiy tarmoqlar uchun kontent, reklama roliklari, YouTube videolari, to‘y va tadbir videolari, musiqiy kliplar, qisqa metrajli filmlar</strong> ustida ishlashadi. Ular ko‘rkam, dinamik va mazmunli video yaratish orqali tomoshabinning e’tiborini tortadi.
        </p>
        <p className="mb-4">
          Bu soha <strong>kreativ fikrlash, diqqat, sabr-toqat</strong> va texnik bilimni talab qiladi. Video ritmini his qilish, sahnalarni moslashtirish va ovozni to‘g‘ri joylashtirish montaj sifatiga katta ta’sir qiladi.
        </p>
        <p className="mb-4">
          Video montaj ustalari turli sohalarda faoliyat yuritadi: <strong>blogerlar bilan ishlash, marketing agentliklarida kontent yaratish, kinostudiyalar, reklama kompaniyalari</strong> yoki mustaqil freelancer sifatida xizmat ko‘rsatish mumkin.
        </p>
        <p className="mb-4">
          Ushbu kasb bilan shug‘ullangan insonlar daromadini o‘z salohiyatiga qarab belgilaydi. Boshlovchilar oyiga <strong>$100–$300</strong> atrofida, tajribali montajchilar esa <strong>$500–$1500+</strong> daromad qilishi mumkin. Xorijiy mijozlar bilan ishlaganda esa daromad keskin oshadi.
        </p>
        <p>
          Agar siz videoni yaratish jarayonidan zavqlansangiz, ijodkor bo‘lsangiz va texnik bilimga ega bo‘lishni istasangiz — <strong>video montaj ustasi</strong> bo‘lish siz uchun ajoyib tanlov bo‘ladi.
        </p>
      </div>

      {/* Mavzular ro'yxati */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {videoMontajMavzular.map((mavzu) => (
          <MavzuCard 
            key={mavzu.id} 
            mavzu={mavzu} 
            kasbId={kasbId} 
          />
        ))}
      </div>
    </section>
  );
};

export default VideoMontajUstasi;
