import { combineReducers } from 'redux';
import { authentication } from './PatientReducer';

const rootReducer = combineReducers({
    authentication,
});

export default rootReducer;