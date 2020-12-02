import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalDetails = (props) => {
    const { releaseAnimal, getAnimalById } = useContext(AnimalContext)

    const [animal, setAnimal] = useState({ location: {}, customer: {}})

    useEffect(()=>{
        const animalId = parseInt(props.match.params.animalId)
        getAnimalById(animalId)
            .then(setAnimal)
    }, [])

    return (
        <div>
            <h2>Animals</h2>
            <button onClick={() => props.history.push("/animals/create")}>
                Make Appointment
            </button>
            <div className="animals">
                <section className="animal">
                    <h3 className="animal__name">{animal.name}</h3>
                    <div className="animal__breed">{animal.breed}</div>
                    <div className="animal__location">Location: {animal.location.name}</div>
                    <div className="animal__owner">Customer: {animal.customer.name}</div>
                    <button onClick={
                        ()=> {
                            releaseAnimal(animal.id)
                            .then(()=>{
                                props.history.push("/animals")
                            })
                        }
                    }>
                        Release Animal
                    </button>
                    <button onClick={()=>{
                        props.history.push(`/animals/edit/${animal.id}`)
                    }}>Edit</button>
                </section>
            </div>
        </div>
    )
}