import React from 'react';
import { Link } from 'react-router-dom';
import webMavzular from '../data/webMavzular';

const WebDasturchi = () => {
  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold mb-6">💻 Web Dasturchi</h1>

      <div className="mb-8 text-justify leading-relaxed text-gray-700 max-w-4xl">
  <p className="mb-4">
    <strong> Web dasturchi</strong> — bu internet orqali ishlaydigan saytlar va veb-ilovalarni yaratuvchi mutaxassis. U foydalanuvchi interfeysidan tortib, serverdagi ma’lumotlar bazasigacha bo‘lgan barcha texnologiyalar bilan ishlashi mumkin.
  </p>
  <p className="mb-4">
    Web dasturchilar odatda ikki asosiy yo‘nalishda ishlaydi: <strong>frontend</strong> (saytning ko‘rinadigan qismi) va <strong>backend</strong> (saytning server va ma’lumotlar bazasi qismi). Har ikki taraf bilan ishlay oladigan mutaxassis esa <strong>full-stack dasturchi</strong> deb ataladi.
  </p>
  <p className="mb-4">
    Frontend dasturchilar <span className="font-medium">HTML, CSS, JavaScript</span> va modern frameworklar — <span className="italic">React, Vue, Angular</span> kabi texnologiyalar yordamida foydalanuvchining brauzerida ko‘rinadigan interfeyslarni yaratadilar.
  </p>
  <p className="mb-4">
    Backend dasturchilar esa <span className="font-medium">Node.js, Python, PHP</span> kabi dasturlash tillari bilan ishlaydi va <span className="italic">MySQL, PostgreSQL, MongoDB</span> kabi ma’lumotlar bazalarini boshqaradi. Ular foydalanuvchi jo‘natgan ma’lumotlarni qabul qilib, to‘g‘ri ishlov berishni ta’minlaydi.
  </p>
  <p className="mb-4">
    Zamonaviy web dasturchilar <strong>Git, API, hosting, xavfsizlik, responsiv dizayn</strong> kabi ko‘plab qo‘shimcha bilimlarga ham ega bo‘lishlari kerak. Bu ko‘nikmalar ularning professional darajasini oshiradi.
  </p>
  <p className="mb-4">
    Web dasturchilik sizga <span className="italic">erkin ishlash, yuqori daromad olish</span> va <span className="italic">dunyo bo‘ylab kompaniyalarda faoliyat yuritish</span> imkonini beradi. Tajriba orttirgan sayin siz o‘z loyihalaringizni yaratishingiz yoki o‘z kompaniyangizni ochishingiz ham mumkin.
  </p>
  <p className="mb-4">
    Ushbu soha <strong>ijodkorlik</strong>, <strong>mantiqiy fikrlash</strong> va <strong>uzluksiz o‘rganishni</strong> talab qiladi. Agar siz raqamlar, kodlar, muammolarni hal qilish va texnologiyaga qiziqsangiz — web dasturchilik aynan siz uchun!
  </p>
  <p className="mb-4">
  Web dasturchilarning oylik daromadi ularning tajribasi, ishlayotgan joyi va malakasiga qarab farqlanadi. Boshlovchi darajadagi <strong>Junior developer</strong> odatda $200 – $500 atrofida maosh olsa, <strong>Middle darajadagi</strong> dasturchi $500 – $1000 yoki undan yuqoriroq daromadga ega bo‘ladi. Tajribali <strong>Senior developerlar</strong> esa $1500 – $3000+ gacha ishlashadi, ayniqsa xalqaro kompaniyalarda yoki masofaviy (remote) ishda. Freelance orqali ishlaydigan web dasturchilar esa bir oyda necha million so‘m daromad qilishlari mumkin, bu ularning loyihalar soni va sifatiga bog‘liq.
</p>

</div>


      <h2 className="text-2xl font-semibold mb-4">Asosiy mavzular</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {webMavzular.map(mavzu => (
          <Link
            key={mavzu.id}
            to={`/kasblar/web/mavzular/${mavzu.id}`}
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

export default WebDasturchi;
