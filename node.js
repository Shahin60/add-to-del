
// var oneClick = document.getElementsByClassName('list');

// for (let i = 0; i < oneClick.length; i++) {
//     const element = oneClick[i];
//     element.addEventListener('click',function (event) {
// //    console.log(event.target.parentNode);
// event.target.parentNode.removeChild(event.target);
//     })
// }

document.getElementById('add').addEventListener('click',function(event){
    var neweList = document.getElementById('add1');
    var add = document.createElement('li');
    add.innerText='add list';
    neweList.appendChild(add);
})
document.getElementById('add1').addEventListener('click',function(event){
//   console.log(this,event.target)
event.target.parentNode.removeChild(event.target);
})


