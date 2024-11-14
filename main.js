const form = document.getElementById("formNumber");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const numA = document.getElementById("numA").value;
  const numB = document.getElementById("numB").value;
  const resultMsg = document.querySelector("#resultMsg");
  resultMsg.classList.remove("positiveResult", "negativeResult", "equalResult");
  if (numA > numB) {
    resultMsg.classList.add("negativeResult");
    resultMsg.innerHTML = "Incorreto: o A é maior que B";
  } else if (numA < numB) {
    resultMsg.classList.add("positiveResult");
    resultMsg.innerHTML = "Correto: o A é menor que B";
  } else {
    resultMsg.classList.add("equalResult");
    resultMsg.innerHTML = "Incorreto: o A é igual ao B";
  }
});
