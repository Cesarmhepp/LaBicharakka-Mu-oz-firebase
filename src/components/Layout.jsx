import { useState,useEffect } from "react"
import Footer from './Footer';
import NavBar from './NavBar';
import { Outlet } from "react-router-dom";
import { getCategoriesFromFirebase } from "../services/Products";

const Layout = () => {
    const [categories,setCategories]=useState([])

    useEffect(() => {
        let mounted = true
        getCategoriesFromFirebase().then(results => {
          if(mounted) {
              setCategories(results)
          }
        })
        return () => mounted = false;
      }, [])
   

    return (
        <div className="App">
            <NavBar categories={categories} />
            <Outlet/>
            <Footer/>
        </div>
    )

}

export default Layout