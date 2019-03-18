const INITIAL_STATE={
    weather: null,
    recentCity: [],
    forecast:[]
}

export default (state=INITIAL_STATE,action) => {
    switch(action.type){
        case 'FETCH_WEATHER':
            if (state.recentCity.length < 5){
                if(state.recentCity.filter(cities => cities.name === action.payload.name).length>0){
                    return({...state, weather:action.payload, recentCity:[...state.recentCity]})
                }
                return({...state, weather:action.payload, recentCity:[...state.recentCity, {name:action.payload.name, temp:action.payload.main.temp}]})
            } else{
                if(state.recentCity.filter(cities => cities.name === action.payload.name).length>0){
                    return({...state, weather:action.payload, recentCity:[...state.recentCity]})
                }
                const replaceCity = [...state.recentCity].slice(1)
                return ({...state,weather:action.payload, recentCity:[...replaceCity, {name:action.payload.name, temp:action.payload.main.temp}]})
            }
        case 'FETCH_FORECAST':    
            return({...state, forecast:[action.payload]})
        default:
            return({...state})
    }
}