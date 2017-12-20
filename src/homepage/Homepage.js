import React from 'react';
import { PatientLoginForm } from 'patient/forms/PatientLoginForm';

class Homepage extends React.Component
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

export default Homepage;