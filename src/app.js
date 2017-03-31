import './css/com.css';

import Layer from './components/layer/layer.js';

const App=function(){
    const NUM=1;
    alert(NUM);
    var dom = document.getElementById('app');
    var layer =new Layer();
    dom.innerHTML=layer.tpl;
}
new App();