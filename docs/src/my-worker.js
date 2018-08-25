/*
  https://github.com/ampproject/worker-dom/issues/10
  Necessary to enable hydration of empty element
*/
const sync = document.createElement('div');
document.body.appendChild(sync);

const init = () => {
  const mySpan = document.createElement('span');
  mySpan.appendChild(document.createTextNode('Hello world'));
  document.body.appendChild(mySpan);
};

setTimeout(init, 0);
