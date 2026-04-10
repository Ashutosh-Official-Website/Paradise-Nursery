import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();
    
    // Calculate total quantity for the navbar icon
    const cartItems = useSelector(state => state.cart.items);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene.", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes mold spores from the air.", cost: "$18" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283036_1280.jpg", description: "Purifies air and has medicinal uses.", cost: "$14" },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity to the indoor air.", cost: "$20" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Easy to care for and very effective.", cost: "$17" }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", description: "Calming scent, used in aromatherapy.", cost: "$20" },
                { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating aroma, used in cooking.", cost: "$15" },
                { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/18/20/mint-1126282_1280.jpg", description: "Refreshing scent, great for teas.", cost: "$10" },
                { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/lemon-balm-4480134_1280.jpg", description: "Citrusy scent, relieves stress.", cost: "$14" },
                { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2017/07/17/17/34/jasmine-2513115_1280.jpg", description: "Sweet fragrance, improves sleep quality.", cost: "$22" },
                { name: "Scented Geranium", image: "https://cdn.pixabay.com/photo/2018/06/10/20/55/pelargonium-3467241_1280.jpg", description: "Available in many floral scents.", cost: "$16" }
            ]
        },
        {
            category: "Low Maintenance",
            plants: [
                { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361", description: "Thrives in low light and neglect.", cost: "$25" },
                { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/panting-3816941_1280.jpg", description: "Fast-growing vine, very hardy.", cost: "$10" },
                { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2016/06/18/07/06/succulent-1464610_1280.jpg", description: "Symbol of good luck and prosperity.", cost: "$15" },
                { name: "Succulent", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cactus-1846147_1280.jpg", description: "Requires very little water.", cost: "$12" },
                { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aspidistra-482866_1280.jpg", description: "Hardly ever dies, even in deep shade.", cost: "$20" },
                { name: "Aglaonema", image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482866_1280.jpg", description: "Tolerates low light and dry air.", cost: "$18" }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true,
        }));
    };

    return (
        <div>
            {/* Task 6 Navbar Implementation */}
            <nav className="navbar">
                <div className="nav-logo" onClick={() => setShowCart(false)}>Paradise Nursery</div>
                <div className="nav-links">
                    <a href="#" onClick={() => setShowCart(false)}>Home</a>
                    <a href="#" onClick={() => setShowCart(false)}>Plants</a>
                    <a href="#" onClick={() => setShowCart(true)}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-count">{totalQuantity}</span>
                    </a>
                </div>
            </nav>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2 className="category-title">{category.category}</h2>
                            <div className="plants-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="plant-card" key={plantIndex}>
                                        <img src={plant.image} alt={plant.name} className="plant-image" />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p className="plant-cost">{plant.cost}</p>
                                        <button 
                                            className="add-to-cart-btn"
                                            disabled={addedToCart[plant.name]}
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}

export default ProductList;
