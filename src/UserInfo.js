import { useResource } from './useResource.js';
import {useUser} from './useUser.js';

export const UserInfo = ({userId} ) => {
    const user = useResource(`http://localhost:3000/users/${userId}`)
    const { name,age,hairColor,hobbies } = user || {}

    return user ? (
        <>
        <h3>{name}</h3>
        <p>Age:{age} years</p>
        <p>Hair Color:{hairColor}</p>
        <h3>Hobbies:</h3>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
        </>
        
    ) : <p>Loading...</p>
}