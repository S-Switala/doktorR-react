import Footer from '../../../components/Footer'
import { Helmet } from 'react-helmet-async';


function PowtorneLeczenieKanalowe() {
	return (
		<>
			<Helmet>
				<title>doktor R | Powtórne leczenie kanałowe</title>
				<meta
					name='description'
					content='Powtórne leczenie kanałowe w gabinecie doktor R w Siedlcach. Skuteczna pomoc w ratowaniu zębów dzięki mikroskopowi i nowoczesnym technologiom.'
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
							Powtórne leczenie kanałowe w Siedlcach – uratuj swój ząb dzięki specjalistom z przychodni doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Powtórne leczenie kanałowe</h2>
						<p>
							Jeśli leczony wcześniej ząb ponownie zaczyna boleć, pojawia się przetoka lub zmiany widoczne są na zdjęciu
							RTG – może być konieczne powtórne leczenie kanałowe.
						</p>
						<p>
							Choć to zabieg bardziej złożony niż leczenie pierwotne, często pozwala uratować ząb i uniknąć jego
							usunięcia. Dzięki nowoczesnemu sprzętowi, znieczuleniu oraz doświadczeniu zespołu – przeprowadzamy go
							skutecznie i komfortowo.
						</p>
						<p>
							Etapy zabiegu:
							<ul>
								<li>• szczegółowa diagnostyka RTG,</li>
								<li>• usunięcie starego wypełnienia,</li>
								<li>• oczyszczenie kanałów pod mikroskopem,</li>
								<li>• szczelne, precyzyjne wypełnienie kanałów.</li>
							</ul>
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/reendo.webp'
							alt='Badanie modelu zębowego pod mikroskopem stomatologicznym w gabinecie Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default PowtorneLeczenieKanalowe
