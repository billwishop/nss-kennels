import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"
import "./Location.css"

export const LocationList = () => {
    // This state changes when getLocations() is invoked below
    const {locations, getLocations} = useContext(LocationContext)

    useEffect (() => {
        console.log("LocationList: Initial render before data")
        getLocations()
    }, [])

    useEffect(() => {
        console.log("LocationList: Location state changed")
        console.log(locations)
    }, [locations])

    return (
        <div className="locations">
            {
                locations.map(loc => <Location key={loc.id} location={loc} />)
            }
        </div>
    )
}