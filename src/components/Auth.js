import React from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'
class Auth extends React.Component{

    state={hover:false}

    hover(){
        if(this.state.hover){
            return({background:'gray'})
        }
    }
    componentDidUpdate(){
    
    }
    
    helpRender(){
        if(this.props.isSignedIn){
            return(
                <div className="item" onClick={()=>this.props.signOut()} style={this.hover()} onMouseEnter={()=> this.setState({hover:!this.state.hover})} onMouseLeave={()=> this.setState({hover: !this.state.hover})}>
                    <p>
                        Sign Out
                    </p>
                </div>
            )
        }
        return(
            <div className="item" onClick={()=>this.props.signIn()} style={this.hover()} onMouseEnter={()=> this.setState({hover:!this.state.hover})} onMouseLeave={()=> this.setState({hover: !this.state.hover})}>
                <p>
                    Sign In
                </p>
            </div>
        )
    }

    render(){
        return(
            <>
                {this.helpRender()}
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return({isSignedIn:state.auth.isSignedIn})
}

export default connect(mapStateToProps, {signIn, signOut})(Auth)