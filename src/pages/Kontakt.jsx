import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async';


function Kontakt() {
	return (
		<>
			<Helmet>
				<title>doktor R | Kontakt i lokalizacja</title>
				<meta
					name='description'
					content='Skontaktuj się z gabinetem doktor R w Siedlcach. Telefon, e-mail, adres oraz mapa lokalizacji – umów wizytę i zadbaj o swój uśmiech!'
				/>
			</Helmet>
			<header className='header'>
				<picture>
					<source media='(max-width: 768px)' srcSet='/img/kontakt_mobile.webp' />
					<img src='/img/kontakt_pc.webp' alt='Gabinet stomatologiczny' className='header__image' loading='lazy' />
				</picture>
				<div className='header__overlay'>
					<div className='wrapper'>
						<p className='header__title'>Potrzebujesz dentysty w Siedlcach?</p>
						<p className='header__title'>Skontaktuj się z nami i wybierz profesjonalną opiekę stomatologiczną!</p>
					</div>
				</div>
			</header>
			<section className='contact'>
				<div className='wrapper'>
					<div className='contact__info'>
						<p className='contact__title'>Kontakt</p>
						<p className='contact__content'>
							Telefon: <a href='tel:+48511945944'>+48 511 945 944</a>
						</p>
						<p className='contact__content'>
							Email: <a href='mailto:kontakt@doktorR.pl'>kontakt@doktorr.pl</a>
						</p>

						<p className='contact__title'>Adres:</p>
						<p className='contact__content'>ul. Partyzantów 46, 08-110 Siedlce</p>
					</div>

					<div className='contact__map'>
						<iframe
							title='Mapa DoktorR'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.395904114873!2d22.292453176673573!3d52.16378717197961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47218788e79efae5%3A0x3f85b8a87e779f17!2sPartyzant%C3%B3w%2046%2C%2008-110%20Siedlce!5e0!3m2!1spl!2spl!4v1714239473955!5m2!1spl!2spl'
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen=''
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'></iframe>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Kontakt
