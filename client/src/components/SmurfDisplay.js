import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchSmurfsData } from '../actions'


export class SmurfDisplay extends React.Component {

    constructor(props){
        super(props);
        console.log('hi')

    }

    render() {
        return(<div>
            
        </div>)
    }
}

export default SmurfDisplay;

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.