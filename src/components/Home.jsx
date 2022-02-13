import { useState, useEffect } from 'react';
import { getFromFirebase } from '../services/Products';
import ItemListContainer from './Items/ItemListContainer'

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false);

  /* 
    useEffect(() => {
      let mounted = true;
      setLoading(true);
      getFromFirebase();
      getProductsFromCategory("MLC", "MLC1055").then(items => {
        if (mounted) {
          console.log(items.results)
          setProducts(items.results)
          setTimeout(() => {
            setLoading(false)
          }, 3000);
        }
      })
      return () => mounted = false;
    }, []) */


  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getFromFirebase().then(items => {
      if (mounted) {
        setProducts(items)
        setTimeout(() => {
          setLoading(false);
        }, 3000)
      }
    })
    return () => { mounted = false; }
  }, [])

  return (
    <div>
      <ItemListContainer products={products} />
    </div>
  );
}

export default Home;
