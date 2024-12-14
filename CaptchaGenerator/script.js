
const display = document.getElementById("_status")
const body = document.body
const submit =document.getElementById("_submit")
const refresh = document.getElementById("_refresh")

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let captcha = "";

body.onload = function generateCaptcha(){
  const captchaLength = 6;
  for(let i = 0; i < captchaLength; i++){
    const randomIndex = Math.floor(Math.random() * char.length);

    captcha = captcha + char.substring(randomIndex,randomIndex+1);
  }

  document.getElementById("_generator").value = captcha;
  display.inne = "Captcha Generator"
}


submit.onclick = function chechInput(){

    const input = document.getElementById("_client-text").value;

    if(input === ""){
        display.innerHTML = "Please Enter the text shown below"
    }else if(input === captcha){
        display.innerHTML = "Matched"
        
    }else{
        display.innerHTML = "Not-Matched"
    }

}

refresh.onclick = function refreshCaptcha(){
   let newCaptcha = "";
   for(let i = 0; i < captcha.length; i++){
    const randomChar = char[Math.floor(Math.random() * char.length)]
    newCaptcha = newCaptcha + randomChar
   }

   captcha = newCaptcha;
   document.getElementById("_generator").value = captcha;
  display.inne = "Captcha Generator"
}