// 직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let star = "";
  star += "*".repeat(a);
  star += "\n";
  star += star.repeat(b - 1);
  console.log(star);
});
