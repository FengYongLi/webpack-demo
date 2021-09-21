import './x.css'
import './y.scss'
import './z.less'
import './s.styl'
export default '导出 x.js 内容'
// 引入图片
import png from './assets/1.png';
console.log(png)

const div = document.getElementById('app1')

div.innerHTML = `
  <img src="${png}">
`
// 懒加载
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
  // 这里是一个异步 promise，可以使用 .then
  const promise = import('./laz')
  // 这里的 fn 是一个对象模块
  promise.then((fn) => {
    //console.log(module.default)
    //const fn = module.default
    //console.log(module.default)
    console.log(fn.default)
  }, () => {
    console.log('模块加载失败')
  })
}

div.appendChild(button)