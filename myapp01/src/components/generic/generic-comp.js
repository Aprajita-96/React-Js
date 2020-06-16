import React, { Component } from 'react';
import MyTextBox from '../my-textbox/mytext-box';
import MyButton from '../my-button/my-button';
class GenericComponent extends Component {
    constructor(props) {
        super(props);
        //state is built in like props :: if we use(want to initialize) "state", constructor has to be present.
        this.state = { thing: this.props.things };
        console.log("constructor: " ,  this.props.things) ;
    }

    render () {
        console.log("render: " ,  this.props.things) ;
         return( <div> {this.props.things}
         <MyTextBox/>
         <MyButton/>
          </div>);
     }
}


//default prop values, defined outside the class.
GenericComponent.defaultProps = { things: "biscuit" };


export default GenericComponent ;