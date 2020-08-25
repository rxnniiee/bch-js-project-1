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

  // Extra
  const div_content = createElem('div')
  div_content.setAttribute('id', 'content')

  const ul_1 = createElem('ul')

  const ul_content = [
    { id: 'home',    href: 'default.asp',  content: 'Home'    },
    { id: 'news',    href: 'news.asp',     content: 'News'    },
    { id: 'contact', href: 'contact.asp',  content: 'Contact' },
    { id: 'about',   href: 'about.asp',    content: 'About'   },
  ]

  ul_content.forEach(entry => {
    const li  = createElem('li')
    const a   = createElem('a')

    a.setAttribute('id', entry.id)
    a.setAttribute('href', entry.href)
    a.classList.add('btn')
    a.innerText = entry.content

    li.appendChild(a)
    ul_1.appendChild(li)
  })

  body.appendChild(ul_1)
  body.appendChild(div_content)

  select('#about').addEventListener('click', loadAbout)
}

function loadAbout(e) {
  e.preventDefault() // not told to do, but we've got to see the change, right?
  select('div#content').innerText = 'Welcome!'
  select('div#title-wrapper').style.display = 'none'
}