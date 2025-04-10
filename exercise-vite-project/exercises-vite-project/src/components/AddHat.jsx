import { useState } from "react"

const AddHat = ({ addHat }) => {
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [imgUrl, setImgUrl] = useState('')

	const handleAdd = () => {
		// TODO: validera price
		addHat(name, Number(price), imgUrl)
	}

	return (
		<section className="add-hat">
		<h2> Lägg till ny hatt </h2>
		<div>
			<label htmlFor=""> Namn </label>
			<input type="text"
				onChange={event => setName(event.target.value)}
				value={name}
				/>
		</div>
		<div>
			<label htmlFor=""> Pris </label>
			<input type="text"
				onChange={event => setPrice(event.target.value)}
				value={price}
				/>
		</div>
		<div>
			<label htmlFor=""> Bildlänk </label>
			<input type="text"
			onChange={event => setImgUrl(event.target.value)}
			value={imgUrl}
			/>
		</div>
		<button onClick={handleAdd}> Lägg till </button>
		</section>
	)
}

export default AddHat
