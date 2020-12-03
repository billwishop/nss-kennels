import React, {useContext, useEffect, useState} from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"


export const AnimalForm = (props) => {
    // Required context providers for data
    const { addAnimal, animals, updateAnimal, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const {setTerms} = useContext(AnimalContext)
    
    // Component state
    const [animal, setAnimal] = useState({})

    // Checking for a URL parameter
    const editMode = props.match.params.hasOwnProperty("animalId")

    const handleControlledInputChange = event => {
    // when changing a state object or array, always create a new one 
    // and change state instead of modifying current one
        const newAnimal = Object.assign({}, animal)
        newAnimal[event.target.name] = event.target.value
        setAnimal(newAnimal)
    }

    /* If there is a URL parameter, then the user has chosen to edit an animal.
        1. Get the value of the URL parameter.
        2. Use that `id` to find the animal.
        3. Update component state variable. */

    const getAnimalInEditMode = () => {
        if (editMode) {
            const animalId = parseInt(props.match.params.animalId)
            const selectedAnimal = animals.find(a => a.id === animalId) || {}
            setAnimal(selectedAnimal)
        }
    }

    // Get animals from API when component intitializes 
    useEffect(() => {
        getAnimals()
        getLocations()
    }, [])

    // Once provider state is updated, determine the animal (if edit)
    useEffect(() => {
        getAnimalInEditMode()
    }, [animals])

    const constructNewAnimal = () => {
        const locationId = parseInt(animal.locationId)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            if (editMode) {
                updateAnimal({
                    id: animal.id,
                    name: animal.name,
                    breed: animal.breed,
                    locationId: locationId,
                    treatment: animal.treatment,
                    customerId: parseInt(localStorage.getItem("kennel_customer"))
                })
                    .then(() => {
                        setTerms("")
                    })
                    .then(() => props.history.push("/animals"))
            } else {
                addAnimal({
                    name: animal.name,
                    breed: animal.breed,
                    locationId: locationId,
                    treatment: animal.treatment,
                    customerId: parseInt(localStorage.getItem("kennel_customer"))
                })
                .then(() => {
                    setTerms("")
                })
                .then(() => props.history.push("/animals"))
            }
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">{editMode ? "Update Animal" : "Admit Animal"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal Name:</label>
                    <input type="text" id="animalName" name="name" autoFocus className="form-control" 
                            placeholder="Animal name"
                            autoFocus
                            required
                            proptype="varchar"
                            defaultValue={animal.name}
                            onChange={handleControlledInputChange} 
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Animal Breed:</label>
                    <input type="text" id="animalBreed" name="breed" autoFocus 
                            proptype="varchar"
                            className="form-control" 
                            placeholder="Animal breed"
                            defaultValue={animal.breed}
                            onChange={handleControlledInputChange} 
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Pick a location:</label>
                    <select name="locationId" name="locationId" id="animalLocation" 
                            className="form-control"
                            proptype="int"
                            value={animal.locationId}
                            onChange={handleControlledInputChange} >

                        <option value="0">Select a location</option>
                        {locations.map(loc => (
                            <option key={loc.id} value={loc.id}>
                                {loc.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="treatment">Treatments: </label>
                    <textarea type="text" name="treatment" className="form-control"
                            proptype="varchar"
                            value={animal.treatment}
                            onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <button type="submit" onClick={evt => {
                evt.preventDefault()
                constructNewAnimal()
            }}
            className="btn btn-primary">
                {editMode ? "Save Updates" : "Make Reservation"}
            </button>
        </form>
    )
}