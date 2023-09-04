const btn = document.querySelector('.btn')
// btn.style.background = 'red'
const lis = document.querySelector('.items')
console.log(lis)
lis.firstElementChild.textContent = 'manish'
lis.firstElementChild.style.background = 'yellow'
lis.lastElementChild.style.background = 'pink'
btn.addEventListener('click', (e) =>{
    e.preventDefault()
    // console.log('hello')
    document.querySelector('#my-form').style.background = 'pink'
    lis.children[1].style.background = 'white'
    lis.children[1].textContent = "hello"
})

