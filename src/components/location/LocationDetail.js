import React, { useState } from "react"
import "./Location.css"

export const LocationDetail = (props) => {
    return (
        <div className="locations">
            <section className="location">
                <h2 className="location__name">{props.location.state.chosenLocation.name}</h2>
                <div className="location__address">{props.location.state.chosenLocation.address}</div>
                <div>
                    <h4>Employees</h4>
                    { props.location.state.chosenLocation.employees.map(e => e.name).join(", ") }
                </div>
                <div>
                    <h4>Current Residents</h4>
                    {
                        props.location.state.chosenLocation.animals.map(a => a.name).join(", ")
                    }
                </div>
            </section>
        </div>
    )
}