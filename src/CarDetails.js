import React, { Component } from 'react'
import carsData from './cars.json'
import CarModel from './CarModel.js';
import { Container } from 'react-bootstrap';


export default class CarDetails extends Component {

    constructor(props) {
        super(props)

        // Reading the id of the car we want to show
        let id = window.location.href.split("/")[window.location.href.split("/").length - 1]

        // Search for the car if this id and putting it in the state
        // let car;
        // for (let i = 0; i < carsData.length && !car; i++) {
        //     if (carsData[i].id === id) {
        //         car = new CarModel(carsData[i]);
        //     }
        // }
        let car = carsData.find(carData => carData.id === id);
        if (car) {
            car = new CarModel(car);
        }

        this.state = {
            car
        }

    }

    render() {
        
        const { car } = this.state;

        if (!car) {
            return (
                <p>Car not found</p>
            )
        }

        return (
            <Container>
                <div>
                    <h1>Car Details</h1>
                    <p>{car.brand}</p>
                    <p>{car.model}</p>
                    <p>{car.year}</p>
                    <p>{car.km}</p>
                    <p>{Math.round(car.kmPerYear())}</p>
                </div>
            </Container>
        )
    }
}
