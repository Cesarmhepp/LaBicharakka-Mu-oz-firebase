import { useState, createContext } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const cartItemsQnt = () => {
        var qty = 0;
        cartItems.map((item) => (
            qty = qty + item.qty
        ))

        return qty
    }

    const totalPay = () => {

        let totalPay = 0;
        cartItems.map((item) => (
            totalPay = totalPay + item.qty * item.price
        ))

        return totalPay
    }

    const addItem = (product, qty) => {
        product.qty = qty
        var isAlreadyIn = false;

        for (let i = 0; i < cartItems.length; i++) {
            if (qty > 0 && qty !== null) {
                if (cartItems[i].id === product.id) {
                    isAlreadyIn = true;
                    break;
                }
            }
        }

        isAlreadyIn ? alert("El articulo ya esta en el carrito") : setCartItems([...cartItems, product])
    }

    const removeItem = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id))
    }

    const clear = () => {
        setCartItems([]);
    }

    const isInCart = (product) => {
        let isAlreadyIn = false;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === product.id) {
                isAlreadyIn = true;
                break;
            }
        }

        return isAlreadyIn
    }


    return (
        <CartContext.Provider value={{ cartItems, cartItemsQnt, addItem, removeItem, clear, isInCart, totalPay }}>
            {children}
        </CartContext.Provider>
    )
}

