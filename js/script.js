let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0

function increment(){
  count += 1
  // countEl.innerText = count
  // countEl.innerHTML = count
  countEl.textContent = count
}

function save(){
  let countStr = ` ${count} - `
  // let countStr = count + ' - '

  saveEl.textContent += countStr
  // saveEl.innerText += countStr
  // console.log()

  countEl.textContent = 0
  count = 0
}