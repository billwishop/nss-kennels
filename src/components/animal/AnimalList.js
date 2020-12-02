import React, { useContext, useEffect, useState } from "react"
import { Animal } from "./Animal"
import { AnimalContext } from "./AnimalProvider"


export const AnimalList = ({history}) => {
    const { animals, searchTerms, getAnimals } = useContext(AnimalContext)

    const [ filteredAnimals, setFiltered ] = useState([])

    useEffect(
        () => {
        getAnimals()
        },
        []
    )

    useEffect(() => {
        if (searchTerms !== ""){
            // console.log(searchTerms)
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(animals)
        }
    }, [searchTerms, animals])

    return (
        <div>
            <h2>Animals</h2>
            <button onClick={() => history.push("/animals/create")}>
                Make Appointment
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        
                        return <Animal key={animal.id} 
                        animal={animal} />
                    })
                }
            </div>
        </div>
    )
}