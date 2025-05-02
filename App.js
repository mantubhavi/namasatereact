import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Conatiner
 *    - Restaurant Card
 *      - Img
 *      - Name of Restro, Star Rating, Cusine, Delivery Time
 * Footer
 *  - Copryright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      id: 1,
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      name: "Chinese Wok",
      avgRatings: 4.2,
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      costForTwo: 25000,
      deliveryTime: 33,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 2,
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      name: "Pizza Hut",
      avgRatings: 4.1,
      cuisines: ["Pizzas"],
      costForTwo: 35000,
      deliveryTime: 29,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 3,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1fe8039a-0a1a-41f8-8db1-f3521ba8fada_23678.jpg",
      name: "McDonald's",
      avgRatings: 3.9,
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      costForTwo: 40000,
      deliveryTime: 29,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 4,
      cloudinaryImageId: "o8t0w5gdlujpigauaflw",
      name: "Low Carb & Keto Foods",
      avgRatings: 4.4,
      cuisines: ["Healthy Food", "Keto", "Continental"],
      costForTwo: 15000,
      deliveryTime: 32,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 5,
      cloudinaryImageId: "d8d4e708a41f011361c949d44990d5e0",
      name: "Samosa Party",
      avgRatings: 4.3,
      cuisines: ["Fast Food", "Snacks", "Beverages", "Sweets", "Punjabi"],
      costForTwo: 10000,
      deliveryTime: 39,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 6,
      cloudinaryImageId: "c583da4b69d264ffe705e5918fad0e98",
      name: "Makhani Darbar",
      avgRatings: 5.0,
      cuisines: ["Kebabs", "Mughlai", "Beverages", "Desserts"],
      costForTwo: 50000,
      deliveryTime: 35,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 7,
      cloudinaryImageId: "f3cced21e2be658118713e4008f3b7f3",
      name: "Nirula's",
      avgRatings: 3.7,
      cuisines: ["Ice Cream", "Pizzas", "Fast Food", "Beverages"],
      costForTwo: 50000,
      deliveryTime: 36,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 8,
      cloudinaryImageId: "g5sfrpdo2x8pjhpk36xm",
      name: "Thalairaj Biryani",
      avgRatings: 3.9,
      cuisines: ["Andhra", "Biryani", "Hyderabadi", "Indian"],
      costForTwo: 30000,
      deliveryTime: 36,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 9,
      cloudinaryImageId: "ec780807d6fade1fc1ed97dd3acc7e2b",
      name: "FNP Cakes",
      avgRatings: 3.8,
      cuisines: ["Desserts", "Bakery", "Sweets", "Chinese", "South Indian"],
      costForTwo: 49000,
      deliveryTime: 40,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 10,
      cloudinaryImageId: "2418209798927d733a50f5d2ebcc2aee",
      name: "Starbucks Coffee",
      avgRatings: 3.9,
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      costForTwo: 40000,
      deliveryTime: 29,
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {restaurantList?.map((restro) => (
          <RestaurantCard key={restro.data.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatings,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="restro-card">
      <img
        className="restro-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt="Meghana Foods"
      />
      <h4>{name}</h4>
      <h5 class="card-title">{cuisines.join(", ")}</h5>
      <h5>{avgRatings} stars</h5>
      <h5>
        &#8377;
        {costForTwo / 100} For Two
      </h5>
      <h5>{deliveryTime} mins</h5>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
