import React,{useState, useEffect, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'   
import '../Styles/SingleProduct.css'
import Footer from '../Pages/Footer';
import ReactImageMagnify from 'react-image-magnify';
import { CartContext } from "../ContextApi/CartProvider";
import Loader from '../Pages/Loader';
import Swal from 'sweetalert2'
import BackButton from './BackButton';




function SingleProduct() {

  const [isLoading, setIsLoading] = useState(false);
  const[product,setProduct] = useState([]);
  const[products,setProducts] = useState([]);
  const[reeview,setReeview] = useState(true);
  const {id} = useParams();
  const { cart, setCart } = useContext(CartContext);
   const[show, setShow] = useState(false);


  useEffect(() => {
    fetchImage();
  }, []);



const fetchImage = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:8080/art/getAll/${id}`);
      const data = await response.json();
      setProducts(data.artImage);
      setProduct(data);
      setIsLoading(false) 
    } catch (error) {
      console.log('Error fetching image from API:', error);
    }
  };


  const handleCart = (product, redirect) => {
    // console.log(localStorage.getItem('cart')  )
    // const cart = JSON.parse(localStorage.getItem('cart')  || "[]");
   

    const isProductExist = cart.find((item) => item.id === product.id);
    console.log(id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      setCart((prev) => [...prev, updatedCart]);
    } else {
      const data = [...cart, { ...product, quantity: 1 }];
      console.log("data : ", data);
      setCart(data);
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Added to Cart',
      showConfirmButton: false,
      timer: 1500
    })
    if (redirect) {
      // navigate(`/products/${id}`)
    }
  };

  function reeviewHandle() {
    setReeview(false);
  }

  function descriptionHandle() {
    setReeview(true);
  }



  return (
    <>

<Header />
{
            show?
            <div className='a-mainProfileContainer'>
            <div class="a-card">
                    <div class="a-cover-photo">
                        <img src={product.authorImage} class="a-profile" />
                    </div>
                    <h3 class="a-profile-name">{product.authorName}</h3>
                    <h4 class="a-about"> <span>{product.authorBirth} - {product.authorDeath}</span> </h4>
                    <p class="a-about">{product.authorDescription}</p>
                    <button class="btn w-75 btn-lg"> <a href={product.seeMoreAuthor} target="blank">See More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                    <button class="btn w-75" onClick={()=>setShow(false)}>Go back <i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                    <div class="icons">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                    </div>
                </div>
            
                </div>
                        :null
                    }
   
   {
  isLoading? 
  
<Loader/>

:

<div>
<BackButton/>
<div class="pd-wrap ">
		<div class="container ">
	        <div class="heading-section ">
	            <h2>Product Details</h2>
              <br />
	        </div>
          
	        <div class="row">
	        	<div class="col-md-6 ">
	        		<div  class="leftDiv w-50 ">
						<div class=" d-flex leftDiv container ">
              
            {product && (
  <ReactImageMagnify {...{
    smallImage: {
        alt: 'Image not available',
        isFluidWidth: true,
        src:products ,
    },
    largeImage: {
        src: products ,
        width: 950,
        height: 1550
    }
}} />
)}
						</div>
					
					</div>
	        	</div>
	        	<div class="col-md-6">
	        		<div class="product-dtl">
        				<div class="product-info">
                  <p style={{textTransform:'capitalize'}}>--{product.category}--</p>
		        			<div class="product-name"><b>{product.title}</b></div>
		        			<div class="reviews-counter">
								<div class="rate">
								    <input type="radio" id="star5" name="rate" value="5" checked />
								    <label for="star5" title="text">5 stars</label>
								    <input type="radio" id="star4" name="rate" value="4" checked />
								    <label for="star4" title="text">4 stars</label>
								    <input type="radio" id="star3" name="rate" value="3" checked />
								    <label for="star3" title="text">3 stars</label>
								    <input type="radio" id="star2" name="rate" value="2" />
								    <label for="star2" title="text">2 stars</label>
								    <input type="radio" id="star1" name="rate" value="1" />
								    <label for="star1" title="text">1 star</label>
								  </div>
								<span>548 Reviews</span>
							</div>
		        			<div class="product-price-discount"><span>${product.salePrice}</span><span class="line-through">${product.originalPrice}</span> &nbsp; <b className='bg-warning p-2' style={{fontSize:'18px'}}> 
                  {Math.ceil(100-(product.salePrice*100)/product.originalPrice)
                  }% Off
                  </b></div>
		        		</div>
	        			<p>{product.description} A visual object or experience consciously created through an expression of skill or imagination. The term art encompasses diverse media such as painting, sculpture, printmaking, drawing, decorative arts, photography, and installation.</p>
	        			<div class="row">
	        				<div class="col-md-6">
	        					<label for="size">Size</label>
								<select id="size" name="size" class="form-control">
									<option>S</option>
									<option>M</option>
									<option>L</option>
								</select>
	        				</div>
	        				<div class="col-md-6">
	        					<label for="color">Frame</label>
								<select id="color" name="color" class="form-control">
									<option>Blue</option>
									<option>Green</option>
									<option>Red</option>
								</select>
	        				</div>
	        			</div>
	        			<div class="product-count">
	        				<label for="size">Quantity</label>
	        				<form action="#" class="display-flex">
							    <div class="qtyminus">-</div>
							    <input type="text" name="quantity" value="1" class="qty" />
							    <div class="qtyplus">+</div>
							</form>
							<button class="round-black-btn" onClick={() => handleCart(product)}>Add to Cart</button>
							<Link to="/shipping"><button class="round-white-btn ms-3 buy">Buy Now</button></Link>
	        			</div>
                <br />
                <h5 className='text-warning'  onClick={()=>setShow(true)} style={{cursor:'pointer'}}> <span className='text-dark'>Artist:-</span> {product.authorName} <i class="fa fa-angle-double-right" aria-hidden="true"></i></h5>
	        		</div>
	        	</div>
	        </div>
	        <div class="product-info-tabs">
		        <ul class="nav nav-tabs" id="myTab" role="tablist">
				  	<li class="nav-item">
				    	<div class="nav-link"onClick={descriptionHandle} style={{cursor:'pointer'}}>Description</div>
				  	</li>
				  	<li class="nav-item">
				    	<div class="nav-link" onClick={reeviewHandle} style={{cursor:'pointer'}}>Reviews (0)</div>
				  	</li>
				</ul>
				<div class="tab-content" id="myTabContent">

{
  reeview?
  				  	<div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
				  		{product.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
				  	</div>
            : 
     
            <div div class="">
              <br />
            <div class="review-heading">REVIEWS</div>
            <p class="mb-20">There are no reviews yet.</p>
            <form class="review-form">
                <div class="form-group">
                  <label>Your rating</label>
                  <div class="reviews-counter">
                <div class="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                </div>
              </div>
            </div>
                <div class="form-group">
                  <label>Your message</label>
                  <textarea class="form-control" rows="10"></textarea>
                </div>
                <br />
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" name="" class="form-control" placeholder="Name*" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" name="" class="form-control" placeholder="Email Id*" />
                    </div>
                  </div>
                </div>
                <button class="round-black-btn">Submit Review</button>
              </form>
              </div>
          
}
            
	


				</div>
			</div>
			
			<div style={{textAlign:'center', fontSize:'14px', paddingBottom:'20px'}}>Get free icon packs for your next project at <span style={{color:'#ff5e63', fontWeight:'bold',cursor:'pointer'}}><Link to="/products">show more</Link></span></div>
		</div>
	</div>
</div>
}





        <Footer/>
  
    
    </>
    
  )
};



export default SingleProduct