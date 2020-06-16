import React, { Component } from 'react';
import $ from 'jquery' ;   
// $  npm install jquery

//StateFul component :::: because we use state here
class GitHub extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            lastGistUrl: ''
        };
    }


    componentDidMount() {
        //ajax call 
        $.get(this.props.source, (result) => {
            let lastGist = result[0];
                console.log(lastGist)

                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });

        });
    }

    render() {
        return (
            <div>
                {this.state.username}: last gist is <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
}

export default GitHub ;

    // <UserGist source="https://api.github.com/users/octocat/gists" />
    