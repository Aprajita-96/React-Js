import React, { Component } from 'react';

//state is used internally in the component
//props used between parent and child( immutable::: i.e not to be changed)
//and hence we use state in this scenario.

//when u want to change the value of state, call set state and directly don't assign the value because that wont render.
class  MyButton extends Component{
    constructor(props){
        super(props);
        this.state = {liked: false};
        this.handleClick = this.handleClick.bind(this) ;
    }

    handleClick(event) {
        //built in function for built in object "state", which resets the state.
        //setState will call render automatically.
        this.setState({liked: !this.state.liked});
    }
    render() {
        let  text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
}

export default MyButton ;

// <MyButton />