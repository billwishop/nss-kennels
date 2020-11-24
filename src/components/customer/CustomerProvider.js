import React, { useState, useEffect } from "react"

// the context is imported and used by individual components that need data
export const CustomerContext = React.createContext()

// this component establishes what data can be used
export const CustomerProvider = (props) => {

    const [customers, setCustomers] = useState([])
    // destructured array: 
    // customers = initial state of variable. 
    // setCustomers = a function to set the value of the set variable

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setCustomers)
    }

    const addCustomer = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(getCustomers)
    }
    return (
        <CustomerContext.Provider value={
            {
            customers, addCustomer, getCustomers
            }
        }>
            {props.children}
        </CustomerContext.Provider>
    )
}