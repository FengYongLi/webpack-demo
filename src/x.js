import './x.css'
import './y.scss'
import './z.less'
import './s.styl'
export default '导出 x.js 内容'
import png from './assets/1.png';
console.log(png)

const div = document.getElementById('app1')

div.innerHTML = `
  <img src="${png}">
`