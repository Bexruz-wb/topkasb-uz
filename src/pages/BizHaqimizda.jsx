import React from 'react';
import { FaInstagram, FaTelegramPlane, FaTiktok } from 'react-icons/fa';

const BizHaqimizda = () => {
  return (
    <section className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">📌 Biz haqimizda</h1>

      <div className="leading-relaxed text-justify text-lg space-y-5">
        <p>
          <strong>TopKasb.uz</strong> — bu zamonaviy kasblar haqida interaktiv, qulay va bepul o‘quv platforma.
          Saytimiz orqali yoshlar va kasbga qiziquvchilar eng talabgir sohalar haqida to‘liq ma’lumot olishlari, 
          o‘quv kurslarini o‘rganishlari va o‘z yo‘llarini topishlari mumkin.
        </p>

        <p>
          Bizning asosiy maqsadimiz — O‘zbekiston yoshlari va o‘rganuvchilariga sun’iy intellekt, web dasturlash, 
          grafik dizayn, video montaj, til o‘qituvchisi kabi sohalar haqida aniq, tushunarli va sifatli ta'lim 
          resurslarini taqdim etish.
        </p>

        <p>
          Har bir kasb sahifasida siz kasbga oid umumiy ma’lumot, zarur ko‘nikmalar, kerakli dasturlar, 
          o‘rganish uchun darslar va hatto oylik daromad haqida ham batafsil ma'lumot topasiz.
        </p>

        <p>
          Sayt muntazam yangilanib boradi va foydalanuvchilarning fikrlari asosida takomillashib boradi. 
          Siz ham takliflaringizni biz bilan bo‘lishishingiz mumkin!
        </p>

        <p>
          <strong>TopKasb.uz — Kasbingizni toping, kelajagingizni yarating!</strong>
        </p>

        {/* Ijtimoiy tarmoqlar */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">📱 Bizni ijtimoiy tarmoqlarda kuzating:</h2>
          <ul className="flex items-center gap-6 text-xl">
            <li>
              <a
                href="https://instagram.com/topkasb.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://t.me/topkasb_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaTelegramPlane /> Telegram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@topkasb.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition"
              >
                <FaTiktok /> TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BizHaqimizda;
