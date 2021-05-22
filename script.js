//DOM Manipulate 
// creating an element
const divElement = document.createElement('div');
divElement.className = 'red';

divElement.setAttribute('id','red');
divElement.setAttribute('title', 'Red Div');

const container = document.querySelector('.todo-list');
// const h2Element = document.querySelector('h2');
// container.insertBefore(divElement,h2Element);
// container.appendChild(divElement);
// container.append(divElement);
// container.append('Hello world');

// const a = container.appendChild(divElement);
// const b = container.append(divElement);
// console.log(b);

// container.appendChild(divElement, document.createElement('p'),'Hello World');
container.append(divElement, document.createElement('p'),'Hello World');