let temp = [[20, 22, 23, 21], [15, 16, 12, 10]];
let times = ["morning", "afternoon", "noon", "evening"];

for (let i = 0; i < temp.length; i++) {
  console.log("Good morning");
  for (let j = 0; j < temp[i].length; j++) {
    console.log(`${times[j]}: ${temp[i][j]}`);
  }
}

