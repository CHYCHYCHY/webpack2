import { fn } from './libs/fn';
import './assets/css/css.css';

let btn = document.querySelector('#btn');

btn.onclick = fn;

if (module.hot) {//如果开启 HMR
    module.hot.accept('./libs/fn.js', function () {
        // 更新逻辑
        btn.onclick = fn;

    })
}