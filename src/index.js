// import "@babel/polyfill";

import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
	render() {
		return <div>Hello World</div>;
	}
}

ReactDom.render(<App />, document.getElementById('root'));









// import "@babel/polyfill";
// import React,{Component} from 'react';
// import ReactDom from 'react-dom';

// class App extends Component {
//     render() {
//         return <div>hello world</div>
//     }
// }

// ReactDom.render(<App/> ,document.getElementById('root'))

// const arr = [
//     new Promise(()=>{}),
//     new Promise(()=>{}),
// ];

// arr.map(item=>{
//     console.log(item);
// });