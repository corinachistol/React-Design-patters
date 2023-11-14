import React, {useState, useEffect} from "react";
import axios from 'axios';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

export const withEditableResource = (Component, resourcePath, resourceName) => {
    return props => {
        const [originalData,setOriginalData] = useState(null) // is the user that we have on the server side, just in case we want to reset to original data
        
        const [data,setData] = useState(null) //the current data we are editing on the client side

        useEffect(()=>{
            (async ()=>{
                const response = await axios.get(resourcePath)
                setOriginalData(response.data)
                setData(response.data)
            })()
        },[])

        const onChange = changes =>{
            console.log(changes)
            setData({...data, ...changes})
        }

        const onSave = async () => {
            const response = await axios.post(resourcePath, {[resourceName]: data} )
            setOriginalData(response.data)
            setData(response.data)
        }

        const onReset = () => {
            setData(originalData)
        }

        const resourceProps ={
            [resourceName] :data,
            [`onChange${capitalize(resourceName)}`] :onChange,
            [`onSave${capitalize(resourceName)}`] :onSave,
            [`onReset${capitalize(resourceName)}`] :onReset,

        }

        return <Component {...props}  {...resourceProps}/>
    }
}

//HOC withEditableUser => in adition to loading the user from the server and passing it to the component we wrap with it, its gonna allow the component that we wrap to change the resource through several other props we pass