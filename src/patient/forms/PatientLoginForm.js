import React from 'react';
import { patientActions } from '../actions';
import { Field, reduxForm } from 'redux-form';
import FormRow from '../../components/FormRow';

const PatientLoginForm = props =>
{
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit(patientActions.submitPatientLoginFormAction)}>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <Field
                name="username"
                type="text"
                component={FormRow}
                label="Username"
            />
            <Field
                name="password"
                type="password"
                component={FormRow}
                label="Password"
            />
            <div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                    Log In
                </button>
                <button type="button" className="btn btn-default" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'patient_login_form' // a unique identifier for this form
})(PatientLoginForm)