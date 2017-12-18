import React from 'react';
import { PatientLoginForm } from '../components/PatientLoginForm';

class App extends React.Component
{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <PatientLoginForm/>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
            </div>
        );
    }
}

export default App;