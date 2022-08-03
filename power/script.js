const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");
const outputNode = document.querySelector(".js-output");

let state = {
  title: ''
}

function changeState (newState) {
  state = {...newState};
}

function render () {
  outputNode.innerHTML = `<h1>${state.title}</h1>`
}

btnNode.addEventListener("click", function () {
  changeState({
    title: inputNode.value
  });
  render();
})

/*
 Доработанная версия 
 btnNode.addEventListener("click", function () {
  outputNode.innerHTML = `<h1>${inputNode.value}</h1>`
*/