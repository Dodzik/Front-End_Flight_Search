import React, { useEffect, useState } from 'react';
import AirportsService from '../services/AirportsService';

class AirportsComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            airports:[]
        }
    }

    componentDidMount(){
        AirportsService.getAirports().then((response) => {
            this.setState({ airports: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> List of all Airports</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Airport ID</td>
                            
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.airports.map(
                                airport => 
                                <tr key = {airport.name}>
                                     <td> {airport.name}</td>   
                                     
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default AirportsComponent;