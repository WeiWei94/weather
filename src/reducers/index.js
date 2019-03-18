import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import WeatherReducer from './WeatherReducer';
import {reducer as formReducer} from 'redux-form'
export default combineReducers({
    auth: AuthReducer,
    weather: WeatherReducer,
    form: formReducer
})