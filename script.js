// Event Listening 

// const header = document.querySelector('#header');

// //click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mouseover, mouseout, mousemove,
// header.addEventListener('mouseenter', (event) => {
// console.log(event)
// });


//Input
const header = document.querySelector('input[type="text"');
//keydown, keyip . keypress, focus, blur , cut , copy, paste,input
header.addEventListener('keydown', (event) => {
console.log(event.target.value);
});


// //Form
// const header = document.querySelector('form');
// //submit
// header.addEventListener('submit', (event) => {
//     event.preventDefault();
// console.log(event.target);
// });



// https://www.w3schools.com/js/js_htmldom_events.asp
// https://www.w3schools.com/jsref/dom_obj_event.asp