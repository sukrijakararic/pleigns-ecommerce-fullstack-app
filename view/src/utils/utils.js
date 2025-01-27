export const GOOGLESERVERURL = "/api/google";

export const addUser = async (user) => {
  try {
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

export const login = async (user) => {
  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await fetch("/api/users/loggedIn");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch("/api/products/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};

export const addToCart = async (productId, qty) => {
  try {
    const response = await fetch("/api/cart/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, qty }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

export const getCart = async () => {
  try {
    const response = await fetch("/api/cart/myCart");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting cart:", error);
    throw error;
  }
};

export const removeFromCart = async (productId) => {
  try {
    const response = await fetch("/api/cart/deleteItemFromCart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};

export const checkout = async () => {
  try {
    const response = await fetch("/api/cart/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    return data;
  } catch (err) {
    console.log("Error:", err);
    throw err;
  }
};

export const getOrders = async () => {
  try {
    const response = await fetch("/api/orders/myOrders");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting orders:", error);
    throw error;
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const response = await fetch("/api/orders/deleteOrder", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
};

export const viewOrderItems = async (orderId) => {
  try {
    const response = await fetch("/api/orders/viewOrderItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting order items:", error);
    throw error;
  }
};
