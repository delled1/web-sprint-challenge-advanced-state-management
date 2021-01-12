import React, {useState} from 'react';
import {addSmurf} from "../actions/index"
import {connect} from "react-redux"

const AddForm = (props) => {
   

    const initialData = {
        name: "", 
        position:"", 
        nickname:"", 
        description:"",
        errror: ""
    }

    const [data, setData] = useState(initialData)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const smurfName = props.smurfs.filter(smurf => smurf.name === data.name);

        if (smurfName.length >0){
            setData({
                error:"SMURF ALREADY EXISTS"
            })
            return
        }
        
        if (data.name === "") {
            setData({
                ...data,
                error: "NEEDS NAME"
            })
        }else if(data.position === ""){
            setData({
                ...data,
                error: "NEEDS POSITION"
            })
        }else if(data.nickname === ""){
            setData({
                ...data,
                error: "NEEDS nickname"
            })
        }else{
            const newSmurf = {
                name: data.name,
                position: data.position,
                nickname: data.nickname,
                description: data.description,
                id: Date.now(),
                error: ""
    
            }
            props.addSmurf(newSmurf);
            setData(initialData)
 
           
    }}

        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={handleChange} name="name" id="name" value={data.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={handleChange} name="position" id="position" value={data.position}/>
                </div>
                <div className="form-group">
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input onChange={handleChange} name="nickname" id="nickname" value={data.nickname}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={handleChange} name="description" id="description" value={data.description}/>
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {data.error}</div>
                <button>Submit Smurf</button>
            </form>
        </section>);
    
}

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.

const mapStateToProps = state => {
    return { 
        smurfs: state.smurfs
        // error: state.error
    }
}

const mapDispatchToProps = {addSmurf}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)