
/*
<section>
    <h2>React</h2>
    <p>And it works</p>

 </section>

 */
    
    import  React from 'react' ;


var  h2 = React.createElement('h2', { className: 'hdrs', key: 'hdr' }, 'React');
var  p = React.createElement('p', { className: 'mydat', key: 'mydat' }, "And it works.");

var  reactFragment = [ h2, p ];

var  section = React.createElement('section', { className: 'container' }, reactFragment);

ReactDOM.render(section, document.getElementById('content'));