function Content() {
    var dom = document.getElementById('root');
    var content = document.createElement('div');
    content.innerHTML = "Content";
    dom.append(content);
}

module.exports = Content;