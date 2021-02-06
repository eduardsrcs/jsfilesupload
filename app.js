import eruda from 'eruda'
import { upload } from './upload'

/*
 * Console log taken from eruda for mobile phones
 * it can be also used as npm package, see
 * https://github.com/liriliri/eruda
*/

// this is for mobile browsers
let el = document.createElement('div')
document.body.appendChild(el);
eruda.init({
  container: el,
});
console.info('Hello')

upload('#file', {
  multi: true,
  accept: ['.png', '.jpg', '.jpeg', '.gif', '.bmp']
})


document.querySelector('#chktime').innerHTML = new Date()
