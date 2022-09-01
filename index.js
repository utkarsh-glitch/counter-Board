const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const reset = document.getElementById("reset")
count1 = 0;
count2 = 0;
// reset

// side one
function one() {
  count1 += 1;
  num1.textContent = count1;
}
function two() {
  count1 += 2;
  num1.textContent = count1;
}
function three() {
  count1 += 3;
  num1.textContent = count1;
}
// side 2
function one1() {
  count2 += 1;
  num2.textContent = count2
  
}
function two2() {
  count2 += 2;
  num2.textContent = count2;
}
function three3() {
  count2 += 3;
  num2.textContent = count2;
}


