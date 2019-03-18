import React from 'react';
import {connect} from 'react-redux'


class DailyForecast extends React.Component{


    temperature(temp){
        return(Math.round((temp-273)*9/5+32))
    } 

    formatTime(time){
        var a = new Date(time *1000)
        var months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
        var month = months[a.getMonth()]
        var date = a.getDate()
        var days = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']
        var day = days[a.getDay()]
        var times = {'month':month, 'date':date,'day':day}
        return times
    }
    testForecast(){
        if(this.props.forecast[0]){
            var newData = []
            var forecastData = this.props.forecast[0].list
            for (var i=0; i < forecastData.length; i++){
                const {month,date, day} = this.formatTime(forecastData[i].dt)
                if(newData.filter(element => element.date === (month+'-'+date)).length>0){
                    for(var j = 0; j < newData.length; j++) {
                        if(newData[j].date === (month+'-'+date)){
                            newData[j].high = Math.max(newData[j].high,this.temperature(forecastData[i].main.temp_max))
                            newData[j].low = Math.min(newData[j].low,this.temperature(forecastData[i].main.temp_min))
                        }
                    }
                } else {
                    newData = [...newData, {date:(month+'-'+date), high: this.temperature(forecastData[i].main.temp_max), low: this.temperature(forecastData[i].main.temp_min), day: day}] 
                }
            }
            const daily = newData.map(item => {
                return(
                    <div className="item" key={item.date}>
                        <div className="ui card">
                            <div className="content">
                                <div className="header">
                                    {item.day} 
                                </div>
                                <div className="header">
                                    {item.date}
                                </div>
                            </div>
                            <div className="content">
                                <div>
                                    <span>
                                        <strong>High</strong>: {item.high} °F
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <strong>Low</strong>: {item.low} °F
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            return daily
        }
    }

    renderlabel(){
        if(this.props.forecast[0]){
            return(
                <div className="ui card">
                    <div className="content">
                        <div className="header">
                            Daily Forecast
                        </div>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="ui vertical list">
                <div className="item">
                    {this.renderlabel()}
                </div>
                {this.testForecast()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        forecast:state.weather.forecast
    })
}
export default connect(mapStateToProps)(DailyForecast)