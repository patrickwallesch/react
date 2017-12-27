import React from 'react';
import PatientLoginForm from '../../patient/forms/PatientLoginForm';
import PatientRegistrationForm from '../../patient/forms/PatientRegistrationForm';
import { localize } from 'react-localize-redux';

class App extends React.Component
{
    render() {
        const { translate } = this.props;
        return (
            <div className="top-content">
                <div className="inner-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 text">
                                <h1><strong>{translate('brand')}</strong> {translate('homepage.title')}</h1>
                                <div className="description"><p>{translate('homepage.description')}</p></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="form-box">
                                    <div className="form-top">
                                        <div className="form-top-left">
                                            <h3>{translate('patient.forms.login.title')}</h3>
                                            <p>{translate('patient.forms.login.description')}</p>
                                        </div>
                                        <div className="form-top-right">
                                            <i className="fa fa-key"/>
                                        </div>
                                    </div>
                                    <div className="form-bottom">
                                        <PatientLoginForm/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-1 middle-border"></div>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-5">
                                <div className="form-box">
                                    <div className="form-top">
                                        <div className="form-top-left">
                                            <h3>{translate('patient.forms.registration.title')}</h3>
                                            <p>{translate('patient.forms.registration.description')}</p>
                                        </div>
                                        <div className="form-top-right">
                                            <i className="fa fa-pencil"></i>
                                        </div>
                                    </div>
                                    <div className="form-bottom">
                                        <PatientRegistrationForm/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default localize(App, 'locale');