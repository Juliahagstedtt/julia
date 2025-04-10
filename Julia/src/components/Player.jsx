import { useCountStore } from "../data/countStore.js"
import '../styles/Player.css'
import Channel from './Channel.jsx'

const Player = () => {
    const nowPlaying = useCountStore(state => state.channel)
    return (
        <div className="playerframed">
            <h2> Välj radiokanal </h2>
            <div className="row">
				<Channel text="P1" />
 				<Channel text="P2" />
 				<Channel text="P3" />
 				<Channel text="P4" />
 			</div>
 			<p>
 				{nowPlaying ?
 				`Du lyssnar på ${nowPlaying}.` :
 				'Välj en kanal att lyssna på.' }
 			</p>
        </div>
    )
}
export default Player