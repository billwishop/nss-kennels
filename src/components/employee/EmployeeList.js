import React, { useContext, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(
        () => {
            getLocations()
            .then(getAnimals)
            .then(getEmployees)
        },
        []
    )

    return (
        <div>
            <h2>Employees</h2>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <div className="employees">
                {
                    employees.map(employee => {
                        const clinic = locations.find(loc => loc.id === employee.locationId)
                        const employeeAnimal = animals.find(ani => ani.id === employee.animalId)

                    return <Employee key={employee.id} employee={employee} location={clinic} animal={employeeAnimal} />
                })
                }
            </div>
        </div>
    )
}