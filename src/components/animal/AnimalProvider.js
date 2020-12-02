import React, { useState } from "react"

export const AnimalContext = React.createContext()

export const AnimalProvider = (props) => {
    
    const [animals, setAnimals] = useState([])
    const [searchTerms, setTerms] =useState("")

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
            .then(res => res.json())
            .then(setAnimals)
    }

    const addAnimal = animal => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
        .then(getAnimals)
    }

    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
        .then(getAnimals)
    }

    const getAnimalById = id => {
        return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
        .then(res => res.json())
    }

    return (
        <AnimalContext.Provider value={
            {
                animals, addAnimal, getAnimals, getAnimalById, searchTerms, setTerms, releaseAnimal
            }
        }>
            {props.children}
        </AnimalContext.Provider>
    )
}