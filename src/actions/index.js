
import history from '../history'
import weather from '../api/weather'


export const signIn = ( ) => {
    return({
        type:'SIGN_IN'
    })
}
export const signOut = ( ) => {
    return({
        type:'SIGN_OUT'
    })
}


export const fetchWeatherAndForecast = (city) => async (dispatch,getState) => {
    await dispatch(fetchWeather(city));
    const curr= getState().weather
    dispatch(fetchForecast(curr.weather.name));
}
export const fetchWeather = (city) => async dispatch => {
    
    const response = await weather.get('weather?',{params: {
        q:city
    }})

    dispatch({
        type: 'FETCH_WEATHER',
        payload: response.data
    })
    history.push('/')

}

export const fetchForecast = (city) => async dispatch => {
    const response = await weather.get('forecast?',{
        params: {
            q:city
        }
    })
    dispatch({
        type:'FETCH_FORECAST',
        payload:response.data
    })
}