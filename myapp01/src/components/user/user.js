import React, { Component } from 'react';



class UserName extends Component {
        render() {
            return <div>name:  {this.props.name}</div>;
        }
}

class User extends Component {
        render() {
            return (
            <div>
                <h3>City: {this.props.user.city}</h3>
                <UserName name={this.props.user.name} />
            </div>
            );
        }
    }

 export default User ;



     /* <User user={Myuser} /> */        
        
        