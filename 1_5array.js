const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// 데이터 타입 모으기 위한 그룹이 필요함
const daysOfWeek = mon + tue + wed + thu +fri +sat +sun;
console.log(daysOfWeek);
// 이렇게 되면 원하는 데이터만 따로 출력할 수가 없음
const daysOfWeek2 = [mon , tue , wed , thu ,fri ,sat ,sun];

const nonsense = [1,2,"hello",false, null, true, undefined,"nico"];
console.log(daysOfWeek2, nonsense);
// 배열

// 배열에서 요소가져오기
console.log(daysOfWeek2[3]);

// 요소 추가하기
daysOfWeek2.push("sun");
console.log(daysOfWeek2);
