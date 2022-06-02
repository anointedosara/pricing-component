document.getElementById("div3").addEventListener("click", myFunction);
let mile = document.getElementById("div10");
let hello = document.getElementById("hello")
let me = document.querySelector("#div3")
let whiteBtn = document.getElementById("me")


function myFunction() {
    mile.classList.toggle("miles")
    hello.classList.toggle("anointed")
    whiteBtn.classList.toggle("move-ball")

}

let numberSelected = 0;



function ourFunction() {
    const hover = document.getElementsByClassName("div5");

    for (let i = 0; i <= hover.length; i++) {

        hover[i].addEventListener("click", () => {
            numberSelected = i + 1;
            hover[i].classList.toggle("hover");

            for (let j = 0; j <= hover.length; j++) {
                if (j !== i) {
                    hover[j].classList.remove("hover")
                }
            }

        });

    }

}

ourFunction()