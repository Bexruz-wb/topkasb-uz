import React from 'react';
import './Home.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    

      <main className="container">
        <section className="hero">
          <h1>Qaysi kasb siz uchun eng mos? Endi aniqlang va boshlang!</h1>
          <div className="hero-buttons">
          <Link to="/test" className="btn primary-btn">
              Kasb Testini Boshlash
            </Link>
            <Link to="/kasblar" className="btn secondary-btn">Kasblarni Ko‘rish  </Link> 
          </div>
        </section>
        
        <section className="platform-info">
          <h2>Platforma nima qiladi?</h2>
          <ul>
            <li>O‘zbek yoshlari uchun kasb tanlashda yordam beradi</li>
            <li>Har bir kasbga oid sifatli bepul darsliklar bilan ta’minlaydi</li>
            <li>Qiziqishlaringiz asosida kasb tavsiya qiladi</li>
            <li>Ish topish uchun tayyorlaydi</li>
          </ul>
        </section>

        <section className="advantages">
          <h2>Platformaning afzalliklari:</h2>
          <ul>
            <li>100% bepul</li>
            <li>O‘zbek tilida</li>
            <li>YouTube playlistlar asosida</li>
            <li>Psixologik test orqali mos kasb</li>
            <li>Har bir kasb uchun to‘liq yo‘l xaritasi</li>
          </ul>
        </section>

        <section className="popular-jobs">
          <h2>Eng mashhur kasblar</h2>
          <div className="job-cards">
            <Link to="/kasblar/web-dasturchi" className="job-card" > Web dasturchi</Link>
            <Link to="/kasblar/grafik-dizayner" className="job-card">Grafik dizayner</Link>
            <Link to="/kasblar/ai-mutaxassisi" className="job-card">AI mutaxassisi</Link>
            <Link to="/kasblar/video-montaj-ustasi" className="job-card">Video montaj ustasi</Link>
            <Link to="/kasblar/til-oqituvchisi" className="job-card">Til oqituvchisi</Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2025 TopKasb.uz. Barcha huquqlar himoyalangan.
      </footer>
    </>
  );
};

export default Home;
