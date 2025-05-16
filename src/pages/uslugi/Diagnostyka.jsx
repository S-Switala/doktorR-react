import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet-async';


function Diagnostyka() {
	return (
		<>
			<Helmet>
				<title>doktor R | Nowoczesna diagnostyka</title>
				<meta
					name='description'
					content='Nowoczesna diagnostyka stomatologiczna w gabinecie doktor R w Siedlcach – cyfrowe zdjęcia RTG, pantomogramy i precyzyjna ocena stanu zdrowia jamy ustnej.'
				/>
			</Helmet>
			<header className='header'>
				<picture>
					<source media='(max-width: 768px)' srcSet='/img/uslugi_mobile.webp' />
					<img src='/img/uslugi_pc.webp' alt='Gabinet stomatologiczny' className='header__image' loading='lazy'/>
				</picture>
				<div className='header__overlay'>
					<div className='wrapper'>
						<p className='header__title'>
							Nowoczesna diagnostyka stomatologiczna w Siedlcach – precyzja i bezpieczeństwo w gabinecie doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Nowoczesna diagnostyka</h2>
						<p>
							W doktor R stawiamy na wysoką jakość usług, dlatego ogromne znaczenie ma dla nas precyzyjna diagnostyka i
							profilaktyka. Wykorzystujemy nowoczesny sprzęt, który pozwala szybko i dokładnie zidentyfikować nawet
							najmniejsze zmiany.
						</p>
						<p>
							Dysponujemy m.in.:
							<ul>
								<li>• RVG</li>
								<li>• pantomografem,</li>
							</ul>
						</p>
						<p>
							Cyfrowa diagnostyka pozwala na wczesne wykrycie zmian, zanim pojawią się objawy. Dzięki temu możemy
							zapobiec rozwojowi chorób i skutecznie zaplanować leczenie.
						</p>
						<p>
							Badania wykonujemy w komfortowych warunkach – zarówno podczas wizyt konsultacyjnych, jak i w trakcie
							trwania zabiegu, kiedy Pacjent znajduje się już na fotelu. Wszystko po to, aby zapewnić pełne
							bezpieczeństwo i maksymalny komfort leczenia.
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/diagnostyka.webp'
							alt='Analiza zdjęcia RTG zębów i tomografii komputerowej w gabinecie stomatologicznym Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Diagnostyka
