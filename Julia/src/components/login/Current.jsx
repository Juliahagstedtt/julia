import { create } from "zustand"
import '../../styles/Current.css'
import { useUserStore } from "../../data/countStore.js"

const Current = () => {
    const currentUser = useUserStore(state => state.currentUser)

    return (
        <section className="current-user">
            {
            currentUser ?
            <p> Du är inloggad som: {currentUser} </p> :
            <p> Logga in please! </p>
            }

        </section>
    )
}
export default Current