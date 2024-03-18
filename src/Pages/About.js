import React from 'react'
import Header from './Header'
import '../Styles/About.css'
import Footer from './Footer'

function About() {
  return (
    <>
    <Header/>



    <strong><p style={{fontSize:'14px',textAlign:'center',backgroundColor:'BurlyWood',color:'black',paddingTop:'10px',paddingBottom:'10px',marginTop:'10px',marginBottom:'20px'}}>Notes: You can download unlimited images of Visual art by clicking on given link: <a href="https://unsplash.com/s/photos/visual-art" target="_blank">Visual Art Gallery</a> ( Click to open Link )</p></strong>  


<div className='wrapper'><i class="bx bx-info-circle" style={{fontSize:'40px',color:"blue"}}></i><h1>&nbsp;About Us</h1></div>

<br />

    <section id="about" class="about">
      <div class="container-fluid">


        <div class="row">
          <div class=" pt-5 col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            <img src="https://images.hdqwalls.com/download/girl-painting-abstract-art-img-1280x2120.jpg" alt="art" width='100%' />
          </div>

          <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>The Birth Of Virtual Art (The 1990s)</h3>
            <p>During the 1990s, when artists managed to master the Internet, technology, and holography – visual art began to establish itself. The first virtual reality installation (“The Tunnel Under the Atlantic,” 1995) was made by Maurice Benayoun, and it was a televisual installation that created a link between the Pompidou Centre in Paris and the Contemporary Art Museum in Montreal.</p>

            <div class="icon-box">
              <div class="icon"><i class="fa fa-gg" aria-hidden="true"></i></div>
              <h4 class="title"><a href="https://www.arttouchesart.com/visual-art-in-the-21st-century" target='blank'>Virtual Art And The 21st Century</a></h4>
              <p class="description">By taking a look at the virtual art pieces created in the last few years, we can see that they greatly vary in approaches and styles. That proves that today’s virtual artists have so many more possibilities than their artistic predecessors. </p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="fa fa-modx" aria-hidden="true"></i></div>
              <h4 class="title"><a href="https://www.govtech.com/education/the-visual-arts-and-technology.html" target='blank'>Virtual Art And Technology   </a></h4>
              <p class="description">Technology has immensely improved since the 1990s — especially VR technology. The times of electronic vests and wires are long gone, and all you need to enter the world of virtual art from the comfort of your home is a pair of VR goggles and a smartphone.</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="fa fa-opencart" aria-hidden="true"></i></div>
              <h4 class="title"><a href="https://www.widewalls.ch/magazine/virtual-reality-art-vr" target='blank'>The Future Of VR And Virtual Art</a></h4>
              <p class="description">The future of virtual art depends on the further development and innovations of electronic components that will become available to artists. The wave of virtual art in the 1990s instantly gained immediate attention, and installations such as Char Davies’ “Osmose” was a groundbreaking masterpiece .</p>
            </div>
            <div class="icon-box">
              <div class="icon"><i class="fa fa-yelp" aria-hidden="true"></i></div>
              <h4 class="title"><a href="https://www.britannica.com/topic/Virtual-World-Entertainment" target='blank'>In virtual worlds and entertainment</a></h4>
              <p class="description">Virtual art can be seen in worlds like Second Life, and Inworldz virtual environments in which anything is possible to the user, who is represented by an avatar. In the virtual world, the avatar's abilities ranges from ordinary walking to flying.</p>
            </div>
            <div class="icon-box">
              <div class="icon"><i class="fa fa-openid" aria-hidden="true"></i></div>
              <h4 class="title"><a href="https://marspandaworld.medium.com/the-explosive-convergence-of-art-tech-8492725fb29f" target='blank'>Convergence Of Art And Technology</a></h4>
              <p class="description">Virtual art emerges from those illusionist art created in ancient Pompeii to more recent genres, such as immersive cinema, Kinetic art, and Op Art, that often explore virtual movement, colors, light sounds, vibrations and more, that reside in the realm of experiential elements of art.</p>
            </div>
            <div class="icon-box">
              <div class="icon"><i class="fa fa-ravelry" aria-hidden="true"></i></div>
              <h4 class="title"><a href="https://www.artdex.com/the-benefits-of-virtual-museums-2/" target='blank'>Benefits Of Virtual Galleries</a></h4>
              <p class="description">Running an art gallery can be both challenging and rewarding. Holding events, galas and exhibitions is an exciting part of building a reputation within the art community, and you can enjoy the complete freedom of choosing the artist and artwork you want that is an expression of your creative.</p>
            </div>

          </div>
        </div>

      </div>
    </section>

<br /><br />

  <Footer/>





    </>


  )
}

export default About