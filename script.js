const inputs = prompt("Введіть довжини катетів через пробіл");
if (inputs === null) {
  alert("Ви скасували");
} else if (inputs.trim() === "") {
  alert("Нічого не ввели");
}

const inputsReady = inputs.split(" ");

const legOne = inputsReady[0];
const legTwo = inputsReady[1];
switch (isNaN(legOne) || isNaN(legTwo)) {
  case true:
    alert("це не цифри");
    break;

  default:
    console.log(legOne);
}
console.log(legOne, legTwo);
// варіант з math

Math.hypot =
  Math.hypot ||
  function (legOne, legTwo) {
    return Math.sqrt(legOne * legOne + legTwo * legTwo);
  };
alert(Math.hypot(legOne, legTwo));

// варіант без math

const result = (legOne * legOne + legTwo * legTwo) ** 0.5;
alert(result);
