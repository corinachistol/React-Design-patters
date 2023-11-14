import React, {useState, useEffect} from "react";
import axios from 'axios';

export const withEditableUser = (Component, userId) => {
    return props => {
        const [originalUser,setOriginalUser] = useState(null) // is the user that we have on the server side, just in case we want to reset to original data
        
        const [user,setUser] = useState(null) //the current data we are editing on the client side

        useEffect(()=>{
            (async ()=>{
                const response = await axios.get(`http://localhost:3000/users/${userId}`)
                setOriginalUser(response.data)
                setUser(response.data)
            })()
        },[])

        const onChangeUser = changes =>{
            console.log(changes)
            setUser({...user, ...changes})
        }

        const onSaveUser = async () => {
            const response = await axios.post(`http://localhost:3000/users/${userId}`, {user} )
            setOriginalUser(response.data)
            setUser(response.data)
        }

        const onResetUser = () => {
            setUser(originalUser)
        }

        return <Component {...props} 
            user ={user}
            onChangeUser={onChangeUser} 
            onSaveUser={onSaveUser}
            onResetUser={onResetUser}/>
    }
}

//HOC withEditableUser => in adition to loading the user from the server and passing it to the component we wrap with it, its gonna allow the component that we wrap to change the resource through several other props we pass