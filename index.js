
const textarea = document.querySelectorAll('textarea')
const line = document.querySelector('.line')
const wrapper = document.querySelector('.wrapper')





wrapper.addEventListener('keypress',function (e) {
  let newLine = document.createElement('div')
    if (e.key === 'Enter') {
    e.preventDefault()
    newLine.classList.add('line')
    newLine.innerHTML = line.innerHTML
    newLine.children[1].innerHTML = ""
    wrapper.append(newLine)
    newLine.removeAttribute('placeholder')
    const input = newLine.querySelector('textarea')
    input.focus()
    input.style.height = ''
    }
})




wrapper.addEventListener('keyup',function (e) {
    e.preventDefault()
    textarea.style.height = `28px`
    let screenH = e.target.scrollHeight
    textarea.style.height = `${screenH}px`
})






