// ShoppingCart.js



const Cart = () => {
  const items = [
    { id: 1, name: "Item 1", price: 10, image: ".../../images/p1.webp" },
    { id: 2, name: "Item 2", price: 15, image: ".../../images/p3.png" },
    { id: 3, name: "Item 3", price: 20, image: ".../../images/p4.webp" },
  ];  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-md rounded-md">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-4" />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
            <button className="mt-4 bg-yellow-300 text-white px-4 py-2 rounded-md hover:bg-yellow-400">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
