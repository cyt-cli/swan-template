import '../icon/iconfont.css';

const foo = () =>{
    let avatar = require('../images/avatar.jpeg');
    let img = document.createElement('img');
    img.setAttribute('class', 'avatar');
    img.src = avatar;
    document.body.appendChild(img);

    let welcome = '快乐编程，快乐生活！'
    let slogan = document.createElement('div');
    slogan.setAttribute('class', 'slogan');
    slogan.innerText = welcome;
    document.body.appendChild(slogan);
    
    let icon = document.createElement('i');
    let container = document.createElement('div');
    container.setAttribute('class', 'box');
    icon.setAttribute('class', 'iconfont icon-chrome-fill');
    container.appendChild(icon);
    document.body.append(container);

}

export default foo;