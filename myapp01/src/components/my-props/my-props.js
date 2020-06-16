
import React, { Component } from 'react';
import MyUser from '../../data/myuser';
import User from '../user/user';
import GenericComponent from '../generic/generic-comp';

class MyProps extends Component {
            render() {
                //props :built in , collects data , parent component is providing .(By react)
                return <div>
                    JS is {this.props.name}
                    <User user={MyUser}/>
                    {/* <GenericComponent/> */}
                    <GenericComponent things="cadbury"/>
                </div>;
            }
        }

 export default MyProps ;

   /* <MyProps name="the best" /> */