import React, { Component, useEffect, useReducer } from "react";

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
import {fetchSmurf} from "./actions/index"
import {reducer, initialState} from "./reducers/index"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { connect } from "react-redux";

function App (props) {
  console.log(props)

  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    props.fetchSmurf();
    console.log(props)
  }, [fetchSmurf])

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm dispatch={dispatch}/>
          <SmurfDisplay dispatch={dispatch} data={state}/>
        </main>
      </div>
    );

}

const mapStateToProps = (state) => {
  return{
    smurfs: state.smurfs
  }
}
const mapDispatchToProps = {fetchSmurf}

export default connect(mapStateToProps, mapDispatchToProps)(App)

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.