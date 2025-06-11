import {useCart} from "../context/CartContext/CartContext";
import {useState} from "react";
import CartModal from "./CartModal";

const Navbar = () => {
    const {cart} = useCart();
    const [isCartOpen, setCartOpen] = useState(false);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
             <h1 className="text-xl font-bold">StreamShop</h1>

                <button
                    onClick={() => setCartOpen(true)}
                    className="relative px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
                    >
                    🛒Cart
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {totalItems}
                    </span>
                </button>
            </nav>

            <CartModal isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
};

export default Navbar