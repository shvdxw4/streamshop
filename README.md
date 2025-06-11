# 🛍️ StreamShop

**StreamShop** is a sleek, Vite-powered e-commerce storefront inspired by modern digital marketplaces. It allows users to browse featured "stream-themed" products, manage cart quantities, and proceed to checkout — all from a smooth React UI.

> 🔗 [Live Demo](https://streamshop.vercel.app)

---

## 🚀 Tech Stack

- ⚛️ React + Vite
- 🎨 TailwindCSS
- 🛒 Context API (Global Cart State)
- 🌐 Deployed via Vercel

---

## ✨ Features

- Browse featured digital products
- Add/remove items from cart
- Increment/decrement quantity
- Real-time subtotal calculation
- Responsive design with smooth UI transitions
- Checkout simulation with form + redirect

---

## 🧠 How It Works

This project uses the **React Context API** + a custom reducer to manage global cart state. Dispatch actions update the cart dynamically as users interact.

### 🧩 Key Actions:
- `ADD_TO_CART` – Adds new item or increases quantity
- `INCREMENT_QUANTITY` – Bumps quantity of item
- `DECREMENT_QUANTITY` – Reduces quantity, removes if 0
- `REMOVE_ITEM` – Deletes item from cart
- `CLEAR_CART` – Empties cart after checkout

The **cart modal** listens for cart state updates and re-renders in real-time. The checkout process uses `useState` and `useNavigate` for form logic and redirect.

---

## 📁 Project Structure

streamshop/
│
├── public/ → Static assets
├── src/
│ ├── assets/ → App images/icons
│ ├── components/ → UI: CartModal, Navbar, ProductCard
│ ├── context/
│ │ ├── CartContext.jsx → Context Provider
│ │ └── cartReducer.js → Reducer logic for cart actions
│ ├── data/ → Product mock data
│ ├── pages/ → Home and Checkout views
│ ├── index.css → Tailwind CSS styles
│ └── main.jsx → Root file with context + router
│
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
---

## 🧪 Live Demo

[https://streamshop.vercel.app](https://streamshop.vercel.app)

Test it by:
- Adding multiple items to cart
- Adjusting quantities in real time
- Proceeding to checkout with mock form
- Watching subtotal update dynamically

---

## 🧰 Future Enhancements

- ✅ Add authentication (JWT or Firebase)
- ✅ Connect to backend (Node.js + MongoDB)
- ✅ Store user orders in database
- ✅ Real payment gateway integration (Stripe)

---

## 👨‍💻 Author

Built by **@shvdxw4**  
GitHub: [https://github.com/shvdxw4](https://github.com/shvdxw4)

> 💬 “Don’t run from the grind — automate it.”

---

