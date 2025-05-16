import Footer from '../../../components/Footer'
import { Helmet } from 'react-helmet-async';

function UsuwanieZebow() {
	return (
		<>
			<Helmet>
				<title>doktor R | Usuwanie zębów</title>
				<meta
					name='description'
					content='Usuwanie zębów w gabinecie doktor R w Siedlcach – bezpieczne, bezbolesne ekstrakcje, w tym usuwanie zębów mądrości i zatrzymanych korzeni.'
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
							Usuwanie zębów w Siedlcach – bezpieczne i bezbolesne zabiegi w przychodni doktor R.
						</p>
					</div>
				</div>
			</header>
			<section className='image-text-section'>
				<div className='image-text-wrapper'>
					<div className='text-side'>
						<h2>Usuwanie zębów</h2>
						<p>
							Zabieg ekstrakcji zęba przeprowadzamy z pełnym zaangażowaniem i troską o komfort Pacjenta. Dzięki
							odpowiedniemu znieczuleniu i technikom atraumatycznym zabieg jest całkowicie bezbolesny.
						</p>
						<p>
							Przed ekstrakcją wykonujemy dokładne badania diagnostyczne. Na ich podstawie dobieramy najlepszą metodę –
							w tym także uzupełnienie tymczasowe, jeśli dotyczy to zębów przednich.
						</p>
						<p>
							W naszej praktyce wykonujemy m.in.:
							<ul>
								<li>• atraumatyczne ekstrakcje,</li>
								<li>• usuwanie zębów mądrości,</li>
								<li>• ekstrakcje zatrzymanych zębów i pozostawionych korzeni.</li>
							</ul>
						</p>
					</div>
					<div className='image-side'>
						<img
							src='/img/ekstrakcja.webp'
							alt='Narzędzia stomatologiczne przygotowane do zabiegu w gabinecie Doktor R w Siedlcach'
							loading='lazy'
						/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default UsuwanieZebow
