const container = document.querySelector(".container");
const task = document.getElementById("main");
const cancel = document.getElementById("cancelbutton");
const confirmtbn = document.getElementById("confirm");
const icon = document.querySelector("ion-icon");
const input = document.querySelector("#taskinput");
const divalert = document.querySelector(".sorryalert");
const span = document.querySelectorAll('.day span');
// block

icon.addEventListener("click", function () {
    task.style.display = 'none';
})

cancel.addEventListener("click", function () {
    task.style.display = 'none';
    input.value = ''
})
const date = new Date();
const month = date.getMonth();
const DaysNumber = new Date(date.getFullYear(), month + 1, 0).getDate();

for (let i = 1; i <= DaysNumber; i++) {
    let div = document.createElement("div");
    let h3 = document.createElement('h3');
    h3.textContent = i;
    div.appendChild(h3)
    div.classList.add("day");
    container.appendChild(div);
}
const div = document.querySelectorAll(".day");

div.forEach((element) => {
    element.addEventListener("click", function () {
        task.style.display = 'block';
        document.querySelector("input").focus();

    })
})
for (let index = 0; index < div.length; index++) {
    div[index].addEventListener('click', function () {
        confirmtbn.onclick = function () {
            if (input.value.length == 0) {
                input.style.borderColor = 'red';
                input.placeholder = 'enter some value please .... !';
                input.addEventListener('input', function () {
                    if (input.value.length != 0) {
                        input.style.borderColor = 'green';
                    
                    }
                })
            }
            else {
                let span = document.createElement('span');
                span.textContent = input.value;
                div[index].appendChild(span);
                input.value = '';
                task.style.display = '';
            }
        }
    })

}