import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  console.log(totalPrice);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payement successful!");
  };
  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("Item deleted!");
  };

  return (
    <div className=" p-10 max-w-7xl mx-auto ">
      <h1 className="font-bold text-black">Your Cart</h1>

      {carts.length > 0 ? (
        carts.map((item, index) => {
          return (
            <div className="py-5" key={index}>
              <div className="flex justify-between items-center border rounded-lg p-3">
                <div className="flex">
                  <div className="h-20 w-20">{item.icon}</div>
                  <div>
                    <div className="font-bold text-black">{item.name}</div>
                    <div className="text-gray-500">
                      ${item.price.toFixed(2)} /{item.period}
                    </div>
                  </div>
                </div>
                <button onClick={() => handleDelete(item)}>Remove</button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center py-10 font-black font-bold text-3xl">No items in cart</div>
      )}
      <div className="py-5 border-rounded-lg p-3 flex justify-between items-center">
        {/* <div className='font-bold text-black'>Total: ${carts.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</div> */}
        <div>
          <h3 className="font-black text-3xl">Total:</h3>
        </div>
        <div className="font-bold text-3xl text-black">${totalPrice}</div>
      </div>
      <div>
        <button
          onClick={handlePayment}
          className="btn btn-primary text-white rounded-3xl w-full"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
