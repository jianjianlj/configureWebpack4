// var Header = require('./header.js');
// var Sidebar = require('./sidebar.js');
// var Content = require('./content.js');


// new Header();
// new Sidebar();
// new Content();

import Avaer from './avaer.jpg';
import './index.scss';

var img = new Image();

img.src = Avaer;
img.classList.add('avatar');

var root = document.getElementById('root');

root.append(img);