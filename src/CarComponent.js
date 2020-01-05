import CarModel from './CarModel'
import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';


class CarsComponent extends Component {

    constructor() {
        // This invokes the constructor of my parent (in this case React.Component)
        super();

        this.state = {
            cars: [new CarModel("Honda", "Civic", 2010, 120000),
            new CarModel("Toyota", "Yaris", 2008, 230000),
            new CarModel("Fiat", "500", 2015, 35000)]
        }

        this.addCar = this.addCar.bind(this);
    }

    // componentDidMount() {
    //   const p = axios.get("cars.json");

    //   p.then((response) => {
    //     this.setState({
    //       cars: response.data.map(plainCar => new CarModel(plainCar))
    //     })
    //   })
    // }

    addCar() {
        var newCar = new CarModel("Subaru", "Legacy", 2005, 300000);
        // this.state.cars.puhs(newCar);

        var newState = {
            cars: this.state.cars.concat(newCar)
        }

        this.setState(newState);
    }



    render() {


        // from the cars data array (this.cars) we will create a JSX array of trs
        // var carRows = [];
        // for (var i = 0; i < this.state.cars.length; i++) {
        //   carRows.push( <tr>
        //                   <td>{this.state.cars[i].brand}</td>
        //                   <td>{this.state.cars[i].model}</td>
        //                   <td>{this.state.cars[i].year}</td>
        //                   <td>{this.state.cars[i].km}</td>
        //                 </tr>)
        // }


        if (this.state.cars === null) {
            return false;
        }

        var carRows = this.state.cars.map(car => <tr>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.km}</td>
            <td>{car.year}</td>
            <td>{Math.round(car.kmPerYear()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        </tr>)

        return (

            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>KM</th>
                            <th>Year</th>
                            <th>KM per Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carRows}
                    </tbody>
                </Table>          
                <button onClick={this.addCar}>Add Car</button>
            </Container>
        )
    }
}

export default CarsComponent;
