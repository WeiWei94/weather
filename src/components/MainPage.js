import React from 'react'
import WeatherCard from './WeatherCard'
import CityList from './CityList';
import Forecast from './Forecast';
import DailyForecast from './DailyForecast';

class MainPage extends React.Component{



    render(){
        return(
            <div className="ui container fluid">
                <div className="ui grid">
                    <div className="two wide column"></div>
                    <div className="two wide column">
                        <CityList></CityList>
                    </div>
                    <div className="one wide column">
                        
                    </div>
                    <div className="five wide column">
                        <WeatherCard></WeatherCard>
                        <br/>
                        <Forecast />
                    </div>
                    <div className="one column wide">

                    </div>
                    <div className="three column wide">

                        <div style={{width: '150px'}}>
                            <DailyForecast></DailyForecast>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage