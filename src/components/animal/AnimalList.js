import React, { useContext, useEffect } from "react"
import { Animal } from "./Animal"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(
        () => {
            getLocations()
            .then(getCustomers)
            .then(getAnimals)
        },
        []
    )

    return (
        <div className="animals">
            {
                animals.map(animal => {
                    const owner = customers.find(cust => cust.id === animal.customerId)
                    const clinic = locations.find(loc => loc.id === animal.locationId)

                    return <Animal key={animal.id} 
                                    animal={animal}
                                    customer={owner}
                                    location={clinic} />
                })
            }
        </div>
    )
}