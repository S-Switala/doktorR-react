import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import ResponsiveNavBar from './components/ResponsiveNavBar.jsx'

import Home from './pages/Home.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Cennik from './pages/Cennik.jsx'
import ONas from './pages/ONas.jsx'

import BezbolesneLeczenieZebow from './pages/uslugi/BezbolesneLeczenieZebow.jsx'
import Diagnostyka from './pages/uslugi/Diagnostyka.jsx'
import Implanty from './pages/uslugi/ImplantyZebow.jsx'
import Profilaktyka from './pages/uslugi/Profilaktyka.jsx'
import StomatologiaDziecieca from './pages/uslugi/StomatologiaDziecieca.jsx'

import LeczenieProchnicy from './pages/uslugi/stomatologia_zachowawcza/LeczenieProchnicy.jsx'


import Korony from './pages/uslugi/Protetyka/KoronyIMosty.jsx'
import Protezy from './pages/uslugi/Protetyka/ProtezyZebow.jsx'

import LeczenieMikroskop from './pages/uslugi/Endodoncja/LeczenieKanalowePodMikroskopem.jsx'
import PowtorneLeczenie from './pages/uslugi/Endodoncja/PowtorneLeczenieKanalowe.jsx'

import UsuwanieZebow from './pages/uslugi/chirurgia_stomatologiczna/UsuwanieZebow.jsx'

import WybielanieLampa from './pages/uslugi/wybielanie_zebow/WybielanieLampa.jsx'

import WybielanieLaserem from './pages/uslugi/wybielanie_zebow/WybielanieLaserem.jsx'

function App() {
	return (
		<HelmetProvider>
			<ResponsiveNavBar
				content={
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/kontakt' element={<Kontakt />} />
						<Route path='/cennik' element={<Cennik />} />
						<Route path='/o-nas' element={<ONas />} />

						{/* Usługi bez kategorii */}
						<Route path='/uslugi/bezbolesne-leczenie-zebow' element={<BezbolesneLeczenieZebow />} />
						<Route path='/uslugi/diagnostyka' element={<Diagnostyka />} />
						<Route path='/uslugi/implanty' element={<Implanty />} />
						<Route path='/uslugi/profilaktyka' element={<Profilaktyka />} />
						<Route path='/uslugi/stomatologia-dziecieca' element={<StomatologiaDziecieca />} />

						{/* Stomatologia zachowawcza */}
						<Route path='/uslugi/stomatologia_zachowawcza/leczenie-prochnicy' element={<LeczenieProchnicy />} />

						{/* Wybielanie zębów */}
						<Route path='/uslugi/wybielanie_zebow/wybielanie-lampa' element={<WybielanieLampa />}></Route>
						<Route path='/uslugi/wybielanie_zebow/wybielanie-laserem' element={<WybielanieLaserem />}></Route>

						{/* Protetyka */}
						<Route path='/uslugi/protetyka/korony' element={<Korony />} />
						<Route path='/uslugi/protetyka/protezy' element={<Protezy />} />

						{/* Endodoncja */}
						<Route path='/uslugi/endodoncja/leczenie-mikroskop' element={<LeczenieMikroskop />} />
						<Route path='/uslugi/endodoncja/powtorne-leczenie' element={<PowtorneLeczenie />} />

						{/* Chirurgia stomatologiczna */}
						<Route path='/uslugi/chirurgia_stomatologiczna/usuwanie-zebow' element={<UsuwanieZebow />} />
					</Routes>
				}
			/>
		</HelmetProvider>
	)
}

export default App
