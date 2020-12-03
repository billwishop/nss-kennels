import React, {useState, useEffect, useContext} from "react"
import {AnimalContext} from "../animal/AnimalProvider"
import {LocationContext} from "../location/LocationProvider"
import {EmployeeContext} from "./EmployeeProvider"
import "./Employee.css"


export const EmployeeDetail = (props) => {
    const {animals, getAnimals} = useContext(AnimalContext)
    const {locations, getLocations} = useContext(LocationContext)
    const {employees, getEmployees, removeEmployee} = useContext(EmployeeContext)

    const [animal, setAnimal] = useState({})
    const [employee, setEmployee] = useState({})
    const [location, setLocation] = useState({})

    useEffect(() => {
        getEmployees()
        .then(getAnimals)
        .then(getLocations)
    }, [])

    useEffect(() => {
        const animal = animals.find(a => a.id === employee.animalId) || {}
        setAnimal(animal)
    }, [animals])

    useEffect(() => {
        const employee = employees.find(e => e.id === parseInt(props.match.params.employeeId)) || {}
        setEmployee(employee)
    }, [employees])

    useEffect(() => {
        const location = locations.find(l => l.id === employee.locationId) || {}
        setLocation(location)
    }, [locations])

    return (
        <div>
            <h2>Employees</h2>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <div className="employees">
                <section className="employee">
                    <h3 className="employee__name">{employee.name}</h3>
                    <div>Currently working at {location.name}</div>
                    <div>
                        {
                            (employee.animalId === null)
                            ? "Not assigned to an animal"
                            : `Currently taking care of ${animal.name}`
                        }
                    </div>
                    <button onClick={() =>{
                        removeEmployee(employee.id)
                        .then(() => {
                            props.history.push("/employees")
                        })
                    }
                    }>
                        Remove Employee
                    </button>
                </section>
            </div>
        </div>
    )
}