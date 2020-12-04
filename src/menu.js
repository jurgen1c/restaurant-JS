class Menu {
  constructor(img, title, des) {
    this.img = img;
    this.title = title;
    this.des = des;

    const base = document.createElement('div');
    const imgWrap = document.createElement('div');
    const titleWrap = document.createElement('h3');
    const desWrap = document.createElement('p');
    const btn = document.createElement('button');
    imgWrap.className = this.img;
    titleWrap.className = 'menu-title';
    titleWrap.innerText = this.title;
    desWrap.className = 'menu-des';
    desWrap.innerText = this.des;
    btn.className = 'imenu-btn';
    btn.innerText = 'Order Now';
    this.btn = btn;
    base.className = 'menu-wrap';
    base.appendChild(imgWrap);
    base.appendChild(titleWrap);
    base.appendChild(desWrap);
    base.appendChild(btn);
    this.content = base;
  }
}


export default Menu;