import React, { Component } from "react"
import { connect } from 'react-redux'

function mapStateToProps(state) {
	return {
		count: state.counterState.count
	}
}

const initialState = {
	count: 42
}

export function counterReducer(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.amount
			}
		case 'DECREMENT':
			return {
				count: state.count - action.amount
			}
		default:
			return state
	}

}

class Counter extends Component {
	increment = event => {
		// Change Redux state
		this.props.dispatch({ type: 'INCREMENT', amount: 2 })
	}

	decrement = event => {
		// Change Redux state
		this.props.dispatch({ type: 'DECREMENT', amount: 3 })
	}

	render() {
		return (
			<div>
				<h2>Counter</h2>
				<div>
					<button onClick={this.decrement}>-</button>
					<span>{this.props.count}</span>
					<button onClick={this.increment}>+ </button>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Counter)