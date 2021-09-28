import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';



function App(props) {
  let products=[
    {id:1 ,name:"iphone",price:40000,Rating:5,inStock:true},
    {id:2 ,name:"samsung",price:35000,Rating:4,inStock:false},
    {id:3 ,name:"oneplus",price:45000,Rating:4,inStock:true},
    {id:4 ,name:"vivo",price:9000,Rating:3,inStock:true},
    {id:5 ,name:"oppo",price:9000,Rating:2,inStock:false},
    {id:6 ,name:"Nokia",price:45000,Rating:2,inStock:true},
    {id:7 ,name:"Realme",price:45000,inStock:true},
    {id:8 ,name:"Redmi",price:45000,Rating:4,inStock:false},
    ];

    const [productList,setProductlist] = useState(products)

    const [cartList,setCartlist] = useState([]);
    const [count,setCount] = useState(0)
    const [total,setTotal] = useState(0)
   
    const buttonClick = (productobj) =>{
      setCartlist([...cartList, productobj])
      setCount(count + 1)
      setTotal(total + productobj.price)
    }

    let removeCart = (productobj) => {
      let newCart = cartList.filter(obj =>obj.id !== productobj.id)
      setCartlist([...newCart])
      setCount(count - 1)
      setTotal(total - productobj.price)
    }


  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
  

    <div className="container mt-5">
      <div className="row">
      <div className="col-lg-10">
      <div className="row">
        {
          productList.map((product) => {
            return <Card productData={product} cartList={cartList} handleClick={buttonClick}></Card>;
          })
        }
      </div>
      </div>


      <div className="col-lg-2">
      <i class="bi-cart-fill me-1"></i>
        Cart
      <span class="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
      <ul class="list-group">
        {
          cartList.map((item) => {
            return  <li class="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <span class="badge bg-primary rounded-pill">{item.price}</span>
            <span>
              <button className="btn btn-xs btn-danger" onClick={() => removeCart(item)}>X</button>
            </span>
          </li>   
          })
        }
        
      </ul>
      <h1>Total : {total}</h1>
      </div>

    
      </div>
    </div>

    <Footer></Footer>
    </>
  );
}

export default App;
