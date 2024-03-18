import React, { useEffect, useState } from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom';
import '../Styles/Products.css'
import Footer from '../Pages/Footer';
import Loader from '../Pages/Loader';
import BackButton from './BackButton';





function Products() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage]= useState(1);
  const [paginationControl, setPaginationControl]= useState(false);
  const recordsPerPage= 12;
  const lastIndex= currentPage * recordsPerPage;
  const firstIndex= lastIndex - recordsPerPage;
  const records = filter.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(filter.length / recordsPerPage);
  const numbers = [...Array(nPage+1).keys()].slice(1); 

  const [searchTitle, setSearchTitle] = useState('');
  




  
  useEffect(() => {
    setIsLoading(true);
    setPaginationControl(false);
    fetch("http://localhost:8080/art/getAll?sort=desc").then((result) => {
      result.json().then((resp) =>{
        setData(resp)
        setFilter(resp)
        console.log(resp)
        setIsLoading(false)
        setPaginationControl(true);
      })
    })
  },[])






function nextPage() {
if (currentPage !== nPage) {
  setCurrentPage(currentPage + 1)
}
}

function changeCPage(id) {
setCurrentPage(id)
}

function prePage() {
  if(currentPage !== 1){
    setCurrentPage(currentPage-1)
  }
  
}











const filterProduct = (cat) => {
  const updatedList = data.filter((x)=>x.category === cat);
  setFilter(updatedList)
  setCurrentPage(1)
}
const authorFilterProduct = (auth) => {
  const updatedList = data.filter((x)=>x.authorName === auth);
  setFilter(updatedList)
  setCurrentPage(1)
}


 
    
  return (
    <>
    <Header />

<BackButton/>
<br />
<center> <h1>Products</h1></center>
<br />
    <div className='d-flex justify-content-center align-items-center w-100' style={{height: '10vh', overflow:'hidden'}}>
  

      <div onClick={()=>setFilter(data)} className=' flt btn d-flex align-items-center mt-4 me-3' style={{flexDirection:'row', height:'60px'}}>
        <div className=' img me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://madisoncountycourier.com/wp-content/uploads/2016/03/94arts.jpg" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>All</h4>
      </div>

      <div onClick={()=>filterProduct("fine art")} className=' flt btn d-flex align-items-center mt-4 me-3' style={{flexDirection:'row', height:'60px'}}>
        <div className=' img me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://assets.telegraphindia.com/telegraph/2022/Oct/1666424870_untitled-design-23.jpg" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>Fine Arts</h4>
      </div>
      
      <div onClick={()=>filterProduct("painting")} className=' flt p-2 ps-3 pe-3 p d-flex align-items-center mt-4 me-3' style={{flexDirection:'row', height:'60px'}}>
        <div className=' img me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://arts.mojarto.com/productImages/MA310532/primary/MA310532.jpeg" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>painting</h4>
      </div>

      <div onClick={()=>filterProduct("Sculpture art")} className=' flt p-2 ps-3 pe-3 d-flex align-items-center mt-4 me-3' style={{flexDirection:'row', height:'60px'}}>
        <div className=' img me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://images.unsplash.com/photo-1637666505754-7416ebd70cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>Sculpture</h4>
      </div>
      
      <div onClick={()=>filterProduct("Ceramic Art")} className=' flt p-2 ps-3 pe-3 d-flex align-items-center mt-4 me-3' style={{flexDirection:'row', height:'60px'}}>
        <div className=' img me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://d1nn9x4fgzyvn4.cloudfront.net/migration-slide-image/Mirage%20Lake_Wayne%20Higby.jpg" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>Ceramic art</h4>
      </div>

      <div className='searchPanel   d-flex align-items-center mt-4 me-3' style={{flexDirection:'row', height:'60px'}}>
      <input type="search" className='w-100' value={searchTitle } onChange={(e) => setSearchTitle(e.target.value)} placeholder='Search Art...' autoFocus />
      </div>

</div>



  <div className=' w-100'>

    <div className='MainArtist w-25 d-flex align-items-center pt-3' style={{flexDirection:'column', float:'left'}}>
      <br />
      <h3 className='text-center' style={{textShadow:'2px 2px 20px #000'}}>Artists</h3>

      <div onClick={()=>authorFilterProduct("Pablo Picasso")} className=' auth btn cursor-pointer d-flex align-items-center w-75 mt-4' style={{flexDirection:'row', height:'60px'}}>
        <div className=' me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEKd02e-UADD5nLoYdT0_lKmV_Cl24s2HWdQcg3CoPy6KAS-S" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>Pablo Picasso</h4>
      </div>

      <div onClick={()=>authorFilterProduct("Vincent van Gogh")} className=' auth  btn d-flex align-items-center w-75 mt-4' style={{flexDirection:'row', height:'60px'}}>
        <div className=' me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4PGyba3BR8tRfKdfHPoYo-2C6rPO8vWeTCMBo6TTfy02956e" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>Vincent van</h4>
      </div>

      <div onClick={()=>authorFilterProduct("Johannes Vermeer")} className=' auth btn d-flex align-items-center w-75 mt-4' style={{flexDirection:'row', height:'60px'}}>
        <div className=' me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://cdn.britannica.com/33/194733-050-4CF75F31/Girl-with-a-Pearl-Earring-canvas-Johannes-1665.jpg" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>Johannes</h4>
      </div>

      <div onClick={()=>authorFilterProduct("Abanindra Nath Tagore")} className=' auth btn d-flex align-items-center w-75 mt-4' style={{flexDirection:'row', height:'60px',}}>
        <div className=' me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Abanindranath_Tagore_photo.jpg/220px-Abanindranath_Tagore_photo.jpg" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>Abanindra Nath</h4>
      </div>

      <div onClick={()=>authorFilterProduct("Georgia O'Keeffe")} className=' auth btn d-flex align-items-center w-75 mt-4' style={{flexDirection:'row', height:'60px'}}>
        <div className=' me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQyOc7Z140qvxwDeRgb18k3Ln2w1gengdDgu4q5ZA9vnjneuaGWv2hgjaR2E853C6CX" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>Georgia</h4>
      </div>
      
      <div onClick={()=>authorFilterProduct("Titian")} className=' auth btn d-flex align-items-center w-75 mt-4' style={{flexDirection:'row', height:'60px'}}>
        <div className=' me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://uploads5.wikiart.org/00380/images/titian/800px-self-portrait-of-titian.jpg!Portrait.jpg" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>Titian</h4>
      </div>

      <div onClick={()=>authorFilterProduct("Wassily Kandinsky")} className=' auth btn d-flex align-items-center w-75 mt-4' style={{flexDirection:'row', height:'60px'}}>
        <div className=' img  me-3 d-flex justify-content-center align-items-center' style={{height:'100%', width:'50px', borderRadius:'100%',overflow:'hidden'}}>
          <img src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT3jisCQ4IXFf5uU-gEJG0QDMv6hpjCfz7tZCpH2Q3yKt1yYji62XM8EihSTiIQZodl" alt="Pablo Picasso" width="100" height='60rem' />
        </div>
        <h4>Wassily K.</h4>
      </div>
      

      <br />
      <br />
      <br />


    </div>


       <div className='mainDataDiv ps-5 w-75'>
       {
  isLoading ? (
    <Loader />
  ) : (
    records &&
    records
      .filter((item) => {
        if (searchTitle === "") {
          return item;
        } else if (item.title?.toLowerCase().includes(searchTitle.toLowerCase())) {
          return item;
        }
      })
      .map((item) => (
        <NavLink to={`/singleproduct/${item.id}`}>
          <div class="product-card">
            <div key={item.id} class="badge">
              {item.rating} <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="product-tumb">
              <img src={item.artImage} 
              alt="" width="500px" />
            </div>
            <div class="product-details">
              <span class="product-catagory">
                --{item.category}--
                </span>
              <h4>
                <a href="">{item.title?.substring(0, 10)}...</a>
              </h4>
              <p>{item.description?.substring(0, 90)}...</p>
              <div class="product-bottom-details">
                <div class="product-price">
                    {item.authorName?.substring(0, 13)}...
                </div>
                <div class="product-links">
                  <a href="_d">
                    <i class="fa fa-heart"></i>
                  </a>
                  <a href="_d">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      ))
  )
}
  
</div>
</div>


{paginationControl?
  <nav className='d-flex justify-content-center'>
  <ul className='pagination'>
    <li className='page-item'>
      <a href="#" className='page-link' onClick={prePage}>Prev</a>
    </li>

{
  numbers.map((n, i) => (
<li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
        <a href="#" className='page-link' onClick={()=>changeCPage(n)}>{n}</a>
        </li>
  ))}

<li className='page-item'>
      <a href="#" className='page-link' onClick={nextPage}>Next</a>
    </li>

  </ul>
</nav>
: null
}
 
 <Footer/>


    </>
  )
}

export default Products