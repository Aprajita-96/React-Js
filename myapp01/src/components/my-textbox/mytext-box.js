import React , {Component} from 'react';

//example of ref( id attribute for html)

class  MyTextBox extends Component{
    constructor(){
        super();
        this.state = {liked: false};
        //buit in ".bind" allows to refernce the pointer to next object and not the global object.
        this.handleClick = this.handleClick.bind(this) ;
    }

    handleClick() {
        //built in object from react which stores all the ref (to access:: this.refs.refname):::: 
        //similar to id attribute in html.
        this.refs.myTextInput.focus();
    }
    render() {
        return (
            <div>
                <input type="date" ref="myTextInput" /> <br/><br/>
                <input type="button" value="Bring back focus"
                             onClick={this.handleClick} />
            </div>
        );
    }
}

export default MyTextBox ;