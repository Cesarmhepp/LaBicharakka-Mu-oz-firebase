import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsFromCategory } from '../../services/Products';
import ItemListContainer from '../../components/Items/ItemListContainer';

const Category = () => {

  const [products, setProducts] = useState([])
  const { id } = useParams();

  useEffect(() => {
    let mounted = true
    if (typeof id !== 'undefined') {    
        getProductsFromCategory("MLC", id).then(items => {
            if(mounted) {
                setProducts(items.results)
            }
          })          
    }
    return () => mounted = false;

  }, [id])

  return (
    <div>     
      <ItemListContainer products={products} />
    </div>
  );
}

export default Category;
