import React from 'react';
import PatientLoginForm from '../../patient/forms/PatientLoginForm';

export default class App extends React.Component
{
    render() {
        return (
            <div className="homepage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <PatientLoginForm/>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}