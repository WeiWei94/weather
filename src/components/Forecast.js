import React from 'react';
import {connect} from 'react-redux'
import {fetchWeatherAndForecast} from '../actions'

class Forecast extends React.Component{


    componentDidUpdate(){
    
    }


    temperature(temp){
        return(Math.round((temp-273)*9/5+32))
    } 


    formatTime(timeinput){
        var a = new Date(timeinput *1000)
        var months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
        var month = months[a.getMonth()]
        var date = a.getDate()
        var hour= a.getHours()
        var min=a.getMinutes()
        var sec= a.getSeconds()
        var days = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']
        var day = days[a.getDay()]
        var time = {'month':month, 'date':date, 'hour':hour, 'min':min, 'sec':sec ,'day':day}
        return time
    }


    rendlabel(){
        if(this.props.forecast[0]){
            return(
                <div className="ui card">
                    <div className="content">
                        <h3>5 Day Hourly Forecast</h3>
                    </div>
                </div>
            )
        }
    }

    rendlist(){
        if(this.props.forecast[0]){
            const forecast = this.props.forecast[0].list.map(item => {
                const {month,date, hour, min, sec, day} = this.formatTime(item.dt)
                return(
                    <div className="item" key={item.dt}>
                        <div className="content ui segment">
                            <div className="header">
                                <h3>{day} {month}-{date}</h3>
                            </div>
                            <div>
                                <h4>{hour}:{min}:{sec}</h4>
                            </div>
                            <div>
                                High: {this.temperature(item.main.temp_max)} °F
                            </div>
                            <div>
                                Low: {this.temperature(item.main.temp_min)} °F
                            </div>
                        </div>
                    </div>
                    )
               })
            return forecast
            }
        }

    render(){
        return(
            <div>
                <div>
                    {this.rendlabel()}
                </div>
                <div style={{whiteSpace:'nowrap', overflow:'auto'}}>
                    <div className="ui horizontal list">
                        {this.rendlist()}
                    </div>
                </div>
            </div>
        
        )
    }
}


const mapStateToProps = (state) => {
    return({
        weather:state.weather.weather,
        forecast: state.weather.forecast
    })
}
export default connect(mapStateToProps,{fetchWeatherAndForecast})(Forecast)