import Footer from '../../../components/Footer'
import { Helmet } from 'react-helmet-async';

function ProtezyZebow() {
	return (
		<>
			<Helmet>
				<title>doktor R | Protezy zębowe</title>
				<meta
					name='description'
					content='Protezy zębowe w gabinecie doktor R w Siedlcach – nowoczesne protezy częściowe, całkowite oraz stabilne protezy na implantach. Przywróć komfort uśmiechu.'
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
							Protezy zębowe w Siedlcach – komfortowe i estetyczne rozwiązania w przychodni doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Protezy zębowe</h2>
						<p>
							Przywracamy komfort i funkcjonalność uśmiechu dzięki nowoczesnym protezom – zarówno częściowym, jak i
							całkowitym. Każde rozwiązanie dopasowujemy indywidualnie, dbając o wygodę i estetykę.
						</p>
						<p>
							W naszej ofercie znajdują się m.in.: protezy całkowite, szkieletowe, ruchome oraz protezy częściowe –
							idealne dla osób z pojedynczymi brakami zębowymi.
						</p>
						<p>
							Szczególną popularnością cieszą się protezy oparte na implantach – gwarantują one znakomitą stabilizację,
							komfort jedzenia i mówienia bez użycia klejów. To świetne rozwiązanie dla osób, które borykają się z
							niestabilnymi protezami klasycznymi.
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/protezy.webp'
							alt='Model protezy zębowej całkowitej wykonanej w gabinecie stomatologicznym Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default ProtezyZebow
