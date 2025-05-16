import Footer from '../../../components/Footer'
import { Helmet } from 'react-helmet-async';


function WybielanieLampa() {
	return (
		<>
			<Helmet>
				<title>doktor R | Wybielanie zębów lampą</title>
				<meta
					name='description'
					content='Wybielanie zębów lampą LED w gabinecie doktor R w Siedlcach – szybkie, bezpieczne rozjaśnianie uśmiechu nawet o kilka odcieni podczas jednej wizyty.'
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
							Wybielanie zębów lampą w Siedlcach – olśniewający uśmiech w gabinecie doktor R już po jednej wizycie.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Wybielanie lampą</h2>
						<p>
							Wybielanie zębów lampą to jedna z najskuteczniejszych metod poprawy estetyki uśmiechu w krótkim czasie. W
							naszym gabinecie stosujemy zaawansowane systemy wybielające, które w połączeniu ze specjalistycznym żelem
							pozwalają uzyskać efekt jaśniejszego i bardziej promiennego uśmiechu już podczas jednej wizyty.
						</p>
						<p>
							Podczas zabiegu, na powierzchnię zębów nakładany jest profesjonalny preparat wybielający, a następnie
							aktywowany za pomocą specjalnej lampy LED. Światło intensyfikuje działanie składników aktywnych,
							umożliwiając skuteczne rozjaśnienie zębów nawet o kilka odcieni w ciągu około godziny.
						</p>
						<p>
							Zabieg jest bezpieczny, szybki i komfortowy. Efekty wybielania lampą utrzymują się przez długi czas,
							zwłaszcza przy odpowiedniej higienie jamy ustnej. Przed wybielaniem zalecamy wykonanie skalingu i
							piaskowania, aby zapewnić równomierne i najlepsze możliwe rezultaty.
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/wybielanie.webp'
							alt='Efekt przed i po wybielaniu zębów w gabinecie stomatologicznym Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default WybielanieLampa
