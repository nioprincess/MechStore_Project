import "./FantasticHomeNavbar.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaSearch} from "react-icons/fa";
import { AlignLeft } from 'lucide-react';
import { MdFavoriteBorder } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import {
  Box,
  Drawer,
  List,
  ListItem,
} from "@mui/material";

function FantasticHomeNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { id: "hero", label: "Home", icon: "fas fa-home" },
    { id: "categories", label: "Categories", icon: "fas fa-home" },
    { id: "best-selling", label: "Best Selling", icon: "fas fa-images" },
    { id: "today-deals", label: "Today's Deals", icon: "fas fa-paint-brush" },
    { id: "new-arrivals", label: "New Arrivals", icon: "fas fa-info-circle" },
    { id: "contact", label: "Contact", icon: "fas fa-phone" },
  ];
  const[activeLink,setActiveLink]= useState("categories");
  const [isScrolled, setIsScrolled]= useState(false)

  const scrollToSection= (sectionId)=>{
    const element= document.getElementById(sectionId);
    if(element){
      const marginTop=140;
      const scrollToY= element.getBoundingClientRect().top+window.scrollY-marginTop;
      window.scrollTo({top:scrollToY, behavior:"smooth"});
    }
    setOpenMenu(false)
  }
  
  const determineActiveSection= ()=>{
    for(let i= 0; i<links.length;i++){
      const section= document.getElementById(links[i].id);
      if(section){
        const rect= section.getBoundingClientRect();
        if(rect.top<120 && rect.bottom >=120){
          // set the active link based on the section ID.
          setActiveLink(links[i].id);
          break;
        }
      }
    }
  }



  useEffect(()=>{
    const handleScroll= ()=>{
      if(window.scrollY>150){
        setIsScrolled(true);
      }else{
        setIsScrolled(false)
      }

      // call the functin t determine the active section while scrolling.
      determineActiveSection()
    };
    window.addEventListener("scroll", handleScroll);
    return ()=>window.removeEventListener("scroll", handleScroll);
  },[])




  return  <nav className={`navbar-container ${isScrolled&&"scrolled"}`}>
             
              <div className="toolbar-container">
                  <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="btn btn-outline-secondary mobile-menu-btn"
                    ref={menuRef}
                  >
                      <AlignLeft />
                </button>
                <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 search-box">
                  <FaSearch className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-100 outline-none w-full"
                  />
                </div>
             
                   <div className="flex items-center space-x-6 search-controls"  >
                      
                     <Link to={"sign-in"}><FaUserLarge /></Link>
                   </div>
             
                 </div>
       
          <div className="fantstic-nav-container">
        
            <ul className="links-container">
              {links.map(({ id, label, icon }) => (
                <li key={id} className="link-item">
                  <Link to={`#${id}`} className={activeLink==id?"active":""} onClick={()=>scrollToSection(id)}>
                    <i className={icon}></i> {label}
                  </Link>
                </li>
              ))}
             
            </ul>

            {/* Mobile Drawer */}
            <Drawer
              open={openMenu}
              onClose={() => setOpenMenu(false)}
              anchor="right"
              className="user-profile-drawer"
              style={{ zIndex: 12001 }}
            >
              <Box sx={{ width: 250 }} className={"mobile-drawer"}>
                <List>
                  {links.map(({ id, label, icon }) => (
                    <ListItem key={id} className="link-item">
                      
                        <Link to={"/"} className={activeLink==id?"active":""} onClick={()=>scrollToSection(id)}>
                    <i className={icon}></i> {label}
                  </Link>
                    
                    </ListItem>
                  ))}
                  <ListItem className="link-item">
                    <Link to="/sign-in">
                      <i className="fas fa-sign-in-alt"></i> Sign in
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
 
            
          </div>
      
  
  </nav>;
 
}

export default FantasticHomeNavbar;