import _ from 'lodash';
import $ from 'jquery';

const dom = $('div');

dom.html(_.join(['lee','pou','hji'],'----'));

$('body').append(dom);


