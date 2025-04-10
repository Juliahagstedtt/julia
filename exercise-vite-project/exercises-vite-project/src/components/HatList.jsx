import HatCard from '../HatCard.jsx'

const HatList = ({ hats, changePrice, deleteHat }) => {
	// console.log('HatList hats=', hats)
	return (
		<section className="hat-list">	
			{hats.map(hat => (
				<HatCard
					key={hat.id}
					hatInfo={hat}
					changePrice={changePrice}
					deleteHat={deleteHat}
					/>
			))}
		</section>
	)
}
export default HatList