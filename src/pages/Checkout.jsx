import React, {useState} from "react";
import {useCart} from "../context/CartContext/CartContext";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Checkout = () => {
    const {cart, dispatch} = useCart();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
    });

    const [success, setSuccess] = useState(false);
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({type: "CLEAR_CART"});

        toast.success("🎉Order placed successfully!");

        setSuccess(true);

        setTimeout(() => {
            navigate("/");
        }, 3000);
    };

    const total = cart
        .reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    if (success) {
        return (
            <div className="max-w-xl mx-auto mt-20 p-6 bg-green-900 text-white text-center rounded shadow">
                <h2 className="text-2xl font-bold mb-2">Order Confirmed✅</h2>
                <p className="text-green-300">Thank you for your purchase!</p>
                <p className="text-sm text-gray-300 mt-2">Redirecting to home...</p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-900 text-white rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>

            <div className="space-y-4 mb-6">
                {cart.map((item) => (
                    <div key={item.id} className="flex justify-between border-b border-gray-700 pb-2">
                        <div>
                            <h3 className="font-medium">{item.title}</h3>
                            <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
                <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>${total}</span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    required
                />
                <textarea
                    name="address"
                    placeholder="Shipping Address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transiition text-white p-2 rounded">
                        Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout