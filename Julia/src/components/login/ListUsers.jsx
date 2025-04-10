import { useUserStore } from "../../data/userStore"
 
 const ListUsers = () => {
 	const users = useUserStore(state => state.users)
 	const loginUser = useUserStore(state => state.loginUser)
 
 	return (
 		<section className="user-list">
 			<ul>
 				{users.map(user => (
 					<li key={user.id}>
 						{user.name}
 						<button onClick={() => loginUser(user.name)}> Logga in </button>
 					</li>
 				))}
 				<li> Anna <button> Logga in </button> </li>
 				<li> Beata <button> Logga in </button> </li>
 				<li> Cecilia <button> Logga in </button> </li>
 			</ul>
 		</section>
 	)
 }
 export default ListUsers