document.getElementById('clock')
// document.querySelector('#clock')


setInterval(function(){

let date = new Date()

// console.log(date.toLocaleDateString());

CSSLayerBlockRule.innerHTML = date.toLocaleDateString();

}, 1000)