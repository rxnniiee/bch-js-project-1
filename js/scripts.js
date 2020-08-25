document.addEventListener('DOMContentLoaded', startScript)

// macros
const select      = s => document.querySelector(s)
const selectAll   = s => document.querySelectorAll(s)
const createElem  = e => document.createElement(e)

function startScript() {
  console.log('Hello world')

  document.body.style.backgroundImage = 'url("img/bg.jpg")'

  const div_title_wrapper = createElem('div')
  const body              = select('body')

  div_title_wrapper.setAttribute('id', 'title-wrapper')
  body.appendChild(div_title_wrapper)

  div_title_wrapper.style = `
    top: 50%;
    width: 100%;
    text-align: center;
    font-family: impact;
    position: absolute;
    text-transform: uppercase;
  `

  const h1_title = createElem('h1')
  h1_title.setAttribute('id', 'title')
  h1_title.innerText = 'Work under progress...'
  h1_title.style = `
    width: fit-content;
    margin: auto;
    background: black;
    color: white;
  `

  div_title_wrapper.appendChild(h1_title)
}
