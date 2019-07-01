import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment = (event) => {
        this.setState(state => (
            { count: state.count + 1 }
        )
    }

    decrement = (event) => {
        this.setState(state => (
            { count: state.count - 1 }
        )
    }

    render() {
        return (
            <div>
                <h2>Counthhfghger</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>foo{this.state.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}
