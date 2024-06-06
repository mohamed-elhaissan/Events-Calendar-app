const container = document.querySelector(".container");




const date = new Date();
const month = date.getMonth();
const DaysNumber = new Date(date.getFullYear(), month + 1, 0).getDate();
console.log(DaysNumber);


for (let i = 1; i <= DaysNumber; i++) {
    let div = document.createElement("div");
    div.textContent = i;
    div.classList.add("day");
    container.appendChild(div);
    

}
