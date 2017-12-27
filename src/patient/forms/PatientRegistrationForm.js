import React from 'react';
import { patientActions } from '../actions';
import { Field, reduxForm } from 'redux-form';
import FormRow from '../../components/FormRow';
import { localize } from 'react-localize-redux';
import { validate } from '../validation/registration';

const PatientRegistrationForm = props =>
{
    const { error, handleSubmit, submitting, translate } = props;

    return (

        <form onSubmit={handleSubmit(patientActions.submitPatientRegistrationFormAction())}>

            {error && <div className="alert alert-danger" role="alert">{error}</div>}

            <Field
                name="firstname"
                type="text"
                component={FormRow}
                placeholder={translate('patient.forms.firstname')}
            />
            <Field
                name="lastname"
                type="text"
                component={FormRow}
                placeholder={translate('patient.forms.lastname')}
            />
            <Field
                name="birthdate"
                type="text"
                component={FormRow}
                placeholder={translate('patient.forms.birthdate')}
            />
            <Field
                name="email"
                type="text"
                component={FormRow}
                placeholder={translate('patient.forms.email')}
            />
            <Field
                name="mobile"
                type="text"
                component={FormRow}
                placeholder={translate('patient.forms.mobile')}
            />
            <Field
                name="password"
                type="text"
                component={FormRow}
                placeholder={translate('patient.forms.password')}
            />
            <div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {translate('patient.forms.registration.submit')}
                </button>
            </div>
        </form>
    );
};

export default localize(reduxForm({
    form: 'patient_registration_form',
    validate,
    enableReinitialize: true,
})(PatientRegistrationForm), 'locale')