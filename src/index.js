
// 同步代码分割
import _ from 'lodash';
import test from './test.js';

console.log(_.join(['a','b','c'],'***'));
console.log(_.join(['a','b','2c'],'***'));


//异步代码分割
// function getComponent() {
// 	return import('lodash').then(({default: _})=>{
// 		var element = document.createElement('div');
// 		element.innerHTML = _.join(['dell','lee'],'-');
// 		return element;
// 	})
// }

// getComponent().then(element=>{
// 	document.body.appendChild(element);
// })



console.log(test.name);