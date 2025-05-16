import Footer from '../../../components/Footer'
import { Helmet } from 'react-helmet-async';


function KoronyIMosty() {
	return (
		<>
			<Helmet>
				<title>doktor R | Korony porcelanowe</title>
				<meta
					name='description'
					content='Korony porcelanowe w gabinecie doktor R w Siedlcach – naturalny wygląd, trwałość i ochrona osłabionych zębów. Odbuduj piękny uśmiech z nami.'
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
							Korony porcelanowe w Siedlcach – trwałe i estetyczne odbudowy zębów w przychodni doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Korony porcelanowe</h2>
						<p>
							Oferujemy estetyczne i trwałe rozwiązania protetyczne, które przywracają komfort życia i piękny uśmiech.
							Korony porcelanowe doskonale odwzorowują kształt i kolor zębów, jednocześnie chroniąc je przed dalszym
							uszkodzeniem.
						</p>
						<p>
							Wskazaniami do wykonania koron są m.in. mocno osłabione lub zniszczone zęby, przebarwienia, pęknięcia,
							urazy czy konieczność wzmocnienia zęba po leczeniu kanałowym.
						</p>
						<p>
							W naszej praktyce stosujemy korony porcelanowe, kompozytowe, pełnoceramiczne oraz – w uzasadnionych
							przypadkach – metalowe. Największą popularnością cieszą się korony cyrkonowe, które gwarantują wyjątkowy
							efekt estetyczny i naturalne załamanie światła.
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/korony.webp'
							alt='Model korony zęba stosowanej w leczeniu protetycznym w gabinecie stomatologicznym Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default KoronyIMosty
