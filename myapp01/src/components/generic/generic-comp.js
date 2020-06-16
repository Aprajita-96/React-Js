import React, { Component } from 'react';
import MyTextBox from '../my-textbox/mytext-box';
import MyButton from '../my-button/my-button';
import MyDiv1 from '../my-div/my-div';
import GitHub from '../git-hub/git-hub';
import Mymap from '../my-map/my-map';
import MyCompPropType from '../comp-prop-type/comp-prop-type';
import MyMessageHoc from '../component-as-function/comp-as-fn';
import MyContainerComm from '../class-to-hoc/cls-hoc';
import Galaxy from '../communication-btwn-comp/galaxy';
import TwoWayBinding from '../two-way-binding/two-way-bind';




class GenericComponent extends Component {
    constructor(props) {
        super(props);
        //state is built in like props :: if we use(want to initialize) "state", constructor has to be present.
        this.state = { thing: this.props.things };
        console.log("constructor: " ,  this.props.things) ;
    }
          //numbers should be given as expressions {} in jsx

    render () {
        console.log("render: " ,  this.props.things) ;
         return( <div> {this.props.things}
         {/* <MyTextBox/>
         <MyButton/>
          <MyDiv1  name=" the best"/>
          <GitHub source="https://api.github.com/users/octocat/gists" />
          <Mymap/>
          <MyCompPropType message='cool framework' msg2={34} requiredString="Hello" number={21}  />
          <MyMessageHoc  name="HOC" />
          <MyContainerComm/> */}
            {/* <Galaxy/> */}
            <TwoWayBinding/>
          </div>
          );
     }
}


//default prop values, defined outside the class.
GenericComponent.defaultProps = { things: "biscuit" };


export default GenericComponent ;