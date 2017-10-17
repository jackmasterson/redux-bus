import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Upload from './Upload';
import Mapped from './Mapped';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/upload" component={Upload}/>
                    <Route path="/map" component={Mapped}/>
                </Switch>
            </Router>
        )
    }
}

export default connect(
    (state) => (state)
)(Routes);