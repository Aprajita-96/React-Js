import React, {Component} from 'react';
// import './common01.css' ;

class TwoWayBinding extends Component{
    constructor(props) {
        super(props);
        this.state = { valuedisplay: '' };
        this.clickhandle=this.clickhandle.bind(this);
        this.textbox = React.createRef();
    }

    clickhandle(event){
        this.setState({
            valuedisplay: this.textbox.current.value
        });
    }

    render(){

        return (
            <aside>
                <h2>Two Way Binding</h2>
                <input type="data"  ref={this.textbox} onChange={this.clickhandle}  /> <br/><br/>
                <div>{this.state.valuedisplay}</div>
                <img src='https://bit.ly/2YE7rRY' width='300' alt='sweets' />
            </aside>
            );
    }
    
    componentDidMount() { console.log("componentDidMount: ", "from two way binding") ; }
    componentWillUnmount() {console.log("componentWillUnmount_#3:", "form two way binding") ; }
}
export default TwoWayBinding ;
    
