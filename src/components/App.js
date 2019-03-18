import React from 'react'
import Navbar from './Navbar'
import {Router, Route, Link} from 'react-router-dom'

import history from '../history'

import MainPage from './MainPage';
class App extends React.Component {
    
    state = ({show: false})


    render(){
        return(
            <div>
                <Router history={history}>
                    <div>
                        <Navbar></Navbar>
                        <Link to="/" >

                        </Link>
                        <div > 
                            <Route path="/" component={MainPage}></Route>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App