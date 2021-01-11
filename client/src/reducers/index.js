
export const initialState = {
    smurfs: [],
    addSmurf: {
        name: "",
        position: "",
        nickname: "",
        description: ""
    },
    loading: false,
    error: ""
}

const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case "FETCHING_SMURF_START":
            return{
                ...state,
                loading: true
            }
        case "FETCHING_SMURF_END":
            return{
                ...state,
                smurf: action.payload,
                loading: false,
                error: ""
            }
        case "ADD_SMURF":
            const newSmurf = {
                name: action.payload,
                position: action.payload,
                nickname: action.payload,
                description: action.payload
            }
            return{
                ...state, 
                smurf: [...state.smurfs, newSmurf]
                
            }
        case "FETCH_SMURFS_FAIL":
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary