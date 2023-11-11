import  { useState, useEffect } from 'react';
export const ControlledForms = () => {
    const [nameInputError,setNameInputError] = useState("")
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [hairColor,setHairColor] = useState("")

    useEffect( () => {
        if(name.length < 2) {
            setNameInputError("Name must be longer than 2 characaters")
        } else {
            setNameInputError("")
        }
    },[name] )

    return(
        <form>
            {nameInputError && <p>{nameInputError}</p> }
             <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={name} 
                onChange={e => 
                setName(e.target.value)}/>
             <input 
                type="number" 
                name="age" 
                placeholder="Age" 
                value={age} 
                onChange={e => 
                setAge(Number(e.target.value))}/>
             <input 
                type="text" 
                name="hairColor" 
                placeholder="Hair Color" 
                value={hairColor} 
                onChange={e => 
                setHairColor(e.target.value)}/>
            
            <button>Submit</button>
             
        </form>
    )
}

//controlled forms allow us to do validation while user is typing