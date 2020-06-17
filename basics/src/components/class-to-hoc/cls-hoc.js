
import React, {Component} from 'react';


// class  MyContainerComm extends Component{
//     render() {
//         return <Intermediate mytext="What is react??" />;
//     }
// }

// class  Intermediate extends Component{
//     render() {
//         // Intermediate doesn't care about "text", but just passes it down.
//         return <Child mytext={this.props.mytext} />;
//     }
// }

// class  Child extends Component{
//     render() {
//         return <span>{this.props.mytext}</span>;
//     }
// }

let MyContainerComm= (props)=><Intermediate mytext="What is react??"/>;

let Intermediate=    (props)=> <Child mytext={props.mytext}/>;

let Child=           (props)=> <h2>{props.mytext}</h2>;



export default MyContainerComm ;


