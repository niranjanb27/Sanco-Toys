import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Truck,
  PackageCheck,
  IndianRupee,
  MapPin,
} from "lucide-react";

const statusOptions = ["processing", "shipped", "delivered", "cancelled"];

const AdminOrders = () => {
  const { getToken } = useAuth();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const token = await getToken();
    try {
      const res = await axios.get("http://localhost:5000/api/v1/order/get-all-orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data.data);
      console.log("orders : ", res.data.data);
    } catch (error) {
      console.error("Error fetching orders", error);
      toast.error("Failed to fetch orders");
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    console.log("id : ",orderId);
    console.log("status : ",newStatus);
    
    const token = await getToken();
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/order/update-order-status/${orderId}`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Order status updated!");
      fetchOrders();
    } catch (error) {
      console.error("Error updating order status", error);
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🧾 Admin Orders Dashboard
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 md:flex md:items-start gap-6 border"
            >
              {/* Products thumbnail area */}
              <div className="w-full md:w-48 flex-shrink-0">
                {order.products[0]?.product?.images?.[0] ? (
                  <img
                    src={order.products[0].product.images[0]}
                    alt="Product"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full h-32 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              {/* Info area */}
              <div className="flex-1 space-y-3 mt-4 md:mt-0">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-700">
                    <PackageCheck className="inline-block mr-2 text-blue-500" />
                    Order #{order._id.slice(-6)}
                  </h2>
                  <span
                    className={`text-xs md:text-sm px-3 py-1 rounded-full font-medium ${
                      order.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.paymentStatus.toUpperCase()}
                  </span>
                </div>

                <div className="text-sm text-gray-600">
                  <p>
                    <IndianRupee className="inline-block mr-1 text-green-500" />
                    <span className="font-medium text-gray-800">
                      ₹{order.totalAmount}
                    </span>{" "}
                    via {order.paymentMethod}
                  </p>
                  <p>
                    <MapPin className="inline-block mr-1 text-red-400" />
                    {order.shippingAddress}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Order Status
                  </label>
                  <select
                    value={order.orderStatus}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                    className="w-full md:w-64 p-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Products in this order:
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {order.products.map((prod) => (
                      <div
                        key={prod._id}
                        className="bg-gray-50 border rounded-xl p-3 w-full sm:w-56 shadow-sm"
                      >
                        <p className="font-medium text-gray-800 truncate">
                          {prod.product?.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Qty: {prod.quantity}
                        </p>
                        <p className="text-sm text-gray-600">
                          Price: ₹{prod.price}
                        </p>
                        {prod.product?.images?.[0] && (
                          <img
                            src={prod.product.images[0]}
                            alt="product"
                            className="h-24 w-full object-cover rounded-lg mt-2"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AdminOrders;
