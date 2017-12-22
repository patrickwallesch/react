import { combineReducers } from 'redux';
import { patientReducer } from './PatientReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    form: formReducer,
    patientReducer,
});

export default rootReducer;