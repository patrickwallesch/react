import { api, methods } from "../../client/RestClient";
import * as actions from '../action_types';
import { SubmissionError } from 'redux-form';

const register = (values) => dispatch =>
{
    dispatch({
        type: actions.PATIENT_LOGIN_FORM_SUBMITTED,
        values
    });
    return api.send(methods.HTTP_POST, '/patients', {values})
        .then(() => {

        })
        .catch((error) => {
            throw new SubmissionError({_error: error.body.error_description});
        });
};

export { register };

