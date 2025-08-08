import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Kasblar from './pages/Kasblar';
import KasbDetails from './pages/KasbDetails';
import MavzuDetails from './pages/MavzuDetails';

import AiMutaxassisi from './pages/AiMutaxassisi';
import GrafikDizayner from './pages/GrafikDizayner';
import VideoMontajUstasi from './pages/VideoMontajUstasi';
import TilOqituvchisi from './pages/TilOqituvchisi';
import WebDasturchi from './pages/WebDasturchi';

import Test from './pages/Test'; // <-- bu qator qo‘shildi
import BlogSection from './pages/BlogSection';
import ItKasbTanlash from './pages/ItKasbTanlash';
import TalabgirKasblar2025 from './pages/TalabgirKasblar2025';
import FrontendDasturchi from './pages/FrontendDasturchi';
import BackendDasturlash from './pages/BackendDasturlash';
import AIvaML from './pages/AIvaML';
import WebDizayn from './pages/WebDizayn';
import PsixologikTestlar from './pages/PsixologikTestlar';
import ITIshBozori from './pages/ITIshBozori';
import BizHaqimizda from './pages/BizHaqimizda';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kasblar" element={<Kasblar />} />
          <Route path="/kasblar/:kasbId" element={<KasbDetails />} />
          <Route path="/kasblar/:kasbId/mavzular/:mavzuId" element={<MavzuDetails />} />
 <Route path="/about" element={<BizHaqimizda />} />
          {/* Maxsus sahifalar */}
          <Route path="/kasblar/ai-mutaxassisi" element={<AiMutaxassisi />} />
          <Route path="/kasblar/grafik-dizayner" element={<GrafikDizayner />} />
          <Route path="/kasblar/video-montaj-ustasi" element={<VideoMontajUstasi />} />
          <Route path="/kasblar/til-oqituvchisi" element={<TilOqituvchisi />} />
          <Route path="/kasblar/web-dasturchi" element={<WebDasturchi />} />

          
          <Route path="/test" element={<Test />} /> 
          <Route path="/loyihalar" element={<BlogSection/>} />
          <Route path="/blog/it-kasb-tanlash" element={<ItKasbTanlash />} />
<Route path="/blog/talabgir-kasblar-2025" element={<TalabgirKasblar2025 />} />
<Route path="/blog/frontend-dasturchi-bolish" element={<FrontendDasturchi />} />
<Route path="/blog/backend-dasturlash-asoslari" element={<BackendDasturlash />} />
<Route path="/blog/ai-va-ml-asoslari" element={<AIvaML />} />
<Route path="/blog/web-dizayn-ux-ui" element={<WebDizayn />} />
<Route path="/blog/psixologik-testlar-kasb-tanlash" element={<PsixologikTestlar />} />
<Route path="/blog/uzbekistonda-it-ish-bozori" element={<ITIshBozori />} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
