import React, { useContext, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(
        () => {
            getLocations()
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
                {console.log(locations, employees)}
                {
                    employees.map(employee => {
                        const clinic = locations.find(loc => loc.id === employee.locationId)
                        
                    return <Employee key={employee.id} employee={employee} location={clinic} />
                })
                }
            </div>
        </div>
    )
}