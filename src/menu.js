class Menu{
  

  constructor(img, title, des){
    this.img = img;
    this.title = title;
    this.des = des;

    let base = document.createElement('div');
    let imgWrap = document.createElement('img');
    let titleWrap = document.createElement('h3');
    let desWrap = document.createElement('p');
    imgWrap.className = 'menu-img';
    imgWrap.src = this.img;
    titleWrap.className = 'menu-title';
    titleWrap.innerText = this.title;
    desWrap.className = 'menu-des';
    desWrap.innerText = this.des
    base.className = 'menu-wrap';
    base.appendChild(imgWrap);
    base.appendChild(titleWrap);
    base.appendChild(desWrap)
    this.content = base;
  }
}


export  {Menu}