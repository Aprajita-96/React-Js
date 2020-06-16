import React, {Component} from 'react';


class TwoWayBinding extends Component{
    constructor(props) {
        super(props);
        this.state = { valuedisplay: 0 };
        this.clickhandle=this.clickhandle.bind(this);
    }

    clickhandle(event){
        this.setState({
            valuedisplay: parseInt(this.state.valuedisplay) + parseInt(this.refs.textbox.value)
        });
    }

    render(){
        let val=this.state.value;
        return (
            <div>
            <input type="data"  ref="textbox" onChange={this.clickhandle}  /> <br/><br/>
            <div>{this.state.valuedisplay}</div>
            </div>
            );
    }
}
export default TwoWayBinding ;