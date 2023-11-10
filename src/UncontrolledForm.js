import React from "react"

export const Uncontrolledform = () => {

    const nameInput = React.createRef()
    const ageInput = React.createRef()
    const hairColorInput = React.createRef()

    const handleSubmit = (e) => {
        console.log(nameInput.current.value)
        console.log(ageInput.current.value)
        console.log(hairColorInput.current.value)
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" ref={nameInput}/>
            <input type="number" name="age" placeholder="Age" ref={ageInput} />
            <input type="text" name="hainColor" placeholder="Hain color"  ref={hairColorInput}/>
            <input type="submit" value="Submit" />
        </form>
    )
}

//Uncontrolled Components = Component itself that keeeps track of its own state internal and we can read some data when an event occurs, like submit button