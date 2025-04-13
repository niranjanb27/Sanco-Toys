import { useUser, useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect } from "react";
import { useUserStore } from "../context/useUserStore";

export const SyncUser = () => {
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();

  const setUserData = useUserStore((state) => state.setUserData);
  const setCart = useUserStore((state) => state.setCart);
  const setOrders = useUserStore((state) => state.setOrders);

  useEffect(() => {
    const syncUser = async () => {
      try {
        const token = await getToken();
        if (!token) return;

        // First, sync user
        const userRes = await axios.get("http://localhost:5000/api/v1/sync-user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const user = userRes.data.user;
        setUserData(user);

        console.log("User : ",user);
        // Then, fetch cart


        // this part will uncomment later 
        /*
        const cartRes = await axios.get(`http://localhost:5000/api/v1/cart/get-cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCart(cartRes.data.cart || []);

        // Then, fetch orders
        const orderRes = await axios.get(`http://localhost:5000/api/v1/order/get-user-orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(orderRes.data.orders || []);
*/
        console.log("✅ User, cart, and orders synced successfully.");
      } catch (err) {
        console.error("❌ Sync error:", err.response?.data || err.message);
      }
    };

    if (isSignedIn) {
      syncUser();
    }
  }, [isSignedIn]);

  return null;
};
