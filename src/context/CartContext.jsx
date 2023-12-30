import { createContext, useState } from "react";
import data from '../data/data';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export default function CardsProvider({ children }) {
    const [cart, setCart] = useState([]);

    const AddToCard = (id) => {
        const mydata = data.find(item => item.id === id);
        const CartItem = cart.find(item => item.id === id);

        if (CartItem) {
            // If the item is already in the cart, update its count
            const updatedCart = cart.map(item =>
                item.id === id ? { ...item, counte: item.counte + 1 } : item
            );
            setCart(updatedCart);
        } else {
            // If the item is not in the cart, add it with count 1
            const newItem = { ...mydata, counte: 1 };
            setCart(prev => [...prev, newItem]);
        }
    };
    const handledelete=(id)=>{
        setCart(cart.filter((item) => item.id !== id))
    }
    return (
        <CartContext.Provider value={{ AddToCard, cart,handledelete }}>
            {children}
        </CartContext.Provider>
    );
}

