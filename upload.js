export function upload(selector, options = {}) {
  const input = document.querySelector(selector)
  const open = document.createElement('button')
  open.classList.add('btn')
  open.textContent = 'Open'

  if(options.multi) {
    input.setAttribute('multiple', true)
  }

  if(options.accept && Array.isArray(options.accept)) {
    input.setAttribute('accept', options.accept.join(','))
  }

  input.insertAdjacentElement('afterend', open)

  const triggerInput = () => input.click()

  const changeHandler = event => {
    if(!event.target.files.length) {
      return
    }

    const files = Array.from(event.target.files)
    files.forEach(file => {
      if(!file.type.match('image')) {
        // return
      }

      const reader = new FileReader()
      console.log('reader:', reader)

      reader.onload = ev => {
        console.log('onload')
        console.log(ev)
      }

      // reader.readAsDataURL(file)
    })
  }

  open.addEventListener('click', triggerInput)

  input.addEventListener('change', changeHandler)
}
