import Avaer from './avaer.jpg';

function createAvatar() {
    
    var img = new Image();

    img.src = Avaer;
    img.classList.add('avatar');

    var root = document.getElementById('root');

    root.append(img);
}

export default createAvatar;