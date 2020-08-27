document.addEventListener('DOMContentLoaded', startScript)

// macros
const select      = s => document.querySelector(s)
const selectAll   = s => document.querySelectorAll(s)
const createElem  = e => document.createElement(e)

function startScript() {
  console.log('Hello world')

  setBackgroundImage('img/bg.jpg')

  const div_title_wrapper = createTitleWrapper()
  const body              = select('body')

  body.appendChild(div_title_wrapper)

  const h1_title = createTitleElement('Work Under Progress...')
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

  const ul = createUnorderedList(ul_content)

  body.appendChild(ul)
  body.appendChild(div_content)

  select('#about').addEventListener('click', loadAbout)
}

function loadAbout(e) {
  e.preventDefault() // not told to do, but we've got to see the change, right?
  select('div#content').innerText = 'Welcome!'
  select('div#title-wrapper').style.display = 'none'
}

// modularize
/**
 * 
 * @param {String} url either relative or absolute path to the image
 * @returns {Void}
 */
function setBackgroundImage(url) {
  if (!url) throw new Error('You must pass an url of the background image')
  document.body.style.backgroundImage = `url(${url})`
}

/**
 * @returns {HTMLDivElement} title wrapper
 */
function createTitleWrapper() {
  const div_title_wrapper = createElem('div')
  div_title_wrapper.setAttribute('id', 'title-wrapper')
  div_title_wrapper.style = `
    top: 50%;
    width: 100%;
    text-align: center;
    font-family: impact;
    position: absolute;
    text-transform: uppercase;
  `
  return div_title_wrapper
}

/**
 * 
 * @param {String} text text to be displayed in the title
 * @returns {HTMLHeadingElement} H1 with supplied text
 */
function createTitleElement(text) {
  const h1_title = createElem('h1')
  h1_title.setAttribute('id', 'title')
  h1_title.innerText = text
  h1_title.style = `
    width: fit-content;
    margin: auto;
    background: black;
    color: white;
  `
  return h1_title
}

/**
 * 
 * @param {Array.<{id: String, href: String, content: String}>} listContent list of entries
 * @returns {HTMLUListElement}
 */
function createUnorderedList(listContent) {
  const ul = createElem('ul')
  listContent.forEach(item => {
    const li  = createListItem(item.id, item.href, item.content)
    ul.appendChild(li)
  })
  return ul
}

/**
 * 
 * @param {String} id set the ID of the element
 * @param {String} href set the url of the anchor element
 * @param {String} text text to be displayed as the link
 * @returns {Void}
 */
function createListItem(id, href, content) {
  const li  = createElem('li')
  const a   = createElem('a')

  a.setAttribute('id', id)
  a.setAttribute('href', href)
  a.classList.add('btn')
  a.innerText = content

  li.appendChild(a)
  return li
}