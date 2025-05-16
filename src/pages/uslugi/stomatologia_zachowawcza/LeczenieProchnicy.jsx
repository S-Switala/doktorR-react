import Footer from '../../../components/Footer'
import { Helmet } from 'react-helmet-async';


function LeczenieProchnicy() {
	return (
		<>
			<Helmet>
				<title>doktor R | Leczenie próchnicy</title>
				<meta
					name='description'
					content='Skuteczne leczenie próchnicy w Siedlcach – bez bólu i stresu. Ochrona zębów i zdrowia jamy ustnej w gabinecie doktor R.'
				/>
			</Helmet>
			<header className='header'>
				<picture>
					<source media='(max-width: 768px)' srcSet='/img/uslugi_mobile.webp' />
					<img src='/img/uslugi_pc.webp' alt='Gabinet stomatologiczny' className='header__image' loading='lazy' />
				</picture>
				<div className='header__overlay'>
					<div className='wrapper'>
						<p className='header__title'>
							Leczenie próchnicy w Siedlcach – skuteczna ochrona zdrowia Twoich zębów z przychodnią doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Leczenie próchnicy</h2>
						<p>
							Próchnica to jedna z najpowszechniejszych chorób na świecie. Dzięki wczesnej diagnozie możliwe jest jej
							całkowite wyleczenie. Choć często nie daje objawów bólowych na początku, może być wykryta podczas
							rutynowych wizyt stomatologicznych – m.in. dzięki zdjęciom RTG.
						</p>
						<p>
							Regularne kontrole pozwalają chronić zęby przed powikłaniami próchnicy, która w skrajnych przypadkach
							prowadzi do poważnych problemów zdrowotnych, a nawet utraty zęba. Nieleczona może wpływać na cały
							organizm, m.in. serce i nerki.
						</p>
						<p>
							Leczenie zależy od stopnia zaawansowania zmian:
							<ul>
								<li>✔️ We wczesnych fazach stosujemy remineralizację szkliwa i fluoryzację,</li>
								<li>
									✔️ Przy większych ubytkach – leczenie zachowawcze z zastosowaniem estetycznych, światłoutwardzalnych
									wypełnień kompozytowych,
								</li>
								<li>✔️ Dla dzieci oferujemy kolorowe wypełnienia.</li>
							</ul>
						</p>
						<p>
							Wszystkie zabiegi wykonujemy w komfortowych warunkach i z użyciem znieczulenia miejscowego – bez bólu, bez
							stresu, zgodnie z aktualnymi standardami.
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/prochnica.webp'
							alt='Model zębów przed i po leczeniu próchnicy w gabinecie stomatologicznym Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default LeczenieProchnicy
