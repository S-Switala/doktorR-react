import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet-async';


function Profilaktyka() {
	return (
		<>
			<Helmet>
				<title>doktor R | Profilaktyka i higiena jamy ustnej</title>
				<meta
					name='description'
					content='Profilaktyka stomatologiczna i higiena jamy ustnej w gabinecie doktor R w Siedlcach. Skuteczna ochrona przed próchnicą i chorobami dziąseł.'
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
							Profilaktyka i higiena jamy ustnej w Siedlcach – zadbaj o zdrowy i piękny uśmiech w przychodni doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Profilaktyka i higiena jamy ustnej</h2>
						<p>
							Regularne wizyty kontrolne oraz zabiegi profilaktyczne w naszej przychodni pozwalają utrzymać zdrowe
							uzębienie i piękny uśmiech przez długie lata. Kładziemy duży nacisk na systematyczną opiekę oraz edukację
							Pacjentów w zakresie higieny jamy ustnej.
						</p>
						<p>
							Podczas wizyt przeprowadzamy kompleksową diagnostykę oraz wykonujemy zabiegi takie jak: scaling (usuwanie
							kamienia nazębnego), piaskowanie, lakierowanie, fluoryzacja czy lakowanie zębów. Dodatkowo uczymy
							prawidłowych technik szczotkowania, aby Pacjenci mogli samodzielnie dbać o zdrowie jamy ustnej na co
							dzień.
						</p>
						<p>
							Zabiegi wykonywane przez wykwalifikowaną higienistkę stomatologiczną skutecznie zapobiegają rozwojowi
							próchnicy i chorób przyzębia, eliminując także przyczynę nieprzyjemnego zapachu z ust.
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/profilaktyka.webp'
							alt='Model uzębienia oraz narzędzia stomatologiczne w gabinecie dentystycznym Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default Profilaktyka
