// 여러분들은 새로운 컴퓨터를 만들고 8바이트 단위로 관리하는 타입별 메모리 관리 방식을 시물레이션
// 하려고 합니다. 지원하는 타입별 크기는 다음과 같습니다.

// BOOL 1바이트 , SHORT 2바이트 , FLOAT 4바이트 , INT 8바이트 , LONG 16바이트
// 매개변수 param0에 타입들을 입력한 순서대로 메모리를 할당한 결과를 8바이트 단위로 구분해서 return
// 해주는 solution 함수를 작성하세요. 단, BOOL을 제외한 8바이트보다 작은 타입들이 연속할 경우에는
// 사이에 패딩(.)을 붙여야 합니다. SHORT는 2배수, FLOAT 4배수가 되도록 메모리를 할당해야 합니다.

// 예를 들어 BOOL 타입 이후 BOOL 타입은 바로 붙여서 할당할 수 있습니다.
// "BOOL","BOOL" -> "##....."
// 그렇지만 BOOL 타입 이후에 SHORT, FLOAT를 할당하기 위해서는 각각 1개, 3개 패딩을 붙여야 합니다.
// "BOOL","SHORT" -> "#.#...."
// "BOOL","FLOAT" -> "#...#"

// 입출력 #1 ["INT", "INT", "BOOL", "SHORT", "LONG"]
// 입출력 #2 ["INT", "SHORT", "FLOAT", "INT", "BOOL"]
// 입출력 #3 ["FLOAT", "SHORT", "BOOL", "BOOL", "BOOL", "INT"]
// 입출력 #4 ["BOOL", "LONG", "SHORT", "LONG", "BOOL", "LONG", "BOOL", "LONG", "SHORT", "LONG"]
// return "HALT"

console.log(solution(["FLOAT", "SHORT", "BOOL", "BOOL", "BOOL", "INT"]));

// 8바이트에서 끊고 다시 처음부터
// 다시 시작하면 SHORT와 FLOAT 뒤에는 패딩 (.) 붙이기

function solution(arr) {
  const TYPES = {
    BOOL: 1,
    SHORT: 2, // 1
    FLOAT: 4, // 3
    INT: 8, // 7
    LONG: 16,
  };

  const newArr = [];
  let s = "";
  arr.forEach((item, index) => {
    if (arr[index - 1] === "BOOL" && item === "SHORT") {
      s += ".".repeat(1);
    } else if (arr[index - 1] === "BOOL" && item === "FLOAT") {
      s += ".".repeat(3);
    } else if (arr[index - 1] === "BOOL" && item === "INT") {
      s += ".".repeat(7);
    }

    s += "#".repeat(TYPES[item]);

    if (s.length > 8) {
      newArr.push(s.slice(0, 8));
      console.log(s.slice(0, 8));
      s = s.slice(8);
      num = 0;
      console.log("여기! : " + s);
    }

    // 8 , 2 4 2, 6 1 .
    // 4 2 1 1, 1 . . . . . . . , 8

    if (s.length === 8) {
      console.log("여기" + index);
      newArr.push(s);
      s = "";
      num = 0;
    }

    if (s.length < 8 && TYPES[item] < 8) {
      s += ".".repeat(8 - s.length);
      newArr.push(s);
      s = "";
      num = 0;
    }

    console.log(s);
  });

  console.log(newArr);

  return newArr.join(",");

  //   return str
  //     .split("")
  //     .map((item, index) => {
  //       if ((index + 1) % 8 === 0) return (item += ",");
  //       else return item;
  //     })
  //     .join("");
}

// 1개의 요소를 넣을 때마다 8바이트씩 끊으라는 건가?

//
