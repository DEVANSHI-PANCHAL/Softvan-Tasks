import React from "react";
import { AiOutlineSync, AiOutlineDelete } from "react-icons/ai";

const ShoppingCart = ({ cartItems, onUpdateQuantity, onDeleteItem, onRefresh }) => {
  const calculateSubtotal = () => {
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return "0.00"; // or any default value you prefer
    }

    const subtotal = cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = item.quantity ? Math.min(parseInt(item.quantity, 10), 10) : 1;

      if (isNaN(itemPrice) || isNaN(itemQuantity)) {
        console.error("Invalid price or quantity for item:", item);
        return total;
      }

      return total + itemPrice * itemQuantity;
    }, 0).toFixed(2);

    return subtotal;
  };

  const handleRefresh = () => {
    // Reset the quantity to 1 for all items in the cart
    const refreshedCartItems = cartItems.map((item) => ({ ...item, quantity: 1 }));

    // Call the onRefresh prop to update the cart items
    onRefresh(refreshedCartItems);
  };

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-12 col-md-12 col-12">
            <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
            <p className="mb-5 text-center">
              <i className="text-info font-weight-bold">{cartItems.length}</i> items in your cart
            </p>
            <table className="table table-condensed table-responsive" id="shoppingCart">
              <thead>
                <tr>
                  <th style={{ width: "60%" }}>Product</th>
                  <th style={{ width: "12%" }}>Price</th>
                  <th style={{ width: "10%" }}>Quantity</th>
                  <th style={{ width: "16%" }}></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td data-th="Product">
                      <div className="row">
                        <div className="col-md-3 text-left">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid d-none d-md-block rounded mb-2 shadow"
                          />
                        </div>
                        <div className="col-md-9 text-left mt-sm-2">
                          <h4>{item.name}</h4>
                          <p className="font-weight-light">{item.brand}</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">${parseFloat(item.price).toFixed(2)}</td>
                    <td data-th="Quantity">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control form-control-lg text-center"
                          value={item.quantity}
                          onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                        />
                      </div>
                    </td>
                    <td className="actions" data-th="">
                      <div className="text-right">
                        <button
                          className="btn btn-white border-secondary bg-white btn-md mb-2"
                          onClick={handleRefresh}
                        >
                          <AiOutlineSync />
                        </button>
                        <button
                          className="btn btn-white border-secondary bg-white btn-md mb-2"
                          onClick={() => onDeleteItem(item.id)}
                        >
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="float-right text-right">
              <h4>Subtotal:</h4>
              <h1>${calculateSubtotal()}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
