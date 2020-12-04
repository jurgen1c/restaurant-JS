class Contact{
  constructor(title, msg){
    this.title = title;
    this.msg = msg;

    let base = document.createElement('div');

    let infoWrap = document.createElement('div')
    let tittleWrap = document.createElement('h2');
    let msgWrap = document.createElement('p');
    tittleWrap.className = 'cont-title';
    tittleWrap.innerText = this.title;
    msgWrap.className = 'cont-msg';
    msgWrap.innerHTML = this.msg;
    infoWrap.className = 'info-wrap';
    infoWrap.appendChild(tittleWrap);
    infoWrap.appendChild(msgWrap);

    let form = document.createElement('form');
    let ninput = document.createElement('input');
    let fBtn = document.createElement('button');
    fBtn.innerHTML = 'Contact';
    form.appendChild(ninput);
    form.appendChild(fBtn);

    base.appendChild(infoWrap);
    base.appendChild(form);
    base.className = 'cont-wrap'
    this.content = base;
  }
}


export {Contact}