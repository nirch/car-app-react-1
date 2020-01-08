import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';


export default class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron>
                <h1>Cars App</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="success" href="#/cars">Enter</Button>
                </p>
            </Jumbotron>
        )
    }
}
