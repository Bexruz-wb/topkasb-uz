import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "Sizga qanday faoliyat yoqadi?",
    options: ["Texnologiya bilan ishlash", "San’at yaratish", "Odamlarga yordam berish", "Biznes yuritish"]
  },
  {
    id: 2,
    question: "Bo‘sh vaqtingizda ko‘proq nima qilasiz?",
    options: ["Kod yozaman / dasturlar bilan o‘ynayman", "Rasmlar chizaman / video montaj qilaman", "Psixologiya yoki tibbiyot o‘qiyman", "Pul ishlash yo‘llarini o‘rganaman"]
  },
  {
    id: 3,
    question: "Qaysi vositani ishlatishni yoqtirasiz?",
    options: ["Kompyuter", "Grafik planshet / kamera", "Kitob / intervyular", "Excel / marketing vositalari"]
  },
  {
    id: 4,
    question: "Siz qanday muhitda ishlashni yoqtirasiz?",
    options: ["Yolg‘iz va jim ishlash", "Ijodiy studiyada ishlash", "Jamoada faol bo‘lish", "Ofisda biznes jarayonlarini boshqarish"]
  },
  {
    id: 5,
    question: "Qaysi fanlarni yaxshi ko‘rasiz?",
    options: ["Matematika va informatika", "San’at va dizayn", "Psixologiya va ijtimoiy fanlar", "Iqtisodiyot va boshqaruv"]
  },
  {
    id: 6,
    question: "Muammolarni qanday hal qilasiz?",
    options: ["Mantiqiy tahlil qilib", "Ijodiy yondashuv bilan", "Insonlarga maslahat berib", "Strategik reja tuzib"]
  },
  {
    id: 7,
    question: "Qaysi ish turi sizni ko‘proq qoniqtiradi?",
    options: ["Kod yozish va texnologiya yaratish", "Rassomchilik va vizual ishlanmalar", "Insonlarga yordam berish va o‘rgatish", "Biznesni rivojlantirish va boshqarish"]
  },
  {
    id: 8,
    question: "Qanday ish vaqti sizga ma’qul?",
    options: ["Moslashuvchan, erkin", "Ijodiy va ko‘p o‘zgaruvchan", "Jamoaviy va muntazam", "Ofis va qat’iy jadval"]
  },
  {
    id: 9,
    question: "Qaysi ko‘nikmalar sizda yaxshi rivojlangan?",
    options: ["Texnik va dasturlash", "San’at va dizayn", "Kommunikatsiya va empatiya", "Tashkilotchilik va moliyaviy hisob-kitob"]
  },
  {
    id: 10,
    question: "Qaysi ish natijasi sizni quvontiradi?",
    options: ["Yangi texnologiya yaratish", "Go‘zal va estetik asarlar yaratish", "Boshqalarga yordam berish", "Daromad va biznes muvaffaqiyati"]
  },
  {
    id: 11,
    question: "Siz qanday ish sharoitida ko‘proq samarali bo‘lasiz?",
    options: ["Yolg‘iz va chuqur fikrlash", "Ijodiy va erkin muhit", "Jamoa bilan yaqin ishlash", "Rahbarlik va boshqaruv sharoitida"]
  },
  {
    id: 12,
    question: "Qaysi qobiliyatlaringizni rivojlantirishni hohlaysiz?",
    options: ["Dasturlash va texnologiya", "Dizayn va san’at", "Psixologiya va ijtimoiy aloqalar", "Biznes va marketing"]
  },
  {
    id: 13,
    question: "Qaysi muammolarni hal qilishga qiziqasiz?",
    options: ["Texnik muammolar va kodlash", "Ijodiy vizual muammolar", "Insonlar bilan bog‘liq muammolar", "Tashkiliy va moliyaviy muammolar"]
  },
  {
    id: 14,
    question: "Qaysi sohada o‘rganishga tayyorsiz?",
    options: ["Dasturlash va IT", "Grafik dizayn va video", "Psixologiya va ta’lim", "Biznes va boshqaruv"]
  },
  {
    id: 15,
    question: "Qaysi ish turi sizga kelajakda ko‘proq mos keladi deb o‘ylaysiz?",
    options: ["Web Dasturchi", "Grafik Dizayner", "Psixolog / O‘qituvchi", "Tadbirkor / Marketing Mutaxassisi"]
  },
];

const categorizeAnswer = (answer) => {
  if (
    [
      "Texnologiya bilan ishlash",
      "Kod yozaman / dasturlar bilan o‘ynayman",
      "Kompyuter",
      "Texnik va mantiqiy",
      "Kompyuter oldida yolg‘iz ishlash",
      "Kod yozish, algoritmlar",
      "Matematika va informatika",
      "Dastur yaratish",
      "Texnologiyani rivojlantirish",
      "Kod yozish, yangi texnologiyalar",
      "Yolg‘iz va tinch",
      "Dasturlash, tizimlar",
      "Texnik yutuqlar va innovatsiyalar",
      "Dasturlash va kodlash",
      "Masofadan, kompyuter oldida",
      "Dasturlash va IT",
      "Web Dasturchi"
    ].includes(answer)
  ) {
    return "developer";
  } else if (
    [
      "San’at yaratish",
      "Rasmlar chizaman / video montaj qilaman",
      "Grafik planshet / kamera",
      "Ijodiy va dizayn",
      "San’at studiyasida ijod qilish",
      "Rassomchilik, grafik dizayn",
      "San’at, Dizayn",
      "Reklama va vizual loyihalar",
      "San’at orqali ifoda qilish",
      "Ijodkorlik, dizayn yaratish",
      "Ijodiy va erkin",
      "San’at, vizual effektlar",
      "Ijodiy ifoda va san’at",
      "Grafik va video dizayn",
      "Grafik Dizayner"
    ].includes(answer)
  ) {
    return "designer";
  } else if (
    [
      "Odamlarga yordam berish",
      "Psixologiya yoki tibbiyot o‘qiyman",
      "Kitob / intervyular",
      "Insonlar bilan bog‘liq",
      "Jamoada odamlar bilan ishlash",
      "Empatiya, tinglash",
      "Psixologiya, Tarbiya",
      "Jamiyat uchun yordam loyihalari",
      "Odamlar hayotini yaxshilash",
      "Odamlarga yordam berish, maslahat berish",
      "Ijtimoiy va faol",
      "Kommunikatsiya, psixologiya",
      "Odamlarga yordam va qo‘llab-quvvatlash",
      "Tibbiyot va ta’lim",
      "Jamoa bilan yaqin aloqada",
      "Psixolog / O‘qituvchi"
    ].includes(answer)
  ) {
    return "helper";
  } else if (
    [
      "Biznes yuritish",
      "Pul ishlash yo‘llarini o‘rganaman",
      "Excel / marketing vositalari",
      "Strategik va biznes",
      "Ofisda biznes jarayonlarini boshqarish",
      "Tashkilotchilik, moliya",
      "Iqtisodiyot, Biznes",
      "Biznes va marketing loyihalari",
      "Daromad va biznes yutug‘i",
      "Biznes strategiyalarini ishlab chiqish",
      "Tashkiliy va qat’iy",
      "Rahbarlik, moliya boshqaruvi",
      "Daromad va biznes muvaffaqiyati",
      "Marketing va sotuvlar",
      "Ofisda biznes jarayoni bilan shug‘ullanish",
      "Tadbirkor / Marketing Mutaxassisi"
    ].includes(answer)
  ) {
    return "business";
  }
  return null;
};

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(getRecommendedCareer(newAnswers));
    }
  };

  const getRecommendedCareer = (answers) => {
    const counts = { developer: 0, designer: 0, helper: 0, business: 0 };

    answers.forEach(ans => {
      const category = categorizeAnswer(ans);
      if (category) counts[category]++;
    });

    const maxCount = Math.max(...Object.values(counts));
    const bestCategory = Object.keys(counts).find(key => counts[key] === maxCount);

    switch (bestCategory) {
      case 'developer':
        return {
          kasb: 'Web Dasturchi',
          izoh: 'Siz texnologiyani sevgan, mantiqiy fikrlaydigan va muammolarni hal qilishni yoqtiradigan odamsiz.'
        };
      case 'designer':
        return {
          kasb: 'Grafik Dizayner',
          izoh: 'Sizda tasavvur kuchi kuchli, estetikaga qiziqqan va san’at orqali ifoda qilishni yoqtiradigan salohiyat bor.'
        };
      case 'helper':
        return {
          kasb: 'Psixolog / O‘qituvchi / Tibbiy mutaxassis',
          izoh: 'Siz odamlarga yordam berishni va ularning hayotiga ijobiy ta’sir ko‘rsatishni xohlaysiz.'
        };
      case 'business':
        return {
          kasb: 'Digital Marketing Mutaxassisi yoki Tadbirkor',
          izoh: 'Siz mustaqil ishlashni, yangi g‘oyalarni pullashtirishni yoqtirasiz.'
        };
      default:
        return {
          kasb: 'Kasb aniqlanmadi',
          izoh: 'Savollarga to‘liq javob berishingiz kerak.'
        };
    }
  };

  if (result) {
    return (
      <div className="test-container">
        <h2>Siz uchun eng mos kasb:</h2>
        <p><strong>{result.kasb}</strong></p>
        <p>{result.izoh}</p>
        <button className="btn" onClick={() => {
          setCurrentQuestion(0);
          setAnswers([]);
          setResult(null);
        }}>
          Testni qayta boshlash
        </button>
      </div>
    );
  }

  return (
    <div className="test-container">
      <div className="question">{questions[currentQuestion].question}</div>
      <div className="options">
        {questions[currentQuestion].options.map((option, idx) => (
          <button key={idx} className="btn" onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Test;
