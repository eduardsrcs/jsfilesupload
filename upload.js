export function upload(selector, options = {}) {
  const input = document.querySelector(selector)
  const preview = document.createElement('div')
  const open = document.createElement('button')

  preview.classList.add('preview')
  open.classList.add('btn')
  open.textContent = 'Open'

  if(options.multi) {
    input.setAttribute('multiple', true)
  }

  if(options.accept && Array.isArray(options.accept)) {
    input.setAttribute('accept', options.accept.join(','))
  }

  input.insertAdjacentElement('afterend', preview)
  input.insertAdjacentElement('afterend', open)

  const triggerInput = () => input.click()

  const changeHandler = event => {
    if(!event.target.files.length) {
      return
    }

    const files = Array.from(event.target.files)

    preview.innerHTML = ''
    files.forEach(file => {
      if(!file.type.match('image')) {
        // return
      }

      const reader = new FileReader()
      console.log('reader:', reader)

      reader.onload = ev => {
        const src = ev.target.result
        preview.insertAdjacentHTML('afterbegin', `
          <div class="preview-image">
            <div class="preview-remove">&times;</div>
            <img src="${src}" alt="${file.name}" />
          </div>
        `)
      }

      // reader.readAsDataURL(file)
    })
  }

  open.addEventListener('click', triggerInput)

  input.addEventListener('change', changeHandler)
}
