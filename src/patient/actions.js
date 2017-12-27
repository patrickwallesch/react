import { api, methods } from "../client/RestClient";
import * as actions from './action_types';
import { SubmissionError } from 'redux-form';

const patientLoginFailedAction = () => ({
    type: actions.PATIENT_LOGIN_FAILED
});

// dispatch injected via redux-thunk
function submitPatientLoginFormAction(values, dispatch)
{
    dispatch({
        type: actions.PATIENT_LOGIN_FORM_SUBMITTED,
        values
    });

    return api.send(methods.HTTP_POST, '/oauth/v2/token', {
        ...values,
        grant_type: "password",
        client_id: "1_29kg64ag3skkccsgc0cs4g4k8s8koskkkg0g8o8woksc8o8gs0",
        client_secret: "20s83tlb5jgkoc8w044occowcc4s4occcc844kkggccw0kc848",
        scope: "patient"
    })
        .then(() => {

        })
        .catch((error) => {
            throw new SubmissionError({_error: error.body.error_description});
        });
};

export const patientActions = {
    submitPatientLoginFormAction
};