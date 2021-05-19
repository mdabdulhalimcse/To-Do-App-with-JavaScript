
// ✅ getElementById
// ✅ getElementsByClassName
// ✅ getElementsByTagName
// ✅ textContent(without css)
// ✅ innerText
// ✅ innerHTML
// ✅ querySelector
// ✅ querySelectorAll


// var element = document.getElementById('header1');
//  element1 = element.innerText = 'todo apps';
//  console.log(element1);
//  element1 = element.innerText ;
// element1 = element.textContent;
// console.log(element1);
// element.style.color = 'red';
// element.style.fontSize = '50px';
// console.log('element');
// var element = document.getElementsByClassName('item')[0];
// var element2 = element.nextElementSibling;
// element1 = element2.previousElementSibling;
// element1.style.color = 'red';
// let itemUL = document.getElementById('items');
// let element = itemUL.getElementsByClassName('item');
// for(let elements of element){
//     elements.style.backgroundColor = 'red';
// }

// let element = document.getElementsByTagName('img');
// console.log(element);

// Query Selector

// let header = document.querySelector('#items');
// console.log(header);
// let elementLast = document.querySelector('.item:last-child');
// elementLast.style.color = 'red';
// let mid = elementLast.previousElementSibling;
// mid.style.color = 'red';

// let elementLast = document.querySelectorAll('.item:last-child');
// console.log(elementLast);
// for (const elements of elementLast) {
//     elements.style.color = 'red';
// }

let elementLast = document.querySelector('.item:nth-child(3)');
console.log(elementLast);
    elementLast.style.color = 'red';


    // ✅.children
    // ✅.parent
    // ✅ .closest
    // ✅ .nextElementSibling
    // ✅ .previousElementSibling