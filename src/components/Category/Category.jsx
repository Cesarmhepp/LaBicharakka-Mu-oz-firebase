import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocsByCategoryFromFirebase } from '../../services/Products';
import ItemListContainer from '../../components/Items/ItemListContainer';

const Category = () => {

  const [products, setProducts] = useState([])
  const  {id}  = useParams();
  useEffect(() => {
    let mounted = true
    if (typeof id !== 'undefined') {    
      getDocsByCategoryFromFirebase(id).then(items => {
            if(mounted) {
              setProducts(items)
                console.log("log desde categoria",items)
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
