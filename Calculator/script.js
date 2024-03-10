let string = " ";
let btns = document.querySelectorAll(".btn");
Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector("input").value = string;
            resetinput();
        }
        else if (e.target.innerHTML == 'AC') {
            string = " ";
            document.querySelector("input").value = string;
        }
        else if (e.target.innerHTML == 'C') {
            let value= document.querySelector("input").value;
            document.querySelector("input").value= value.slice(0, -1);
            string= document.querySelector("input").value;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }

    })
})