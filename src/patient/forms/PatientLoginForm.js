import React from 'react';
import { patientActions } from '../actions';
import { Field, reduxForm } from 'redux-form';
import FormRow from '../../components/FormRow';
import { localize } from 'react-localize-redux';

const PatientLoginForm = props =>
{
    const { error, handleSubmit, submitting, translate } = props;

    return (
        <form onSubmit={handleSubmit(patientActions.submitPatientLoginFormAction)}>

            {error && <div className="alert alert-danger" role="alert">{error}</div>}

            <Field
                name="username"
                type="email"
                component={FormRow}
                placeholder={translate('patient.forms.email')}
            />
            <Field
                name="password"
                type="password"
                component={FormRow}
                placeholder={translate('patient.forms.password')}
            />
            <div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {translate('patient.forms.login.submit')}
                </button>
            </div>
        </form>
    );
};

export default localize(reduxForm({
    form: 'patient_login_form',
    enableReinitialize: true,
})(PatientLoginForm), 'locale')