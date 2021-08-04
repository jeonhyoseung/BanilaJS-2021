// console.log 는 출력 할 뿐 내부에서는 함수의 결과 값을 사용할 수 없음 
// 따라서, Return을 사용함

// 한국 나이 계산기 함수
function calculateKrAge(ageOfForeigner) {
   return ageOfForeigner +2;
}

const age = 96;
const kRAge = calculatorKrAge(age);

// 1_9 Calculator 에 return 적용하기

const calculator ={
    plus :function(a,b){
        return a+b;    
        },
    minus : function(a,b) {
        return a-b;
    },
    divide : function (a,b) {
        return a /b;
    },
    times : function (a,b) {
        return a*b;
    },
    power : function(a,b) {
        return a**b;
    },
    };
    const plusResult = calculator.plus(3,4);
    const divideResult = calculator.divide(6,3);
    const minusResult = calculator.minus(3,4);
    const timesResult = calculator.times(3,4);
    const poweResult = calculator.power(3,4);