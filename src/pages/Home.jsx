import { motion } from 'framer-motion'
import { FaRegSmileBeam, FaUserShield, FaTools, FaCheckCircle } from 'react-icons/fa'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async';


const values = [
	{
		icon: <FaRegSmileBeam />,
		title: 'Empatia i zaufanie',
		text: 'Budujemy relacje z pacjentami oparte na zaufaniu, trosce i zrozumieniu – wiemy, jak ważny jest komfort psychiczny podczas leczenia.',
	},
	{
		icon: <FaUserShield />,
		title: 'Bezpieczeństwo',
		text: 'Korzystamy wyłącznie z certyfikowanych technologii i sterylnych procedur, by zapewnić maksymalne bezpieczeństwo każdemu pacjentowi.',
	},
	{
		icon: <FaTools />,
		title: 'Nowoczesna technologia',
		text: 'Nasze gabinety są wyposażone w sprzęt najnowszej generacji, co pozwala na precyzyjną diagnostykę i skuteczne leczenie.',
	},
	{
		icon: <FaCheckCircle />,
		title: 'Skuteczność i trwałość',
		text: 'Dbamy nie tylko o natychmiastowe efekty, ale również o długofalowe rezultaty i pełną satysfakcję naszych pacjentów.',
	},
]

function Home() {
	return (
		<>
			<Helmet>
				<title>doktor R</title>
				<meta
					name='description'
					content='Gabinet stomatologiczny doktor R w Siedlcach – kompleksowe leczenie zębów, implanty, profilaktyka, wybielanie. Twój zdrowy i piękny uśmiech zaczyna się u nas!'
				/>
			</Helmet>
			<header className='site-header'>
				<picture>
					<source media='(max-width: 768px)' srcSet='/img/header-mobile.webp' />
					<img src='/img/header-desktop.webp' alt='Gabinet DoktorR - widok nocą' loading='lazy' />
				</picture>
				<div className='header-content'>
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						doktor R
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}>
						Twój uśmiech jest naszą pasją. W przychodni doktor{'\u00A0'}R łączymy nowoczesną technologię z troskliwą
						opieką, oferując kompleksowe leczenie stomatologiczne dla całej rodziny.
					</motion.p>
				</div>
			</header>
			<section className='about-section'>
				<div className='wrapper'>
					<h2>Stomatologia to nasza pasja</h2>
					<p>
						W przychodni doktor{'\u00A0'}R stawiamy na nowoczesne podejście do stomatologii, w którym priorytetem są
						zdrowie i komfort naszych Pacjentów. Skupiamy się na kompleksowym leczeniu, łącząc estetykę z
						funkcjonalnością, by przywracać uśmiech – nie tylko na twarzy, ale i w codziennym życiu.
					</p>
					<p>
						Jesteśmy zespołem ludzi, dla których praca z Pacjentem to nie obowiązek, a przywilej. Nasze doświadczenie i
						zaangażowanie pozwalają nam świadczyć usługi na najwyższym poziomie, z zachowaniem pełnej troski i
						indywidualnego podejścia do każdej osoby. W codziennej pracy wykorzystujemy sprawdzone rozwiązania i
						technologie, które gwarantują bezpieczeństwo i trwałość efektów.
					</p>
				</div>
			</section>
			<section className='values-section'>
				<div className='wrapper'>
					<h2>Nasze wartości</h2>
					<div className='cards'>
						{values.map((val, index) => (
							<div className='card' key={index}>
								<div className='icon'>{val.icon}</div>
								<h3>{val.title}</h3>
								<p>{val.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Home
