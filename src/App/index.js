import React from 'react';
import LoginForm from '../components/LoginForm';

class App extends React.Component
{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <LoginForm/>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
            </div>
        );
    }
}

export default App;