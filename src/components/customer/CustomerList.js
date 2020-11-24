import React, {useContext, useEffect} from "react"
import {CustomerContext} from "./CustomerProvider"
import {Customer} from "./Customer"


export const CustomerList = () => {
    // This state changes when getLocations() is invoked below
    const {customers, getCustomers} = useContext(CustomerContext)
    // ^^ object destructuring

    useEffect (
        () => {
            getCustomers()
        }, 
            []
    )


    return (
        <div className="customers">
            {
                customers.map(customer => <Customer key={customer.id} customer={customer} />)
            }
        </div>
    )
}