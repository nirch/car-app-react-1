import React, { Component } from 'react'


export default class CarDetails extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        var id = window.location.href.split("/")[window.location.href.split("/").length - 1]
        return (
            <div>
                <h1>Car Details</h1>
                {id}
            </div>
        )
    }
}
