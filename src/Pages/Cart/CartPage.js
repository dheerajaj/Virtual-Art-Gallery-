import React, { useContext, useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../ContextApi/CartProvider";
import Header from "../Header"; 
import Footer from "../Footer"; 
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import Swal from "sweetalert2";




const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const date =new Date();
  const futureDate = moment(date).add(5, 'days').format("DD-MM-YYYY");
  const {  user } = useAuth0(); 
  const { cart, setCart } = useContext(CartContext);

  const clearCart = () => { Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
    setCart([]);
    Swal.fire(
      'Deleted!',
      'Your Cart has been cleared.',
      'success'
    )
  }
})
  };



  console.log("cart : ", cart);

  useEffect(() => {
    if (cart) {
      setTotalPrice(
        cart.reduce((acc, item) => acc + item.salePrice * item.quantity, 0)
      );
      setQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
    }
  }, [cart]);

  

  return (
   <>
    <Header/>

{cart && cart.length >0 ?
<div className=" d-flex justify-content-center w-100  p-5">

<div className="rounded-4 d-flex justify-content-center w-100" style={{overflow:'hidden', boxShadow:'2px 2px 10px #000'}}>

<div className=" d-flex align-items-center p-5 text-dark bg-white flex-direction-column w-100" style={{flexDirection:'column'}}>

        <div className=" w-100 d-flex justify-content-center align-items-center" style={{height:'100px'}}>
          <h1 className="w-75" style={{textShadow:'2px 2px 30px #000'}}>Shopping Cart</h1>
          <h5 className="w-25 text-center">{quantity} Items</h5>
        </div>


{/* one product start here */}

{cart.map((item, index) => {
          console.log("item : ", item?.quantity);
          return (
            <div className=" w-100" key={index}>
              <CartItem
                title={item?.title}
                price={`${item?.salePrice}`}
                image={item?.artImage}
                id={item?.id}
                description={item?.description}
                quantity={item?.quantity}
              />
            </div>
          );
        })
        }




        
        <br />
        {/* one product end here */}
<br />

  <button className="btn w-100 btn-danger btn-lg" onClick={() => clearCart()}>Clear Cart</button>

<br />
<div className="  w-100"><Link className="text-dark" to="/products"><h5 className="w-100"><i class="fa fa-angle-double-left" aria-hidden="true"></i> Back to Shop</h5></Link></div>



</div>





  <div className="  d-flex  align-items-center p-4  w-50" style={{backgroundColor:'#eae8e8', flexDirection:'column'}}>


  <div className="  w-100 d-flex  align-items-center" style={{height:'100px'}}>
          <h3 className="w-75" >Card Details</h3>
          <div className=" d-flex justify-content-center align-items-center" style={{height:'60px', width:'60px'}}>
          <img src={user.picture} alt="myPhoto" width="100%" />
          </div>
        </div>
        <div className="w-100">
<div className="mb-2"><b>Card Type</b></div>
<div className="r d-flex justify-content-center align-items-center" style={{float:'left', height:'40px', width:'55px'}}><i class="fa fa-cc-visa" aria-hidden="true" style={{fontSize:'40px'}}></i></div>
<div className="r d-flex justify-content-center align-items-center ms-2" style={{float:'left', height:'40px', width:'55px'}}><i class="fa fa-cc-mastercard" aria-hidden="true" style={{fontSize:'40px'}}></i></div>
<div className="r d-flex justify-content-center align-items-center ms-2" style={{float:'left', height:'40px', width:'55px'}}><i class="fa fa-cc-paypal" aria-hidden="true" style={{fontSize:'40px'}}></i></div>
<div className="r d-flex justify-content-center align-items-center ms-2" style={{float:'left', height:'40px', width:'55px'}}><i class="fa fa-cc-amex" aria-hidden="true" style={{fontSize:'40px'}}></i></div>
<br />
<br />
<br />
<input className="w-100 bg-transparent ps-2 mb-4 text-dark" autoComplete="OFF" type="text" placeholder="Cardholder's Name" style={{height:'40px', border:'1px solid #000',}}/>
<input className="w-100 bg-transparent ps-2 mb-4 text-dark" autoComplete="OFF" type="text" placeholder="Card  Number" style={{height:'40px', border:'1px solid #000',}}/>
<input className="w-25 bg-transparent ps-2 text-dark" type="text" autoComplete="OFF" placeholder="MM / YY" style={{height:'40px', border:'1px solid #000'}}/>
<input className="w-25 bg-transparent ps-2 ms-4 text-dark" autoComplete="OFF" type="password" maxLength="3" placeholder="Cvv" style={{height:'40px', border:'1px solid #000',}}/>
        </div>
<br />

        <div className="border border-secondary w-100"></div>
        <br />

<h5>Total Items: {quantity}</h5>
                  <div class="d-flex w-100 justify-content-between">
                      <p class="mb-2">Subtotal</p>
                      <p class="mb-2">${totalPrice}</p>
                    </div>

                    <div class="d-flex w-100 justify-content-between">
                      <p class="mb-2">Shipping</p>
                      <p class="mb-2">$20.00</p>
                    </div>

                    <div class="d-flex w-100 justify-content-between">
                      <p class="mb-2">Total (Incl. taxes)</p>
                      <p class="mb-2">${totalPrice+20}</p>
                    </div>
                    <br />
                    <NavLink to='/shipping'><button className="btn btn-dark w-100 btn-lg" style={{fontWeight:'bold'}} > Checkout </button></NavLink>
                  
 

        <div className=" w-100 d-flex pt-5 align-items-center" style={{height:'auto'}}>
<div class="card-body">
  <h5><strong>Expected shipping delivery</strong></h5>
  <p class="mb-0">{moment(date).format("DD-MM-YYYY")}  - {futureDate} <sup > ( 5 days )</sup> </p>
  <br />
  <h6>We Accept</h6>
  <img class="me-2" width="45px"
    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
    alt="Visa" />
  <img class="me-2" width="45px"
    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
    alt="American Express" />
  <img class="me-2" width="45px"
    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
    alt="Mastercard" />
  <img class="me-2" width="45px"
    src="https://img.freepik.com/free-icon/paypal_318-674245.jpg"
    alt="PayPal acceptance mark" />
</div>

</div>



  </div>
</div>
</div>
:

<>
<img src="https://skoozo.com/assets/img/empty-cart.png" className="ps-5" width="850" alt="" />
<div className="btn w-25 btn-dark btn-lg"><Link className="text-white" to="/products"><h5><i class="fa fa-angle-double-left" aria-hidden="true"></i> Back to Shop</h5></Link></div>
</>
}



<Footer/>


   </>
  );
};

export default CartPage;
