import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';


export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.enter = this.enter.bind(this);
    }

    enter() {
        this.props.notifyEnter();
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
                    <Button variant="primary" onClick={this.enter}>Enter</Button>
                </p>
            </Jumbotron>
        )
    }
}
