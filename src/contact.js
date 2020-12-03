class Contact{
  constructor(title, msg){
    this.title = title;
    this.msg = msg;

    let base = document.createElement('div');

    let infoWrap = document.createElement('div')
    let tittleWrap = document.createElement('h2');
    let msgWrap = document.createElement('p');
    tittleWrap.className = 'cont-title';
    msgWrap.className = 'cont-msg';
    infoWrap.appendChild(tittleWrap, msgWrap);

    let form = document.createElement('form');
    let ninput = document.createElement('input');
    let fBtn = document.createElement('button', 'Contact');
    form.appendChild(ninput, fBtn);

    
    infoWrap.className = 'info-wrap';
    base.appendChild(infoWrap, form);
    base.className = 'cont-wrap'
    this.content = base;
  }
}


export {Contact}