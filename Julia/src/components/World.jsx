// Vi använder ett API som svarar med data om länder
// Datan är en lista med objekt. Vilka egenskaper har objekten?
// https://forverkliga.se/JavaScript/api/simple.php?world
import { useState } from 'react'
import '../styles/World.css'
import Country from './Country'
// import { getCountryData } from '../../data/api'


const World = () => {
	const [data, setData] = useState(null)
	const [errorMessage, setErrorMessage] = useState('')

	// const getData = () => getCountryData(setData, setErrorMessage)


	async function getCountryData() {
		const url = 'https://forverkliga.se/JavaScript/api/simple.php?world'
		// Kom ihåg att vänta med AWAIT
		try {
			const response = await fetch(url)
			const data = await response.json()
			// Under utvecklingen är det användbart att skriva ut det vi får från API - då kan vi se vad objekten innehåller
			console.log('World: data: ', data)
			setData(data)

		} catch(error) {
			// Vi kan inte göra något för att rädda situationen - be användaren försöka igen senare
			setErrorMessage('Något gick fel! Försök igen senare...')
		}
	}

	return (
		<div className="world">
			<h2> Landsinformation </h2>
			{data ? (
				<ul>
					{data.map(country => (
						<Country key={country.name} info={country} />
					))}
				</ul>
			) : (
				<>
				<p> Det finns ingen data! </p>
				<button onClick={getCountryData}> Hämta data från API </button>
				</>
			)}
			<button disabled={!data} onClick={() => setData(null)}> Släng datan </button>

			{/* && använder tekniken "short circuiting" */}
			{errorMessage && (<p> {errorMessage} </p>)}
		</div>
	)
}
export default World
