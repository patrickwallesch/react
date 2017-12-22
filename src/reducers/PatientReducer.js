import * as actions from 'patient/action_types';

const initialState = {
    loggedIn: false,
    submitted: false,
};

export function patientReducer(state = initialState, action)
{
    switch (action.type)
    {
        case actions.PATIENT_LOGIN_FORM_SUBMITTED:

            return {
                ...state,
                submitted: true
            };

        case actions.PATIENT_LOGIN_FAILED:

            return {
                ...state,
                submitted: true
            };

        default:
            return state
    }
}