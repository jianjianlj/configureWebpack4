function Sidebar() {
    var dom = document.getElementById('root');
    var sidebar = document.createElement('div');
    sidebar.innerHTML = "Sidebar";
    dom.append(sidebar);
}

module.exports = Sidebar;