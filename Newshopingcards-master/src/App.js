import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import Item from './Item';

function App() {



// const brand=["Fancy Product","Special Item","Sale Itemt","Popular Item","Sale Item","Fancy Product","Special Item","Fancy Product"];

const brand=
[
   {
     id: "0",
     name:"Lipstick",
     itme:  "Fancy Product",
    cost:"$40.00 - $80.00",
    img:"http://getwallpapers.com/wallpaper/full/3/2/a/913655-best-lipstick-desktop-wallpaper-1920x1080-for-windows-7.jpg"},
   {
     id:"1",
    name:"Shapmpoo",
     itme:  "Sale Itemt",
     cost:"$40.00 - $80.00",
    star:"⭐⭐⭐⭐⭐",
    img:"http://i0.wp.com/www.luvmika.com/wp-content/uploads/2016/09/Conditioners-for-Type-4-Natural-Hair.jpg"},
   {
     id:"2",
    name:"Hair Dryer",
    itme:  "Sale Itemt",
    cost:"$40.00 - $80.00",
     img:"https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/1c75bdcddc8902bbc020a54dc73bf797/large.jpg"},
   {
     id:"3",
    name:"Foundetion",
    itme:  "Sale Itemt",
     cost:"$40.00 - $80.00",
     star:"⭐⭐⭐⭐⭐",img:"https://www.dhresource.com/0x0s/f2-albu-g6-M00-3C-91-rBVaSFqyOWKAVEeKAAFrgeI5H3U409.jpg/good-quality-6-colors-face-foundation-makeup.jpg"},
   {
     id:"4",
     name:"Popular Item",
     cost:"$40.00 - $80.00",
     img:"https://freepngimg.com/thumb/shopping_bag/10-2-shopping-bag-png-hd.png"},
   {
     id:"5",
    name:"Head Phone",
    itme:  "Sale Itemt",
     cost:"$40.00 - $80.00",
     img:"https://i0.wp.com/edenred.co.in/wp-content/uploads/brizy/9557/assets/images/d03-Img-headphones.jpg"},
   {
     id:"6",
    name:" Watch",
    itme:  "Sale Itemt",
     star:"⭐⭐⭐⭐⭐",
     img:"https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2015/10/19/huawei-watch.jpg"},
   {
     id:"7",
    name:" Walet",
    itme:  "Sale Itemt",
     cost:"$40.00 - $80.00",star:"⭐⭐⭐⭐⭐",
     img:"https://cdn2.bigcommerce.com/server5500/1chnoas/products/14702/images/28993/IMG_1529__40045.1539897390.1280.1280.jpg"},
 
]



return (

  <>
  <Item className="trale">

  </Item>
 
<div className="brands">
  
 {/* <div>
   <Item></Item>
 </div> */}
 
  {brand.map((brand)=>(
    <Vote name={brand.name} cost={brand.cost} star={brand.star} img={brand.img} itme={brand.itme}/>
    
  ))}
   
   
  </div>

</>

  )
}



  function Vote(props) {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const [itc,setCt]=useState (" ")
 
  
  
  return (
     
   
    
    <div className="App" style={{background:  like > dislike? "#90ee90":"#ffc1cc",
       textTransform:"uppercase"
       }}>
      
      
      <Card className="child">
       <img className="imges" src={props.img}></img>
      <h2>{props.name}</h2>
      <h5>{props.itme}</h5>
       <p className="cost">{props.cost}</p>
       <p className="star">{props.star}</p>
      <button className="btn" onClick={() => setLike(like+1)}>👍 {like}</button>
      <button className="btn" onClick={() => setDisLike(like+1)}>👎 {dislike}</button>
      </Card> 
      <br />
      <br />
      <div>
      <Button variant="outlined" onClick= {()=>setCt(itc+1)}>Add to cart</Button>
      </div>
    </div>

    

    
   
  );
}

export default App;
