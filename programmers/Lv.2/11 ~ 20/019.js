// [1차] 캐시
function solution(cacheSize, cities) {
  let answer = 0;
  // DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램
  // 캐시 크기 cacheSize , 도시 이름 배열 cities 입력
  // 입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간" 출력
  // 도시명은 대소문자를 구분하지 않는다.
  // 캐시 교체 알고리즘은 LRU를 사용한다.
  // cache hit일 경우 실행시간은 1이다.
  // cache miss일 경우 실행시간은 5다.

  // 새로운 데이터가 들어온 경우
  // => 캐시에 넣어준다.
  // => 캐시가 가득차있다면, 가장 오래된 데이터를 제거하고 넣어준다.
  // 존재하는 데이터가 들어온 경우
  // => 해당 데이터를 꺼낸 뒤,
  // => 가장 최근 데이터 위치로 보내준다.

  // cacheSize가 0일 때와 cacheSize가 cities수 보다 클 때
  if (cacheSize === 0) return cities.length * 5;

  let cache = [];

  cities.map((city) => {
    const lowerCaseCity = city.toLowerCase();

    if (cache.includes(lowerCaseCity)) {
      // hit
      cache = cache.filter((v) => v !== lowerCaseCity);
      cache.push(lowerCaseCity);
      answer += 1;
    } else {
      // miss
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(lowerCaseCity);
      answer += 5;
    }
  });
  return answer;
}
