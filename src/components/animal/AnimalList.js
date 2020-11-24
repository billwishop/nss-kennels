import React, { useContext, useEffect } from "react"
import { Animal } from "./Animal"
import { AnimalContext } from "./AnimalProvider"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(
        () => {
            getAnimals()
        },
        []
    )

    return (
        <div className="animals">
            {
                animals.map(animal => <Animal key={animal.id} animal={animal} />)
            }
        </div>
    )
}