import { useCountStore } from "../data/countStore.js"
import '../styles/Player.css'

  
 const Channel = ({ text }) => {
 	const setChannel = useCountStore(state => state.setChannel)
 	return (
 		<label onClick={() => setChannel(text)}>
 			<input type="radio" name="channel" />
 			{text}
 		</label>
 	)
 }
 export default Channel