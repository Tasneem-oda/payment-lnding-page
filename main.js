let shape =document.querySelector('.shapes')
let container =document.querySelector('.container')
let mopile =document.querySelector('.on-mopile')
let exit =document.querySelector('.exit')

shape.onclick = function(){
    container.style.display = 'none'
    mopile.style.display = 'block'

}
exit.onclick = function(){
    container.style.display = 'block'
    mopile.style.display = 'none'

}