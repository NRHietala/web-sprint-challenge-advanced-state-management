import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs, postSmurf, setError } from '../actions';

class AddForm extends React.Component {
    state = {
        name:"",
        position:"",
        nickName:"",
        description:""
    }

    // CodeGrad submission test

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault();
         if ( this.state.name && this.state.position && this.state.nickName ) {
             this.props.postSmurf(this.state);
             this.setState({
                name:"",
                position:"",
                nickName:"",
                description:""
             })
         } else {
             this.props.setError("Please fill out form completely.")
         }
    }


    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                        <input
                        onChange={this.handleChange}
                        value={this.state.name}
                        name="name"
                        id="name" 
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label><br/>
                        <input
                        onChange={this.handleChange}
                        value={this.state.position}
                        name="position"
                        id="position" 
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="nickName">Nickname:</label><br/>
                        <input
                        onChange={this.handleChange}
                        value={this.state.nickName}
                        name="nickName"
                        id="nickName" 
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label><br/>
                        <input
                        onChange={this.handleChange}
                        value={this.state.description}
                        name="description"
                        id="description" 
                        />
                </div>
                {this.props.error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error}</div>}
                <button onClick={this.handleSubmit}>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs, postSmurf, setError})(AddForm)

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