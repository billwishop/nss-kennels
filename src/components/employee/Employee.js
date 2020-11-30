import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location, animal }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{location.name}</div>
        <div className="employee__animal">{animal.name}</div>
    </section>
)