import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../ContextApi/CartProvider";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";


export const CartItem = ({ image, price, title, description, quantity, id }) => {
  let [count, Setcount] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  let decrement = () => {
    quantity > 0 &&
      setCart((prev) => {
        return prev.map((item) => {
          const product = { ...item };
          if (product.id === id) {
            product.quantity -= 1;
          }
          return product;
        });
      });
  };

  let increment = () => {
    setCart((prev) => {
      return prev.map((item) => {
        const product = { ...item };
        if (product.id === id) {
          product.quantity += 1;
        }
        return product;
      });
    });
  };


  const itemRemove = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cart.filter((item) => item.id !== id);
        console.log("deleted cart : ", updatedCart);
        setCart(updatedCart);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };


  useEffect(() => {
    if (quantity) {
      Setcount(quantity);
    }
  }, [quantity]);

  return (
    <>

           
    <div className=" w-100 d-flex justify-content-center align-items-center" style={{height:'150px',borderTop:'1px solid grey'}}>
          <div className="w-50 d-flex justify-content-center align-items-center p-2" style={{height:'100%'}}>
          <NavLink to={`/singleproduct/${id}`}>
          <div className="w-50"><img src={image} alt="" width="100px" height="110rem" />
          </div>
          </NavLink>
          
          <div className="w-75 ps-3 d-flex justify-content-center " style={{flexDirection:'column'}}>
            <h5>{title?.substring(0, 10)}...</h5>
            <p>{description?.substring(0, 13)}...</p>
            </div>
          </div>

          <div className="w-25 d-flex align-items-center" style={{justifyContent:'space-around'}}>
            <button className="btn btn-dark" onClick={decrement}>-</button>
           <button className=" btn m-2 disabled border border-dark ps-2 pe-2 rounded w-50"> {count}</button>
            <button className="btn btn-dark" onClick={increment}>+</button>
          </div>
          <h4 className="w-50 d-flex justify-content-center align-items-center ps-" style={{flexDirection:'row'}}>
            <div class=" w-25 text-secondary d-flex justify-content-center align-items-center ps-3" style={{flexDirection:'column', fontSize:'19px'}}>
              <sup className="text-dark">Price</sup>
              <span>${`${price}`}</span>
              </div>  &nbsp; &nbsp;
            <div class=" w-25 d-flex justify-content-center align-items-center ps-3"style={{flexDirection:'column'}}>
            <sup className="text-dark" style={{fontSize:'13px'}}>Total</sup>
              <span> ${Number(price.split(" ")[0]) * count}</span>
            </div>
            </h4>
          <button className="w-25 btn btn-danger" onClick={() => itemRemove()} ><i class="fa fa-trash" aria-hidden="true"></i> Remove</button>
        </div>



</>
  );
};
