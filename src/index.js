import './style.scss';
import { Menu } from './menu';
import { Contact } from './contact';

const wrapper = document.getElementById('content');
const banner = document.createElement('div');
const header = document.createElement('h1');
const tabInner = document.createElement('div');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');
const menu1 = new Menu();
const contac1 = new Contact();

header.innerHTML = 'Welcome';
banner.className = 'banner';
banner.appendChild(header);

menuBtn.className = 'menu-btn';
contactBtn.className = 'contact-btn';

function tabContent(value){
  tabInner.innerHTML = '';
  if(value == 'menu'){
    tabInner.appendChild(menu1);
  }else if(value == 'contact'){
    tabInner.appendChild(contac1);
  }
}

menuBtn.addEventListener('click', tabContent('menu'));
contactBtn.addEventListener('click', tabContent('contact'));

window.onload = () => {
  wrapper.appendChild(banner);
  wrapper.appendChild(menuBtn);
  wrapper.appendChild(contactBtn);
  wrapper.appendChild(tabInner);
}

// es6 switch

if (module.hot) {
  module.hot.accept()
}