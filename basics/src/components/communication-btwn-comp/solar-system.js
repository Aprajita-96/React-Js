import React, {Component} from 'react';
import PropTypes from 'prop-types' ;

import Planet from './planet';

class SolarSystem extends Component {
    render() {
        return (
            <div className="solar">
                <h2>{this.context.mydata} form Solar system</h2>
                <Planet
                    color="darkcyan"
                    diameter={150}
                    name="Jupiter"
                />
                <Planet
                    color="lightgreen"
                    diameter={60}
                    name="Earth"
                />
                <Planet
                    color="darkgreen"
                    diameter={40}
                    name="Moon"
                />
            </div>
        );
    }
}
SolarSystem.contextTypes = {
    planetClickHandler: PropTypes.func,
    mydata: PropTypes.string
};
export default SolarSystem;
