import { combineReducers } from 'redux';
import { patientLoginReducer } from './PatientLoginReducer';
import { patientRegistrationReducer } from './PatientRegistrationReducer';
import { reducer as formReducer } from 'redux-form';
import { localeReducer as locale } from 'react-localize-redux';

const rootReducer = combineReducers({
    form: formReducer,
    patientLoginReducer,
    patientRegistrationReducer,
    locale
});

export default rootReducer;