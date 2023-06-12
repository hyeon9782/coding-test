// 핸드폰 번호 가리기
function solution(phone_number) {
  const newArr = phone_number.split("").map((item, index, self) => {
    if (self.length - 4 > index) return (item = "*");
    else return item;
  });

  return newArr.join("");
}
