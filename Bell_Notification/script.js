// const button = document.getElementById("button")
// const notify = document.getElementById("notification")

// button.addEventListener("click",()=>{
    
//     const counter = Number(notify.getAttribute("data-count")) || 0;
//     notify.setAttribute("data-count",counter + 1)
//     notify.classList.add("count")
//     notify.classList.add("notify")
// })

// notify.addEventListener("animationend",()=>{
//     notify.classList.remove("notify")
// })


const button = document.getElementById("button");
const notify = document.getElementById("notification");

button.addEventListener("click", () => {
    const counter = Number(notify.getAttribute("data-count")) || 0;
    notify.setAttribute("data-count", counter + 1);
    notify.classList.add("count", "notify");
});

notify.addEventListener("animationend", () => {
    notify.classList.remove("notify");
});
