var React=require('react');
var ReactDOM=require('react-dom');
require('./styles/style.css');
import Slider from './components/Slider';
var itemsObj={
    items:[
        {
            src:require('./images/1.jpg'),
            alt:'img1'
        },
        {
            src:require('./images/2.jpg'),
            alt:'img2'
        },
        {
            src:require('./images/3.jpg'),
            alt:'img3'
        }
    ],
    dots:true,
    arrow:true,
    interval:2000
};
ReactDOM.render(<Slider {...itemsObj}/>,document.querySelector('#container'));