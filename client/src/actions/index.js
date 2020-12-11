import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const fetchSmurfsData = () => dispatch => {

    dispatch({ type: FETCH_SMURFS_START });

    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch(error)
        })
}

export const addSmurfData = smurfData => dispatch => {
    axios
        .post('http://localhost:3333/smurfs', smurfData)
        .then(response => {
            dispatch({ type: ADD_SMURF, payload: smurfData });
        })
        .catch(error => {
            dispatch({ type: ADD_SMURF_FAILURE, payload: error })
        })
}

export const setErrorMessage = errorMessage => {
    return({ type: ADD_SMURF_FAILURE, payload: errorMessage });
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.