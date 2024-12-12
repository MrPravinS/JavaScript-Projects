const randomColr = function() {
    const hex = "01234567689ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        color = color + hex[Math.floor(Math.random() * 16)]
        
    }
    return color
}
let intervaliId
const startChangingColor = function(){
  if(!intervaliId){
    intervaliId =  setInterval(changeBgcolor,1000)
  }

    function changeBgcolor () {
        document.body.style.backgroundColor = randomColr()
    }
}


const stopChangingColor = function(){
   clearInterval(intervaliId)
   intervaliId = null
}
 document.querySelector("#start").addEventListener(
    "click", startChangingColor
 )
 document.querySelector("#stop").addEventListener(
    "click", stopChangingColor
 )