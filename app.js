const container = document.querySelector(".container");
for(let i=1;i<=30;i++){
    let div = document.createElement("div");
    div.textContent = i;
    div.classList.add("day");
    container.appendChild(div)

}