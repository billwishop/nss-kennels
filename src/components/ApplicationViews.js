import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalDetails } from "./animal/AnimalDetail";

export const ApplicationViews = (props) => {
    return (
        <>
        <EmployeeProvider>
            <AnimalProvider>
                <LocationProvider>
                    <Route exact path="/">
                    <LocationList />
                    </Route>

                    <Route path="/locations/:locationId(\d+)" render={
                        props => <LocationDetail {...props} />
                    } />
                </LocationProvider>
            </AnimalProvider>
        </EmployeeProvider>

        <AnimalProvider>
            <LocationProvider>
                <CustomerProvider>
                    <Route exact path="/animals" render={
                        props => <AnimalList {...props} />
                    } />
                    
                    <Route exact path="/animals/create" render={
                        props => <AnimalForm {...props} />
                    } />

                    <Route path="/animals/:animalId(\d+)" render={
                        props => <AnimalDetails {...props} />
                    } />
                    
                </CustomerProvider>
            </LocationProvider>
        </AnimalProvider>

        <CustomerProvider>
            <Route path="/customers">
            <CustomerList />
            </Route>
        </CustomerProvider>

        <EmployeeProvider>
            <AnimalProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />

                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } />

                    <Route path="/employees/:employeeId(\d+)" render={
                        props => <EmployeeDetail {...props} />
                    } />
                </LocationProvider>
            </AnimalProvider>
        </EmployeeProvider>
        </>
    );
};
