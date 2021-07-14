var EnterFlag = false;

function disp(n){
    var obj = document.getElementById("result");
    obj.value += n;
}

function enter(){
    var obj = document.getElementById("result");
    obj.value = eval(obj.value);
    EnterFlag = true;
}

function clear(){
    var obj = document.getElementById("result");
    obj.value == "0";

}

// function get_calc(btn) {
//     if(btn.value == "=") {
//       document.dentaku.value = eval(document.dentaku.value);
//     } else if (btn.value == "C") {
//       document.dentaku.value = "";
//     } else {
//       if (btn.value == "×") {
//         btn.value = "*";
//       } else if (btn.value == "÷") {
//         btn.value = "/";
//       } 
//       document.dentaku.value += btn.value;
//       document.dentaku.multi_btn.value = "×";
//       document.dentaku.div_btn.value = "÷";
//     }
//   }