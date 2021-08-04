console.log("hi");
const playerName = "nico";
const playerPoints = 1212;
const plyaerHandsome = true;
const playerFat = "little bit";

// 이렇게 되면 데이터를 정리하기가 어려움
// 변수명을 모두 알아야 함

const player2 = ["nico",1212,false, "littlebit"];
// 이렇게 되면 각 요소의 의미가 무엇인지 알 수 있음 주석을 사용할 수는 있으나 불편..
// player[0] == name
// player[1] == points

// object. 사용하기
const player = {
    name:"nico",
    points:10,
    fat:true,    
}; 

// nico, 10, true 의 의미를 알 수 있음 (=property 의 존재)
console.log(player);
console.log(player.name);
console.log(player["name"]); // 같은 표현
player.nameV 
console.log(player.points);
player.points =player.points + 15; 
console.log(player.points);
