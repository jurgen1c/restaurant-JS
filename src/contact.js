class Contact {
  constructor(title, msg) {
    this.title = title;
    this.msg = msg;

    const base = document.createElement('div');

    const infoWrap = document.createElement('div');
    const tittleWrap = document.createElement('h2');
    const msgWrap = document.createElement('p');
    tittleWrap.className = 'cont-title';
    tittleWrap.innerText = this.title;
    msgWrap.className = 'cont-msg';
    msgWrap.innerHTML = this.msg;
    infoWrap.className = 'info-wrap';
    infoWrap.appendChild(tittleWrap);
    infoWrap.appendChild(msgWrap);

    const form = document.createElement('form');
    const ninput = document.createElement('input');
    const fBtn = document.createElement('button');
    fBtn.innerHTML = 'Contact';
    form.appendChild(ninput);
    form.appendChild(fBtn);

    base.appendChild(infoWrap);
    base.appendChild(form);
    base.className = 'cont-wrap';
    this.content = base;
  }
}


export default Contact;