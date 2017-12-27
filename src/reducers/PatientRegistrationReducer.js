import * as actions from '../patient/action_types';

/**
 * Takes the previous state, and the action beeing dispatched
 * Has to return a new object
 *
 * Only dispatchers can modify the state of the store
 *
 * @param state
 * @param action
 * @returns {*}
 */
export function patientRegistrationReducer(state = {}, action)
{
    switch (action.type)
    {
        case actions.PATIENT_REGISTRATION_FORM_SUBMITTED:

            return { registering: true };

        case actions.PATIENT_REGISTRATION_FAILED:

            return {};

        default:
            return state
    }
}