import {useCart} from "../context/CartContext/CartContext";

const CartModal = ({isOpen, onClose}) => {
    const {cart, dispatch} = useCart();

    const total = cart.reduce((acc,item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (
        <div
            className={`fixed top-0 right-0 h-full w-full max-w-sm bg-gray-900 text-white shadow-lg transform ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } transition-all duration-300 z-50`}
        >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">x</button>
            </div>

            <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
                {cart.length === 0 ? (
                    <p className="text-gray-400">🛒Your cart is empty. Start shopping!</p>
                ): (
                    cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b border-gray-700 pb-2">
                            <div>
                                <h3 className="font-medium">{item.title}</h3>
                                <div className="flex items-center space-x-2 mt-1">
                                    <button 
                                        onClick={() => dispatch({type: "DECREMENT_QUANTITY", payload: item.id})}
                                        className="bg-gray-700 px-2 rounded hover:bg-gray-600"
                                    >-</button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch({type: "INCREMENT_QUANTITY", payload: item.id})}
                                        className="bg-gray-700 px-2 rounded hover:bg-gray-600"
                                    >+</button>
                                </div>    
                            </div>

                            <div className="flex items-center space-x-2">
                            <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            <button
                                onClick={() => dispatch({type: "REMOVE_ITEM", payload: item.id})}
                                className="text-red-400 hover:text-red-600 text-lg font-bold"
                            >
                                ❌
                            </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="p-4 border-t border-gray-700">
                <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>${total}</span>
                </div>

                <button
                    onClick={() => {
                        onClose(); 
                        navigate("/checkout");
                    }}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartModal;