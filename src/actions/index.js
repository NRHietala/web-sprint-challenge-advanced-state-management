import axios from 'axios';

export const GET_SMURF_START = 'GET_SMURF_START';
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS';
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE';
export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURF_START });

  axios
  .get("url")
    .then(res => {
      dispatch({ type: GET_SMURF_SUCCESS, payload: res.data })
      console.log(res)
    })
    .catch(err => {
      dispatch({ type: GET_SMURF_FAILURE, payload: err.message })
      console.log(err)
    })
}

export const postSmurf = newSmurf => dispatch => {
  dispatch({ type: POST_SMURF_START })

  axios
  .get('url', newSmurf)
  .then(res => {
    dispatch({ type: POST_SMURF_SUCCESS, payload: res.data })
  })
  .catch(err => {
    dispatch({ type:POST_SMURF_FAILURE, payload:err.message })
    console.log(err)
  })
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