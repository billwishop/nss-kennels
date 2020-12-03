import React, { useContext, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import {Link} from "react-router-dom"

export const EmployeeList = ({history}) => {
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
            <button onClick={() => history.push("/employees/create")}>
                Add Employee
            </button>
        <div className="employees">
            
                {
                    employees.map(employee => {
                        
                        return <div className="employee">
                            <Link key={employee.id} to={`/employees/${employee.id}`}>
                        <h3>{employee.name}</h3>
                            </Link>
                            </div>
                })
            }
            
        </div>
        </div>    
    )
}