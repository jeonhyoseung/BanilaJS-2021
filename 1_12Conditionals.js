//Conditionals 조건문 
const age = prompt("How old are you");
// prompt는 사용자에게 메세지 보여주고 값을 입력하는 창을 제공
// js를 정지시키기에 자주 사용하지 않음 (classic method)

//paresInt str을 int로 변환
console.log(typeof "15",typeof parseInt("15"));
console.log(age, parseInt(age));

// 코드 줄이기
const age1 = parseInt(prompt("How old are you?"));
console.log(age1);

//isNaN : 입력값이 int면 True, 아니면 False
console.log(isNaN(age1));

// if else문 (2가지)
if (isNaN(age)){
    console.log("Plase write a number");
} else {
    console.log("Thank you for writing your age");
}

// else if 문 (2가지 이상)
if (isNaN(age1) || age < 0){
    console.log("Plase write a number");
} else if (age1 <18) {
    console.log("You are too young");
} else if(age1 >=18 && age1 <=50) {
    console.log("You can drink");
} else if (age1 > 50 && age1 <=80) {
    console.log("You should exercise");
} else if (age >80) {
    console.log("You can do whatever");
} 

