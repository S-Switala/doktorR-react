import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet-async';


function StomatologiaDziecieca() {
	return (
		<>
			<Helmet>
				<title>doktor R | Stomatologia dziecięca</title>
				<meta
					name='description'
					content='Bezstresowe wizyty dzieci w gabinecie doktor R w Siedlcach – adaptacja przez zabawę, komfortowe warunki i indywidualne podejście do najmłodszych pacjentów.'
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
							Bezstresowe wizyty dzieci w Siedlcach – komfort i uśmiech najmłodszych w przychodni doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Stomatologia dziecięca — bezstresowe wizyty</h2>
						<p>
							W naszej praktyce otaczamy dzieci szczególną opieką, dbając o to, aby każda wizyta kojarzyła się z
							przyjemnością i ciekawą przygodą. Już od pierwszego spotkania zapewniamy komfortowe warunki, oswajając
							najmłodszych Pacjentów z gabinetem i personelem poprzez zabawę.
						</p>
						<p>
							Pierwsza wizyta adaptacyjna ma na celu przyzwyczajenie dziecka do nowego środowiska, pokazanie działania
							sprzętów i zbudowanie pozytywnych skojarzeń — wszystko w atmosferze zabawy i bezpieczeństwa. Dzielni mali
							Pacjenci otrzymują od nas drobne upominki motywujące do dbania o uśmiech.
						</p>
						<p>
							Podczas kolejnych wizyt kontynuujemy indywidualne podejście — przygotowaliśmy specjalne kąciki zabaw oraz
							stosujemy sprawdzone techniki adaptacji. Regularne kontrole, lakowanie i fluoryzacja pomagają utrzymać
							zdrowy uśmiech najmłodszych na lata.
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/stomatologia-dziecieca.webp'
							alt='Kącik zabaw dla dzieci w poczekalni gabinetu stomatologicznego Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default StomatologiaDziecieca
