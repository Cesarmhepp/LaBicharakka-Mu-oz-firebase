import { useState, useEffect } from 'react';
import { getFromFirebase } from '../services/Products';
import ItemListContainer from './Items/ItemListContainer'

const Home = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    let mounted = true;
    getFromFirebase().then(items => {
      if (mounted) {
        setProducts(items)
        setTimeout(() => {
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
