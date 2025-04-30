
const form = document.querySelector(".contact")

form.addEventListener("submit",function(e){
    e.preventDefault();

    const name = document.querySelector(".name").ariaValueMax.trim()
    const email = document.querySelector(".email").ariaValueMax.trim()
    const subject = document.querySelector(".sub").ariaValueMax.trim()
    const message = document.querySelector("#message").ariaValueMax.trim()

    if(!name || !email || !subject || !message){
        alert("Please fill in all fields")
    }else{
        alert("Thank you! your Message has been sent")
        form.reset()
    }
})