import React from 'react'
import Auth from './Auth'
import Form from './Form'
import {connect} from 'react-redux'
import {fetchWeatherAndForecast} from '../actions'

class Navbar extends React.Component{
    state={show:'',hover:''}

    onSubmit=(formValues)=>{
        this.props.fetchWeatherAndForecast(formValues)
    }

    hover(){
        var hoverStyle = {background:'gray'}
        if(this.state.hover){
            return hoverStyle
        }
    }

    nav(){
        return(
        <div style={{margin:'10px'}}>
            <div className="ui top attached menu">
                <div className="item" onClick={() => this.setState({show: !this.state.show})}>
                    <i className="sidebar icon"></i>
                    Menu
                </div>
                <div className="item">
                    <p>Weather</p>
                </div>
                <div className="item" style={{width:'1000px'}}>
                    <Form onSubmit={this.onSubmit}>

                    </Form>
                </div>
                <div className ="right menu">
                    
                    <Auth></Auth>
                   
                </div>
            </div>
            {this.header()}
        </div>
        
        )
    }

    header(){
        if(this.state.show){
            return (
                <div className="ui bottom attached segment" style={{width:'90px', background:'black'}}>
                        <div className="item" style={{color:'white'}}>
                            <i className="home icon" ></i>
                            Home
                        </div>
                </div>
            )
        }
    }


    render(){
        return(
            <div>
                {this.nav()}
            
            </div>)
    }
}

export default connect(null,{fetchWeatherAndForecast})(Navbar)