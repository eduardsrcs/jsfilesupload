import eruda from 'eruda'
import { me } from './upload'

/*
 * Console log taken from eruda for mobile phones
 * it can be also used as npm package, see
 * https://github.com/liriliri/eruda
*/

let el = document.createElement('div')
document.body.appendChild(el);
eruda.init({
  container: el,
});
console.info('Hello')

console.log(me)
