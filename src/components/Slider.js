var React=require('react');
// import SliderArrow from "./SliderArrow";
// import SliderDots from './SliderDots';
var imgUrl=require('../images/1.jpg');
var $=require('jquery');
export default class Slider extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        var $bannerInner = $(".bannerInner");
        this.$bannerInner = $bannerInner;
        this.autoPlay();
    }

    go(nn){
        nn=parseFloat(nn);
        if(nn<=-2400){
            nn=0;
        }
        nn=nn-800;
        console.log(nn);
        this.$bannerInner.css({"left":nn});
        console.log(this.$bannerInner.css("left"));
    }
    autoPlay(){
        clearInterval(timer);
        var timer=setInterval(()=>{
            this.nn=this.$bannerInner.css("left");
            console.log(this.$bannerInner.css("left"));
            this.go(this.nn);
        },this.props.interval)
    }
    render(){
        return (
            <div className="banner">
                <div className="bannerInner">
                    {
                        this.props.items.map(function (item, index) {
                            return <div key={index}><img src={item.src} alt={item.alt}/></div>
                        })
                    }
                    <div><img src={imgUrl} alt='img1'/></div>
                </div>
            </div>
        )
    }
}