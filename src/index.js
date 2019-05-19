// import counter from "./counter";
// import number from "./number";

// import './style.css';

// var btn = document.createElement('button');
// btn.innerHTML = '新增';
// document.body.appendChild(btn);
// btn.onclick = function() {
//     var div = document.createElement('div');
//     div.innerHTML = 'itme';
//     document.body.appendChild(div);
// }

import counter from './counter.js';
import number from './number.js';

counter();
number();


if (module.hot) {
    module.hot.accept('./number',()=>{
        document.body.removeChild(document.getElementById('number'));
        number();
    })
}