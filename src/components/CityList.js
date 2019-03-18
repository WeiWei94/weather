import React from 'react';
import {connect} from 'react-redux'
import CityCard from './CityCard';
import {fetchWeatherAndForecast} from '../actions'


class CityList extends React.Component{

    onSelect=(city)=>{
        this.props.fetchWeatherAndForecast(city);
    }

    componentDidUpdate(){
//        console.log(this.props.cities)
    }

    helprender(){
        if(this.props.cities){
            const videos = this.props.cities.map(item => {
                return(<div className="ui card" key={item.name}>
                    <CityCard name={item.name} key={item.name} temp={item.temp} onSelect={this.onSelect}/>
                </div> )
            })
            return videos
        }
    }

    render(){
        return(
            <div>
                <div className="ui card">
                    <div className="content">
                        <h3 className="header">Recently Searched Cities</h3>
                    </div>
                </div>
                <div>
                    {this.helprender()}
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return({cities:state.weather.recentCity})
}

export default connect(mapStateToProps, {fetchWeatherAndForecast})(CityList)