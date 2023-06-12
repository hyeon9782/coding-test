// 2016년
function solution(a, b) {
  const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`2016.${a}.${b}`);
  let week = WEEKDAY[date.getDay()];

  console.log(week);
  return week;
}
