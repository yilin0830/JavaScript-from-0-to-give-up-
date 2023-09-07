//部落格
let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", function(){
    list.innerHTML = list.innerHTML + `
    <div class="article">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
    </div>
    `;
    title.value = "";
    content.value = "";
})

// // 如何使用數字、數字的用法
// var number = 3;
// document.write(Math.round(3));


// // 計算機

// var num1 = prompt("請輸入數字1")
// var num2 = prompt("請輸入數字2")
// num1 = parseFloat(num1)
// num2 = parseFloat(num2)
// document.write(num1 + num2)

// // 陣列 array
// var scores = [80, 60, 20, 30,50];
// var friends = ["小黑", "小白"]
// document.write(scores);
// document.write(scores[0]);

// // 函式 function

// // function hello(name){
// //     document.write("你好" + name);
// // }
// // hello();

// function add(num1, num2){
//     //document.write(num1 + num2);
//     return num1 + num2
// }

// document.write(add(3, 6))

// //--------------------------
// // if 判斷

// /* 1. 
//     如果 肚子
//         我就去吃飯
// */
// var rainy = true;
// if(rainy){
//     document.write()
// }
// else if(score >= 80){
//     document.write()
// }

// //--------------------------
// // 物件  object

// //  key     value
// //  鍵      值

// var person = {

// }

// var movie = {
//     title:""

// }

// // while 迴圈

// var i = 1;
// while(i<=3){
//     document.write(i);
//     document.write("<br>");
//     i++;
// }

// do{
//     document.write(i);
//     document.write("<br>");
//     i++;
// }while(i<=3)

// // 密碼檢驗程式

// var password = 123456;
// var input;
// var entry_count = 0;
// var entry_limit = 3;
// var out_of_limit = false;

// while(password != input && !out_of_limit){
//     entry_count++;
    
// }

// // for 迴圈

// // for(var i = 0; i<10;i++){
// //     document.write(i);
// //     document.write("<br/>");
// // }

// var friends =[];

// // 製作一個問答程式

// var questions = []

// // 2維陣列、巢狀迴圈

// var number = [
//    [1, 2, 3],
//    [4, 5, 6] 
// ]
// for(;;){

// }

// // class
// class Phone {
//     constructor(number, year, is_waterproof) {
//         this.number = number;
//         this.year = year;
//         this.is_waterproof = is_waterproof;
//         phone_age() 
//             return 2021 - this.year;
//     }
// }

// var phone1 = new Phone("123", 2020, false);
// var phone2 = new Phone("456", 2018, false);

// // 如何取得 html 元素
// //w3c school JS Browser BOM

// document.write()
// window.document.write("哈哈哈");
// window.prompt("哈哈");
// var a = 123;
// window.document.write(window.a);

// var h1 = document.getElementById("header");
// h1.innerText = "小白超帥";
// h1.style.backgroundColor = "red";

// // Event Listener

// function handle_click(){
//     alert("叫你按就按啊")
// }
// function handle_click(element){
//     element.innerText = "按屁啊!"
// }

// var btn = document.getElementById("btn");
// btn.addEventListener("click", function(){

// })

// // var img = 

// // 部落格
