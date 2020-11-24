import React from "react"
import { Animal } from "./animal/Animal"
import { Employee } from "./employee/Employee"
import { Location } from "./location/Location"
import "./Kennel.css"
import { Customer } from "./customer/Customer"
import { CustomerList } from "./customer/CustomerList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"

export const Kennel = () => (
    <>
        <h1>Nashville Kennels</h1>

        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>

        <h2>Employees</h2>
            <EmployeeProvider>
                <EmployeeList />
            </EmployeeProvider>

        <h2>Locations</h2>
            <LocationProvider>
                <LocationList />
            </LocationProvider>


        <h2>Customers</h2>
            <CustomerProvider>
                <CustomerList />
            </CustomerProvider>
    </>
)

