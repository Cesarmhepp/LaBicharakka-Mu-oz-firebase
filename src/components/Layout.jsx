import { useState,useEffect } from "react"
import Footer from './Footer';
import NavBar from './NavBar';
import { Outlet } from "react-router-dom";
import { getCategories } from '../services/Products';

const Layout = () => {
    const [loading, setLoading] = useState(false);
    const [categories,setCategories]=useState([])

    useEffect(() => {
        let mounted = true
        getCategories("MLC").then(results => {
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
            <Footer mensaje="Hola Soy el footer de los 80" />
            
        </div>
    )

}

export default Layout