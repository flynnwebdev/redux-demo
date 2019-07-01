import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"
import Counter, { counterReducer } from "./components/Counter"
import {
    Provider
} from "react-redux";
import {
    createStore,
    combineReducers
} from 'redux'

function userReducer(state = {
    foo: 0
}, actopm) {
    return state
}

const reducers = combineReducers({
    userState: userReducer,
    counterState: counterReducer
})

const store = createStore(reducers)

ReactDOM.render( <
    Provider store = {
        store
    } >
    <
    Counter / >
    <
    /Provider>, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()