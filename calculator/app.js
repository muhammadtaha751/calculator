function press(abc){

    document.getElementById('inp').value +=abc
    
}

function eq(){
   var a=  document.getElementById('inp')
   a.value = eval(a.value)

}
function clr(){
    document.getElementById('inp').value = ''
}