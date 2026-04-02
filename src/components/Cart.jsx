import React from 'react';

const Cart = ({ carts }) => {
// const totalPrice = carts.reduce((sum,item) => sum + item.price, 0) 
    return (
        <div className=" p-10 max-w-7xl mx-auto ">
            <h1 className='font-bold text-black'>Your Cart</h1>
            
            {carts.map((item) => {
                return (
                    <div className='py-5'>
                        <div className='flex justify-between items-center border rounded-lg p-3' key={item.id} >
                        <div className='flex'>
                            <div className='h-20 w-20'>{item.icon}</div>
                            <div>
                                <div className='font-bold text-black'>{item.name}</div>
                            <div className='text-gray-500'>${item.price.toFixed(2)} /{item.period}</div>
                            </div>
                        </div>
                        <button onClick={() => {
                            // Handle remove from cart logic
                        }}>
                            Remove
                        </button>
                    </div>
                    </div>
                )
            })}
            <div className='py-5 border-rounded-lg p-3 flex justify-between items-center'>
                {/* <div className='font-bold text-black'>Total: ${carts.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</div> */}
                <div>
                    <h3 className='font-black font-bold text-2xl'>Total:</h3>
                </div>
                <div className='font-bold text-black'>${carts.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</div>
            </div>
            <div>
                <button className='btn btn-primary text-white rounded-3xl w-full'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;