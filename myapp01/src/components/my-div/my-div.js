import React, {Component} from 'react';

//example of lifecycle functions :
// 1. constructor---> 2.render--->
// 3.componentDidMount----> 4.componentWillUnmount(give up resources)

class MyDiv1 extends Component {

        constructor(props) {
            super(props);
            console.log("constr -- prop: ",   this.props.name) ;
        }

    //    componentWillMount() { console.log("componentWillMount") ;   } ----> Deprecated

         render() {
             console.log("render") ;
             return <div>JS: {this.props.name}</div>;
         }

        componentDidMount() { console.log("componentDidMount: ", this.props.name) ; }
        //will play role when routing comes in( when the view changes)
        componentWillUnmount() {console.log("componentWillUnmount:", this.props.name) ; }

    }

    export default MyDiv1 ;

//  <MyDiv1  name=" the best"/>