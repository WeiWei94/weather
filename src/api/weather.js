import axios from 'axios'

const appId = '8d4423c5b9a45e8224cda898fc46ce54'

export default axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5', 
        params: {
            appid: appId
        }
})
