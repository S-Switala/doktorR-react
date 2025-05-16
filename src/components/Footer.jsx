import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa'

function Footer() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })

	return (
		<>
			<section className='dent-invite-section' ref={ref}>
				<div className='wrapper'>
					{isInView && (
						<motion.div
							className='dent-invite-content'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}>
							<motion.h2
								className='dent-heading'
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2, duration: 0.6 }}>
								doktor R
							</motion.h2>

							<motion.p
								className='dent-subtext'
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4, duration: 0.6 }}>
								Zapraszamy do gabinetu!
							</motion.p>

							<motion.a
								href='tel:+48511945944'
								className='dent-call'
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.6, duration: 0.5 }}>
								📞 511 945 944
							</motion.a>
						</motion.div>
					)}
				</div>
			</section>
			<section className='contact-info'>
				<div className='wrapper'>
					<div className='contact-item'>
						<FaHome className='icon' />
						<h3>ADRES</h3>
						<p>
							ul. Partyzantów 46,
							<br />
							08-110 Siedlce
						</p>
					</div>
					<div className='contact-item'>
						<FaPhone className='icon' />
						<h3>TELEFON</h3>
						<p>511 945 944</p>
					</div>
					<div className='contact-item'>
						<FaEnvelope className='icon' />
						<h3>E-MAIL</h3>
						<p>kontakt@doktorr.pl</p>
					</div>
				</div>
			</section>
			<footer className='footer'>
				<div className='wrapper'>
					<div className='footer-box'>
						<div className='name-box'>
							<p className='title'>doktor R</p>
							<p className='content'>Zdrowy uśmiech to nasza pasja. Zapraszamy do kontaktu i umówienia wizyty!</p>
						</div>
						<div className='contact-box'>
							<p className='title'>Kontakt</p>
							<p className='content'>
								Telefon: <a href='tel:+48511945944'>+48 511 945 944</a>
							</p>
							<p className='content'>
								Email: <a href='mailto:kontakt@doktorR.pl'>kontakt@doktorr.pl</a>
							</p>
							<p className='title'>Adres:</p>
							<p className='content'>ul. Partyzantów 46, 08-110 Siedlce</p>
						</div>
					</div>
				</div>
				<hr />
				<p className='footer-copy'>© {new Date().getFullYear()} doktor R. Wszystkie prawa zastrzeżone.</p>
			</footer>
		</>
	)
}

export default Footer
