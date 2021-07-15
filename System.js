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

function erase(){
    var obj = document.getElementById("result");
    result.value = 0;
    obj.value = "";
}





//  ↓↓↓↓↓↓↓↓参考ソースコード↓↓↓↓↓↓↓↓

//sorce1 = sorce2
//myValue = display
//myData = n


//===============================
// myTotal = 0;	// 現在の合計値
// myInput = "";	// 現在入力している値
// myCalc = "+";	// 合計と入力値の演算子
// myFlg = 1;	// １回前に入力したもの 0:数字 1:演算子
 	
// function myValue(myData){	// 0～9または小数点ボタンを押した
// myFlg = 0;	// １回前に入力したものは数値
// myInput += myData;	// 現在入力している値に追加
// document.myForm.myLine.value = myInput;	// 現在入力している値表示
// }	
 	
// function myCalculate(myData){	// 演算ボタンを押した
// if (myFlg==0){	// １回前に入力したものは数値か？
// myFlg = 1;	// １回前に入力したものは演算子
// myWork = myTotal + myCalc + myInput;	// 一連の計算式を作る
// myTotal = eval(myWork);	// 計算式を計算させる
// myInput = "";	// 現在入力している値をクリア
// document.myForm.myLine.value = myTotal;	// 合計を表示
// }	
// if (myData == "="){	// 演算ボタンは[＝]か？
// myTotal = 0;	// 合計をクリア
// myCalc = "+";	// 演算子を[+]とする
// }else{	// 演算ボタンは[＝]以外である
// myCalc = myData;	// 演算子を退避させておく
// }	
// }	
 	
// function myC(){	// クリアボタン[C]を押した
// myTotal = 0;	// 合計クリア
// myCalc = "+";	// 演算子クリア
// myInput = "";	// 現在入力している値をクリア
// document.myForm.myLine.value = myTotal;	// つまり、０を表示
// }	

// ==============================

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