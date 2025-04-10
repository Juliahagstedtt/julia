import { create } from 'zustand'
import '../styles/TrafficLights.css'

function TrafficLights() {

    return (
        <div className="t-lights">
            <h2>Övning 4: Trafikljus</h2>

            <div className="row">
                    <div className="lights">
                        <div className="top on"></div>
                        <div className="middle"></div>
                        <div className="bottom"></div>
                </div>

                <div className="lights">
                    <div className="top on"></div>
                    <div className="middle on"></div>
                    <div className="bottom"></div>
                </div>

                <div className="lights">
                    <div className="top"></div>
                    <div className="middle"></div>
                    <div className="bottom on"></div>
                </div>
            </div>
        </div>
    )

}

export default TrafficLights