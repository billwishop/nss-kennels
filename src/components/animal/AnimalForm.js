import React, {useContext, useRef, useEffect} from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"

export const AnimalForm = (props) => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    
    const name = useRef(null)
    const location = useRef(null)
    const breed = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])
    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)
        const customerId = parseInt(localStorage.getItem("kennel_customer"))
        const animalName = name.current.value
        
        if (locationId === 0 || animalName === ""){
            window.alert("Please fill out all required fields")
        } else {
            addAnimal({
                name: animalName,
                locationId,
                customerId,
                breed: breed.current.value
            })
            .then(() => props.history.push("/animals"))
        }
    }
    return (
        <form className="animalForm">
            <h2 className="animalForm__title">Make Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal Name:</label>
                    <input type="text" id="animalName" ref={name} autoFocus className="form-control" placeholder="Animal name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Animal Breed:</label>
                    <input type="text" id="animalBreed" ref={breed} autoFocus className="form-control" placeholder="Animal breed" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Pick a location:</label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(loc => (
                            <option key={loc.id} value={loc.id}>
                                {loc.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit" onClick={evt => {
                evt.preventDefault()
                constructNewAnimal()
            }}
            className="btn btn-primary">
                Save Appointment
            </button>
        </form>
    )
}