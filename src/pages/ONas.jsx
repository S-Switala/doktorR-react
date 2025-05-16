import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async';


function ONas() {
	const teamMembers = [
		{
			name: 'lek. dent. Agnieszka Rzewuska',
			specialty: 'stomatologia zachowawcza, stomatologia dziecięca, endodoncja, protetyka',
			image: '/img/kobieta.webp',
		},
		{
			name: 'lek. dent. Małgorzata Szczęsna',
			specialty: 'stomatologia zachowawcza, stomatologia dziecięca, endodoncja',
			image: '/img/kobieta.webp',
		},
		{
			name: 'lek. dent. Magdalena Dubińska',
			specialty: 'stomatologia zachowawcza, protetyka',
			image: '/img/kobieta.webp',
		},
		{
			name: 'lek. med., lek. dent. Paweł Peryga',
			specialty: 'specjalista chirurgii stomatologicznej, specjalista chirurgii szczękowo-twarzowej, implantolog',
			image: '/img/mezczyzna.webp',
		},
		{
			name: 'Monika Rybaniec',
			specialty: 'dyplomowana higienistka stomatologiczna',
			image: '/img/kobieta.webp',
		},
	]

	return (
		<>
			<Helmet>
				<title>doktor R | Nasz zespół</title>
				<meta
					name='description'
					content='Poznaj zespół gabinetu doktor R w Siedlcach – doświadczeni stomatolodzy, dla których zdrowie i komfort Pacjenta są najważniejsze.'
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
							Tworzymy zgrany zespół dentystów w Siedlcach. Zaufaj profesjonalistom z przychodni doktor
							R!
						</p>
					</div>
				</div>
			</header>
			<section className='zespol'>
				<div className='container'>
					<h1>Nasz Zespół</h1>
					<div className='team-grid'>
						{teamMembers.map((member, index) => (
							<div key={index} className='team-member'>
								<img src={member.image} alt={member.name} />
								<h2>{member.name}</h2>
								<p>{member.specialty}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default ONas
