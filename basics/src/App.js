import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyClass from './components/my-class/my-class';
import CommentBox from './components/comment-box/comment-box';


class App extends Component {
  //jsx javascript+html::::React library chnages it to html , no browser understand jsx
  render() {
    return ( //returns only one element
      <div className="App">
        <MyClass/>
        <CommentBox/>
      </div>
    );
    
  }
}

// function App() {
//   return (
//     <div className="App">
//       <MyClass/>
//       <CommentBox/>
//     </div>
//   );
// }

export default App;
