import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Qanday qilib IT sohasida kasb tanlash kerak?',
    description: 'Bu maqolada IT sohasida o‘zingizga mos kasbni qanday tanlash haqida o‘rganasiz.',
    link: '/blog/it-kasb-tanlash',
  },
  {
    id: 2,
    title: '2025 yilda eng talabgir kasblar',
    description: '2025-yilda bozorda eng ko‘p talab qilinadigan kasblar haqida batafsil.',
    link: '/blog/talabgir-kasblar-2025',
  },
  {
    id: 3,
    title: 'Frontend dasturchi bo‘lish uchun kerakli bilimlar',
    description: 'Frontend dasturchi sifatida ish boshlash va o‘sish uchun qanday texnologiyalarni o‘rganish kerakligi haqida.',
    link: '/blog/frontend-dasturchi-bolish',
  },
  {
    id: 4,
    title: 'Backend dasturlash asoslari',
    description: 'Backend dasturlash nima, qanday tillar va texnologiyalar ishlatiladi, ish bozorida qanday imkoniyatlar borligi haqida.',
    link: '/blog/backend-dasturlash-asoslari',
  },
  {
    id: 5,
    title: 'Sun’iy intellekt va mashinani o‘rganish asoslari',
    description: 'AI va Machine Learning haqida boshlang‘ich tushunchalar, sohaga kirish yo‘llari va o‘rganish uchun resurslar.',
    link: '/blog/ai-va-ml-asoslari',
  },
  {
    id: 6,
    title: 'Web dizayn va UX/UI asoslari',
    description: 'Web dizayn sohasi, UX/UI dizayner bo‘lish uchun kerakli ko‘nikmalar va trendlar.',
    link: '/blog/web-dizayn-ux-ui',
  },
  {
    id: 7,
    title: 'Kasb tanlashda psixologik testlar qanday yordam beradi?',
    description: 'Kasb tanlashda o‘z qiziqishlaringiz va qobiliyatingizni aniqlash uchun psixologik testlardan qanday foydalanish mumkinligi haqida.',
    link: '/blog/psixologik-testlar-kasb-tanlash',
  },
  {
    id: 8,
    title: 'O‘zbekistonda IT sohasidagi ish bozorining holati',
    description: 'O‘zbekistonda IT sohasida ish topish imkoniyatlari, o‘sish istiqbollari va eng ko‘p talab qilinadigan yo‘nalishlar.',
    link: '/blog/uzbekistonda-it-ish-bozori',
  },
];

const BlogSection = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Maqolalar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-black p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <Link
                to={post.link}
                className="text-yellow-500 hover:underline font-semibold"
              >
                Batafsil o‘qish →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
