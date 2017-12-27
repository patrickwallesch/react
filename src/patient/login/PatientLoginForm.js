import React from 'react';
import * as actions from './actions';
import { Field, reduxForm } from 'redux-form';
import FormRow from '../../components/FormRow';
import { localize } from 'react-localize-redux';
import { bindActionCreators } from 'redux'

const PatientLoginForm = props =>
{
    const { error, handleSubmit, submitting, translate, dispatch, values } = props;

    //bindActionCreators(actions.login, dispatch);

    return (
        <form onSubmit={handleSubmit(actions.login(values))}>

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
})(PatientLoginForm), 'locale')