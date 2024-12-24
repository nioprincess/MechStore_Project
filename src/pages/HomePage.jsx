import Sidebar from "../components/Sidebar"
import Card from "../components/Card"
import { BsBag, BsTruck, BsCart4 } from "react-icons/bs";
import FantasticHomeNavbar from "../components/FantasticHomeNavbar/FantasticHomeNavbar"
import Categories from "../components/Categories/Categories"
import NewArrivals from "../components/NewArrivals/NewArrivals"
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Footer from "../components/Footer";
function HomePage() {
  return  <>
          <section id="header">
              <FantasticHomeNavbar/>
          </section>

          <div className="main-container ">
              <div id="hero" className="flex justify-between">
                  
                   <HeroCarousel/>
              </div>
              <section id="categories">
              <Categories/>
              </section>

              <section id="today-deals">
               

              </section>
              <section id="new-arrivals">
                <NewArrivals/>

              </section>
              <section id="footer">
                <Footer/>
              </section>
          </div>
           
       
        
  
  </>
}

export default HomePage