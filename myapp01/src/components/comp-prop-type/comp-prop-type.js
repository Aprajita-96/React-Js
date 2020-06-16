import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MyCompPropType extends Component{

    render() {
        return (
            <div>
                <div>Using React</div>
                <div>{this.props.message} used by {this.props.requiredString} </div>
                <div>{this.props.msg2} counter: {this.props.number} </div>
            </div>
        );
    }
}

MyCompPropType.defaultProps = {message: "JSX / Babel" };

MyCompPropType.propTypes = {
        msg2:PropTypes.number.isRequired,
        message: PropTypes.string,
        number: PropTypes.number,
        requiredString: PropTypes.string.isRequired

};

export default MyCompPropType ;

//  <MyCompPropType message='cool framework' number="not a number"  />