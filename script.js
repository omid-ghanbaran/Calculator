function add() {
  let inpu1 = parseInt(document.getElementById("input1").value);
  let inpu2 = parseInt(document.getElementById("input2").value);
  let output;
  output = inpu1 + inpu2;
  document.getElementById("output").innerHTML = output;
}
function sub() {
  let inpu1 = parseInt(document.getElementById("input1").value);
  let inpu2 = parseInt(document.getElementById("input2").value);
  let output;
  output = inpu1 - inpu2;
  document.getElementById("output").innerHTML = output;
}
function mul() {
  let inpu1 = parseInt(document.getElementById("input1").value);
  let inpu2 = parseInt(document.getElementById("input2").value);
  let output;
  output = inpu1 * inpu2;
  document.getElementById("output").innerHTML = output;
}
function div() {
  let inpu1 = parseInt(document.getElementById("input1").value);
  let inpu2 = parseInt(document.getElementById("input2").value);
  let output;
  output = inpu1 / inpu2;
  document.getElementById("output").innerHTML = output.toFixed(2);
}
function reset() {
  let inpu1 = (document.getElementById("input1").value = "");
  let inpu2 = (document.getElementById("input2").value = "");
  document.getElementById("output").innerHTML = 0;
}
