import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async';

import React from 'react'

const Cennik = () => {
	const data = {
		Ogólne: [
			['Badanie jamy ustnej', '100 zł'],
			['Wizyta adaptacyjna', '100 zł'],
			['Wizyta bez efektu', '100 zł'],
			['Znieczulenie', '40 zł'],
			['Wypełnienie w zębie stałym', '200 – 350 zł'],
			['Rozległa odbudowa w zębie stałym', '350 – 450 zł'],
			['Opatrunek', '120 zł'],
			['Biologiczne leczenie próchnicy', '250 zł'],
			['Wypełnienie w zębie mlecznym', '180 – 220 zł'],
			['Lakowanie 1 zęba', '130 zł'],
			['Lakierowanie zębów mlecznych', '120 zł'],
			['Lakierowanie zębów stałych', '150 zł'],
			['Ekstrakcja zęba mlecznego', '150 – 250 zł'],
			['Skaling', '150 zł'],
			['Piaskowanie', '150 zł'],
			['Skaling + Piaskowanie', '250 zł'],
			['Skaling + Piaskowanie + Lakierowanie', '350 zł'],
			['Wybielanie laserowe', '1000 zł'],
			['Zdjęcie zębowe', '40 zł'],
		],
		Endodoncja: [
			['Dewitalizacja/ekstyrpacja miazgi', '150 zł'],
			['Odbudowa zęba pod koferdam', '100 zł'],
			{
				'Pierwotne leczenie kanałowe:': [
					['1 kanał', '500 - 600 zł'],
					['2 kanały', '700 - 800 zł'],
					['3 kanały', '900 - 1000 zł'],
					['Każdy dodatkowy kanał', '200 zł'],
				],
			},
			['Powtórne leczenie kanałowe', 'Cena ustalana indywidualnie po konsultacji'],

			['Zdjęcie korony protetycznej', '100 zł'],
			['Usunięcie wkładu koronowo-korzeniowego', 'od 300 zł'],
			['Leczenie kanałowe przez koronę protetyczną', '+ 300 zł'],
			['Zamknięcie perforacji MTA', '600 zł'],
		],
		Chirurgia: [
			['Konsultacja u specjalisty chirurga szczękowo-twarzowego', '200 zł'],
			['Ekstrakcja zęba mlecznego', '150 – 250 zł'],
			['Ekstrakcja zęba jednokorzeniowego (jedynka, dwójka, trójka)', '250 – 300 zł'],
			['Ekstrakcja zęba przedtrzonowego (czwórka, piątka)', '300 – 350 zł'],
			['Ekstrakcja zęba trzonowego (szóstka, siódemka)', '350 – 400 zł'],
			['Ekstrakcja zęba ósmego', '350 – 400 zł'],
			['Chirurgiczna ekstrakcja zęba jednokorzeniowego / wielokorzeniowego z dłutowaniem', '450 – 500 zł'],
			['Operacyjna ekstrakcja zęba częściowo zatrzymanego', '500 – 550 zł'],
			['Operacyjna ekstrakcja zęba zatrzymanego lub zawiązka zęba', '800 – 900 zł'],
			['Odsłonięcie zęba zatrzymanego z przyklejeniem zamka', '700 – 800 zł'],
			['Ekstrakcja zęba dodatkowego lub nadliczbowego', '550 – 600 zł'],
			['Resekcja wierzchołka korzenia zęba', 'od 750 zł'],
			['Usunięcie torbieli kości', 'od 600 zł'],
			['Hemisekcja / Radektomia', '500 zł'],
			['Premolaryzacja', '500 zł'],
			['Plastyka połączenia ustno-zatokowego po ekstrakcji', '150 zł'],
			['Plastyka połączenia ustno-zatokowego po ekstrakcji w innej placówce', '600 zł'],
			['Wycięcie przyczepu wędzidełka – frenulektomia (z szyciem)', '500 zł'],
			['Wycięcie zmiany przerostowej błony śluzowej', 'od 350 zł'],
			['Plastyka wyrostka zębodołowego szczęki lub części zębodołowej trzonu żuchwy', 'od 500 zł'],
			['Pogłębienie przedsionka z przeszczepem', 'od 2000 zł'],
			['Badanie histopatologiczne', '250 zł'],
			['Wprowadzenie mini implantu ortodontycznego', '850 zł'],
			['Kortykotomia', 'od 1500 zł'],
		],
		Implantologia: [
			['Konsultacja implantologiczna', '200 zł'],
			['Implant część chirurgiczna', '3000 zł'],
			['Odsłona implantu i założenie śruby gojącej', '350-400 zł'],
			{
				'Korony protetyczne na implancie:': [
					['Korona porcelanowa standardowa', '3000 zł'],
					['Korona pełnoceramiczna (cyrkon + porcelana) łącznik tytanowy', '3500 zł'],
					['Korona pełnoceramiczna (cyrkon + porcelana) łącznik cyrkonowy', '3900 zł'],
					['Zatrzask systemu Locator do implantu(element retencyjny protezy)', '1900 zł'],
					['Proteza całkowita oparta na 2 implantach z elementami rentencyjnymi systemu Locator', '9400 zł'],
				],
			},
			{
				'Zabiegi dodatkowe:': [
					['Regeneracja tkanki kostnej wyrostka przy użyciu biomateriałów', 'od 1500 zł'],
					['Rozszczepienie wyrostka zębowego (w zależności od użytych materiałów)', '2500–3500 zł'],
					['Przeszczepy kości z bródki i/lub trójkąta zatrzonowcowego', 'od 2500 zł'],
					['Podniesienie dna zatoki szczękowej (sinus lift)', '3500-4000 zł'],
				],
			},
		],
	}

	return (
		<>
			<Helmet>
				<title>doktor R | Cennik usług stomatologicznych</title>
				<meta
					name='description'
					content='Sprawdź cennik usług stomatologicznych w gabinecie doktor R w Siedlcach – przejrzyste ceny leczenia, implantów, wybielania i profilaktyki.'
				/>
			</Helmet>
			<div className='wrapper'>
				<div className='cennik'>
					{Object.entries(data).map(([category, items]) => (
						<div key={category} className='section'>
							<h2>{category}</h2>

							<ul>
								{items.map((item, index) =>
									Array.isArray(item) ? (
										// Normalny zabieg
										<li key={index} className='item'>
											<span className='name'>{item[0]}</span>
											<span className='price'>
												{/* <span className='nowrap'>{item[1]}</span> */}

												<span className={` ${item[1] && item[1].length > 20 ? 'long-text' : 'nowrap'}`}>{item[1]}</span>
											</span>
										</li>
									) : (
										// Podkategoria
										Object.entries(item).map(([subCategory, subItems]) => (
											<div key={subCategory} className='subsection'>
												<h3>{subCategory}</h3>
												<ul>
													{subItems.map(([name, price], subIndex) => (
														<li key={subIndex} className='item'>
															<span className='name'>{name}</span>
															<span className='price'>
																<span className='nowrap'>{price}</span>
															</span>
														</li>
													))}
												</ul>
											</div>
										))
									)
								)}
							</ul>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Cennik
