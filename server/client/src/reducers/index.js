import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';


// keys in the below object are the keys which represent state.
export default combineReducers ({
    auth: authReducer,
    form: reduxForm
});
