import React from 'react';

import Smurf from './Smurf';

import { connect } from 'react-redux';

import { fetchSmurfsData } from '../actions/index'


export class SmurfDisplay extends React.Component {
    componentDidMount(){
        this.props.fetchSmurfsData();
    }

    render() {

        if (this.props.isLoading){
            return( 
            <div>
                <h2>Getting those Smurfs!</h2>
            </div>)

        }

        if (this.props.error){
            return(
            <div>
                <h2>Couldn't find any Smurfs!</h2>
                <p>{this.props.error}</p>
            </div>)

        }
        return(<div>
            {
                this.props.smurfs.map(smurf => {
                    return <Smurf smurf={smurf} key={smurf.id} />
                })
            }
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchSmurfsData})(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.