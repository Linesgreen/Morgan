let landmark = [];

function way(a) {
  landmark.push(a);
}

way("Мой дом");
way("Дорожка к дому");
way("Дорога");
way("Дом подруги");

console.log(landmark);

console.log("Пора домой :)");

for (i = 0; i <= landmark.length + 2; i += 1) {
  console.log(landmark.pop());
}
