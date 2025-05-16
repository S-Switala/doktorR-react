import Footer from '../../../components/Footer'
import { Helmet } from 'react-helmet-async';


function LeczenieKanalowePodMikroskopem() {
	return (
		<>
			<Helmet>
				<title>doktor R | Leczenie kanałowe</title>
				<meta
					name='description'
					content='Leczenie kanałowe pod mikroskopem w gabinecie doktor R w Siedlcach. Skutecznie ratujemy zęby dzięki doświadczeniu i nowoczesnym technologiom.'
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
							Leczenie kanałowe pod mikroskopem w Siedlcach – uratuj ząb dzięki doświadczeniu specjalistów z przychodni
							doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Leczenie kanałowe</h2>
						<p>
							Gdy ząb jest poważnie zniszczony, leczenie kanałowe daje szansę na jego uratowanie. Pracując pod
							mikroskopem, oczyszczamy kanały i szczelnie je wypełniamy, zapewniając zębowi trwałość i funkcję na wiele
							lat.
						</p>
						<p>
							Zajmujemy się leczeniem pierwotnym oraz powtórnym – nawet w trudnych przypadkach. Nasza praca opiera się
							na doświadczeniu, wysokiej jakości materiałach i zaawansowanej diagnostyce RTG.
						</p>
						<p>Cały zabieg przeprowadzany jest w znieczuleniu, dzięki czemu jest w pełni komfortowy dla Pacjenta.</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/endodoncja.webp'
							alt='Mikroskop stomatologiczny używany w leczeniu kanałowym w gabinecie Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default LeczenieKanalowePodMikroskopem
