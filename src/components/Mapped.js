import React, { Component } from 'react';
import { connect } from 'react-redux';
import {grabData} from '../reducers/data';

class Mapped extends Component {
    componentWillMount() {
        let t = this.props.grabData();
        return t;
    }
    render() {
        return (
            <li>hiii</li>
        )
    }
}

export default connect(
    (state) => (state),
    {grabData}
)(Mapped);