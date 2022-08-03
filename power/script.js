const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");
const outputNode = document.querySelector(".js-output");

btnNode.addEventListener("click", function () {
  outputNode.innerHTML = `<h1>${inputNode.value}</h1>`;
})

