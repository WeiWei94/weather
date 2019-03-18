import React from 'react'
import {connect} from 'react-redux'
import {fetchWeatherAndForecast} from '../actions'

class WeatherCard extends React.Component {

    componentDidUpdate(){
    }

    helpTemperature(){
        return(Math.round(((this.props.weather.weather.main.temp)-273)*9/5+32))
    }
    helpRender(){
        if(this.props.weather.weather){
            return(
                <div className="ui card">
                    <div className="image">
                    </div>
                    <div className="content">
                        <h2 className="header">{this.props.weather.weather.name}</h2>
                        <div className="meta">
                            <h4 className="temperature">{this.helpTemperature()}°F </h4>
                        </div>
                        <div className="description">
                            {this.props.weather.weather.weather[0].description}
                        </div>
                    </div>
                </div>
            )
        }
        return(<div>
            Please enter a city
        </div>)
    }


    render(){
        return(
            <div>
                <div className="ui card">
                    <div className="content">
                        <div className="header">
                            Current Weather
                        </div>
                    </div>
                </div>
                <div>
                    {this.helpRender()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({weather:state.weather})
}

export default connect(mapStateToProps,{fetchWeatherAndForecast})(WeatherCard)
