import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductDescription, getProductDetail } from '../../services/Products';
import { getDocFromFirebase } from "../../services/Products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let mounted = true
        getDocFromFirebase(id)
            .then(item => {
                if (mounted) {
                    setProduct(item)
                }
            })
        return () => mounted = false
    }, [id])

    return (
        <>
            <div className="item-detail-container" style={{marginTop:20}}> 
                {product ?
                        <ItemDetail item={product} id={id} />
                    : null}
            </div>

        </>
    )
}

export default ItemDetailContainer