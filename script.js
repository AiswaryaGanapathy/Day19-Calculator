//DOM task to create a Calculator

var h = document.createElement("H1"); // Create the H1 element 
h.innerText="Calculator"; // Create a text element 
// Append the text node to the H1 element 
h.id="title";
 
document.body.appendChild(h); 

var g = document.createElement("p"); // Create the p element 
g.innerText="This is a simple calculator task using DOM in Javascript"; // Create a text element 
 g.id="description";
 
document.body.appendChild(g); 


//Initially all the inputs inside the calculator is created using createElement
let div = document.createElement("div");
div.className = "calculator-grid";
div.id = "cal";
document.getElementsByTagName("body")[0].appendChild(div);

var innerDiv = document.createElement("div");
innerDiv.className = "output";
div.appendChild(innerDiv);

var input = document.createElement("input");
input.className = "inp";
input.id = "result";
input.value = "";
innerDiv.appendChild(input);

var btn = document.createElement("button");
btn.className = "clear"
btn.id = "btnC";
btn.textContent = "C";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "clear";
btn.value = "←";
btn.textContent = "←";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = ".";
btn.className="operator"
btn.value = ".";
btn.textContent = ".";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "multiplication";
btn.className = "operator";
btn.value = "*";
btn.textContent = "x";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "7";
btn.value = "7";
btn.textContent = "7";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "8";
btn.value = "8";
btn.textContent = "8";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "9";
btn.value = "9";
btn.textContent = "9";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "division";
btn.className = "operator";
btn.value = "/";
btn.textContent = "/";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "4";
btn.value = "4";
btn.textContent = "4";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "5";
btn.value = "5";
btn.textContent = "5";
div.appendChild(btn)

var btn = document.createElement("button");
btn.id = "6";
btn.value = "6";
btn.textContent = "6";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "subtract";
btn.className = "operator";
btn.value = "-";
btn.textContent = "-";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "1";
btn.value = "1";
btn.textContent = "1";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "2";
btn.value = "2";
btn.textContent = "2";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "3";
btn.value = "3";
btn.textContent = "3";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "add";
btn.className = "operator";
btn.value = "+";
btn.textContent = "+";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "0";
btn.value = "0";
btn.textContent = "0";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "00";
btn.value = "00";
btn.textContent = "00";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "span-two";
btn.id = "equal";
btn.textContent = "=";
div.appendChild(btn);

//Declaring a condition by passing a function for the clear button
document.getElementById("btnC").onclick = function () { clear() };

function clear()
{
document.getElementById("result").value = ""
}

//Declaring a condition by passing a function for the back button
document.getElementById("clear").onclick = function () {back()}
function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}

//Declaring a condition by passing a function for the equal button
document.getElementById("equal").onclick = function () { equal() };
function equal() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

//Finally executing all the elements
document.getElementById(".").onclick = function () { dis('.')}
document.getElementById("multiplication").onclick = function () { dis('*')}
document.getElementById("7").onclick = function () { dis('7')}
document.getElementById("8").onclick = function () { dis('8')}
document.getElementById("9").onclick = function () { dis('9')}
document.getElementById("division").onclick = function () { dis('/')}
document.getElementById("4").onclick = function () { dis('4')}
document.getElementById("5").onclick = function () { dis('5')}
document.getElementById("6").onclick = function () { dis('6')}
document.getElementById("subtract").onclick = function () { dis('-')}
document.getElementById("1").onclick = function () { dis('1')}
document.getElementById("2").onclick = function () { dis('2')}
document.getElementById("3").onclick = function () { dis('3')}
document.getElementById("add").onclick = function () { dis('+')}
document.getElementById("0").onclick = function () { dis('0')}
document.getElementById("00").onclick = function() { dis('00')}
document.getElementById("input").onclick = function typing(event){
        let show = document.getElementById("result");
        if(event.key==="Enter"){
            (show.value==="") ? alert("Enter Numbers to CALCULATE"): equal();
        }
        else if(!(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*")){
            alert("type only numbers");
            event.preventDefault();
        }
    }

function dis(val) {
    document.getElementById("result").value += val
}