import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet-async';


function ImplantyZebow() {
	return (
		<>
			<Helmet>
				<title>doktor R | Implanty zębowe</title>
				<meta
					name='description'
					content='Implanty zębowe w gabinecie doktor R w Siedlcach – trwała i estetyczna odbudowa braków w uzębieniu. Komfort, bezpieczeństwo i naturalny wygląd.'
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
							Implanty zębowe w Siedlcach – nowoczesna odbudowa uśmiechu w przychodni doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Implanty zębowe – nowoczesna metoda odbudowy uśmiechu</h2>
						<p>
							Od lat doceniamy implanty jako najlepsze rozwiązanie dla Pacjentów, którzy chcą odzyskać naturalny wygląd
							i funkcjonalność uzębienia. Implant składa się z tytanowego korzenia, który zrasta się z kością, oraz
							porcelanowej korony idealnie imitującej prawdziwy ząb.
						</p>
						<p>
							Korzystamy wyłącznie z implantów renomowanych producentów, gwarantując najwyższą jakość i trwałość efektów
							leczenia. Nasze doświadczenie pozwala przywrócić Pacjentom zdrowy, estetyczny uśmiech w sposób kompleksowy
							i bezpieczny.
						</p>
						<p>
							Implanty stosujemy w przypadkach:
							<ul>
								<li>• braku pojedynczego zęba,</li>
								<li>• braku kilku zębów,</li>
								<li> • bezzębia - przy wsparciu 2, 4 lub 6 implantami.</li>
							</ul>
						</p>
						<p>
							Dzięki implantom Pacjenci odzyskują komfort podczas codziennych czynności – jedzenia, mówienia i
							uśmiechania się. Unikają również problemów związanych z tradycyjnymi protezami, jak ich wyjmowanie czy
							konieczność szlifowania zębów.
						</p>
						<p>
							Na czas leczenia zapewniamy estetyczne uzupełnienia tymczasowe, dzięki którym Pacjenci mogą czuć się
							swobodnie zarówno w życiu zawodowym, jak i prywatnym.
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/implanty.webp'
							alt='Model implantu stomatologicznego wykorzystywanego w leczeniu protetycznym w gabinecie Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default ImplantyZebow
