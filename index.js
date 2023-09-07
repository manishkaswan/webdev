// console.log(document.title);
// document.title = 'manish';
// console.log(document.forms)
// console.log(document.all)
// console.log(document.all[10])
// // document.all[10].textContent = 'hello'
// console.log(document.forms)
// console.log(document.links)

// console.log(document.getElementById('header-title'))
// var headertitle = document.getElementById('header-title');
// console.log(headertitle)
// headertitle.innerText = 'Manish kumar'
// headertitle.style.background = "yellow"
// headertitle.style.color = 'red'
// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[3])
// items[3].innerHTML = "manish kumar"
// // items[2].style.backgroundColor = "red"
// for(var i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = 'gray'
// }


// var items = document.getElementsByTagName('li')
// console.log(items)
// console.log(items[3])
// items[3].innerHTML = "manish kumar"
// // items[2].style.backgroundColor = "red"
// for(var i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = 'gray'
// }


// var header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px red'

// var input = document.querySelector('input')
// input.value = 'hello manish'
// var submit = document.querySelector('input[type = "submit"]')
// submit.value = 'send'
// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'
// var lastitem = document.querySelector('.list-group-item:nth-child(2)')
// lastitem.style.color = 'red'


// var titles = document.querySelectorAll('.title')
// console.log(titles)

var odd = document.querySelectorAll('li:nth-child(odd)')
for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'red'

}




