import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet-async';


function BezbolesneLeczenieZebow() {
	return (
		<>
			<Helmet>
				<title>doktor R | Bezbolesne leczenie zębów</title>
				<meta
					name='description'
					content='Bezbolesne leczenie zębów w Siedlcach – nowoczesne znieczulenie, bez stresu i bólu. Sprawdź komfortową opiekę stomatologiczną w gabinecie doktor R.'
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
							Bezbolesne leczenie zębów w Siedlcach – komfort i bezpieczeństwo w przychodni doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>U nas naprawdę nie boli!</h2>
						<p>
							Komfort Pacjenta to dla nas priorytet. W naszej praktyce wszystkie zabiegi przeprowadzamy bezboleśnie i w
							bezstresowej atmosferze. Dzięki zastosowaniu nowoczesnych środków znieczulających i żeli smakowych,
							zapewniamy pełen komfort już od pierwszych chwil wizyty.
						</p>
						<p>
							Przed podaniem znieczulenia aplikujemy żel lub spray w miejscu wkłucia, a następnie bardzo delikatnie
							dozujemy preparat – powoli, bez nadmiernego ciśnienia. Dzięki temu moment podania jest niemal
							niewyczuwalny.
						</p>
						<p>
							Stosowane przez nas preparaty są bezpieczne i skuteczne dla Pacjentów w każdym wieku, a ich działanie
							obejmuje nie tylko czas zabiegu, ale także okres tuż po nim.
						</p>
						<p>
							Dbamy również o odpowiednie wsparcie po leczeniu, zapewniając naszym Pacjentom wskazówki i pomoc w okresie
							rekonwalescencji.
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/znieczulenie.webp'
							alt='Profesjonalne badanie zębów w klinice stomatologicznej Doktor R Siedlce'
							loading='lazy'
						/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default BezbolesneLeczenieZebow
