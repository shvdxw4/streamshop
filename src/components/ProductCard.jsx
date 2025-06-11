import React from 'react';
import {useCart} from "../context/CartContext/CartContext"

const ProductCard = ({product}) => {
    const {dispatch} = useCart();

    const handleAddToCart = () => {
        dispatch({type: "ADD_TO_CART", payload: product});
    };

    return (
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md transition transform hover:scale-105 hover:shadow-xl">
            <img src={product.thumbnail} alt={product.title} className="w-full h-60 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-gray-300">${product.price.toFixed(2)}</p>
                <button
                    onClick={handleAddToCart}
                    className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard 