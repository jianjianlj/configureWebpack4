
// 同步代码分割
// import _ from 'lodash';
// import test from './test.js';

// console.log(_.join(['a','b','c'],'***'));
// console.log(_.join(['a','b','2c'],'***'));


//异步代码分割
function getComponent() {//懒加载就是通过import来一步加载一个模块或者内库
	return import('lodash').then(({default: _})=>{
		var element = document.createElement('div');
		element.innerHTML = _.join(['dell','lee'],'-');
		return element;
	})
}
document.addEventListener('click',()=>{
    getComponent().then(element=>{
	    document.body.appendChild(element);
    })
})
