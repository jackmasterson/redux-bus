import React, {Component} from 'react';
import {connect} from 'react-redux';

class Nav extends Component {
    render() {
        return(
            <div>
                <ul className="nav-ul">
                    <a className="link" href="/upload">
                        <li className="nav-li">Post Bus Info</li>
                    </a>
                    <a className="link" href="/map">
                        <li className="nav-li">See statuses of trips</li>
                    </a>
                </ul>
            </div>
        );
    }
}

export default connect(
    (state) => (state)
)(Nav);