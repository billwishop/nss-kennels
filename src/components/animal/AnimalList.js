import React, { useContext, useEffect } from "react"
import { Animal } from "./Animal"
import { AnimalContext } from "./AnimalProvider"


export const AnimalList = ({history}) => {
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(
        () => {
        getAnimals()
        },
        []
    )

    return (
        <div>
            <h2>Animals</h2>
            <button onClick={() => history.push("/animals/create")}>
                Make Appointment
            </button>
            <div className="animals">
                {
                    animals.map(animal => {
                        
                        return <Animal key={animal.id} 
                        animal={animal} />
                    })
                }
            </div>
        </div>
    )
}