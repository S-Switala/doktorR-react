import Footer from '../../../components/Footer'
import { Helmet } from 'react-helmet-async';


function WybielanieLaserem() {
	return (
		<>
			<Helmet>
				<title>doktor R | Wybielanie zębów laserem</title>
				<meta
					name='description'
					content='Wybielanie zębów laserem diodowym w gabinecie doktor R w Siedlcach – szybki, skuteczny i bezpieczny sposób na olśniewająco biały uśmiech.'
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
							Wybielanie zębów laserem w Siedlcach – spektakularne efekty i bezpieczeństwo w przychodni doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Wybielanie laserem</h2>
						<p>
							Wybielanie zębów laserem to nowoczesna, niezwykle skuteczna metoda, która pozwala uzyskać spektakularne
							rezultaty w krótkim czasie. W naszym gabinecie wykorzystujemy specjalistyczny laser diodowy, który
							aktywuje żel wybielający, przyspieszając cały proces i zwiększając skuteczność działania.
						</p>
						<p>
							Procedura polega na nałożeniu żelu na zęby, a następnie naświetlaniu go laserem w precyzyjnie
							kontrolowanych warunkach. Dzięki temu możliwe jest intensywne rozjaśnienie szkliwa bez nadmiernego
							nagrzewania zębów i dziąseł, co czyni zabieg wyjątkowo bezpiecznym i komfortowym dla Pacjenta.
						</p>
						<p>
							Wybielanie laserowe często wymaga tylko jednej wizyty i przynosi natychmiastowe efekty. Zaleca się
							wcześniejsze oczyszczenie zębów z kamienia i osadów, aby maksymalizować skuteczność zabiegu i zapewnić
							równomierne wybielenie.
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/wybielanie_laserem.webp'
							alt='Zabieg wybielania zębów laserem w gabinecie stomatologicznym Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default WybielanieLaserem
