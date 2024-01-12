let a = document.getElementsByClassName('container')[0]
// a.innerHTML = a.innerHTML + '<h1>THIS IS INSERTION USING JS METHOD</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>THIS IS INSERTION USING JS METHOD</h1>';
// a.appendChild(div);
// a.append(div);  // append at the end
// a.prepend(div);  // append at the start
// a.before(div);   // add innerHTML after passed tag
// a.after(div);  // add innerHTML after the passed tag
// a.replaceWith(div);  replaces with existing div element