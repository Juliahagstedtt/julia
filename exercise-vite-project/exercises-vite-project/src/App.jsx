// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//     <div>
//           <h1>Hollywood watch</h1>
          
//           <section className='box-section'>
//           <h2>My neighbour Tortore</h2>
//             <p className='rubrik'>My neighbour Tortore</p>
//           </section>

//           <section className='box-section'>
//           <h2>My neighbour Tortore</h2>
//             <p className='rubrik'>My neighbour Tortore</p>
//           </section>

//           <section className='box-section'>
//           <h2>My neighbour Tortore</h2>
//             <p className='rubrik'>My neighbour Tortore</p>
//           </section>

//           <section className='box-section'>
//           <h2>My neighbour Tortore</h2>
//             <p className='rubrik'>My neighbour Tortore</p>
//           </section>

//           <section className='box-section'>
//           <h2>My neighbour Tortore</h2>
//             <p className='rubrik'>My neighbour Tortore</p>
//           </section>

//           <section className='box-section'>
//           <h2>My neighbour Tortore</h2>
//             <p className='rubrik'>My neighbour Tortore</p>
//           </section>

//     </div>

//     </>
//   )
// }

// export default App


import { useState } from 'react'
import './App.css'
import AddHat from './components/AddHat.jsx'
import HatList from './components/HatList.jsx'
import { hatList } from './data/hats.js'

function App() {
	const [hats, setHats] = useState(hatList)

const addHat = (name, price, imgUrl) => {
// skapa en hatt objekt
// SKapa en kompia av hats som innehåller objekt som är nya
// setHars med nya listan
const newHat = {
  id: crypto.randomUUID(),
  name: name,
  img: imgUrl,
  price: price


  }
  const newHatList = [ nesHat, ...hats, ]
  setHats(newHatList)
}


  // setHats([...hats, hatWithId])

	const deleteHat = id => {
		setHats(hats.filter(hat => hat.id !== id))
	}
	const changePrice = (newPrice, id) => {
		// Den vanliga metoden
		const newList = hats.map(hat => (
			hat.id === id ? { ...hat, price: Number(newPrice) } : hat
		))
		// console.log('App changePrice: ', newPrice, id, newList)
		setHats(newList)

		/* En enklare (?) metod
		setHats(hats.map(hat => {
			if( hat.id === id ) {
				return { ...hat, price: newPrice }
			} else {
				return hat
			}
		}))
		*/
	}
  

	return (
		<div className="hitta-hatt">
			<header>
				<h1> Hitta hatt </h1>
			</header>
			<main>
				<AddHat 
        addHat={addHat}
        />

				<HatList
					hats={hats}
					changePrice={changePrice}
					deleteHat={deleteHat}
					/>
			</main>
		</div>
	)
}

export default App
