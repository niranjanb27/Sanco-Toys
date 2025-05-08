const OrderSummary = ({ cart }) => {
    const subtotal = cart.products.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  
    const shipping = 40; // Or dynamic
    const total = subtotal + shipping;
  
    return (
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-bold">Order Summary</h2>
  
        <ul className="divide-y divide-gray-200">
          {cart.products.map((item, index) => (
            <li key={index} className="py-2 flex justify-between">
              <div>
                {item.product.name} × {item.quantity}
              </div>
              <div>₹{item.product.price * item.quantity}</div>
            </li>
          ))}
        </ul>
  
        <div className="pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default OrderSummary;
  