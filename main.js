const $ = selector => document.querySelector(selector)
const $form = $('form')
$('form').addEventListener('submit', (event) =>{
  event.preventDefault()
  const data = Object.fromEntries(new window.FormData($form))
  console.log(data)
})