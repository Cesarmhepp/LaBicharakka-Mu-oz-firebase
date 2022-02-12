import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductDescription, getProductDetail } from '../../services/Products';
import { CartProvider } from "../Context/CartContext";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let mounted = true
        Promise.all([getProductDetail(id), getProductDescription(id)])
            .then(results => {
                console.log("Mostrando resultados ", results)
                let item = results[0]
                item.description = results[1].plain_text
                if (mounted) {
                    setProduct(item)
                }
            })
        return () => mounted = false
    }, [id])

    return (
        <>
            <div className="item-detail-container">
                {product ?
                        <ItemDetail item={product} />

                    : null}
            </div>

        </>
    )
}

export default ItemDetailContainer